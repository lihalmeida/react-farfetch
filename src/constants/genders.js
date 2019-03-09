export const GENDER = {
  women: 'women',
  men: 'men',
  kids: 'kids'
};

export const toApiParameter = (gender) => {
  gender = gender || '';

  const first = gender[0].toUpperCase();
  const rest = gender.substr(1).toLowerCase();

  return first + rest;
};
