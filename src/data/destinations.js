export const bookingLink = 'https://www.trip.com/?Allianceid=7659513&SID=286708661&trip_sub1=&trip_sub3=D9560539';

export const content = {
    en: {
        ui: {
            homeTitle: "Discover China",
            homeSubtitle: "A journey through time, culture, and breathtaking landscapes.",
            exploreBtn: "Explore Destinations",
            mainCities: "Main Cities",
            hiddenGems: "Hidden Gems",
            bookHotel: "Book Hotel",
            bookStay: "Book Your Stay",
            trustedResources: "Trusted Resources",
            visitWebsite: "Visit Website \u2192",
            about: "About",
            highlights: "Highlights",
            bestTime: "Best Time to Visit",
            tipsTitle: "Travel Tips & Costs",
            costsTitle: "Estimated Costs (Per Person/Day)",
            shareGuide: "Share Guide",
            shareList: "Share List",
            gearTitle: "Recommended Gear",
            gearSubtitle: "Essential items for your trip to China, curated from Amazon.",
            buyAmazon: "Buy on Amazon",
            footer: "\u00A9 2026 China Travel Guide. All rights reserved. | Total Visits:",
            nav: {
                home: "Home",
                tips: "Travel Tips",
                gear: "Gear",
                planner: "Planner"
            },
            planner: {
                title: "Trip Planner",
                subtitle: "Build your dream itinerary. Select cities and arrange them.",
                myTrip: "My Itinerary",
                addCity: "Add to Trip",
                remove: "Remove",
                empty: "Your itinerary is empty. Add cities from the list!",
                share: "Share Itinerary",
                totalDays: "Total Days",
                availableCities: "Available Destinations"
            }
        },
        destinations: {
            main: [
                {
                    id: 'beijing',
                    name: 'Beijing',
                    image: './public/images/beijing_great_wall_1766986793824.png',
                    description: 'The political and cultural heart of China, featuring the Great Wall and Forbidden City.',
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
                    image: './public/images/chengdu_pandas_hotpot.png',
                    description: 'Famous for Giant Pandas and spicy Sichuan cuisine.',
                    highlights: ['Panda Base', 'Jinli Ancient Street', 'Leshan Giant Buddha'],
                    bestTime: 'Spring and Autumn',
                },
                {
                    id: 'chongqing',
                    name: 'Chongqing',
                    image: './public/images/chongqing_city.png',
                    description: 'The "Cyberpunk 8D City" famous for its hotpot, monorails through buildings, and mountainscapes.',
                    highlights: ['Hongya Cave', 'Liziba Station (Train through building)', 'Yangtze River Cableway', 'Hotpot'],
                    bestTime: 'Spring and Autumn (Avoid Summer heat)',
                },
                {
                    id: 'hangzhou',
                    name: 'Hangzhou',
                    image: './public/images/hangzhou_west_lake.png',
                    description: 'Famous for the West Lake and being the "Heaven on Earth".',
                    highlights: ['West Lake', 'Lingyin Temple', 'Longjing Tea Plantations', 'Leifeng Pagoda'],
                    bestTime: 'Spring (March-May) and Autumn',
                },
                {
                    id: 'harbin',
                    name: 'Harbin',
                    image: './public/images/harbin_ice_festival.png',
                    description: 'The "Ice City" known for its massive Ice & Snow Festival and Russian architecture.',
                    highlights: ['Ice and Snow World', 'Saint Sophia Cathedral', 'Central Street', 'Sun Island'],
                    bestTime: 'Winter (Dec-Feb) for Ice Festival',
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
                },
                {
                    id: 'zhangjiajie',
                    name: 'Zhangjiajie',
                    image: './public/images/zhangjiajie_avatar_mountains.png',
                    description: 'Surreal sandstone pillars that inspired the floating mountains in Avatar.',
                    highlights: ['National Forest Park', 'Tianmen Mountain', 'Grand Canyon Glass Bridge'],
                    bestTime: 'April-May and September-October',
                },
                {
                    id: 'hainan',
                    name: 'Hainan',
                    image: './public/images/hainan_sanya_beach.png',
                    description: "The 'Hawaii of China', a tropical paradise with pristine beaches and luxury resorts.",
                    highlights: ['Sanya Bay', 'Yalong Bay', 'Nanshan Temple', 'Wuzhizhou Island'],
                    bestTime: 'October to March',
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
                },
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
                    image: './public/images/fenghuang_ancient_town_river.png',
                    description: 'An ancient town built on stilts along the Tuo River.',
                    highlights: ['Ancient Town', 'Boating on Tuo River', 'Night View'],
                    bestTime: 'Spring and Autumn',
                }
            ]
        },
        travelTips: {
            visa: {
                title: 'Visa Requirements (2026)',
                content: 'China now offers <strong>30-day visa-free entry</strong> for 46 countries (most of Europe, Japan, S. Korea, Australia, NZ, Brazil, Argentina, and more) — extended through Dec 2026. Citizens of 55 countries (including the US, UK, and Canada) qualify for <strong>240-hour visa-free transit</strong> (10 days!) through 65 ports. For longer US stays, an L-visa costs ~$185. <a href="#" data-link="/visa" style="color: var(--primary-color);">See full visa guide →</a>',
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
        },
        resources: [
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
        ],
        costs: {
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
        }
    },
    zh: {
        ui: {
            homeTitle: "探索中国",
            homeSubtitle: "一场穿越时空、文化与壮丽风景的旅程。",
            exploreBtn: "探索目的地",
            mainCities: "主要城市",
            hiddenGems: "隐秘瑰宝",
            bookHotel: "预订酒店",
            bookStay: "预订住宿",
            trustedResources: "推荐资源",
            visitWebsite: "访问网站 \u2192",
            about: "关于",
            highlights: "亮点",
            bestTime: "最佳旅游时间",
            tipsTitle: "旅游贴士 & 费用",
            costsTitle: "预估费用 (每人/天)",
            shareGuide: "分享指南",
            shareList: "分享清单",
            gearTitle: "推荐装备",
            gearSubtitle: "中国旅行必备好物，精选自亚马逊。",
            buyAmazon: "亚马逊购买",
            footer: "\u00A9 2026 中国旅游指南。保留所有权利。| 总访问量：",
            nav: {
                home: "首页",
                tips: "旅游贴士",
                gear: "装备",
                planner: "行程规划"
            },
            planner: {
                title: "行程规划器",
                subtitle: "打造您的梦想行程。选择城市并安排顺序。",
                myTrip: "我的行程",
                addCity: "添加到行程",
                remove: "移除",
                empty: "您的行程为空。请从列表中添加城市！",
                share: "分享行程",
                totalDays: "总天数",
                availableCities: "可选目的地"
            }
        },
        destinations: {
            main: [
                {
                    id: 'beijing',
                    name: '北京',
                    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80',
                    description: '中国的首都，融合了古老的历史与现代的创新。',
                    highlights: ['长城', '紫禁城', '天坛', '胡同'],
                    bestTime: '春季 (4-5月) 和 秋季 (9-10月)',
                },
                {
                    id: 'shanghai',
                    name: '上海',
                    image: 'https://images.unsplash.com/photo-1548622150-f96677f547c6?auto=format&fit=crop&w=800&q=80',
                    description: '全球金融中心，拥有未来感的天际线和殖民时代的建筑。',
                    highlights: ['外滩', '豫园', '上海中心大厦', '法租界'],
                    bestTime: '春季和秋季',
                },
                {
                    id: 'xian',
                    name: '西安',
                    image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=800&q=80',
                    description: '丝绸之路的起点，兵马俑的故乡。',
                    highlights: ['兵马俑', '古城墙', '回民街', '大雁塔'],
                    bestTime: '春季和秋季',
                },
                {
                    id: 'chengdu',
                    name: '成都',
                    image: 'https://images.unsplash.com/photo-1564359060235-ef4292131b4c?auto=format&fit=crop&w=800&q=80',
                    description: '以大熊猫和辛辣的川菜闻名。',
                    highlights: ['熊猫基地', '锦里古街', '乐山大佛'],
                    bestTime: '春季和秋季',
                },
                {
                    id: 'chongqing',
                    name: '重庆',
                    image: 'https://images.unsplash.com/photo-1628588889981-d2f62799342c?auto=format&fit=crop&w=800&q=80',
                    description: '“8D魔幻城市”，以火锅、轻轨穿楼和山景夜景闻名。',
                    highlights: ['洪崖洞', '李子坝轻轨', '长江索道', '火锅'],
                    bestTime: '春季和秋季 (避开夏季高温)',
                },
                {
                    id: 'hangzhou',
                    name: '杭州',
                    image: 'https://images.unsplash.com/photo-1629734346875-520f92265077?auto=format&fit=crop&w=800&q=80',
                    description: '以美丽的西湖闻名，被誉为“人间天堂”。',
                    highlights: ['西湖', '灵隐寺', '龙井茶园', '雷峰塔'],
                    bestTime: '春季 (3-5月) 和 秋季',
                },
                {
                    id: 'harbin',
                    name: '哈尔滨',
                    image: 'https://plus.unsplash.com/premium_photo-1661908920197-03657754b238?auto=format&fit=crop&w=800&q=80',
                    description: '“冰城”，以盛大的冰雪节和俄罗斯风情建筑闻名。',
                    highlights: ['冰雪大世界', '圣索菲亚教堂', '中央大街', '太阳岛'],
                    bestTime: '冬季 (12-2月) 体验冰雪节',
                },
                {
                    id: 'suzhou',
                    name: '苏州',
                    image: 'https://images.unsplash.com/photo-1582650803869-c3aa274d4b36?auto=format&fit=crop&w=800&q=80',
                    description: '被誉为“东方威尼斯”，以古典园林和运河闻名。',
                    highlights: ['拙政园', '虎丘', '平江路', '苏州博物馆'],
                    bestTime: '春季 (4-5月) 和 秋季 (9-10月)',
                },
                {
                    id: 'xiamen',
                    name: '厦门',
                    image: 'https://images.unsplash.com/photo-1595055269754-0ebc4cb1859c?auto=format&fit=crop&w=800&q=80',
                    description: '以鼓浪屿和殖民建筑闻名的海滨城市。',
                    highlights: ['鼓浪屿', '南普陀寺', '厦门大学', '中山路'],
                    bestTime: '秋季和冬季',
                },
                {
                    id: 'guilin',
                    name: '桂林',
                    image: 'https://images.unsplash.com/photo-1527684651001-eb4dc44b82d9?auto=format&fit=crop&w=800&q=80',
                    description: '以其壮观的喀斯特地貌和漓江游船闻名。',
                    highlights: ['漓江游船', '象鼻山', '芦笛岩', '龙脊梯田'],
                    bestTime: '4月至10月',
                },
                {
                    id: 'kunming',
                    name: '昆明',
                    image: 'https://images.unsplash.com/photo-1549557488-8422176472d4?auto=format&fit=crop&w=800&q=80',
                    description: '“春城”，通往云南的门户，石林的所在地。',
                    highlights: ['石林', '翠湖', '滇池', '花市'],
                    bestTime: '全年 (四季如春)',
                },
                {
                    id: 'zhangjiajie',
                    name: '张家界',
                    image: 'https://images.unsplash.com/photo-1544376485-f55447a06af1?auto=format&fit=crop&w=800&q=80',
                    description: '超现实的砂岩柱，阿凡达悬浮山的灵感来源。',
                    highlights: ['国家森林公园', '天门山', '大峡谷玻璃桥'],
                    bestTime: '4-5月 和 9-10月',
                },
                {
                    id: 'hainan',
                    name: '海南',
                    image: 'https://images.unsplash.com/photo-1592237060593-9c4c23577dce?auto=format&fit=crop&w=800&q=80',
                    description: "中国的夏威夷，拥有原始海滩和豪华度假村的热带天堂。",
                    highlights: ['三亚湾', '亚龙湾', '南山寺', '蜈支洲岛'],
                    bestTime: '10月至3月',
                }
            ],
            small: [
                {
                    id: 'dali',
                    name: '大理',
                    image: 'https://images.unsplash.com/photo-1517537385973-2e4a8b7c7a2f?auto=format&fit=crop&w=800&q=80',
                    description: '背包客的天堂，拥有三塔、洱海和苍山。',
                    highlights: ['大理古城', '洱海', '三塔', '苍山'],
                    bestTime: '春季和秋季',
                },
                {
                    id: 'yangshuo',
                    name: '阳朔',
                    image: 'https://images.unsplash.com/photo-1470181512702-8616fa127116?auto=format&fit=crop&w=800&q=80',
                    description: '令人惊叹的喀斯特山脉和宁静的河流。',
                    highlights: ['遇龙河漂流', '月亮山', '西街'],
                    bestTime: '4月至10月',
                },
                {
                    id: 'lijiang',
                    name: '丽江',
                    image: 'https://images.unsplash.com/photo-1506509653846-9d3e5e54c728?auto=format&fit=crop&w=800&q=80',
                    description: '拥有丰富纳西文化的联合国教科文组织世界遗产古镇。',
                    highlights: ['丽江古城', '玉龙雪山', '黑龙潭'],
                    bestTime: '春季和秋季',
                },
                {
                    id: 'fenghuang',
                    name: '凤凰',
                    image: 'https://images.unsplash.com/photo-1616216432657-3f3366059d0b?auto=format&fit=crop&w=800&q=80',
                    description: '沱江边上的吊脚楼古镇。',
                    highlights: ['凤凰古城', '沱江泛舟', '夜景'],
                    bestTime: '春季和秋季',
                }
            ]
        },
        travelTips: {
            visa: {
                title: '签证要求 (2026)',
                content: '中国现在对<strong>46个国家</strong>（大部分欧洲国家、日本、韩国、澳大利亚、新西兰、巴西、阿根廷等）提供<strong>30天免签入境</strong>，有效期延至2026年底。<strong>55个国家</strong>（包括美国、英国和加拿大）公民可享受<strong>240小时过境免签</strong>（10天！），覆盖65个口岸。美国公民长期停留需L签证，费用约$185。<a href="#" data-link="/visa" style="color: var(--primary-color);">查看完整签证指南 →</a>',
            },
            transport: {
                title: '高速铁路',
                content: '中国拥有广泛的高铁网络（G/D字头列车）。可通过携程 (Trip.com) 或12306 App预订。预订和登车需要护照。二等座很舒适；商务座则非常奢华。',
            },
            apps: {
                title: '必备App',
                content: '支付宝/微信支付（绑定国际信用卡），携程（酒店/火车），苹果地图（不仅好用），VPN（Astrill/LetsVPN）或<a href="https://airalo.pxf.io/nXq9WX" target="_blank" style="color: var(--primary-color); text-decoration: underline;">eSIM</a>用于上网。',
            },
            payment: {
                title: '支付方式',
                content: '中国几乎是无现金社会。**微信支付**和**支付宝**至关重要。将您的国际信用卡绑定到这些应用程序。现金很少使用，但适合紧急情况。高端酒店和一些连锁店接受国际信用卡。',
            },
            internet: {
                title: '互联网 & VPN',
                content: '谷歌、Facebook、Instagram等被屏蔽。您需要在抵达前安装**VPN**（ExpressVPN, Astrill, LetsVPN）。或者，使用**eSIM**（如Airalo），它可以自动绕过防火墙。',
            }
        },
        resources: [
            {
                name: 'China Travel',
                url: 'https://www.chinatravel.com/',
                description: '领先的旅行社，提供各大目的地的定制旅游和综合指南。',
            },
            {
                name: 'Travel China Guide',
                url: 'https://www.travelchinaguide.com/',
                description: '拥有丰富文化信息、历史和实用旅游建议的广泛资源，每年服务超过7万名客人。',
            },
            {
                name: 'Beshan (WildChina)',
                url: 'https://www.beshan.com/',
                description: '由张梅创立，提供高端、地道且“改变生活”的非主流旅游体验。',
            },
            {
                name: 'Airalo eSIM',
                url: 'https://airalo.pxf.io/nXq9WX',
                description: '使用实惠的eSIM保持连接。自动绕过防火墙，实现无缝互联网接入。',
            }
        ],
        costs: {
            budget: {
                type: '经济型',
                daily: '$50 - $80',
                desc: '青年旅舍，街头美食，公共交通。',
            },
            midRange: {
                type: '中档',
                daily: '$150 - $200',
                desc: '3-4星级酒店，不错的餐馆，高铁。',
            },
            luxury: {
                type: '奢华',
                daily: '$300+',
                desc: '5星级酒店，私人导游/司机，精致餐饮。',
            },
        }
    }
};
