export const regionalCuisines = [
  {
    name: 'Sichuan (川菜)',
    region: 'Southwest China',
    emoji: '🌶️',
    description: 'Bold, numbing-spicy flavors defined by Sichuan peppercorn and chili bean paste. The "málà" (numbing-spicy) sensation is unlike anything else.',
    famousDishes: [
      { name: 'Mapo Tofu (麻婆豆腐)', description: 'Silky tofu in fiery chili-bean sauce with ground pork' },
      { name: 'Hotpot (火锅)', description: 'Bubbling cauldron of spicy broth — you cook raw ingredients at the table' },
      { name: 'Kung Pao Chicken (宫保鸡丁)', description: 'Diced chicken with peanuts, dried chili, and Sichuan peppercorn' },
      { name: 'Dan Dan Noodles (担担面)', description: 'Thin noodles in spicy sesame-chili sauce with minced pork' }
    ],
    spiceLevel: 5,
    city: 'Chengdu',
    color: '#E60012'
  },
  {
    name: 'Cantonese (粤菜)',
    region: 'Guangdong Province',
    emoji: '🥟',
    description: 'Light, fresh, and focused on the natural flavor of premium ingredients. The birthplace of dim sum and arguably China\'s most internationally famous cuisine.',
    famousDishes: [
      { name: 'Dim Sum (点心)', description: 'Dozens of small steamed/fried dishes served from rolling carts' },
      { name: 'Roast Goose (烧鹅)', description: 'Crispy-skinned, juicy goose — Cantonese roast perfection' },
      { name: 'Wonton Noodles (云吞面)', description: 'Shrimp wontons in clear broth with thin egg noodles' },
      { name: 'Char Siu (叉烧)', description: 'Honey-glazed BBQ pork, sweet and savory' }
    ],
    spiceLevel: 1,
    city: 'Guangzhou',
    color: '#FF9500'
  },
  {
    name: 'Shandong (鲁菜)',
    region: 'Northern China',
    emoji: '🐟',
    description: 'The "mother cuisine" of northern China. Known for braised seafood, hearty soups, and expert knife skills. Flavors are salty-savory with vinegar notes.',
    famousDishes: [
      { name: 'Sweet & Sour Carp (糖醋鲤鱼)', description: 'Whole Yellow River carp in tangy sweet-sour glaze' },
      { name: 'Braised Sea Cucumber (葱烧海参)', description: 'Sea cucumber braised with scallions in rich sauce' },
      { name: 'Dezhou Braised Chicken (德州扒鸡)', description: 'Whole chicken slow-braised until falling off the bone' },
      { name: 'Jiaozi (饺子)', description: 'Northern-style dumplings, boiled or pan-fried' }
    ],
    spiceLevel: 1,
    city: 'Jinan / Qingdao',
    color: '#007AFF'
  },
  {
    name: 'Jiangsu (苏菜)',
    region: 'Eastern China',
    emoji: '🍖',
    description: 'Sweet, refined, and meticulously presented. Famous for slow-braised dishes and a delicate balance of sweet and savory.',
    famousDishes: [
      { name: 'Lion\'s Head Meatball (狮子头)', description: 'Giant pork meatball braised in clay pot with cabbage' },
      { name: 'Braised Pork Belly (红烧肉)', description: 'Melt-in-your-mouth pork belly in sweet soy glaze' },
      { name: 'Squirrel-Shaped Mandarin Fish (松鼠桂鱼)', description: 'Deep-fried fish scored to look like a squirrel, sweet-sour sauce' },
      { name: 'Salted Duck (盐水鸭)', description: 'Nanjing-style cold duck, clean and savory' },
      { name: 'Yangzhou Fried Rice (扬州炒饭)', description: 'The original fried rice — egg, shrimp, char siu, and peas' }
    ],
    spiceLevel: 1,
    city: 'Nanjing / Suzhou / Yangzhou',
    color: '#34C759'
  },
  {
    name: 'Zhejiang (浙菜)',
    region: 'Eastern Coast',
    emoji: '🐠',
    description: 'Light, fresh, and mellow. Relies on seasonal ingredients and gentle cooking. Less oily than other schools, with a focus on natural sweetness.',
    famousDishes: [
      { name: 'Dongpo Pork (东坡肉)', description: 'Legendary braised pork belly — rich, tender, melt-in-mouth' },
      { name: 'West Lake Fish (西湖醋鱼)', description: 'Grass carp in sweet vinegar sauce, Hangzhou\'s signature' },
      { name: 'Beggar\'s Chicken (叫花鸡)', description: 'Whole chicken wrapped in lotus leaves and clay-baked' },
      { name: 'Longjing Shrimp (龙井虾仁)', description: 'River shrimp stir-fried with Dragon Well tea leaves' }
    ],
    spiceLevel: 1,
    city: 'Hangzhou',
    color: '#5AC8FA'
  },
  {
    name: 'Fujian (闽菜)',
    region: 'Southeast Coast',
    emoji: '🦪',
    description: 'Seafood-centric with complex umami broths and soups. Known for light, sweet, sour flavors and elaborate preparation methods.',
    famousDishes: [
      { name: 'Buddha Jumps Over the Wall (佛跳墙)', description: 'Legendary soup with abalone, sea cucumber, shark fin alternatives, and dozens of ingredients' },
      { name: 'Oyster Omelette (蚵仔煎)', description: 'Crispy egg pancake loaded with fresh oysters and starch' },
      { name: 'Fujian Thick Soup (福建羹汤)', description: 'Rich, starchy seafood soup — a Fujianese staple' },
      { name: 'Popiah (薄饼)', description: 'Fresh spring rolls with shredded vegetables and peanut crumbs' }
    ],
    spiceLevel: 2,
    city: 'Xiamen / Fuzhou',
    color: '#AF52DE'
  },
  {
    name: 'Hunan (湘菜)',
    region: 'South-Central China',
    emoji: '🔥',
    description: 'Pure, dry, searing heat — no numbing peppercorn like Sichuan, just straight chili fire. Smoked and cured meats are a specialty.',
    famousDishes: [
      { name: 'Chairman Mao\'s Braised Pork (毛氏红烧肉)', description: 'Rich braised pork belly — Mao Zedong\'s favorite dish' },
      { name: 'Stinky Tofu (臭豆腐)', description: 'Fermented tofu, deep-fried until crispy — Changsha\'s street icon' },
      { name: 'Steamed Fish Head (剁椒鱼头)', description: 'Massive fish head steamed with a blanket of chopped chili peppers' },
      { name: 'Smoked Pork with Dried Beans (腊味合蒸)', description: 'Cured meats steamed with dried long beans' }
    ],
    spiceLevel: 5,
    city: 'Changsha',
    color: '#FF3B30'
  },
  {
    name: 'Anhui (徽菜)',
    region: 'Eastern Inland',
    emoji: '🌿',
    description: 'Rustic mountain cuisine featuring wild herbs, mushrooms, and slow-braised dishes. Heavy use of ham and bamboo shoots for deep umami.',
    famousDishes: [
      { name: 'Stinky Mandarin Fish (臭鳜鱼)', description: 'Lightly fermented fish, pan-fried — don\'t let the name scare you' },
      { name: 'Braised Wild Herbs (山野菜)', description: 'Foraged mountain greens stir-fried with dried chili' },
      { name: 'Li Hongzhang Hodgepodge (李鸿章杂烩)', description: 'A rich stew of mixed meats, seafood, and vegetables' },
      { name: 'Bamboo Shoot Stew (笋干烧肉)', description: 'Dried bamboo shoots braised with pork belly' }
    ],
    spiceLevel: 2,
    city: 'Huangshan',
    color: '#8E8E93'
  }
]

export const streetFood = [
  {
    name: 'Jianbing',
    chinese: '煎饼',
    emoji: '🥞',
    price: '8-15',
    description: 'China\'s breakfast crepe. Egg, crispy cracker, scallions, and sauces folded into a thin batter pancake. The ultimate grab-and-go meal.',
    where: 'Everywhere (especially Beijing)'
  },
  {
    name: 'Roujiamo',
    chinese: '肉夹馍',
    emoji: '🥙',
    price: '10-20',
    description: 'The "Chinese hamburger." Slow-braised spiced pork stuffed into a crispy flatbread. Xi\'an\'s gift to the world.',
    where: 'Xi\'an (best), nationwide'
  },
  {
    name: 'Baozi',
    chinese: '包子',
    emoji: '🥟',
    price: '2-5 each',
    description: 'Fluffy steamed buns filled with pork, vegetables, or sweet red bean. A breakfast staple across China.',
    where: 'Everywhere'
  },
  {
    name: 'Tanghulu',
    chinese: '糖葫芦',
    emoji: '🍡',
    price: '10-15',
    description: 'Candied fruit on a stick — traditionally hawthorn berries in a crackly sugar shell. The ultimate winter street snack.',
    where: 'Beijing & Northern China'
  },
  {
    name: 'Chuan\'r (Skewers)',
    chinese: '串儿',
    emoji: '🍢',
    price: '3-10 per skewer',
    description: 'Grilled meat skewers dusted with cumin and chili. Lamb is king. Best enjoyed late-night with a cold beer.',
    where: 'Everywhere (especially Xinjiang-style)'
  },
  {
    name: 'Stinky Tofu',
    chinese: '臭豆腐',
    emoji: '🧈',
    price: '10-15',
    description: 'Fermented tofu, deep-fried until golden. Smells terrible, tastes incredible. A rite of passage for visitors.',
    where: 'Changsha (best), nationwide'
  },
  {
    name: 'Scallion Pancakes',
    chinese: '葱油饼',
    emoji: '🫓',
    price: '5-10',
    description: 'Flaky, layered flatbread studded with scallions. Crispy outside, chewy inside. Addictive.',
    where: 'Shanghai & Eastern China'
  },
  {
    name: 'Egg Waffle',
    chinese: '鸡蛋仔',
    emoji: '🧇',
    price: '15-25',
    description: 'Puffy bubble-shaped waffle, crispy outside, soft inside. Hong Kong origin, now viral across China.',
    where: 'Hong Kong & Guangdong'
  },
  {
    name: 'Liangpi',
    chinese: '凉皮',
    emoji: '🍜',
    price: '8-15',
    description: 'Cold rice noodles in chili oil, vinegar, and sesame sauce. Refreshing and spicy — perfect summer food.',
    where: 'Xi\'an & Shaanxi'
  },
  {
    name: 'Dan Dan Noodles',
    chinese: '担担面',
    emoji: '🍝',
    price: '12-20',
    description: 'Thin noodles in spicy sesame-peanut sauce with preserved vegetables and minced pork.',
    where: 'Chengdu & Sichuan'
  },
  {
    name: 'Fried Dough Sticks',
    chinese: '油条',
    emoji: '🥖',
    price: '3-5',
    description: 'Golden, crispy fried dough — China\'s churro. Dip in warm soy milk for the classic Chinese breakfast.',
    where: 'Everywhere'
  },
  {
    name: 'Tea Eggs',
    chinese: '茶叶蛋',
    emoji: '🥚',
    price: '2-3',
    description: 'Hard-boiled eggs simmered in tea, soy sauce, and spices. Beautiful marbled pattern, savory and fragrant.',
    where: 'Every convenience store'
  }
]

export const restaurantTypes = [
  {
    name: 'Street Stalls (路边摊)',
    description: 'Sidewalk vendors and open-air food stalls. The soul of Chinese street food. Follow the crowds to find the best ones.',
    priceRange: '¥5-30',
    tips: 'Point and order. Cash or WeChat/Alipay. Look for stalls with high turnover — that means fresh food. Eat where locals eat.'
  },
  {
    name: 'Fast-Casual Noodle Shops (面馆)',
    description: 'Small, no-frills restaurants specializing in noodles, dumplings, or rice bowls. Quick service, big portions, low prices.',
    priceRange: '¥15-40',
    tips: 'Often have picture menus or QR-code ordering. Great for solo travelers. Lanzhou beef noodle shops (兰州拉面) are everywhere and reliable.'
  },
  {
    name: 'Hot Pot Restaurants (火锅店)',
    description: 'Social dining at its best. A bubbling pot of broth at your table — you pick raw ingredients and cook them yourself.',
    priceRange: '¥60-150 per person',
    tips: 'Go with friends — it\'s a group activity. Get half-and-half pot (鸳鸯锅) for spicy + non-spicy. Haidilao is the famous chain with legendary service.'
  },
  {
    name: 'Formal Banquet Restaurants (酒楼)',
    description: 'Full-service restaurants for regional cuisine. White tablecloths, private rooms available. Where business dinners happen.',
    priceRange: '¥100-500+ per person',
    tips: 'Ordering is usually family-style (shared dishes). The host orders for the table. Expect tea service and multiple courses.'
  },
  {
    name: 'Tea Houses & Dim Sum (茶楼)',
    description: 'Traditional tea houses serving dim sum, pastries, and light meals. A cultural experience as much as a meal.',
    priceRange: '¥50-120 per person',
    tips: 'Go for morning dim sum ("yum cha" 饮茶) in Guangzhou. Tap the table with two fingers to say "thank you" when someone pours your tea.'
  }
]

export const foodTips = [
  {
    title: 'Ordering Food',
    emoji: '📱',
    tips: [
      'Most restaurants use QR code ordering — scan the code on the table, browse the menu on your phone, and pay via WeChat/Alipay',
      'Point at other tables\' dishes if there\'s no English menu — "I want that one" (我要那个 wǒ yào nà ge) works great',
      'Portions are meant to be shared — order one dish per person plus one extra, and share everything',
      'Rice is usually ordered separately and costs ¥2-3 per bowl'
    ]
  },
  {
    title: 'Tipping Culture',
    emoji: '💰',
    tips: [
      'Do NOT tip in China. It\'s not expected and can cause confusion',
      'No tipping at restaurants, hotels, taxis, or for any service',
      'Some high-end international hotels may accept tips, but it\'s never required',
      'The best way to show appreciation is to compliment the food: "好吃！" (hǎo chī — delicious!)'
    ]
  },
  {
    title: 'Chopstick Etiquette',
    emoji: '🥢',
    tips: [
      'Never stick chopsticks upright in rice — this resembles funeral incense and is very bad luck',
      'Don\'t point at people with chopsticks',
      'Use the serving chopsticks (公筷) or flip your chopsticks around when taking food from shared plates',
      'It\'s OK to hold your rice bowl close to your mouth — this is normal, not rude'
    ]
  },
  {
    title: 'Lazy Susan Manners',
    emoji: '🔄',
    tips: [
      'Spin slowly and check that no one is mid-serve before turning',
      'The host or most senior person typically gets first pick',
      'Take modest portions — you can always spin it back for seconds',
      'Don\'t reach across the lazy susan — just wait for it to come around'
    ]
  },
  {
    title: 'Toasting & Drinking',
    emoji: '🍻',
    tips: [
      '"干杯" (gān bēi) means "dry the glass" — bottoms up! But you can sip if you say "随意" (suí yì — at your own pace)',
      'Hold your glass lower than the senior person\'s glass when clinking — it shows respect',
      'Baijiu (白酒) is China\'s national spirit — it\'s strong (40-60% ABV). Pace yourself!',
      'Beer (啤酒 píjiǔ) is the safe choice. Tsingtao and Snow are the big brands'
    ]
  }
]
