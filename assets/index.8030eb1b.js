import{d,e as o,f as s,g as u}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.f1663c16.js";import"./index.31add072.js";import"./Logo.vue_vue_type_script_setup_true_lang.e412b31b.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.0838a652.js";import"./use-controllable.a25e074a.js";/*! PatchyVideo/Platinum by VoileLabs */var m={lessThanXSeconds:{one:"1秒未満",other:"{{count}}秒未満",oneWithSuffix:"約1秒",otherWithSuffix:"約{{count}}秒"},xSeconds:{one:"1秒",other:"{{count}}秒"},halfAMinute:"30秒",lessThanXMinutes:{one:"1分未満",other:"{{count}}分未満",oneWithSuffix:"約1分",otherWithSuffix:"約{{count}}分"},xMinutes:{one:"1分",other:"{{count}}分"},aboutXHours:{one:"約1時間",other:"約{{count}}時間"},xHours:{one:"1時間",other:"{{count}}時間"},xDays:{one:"1日",other:"{{count}}日"},aboutXWeeks:{one:"約1週間",other:"約{{count}}週間"},xWeeks:{one:"1週間",other:"{{count}}週間"},aboutXMonths:{one:"約1か月",other:"約{{count}}か月"},xMonths:{one:"1か月",other:"{{count}}か月"},aboutXYears:{one:"約1年",other:"約{{count}}年"},xYears:{one:"1年",other:"{{count}}年"},overXYears:{one:"1年以上",other:"{{count}}年以上"},almostXYears:{one:"1年近く",other:"{{count}}年近く"}},l=function(a,r,e){e=e||{};var t,n=m[a];return typeof n=="string"?t=n:r===1?e.addSuffix&&n.oneWithSuffix?t=n.oneWithSuffix:t=n.one:e.addSuffix&&n.otherWithSuffix?t=n.otherWithSuffix.replace("{{count}}",String(r)):t=n.other.replace("{{count}}",String(r)),e.addSuffix?e.comparison&&e.comparison>0?t+"後":t+"前":t},h={full:"y年M月d日EEEE",long:"y年M月d日",medium:"y/MM/dd",short:"y/MM/dd"},c={full:"H時mm分ss秒 zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},f={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},v={date:d({formats:h,defaultWidth:"full"}),time:d({formats:c,defaultWidth:"full"}),dateTime:d({formats:f,defaultWidth:"full"})},b={lastWeek:"先週のeeeeのp",yesterday:"昨日のp",today:"今日のp",tomorrow:"明日のp",nextWeek:"翌週のeeeeのp",other:"P"},g=function(a,r,e,t){return b[a]},P={narrow:["BC","AC"],abbreviated:["紀元前","西暦"],wide:["紀元前","西暦"]},w={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["第1四半期","第2四半期","第3四半期","第4四半期"]},y={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},W={narrow:["日","月","火","水","木","金","土"],short:["日","月","火","水","木","金","土"],abbreviated:["日","月","火","水","木","金","土"],wide:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"]},p={narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}},M={narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}},x=function(a,r){var e=Number(a),t=String(r==null?void 0:r.unit);switch(t){case"year":return"".concat(e,"年");case"quarter":return"第".concat(e,"四半期");case"month":return"".concat(e,"月");case"week":return"第".concat(e,"週");case"date":return"".concat(e,"日");case"hour":return"".concat(e,"時");case"minute":return"".concat(e,"分");case"second":return"".concat(e,"秒");default:return"".concat(e)}},S={ordinalNumber:x,era:o({values:P,defaultWidth:"wide"}),quarter:o({values:w,defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:o({values:y,defaultWidth:"wide"}),day:o({values:W,defaultWidth:"wide"}),dayPeriod:o({values:p,defaultWidth:"wide",formattingValues:M,defaultFormattingWidth:"wide"})},D=/^第?\d+(年|四半期|月|週|日|時|分|秒)?/i,k=/\d+/i,C={narrow:/^(B\.?C\.?|A\.?D\.?)/i,abbreviated:/^(紀元[前後]|西暦)/i,wide:/^(紀元[前後]|西暦)/i},F={narrow:[/^B/i,/^A/i],any:[/^(紀元前)/i,/^(西暦|紀元後)/i]},z={narrow:/^[1234]/i,abbreviated:/^Q[1234]/i,wide:/^第[1234一二三四１２３４]四半期/i},E={any:[/(1|一|１)/i,/(2|二|２)/i,/(3|三|３)/i,/(4|四|４)/i]},N={narrow:/^([123456789]|1[012])/,abbreviated:/^([123456789]|1[012])月/i,wide:/^([123456789]|1[012])月/i},V={any:[/^1\D/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},X={narrow:/^[日月火水木金土]/,short:/^[日月火水木金土]/,abbreviated:/^[日月火水木金土]/,wide:/^[日月火水木金土]曜日/},A={any:[/^日/,/^月/,/^火/,/^水/,/^木/,/^金/,/^土/]},Q={any:/^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i},B={any:{am:/^(A|午前)/i,pm:/^(P|午後)/i,midnight:/^深夜|真夜中/i,noon:/^正午/i,morning:/^朝/i,afternoon:/^午後/i,evening:/^夜/i,night:/^深夜/i}},H={ordinalNumber:s({matchPattern:D,parsePattern:k,valueCallback:function(a){return parseInt(a,10)}}),era:u({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any"}),quarter:u({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:u({matchPatterns:N,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any"}),day:u({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:A,defaultParseWidth:"any"}),dayPeriod:u({matchPatterns:Q,defaultMatchWidth:"any",parsePatterns:B,defaultParseWidth:"any"})},O={code:"ja",formatDistance:l,formatLong:v,formatRelative:g,localize:S,match:H,options:{weekStartsOn:0,firstWeekContainsDate:1}};export{O as default};
//# sourceMappingURL=index.8030eb1b.js.map
