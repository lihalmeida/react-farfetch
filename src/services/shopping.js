import { API_URL } from 'constants/services';
import { getLanguage } from 'i18n/translate'


export const getShoppingProducts = (query, lang='') => {
  lang = lang || getLanguage();

  const {
    page,
    view,
    sort,
    pagetype,
    gender,
    pricetype,
    category
  } = query;
  let url = `${API_URL}/${lang}/plpslice/listing-api/products-facets?`;
  const params = [];

  if (page !== undefined) { params.push(`page=${page}`); }
  if (view !== undefined) { params.push(`view=${view}`); }
  if (sort !== undefined) { params.push(`sort=${sort}`); }
  if (pagetype !== undefined) { params.push(`pagetype=${pagetype}`); }
  if (gender !== undefined) { params.push(`gender=${gender}`); }
  if (pricetype !== undefined) { params.push(`pricetype=${pricetype}`); }
  if (category !== undefined) { params.push(`c-category=${category}`); }

  url += params.join('&');

  return fetch(url)
    .then(response => response.json())
};
