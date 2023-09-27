import{d as v,t as d,e as o,f,g as l}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.3bb9cba5.js";import"./index.9aa2dc2b.js";import{i as m}from"./index.64856745.js";import"./index.7d7d5570.js";import"./Logo.vue_vue_type_script_setup_true_lang.66ad72d8.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.bd36211f.js";import"./use-controllable.38efddb1.js";/*! PatchyVideo/Platinum by VoileLabs */function s(a,e){if(a.one!==void 0&&e===1)return a.one;var i=e%10,t=e%100;return i===1&&t!==11?a.singularNominative.replace("{{count}}",String(e)):i>=2&&i<=4&&(t<10||t>20)?a.singularGenitive.replace("{{count}}",String(e)):a.pluralGenitive.replace("{{count}}",String(e))}function r(a){return function(e,i){return i&&i.addSuffix?i.comparison&&i.comparison>0?a.future?s(a.future,e):"за "+s(a.regular,e):a.past?s(a.past,e):s(a.regular,e)+" тому":s(a.regular,e)}}var h=function(e,i){return i&&i.addSuffix?i.comparison&&i.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини"},p={lessThanXSeconds:r({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:r({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:h,lessThanXMinutes:r({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:r({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:r({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:r({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:r({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} днi",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:r({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижнів"}}),xWeeks:r({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижні",pluralGenitive:"{{count}} тижнів"}}),aboutXMonths:r({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяці",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:r({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяці",pluralGenitive:"{{count}} місяців"}}),aboutXYears:r({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:r({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:r({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:r({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})},G=function(e,i,t){return t=t||{},p[e](i,t)},b={full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},w={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},y={full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},P={date:v({formats:b,defaultWidth:"full"}),time:v({formats:w,defaultWidth:"full"}),dateTime:v({formats:y,defaultWidth:"full"})},c=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function W(a){var e=c[a];switch(a){case 0:case 3:case 5:case 6:return"'у минулу "+e+" о' p";case 1:case 2:case 4:return"'у минулий "+e+" о' p"}}function g(a){var e=c[a];return"'у "+e+" о' p"}function N(a){var e=c[a];switch(a){case 0:case 3:case 5:case 6:return"'у наступну "+e+" о' p";case 1:case 2:case 4:return"'у наступний "+e+" о' p"}}var M=function(e,i,t){var u=d(e),n=u.getUTCDay();return m(u,i,t)?g(n):W(n)},k=function(e,i,t){var u=d(e),n=u.getUTCDay();return m(u,i,t)?g(n):N(n)},x={lastWeek:M,yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:k,other:"P"},F=function(e,i,t,u){var n=x[e];return typeof n=="function"?n(i,t,u):n},D={narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},C={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},S={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},z={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},V={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},T={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},X={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},L=function(e,i){var t=String(i==null?void 0:i.unit),u=Number(e),n;return t==="date"?u===3||u===23?n="-є":n="-е":t==="minute"||t==="second"||t==="hour"?n="-а":n="-й",u+n},E={ordinalNumber:L,era:o({values:D,defaultWidth:"wide"}),quarter:o({values:C,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:o({values:S,defaultWidth:"wide",formattingValues:z,defaultFormattingWidth:"wide"}),day:o({values:V,defaultWidth:"wide"}),dayPeriod:o({values:T,defaultWidth:"any",formattingValues:X,defaultFormattingWidth:"wide"})},H=/^(\d+)(-?(е|й|є|а|я))?/i,R=/\d+/i,Y={narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},q={any:[/^д/i,/^н/i]},A={narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},O={any:[/1/i,/2/i,/3/i,/4/i]},U={narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i},Q={narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},I={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},_={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},j={narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},B={any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},J={ordinalNumber:f({matchPattern:H,parsePattern:R,valueCallback:function(e){return parseInt(e,10)}}),era:l({matchPatterns:Y,defaultMatchWidth:"wide",parsePatterns:q,defaultParseWidth:"any"}),quarter:l({matchPatterns:A,defaultMatchWidth:"wide",parsePatterns:O,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:l({matchPatterns:U,defaultMatchWidth:"wide",parsePatterns:Q,defaultParseWidth:"any"}),day:l({matchPatterns:I,defaultMatchWidth:"wide",parsePatterns:_,defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:j,defaultMatchWidth:"wide",parsePatterns:B,defaultParseWidth:"any"})},ne={code:"uk",formatDistance:G,formatLong:P,formatRelative:F,localize:E,match:J,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{ne as default};
//# sourceMappingURL=index.ced0e5ef.js.map
