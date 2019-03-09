import { getLanguage } from 'i18n/translate'

export const ROUTER_PATHS = {
  home: '/',
  login: '/:lang/login',
  shoppingGenderHome: '/:lang/shopping/:gender/items.aspx',
  shopping: '/:lang/shopping/:gender/:category/items.aspx',
  product: ':lang/shopping/:gender/:productid',
  ui: '/ui'
};

export const GENDER = {
  women: 'women',
  men: 'men',
  kids: 'kids'
};

export const linkToHome = () => ROUTER_PATHS.home;
export const linkToUi = () => ROUTER_PATHS.ui;

export const linkToLogin = (lang='') => {
  lang = lang || getLanguage();
  return `${lang}/login`;
};

export const linkToShopping = (gender, category='', lang='') => {
  lang = lang || getLanguage();
  let url = `/${lang}/shopping/${gender}`;

  if (category) {
    url += `/${category}`;
  }

  return `${url}/items.aspx`;
};

export const linkToProduct = (gender, productId, lang='') => {
  lang = lang || getLanguage();
  return `/${lang}/shopping/${gender}/${productId}`;
};
