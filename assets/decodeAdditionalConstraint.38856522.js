import{a1 as d,o as l,g as f,v as g}from"./index.23936e6e.js";/*! PatchyVideo/Platinum by VoileLabs */const u={},c={class:"inline-flex items-center px-4 py-1 border border-purple-300 font-medium rounded-lg light:hover:text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700"};function b(o,e){return l(),f("button",c,[g(o.$slots,"default")])}const A=d(u,[["render",b]]);function $(o){var n,i,s;if(o==="")return"";const e=JSON.parse(decodeURI(window.atob(o)));let t="";if(e.searchContentAndOrNot&&(t+=`${e.searchContentAndOrNot} `),e.exceptContent){const a=e.exceptContent.trim().split(" ");for(let r=0;r<a.length;r++)t+=`NOT ${a[r]} `}if((n=e.visibleSites)!=null&&n.length&&e.visibleSites.findIndex(a=>a==="")===-1){let a="";for(let r=0;r<e.visibleSites.length;r++)a+=`site:${e.visibleSites[r]} `;t+=`ANY(${a}) `}return((i=e.date1)==null?void 0:i.beforeAfterEqualDate1)&&e.date1.beforeAfterEqualDate1!==""&&(t+=`date:${e.date1.beforeAfterEqualDate1}${e.date1.year1}-${e.date1.month1}-${e.date1.day1} `),((s=e.date2)==null?void 0:s.beforeAfterEqualDate2)&&e.date2.beforeAfterEqualDate2!==""&&(t+=`date:${e.date2.beforeAfterEqualDate2}${e.date2.year2}-${e.date2.month2}-${e.date2.day2} `),e.tag.moreLessEqualTagNum&&e.tag.moreLessEqualTagNum!==""&&(t+=`tags:${e.tag.moreLessEqualTagNum}${e.tag.tagNum} `),e.onlyShowAutotagedVideos&&!e.searchContentAndOrNot.test(/Auto_tagged/)&&!e.exceptContent.test(/Auto_tagged/)&&(t+="Auto_tagged "),t}export{A as P,$ as g};
//# sourceMappingURL=decodeAdditionalConstraint.38856522.js.map
