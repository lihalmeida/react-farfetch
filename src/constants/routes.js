import { getLanguage } from 'i18n/translate';

export const ROUTER_PATHS = {
  home: '/',
  login: '/:lang/login.aspx',
  shopping: '/:lang/shopping/:gender/:category/items.aspx',
  search: '/:lang/shopping/:gender/:category/items.aspx?q=:q',
  product: '/:lang/shopping/:gender/:productid',
  ui: '/ui'
};

export const linkToHome = () => ROUTER_PATHS.home;
export const linkToUi = () => ROUTER_PATHS.ui;

export const linkToLogin = (lang='') => {
  lang = lang || getLanguage();
  return `${lang}/login`;
};

export const linkToShopping = (gender, category='', lang='', queryOpts = {}) => {
  lang = lang || getLanguage();
  let url = `/${lang}/shopping/${gender}`;

  if (category) {
    url += `/${category}`;
  }

  url = `${url}/items.aspx`;

  const queryParams = [];

  if (queryOpts.page) {
    queryParams.push(`page=${encodeURIComponent(queryOpts.page)}`);
  }

  if (queryOpts.view) {
    queryParams.push(`view=${encodeURIComponent(queryOpts.view)}`);
  }

  if (queryOpts.sort) {
    queryParams.push(`sort=${encodeURIComponent(queryOpts.sort)}`);
  }

  if (queryParams.length) {
    url += `?${queryParams.join('&')}`;
  }

  return url;
};

export const linkToSearch = (querySearch, gender, category='', lang='', queryOpts = {}) => {
  lang = lang || getLanguage();
  let url = `/${lang}/shopping/${gender}`;

  if (category) {
    url += `/${category}`;
  } else {
    url += `/search`;
  }

  url = `${url}/items.aspx`;

  const queryParams = [];

  if (queryOpts.page) {
    queryParams.push(`page=${encodeURIComponent(queryOpts.page)}`);
  }

  if (queryOpts.view) {
    queryParams.push(`view=${encodeURIComponent(queryOpts.view)}`);
  }

  if (queryOpts.sort) {
    queryParams.push(`sort=${encodeURIComponent(queryOpts.sort)}`);
  }

  if (querySearch) {
    queryParams.push(`q=${encodeURIComponent(querySearch)}`);
  }

  if (queryParams.length) {
    url += `?${queryParams.join('&')}`;
  }

  return url;
};

export const linkToProduct = (gender, productName, productId, lang='') => {
  lang = lang || getLanguage();

  const productPath = `${productName}-item-${productId}`.toLowerCase().replace(/\s/g, '-');

  return `/${lang}/shopping/${gender}/${productPath}.aspx`;
};
