import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Pagination } from 'reactstrap';
import { fromQueryString, toQueryString } from '../helpers/queryString';
import makeLinks from '../components/makeLinks';

const translateQueryParams = routerQuery => {
  const { page, search } = fromQueryString(routerQuery);
  const apiQuery = {};
  if (search) {
    apiQuery.search = search;
  }
  if (page) {
    const pageNum = Number(page);
    if (pageNum > 1) {
      apiQuery.page = pageNum - 1;
    }
  }
  return apiQuery;
}

const extractAxiosRes = res => {
  const totalPagesHeader = res.headers['x-total-pages'];
  const output = {
    items: res.data
  };
  if(totalPagesHeader) {
    output.totalPages = Number(totalPagesHeader);
  }
  return output;
}

const withPagination = WrappedComponent => class extends Component {
  super(props) {
    constructor(props)
    this.state = {
      totalPages: 0,
    }
  }

  fetchData() {
    const { search } = this.props.location;
    const params = translateQueryParams(search);
    const { request, success, failure, apiPath } = this.props;
    const queryString = Object.keys(params).length === 0
      ? '' : ('?' + toQueryString(params));
    request();
    axios.get(`${apiPath}${queryString}`)
      .then(extractAxiosRes)
      .then(({ items, totalPages }) => {
        if (totalPages) {
          this.setState({ totalPages });
        }
        return success(items);
      })
      .catch(error => failure(error));
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search === this.props.location.search) {
      return;
    }
    this.fetchData();
  }

  makeLinks() {
    const {
      location: { search }, match: { url }
    } = this.props;
    const { state } = this;
    const totalPages = state && state.totalPages
    const { page } = fromQueryString(search);
    const current = page ? Number(page) : 1;
    return makeLinks(url, totalPages, current, search);
  }

  render() {
    const pageLinks = this.makeLinks();
    return (
      <Fragment>
        <WrappedComponent {...this.props} />
        <Pagination
          className="ContributeursPagination d-flex justify-content-center"
          aria-label="Page navigation example"
        >
          {pageLinks}
        </Pagination>
      </Fragment>
    );
  }
};

export default withPagination;