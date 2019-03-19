import {
  linkToLogin,
  linkToHome,
  linkToUi,
  linkToShopping,
  linkToSearch,
  linkToProduct
} from '../routes';

// .toBe           // expect(222).toBe(222)
// .toEqual        // expect({ a: 1, b: 2 }).toEqual({ b: 2, a: 1 })
// .toMatchObject  // expect({ a: 1, b: 2, c: 3, d: 4 }).toMatchObject({ c: 3, a: 1 })

jest.mock('i18n/translate', () => {
  return {
    getLanguage: () => 'en'
  };
});

describe('linkToHome', () => {
  it('should get link to home page', () => {
    const url = linkToHome();
    expect(url).toBe('/');
  });
});

describe('linkToUi', () => {
  it('should get link to components ui page', () => {
    const url = linkToUi();
    expect(url).toBe('/ui');
  });
});

describe('linkToLogin', () => {
  it('should get link for login page (default language)', () => {
    const url = linkToLogin();
    expect(url).toBe('/en/login');
  });

  it('should get link for login page (portuguese page)', () => {
    const url = linkToLogin('pt');
    expect(url).toBe('/pt/login');
  });
});

describe('linkToShopping', () => {
  it('should get link to shopping with given gender', () => {
    const women = linkToShopping('women');
    const men = linkToShopping('men');
    const kids = linkToShopping('kids');

    expect(women).toBe('/en/shopping/women/items.aspx');
    expect(men).toBe('/en/shopping/men/items.aspx');
    expect(kids).toBe('/en/shopping/kids/items.aspx');
  });

  it('should get link to shopping given gender and category', () => {
    const women_jewelry = linkToShopping('women', 'fine-jewelry-6');
    const men_sneakers = linkToShopping('men', 'sneakers-2');
    const kids_baby_boy = linkToShopping('kids', 'baby-boy-clothing-5');

    expect(women_jewelry).toBe('/en/shopping/women/fine-jewelry-6/items.aspx');
    expect(men_sneakers).toBe('/en/shopping/men/sneakers-2/items.aspx');
    expect(kids_baby_boy).toBe('/en/shopping/kids/baby-boy-clothing-5/items.aspx');
  });

  it('should get link to shopping given query params', () => {
    const withPage = linkToShopping('women', 'fine-jewelry-6', 'en', { page: 1 });
    const withSort = linkToShopping('women', 'fine-jewelry-6', 'en', { sort: 3 });
    const withView = linkToShopping('women', 'fine-jewelry-6', 'en', { view: 2 });
    const withPageAndSort = linkToShopping('women', 'fine-jewelry-6', 'en', { sort: 3, page: 1 });

    expect(withPage).toBe('/en/shopping/women/fine-jewelry-6/items.aspx?page=1');
    expect(withSort).toBe('/en/shopping/women/fine-jewelry-6/items.aspx?sort=3');
    expect(withView).toBe('/en/shopping/women/fine-jewelry-6/items.aspx?view=2');
    expect(withPageAndSort).toEqual('/en/shopping/women/fine-jewelry-6/items.aspx?page=1&sort=3');
  });
});

describe('linkToSearch', () => {
  it('should get link to search', () => {
    expect(linkToSearch('levis', 'women')).toBe('/en/shopping/women/search/items.aspx?q=levis');
  });
});

describe('linkToProduct', () => {
  it('should get link to selected product detail', () => {
    const url = linkToProduct('women', 'jeans-blue-levis', '123456789', 'en');
    expect(url).toBe('/en/shopping/women/jeans-blue-levis-item-123456789.aspx');
  });

  it('should get link to selected product detail without language', () => {
    const url = linkToProduct('women', 'jeans-blue-levis', '123456789');
    expect(url).toBe('/en/shopping/women/jeans-blue-levis-item-123456789.aspx');
  });
});
