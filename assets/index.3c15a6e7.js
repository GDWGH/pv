import{d as u,e as o,f as m,g as s}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.59c4018d.js";import{i as c}from"./index.4114c685.js";import"./index.5fe7d953.js";import"./Logo.vue_vue_type_script_setup_true_lang.6935063e.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.96b1584d.js";import"./use-controllable.a136407e.js";/*! PatchyVideo/Platinum by VoileLabs */var h={lessThanXSeconds:{one:"помалку од секунда",other:"помалку од {{count}} секунди"},xSeconds:{one:"1 секунда",other:"{{count}} секунди"},halfAMinute:"половина минута",lessThanXMinutes:{one:"помалку од минута",other:"помалку од {{count}} минути"},xMinutes:{one:"1 минута",other:"{{count}} минути"},aboutXHours:{one:"околу 1 час",other:"околу {{count}} часа"},xHours:{one:"1 час",other:"{{count}} часа"},xDays:{one:"1 ден",other:"{{count}} дена"},aboutXWeeks:{one:"околу 1 недела",other:"околу {{count}} месеци"},xWeeks:{one:"1 недела",other:"{{count}} недели"},aboutXMonths:{one:"околу 1 месец",other:"околу {{count}} недели"},xMonths:{one:"1 месец",other:"{{count}} месеци"},aboutXYears:{one:"околу 1 година",other:"околу {{count}} години"},xYears:{one:"1 година",other:"{{count}} години"},overXYears:{one:"повеќе од 1 година",other:"повеќе од {{count}} години"},almostXYears:{one:"безмалку 1 година",other:"безмалку {{count}} години"}},f=function(e,n,t){var a,i=h[e];return typeof i=="string"?a=i:n===1?a=i.one:a=i.other.replace("{{count}}",String(n)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"за "+a:"пред "+a:a},v={full:"EEEE, dd MMMM yyyy",long:"dd MMMM yyyy",medium:"dd MMM yyyy",short:"dd/MM/yyyy"},y={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"H:mm"},b={any:"{{date}} {{time}}"},P={date:u({formats:v,defaultWidth:"full"}),time:u({formats:y,defaultWidth:"full"}),dateTime:u({formats:b,defaultWidth:"any"})},d=["недела","понеделник","вторник","среда","четврток","петок","сабота"];function w(r){var e=d[r];switch(r){case 0:case 3:case 6:return"'минатата "+e+" во' p";case 1:case 2:case 4:case 5:return"'минатиот "+e+" во' p"}}function l(r){var e=d[r];switch(r){case 0:case 3:case 6:return"'ова "+e+" вo' p";case 1:case 2:case 4:case 5:return"'овој "+e+" вo' p"}}function p(r){var e=d[r];switch(r){case 0:case 3:case 6:return"'следната "+e+" вo' p";case 1:case 2:case 4:case 5:return"'следниот "+e+" вo' p"}}var W={lastWeek:function(e,n,t){var a=e.getUTCDay();return c(e,n,t)?l(a):w(a)},yesterday:"'вчера во' p",today:"'денес во' p",tomorrow:"'утре во' p",nextWeek:function(e,n,t){var a=e.getUTCDay();return c(e,n,t)?l(a):p(a)},other:"P"},M=function(e,n,t,a){var i=W[e];return typeof i=="function"?i(n,t,a):i},k={narrow:["пр.н.е.","н.е."],abbreviated:["пред н. е.","н. е."],wide:["пред нашата ера","нашата ера"]},g={narrow:["1","2","3","4"],abbreviated:["1-ви кв.","2-ри кв.","3-ти кв.","4-ти кв."],wide:["1-ви квартал","2-ри квартал","3-ти квартал","4-ти квартал"]},x={abbreviated:["јан","фев","мар","апр","мај","јун","јул","авг","септ","окт","ноем","дек"],wide:["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември"]},D={narrow:["Н","П","В","С","Ч","П","С"],short:["не","по","вт","ср","че","пе","са"],abbreviated:["нед","пон","вто","сре","чет","пет","саб"],wide:["недела","понеделник","вторник","среда","четврток","петок","сабота"]},C={wide:{am:"претпладне",pm:"попладне",midnight:"полноќ",noon:"напладне",morning:"наутро",afternoon:"попладне",evening:"навечер",night:"ноќе"}},H=function(e,n){var t=Number(e),a=t%100;if(a>20||a<10)switch(a%10){case 1:return t+"-ви";case 2:return t+"-ри";case 7:case 8:return t+"-ми"}return t+"-ти"},z={ordinalNumber:H,era:o({values:k,defaultWidth:"wide"}),quarter:o({values:g,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:o({values:x,defaultWidth:"wide"}),day:o({values:D,defaultWidth:"wide"}),dayPeriod:o({values:C,defaultWidth:"wide"})},F=/^(\d+)(-?[врмт][и])?/i,X=/\d+/i,N={narrow:/^((пр)?н\.?\s?е\.?)/i,abbreviated:/^((пр)?н\.?\s?е\.?)/i,wide:/^(пред нашата ера|нашата ера)/i},T={any:[/^п/i,/^н/i]},E={narrow:/^[1234]/i,abbreviated:/^[1234](-?[врт]?и?)? кв.?/i,wide:/^[1234](-?[врт]?и?)? квартал/i},L={any:[/1/i,/2/i,/3/i,/4/i]},S={narrow:/^[нпвсч]/i,short:/^(не|по|вт|ср|че|пе|са)/i,abbreviated:/^(нед|пон|вто|сре|чет|пет|саб)/i,wide:/^(недела|понеделник|вторник|среда|четврток|петок|сабота)/i},V={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н[ед]/i,/^п[он]/i,/^вт/i,/^ср/i,/^ч[ет]/i,/^п[ет]/i,/^с[аб]/i]},R={abbreviated:/^(јан|фев|мар|апр|мај|јун|јул|авг|сеп|окт|ноем|дек)/i,wide:/^(јануари|февруари|март|април|мај|јуни|јули|август|септември|октомври|ноември|декември)/i},Y={any:[/^ја/i,/^Ф/i,/^мар/i,/^ап/i,/^мај/i,/^јун/i,/^јул/i,/^ав/i,/^се/i,/^окт/i,/^но/i,/^де/i]},q={any:/^(претп|попл|полноќ|утро|пладне|вечер|ноќ)/i},O={any:{am:/претпладне/i,pm:/попладне/i,midnight:/полноќ/i,noon:/напладне/i,morning:/наутро/i,afternoon:/попладне/i,evening:/навечер/i,night:/ноќе/i}},U={ordinalNumber:m({matchPattern:F,parsePattern:X,valueCallback:function(e){return parseInt(e,10)}}),era:s({matchPatterns:N,defaultMatchWidth:"wide",parsePatterns:T,defaultParseWidth:"any"}),quarter:s({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:L,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:s({matchPatterns:R,defaultMatchWidth:"wide",parsePatterns:Y,defaultParseWidth:"any"}),day:s({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:q,defaultMatchWidth:"any",parsePatterns:O,defaultParseWidth:"any"})},G={code:"mk",formatDistance:f,formatLong:P,formatRelative:M,localize:z,match:U,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{G as default};
//# sourceMappingURL=index.3c15a6e7.js.map
