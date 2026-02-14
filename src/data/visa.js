/**
 * China Visa Policy Data — Updated February 2026
 *
 * Sources:
 * - https://www.china-briefing.com/news/china-visa-free-travel-policies-complete-guide/
 * - https://english.www.gov.cn/news/202511/04/content_WS69094ae0c6d00ca5f9a07472.html
 * - https://www.chinadiscovery.com/chinese-visa/240-hour-visa-free-transit.html
 * - https://newlandchase.com/visa-free-entry-to-china-extended-through-2026/
 */

const visaData = {
  lastUpdated: 'February 2026',

  // ---- 30-Day Visa-Free Entry (Unilateral) ----
  visaFree30Day: {
    validUntil: 'December 31, 2026',
    maxStay: '30 days',
    purposes: 'Tourism, business, family visits, exchange, and transit',
    countries: [
      // Europe
      'France', 'Germany', 'Italy', 'Netherlands', 'Spain', 'Switzerland',
      'Ireland', 'Hungary', 'Austria', 'Belgium', 'Luxembourg', 'Poland',
      'Portugal', 'Greece', 'Cyprus', 'Slovenia', 'Slovakia', 'Norway',
      'Finland', 'Denmark', 'Iceland', 'Andorra', 'Monaco', 'Liechtenstein',
      'Bulgaria', 'Romania', 'Croatia', 'Montenegro', 'North Macedonia',
      'Malta', 'Estonia', 'Latvia', 'Sweden',
      // Asia-Pacific
      'South Korea', 'Japan', 'New Zealand', 'Australia',
      // Americas
      'Brazil', 'Argentina', 'Chile', 'Peru', 'Uruguay',
      // Middle East
      'Saudi Arabia', 'Oman', 'Kuwait', 'Bahrain',
    ],
  },

  // ---- 240-Hour Visa-Free Transit ----
  transit240Hour: {
    maxStay: '240 hours (10 days)',
    requirement: 'Must have valid passport (3+ months validity) and onward ticket to a third country/region',
    totalPorts: 65,
    totalProvinces: 24,
    countriesCount: 55,
    regions: {
      europe: [
        'Austria', 'Belgium', 'Czech Republic', 'Denmark', 'Estonia', 'Finland',
        'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Italy', 'Latvia',
        'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal',
        'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Russia',
        'United Kingdom', 'Ireland', 'Cyprus', 'Bulgaria', 'Romania', 'Ukraine',
        'Serbia', 'Croatia', 'Bosnia and Herzegovina', 'Montenegro',
        'North Macedonia', 'Albania', 'Monaco', 'Belarus', 'Norway',
      ],
      americas: ['United States', 'Canada', 'Brazil', 'Mexico', 'Argentina', 'Chile'],
      oceania: ['Australia', 'New Zealand'],
      asia: ['South Korea', 'Japan', 'Singapore', 'Brunei', 'United Arab Emirates', 'Indonesia', 'Qatar'],
    },
    keyPorts: [
      { city: 'Beijing', ports: ['Capital International Airport', 'Daxing International Airport'] },
      { city: 'Shanghai', ports: ['Pudong Airport', 'Hongqiao Airport', 'Shanghai Port', 'Railway Station'] },
      { city: 'Guangzhou', ports: ['Baiyun International Airport'] },
      { city: 'Chengdu', ports: ['Tianfu International Airport', 'Shuangliu Airport'] },
      { city: 'Shenzhen', ports: ['Baoan International Airport'] },
      { city: 'Kunming', ports: ['Changshui International Airport'] },
      { city: "Xi'an", ports: ['Xianyang International Airport'] },
      { city: 'Hangzhou', ports: ['Xiaoshan International Airport'] },
      { city: 'Xiamen', ports: ['Gaoqi International Airport'] },
      { city: 'Chongqing', ports: ['Jiangbei International Airport'] },
    ],
  },

  // ---- Bilateral Visa Exemption (Mutual) ----
  bilateral: [
    { country: 'Russia', maxStay: '30 days', note: 'Ordinary passport holders, valid Sep 2025 – Sep 2026' },
    { country: 'Serbia', maxStay: '30 days', note: 'Mutual visa exemption' },
    { country: 'Qatar', maxStay: '30 days', note: 'Mutual visa exemption' },
    { country: 'UAE', maxStay: '30 days', note: 'Mutual visa exemption' },
    { country: 'Singapore', maxStay: '30 days', note: 'Mutual visa exemption' },
    { country: 'Thailand', maxStay: '30 days', note: 'Mutual visa exemption (permanent)' },
    { country: 'Georgia', maxStay: '30 days', note: 'Mutual visa exemption' },
    { country: 'Fiji', maxStay: '30 days', note: 'Mutual visa exemption' },
    { country: 'Tonga', maxStay: '30 days', note: 'Mutual visa exemption' },
  ],

  // ---- Special Policies ----
  special: [
    {
      name: 'Hainan 30-Day Visa-Free',
      desc: '59 countries can visit Hainan Island visa-free for up to 30 days through registered travel agencies.',
    },
    {
      name: 'Digital Entry Card',
      desc: 'Since November 2025, foreigners can fill in entry info online before arriving via the NIA website or "NIA 12367" App, speeding up immigration.',
    },
    {
      name: '24-Hour Direct Transit',
      desc: 'Passengers transiting through 10 major airports can transit within 24 hours without immigration inspection.',
    },
  ],

  // ---- US/UK/Canada Specific Info ----
  specificCountries: {
    us: {
      visaFree30Day: false,
      transit240Hour: true,
      note: 'US passport holders are eligible for 240-hour visa-free transit. For longer stays, an L-visa (tourist) is required (~$185). Canada visa-free entry expected soon.',
    },
    uk: {
      visaFree30Day: false,
      transit240Hour: true,
      note: 'UK passport holders are eligible for 240-hour visa-free transit. For longer stays, apply for an L-visa.',
    },
    canada: {
      visaFree30Day: false,
      transit240Hour: true,
      note: 'Canadian passport holders are eligible for 240-hour visa-free transit. Visa-free entry (30-day) is expected to be announced in 2026.',
    },
  },
};

export default visaData;
