import React from 'react';
import { Link } from 'react-router-dom';
import { PaginationItem, PaginationLink } from 'reactstrap';
import { fromQueryString, toQueryString } from '../helpers/queryString';

const getHref = (baseUrl, index, search) => {
  const query = {}
  if (search) {
    query.search = search;
  }
  if (index > 0) {
    query.page = index + 1;
  }
  const qs = '?' + toQueryString(query);
  return `${baseUrl}${qs}`;
}

const getLink = (baseUrl, index, active, term) => (
  <PaginationLink
    tag={Link}
    to={getHref(baseUrl, index, term)}
    className={active && 'active'}
  >
    { index + 1 }
  </PaginationLink>
)

const makeLinks = (baseUrl, pages, current, search) => {
  if (!pages) {
    return [];
  }
  const qs = search ? fromQueryString(search) : {}
  return new Array(pages)
    .fill(0)
    .map((nop, index) => (
      <PaginationItem>
        {getLink(baseUrl, index, current === index + 1, qs.search)}
      </PaginationItem>
    ));
};

export default makeLinks;
