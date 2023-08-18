import{d as s,e as i,f as u,g as o}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.3381d302.js";import"./index.efc280d8.js";import"./Logo.vue_vue_type_script_setup_true_lang.25d74513.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.8ec025ee.js";import"./use-controllable.585269ac.js";/*! PatchyVideo/Platinum by VoileLabs */var m={lessThanXSeconds:{one:"1초 미만",other:"{{count}}초 미만"},xSeconds:{one:"1초",other:"{{count}}초"},halfAMinute:"30초",lessThanXMinutes:{one:"1분 미만",other:"{{count}}분 미만"},xMinutes:{one:"1분",other:"{{count}}분"},aboutXHours:{one:"약 1시간",other:"약 {{count}}시간"},xHours:{one:"1시간",other:"{{count}}시간"},xDays:{one:"1일",other:"{{count}}일"},aboutXWeeks:{one:"약 1주",other:"약 {{count}}주"},xWeeks:{one:"1주",other:"{{count}}주"},aboutXMonths:{one:"약 1개월",other:"약 {{count}}개월"},xMonths:{one:"1개월",other:"{{count}}개월"},aboutXYears:{one:"약 1년",other:"약 {{count}}년"},xYears:{one:"1년",other:"{{count}}년"},overXYears:{one:"1년 이상",other:"{{count}}년 이상"},almostXYears:{one:"거의 1년",other:"거의 {{count}}년"}},l=function(a,r,e){var t,d=m[a];return typeof d=="string"?t=d:r===1?t=d.one:t=d.other.replace("{{count}}",r.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?t+" 후":t+" 전":t},h={full:"y년 M월 d일 EEEE",long:"y년 M월 d일",medium:"y.MM.dd",short:"y.MM.dd"},c={full:"a H시 mm분 ss초 zzzz",long:"a H:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},v={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},f={date:s({formats:h,defaultWidth:"full"}),time:s({formats:c,defaultWidth:"full"}),dateTime:s({formats:v,defaultWidth:"full"})},b={lastWeek:"'지난' eeee p",yesterday:"'어제' p",today:"'오늘' p",tomorrow:"'내일' p",nextWeek:"'다음' eeee p",other:"P"},g=function(a,r,e,t){return b[a]},P={narrow:["BC","AD"],abbreviated:["BC","AD"],wide:["기원전","서기"]},p={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1분기","2분기","3분기","4분기"]},w={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],wide:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]},y={narrow:["일","월","화","수","목","금","토"],short:["일","월","화","수","목","금","토"],abbreviated:["일","월","화","수","목","금","토"],wide:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]},W={narrow:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},abbreviated:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},wide:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"}},M={narrow:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},abbreviated:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},wide:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"}},k=function(a,r){var e=Number(a),t=String(r==null?void 0:r.unit);switch(t){case"minute":case"second":return String(e);case"date":return e+"일";default:return e+"번째"}},D={ordinalNumber:k,era:i({values:P,defaultWidth:"wide"}),quarter:i({values:p,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:i({values:w,defaultWidth:"wide"}),day:i({values:y,defaultWidth:"wide"}),dayPeriod:i({values:W,defaultWidth:"wide",formattingValues:M,defaultFormattingWidth:"wide"})},x=/^(\d+)(일|번째)?/i,C=/\d+/i,F={narrow:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(기원전|서기)/i},z={any:[/^(bc|기원전)/i,/^(ad|서기)/i]},H={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]사?분기/i},V={any:[/1/i,/2/i,/3/i,/4/i]},X={narrow:/^(1[012]|[123456789])/,abbreviated:/^(1[012]|[123456789])월/i,wide:/^(1[012]|[123456789])월/i},N={any:[/^1월?$/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},S={narrow:/^[일월화수목금토]/,short:/^[일월화수목금토]/,abbreviated:/^[일월화수목금토]/,wide:/^[일월화수목금토]요일/},E={any:[/^일/,/^월/,/^화/,/^수/,/^목/,/^금/,/^토/]},L={any:/^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i},Q={any:{am:/^(am|오전)/i,pm:/^(pm|오후)/i,midnight:/^자정/i,noon:/^정오/i,morning:/^아침/i,afternoon:/^오후/i,evening:/^저녁/i,night:/^밤/i}},q={ordinalNumber:u({matchPattern:x,parsePattern:C,valueCallback:function(a){return parseInt(a,10)}}),era:o({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:z,defaultParseWidth:"any"}),quarter:o({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:o({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any"}),day:o({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),dayPeriod:o({matchPatterns:L,defaultMatchWidth:"any",parsePatterns:Q,defaultParseWidth:"any"})},_={code:"ko",formatDistance:l,formatLong:f,formatRelative:g,localize:D,match:q,options:{weekStartsOn:0,firstWeekContainsDate:1}};export{_ as default};
//# sourceMappingURL=index.28cab7e8.js.map
