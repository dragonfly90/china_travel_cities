// HSR (High-Speed Rail) travel times between major Chinese cities in hours
// Source: approximate G-train durations from 12306/Trip.com
const travelTimes = {
  'beijing-shanghai': 4.5,
  'beijing-xian': 4.5,
  'beijing-chengdu': 7.5,
  'beijing-hangzhou': 4.5,
  'beijing-harbin': 5,
  'beijing-suzhou': 4.5,
  'beijing-zhangjiajie': 7,
  'shanghai-hangzhou': 1,
  'shanghai-suzhou': 0.5,
  'shanghai-xian': 6,
  'shanghai-chengdu': 7.5,
  'shanghai-xiamen': 4,
  'shanghai-guilin': 6.5,
  'shanghai-kunming': 10.5,
  'shanghai-zhangjiajie': 5.5,
  'xian-chengdu': 3,
  'xian-chongqing': 5,
  'xian-zhangjiajie': 6,
  'chengdu-chongqing': 1.5,
  'chengdu-kunming': 4.5,
  'chengdu-xian': 3,
  'chengdu-guilin': 7,
  'chongqing-kunming': 4,
  'chongqing-guilin': 5,
  'chongqing-zhangjiajie': 4.5,
  'hangzhou-xiamen': 4,
  'hangzhou-suzhou': 1.5,
  'hangzhou-guilin': 7,
  'guilin-yangshuo': 0.5,
  'guilin-kunming': 5,
  'guilin-zhangjiajie': 4,
  'guilin-fenghuang': 3,
  'kunming-dali': 2,
  'kunming-lijiang': 3.5,
  'dali-lijiang': 2,
  'xiamen-hangzhou': 4,
  'harbin-beijing': 5,
  'suzhou-hangzhou': 1.5,
  'zhangjiajie-fenghuang': 1.5,
  'hainan-guilin': 4,
};

/**
 * Get travel time between two cities (order-independent)
 * @param {string} cityA - city id
 * @param {string} cityB - city id
 * @returns {number|null} hours or null if no direct route data
 */
export function getTravelTime(cityA, cityB) {
  if (cityA === cityB) return 0;
  return travelTimes[`${cityA}-${cityB}`]
    || travelTimes[`${cityB}-${cityA}`]
    || null;
}

export default travelTimes;
