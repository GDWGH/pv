import{d as v,t as d,e as o,f,g as l}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.4f4580ad.js";import"./index.5dd728cf.js";import{i as m}from"./index.7fa5ea91.js";import"./index.698f24e1.js";import"./Logo.vue_vue_type_script_setup_true_lang.481dd826.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.02df6f5b.js";import"./use-controllable.57d50412.js";/*! PatchyVideo/Platinum by VoileLabs */function s(a,e){if(a.one!==void 0&&e===1)return a.one;var i=e%10,t=e%100;return i===1&&t!==11?a.singularNominative.replace("{{count}}",String(e)):i>=2&&i<=4&&(t<10||t>20)?a.singularGenitive.replace("{{count}}",String(e)):a.pluralGenitive.replace("{{count}}",String(e))}function n(a){return function(e,i){return i&&i.addSuffix?i.comparison&&i.comparison>0?a.future?s(a.future,e):"праз "+s(a.regular,e):a.past?s(a.past,e):s(a.regular,e)+" таму":s(a.regular,e)}}var p=function(e,i){return i&&i.addSuffix?i.comparison&&i.comparison>0?"праз паўхвіліны":"паўхвіліны таму":"паўхвіліны"},h={lessThanXSeconds:n({regular:{one:"менш за секунду",singularNominative:"менш за {{count}} секунду",singularGenitive:"менш за {{count}} секунды",pluralGenitive:"менш за {{count}} секунд"},future:{one:"менш, чым праз секунду",singularNominative:"менш, чым праз {{count}} секунду",singularGenitive:"менш, чым праз {{count}} секунды",pluralGenitive:"менш, чым праз {{count}} секунд"}}),xSeconds:n({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду таму",singularGenitive:"{{count}} секунды таму",pluralGenitive:"{{count}} секунд таму"},future:{singularNominative:"праз {{count}} секунду",singularGenitive:"праз {{count}} секунды",pluralGenitive:"праз {{count}} секунд"}}),halfAMinute:p,lessThanXMinutes:n({regular:{one:"менш за хвіліну",singularNominative:"менш за {{count}} хвіліну",singularGenitive:"менш за {{count}} хвіліны",pluralGenitive:"менш за {{count}} хвілін"},future:{one:"менш, чым праз хвіліну",singularNominative:"менш, чым праз {{count}} хвіліну",singularGenitive:"менш, чым праз {{count}} хвіліны",pluralGenitive:"менш, чым праз {{count}} хвілін"}}),xMinutes:n({regular:{singularNominative:"{{count}} хвіліна",singularGenitive:"{{count}} хвіліны",pluralGenitive:"{{count}} хвілін"},past:{singularNominative:"{{count}} хвіліну таму",singularGenitive:"{{count}} хвіліны таму",pluralGenitive:"{{count}} хвілін таму"},future:{singularNominative:"праз {{count}} хвіліну",singularGenitive:"праз {{count}} хвіліны",pluralGenitive:"праз {{count}} хвілін"}}),aboutXHours:n({regular:{singularNominative:"каля {{count}} гадзіны",singularGenitive:"каля {{count}} гадзін",pluralGenitive:"каля {{count}} гадзін"},future:{singularNominative:"прыблізна праз {{count}} гадзіну",singularGenitive:"прыблізна праз {{count}} гадзіны",pluralGenitive:"прыблізна праз {{count}} гадзін"}}),xHours:n({regular:{singularNominative:"{{count}} гадзіна",singularGenitive:"{{count}} гадзіны",pluralGenitive:"{{count}} гадзін"},past:{singularNominative:"{{count}} гадзіну таму",singularGenitive:"{{count}} гадзіны таму",pluralGenitive:"{{count}} гадзін таму"},future:{singularNominative:"праз {{count}} гадзіну",singularGenitive:"праз {{count}} гадзіны",pluralGenitive:"праз {{count}} гадзін"}}),xDays:n({regular:{singularNominative:"{{count}} дзень",singularGenitive:"{{count}} дні",pluralGenitive:"{{count}} дзён"}}),aboutXWeeks:n({regular:{singularNominative:"каля {{count}} месяца",singularGenitive:"каля {{count}} месяцаў",pluralGenitive:"каля {{count}} месяцаў"},future:{singularNominative:"прыблізна праз {{count}} месяц",singularGenitive:"прыблізна праз {{count}} месяцы",pluralGenitive:"прыблізна праз {{count}} месяцаў"}}),xWeeks:n({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяцы",pluralGenitive:"{{count}} месяцаў"}}),aboutXMonths:n({regular:{singularNominative:"каля {{count}} месяца",singularGenitive:"каля {{count}} месяцаў",pluralGenitive:"каля {{count}} месяцаў"},future:{singularNominative:"прыблізна праз {{count}} месяц",singularGenitive:"прыблізна праз {{count}} месяцы",pluralGenitive:"прыблізна праз {{count}} месяцаў"}}),xMonths:n({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяцы",pluralGenitive:"{{count}} месяцаў"}}),aboutXYears:n({regular:{singularNominative:"каля {{count}} года",singularGenitive:"каля {{count}} гадоў",pluralGenitive:"каля {{count}} гадоў"},future:{singularNominative:"прыблізна праз {{count}} год",singularGenitive:"прыблізна праз {{count}} гады",pluralGenitive:"прыблізна праз {{count}} гадоў"}}),xYears:n({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} гады",pluralGenitive:"{{count}} гадоў"}}),overXYears:n({regular:{singularNominative:"больш за {{count}} год",singularGenitive:"больш за {{count}} гады",pluralGenitive:"больш за {{count}} гадоў"},future:{singularNominative:"больш, чым праз {{count}} год",singularGenitive:"больш, чым праз {{count}} гады",pluralGenitive:"больш, чым праз {{count}} гадоў"}}),almostXYears:n({regular:{singularNominative:"амаль {{count}} год",singularGenitive:"амаль {{count}} гады",pluralGenitive:"амаль {{count}} гадоў"},future:{singularNominative:"амаль праз {{count}} год",singularGenitive:"амаль праз {{count}} гады",pluralGenitive:"амаль праз {{count}} гадоў"}})},G=function(e,i,t){return t=t||{},h[e](i,t)},b={full:"EEEE, d MMMM y 'г.'",long:"d MMMM y 'г.'",medium:"d MMM y 'г.'",short:"dd.MM.y"},w={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},y={any:"{{date}}, {{time}}"},N={date:v({formats:b,defaultWidth:"full"}),time:v({formats:w,defaultWidth:"full"}),dateTime:v({formats:y,defaultWidth:"any"})},c=["нядзелю","панядзелак","аўторак","сераду","чацвер","пятніцу","суботу"];function P(a){var e=c[a];switch(a){case 0:case 3:case 5:case 6:return"'у мінулую "+e+" а' p";case 1:case 2:case 4:return"'у мінулы "+e+" а' p"}}function g(a){var e=c[a];return"'у "+e+" а' p"}function W(a){var e=c[a];switch(a){case 0:case 3:case 5:case 6:return"'у наступную "+e+" а' p";case 1:case 2:case 4:return"'у наступны "+e+" а' p"}}var M=function(e,i,t){var u=d(e),r=u.getUTCDay();return m(u,i,t)?g(r):P(r)},k=function(e,i,t){var u=d(e),r=u.getUTCDay();return m(u,i,t)?g(r):W(r)},x={lastWeek:M,yesterday:"'учора а' p",today:"'сёння а' p",tomorrow:"'заўтра а' p",nextWeek:k,other:"P"},F=function(e,i,t,u){var r=x[e];return typeof r=="function"?r(i,t,u):r},D={narrow:["да н.э.","н.э."],abbreviated:["да н. э.","н. э."],wide:["да нашай эры","нашай эры"]},C={narrow:["1","2","3","4"],abbreviated:["1-ы кв.","2-і кв.","3-і кв.","4-ы кв."],wide:["1-ы квартал","2-і квартал","3-і квартал","4-ы квартал"]},S={narrow:["С","Л","С","К","М","Ч","Л","Ж","В","К","Л","С"],abbreviated:["студз.","лют.","сак.","крас.","май","чэрв.","ліп.","жн.","вер.","кастр.","ліст.","снеж."],wide:["студзень","люты","сакавік","красавік","май","чэрвень","ліпень","жнівень","верасень","кастрычнік","лістапад","снежань"]},z={narrow:["С","Л","С","К","М","Ч","Л","Ж","В","К","Л","С"],abbreviated:["студз.","лют.","сак.","крас.","мая","чэрв.","ліп.","жн.","вер.","кастр.","ліст.","снеж."],wide:["студзеня","лютага","сакавіка","красавіка","мая","чэрвеня","ліпеня","жніўня","верасня","кастрычніка","лістапада","снежня"]},V={narrow:["Н","П","А","С","Ч","П","С"],short:["нд","пн","аў","ср","чц","пт","сб"],abbreviated:["нядз","пан","аўт","сер","чац","пят","суб"],wide:["нядзеля","панядзелак","аўторак","серада","чацвер","пятніца","субота"]},T={narrow:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дзень",evening:"веч.",night:"ноч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дзень",evening:"веч.",night:"ноч"},wide:{am:"ДП",pm:"ПП",midnight:"поўнач",noon:"поўдзень",morning:"раніца",afternoon:"дзень",evening:"вечар",night:"ноч"}},X={narrow:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дня",evening:"веч.",night:"ночы"},abbreviated:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дня",evening:"веч.",night:"ночы"},wide:{am:"ДП",pm:"ПП",midnight:"поўнач",noon:"поўдзень",morning:"раніцы",afternoon:"дня",evening:"вечара",night:"ночы"}},L=function(e,i){var t=String(i==null?void 0:i.unit),u=Number(e),r;return t==="date"?r="-га":t==="hour"||t==="minute"||t==="second"?r="-я":r=(u%10===2||u%10===3)&&u%100!==12&&u%100!==13?"-і":"-ы",u+r},E={ordinalNumber:L,era:o({values:D,defaultWidth:"wide"}),quarter:o({values:C,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:o({values:S,defaultWidth:"wide",formattingValues:z,defaultFormattingWidth:"wide"}),day:o({values:V,defaultWidth:"wide"}),dayPeriod:o({values:T,defaultWidth:"any",formattingValues:X,defaultFormattingWidth:"wide"})},H=/^(\d+)(-?(е|я|га|і|ы|ае|ая|яя|шы|гі|ці|ты|мы))?/i,R=/\d+/i,Y={narrow:/^((да )?н\.?\s?э\.?)/i,abbreviated:/^((да )?н\.?\s?э\.?)/i,wide:/^(да нашай эры|нашай эры|наша эра)/i},q={any:[/^д/i,/^н/i]},A={narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыі]?)? кв.?/i,wide:/^[1234](-?[ыі]?)? квартал/i},O={any:[/1/i,/2/i,/3/i,/4/i]},U={narrow:/^[слкмчжв]/i,abbreviated:/^(студз|лют|сак|крас|ма[йя]|чэрв|ліп|жн|вер|кастр|ліст|снеж)\.?/i,wide:/^(студзен[ья]|лют(ы|ага)|сакавіка?|красавіка?|ма[йя]|чэрвен[ья]|ліпен[ья]|жні(вень|ўня)|верас(ень|ня)|кастрычніка?|лістапада?|снеж(ань|ня))/i},Q={narrow:[/^с/i,/^л/i,/^с/i,/^к/i,/^м/i,/^ч/i,/^л/i,/^ж/i,/^в/i,/^к/i,/^л/i,/^с/i],any:[/^ст/i,/^лю/i,/^са/i,/^кр/i,/^ма/i,/^ч/i,/^ліп/i,/^ж/i,/^в/i,/^ка/i,/^ліс/i,/^сн/i]},I={narrow:/^[нпасч]/i,short:/^(нд|ня|пн|па|аў|ат|ср|се|чц|ча|пт|пя|сб|су)\.?/i,abbreviated:/^(нядз?|ндз|пнд|пан|аўт|срд|сер|чцв|чац|птн|пят|суб).?/i,wide:/^(нядзел[яі]|панядзел(ак|ка)|аўтор(ак|ка)|серад[аы]|чацв(ер|ярга)|пятніц[аы]|субот[аы])/i},_={narrow:[/^н/i,/^п/i,/^а/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[ан]/i,/^а/i,/^с[ер]/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},j={narrow:/^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,abbreviated:/^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,wide:/^([дп]п|поўнач|поўдзень|раніц[аы]|дзень|дня|вечара?|ночы?)/i},B={any:{am:/^дп/i,pm:/^пп/i,midnight:/^поўн/i,noon:/^поўд/i,morning:/^р/i,afternoon:/^д[зн]/i,evening:/^в/i,night:/^н/i}},J={ordinalNumber:f({matchPattern:H,parsePattern:R,valueCallback:function(e){return parseInt(e,10)}}),era:l({matchPatterns:Y,defaultMatchWidth:"wide",parsePatterns:q,defaultParseWidth:"any"}),quarter:l({matchPatterns:A,defaultMatchWidth:"wide",parsePatterns:O,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:l({matchPatterns:U,defaultMatchWidth:"wide",parsePatterns:Q,defaultParseWidth:"any"}),day:l({matchPatterns:I,defaultMatchWidth:"wide",parsePatterns:_,defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:j,defaultMatchWidth:"wide",parsePatterns:B,defaultParseWidth:"any"})},ne={code:"be",formatDistance:G,formatLong:N,formatRelative:F,localize:E,match:J,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{ne as default};
//# sourceMappingURL=index.4120422f.js.map
