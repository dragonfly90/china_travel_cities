export const destinations = {
    main: [
        {
            id: 'beijing',
            name: 'Beijing',
            image: './public/images/beijing_great_wall_1766986793824.png',
            description: 'The capital of China, blending ancient history with modern innovation.',
            highlights: ['Great Wall', 'Forbidden City', 'Temple of Heaven', 'Hutongs'],
            bestTime: 'Spring (April-May) and Autumn (September-October)',
        },
        {
            id: 'shanghai',
            name: 'Shanghai',
            image: './public/images/shanghai_skyline_1766986808147.png',
            description: 'A global financial hub with a futuristic skyline and colonial-era architecture.',
            highlights: ['The Bund', 'Yu Garden', 'Shanghai Tower', 'French Concession'],
            bestTime: 'Spring and Autumn',
        },
        {
            id: 'xian',
            name: "Xi'an",
            image: './public/images/xian_terracotta_1766986821692.png',
            description: 'The starting point of the Silk Road and home to the Terracotta Warriors.',
            highlights: ['Terracotta Warriors', 'Ancient City Wall', 'Muslim Quarter', 'Giant Wild Goose Pagoda'],
            bestTime: 'Spring and Autumn',
        },
        {
            id: 'chengdu',
            name: 'Chengdu',
            image: 'https://en.wikipedia.org/wiki/Chengdu#/media/File:%E9%9B%AA%E5%B1%B1%E4%B8%8B%E7%9A%84%E6%88%90%E9%83%BD%E5%B8%82%E5%A4%A9%E9%99%85%E7%BA%BF_Chengdu_skyline_with_snow_capped_mountains.jpg', // Updated image
            description: 'Famous for Giant Pandas and spicy Sichuan cuisine.',
            highlights: ['Panda Base', 'Jinli Ancient Street', 'Leshan Giant Buddha'],
            bestTime: 'Spring and Autumn',
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
            image: 'https://en.wikipedia.org/wiki/Xiamen#/media/File:Haicang_Bridge_cropped.jpg', // Updated image
            description: 'A coastal city known for Gulangyu Island and colonial architecture.',
            highlights: ['Gulangyu Island', 'Nanputuo Temple', 'Xiamen University', 'Zhongshan Road'],
            bestTime: 'Autumn and Winter',
        }
    ],
    small: [
        {
            id: 'yangshuo',
            name: 'Yangshuo',
            image: './public/images/yangshuo_karst_1766986835795.png',
            description: 'Breathtaking karst mountains and serene rivers.',
            highlights: ['Li River Rafting', 'Moon Hill', 'West Street'],
            bestTime: 'April to October',
        },
        {
            id: 'lijiang',
            name: 'Lijiang',
            image: './public/images/lijiang_ancient_town_1766986847247.png',
            description: 'A UNESCO World Heritage ancient town with rich Naxi culture.',
            highlights: ['Lijiang Ancient Town', 'Jade Dragon Snow Mountain', 'Black Dragon Pool'],
            bestTime: 'Spring and Autumn',
        },
        {
            id: 'fenghuang',
            name: 'Fenghuang',
            image: 'https://en.wikipedia.org/wiki/Fenghuang_County#/media/File:Fenghuang_hunan.jpg', // Updated image
            description: 'An ancient town built on stilts along the Tuo River.',
            highlights: ['Ancient Town', 'Boating on Tuo River', 'Night View'],
            bestTime: 'Spring and Autumn',
        }
    ]
};

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
        content: 'Alipay/WeChat Pay (link US credit card), Trip.com (hotels/trains), Apple Maps (works well), VPN (Astrill/LetsVPN) or eSIM for internet access.',
    },
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
