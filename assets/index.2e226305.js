import{d,e as o,f as u,g as s}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.176856ab.js";import"./index.6d744ca2.js";import"./Logo.vue_vue_type_script_setup_true_lang.8ccc1f37.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.f58c2392.js";import"./use-controllable.c03f77e1.js";/*! PatchyVideo/Platinum by VoileLabs */var l={lessThanXSeconds:{one:{standalone:"мање од 1 секунде",withPrepositionAgo:"мање од 1 секунде",withPrepositionIn:"мање од 1 секунду"},dual:"мање од {{count}} секунде",other:"мање од {{count}} секунди"},xSeconds:{one:{standalone:"1 секунда",withPrepositionAgo:"1 секунде",withPrepositionIn:"1 секунду"},dual:"{{count}} секунде",other:"{{count}} секунди"},halfAMinute:"пола минуте",lessThanXMinutes:{one:{standalone:"мање од 1 минуте",withPrepositionAgo:"мање од 1 минуте",withPrepositionIn:"мање од 1 минуту"},dual:"мање од {{count}} минуте",other:"мање од {{count}} минута"},xMinutes:{one:{standalone:"1 минута",withPrepositionAgo:"1 минуте",withPrepositionIn:"1 минуту"},dual:"{{count}} минуте",other:"{{count}} минута"},aboutXHours:{one:{standalone:"око 1 сат",withPrepositionAgo:"око 1 сат",withPrepositionIn:"око 1 сат"},dual:"око {{count}} сата",other:"око {{count}} сати"},xHours:{one:{standalone:"1 сат",withPrepositionAgo:"1 сат",withPrepositionIn:"1 сат"},dual:"{{count}} сата",other:"{{count}} сати"},xDays:{one:{standalone:"1 дан",withPrepositionAgo:"1 дан",withPrepositionIn:"1 дан"},dual:"{{count}} дана",other:"{{count}} дана"},aboutXWeeks:{one:{standalone:"око 1 недељу",withPrepositionAgo:"око 1 недељу",withPrepositionIn:"око 1 недељу"},dual:"око {{count}} недеље",other:"око {{count}} недеље"},xWeeks:{one:{standalone:"1 недељу",withPrepositionAgo:"1 недељу",withPrepositionIn:"1 недељу"},dual:"{{count}} недеље",other:"{{count}} недеље"},aboutXMonths:{one:{standalone:"око 1 месец",withPrepositionAgo:"око 1 месец",withPrepositionIn:"око 1 месец"},dual:"око {{count}} месеца",other:"око {{count}} месеци"},xMonths:{one:{standalone:"1 месец",withPrepositionAgo:"1 месец",withPrepositionIn:"1 месец"},dual:"{{count}} месеца",other:"{{count}} месеци"},aboutXYears:{one:{standalone:"око 1 годину",withPrepositionAgo:"око 1 годину",withPrepositionIn:"око 1 годину"},dual:"око {{count}} године",other:"око {{count}} година"},xYears:{one:{standalone:"1 година",withPrepositionAgo:"1 године",withPrepositionIn:"1 годину"},dual:"{{count}} године",other:"{{count}} година"},overXYears:{one:{standalone:"преко 1 годину",withPrepositionAgo:"преко 1 годину",withPrepositionIn:"преко 1 годину"},dual:"преко {{count}} године",other:"преко {{count}} година"},almostXYears:{one:{standalone:"готово 1 годину",withPrepositionAgo:"готово 1 годину",withPrepositionIn:"готово 1 годину"},dual:"готово {{count}} године",other:"готово {{count}} година"}},h=function(t,a,e){var i,n=l[t];return typeof n=="string"?i=n:a===1?e!=null&&e.addSuffix?e.comparison&&e.comparison>0?i=n.one.withPrepositionIn:i=n.one.withPrepositionAgo:i=n.one.standalone:a%10>1&&a%10<5&&String(a).substr(-2,1)!=="1"?i=n.dual.replace("{{count}}",String(a)):i=n.other.replace("{{count}}",String(a)),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"за "+i:"пре "+i:i},m={full:"EEEE, d. MMMM yyyy.",long:"d. MMMM yyyy.",medium:"d. MMM yy.",short:"dd. MM. yy."},c={full:"HH:mm:ss (zzzz)",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},f={full:"{{date}} 'у' {{time}}",long:"{{date}} 'у' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},P={date:d({formats:m,defaultWidth:"full"}),time:d({formats:c,defaultWidth:"full"}),dateTime:d({formats:f,defaultWidth:"full"})},p={lastWeek:function(t){var a=t.getUTCDay();switch(a){case 0:return"'прошле недеље у' p";case 3:return"'прошле среде у' p";case 6:return"'прошле суботе у' p";default:return"'прошли' EEEE 'у' p"}},yesterday:"'јуче у' p",today:"'данас у' p",tomorrow:"'сутра у' p",nextWeek:function(t){var a=t.getUTCDay();switch(a){case 0:return"'следеће недеље у' p";case 3:return"'следећу среду у' p";case 6:return"'следећу суботу у' p";default:return"'следећи' EEEE 'у' p"}},other:"P"},v=function(t,a,e,i){var n=p[t];return typeof n=="function"?n(a):n},w={narrow:["пр.н.е.","АД"],abbreviated:["пр. Хр.","по. Хр."],wide:["Пре Христа","После Христа"]},g={narrow:["1.","2.","3.","4."],abbreviated:["1. кв.","2. кв.","3. кв.","4. кв."],wide:["1. квартал","2. квартал","3. квартал","4. квартал"]},b={narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец"],wide:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"]},y={narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец"],wide:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"]},M={narrow:["Н","П","У","С","Ч","П","С"],short:["нед","пон","уто","сре","чет","пет","суб"],abbreviated:["нед","пон","уто","сре","чет","пет","суб"],wide:["недеља","понедељак","уторак","среда","четвртак","петак","субота"]},W={narrow:{am:"АМ",pm:"ПМ",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},abbreviated:{am:"АМ",pm:"ПМ",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},wide:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"после подне",evening:"увече",night:"ноћу"}},A={narrow:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},abbreviated:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},wide:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"после подне",evening:"увече",night:"ноћу"}},I=function(t,a){var e=Number(t);return e+"."},k={ordinalNumber:I,era:o({values:w,defaultWidth:"wide"}),quarter:o({values:g,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:o({values:b,defaultWidth:"wide",formattingValues:y,defaultFormattingWidth:"wide"}),day:o({values:M,defaultWidth:"wide"}),dayPeriod:o({values:A,defaultWidth:"wide",formattingValues:W,defaultFormattingWidth:"wide"})},D=/^(\d+)\./i,E=/\d+/i,x={narrow:/^(пр\.н\.е\.|АД)/i,abbreviated:/^(пр\.\s?Хр\.|по\.\s?Хр\.)/i,wide:/^(Пре Христа|пре нове ере|После Христа|нова ера)/i},F={any:[/^пр/i,/^(по|нова)/i]},H={narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?кв\.?/i,wide:/^[1234]\. квартал/i},V={any:[/1/i,/2/i,/3/i,/4/i]},C={narrow:/^(10|11|12|[123456789])\./i,abbreviated:/^(јан|феб|мар|апр|мај|јун|јул|авг|сеп|окт|нов|дец)/i,wide:/^((јануар|јануара)|(фебруар|фебруара)|(март|марта)|(април|априла)|(мја|маја)|(јун|јуна)|(јул|јула)|(август|августа)|(септембар|септембра)|(октобар|октобра)|(новембар|новембра)|(децембар|децембра))/i},z={narrow:[/^1/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^7/i,/^8/i,/^9/i,/^10/i,/^11/i,/^12/i],any:[/^ја/i,/^ф/i,/^мар/i,/^ап/i,/^мај/i,/^јун/i,/^јул/i,/^авг/i,/^с/i,/^о/i,/^н/i,/^д/i]},S={narrow:/^[пусчн]/i,short:/^(нед|пон|уто|сре|чет|пет|суб)/i,abbreviated:/^(нед|пон|уто|сре|чет|пет|суб)/i,wide:/^(недеља|понедељак|уторак|среда|четвртак|петак|субота)/i},X={narrow:[/^п/i,/^у/i,/^с/i,/^ч/i,/^п/i,/^с/i,/^н/i],any:[/^нед/i,/^пон/i,/^уто/i,/^сре/i,/^чет/i,/^пет/i,/^суб/i]},N={any:/^(ам|пм|поноћ|(по)?подне|увече|ноћу|после подне|ујутру)/i},L={any:{am:/^a/i,pm:/^p/i,midnight:/^поно/i,noon:/^под/i,morning:/ујутру/i,afternoon:/(после\s|по)+подне/i,evening:/(увече)/i,night:/(ноћу)/i}},T={ordinalNumber:u({matchPattern:D,parsePattern:E,valueCallback:function(t){return parseInt(t,10)}}),era:s({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any"}),quarter:s({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:s({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:z,defaultParseWidth:"any"}),day:s({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:N,defaultMatchWidth:"any",parsePatterns:L,defaultParseWidth:"any"})},Q={code:"sr",formatDistance:h,formatLong:P,formatRelative:v,localize:k,match:T,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{Q as default};
//# sourceMappingURL=index.2e226305.js.map
