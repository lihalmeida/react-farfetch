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

/**
 * Categories routes indexed by ID
 * Example:
 * CATEGORIES_BY_ID['136656'] = { id: '136656', route: 'baby-girl-clothing-6' }
 */
export const CATEGORIES_BY_ID = {
  '135967': CATEGORIES.WOMEN_CLOTHING, // 'clothing-1',
  '136301': CATEGORIES.WOMEN_SHOES, // 'shoes-1',
  '135971': CATEGORIES.WOMEN_BAGS, // 'bags-purses-1',
  '135973': CATEGORIES.WOMEN_ACCESSORIES, // 'accessories-all-1',
  '137175': CATEGORIES.WOMEN_JEWELRY, // 'fine-jewelry-6',
  '136212': CATEGORIES.WOMEN_VINTAGE, // 'vintage-archive-1',

  '136330': CATEGORIES.MEN_CLOTHING, // 'clothing-2',
  '135968': CATEGORIES.MEN_SHOES, // 'shoes-2',
  '137174': CATEGORIES.MEN_SNEAKERS, // 'sneakers-2',
  '135970': CATEGORIES.MEN_BAGS, // 'bags-purses-2',
  '135972': CATEGORIES.MEN_ACCESSORIES, // 'accessories-all-2',
  '137177': CATEGORIES.MEN_WATCHES, // 'watches',
  '137178': CATEGORIES.MEN_FINE_WATCHES, // 'fine watches',

  '136656': CATEGORIES.KIDS_BABY_GIRL_CLOTHING, // 'baby-girl-clothing-6',
  '136653': CATEGORIES.KIDS_BABY_BOY_CLOTHING, // 'baby-boy-clothing-5',
  '136650': CATEGORIES.KIDS_GIRLS_CLOTHING, // 'girls-clothing-4',
  '136647': CATEGORIES.KIDS_BOYS_CLOTHING, // 'boys-clothing-3'
};

/**
 * Categories IDs indexed by route
 * Example:
 * CATEGORIES_BY_ROUTE['baby-girl-clothing-6'] = { id: '136656', route: 'baby-girl-clothing-6' }
 */
export const CATEGORIES_BY_ROUTE = {
  'clothing-1': CATEGORIES.WOMEN_CLOTHING,
  'shoes-1': CATEGORIES.WOMEN_SHOES,
  'bags-purses-1': CATEGORIES.WOMEN_BAGS,
  'accessories-all-1': CATEGORIES.WOMEN_ACCESSORIES,
  'fine-jewelry-6': CATEGORIES.WOMEN_JEWELRY,
  'vintage-archive-1': CATEGORIES.WOMEN_VINTAGE,

  'clothing-2': CATEGORIES.MEN_CLOTHING,
  'shoes-2': CATEGORIES.MEN_SHOES,
  'sneakers-2': CATEGORIES.MEN_SNEAKERS,
  'bags-purses-2': CATEGORIES.MEN_BAGS,
  'accessories-all-2': CATEGORIES.MEN_ACCESSORIES,
  'watches': CATEGORIES.MEN_WATCHES,
  'fine watches': CATEGORIES.MEN_FINE_WATCHES,

  'baby-girl-clothing-6': CATEGORIES.KIDS_BABY_GIRL_CLOTHING,
  'baby-boy-clothing-5': CATEGORIES.KIDS_BABY_BOY_CLOTHING,
  'girls-clothing-4': CATEGORIES.KIDS_GIRLS_CLOTHING,
  'boys-clothing-3': CATEGORIES.KIDS_BOYS_CLOTHING,
};
