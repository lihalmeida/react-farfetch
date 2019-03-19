import enLabels from './en.json';
import ptLabels from './pt.json';

let lang;
let translations;

export const LANGUAGES = {
  en: 'en',
  pt: 'pt'
}

export const getLanguage = () => {
  return lang;
};

export const setLanguage = (newLang) => {
  lang = newLang;
  translations = newLang === LANGUAGES.pt
    ? ptLabels
    : enLabels;
};

export const translate = (key) => {
  return translations[key] || enLabels[key];
};

// define initial language
setLanguage(LANGUAGES.pt);
