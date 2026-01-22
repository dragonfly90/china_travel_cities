export const destinations = {
    main: [
        {
            id: 'beijing',
            name: 'Beijing',
            image: './public/images/beijing_great_wall_1766986793824.png',
            description: 'The capital of China, blending ancient history with modern innovation.',
            highlights: ['Great Wall', 'Forbidden City', 'Temple of Heaven', 'Hutongs'],
            bestTime: 'Spring (April-May) and Autumn (September-October)',
            itinerary: [
                'Day 1: Forbidden City & Tiananmen Square. Sunset at Jingshan Park.',
                'Day 2: Great Wall (Mutianyu section) day trip.',
                'Day 3: Temple of Heaven morning Tai Chi, then explore Hutongs and Summer Palace.'
            ],
            food: ['Peking Duck', 'Zhajiangmian (Soybean Paste Noodles)', 'Jianbing (Chinese Crepe)'],
            stay: ['Wangfujing (Central)', 'Sanlitun (Nightlife)', 'Gulou (Hutong Vibes)']
        },
        {
            id: 'shanghai',
            name: 'Shanghai',
            image: './public/images/shanghai_skyline_1766986808147.png',
            description: 'A global financial hub with a futuristic skyline and colonial-era architecture.',
            highlights: ['The Bund', 'Yu Garden', 'Shanghai Tower', 'French Concession'],
            bestTime: 'Spring and Autumn',
            itinerary: [
                'Day 1: The Bund & Nanjing Road. Evening river cruise.',
                'Day 2: Yu Garden & City God Temple. Afternoon in French Concession.',
                'Day 3: Lujiazui Skyscrapers (Shanghai Tower) & Art Museums.'
            ],
            food: ['Xiaolongbao (Soup Dumplings)', 'Shengjianbao (Pan-fried Buns)', 'Sweet and Sour Ribs'],
            stay: ['The Bund (Views)', 'French Concession (Charming)', 'Jing\'an (Central)']
        },
        {
            id: 'xian',
            name: "Xi'an",
            image: './public/images/xian_terracotta_1766986821692.png',
            description: 'The starting point of the Silk Road and home to the Terracotta Warriors.',
            highlights: ['Terracotta Warriors', 'Ancient City Wall', 'Muslim Quarter', 'Giant Wild Goose Pagoda'],
            bestTime: 'Spring and Autumn',
            itinerary: [
                'Day 1: Terracotta Warriors & Horses Museum.',
                'Day 2: Cycle on the Ancient City Wall. Explore Muslim Quarter and Bell Tower.',
                'Day 3: Giant Wild Goose Pagoda & Shaanxi History Museum.'
            ],
            food: ['Roujiamo (Chinese Burger)', 'Biangbiang Noodles', 'Yangrou Paomo (Mutton Soup)'],
            stay: ['Bell Tower Area (Central)', 'South Gate (Near Wall)', 'Big Wild Goose Pagoda (Modern)']
        },
        {
            id: 'chengdu',
            name: 'Chengdu',
            image: './public/images/chengdu_pandas_hotpot.png',
            description: 'Famous for Giant Pandas and spicy Sichuan cuisine.',
            highlights: ['Panda Base', 'Jinli Ancient Street', 'Leshan Giant Buddha'],
            bestTime: 'Spring and Autumn',
            itinerary: [
                'Day 1: Chengdu Research Base of Giant Panda Breeding (Go early!). Afternoon at People\'s Park.',
                'Day 2: Day trip to Leshan Giant Buddha.',
                'Day 3: Jinli Ancient Street or Chunxi Road. Hotpot dinner.'
            ],
            food: ['Sichuan Hotpot', 'Mapo Tofu', 'Dan Dan Noodles'],
            stay: ['Chunxi Road (Shopping)', 'Wenshu Monastery (Traditional)', 'Jinli (Tourist)']
        },
        {
            id: 'suzhou',
            name: 'Suzhou',
            image: './public/images/suzhou_hanfu_girls.png',
            description: 'Known as the "Venice of the East", famous for its classical gardens and canals.',
            highlights: ['Humble Administrator\'s Garden', 'Tiger Hill', 'Pingjiang Road', 'Suzhou Museum'],
            bestTime: 'Spring (April-May) and Autumn (September-October)',
        },
        {
            id: 'xiamen',
            name: 'Xiamen',
            image: './public/images/xiamen_gulangyu_seaside.png',
            description: 'A coastal city known for Gulangyu Island and colonial architecture.',
            highlights: ['Gulangyu Island', 'Nanputuo Temple', 'Xiamen University', 'Zhongshan Road'],
            bestTime: 'Autumn and Winter',
        },
        {
            id: 'guilin',
            name: 'Guilin',
            image: './public/images/guilin_li_river_karst.png',
            description: 'Famous for its dramatic karst landscape and the Li River cruise.',
            highlights: ['Li River Cruise', 'Elephant Trunk Hill', 'Reed Flute Cave', 'Longji Rice Terraces'],
            bestTime: 'April to October',
        },
        {
            id: 'kunming',
            name: 'Kunming',
            image: './public/images/kunming_stone_forest.png',
            description: 'The "City of Eternal Spring", gateway to Yunnan and home to the Stone Forest.',
            highlights: ['Stone Forest', 'Green Lake', 'Dianchi Lake', 'Flower Market'],
            bestTime: 'All year round (Eternal Spring)',
            itinerary: [
                'Day 1: Green Lake Park & Yunnan Army Academy. Evening at Nanqiang Street.',
                'Day 2: Stone Forest Geopark day trip.',
                'Day 3: Dragon Gate at Western Hills & Dianchi Lake.'
            ],
            food: ['Crossing the Bridge Noodles', 'Steam Pot Chicken', 'Flower Cakes'],
            stay: ['Green Lake Area', 'Nanping Street (City Center)']
        },
        {
            id: 'zhangjiajie',
            name: 'Zhangjiajie',
            image: './public/images/zhangjiajie_avatar_mountains.png',
            description: 'Surreal sandstone pillars that inspired the floating mountains in Avatar.',
            highlights: ['National Forest Park', 'Tianmen Mountain', 'Grand Canyon Glass Bridge'],
            bestTime: 'April-May and September-October',
        }
    ],
    small: [
        {
            id: 'dali',
            name: 'Dali',
            image: './public/images/dali_three_pagodas.png',
            description: 'A backpacker haven with the Three Pagodas, Erhai Lake, and Cangshan Mountain.',
            highlights: ['Dali Ancient City', 'Erhai Lake', 'Three Pagodas', 'Cangshan'],
            bestTime: 'Spring and Autumn',
            itinerary: [
                'Day 1: Explore Dali Ancient City. Visit Foreigner Street.',
                'Day 2: Cycle or drive around Erhai Lake. Visit Xizhou Town.',
                'Day 3: Three Pagodas & Cangshan Mountain cable car.'
            ],
            food: ['Xizhou Baba', 'Erhai Fish Casserole', 'Dairy Fan (Rushan)'],
            stay: ['Dali Ancient City', 'Shuanglang (Lakeside)', 'Caicun']
        },
        {
            id: 'yangshuo',
            name: 'Yangshuo',
            image: './public/images/yangshuo_karst_1766986835795.png',
            description: 'Breathtaking karst mountains and serene rivers.',
            highlights: ['Li River Rafting', 'Moon Hill', 'West Street'],
            bestTime: 'April to October',
            itinerary: [
                'Day 1: Bamboo Rafting on Yulong River. Rent a scooter to ride through countryside.',
                'Day 2: Moon Hill & Silver Cave.',
                'Day 3: West Street nightlife & Impression Sanjie Liu Show.'
            ],
            food: ['Beer Fish', 'Guilin Rice Noodles', 'Stuffed Snails'],
            stay: ['West Street (Lively)', 'Yulong River (Peaceful)']
        },
        {
            id: 'lijiang',
            name: 'Lijiang',
            image: './public/images/lijiang_ancient_town_1766986847247.png',
            description: 'A UNESCO World Heritage ancient town with rich Naxi culture.',
            highlights: ['Lijiang Ancient Town', 'Jade Dragon Snow Mountain', 'Black Dragon Pool'],
            bestTime: 'Spring and Autumn',
            itinerary: [
                'Day 1: Get lost in Lijiang Ancient Town. Climb Lion Hill for views.',
                'Day 2: Jade Dragon Snow Mountain & Blue Moon Valley.',
                'Day 3: Shuhe Ancient Town or Baisha Village for calmer vibes.'
            ],
            food: ['Nixi Chicken Pot', 'Yak Meat Hotpot', 'Lijiang Baba'],
            stay: ['Lijiang Ancient Town', 'Shuhe (Quieter)']
        },
        {
            id: 'fenghuang',
            name: 'Fenghuang',
            image: './public/images/fenghuang_ancient_town_river.png',
            description: 'An ancient town built on stilts along the Tuo River.',
            highlights: ['Ancient Town', 'Boating on Tuo River', 'Night View'],
            bestTime: 'Spring and Autumn',
        }
    ]
};

export const bookingLink = 'https://www.trip.com/?Allianceid=7659513&SID=286708661&trip_sub1=&trip_sub3=D9560539';

export const travelTips = {
    visa: {
        title: 'Visa Requirements',
        content: 'US citizens need a visa. However, the **144-hour Visa-Free Transit** is available in major cities like Beijing, Shanghai, and Chengdu for transit passengers. As of 2024, the process for L-visa is simplified (no flight/hotel proof needed). Cost is ~$140.',
    },
    transport: {
        title: 'High-Speed Trains',
        content: 'China has an extensive high-speed rail network (G/D trains). Book via Trip.com or 12306 app. Passport required for booking and boarding. 2nd class is comfortable; Business class is luxury.',
    },
    apps: {
        title: 'Essential Apps',
        content: 'Alipay/WeChat Pay (link US credit card), Trip.com (hotels/trains), Apple Maps (works well), VPN (Astrill/LetsVPN) or <a href="https://airalo.pxf.io/nXq9WX" target="_blank" style="color: var(--primary-color); text-decoration: underline;">eSIM</a> for internet access.',
    },
    payment: {
        title: 'Payment Methods',
        content: 'China is nearly cashless. **WeChat Pay** and **Alipay** are essential. Link your international credit card to these apps. Cash is rarely used but good for emergencies. International cards are accepted at high-end hotels and some chains.',
    },
    internet: {
        title: 'Internet & VPN',
        content: 'Google, Facebook, Instagram, etc., are blocked. You NEED a **VPN** (ExpressVPN, Astrill, LetsVPN) installed BEFORE arrival. Alternatively, use an **eSIM** (like Airalo) which bypasses the firewall automatically.',
    }
};

export const resources = [
    {
        name: 'China Travel',
        url: 'https://www.chinatravel.com/',
        description: 'A leading travel agency offering tailor-made tours and comprehensive guides for all major destinations.',
    },
    {
        name: 'Travel China Guide',
        url: 'https://www.travelchinaguide.com/',
        description: 'An extensive resource for cultural information, history, and practical travel tips, serving over 70,000 guests annually.',
    },
    {
        name: 'Beshan (WildChina)',
        url: 'https://www.beshan.com/',
        description: 'Founded by Zhang Mei, offering high-end, authentic, and "life-changing" travel experiences off the beaten path.',
    },
    {
        name: 'Airalo eSIM',
        url: 'https://airalo.pxf.io/nXq9WX',
        description: 'Stay connected with affordable eSIMs. Bypass the firewall automatically for seamless internet access.',
    }
];

export const costs = {
    budget: {
        type: 'Budget',
        daily: '$50 - $80',
        desc: 'Hostels, street food, public transport.',
    },
    midRange: {
        type: 'Mid-Range',
        daily: '$150 - $200',
        desc: '3-4 star hotels, nice meals, high-speed trains.',
    },
    luxury: {
        type: 'Luxury',
        daily: '$300+',
        desc: '5-star hotels, private guides/drivers, fine dining.',
    },
};
