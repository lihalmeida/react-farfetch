import { linkToLogin } from '../routes';

// .toBe           // expect(222).toBe(222)
// .toEqual        // expect({ a: 1, b: 2 }).toEqual({ b: 2, a: 1 })
// .toMatchObject  // expect({ a: 1, b: 2, c: 3, d: 4 }).toMatchObject({ c: 3, a: 1 })

jest.mock('i18n/translate', () => {
  return {
    getLanguage: () => 'fr'
  };
});

describe('linkToLogin', () => {
  it('should get link for login page (default language)', () => {
    const url = linkToLogin();
    expect(url).toBe('/fr/login');
  });

  it('should get link for login page (english page)', () => {
    const url = linkToLogin('en');
    expect(url).toBe('/en/login');
  });

  it('should get link for login page (portuguese page)', () => {
    const url = linkToLogin('pt');
    expect(url).toBe('/pt/login');
  });
});
