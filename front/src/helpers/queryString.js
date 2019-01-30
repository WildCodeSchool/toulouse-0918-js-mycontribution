export const fromQueryString = queryString =>
  queryString
    .substr(1)
    .split('&')
    .reduce((carry, segment) => {
      const [key, value] = segment.split('=');
      return { ...carry, [key]: value };
    }, {});

export const toQueryString = obj => Object.keys(obj)
.map(key => `${key}=${encodeURIComponent(obj[key])}`)
.join('&');

