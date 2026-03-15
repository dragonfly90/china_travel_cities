// src/data/poetry.js
// Famous Chinese poems curated for each destination city.
// Each entry: { title, titleEn, author, authorEn, dynasty, dynastyEn, lines[], linesEn[], context, contextZh }

const poetry = {

  beijing: [
    {
      title: '沁园春·雪（节选）',
      titleEn: 'Spring in the Garden of Qin · Snow (excerpt)',
      author: '毛泽东',
      authorEn: 'Mao Zedong',
      dynasty: '近代 · 1936年',
      dynastyEn: 'Modern · 1936',
      lines: [
        '北国风光，千里冰封，万里雪飘。',
        '望长城内外，惟余莽莽；',
        '大河上下，顿失滔滔。',
        '山舞银蛇，原驰蜡象，',
        '欲与天公试比高。',
      ],
      linesEn: [
        'The northern landscape: a thousand li frozen,',
        'Ten thousand li blanketed in drifting snow.',
        'Gazing at the Great Wall within and beyond —',
        'Only vast wilderness remains;',
        'The great river, above and below, has lost its surging flow.',
        'Mountains dance like silver serpents,',
        'Highlands gallop like wax elephants,',
        'All vying with heaven in height.',
      ],
      context: 'Written in 1936 on the Loess Plateau, this poem captures the grandeur of northern China in winter. The Great Wall, stretching across frozen plains, stands as the defining symbol of Beijing\'s historical might.',
      contextZh: '写于1936年的黄土高原，这首词以豪迈的笔触描绘了北国的壮阔雪景。长城横亘于冰原之上，成为北京历史雄伟的标志。',
    },
  ],

  shanghai: [
    {
      title: '春江花月夜（节选）',
      titleEn: 'Spring River, Flowers, Moon, Night (excerpt)',
      author: '张若虚',
      authorEn: 'Zhang Ruoxu',
      dynasty: '唐代（约680–745年）',
      dynastyEn: 'Tang Dynasty (c. 680–745)',
      lines: [
        '春江潮水连海平，海上明月共潮生。',
        '滟滟随波千万里，何处春江无月明。',
        '江天一色无纤尘，皎皎空中孤月轮。',
        '江畔何人初见月？江月何年初照人？',
      ],
      linesEn: [
        'The spring river tide levels the sea,',
        'And above the sea, the bright moon rises with the tide.',
        'Its shimmering light follows the waves for ten thousand li —',
        'Where along the spring river is there no moonlit night?',
        'River and sky share one colour, without a speck of dust;',
        'A solitary bright wheel of moon hangs in the void.',
        'Who first saw the moon from the river\'s edge?',
        'In what year did the river moon first light a human face?',
      ],
      context: 'Called "the pinnacle of Tang poetry," this poem evokes the timeless beauty of Jiangnan\'s waterways. Its meditation on moonlight, river tides, and the passage of time captures the spirit of Shanghai\'s roots in the Yangtze Delta.',
      contextZh: '被誉为"孤篇盖全唐"，此诗以月光、江潮与时间的流逝为主题，深刻呈现了长江三角洲水乡之美，也是上海江南气质的精神写照。',
    },
  ],

  xian: [
    {
      title: '出塞二首·其一',
      titleEn: 'Frontier Songs · No. I',
      author: '王昌龄',
      authorEn: 'Wang Changling',
      dynasty: '唐代（698–756年）',
      dynastyEn: 'Tang Dynasty (698–756)',
      lines: [
        '秦时明月汉时关，万里长征人未还。',
        '但使龙城飞将在，不教胡马度阴山。',
      ],
      linesEn: [
        'The moon of Qin, the passes of Han endure —',
        'Ten thousand li away, those who marched never returned.',
        'If only the Flying General of Dragon City were here,',
        'The nomad horses would never have crossed the Yin Mountains.',
      ],
      context: 'Written from the perspective of the Silk Road frontier, this poem mourns soldiers who never returned from the borderlands of ancient Chang\'an (Xi\'an). It remains one of the greatest frontier poems of the Tang Dynasty.',
      contextZh: '这首边塞诗以古代长安（西安）为背景，哀叹那些踏上丝绸之路、一去不返的将士。"秦时明月汉时关"道尽了千年历史的苍凉。',
    },
  ],

  chengdu: [
    {
      title: '春夜喜雨',
      titleEn: 'Joyful Rain on a Spring Night',
      author: '杜甫',
      authorEn: 'Du Fu',
      dynasty: '唐代（759年，作于成都）',
      dynastyEn: 'Tang Dynasty (759 AD, written in Chengdu)',
      lines: [
        '好雨知时节，当春乃发生。',
        '随风潜入夜，润物细无声。',
        '野径云俱黑，江船火独明。',
        '晓看红湿处，花重锦官城。',
      ],
      linesEn: [
        'The good rain knows its season,',
        'Arriving just as spring begins.',
        'It steals in with the wind at night,',
        'Moistening all things, silent and fine.',
        'Dark clouds blanket the country paths;',
        'A lone lantern glows on the river boat.',
        'At dawn, look at the red, rain-drenched earth —',
        'Heavy with blossoms, Brocade City gleams.',
      ],
      context: 'Written at Du Fu\'s Thatched Cottage in Chengdu — now a famous museum — this poem celebrates the gentle spring rain that nourishes the city Du Fu called home during his years of wandering. "Brocade City" (锦官城) is Chengdu\'s poetic name.',
      contextZh: '这首诗写于杜甫草堂（今成都杜甫草堂博物馆），诗人以喜悦之心描绘春雨润物无声之美。"锦官城"是成都的别称，寄托了诗人对这片土地的深厚情感。',
    },
  ],

  chongqing: [
    {
      title: '早发白帝城',
      titleEn: 'Leaving White Emperor City at Dawn',
      author: '李白',
      authorEn: 'Li Bai',
      dynasty: '唐代（762年）',
      dynastyEn: 'Tang Dynasty (762 AD)',
      lines: [
        '朝辞白帝彩云间，千里江陵一日还。',
        '两岸猿声啼不住，轻舟已过万重山。',
      ],
      linesEn: [
        'At dawn I left White Emperor City, high in the coloured clouds;',
        'A thousand li to Jiangling — I returned in a single day.',
        'From both banks, the monkeys\' cries rang out without ceasing;',
        'My light boat had already passed ten thousand mountains.',
      ],
      context: 'Written as Li Bai sailed down the Yangtze through the Three Gorges — the majestic canyon that begins near Chongqing. The poem\'s breathless pace mirrors the thrill of rushing through the gorges\' narrow, towering walls.',
      contextZh: '李白乘舟途经重庆附近的长江三峡时写下此诗。短短四句，以轻舟飞驰、猿声不绝描绘了三峡的壮阔险峻与出峡后的轻松喜悦。',
    },
  ],

  hangzhou: [
    {
      title: '饮湖上初晴后雨·其二',
      titleEn: 'Drinking on the Lake — First Clear Then Rainy · II',
      author: '苏轼',
      authorEn: 'Su Shi (Su Dongpo)',
      dynasty: '宋代（1073年）',
      dynastyEn: 'Song Dynasty (1073 AD)',
      lines: [
        '水光潋滟晴方好，山色空蒙雨亦奇。',
        '欲把西湖比西子，淡妆浓抹总相宜。',
      ],
      linesEn: [
        'In clear weather the water shimmers and glitters — so beautiful;',
        'In rain the mountains blur into mist — equally wondrous.',
        'If I were to compare West Lake to Lady Xi Shi,',
        'Whether lightly or heavily made-up, she is always perfectly lovely.',
      ],
      context: 'Written by Su Shi while serving as governor of Hangzhou, this famous quatrain compares West Lake to the legendary beauty Xi Shi — a comparison so apt that it has defined the lake\'s romantic image for nearly a thousand years.',
      contextZh: '苏轼任杭州知州时写下此诗，将西湖比作中国古代四大美人之一的西施。晴雨皆宜的西湖之美，经此一句，流传千古。',
    },
  ],

  harbin: [
    {
      title: '白雪歌送武判官归京（节选）',
      titleEn: 'Snow Song — Seeing Official Wu Off to the Capital (excerpt)',
      author: '岑参',
      authorEn: 'Cen Shen',
      dynasty: '唐代（约754年）',
      dynastyEn: 'Tang Dynasty (c. 754 AD)',
      lines: [
        '北风卷地白草折，胡天八月即飞雪。',
        '忽如一夜春风来，千树万树梨花开。',
        '散入珠帘湿罗幕，狐裘不暖锦衾薄。',
        '瀚海阑干百丈冰，愁云惨淡万里凝。',
      ],
      linesEn: [
        'The north wind sweeps the earth, white grasses snap;',
        'In the northern sky, snow already flies in the eighth month.',
        'Suddenly it seems a spring breeze has blown through the night —',
        'Ten thousand trees bloom like pear blossoms in flower.',
        'Snowflakes drift through pearl curtains, wetting silk drapes;',
        'Fox-fur coats bring no warmth, brocade quilts feel thin.',
        'The vast desert is ringed by a hundred fathoms of ice;',
        'Gloomy clouds hang frozen for ten thousand li.',
      ],
      context: 'One of the greatest winter poems ever written, this ode to a northern snowstorm perfectly captures the magical, brutal beauty of Harbin\'s legendary winters. The line "ten thousand trees bloom like pear blossoms" is among the most celebrated images in all of Chinese poetry.',
      contextZh: '这首描写北国大雪的诗歌是中国文学中的经典之作。"忽如一夜春风来，千树万树梨花开"将大雪纷飞比作梨花盛开，意境奇绝，流传千古，恰与哈尔滨冰雪世界的壮美相映成趣。',
    },
  ],

  suzhou: [
    {
      title: '枫桥夜泊',
      titleEn: 'Mooring by Maple Bridge at Night',
      author: '张继',
      authorEn: 'Zhang Ji',
      dynasty: '唐代（约756年）',
      dynastyEn: 'Tang Dynasty (c. 756 AD)',
      lines: [
        '月落乌啼霜满天，江枫渔火对愁眠。',
        '姑苏城外寒山寺，夜半钟声到客船。',
      ],
      linesEn: [
        'The moon sets, crows cry, frost fills the sky;',
        'By the river maples and fishing lights, I sleep in sorrow.',
        'Outside Gusu city, the Hanshan Temple —',
        'At midnight, the bell reaches my traveler\'s boat.',
      ],
      context: 'Perhaps the most beloved poem about Suzhou, written while Zhang Ji moored at Feng Bridge on a sleepless night. The tolling bell of Hanshan Temple at midnight — still rung today — connects visitors across more than 1,200 years of history.',
      contextZh: '这首诗写于枫桥旁一个不眠之夜，是描绘苏州最广为人知的作品。寒山寺的夜半钟声至今仍在敲响，令无数游客与诗人跨越一千二百年的时空相遇。',
    },
  ],

  xiamen: [
    {
      title: '次北固山下',
      titleEn: 'Mooring below Beigु Mountain',
      author: '王湾',
      authorEn: 'Wang Wan',
      dynasty: '唐代（约712年）',
      dynastyEn: 'Tang Dynasty (c. 712 AD)',
      lines: [
        '客路青山外，行舟绿水前。',
        '潮平两岸阔，风正一帆悬。',
        '海日生残夜，江春入旧年。',
        '乡书何处达？归雁洛阳边。',
      ],
      linesEn: [
        'A traveler\'s road lies beyond the green hills;',
        'My boat moves forward on green water.',
        'At high tide, both banks widen;',
        'With fair wind, a single sail hangs taut.',
        'The ocean sun rises from the remnants of night;',
        'River spring enters the old year.',
        'Where can my letters home be sent?',
        'The returning geese fly toward Luoyang.',
      ],
      context: 'Written by a traveler journeying along China\'s southern coast, this poem captures the vast, luminous beauty of the sea at dawn — perfectly evoking the spirit of Xiamen\'s harbour and island shores.',
      contextZh: '这首诗写于南方沿海旅途之中，以开阔的海面和清晨的阳光表达旅人的思乡之情，与厦门海港的壮美景色相得益彰。',
    },
  ],

  guilin: [
    {
      title: '送桂州严大夫（节选）',
      titleEn: 'Seeing Off Governor Yan of Guizhou (excerpt)',
      author: '韩愈',
      authorEn: 'Han Yu',
      dynasty: '唐代（约805年）',
      dynastyEn: 'Tang Dynasty (c. 805 AD)',
      lines: [
        '苍苍森八桂，兹地在湘南。',
        '江作青罗带，山如碧玉篸。',
        '户多输翠羽，家自种黄甘。',
        '远胜登仙去，飞鸾不假骖。',
      ],
      linesEn: [
        'Lush and verdant, the eight cassia trees stand tall;',
        'This land lies south of the Xiang River.',
        'The river runs like a green silk ribbon;',
        'The mountains rise like jade hairpins.',
        'Households offer tribute of kingfisher feathers;',
        'Every family grows its own tangerines.',
        'Far better than ascending to the immortals —',
        'No need to ride a luan phoenix to the sky.',
      ],
      context: 'Han Yu\'s two famous lines — "the river a green silk ribbon, the mountains jade hairpins" — have defined Guilin\'s landscape in the Chinese imagination for over 1,200 years. No description of the Li River karst is more celebrated.',
      contextZh: '"江作青罗带，山如碧玉篸"——韩愈这两句诗为桂林山水写下了最传神的注脚，一千二百年来无人超越。',
    },
  ],

  kunming: [
    {
      title: '临江仙·滚滚长江东逝水',
      titleEn: 'Prelude to Immortals · The Great Yangtze Rolls East',
      author: '杨慎',
      authorEn: 'Yang Shen',
      dynasty: '明代（1511–1559年，谪戍云南时作）',
      dynastyEn: 'Ming Dynasty (1511–1559, written in Yunnan exile)',
      lines: [
        '滚滚长江东逝水，浪花淘尽英雄。',
        '是非成败转头空，青山依旧在，几度夕阳红。',
        '白发渔樵江渚上，惯看秋月春风。',
        '一壶浊酒喜相逢，古今多少事，都付笑谈中。',
      ],
      linesEn: [
        'The great Yangtze rolls east, its waters ever flowing,',
        'The waves wash away heroes one by one.',
        'Right and wrong, success and failure — all turn to nothing in a moment;',
        'The green mountains remain,',
        'Having witnessed countless scarlet sunsets.',
        'White-haired fishermen and woodsmen on the river banks',
        'Are accustomed to autumn moons and spring breezes.',
        'Over a jar of wine, what joy when old friends meet —',
        'All the events of history, ancient and modern,',
        'Are laughed away in easy conversation.',
      ],
      context: 'Yang Shen was exiled to Yunnan Province for 30 years after offending the emperor. This ci — the most famous poem ever written in Yunnan — transforms personal loss into serene philosophical acceptance, reflecting the eternal spring that Kunming represents.',
      contextZh: '杨慎因冒犯皇帝而被贬谪云南长达三十年。这首词是在云南写就的最著名诗篇，以长江东流、青山依旧的意象表达了超越个人得失的旷达情怀，恰与昆明"春城"的永恒意蕴相契合。',
    },
  ],

  zhangjiajie: [
    {
      title: '望天门山',
      titleEn: 'Gazing at Tianmen Mountain',
      author: '李白',
      authorEn: 'Li Bai',
      dynasty: '唐代（725年）',
      dynastyEn: 'Tang Dynasty (725 AD)',
      lines: [
        '天门中断楚江开，碧水东流至此回。',
        '两岸青山相对出，孤帆一片日边来。',
      ],
      linesEn: [
        'The Tianmen Mountains part, cloven by the Chu River;',
        'The blue water flows east, but turns back at this point.',
        'On both banks, green mountains face each other, rising;',
        'A lone sail glides in from where the sun meets the horizon.',
      ],
      context: 'Li Bai wrote this poem as he sailed past towering sandstone cliffs split by a river — a scene strikingly similar to Zhangjiajie\'s Avatar Mountains. The poem captures the awe of standing small before monumental rock pillars piercing the sky.',
      contextZh: '李白乘舟途经被大江劈开的两座高山时写下此诗，那高耸入云的砂岩山峰与张家界"阿凡达"天门山的奇景如出一辙。短短四句，道尽了人在天地间的渺小与壮美。',
    },
  ],

  hainan: [
    {
      title: '六月二十日夜渡海',
      titleEn: 'Crossing the Sea on the Night of the 20th Day of the 6th Month',
      author: '苏轼',
      authorEn: 'Su Shi (Su Dongpo)',
      dynasty: '宋代（1100年，离琼渡海之作）',
      dynastyEn: 'Song Dynasty (1100 AD, written departing Hainan)',
      lines: [
        '参横斗转欲三更，苦雨终风也解晴。',
        '云散月明谁点缀？天容海色本澄清。',
        '空余鲁叟乘桴意，粗识轩辕奏乐声。',
        '九死南荒吾不恨，兹游奇绝冠平生。',
      ],
      linesEn: [
        'Orion slants, the Dipper turns — midnight approaches;',
        'After bitter rain and relentless winds, the sky at last clears.',
        'Who adorns this scene when clouds scatter and the moon shines bright?',
        'Sky and sea are, by nature, pure and clear.',
        'I still share the old sage\'s wish to sail away on a raft;',
        'I barely recognise the Yellow Emperor\'s ancient music.',
        'Though I nearly perished in this southern wilderness, I hold no regret —',
        'This journey has been the most extraordinary of my life.',
      ],
      context: 'Su Shi was exiled to Hainan Island — then considered a barbaric exile — for three years. Rather than despair, he embraced island life and wrote some of his greatest works there. This poem, written the night he finally crossed back, closes with one of the most famous lines of defiant optimism in all of Chinese literature.',
      contextZh: '苏轼被贬至海南岛（时为荒蛮之地）三年。他非但没有沉沦，反而在岛上留下众多杰作。这首诗写于他渡海离琼之夜，末句"九死南荒吾不恨，兹游奇绝冠平生"是中国文学史上最著名的豁达之句之一。',
    },
  ],

  dali: [
    {
      title: '山居秋暝',
      titleEn: 'Autumn Dusk at a Mountain Retreat',
      author: '王维',
      authorEn: 'Wang Wei',
      dynasty: '唐代（约741年）',
      dynastyEn: 'Tang Dynasty (c. 741 AD)',
      lines: [
        '空山新雨后，天气晚来秋。',
        '明月松间照，清泉石上流。',
        '竹喧归浣女，莲动下渔舟。',
        '随意春芳歇，王孙自可留。',
      ],
      linesEn: [
        'After fresh rain in the empty mountains,',
        'The evening air holds the first touch of autumn.',
        'Bright moonlight shines through the pines;',
        'A clear stream flows over the stones.',
        'Bamboo rustles as the washer-women return home;',
        'Lotus stirs as fishing boats glide past.',
        'Let the spring fragrance fade as it will —',
        'A wandering soul may well choose to stay.',
      ],
      context: 'Wang Wei, China\'s "poet-painter," wrote this meditative masterpiece about a secluded mountain retreat. Its imagery of pine moonlight, stone-clear streams, and fishing boats mirrors perfectly the peaceful harmony of Dali\'s Erhai Lake and Cangshan Mountain.',
      contextZh: '诗佛王维写下这首清新自然的山水诗，描绘了隐居山中的澄明意境。明月、清泉、竹林与渔舟，与大理洱海和苍山的宁静美景相互辉映，令人心旷神怡。',
    },
  ],

  yangshuo: [
    {
      title: '江雪',
      titleEn: 'River Snow',
      author: '柳宗元',
      authorEn: 'Liu Zongyuan',
      dynasty: '唐代（约805年）',
      dynastyEn: 'Tang Dynasty (c. 805 AD)',
      lines: [
        '千山鸟飞绝，万径人踪灭。',
        '孤舟蓑笠翁，独钓寒江雪。',
      ],
      linesEn: [
        'From a thousand mountains, birds have vanished;',
        'From ten thousand paths, all footprints are gone.',
        'A lone boat — an old man in a raincoat and hat,',
        'Fishing alone in the cold river snow.',
      ],
      context: 'Written while Liu Zongyuan was in political exile in southern China, near the very karst landscape that defines Yangshuo. In just 20 Chinese characters, he paints the most minimalist and haunting winter scene in all of Chinese poetry — a lone fisherman dwarfed by silent, snow-covered peaks.',
      contextZh: '柳宗元遭贬谪时于南方写下此诗，地处与阳朔相近的桂林喀斯特地带。仅二十个汉字，便勾勒出中国诗歌史上最简洁也最震撼人心的冬日画面——漫天飞雪中，一叶孤舟，一竿独钓。',
    },
  ],

  lijiang: [
    {
      title: '长相思·山一程',
      titleEn: 'Everlasting Longing · Mountain by Mountain',
      author: '纳兰性德',
      authorEn: 'Nalan Xingde',
      dynasty: '清代（1685年）',
      dynastyEn: 'Qing Dynasty (1685 AD)',
      lines: [
        '山一程，水一程，',
        '身向榆关那畔行，夜深千帐灯。',
        '风一更，雪一更，',
        '聒碎乡心梦不成，故园无此声。',
      ],
      linesEn: [
        'Mountain by mountain, river by river,',
        'My body travels toward Shanhai Pass —',
        'Deep in the night, a thousand tents of lanterns glow.',
        'Through wind, through snow,',
        'My longing for home shatters into pieces,',
        'My dream cannot take hold —',
        'There is no such sound in my garden of old.',
      ],
      context: 'Nalan Xingde, the Qing Dynasty\'s greatest lyric poet, wrote this heartfelt ci while on an imperial expedition through mountain wilderness. Its winding journey through peaks and rivers echoes the ancient Tea Horse Road that passed through Lijiang, carrying merchants and memories between Yunnan and Tibet.',
      contextZh: '清代最伟大的词人纳兰性德随扈出行时写下这首思乡之词。"山一程，水一程"的跋涉意象，与古代茶马古道穿越丽江的漫漫旅途遥相呼应，令人感受到千年来旅人的离愁别绪。',
    },
  ],

  fenghuang: [
    {
      title: '梦江南·千万恨',
      titleEn: 'Dreaming of the South · Ten Thousand Sorrows',
      author: '温庭筠',
      authorEn: 'Wen Tingyun',
      dynasty: '唐代（约850年）',
      dynastyEn: 'Tang Dynasty (c. 850 AD)',
      lines: [
        '千万恨，恨极在天涯。',
        '山月不知心里事，',
        '水风空落眼前花。',
        '摇曳碧云斜。',
      ],
      linesEn: [
        'Ten thousand sorrows — the deepest sorrow lies at the far horizon.',
        'The mountain moon knows nothing of the heart\'s pain;',
        'The water breeze idly scatters blossoms before my eyes.',
        'Swaying, the azure clouds drift sideways.',
      ],
      context: 'Wen Tingyun, master of the ci form, paints a scene of melancholy beauty that could have been drawn directly from Fenghuang\'s ancient riverside town: stilted houses reflected in the Tuo River, petals drifting on the night breeze, a crescent moon over layered green hills.',
      contextZh: '花间词派鼻祖温庭筠以寥寥数语勾勒出一幅令人动容的古镇夜景。山月、水风与飘落的花瓣，仿佛正是凤凰古城沱江边吊脚楼下的某个静谧夜晚。',
    },
  ],

};

export default poetry;
