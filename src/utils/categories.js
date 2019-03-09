export const CATEGORIES = {
  WOMEN_CLOTHING: { id: '135967', route: 'clothing-1' },
  WOMEN_SHOES: { id: '136301', route: 'shoes-1' },
  WOMEN_BAGS: { id: '135971', route: 'bags-purses-1' },
  WOMEN_ACCESSORIES: { id: '135973', route: 'accessories-all-1' },
  WOMEN_JEWELRY: { id: '137175', route: 'fine-jewelry-6' },
  WOMEN_VINTAGE: { id: '136212', route: 'vintage-archive-1' },

  MEN_CLOTHING: { id: '136330', route: 'clothing-2' },
  MEN_SHOES: { id: '135968', route: 'shoes-2' },
  MEN_SNEAKERS: { id: '137174', route: 'sneakers-2' },
  MEN_BAGS: { id: '135970', route: 'bags-purses-2' },
  MEN_ACCESSORIES: { id: '135972', route: 'accessories-all-2' },
  MEN_WATCHES: { id: '137177', route: 'watches' },
  MEN_FINE_WATCHES: { id: '137178', route: 'fine watches' },

  KIDS_BABY_GIRL_CLOTHING: { id: '136656', route: 'baby-girl-clothing-6' },
  KIDS_BABY_BOY_CLOTHING: { id: '136653', route: 'baby-boy-clothing-5' },
  KIDS_GIRLS_CLOTHING: { id: '136650', route: 'girls-clothing-4' },
  KIDS_BOYS_CLOTHING: { id: '136647', route: 'boys-clothing-3' }
};

const indexBy = (obj, property) => {
  const obj2 = {};

  Object.keys(obj).forEach((oldKey) => {
    const item = obj[oldKey];
    const newKey = item[property];
    obj2[newKey] = item;
  });

  return obj2;
};

/**
 * Categories indexed by id and route
 * Example:
 * CATEGORIES_BY_ID['136656'] = { id: '136656', route: 'baby-girl-clothing-6' }
 * CATEGORIES_BY_ROUTE['baby-girl-clothing-6'] = { id: '136656', route: 'baby-girl-clothing-6' }
 */
export const CATEGORIES_BY_ID = indexBy(CATEGORIES, 'id');
export const CATEGORIES_BY_ROUTE = indexBy(CATEGORIES, 'route');
