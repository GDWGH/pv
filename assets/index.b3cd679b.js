import{d,t as c,e as s,f as h,g as u}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.b2dea92b.js";import{i as m}from"./index.ee9e0423.js";import"./index.a71075d4.js";import"./Logo.vue_vue_type_script_setup_true_lang.91e0ca5b.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.b3be57c1.js";import"./use-controllable.884ab375.js";/*! PatchyVideo/Platinum by VoileLabs */var v={lessThanXSeconds:{one:"по-малко от секунда",other:"по-малко от {{count}} секунди"},xSeconds:{one:"1 секунда",other:"{{count}} секунди"},halfAMinute:"половин минута",lessThanXMinutes:{one:"по-малко от минута",other:"по-малко от {{count}} минути"},xMinutes:{one:"1 минута",other:"{{count}} минути"},aboutXHours:{one:"около час",other:"около {{count}} часа"},xHours:{one:"1 час",other:"{{count}} часа"},xDays:{one:"1 ден",other:"{{count}} дни"},aboutXWeeks:{one:"около седмица",other:"около {{count}} седмици"},xWeeks:{one:"1 седмица",other:"{{count}} седмици"},aboutXMonths:{one:"около месец",other:"около {{count}} месеца"},xMonths:{one:"1 месец",other:"{{count}} месеца"},aboutXYears:{one:"около година",other:"около {{count}} години"},xYears:{one:"1 година",other:"{{count}} години"},overXYears:{one:"над година",other:"над {{count}} години"},almostXYears:{one:"почти година",other:"почти {{count}} години"}},y=function(e,i,t){var r,n=v[e];return typeof n=="string"?r=n:i===1?r=n.one:r=n.other.replace("{{count}}",String(i)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"след "+r:"преди "+r:r},b={full:"EEEE, dd MMMM yyyy",long:"dd MMMM yyyy",medium:"dd MMM yyyy",short:"dd/MM/yyyy"},P={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"H:mm"},w={any:"{{date}} {{time}}"},W={date:d({formats:b,defaultWidth:"full"}),time:d({formats:P,defaultWidth:"full"}),dateTime:d({formats:w,defaultWidth:"any"})},l=["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"];function p(a){var e=l[a];switch(a){case 0:case 3:case 6:return"'миналата "+e+" в' p";case 1:case 2:case 4:case 5:return"'миналия "+e+" в' p"}}function f(a){var e=l[a];return a===2?"'във "+e+" в' p":"'в "+e+" в' p"}function k(a){var e=l[a];switch(a){case 0:case 3:case 6:return"'следващата "+e+" в' p";case 1:case 2:case 4:case 5:return"'следващия "+e+" в' p"}}var M=function(e,i,t){var r=c(e),n=r.getUTCDay();return m(r,i,t)?f(n):p(n)},g=function(e,i,t){var r=c(e),n=r.getUTCDay();return m(r,i,t)?f(n):k(n)},x={lastWeek:M,yesterday:"'вчера в' p",today:"'днес в' p",tomorrow:"'утре в' p",nextWeek:g,other:"P"},D=function(e,i,t,r){var n=x[e];return typeof n=="function"?n(i,t,r):n},F={narrow:["пр.н.е.","н.е."],abbreviated:["преди н. е.","н. е."],wide:["преди новата ера","новата ера"]},T={narrow:["1","2","3","4"],abbreviated:["1-во тримес.","2-ро тримес.","3-то тримес.","4-то тримес."],wide:["1-во тримесечие","2-ро тримесечие","3-то тримесечие","4-то тримесечие"]},C={abbreviated:["яну","фев","мар","апр","май","юни","юли","авг","сеп","окт","ное","дек"],wide:["януари","февруари","март","април","май","юни","юли","август","септември","октомври","ноември","декември"]},H={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вто","сря","чет","пет","съб"],wide:["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"]},z={wide:{am:"преди обяд",pm:"след обяд",midnight:"в полунощ",noon:"на обяд",morning:"сутринта",afternoon:"следобед",evening:"вечерта",night:"през нощта"}};function N(a){return a==="year"||a==="week"||a==="minute"||a==="second"}function X(a){return a==="quarter"}function o(a,e,i,t,r){var n=X(e)?r:N(e)?t:i;return a+"-"+n}var S=function(e,i){var t=Number(e),r=i==null?void 0:i.unit;if(t===0)return o(0,r,"ев","ева","ево");if(t%1e3===0)return o(t,r,"ен","на","но");if(t%100===0)return o(t,r,"тен","тна","тно");var n=t%100;if(n>20||n<10)switch(n%10){case 1:return o(t,r,"ви","ва","во");case 2:return o(t,r,"ри","ра","ро");case 7:case 8:return o(t,r,"ми","ма","мо")}return o(t,r,"ти","та","то")},E={ordinalNumber:S,era:s({values:F,defaultWidth:"wide"}),quarter:s({values:T,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:s({values:C,defaultWidth:"wide"}),day:s({values:H,defaultWidth:"wide"}),dayPeriod:s({values:z,defaultWidth:"wide"})},L=/^(\d+)(-?[врмт][аи]|-?т?(ен|на)|-?(ев|ева))?/i,V=/\d+/i,q={narrow:/^((пр)?н\.?\s?е\.?)/i,abbreviated:/^((пр)?н\.?\s?е\.?)/i,wide:/^(преди новата ера|новата ера|нова ера)/i},R={any:[/^п/i,/^н/i]},Y={narrow:/^[1234]/i,abbreviated:/^[1234](-?[врт]?o?)? тримес.?/i,wide:/^[1234](-?[врт]?о?)? тримесечие/i},O={any:[/1/i,/2/i,/3/i,/4/i]},U={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)/i,abbreviated:/^(нед|пон|вто|сря|чет|пет|съб)/i,wide:/^(неделя|понеделник|вторник|сряда|четвъртък|петък|събота)/i},Q={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н[ед]/i,/^п[он]/i,/^вт/i,/^ср/i,/^ч[ет]/i,/^п[ет]/i,/^с[ъб]/i]},A={abbreviated:/^(яну|фев|мар|апр|май|юни|юли|авг|сеп|окт|ное|дек)/i,wide:/^(януари|февруари|март|април|май|юни|юли|август|септември|октомври|ноември|декември)/i},I={any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^май/i,/^юн/i,/^юл/i,/^ав/i,/^се/i,/^окт/i,/^но/i,/^де/i]},j={any:/^(преди о|след о|в по|на о|през|веч|сут|следо)/i},B={any:{am:/^преди о/i,pm:/^след о/i,midnight:/^в пол/i,noon:/^на об/i,morning:/^сут/i,afternoon:/^следо/i,evening:/^веч/i,night:/^през н/i}},G={ordinalNumber:h({matchPattern:L,parsePattern:V,valueCallback:function(e){return parseInt(e,10)}}),era:u({matchPatterns:q,defaultMatchWidth:"wide",parsePatterns:R,defaultParseWidth:"any"}),quarter:u({matchPatterns:Y,defaultMatchWidth:"wide",parsePatterns:O,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:u({matchPatterns:A,defaultMatchWidth:"wide",parsePatterns:I,defaultParseWidth:"any"}),day:u({matchPatterns:U,defaultMatchWidth:"wide",parsePatterns:Q,defaultParseWidth:"any"}),dayPeriod:u({matchPatterns:j,defaultMatchWidth:"any",parsePatterns:B,defaultParseWidth:"any"})},ae={code:"bg",formatDistance:y,formatLong:W,formatRelative:D,localize:E,match:G,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{ae as default};
//# sourceMappingURL=index.b3cd679b.js.map
