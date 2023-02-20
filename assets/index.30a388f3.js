import{d as u,e as i,f as s,g as o}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.aed9291f.js";import"./index.0672c069.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ca43cab.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.3b33fce1.js";import"./use-controllable.ea92c232.js";/*! PatchyVideo/Platinum by VoileLabs */var m={lessThanXSeconds:{one:"少於 1 秒",other:"少於 {{count}} 秒"},xSeconds:{one:"1 秒",other:"{{count}} 秒"},halfAMinute:"半分鐘",lessThanXMinutes:{one:"少於 1 分鐘",other:"少於 {{count}} 分鐘"},xMinutes:{one:"1 分鐘",other:"{{count}} 分鐘"},xHours:{one:"1 小時",other:"{{count}} 小時"},aboutXHours:{one:"大約 1 小時",other:"大約 {{count}} 小時"},xDays:{one:"1 天",other:"{{count}} 天"},aboutXWeeks:{one:"大約 1 個星期",other:"大約 {{count}} 個星期"},xWeeks:{one:"1 個星期",other:"{{count}} 個星期"},aboutXMonths:{one:"大約 1 個月",other:"大約 {{count}} 個月"},xMonths:{one:"1 個月",other:"{{count}} 個月"},aboutXYears:{one:"大約 1 年",other:"大約 {{count}} 年"},xYears:{one:"1 年",other:"{{count}} 年"},overXYears:{one:"超過 1 年",other:"超過 {{count}} 年"},almostXYears:{one:"將近 1 年",other:"將近 {{count}} 年"}},l=function(e,t,a){var r,d=m[e];return typeof d=="string"?r=d:t===1?r=d.one:r=d.other.replace("{{count}}",String(t)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?r+"內":r+"前":r},h={full:"y'年'M'月'd'日' EEEE",long:"y'年'M'月'd'日'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},c={full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},v={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},f={date:u({formats:h,defaultWidth:"full"}),time:u({formats:c,defaultWidth:"full"}),dateTime:u({formats:v,defaultWidth:"full"})},b={lastWeek:"'上個'eeee p",yesterday:"'昨天' p",today:"'今天' p",tomorrow:"'明天' p",nextWeek:"'下個'eeee p",other:"P"},g=function(e,t,a,r){return b[e]},P={narrow:["前","公元"],abbreviated:["前","公元"],wide:["公元前","公元"]},y={narrow:["1","2","3","4"],abbreviated:["第一刻","第二刻","第三刻","第四刻"],wide:["第一刻鐘","第二刻鐘","第三刻鐘","第四刻鐘"]},w={narrow:["一","二","三","四","五","六","七","八","九","十","十一","十二"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},p={narrow:["日","一","二","三","四","五","六"],short:["日","一","二","三","四","五","六"],abbreviated:["週日","週一","週二","週三","週四","週五","週六"],wide:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},W={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"}},M={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"}},k=function(e,t){var a=Number(e);switch(t==null?void 0:t.unit){case"date":return a+"日";case"hour":return a+"時";case"minute":return a+"分";case"second":return a+"秒";default:return"第 "+a}},D={ordinalNumber:k,era:i({values:P,defaultWidth:"wide"}),quarter:i({values:y,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:i({values:w,defaultWidth:"wide"}),day:i({values:p,defaultWidth:"wide"}),dayPeriod:i({values:W,defaultWidth:"wide",formattingValues:M,defaultFormattingWidth:"wide"})},x=/^(第\s*)?\d+(日|時|分|秒)?/i,z=/\d+/i,F={narrow:/^(前)/i,abbreviated:/^(前)/i,wide:/^(公元前|公元)/i},V={any:[/^(前)/i,/^(公元)/i]},X={narrow:/^[1234]/i,abbreviated:/^第[一二三四]刻/i,wide:/^第[一二三四]刻鐘/i},C={any:[/(1|一)/i,/(2|二)/i,/(3|三)/i,/(4|四)/i]},N={narrow:/^(一|二|三|四|五|六|七|八|九|十[二一])/i,abbreviated:/^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,wide:/^(一|二|三|四|五|六|七|八|九|十[二一])月/i},E={narrow:[/^一/i,/^二/i,/^三/i,/^四/i,/^五/i,/^六/i,/^七/i,/^八/i,/^九/i,/^十(?!(一|二))/i,/^十一/i,/^十二/i],any:[/^一|1/i,/^二|2/i,/^三|3/i,/^四|4/i,/^五|5/i,/^六|6/i,/^七|7/i,/^八|8/i,/^九|9/i,/^十(?!(一|二))|10/i,/^十一|11/i,/^十二|12/i]},L={narrow:/^[一二三四五六日]/i,short:/^[一二三四五六日]/i,abbreviated:/^週[一二三四五六日]/i,wide:/^星期[一二三四五六日]/i},S={any:[/日/i,/一/i,/二/i,/三/i,/四/i,/五/i,/六/i]},T={any:/^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨)/i},R={any:{am:/^上午?/i,pm:/^下午?/i,midnight:/^午夜/i,noon:/^[中正]午/i,morning:/^早上/i,afternoon:/^下午/i,evening:/^晚上?/i,night:/^凌晨/i}},Y={ordinalNumber:s({matchPattern:x,parsePattern:z,valueCallback:function(e){return parseInt(e,10)}}),era:o({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any"}),quarter:o({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:o({matchPatterns:N,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),day:o({matchPatterns:L,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any"}),dayPeriod:o({matchPatterns:T,defaultMatchWidth:"any",parsePatterns:R,defaultParseWidth:"any"})},A={code:"zh-TW",formatDistance:l,formatLong:f,formatRelative:g,localize:D,match:Y,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{A as default};
//# sourceMappingURL=index.30a388f3.js.map
