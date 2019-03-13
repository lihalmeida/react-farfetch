import axios from 'axios';
import { API_URL } from 'constants/services';
import { getLanguage } from 'i18n/translate';
import { toApiParameter } from 'constants/genders';

// key for product page: 'window['__initialState_slice-pdp__']'
// key for search page: 'window['__initialState_slice-listing__']'
const extractDataFromProductPage = (html, key) => {
  let pos;
  let data;

  // remove everything until the start of the stringified data (present in window with javascript)
  pos = html.indexOf(key);
  html = html.substr(pos);

  // then remove the whole line, until the first </script> is found
  pos = html.indexOf('</script>');
  html = html.substr(0, pos);

  // remove the starting part of the code, keeping only the data object
  html = html.replace(`${key} = `, '')

  try {
    data = JSON.parse(html);
  } catch (err) {
    data = null;
  }

  return data;
};

// returns html
export const getSearchResults = (query, lang='') => {
  lang = lang || getLanguage();

  return axios({
    method: 'get',
    url: `${API_URL}/${lang}/plpslice/listing-api/products-facets`,
    params: {
      q: query.q,
      page: query.page,
      view: query.view,
      sort: query.sort,
      pagetype: 'Search',
      gender: toApiParameter(query.gender),
      pricetype: 'FullPrice',
      'c-category': query.category
    }
  })
  .then((response) => response.data);
}

// returns html
export const getProductDetails = (query, lang='') => {
  lang = lang || getLanguage();

  return axios({
    method: 'get',
    url: `${API_URL}/${lang}/shopping/${query.gender}/${query.productFullId}.aspx`,
    params: {
      storeid: query.storeid
    }
  })
  .then((response) => {
    const data = extractDataFromProductPage(response.data, 'window[\'__initialState_slice-pdp__\']');

    if (!data) {
      throw new Error('Failed to fetch product details.')
    }

    return data;
  });
}

// returns json
export const getShoppingProducts = (query, lang='') => {
  lang = lang || getLanguage();

  return axios({
    method: 'get',
    url: `${API_URL}/${lang}/plpslice/listing-api/products-facets`,
    params: {
      page: query.page,
      view: query.view,
      sort: query.sort,
      pagetype: 'Shopping',
      gender: toApiParameter(query.gender),
      pricetype: 'FullPrice',
      'c-category': query.category
    }
  })
  .then((response) => response.data);
};


window.getSearchResults = getSearchResults;
