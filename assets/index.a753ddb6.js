import{d as v,e as o,f as g,g as l}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.e3e80d20.js";import{i as d}from"./index.8d47392d.js";import"./index.38065af8.js";import"./Logo.vue_vue_type_script_setup_true_lang.8999fa60.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.1013566e.js";import"./use-controllable.16621012.js";/*! PatchyVideo/Platinum by VoileLabs */function s(a,e){if(a.one!==void 0&&e===1)return a.one;var i=e%10,t=e%100;return i===1&&t!==11?a.singularNominative.replace("{{count}}",String(e)):i>=2&&i<=4&&(t<10||t>20)?a.singularGenitive.replace("{{count}}",String(e)):a.pluralGenitive.replace("{{count}}",String(e))}function n(a){return function(e,i){return i!=null&&i.addSuffix?i.comparison&&i.comparison>0?a.future?s(a.future,e):"через "+s(a.regular,e):a.past?s(a.past,e):s(a.regular,e)+" назад":s(a.regular,e)}}var f={lessThanXSeconds:n({regular:{one:"меньше секунды",singularNominative:"меньше {{count}} секунды",singularGenitive:"меньше {{count}} секунд",pluralGenitive:"меньше {{count}} секунд"},future:{one:"меньше, чем через секунду",singularNominative:"меньше, чем через {{count}} секунду",singularGenitive:"меньше, чем через {{count}} секунды",pluralGenitive:"меньше, чем через {{count}} секунд"}}),xSeconds:n({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду назад",singularGenitive:"{{count}} секунды назад",pluralGenitive:"{{count}} секунд назад"},future:{singularNominative:"через {{count}} секунду",singularGenitive:"через {{count}} секунды",pluralGenitive:"через {{count}} секунд"}}),halfAMinute:function(e,i){return i!=null&&i.addSuffix?i.comparison&&i.comparison>0?"через полминуты":"полминуты назад":"полминуты"},lessThanXMinutes:n({regular:{one:"меньше минуты",singularNominative:"меньше {{count}} минуты",singularGenitive:"меньше {{count}} минут",pluralGenitive:"меньше {{count}} минут"},future:{one:"меньше, чем через минуту",singularNominative:"меньше, чем через {{count}} минуту",singularGenitive:"меньше, чем через {{count}} минуты",pluralGenitive:"меньше, чем через {{count}} минут"}}),xMinutes:n({regular:{singularNominative:"{{count}} минута",singularGenitive:"{{count}} минуты",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минуту назад",singularGenitive:"{{count}} минуты назад",pluralGenitive:"{{count}} минут назад"},future:{singularNominative:"через {{count}} минуту",singularGenitive:"через {{count}} минуты",pluralGenitive:"через {{count}} минут"}}),aboutXHours:n({regular:{singularNominative:"около {{count}} часа",singularGenitive:"около {{count}} часов",pluralGenitive:"около {{count}} часов"},future:{singularNominative:"приблизительно через {{count}} час",singularGenitive:"приблизительно через {{count}} часа",pluralGenitive:"приблизительно через {{count}} часов"}}),xHours:n({regular:{singularNominative:"{{count}} час",singularGenitive:"{{count}} часа",pluralGenitive:"{{count}} часов"}}),xDays:n({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} дней"}}),aboutXWeeks:n({regular:{singularNominative:"около {{count}} недели",singularGenitive:"около {{count}} недель",pluralGenitive:"около {{count}} недель"},future:{singularNominative:"приблизительно через {{count}} неделю",singularGenitive:"приблизительно через {{count}} недели",pluralGenitive:"приблизительно через {{count}} недель"}}),xWeeks:n({regular:{singularNominative:"{{count}} неделя",singularGenitive:"{{count}} недели",pluralGenitive:"{{count}} недель"}}),aboutXMonths:n({regular:{singularNominative:"около {{count}} месяца",singularGenitive:"около {{count}} месяцев",pluralGenitive:"около {{count}} месяцев"},future:{singularNominative:"приблизительно через {{count}} месяц",singularGenitive:"приблизительно через {{count}} месяца",pluralGenitive:"приблизительно через {{count}} месяцев"}}),xMonths:n({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяца",pluralGenitive:"{{count}} месяцев"}}),aboutXYears:n({regular:{singularNominative:"около {{count}} года",singularGenitive:"около {{count}} лет",pluralGenitive:"около {{count}} лет"},future:{singularNominative:"приблизительно через {{count}} год",singularGenitive:"приблизительно через {{count}} года",pluralGenitive:"приблизительно через {{count}} лет"}}),xYears:n({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} года",pluralGenitive:"{{count}} лет"}}),overXYears:n({regular:{singularNominative:"больше {{count}} года",singularGenitive:"больше {{count}} лет",pluralGenitive:"больше {{count}} лет"},future:{singularNominative:"больше, чем через {{count}} год",singularGenitive:"больше, чем через {{count}} года",pluralGenitive:"больше, чем через {{count}} лет"}}),almostXYears:n({regular:{singularNominative:"почти {{count}} год",singularGenitive:"почти {{count}} года",pluralGenitive:"почти {{count}} лет"},future:{singularNominative:"почти через {{count}} год",singularGenitive:"почти через {{count}} года",pluralGenitive:"почти через {{count}} лет"}})},p=function(e,i,t){return f[e](i,t)},h={full:"EEEE, d MMMM y 'г.'",long:"d MMMM y 'г.'",medium:"d MMM y 'г.'",short:"dd.MM.y"},G={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},b={any:"{{date}}, {{time}}"},w={date:v({formats:h,defaultWidth:"full"}),time:v({formats:G,defaultWidth:"full"}),dateTime:v({formats:b,defaultWidth:"any"})},c=["воскресенье","понедельник","вторник","среду","четверг","пятницу","субботу"];function y(a){var e=c[a];switch(a){case 0:return"'в прошлое "+e+" в' p";case 1:case 2:case 4:return"'в прошлый "+e+" в' p";case 3:case 5:case 6:return"'в прошлую "+e+" в' p"}}function m(a){var e=c[a];return a===2?"'во "+e+" в' p":"'в "+e+" в' p"}function P(a){var e=c[a];switch(a){case 0:return"'в следующее "+e+" в' p";case 1:case 2:case 4:return"'в следующий "+e+" в' p";case 3:case 5:case 6:return"'в следующую "+e+" в' p"}}var N={lastWeek:function(e,i,t){var r=e.getUTCDay();return d(e,i,t)?m(r):y(r)},yesterday:"'вчера в' p",today:"'сегодня в' p",tomorrow:"'завтра в' p",nextWeek:function(e,i,t){var r=e.getUTCDay();return d(e,i,t)?m(r):P(r)},other:"P"},W=function(e,i,t,r){var u=N[e];return typeof u=="function"?u(i,t,r):u},M={narrow:["до н.э.","н.э."],abbreviated:["до н. э.","н. э."],wide:["до нашей эры","нашей эры"]},k={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},x={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],wide:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},D={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],wide:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},F={narrow:["В","П","В","С","Ч","П","С"],short:["вс","пн","вт","ср","чт","пт","сб"],abbreviated:["вск","пнд","втр","срд","чтв","птн","суб"],wide:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},C={narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утро",afternoon:"день",evening:"вечер",night:"ночь"}},z={narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утра",afternoon:"дня",evening:"вечера",night:"ночи"}},S=function(e,i){var t=Number(e),r=i==null?void 0:i.unit,u;return r==="date"?u="-е":r==="week"||r==="minute"||r==="second"?u="-я":u="-й",t+u},V={ordinalNumber:S,era:o({values:M,defaultWidth:"wide"}),quarter:o({values:k,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:o({values:x,defaultWidth:"wide",formattingValues:D,defaultFormattingWidth:"wide"}),day:o({values:F,defaultWidth:"wide"}),dayPeriod:o({values:C,defaultWidth:"any",formattingValues:z,defaultFormattingWidth:"wide"})},T=/^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,X=/\d+/i,L={narrow:/^((до )?н\.?\s?э\.?)/i,abbreviated:/^((до )?н\.?\s?э\.?)/i,wide:/^(до нашей эры|нашей эры|наша эра)/i},E={any:[/^д/i,/^н/i]},H={narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыои]?й?)? кв.?/i,wide:/^[1234](-?[ыои]?й?)? квартал/i},R={any:[/1/i,/2/i,/3/i,/4/i]},Y={narrow:/^[яфмаисонд]/i,abbreviated:/^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,wide:/^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i},q={narrow:[/^я/i,/^ф/i,/^м/i,/^а/i,/^м/i,/^и/i,/^и/i,/^а/i,/^с/i,/^о/i,/^н/i,/^я/i],any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^ав/i,/^с/i,/^о/i,/^н/i,/^д/i]},O={narrow:/^[впсч]/i,short:/^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,abbreviated:/^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,wide:/^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i},U={narrow:[/^в/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^в[ос]/i,/^п[он]/i,/^в/i,/^ср/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},_={narrow:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,abbreviated:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,wide:/^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i},A={any:{am:/^дп/i,pm:/^пп/i,midnight:/^полн/i,noon:/^полд/i,morning:/^у/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},Q={ordinalNumber:g({matchPattern:T,parsePattern:X,valueCallback:function(e){return parseInt(e,10)}}),era:l({matchPatterns:L,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),quarter:l({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:R,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:l({matchPatterns:Y,defaultMatchWidth:"wide",parsePatterns:q,defaultParseWidth:"any"}),day:l({matchPatterns:O,defaultMatchWidth:"wide",parsePatterns:U,defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:_,defaultMatchWidth:"wide",parsePatterns:A,defaultParseWidth:"any"})},$={code:"ru",formatDistance:p,formatLong:w,formatRelative:W,localize:V,match:Q,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{$ as default};
//# sourceMappingURL=index.a753ddb6.js.map
