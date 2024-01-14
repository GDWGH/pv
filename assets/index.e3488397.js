import{d as u,e as o,f as s,g as d}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.7ec5a846.js";import{i as l}from"./index.6f94bd0b.js";import"./index.7f85969c.js";import"./Logo.vue_vue_type_script_setup_true_lang.a8beb02b.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.ef9e8caf.js";import"./use-controllable.061971ac.js";/*! PatchyVideo/Platinum by VoileLabs */var h={lessThanXSeconds:{one:"不到 1 秒",other:"不到 {{count}} 秒"},xSeconds:{one:"1 秒",other:"{{count}} 秒"},halfAMinute:"半分钟",lessThanXMinutes:{one:"不到 1 分钟",other:"不到 {{count}} 分钟"},xMinutes:{one:"1 分钟",other:"{{count}} 分钟"},xHours:{one:"1 小时",other:"{{count}} 小时"},aboutXHours:{one:"大约 1 小时",other:"大约 {{count}} 小时"},xDays:{one:"1 天",other:"{{count}} 天"},aboutXWeeks:{one:"大约 1 个星期",other:"大约 {{count}} 个星期"},xWeeks:{one:"1 个星期",other:"{{count}} 个星期"},aboutXMonths:{one:"大约 1 个月",other:"大约 {{count}} 个月"},xMonths:{one:"1 个月",other:"{{count}} 个月"},aboutXYears:{one:"大约 1 年",other:"大约 {{count}} 年"},xYears:{one:"1 年",other:"{{count}} 年"},overXYears:{one:"超过 1 年",other:"超过 {{count}} 年"},almostXYears:{one:"将近 1 年",other:"将近 {{count}} 年"}},c=function(e,t,a){var n,i=h[e];return typeof i=="string"?n=i:t===1?n=i.one:n=i.other.replace("{{count}}",String(t)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?n+"内":n+"前":n},f={full:"y'年'M'月'd'日' EEEE",long:"y'年'M'月'd'日'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},v={full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},g={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},b={date:u({formats:f,defaultWidth:"full"}),time:u({formats:v,defaultWidth:"full"}),dateTime:u({formats:g,defaultWidth:"full"})};function m(r,e,t){var a="eeee p";return l(r,e,t)?a:r.getTime()>e.getTime()?"'下个'"+a:"'上个'"+a}var P={lastWeek:m,yesterday:"'昨天' p",today:"'今天' p",tomorrow:"'明天' p",nextWeek:m,other:"PP p"},y=function(e,t,a,n){var i=P[e];return typeof i=="function"?i(t,a,n):i},w={narrow:["前","公元"],abbreviated:["前","公元"],wide:["公元前","公元"]},p={narrow:["1","2","3","4"],abbreviated:["第一季","第二季","第三季","第四季"],wide:["第一季度","第二季度","第三季度","第四季度"]},W={narrow:["一","二","三","四","五","六","七","八","九","十","十一","十二"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},M={narrow:["日","一","二","三","四","五","六"],short:["日","一","二","三","四","五","六"],abbreviated:["周日","周一","周二","周三","周四","周五","周六"],wide:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},k={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"}},S={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"}},x=function(e,t){var a=Number(e);switch(t==null?void 0:t.unit){case"date":return a.toString()+"日";case"hour":return a.toString()+"时";case"minute":return a.toString()+"分";case"second":return a.toString()+"秒";default:return"第 "+a.toString()}},D={ordinalNumber:x,era:o({values:w,defaultWidth:"wide"}),quarter:o({values:p,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:o({values:W,defaultWidth:"wide"}),day:o({values:M,defaultWidth:"wide"}),dayPeriod:o({values:k,defaultWidth:"wide",formattingValues:S,defaultFormattingWidth:"wide"})},F=/^(第\s*)?\d+(日|时|分|秒)?/i,z=/\d+/i,C={narrow:/^(前)/i,abbreviated:/^(前)/i,wide:/^(公元前|公元)/i},N={any:[/^(前)/i,/^(公元)/i]},V={narrow:/^[1234]/i,abbreviated:/^第[一二三四]刻/i,wide:/^第[一二三四]刻钟/i},X={any:[/(1|一)/i,/(2|二)/i,/(3|三)/i,/(4|四)/i]},T={narrow:/^(一|二|三|四|五|六|七|八|九|十[二一])/i,abbreviated:/^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,wide:/^(一|二|三|四|五|六|七|八|九|十[二一])月/i},E={narrow:[/^一/i,/^二/i,/^三/i,/^四/i,/^五/i,/^六/i,/^七/i,/^八/i,/^九/i,/^十(?!(一|二))/i,/^十一/i,/^十二/i],any:[/^一|1/i,/^二|2/i,/^三|3/i,/^四|4/i,/^五|5/i,/^六|6/i,/^七|7/i,/^八|8/i,/^九|9/i,/^十(?!(一|二))|10/i,/^十一|11/i,/^十二|12/i]},L={narrow:/^[一二三四五六日]/i,short:/^[一二三四五六日]/i,abbreviated:/^周[一二三四五六日]/i,wide:/^星期[一二三四五六日]/i},R={any:[/日/i,/一/i,/二/i,/三/i,/四/i,/五/i,/六/i]},Y={any:/^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i},q={any:{am:/^上午?/i,pm:/^下午?/i,midnight:/^午夜/i,noon:/^[中正]午/i,morning:/^早上/i,afternoon:/^下午/i,evening:/^晚上?/i,night:/^凌晨/i}},O={ordinalNumber:s({matchPattern:F,parsePattern:z,valueCallback:function(e){return parseInt(e,10)}}),era:d({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any"}),quarter:d({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:d({matchPatterns:T,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),day:d({matchPatterns:L,defaultMatchWidth:"wide",parsePatterns:R,defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:Y,defaultMatchWidth:"any",parsePatterns:q,defaultParseWidth:"any"})},B={code:"zh-CN",formatDistance:c,formatLong:b,formatRelative:y,localize:D,match:O,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{B as default};
//# sourceMappingURL=index.e3488397.js.map
