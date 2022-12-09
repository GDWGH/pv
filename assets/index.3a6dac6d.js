import{d,e as o,f as s,g as u}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.57cea977.js";import"./index.15012c7a.js";import"./Logo.vue_vue_type_script_setup_true_lang.abb8fabe.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.d5bf6964.js";import"./use-controllable.30ca8e24.js";/*! PatchyVideo/Platinum by VoileLabs */var m={lessThanXSeconds:{one:"1びょうみまん",other:"{{count}}びょうみまん",oneWithSuffix:"やく1びょう",otherWithSuffix:"やく{{count}}びょう"},xSeconds:{one:"1びょう",other:"{{count}}びょう"},halfAMinute:"30びょう",lessThanXMinutes:{one:"1ぷんみまん",other:"{{count}}ふんみまん",oneWithSuffix:"やく1ぷん",otherWithSuffix:"やく{{count}}ふん"},xMinutes:{one:"1ぷん",other:"{{count}}ふん"},aboutXHours:{one:"やく1じかん",other:"やく{{count}}じかん"},xHours:{one:"1じかん",other:"{{count}}じかん"},xDays:{one:"1にち",other:"{{count}}にち"},aboutXWeeks:{one:"やく1しゅうかん",other:"やく{{count}}しゅうかん"},xWeeks:{one:"1しゅうかん",other:"{{count}}しゅうかん"},aboutXMonths:{one:"やく1かげつ",other:"やく{{count}}かげつ"},xMonths:{one:"1かげつ",other:"{{count}}かげつ"},aboutXYears:{one:"やく1ねん",other:"やく{{count}}ねん"},xYears:{one:"1ねん",other:"{{count}}ねん"},overXYears:{one:"1ねんいじょう",other:"{{count}}ねんいじょう"},almostXYears:{one:"1ねんちかく",other:"{{count}}ねんちかく"}},l=function(a,r,e){e=e||{};var t,n=m[a];return typeof n=="string"?t=n:r===1?e.addSuffix&&n.oneWithSuffix?t=n.oneWithSuffix:t=n.one:e.addSuffix&&n.otherWithSuffix?t=n.otherWithSuffix.replace("{{count}}",String(r)):t=n.other.replace("{{count}}",String(r)),e.addSuffix?e.comparison&&e.comparison>0?t+"あと":t+"まえ":t},h={full:"yねんMがつdにちEEEE",long:"yねんMがつdにち",medium:"y/MM/dd",short:"y/MM/dd"},c={full:"Hじmmふんssびょう zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},f={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},v={date:d({formats:h,defaultWidth:"full"}),time:d({formats:c,defaultWidth:"full"}),dateTime:d({formats:f,defaultWidth:"full"})},b={lastWeek:"せんしゅうのeeeeのp",yesterday:"きのうのp",today:"きょうのp",tomorrow:"あしたのp",nextWeek:"よくしゅうのeeeeのp",other:"P"},g=function(a,r,e,t){return b[a]},P={narrow:["BC","AC"],abbreviated:["きげんぜん","せいれき"],wide:["きげんぜん","せいれき"]},w={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["だい1しはんき","だい2しはんき","だい3しはんき","だい4しはんき"]},y={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1がつ","2がつ","3がつ","4がつ","5がつ","6がつ","7がつ","8がつ","9がつ","10がつ","11がつ","12がつ"],wide:["1がつ","2がつ","3がつ","4がつ","5がつ","6がつ","7がつ","8がつ","9がつ","10がつ","11がつ","12がつ"]},W={narrow:["にち","げつ","か","すい","もく","きん","ど"],short:["にち","げつ","か","すい","もく","きん","ど"],abbreviated:["にち","げつ","か","すい","もく","きん","ど"],wide:["にちようび","げつようび","かようび","すいようび","もくようび","きんようび","どようび"]},p={narrow:{am:"ごぜん",pm:"ごご",midnight:"しんや",noon:"しょうご",morning:"あさ",afternoon:"ごご",evening:"よる",night:"しんや"},abbreviated:{am:"ごぜん",pm:"ごご",midnight:"しんや",noon:"しょうご",morning:"あさ",afternoon:"ごご",evening:"よる",night:"しんや"},wide:{am:"ごぜん",pm:"ごご",midnight:"しんや",noon:"しょうご",morning:"あさ",afternoon:"ごご",evening:"よる",night:"しんや"}},M={narrow:{am:"ごぜん",pm:"ごご",midnight:"しんや",noon:"しょうご",morning:"あさ",afternoon:"ごご",evening:"よる",night:"しんや"},abbreviated:{am:"ごぜん",pm:"ごご",midnight:"しんや",noon:"しょうご",morning:"あさ",afternoon:"ごご",evening:"よる",night:"しんや"},wide:{am:"ごぜん",pm:"ごご",midnight:"しんや",noon:"しょうご",morning:"あさ",afternoon:"ごご",evening:"よる",night:"しんや"}},x=function(a,r){var e=Number(a),t=String(r==null?void 0:r.unit);switch(t){case"year":return"".concat(e,"ねん");case"quarter":return"だい".concat(e,"しはんき");case"month":return"".concat(e,"がつ");case"week":return"だい".concat(e,"しゅう");case"date":return"".concat(e,"にち");case"hour":return"".concat(e,"じ");case"minute":return"".concat(e,"ふん");case"second":return"".concat(e,"びょう");default:return"".concat(e)}},S={ordinalNumber:x,era:o({values:P,defaultWidth:"wide"}),quarter:o({values:w,defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:o({values:y,defaultWidth:"wide"}),day:o({values:W,defaultWidth:"wide"}),dayPeriod:o({values:p,defaultWidth:"wide",formattingValues:M,defaultFormattingWidth:"wide"})},D=/^だ?い?\d+(ねん|しはんき|がつ|しゅう|にち|じ|ふん|びょう)?/i,k=/\d+/i,C={narrow:/^(B\.?C\.?|A\.?D\.?)/i,abbreviated:/^(きげん[前後]|せいれき)/i,wide:/^(きげん[前後]|せいれき)/i},F={narrow:[/^B/i,/^A/i],any:[/^(きげんぜん)/i,/^(せいれき|きげんご)/i]},z={narrow:/^[1234]/i,abbreviated:/^Q[1234]/i,wide:/^だい[1234一二三四１２３４]しはんき/i},N={any:[/(1|一|１)/i,/(2|二|２)/i,/(3|三|３)/i,/(4|四|４)/i]},V={narrow:/^([123456789]|1[012])/,abbreviated:/^([123456789]|1[012])がつ/i,wide:/^([123456789]|1[012])がつ/i},X={any:[/^1\D/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},H={narrow:/^(にち|げつ|か|すい|もく|きん|ど)/,short:/^(にち|げつ|か|すい|もく|きん|ど)/,abbreviated:/^(にち|げつ|か|すい|もく|きん|ど)/,wide:/^(にち|げつ|か|すい|もく|きん|ど)ようび/},Q={any:[/^にち/,/^げつ/,/^か/,/^すい/,/^もく/,/^きん/,/^ど/]},A={any:/^(AM|PM|ごぜん|ごご|しょうご|しんや|まよなか|よる|あさ)/i},E={any:{am:/^(A|ごぜん)/i,pm:/^(P|ごご)/i,midnight:/^しんや|まよなか/i,noon:/^しょうご/i,morning:/^あさ/i,afternoon:/^ごご/i,evening:/^よる/i,night:/^しんや/i}},L={ordinalNumber:s({matchPattern:D,parsePattern:k,valueCallback:function(a){return parseInt(a,10)}}),era:u({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any"}),quarter:u({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:u({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any"}),day:u({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:Q,defaultParseWidth:"any"}),dayPeriod:u({matchPatterns:A,defaultMatchWidth:"any",parsePatterns:E,defaultParseWidth:"any"})},O={code:"ja-Hira",formatDistance:l,formatLong:v,formatRelative:g,localize:S,match:L,options:{weekStartsOn:0,firstWeekContainsDate:1}};export{O as default};
//# sourceMappingURL=index.3a6dac6d.js.map
