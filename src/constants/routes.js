import { getLanguage } from 'i18n/translate';

export const ROUTER_PATHS = {
  home: '/',
  login: '/:lang/login.aspx',
  shopping: '/:lang/shopping/:gender/:category/items.aspx',
  product: '/:lang/shopping/:gender/:productid.aspx',
  ui: '/ui'
};

export const linkToHome = () => ROUTER_PATHS.home;
export const linkToUi = () => ROUTER_PATHS.ui;

export const linkToLogin = (lang='') => {
  lang = lang || getLanguage();
  return `/${lang}/login`;
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

export const linkToProduct = (gender, productName, productId, lang='') => {
  lang = lang || getLanguage();

  let productPath = `${productName}-item-${productId}`;

  // lower case all path and replace all white spaces by "-"
  productPath = productPath.toLowerCase().replace(/\s/g, '-');

  // remove all characters except numbers (0-9), letters (a-z or A-Z) and "-"
  // https://stackoverflow.com/questions/9364400/remove-not-alphanumeric-characters-from-string-having-trouble-with-the-char
  productPath = productPath.replace(/[^0-9a-z-]/gi, '')

  return `/${lang}/shopping/${gender}/${productPath}.aspx`;
};
