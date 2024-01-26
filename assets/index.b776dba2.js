import{d as s,e as u,f,g as o}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.dceb3cf0.js";import{i as d}from"./index.8956c162.js";import"./index.b2ab1fa2.js";import"./Logo.vue_vue_type_script_setup_true_lang.5f9d55d4.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.e02d9396.js";import"./use-controllable.696ef441.js";/*! PatchyVideo/Platinum by VoileLabs */var h={lessThanXSeconds:{regular:{one:"1 секундтан аз",singularNominative:"{{count}} секундтан аз",singularGenitive:"{{count}} секундтан аз",pluralGenitive:"{{count}} секундтан аз"},future:{one:"бір секундтан кейін",singularNominative:"{{count}} секундтан кейін",singularGenitive:"{{count}} секундтан кейін",pluralGenitive:"{{count}} секундтан кейін"}},xSeconds:{regular:{singularNominative:"{{count}} секунд",singularGenitive:"{{count}} секунд",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунд бұрын",singularGenitive:"{{count}} секунд бұрын",pluralGenitive:"{{count}} секунд бұрын"},future:{singularNominative:"{{count}} секундтан кейін",singularGenitive:"{{count}} секундтан кейін",pluralGenitive:"{{count}} секундтан кейін"}},halfAMinute:function(e){return e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"жарты минут ішінде":"жарты минут бұрын":"жарты минут"},lessThanXMinutes:{regular:{one:"1 минуттан аз",singularNominative:"{{count}} минуттан аз",singularGenitive:"{{count}} минуттан аз",pluralGenitive:"{{count}} минуттан аз"},future:{one:"минуттан кем ",singularNominative:"{{count}} минуттан кем",singularGenitive:"{{count}} минуттан кем",pluralGenitive:"{{count}} минуттан кем"}},xMinutes:{regular:{singularNominative:"{{count}} минут",singularGenitive:"{{count}} минут",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минут бұрын",singularGenitive:"{{count}} минут бұрын",pluralGenitive:"{{count}} минут бұрын"},future:{singularNominative:"{{count}} минуттан кейін",singularGenitive:"{{count}} минуттан кейін",pluralGenitive:"{{count}} минуттан кейін"}},aboutXHours:{regular:{singularNominative:"шамамен {{count}} сағат",singularGenitive:"шамамен {{count}} сағат",pluralGenitive:"шамамен {{count}} сағат"},future:{singularNominative:"шамамен {{count}} сағаттан кейін",singularGenitive:"шамамен {{count}} сағаттан кейін",pluralGenitive:"шамамен {{count}} сағаттан кейін"}},xHours:{regular:{singularNominative:"{{count}} сағат",singularGenitive:"{{count}} сағат",pluralGenitive:"{{count}} сағат"}},xDays:{regular:{singularNominative:"{{count}} күн",singularGenitive:"{{count}} күн",pluralGenitive:"{{count}} күн"},future:{singularNominative:"{{count}} күннен кейін",singularGenitive:"{{count}} күннен кейін",pluralGenitive:"{{count}} күннен кейін"}},aboutXWeeks:{type:"weeks",one:"шамамен 1 апта",other:"шамамен {{count}} апта"},xWeeks:{type:"weeks",one:"1 апта",other:"{{count}} апта"},aboutXMonths:{regular:{singularNominative:"шамамен {{count}} ай",singularGenitive:"шамамен {{count}} ай",pluralGenitive:"шамамен {{count}} ай"},future:{singularNominative:"шамамен {{count}} айдан кейін",singularGenitive:"шамамен {{count}} айдан кейін",pluralGenitive:"шамамен {{count}} айдан кейін"}},xMonths:{regular:{singularNominative:"{{count}} ай",singularGenitive:"{{count}} ай",pluralGenitive:"{{count}} ай"}},aboutXYears:{regular:{singularNominative:"шамамен {{count}} жыл",singularGenitive:"шамамен {{count}} жыл",pluralGenitive:"шамамен {{count}} жыл"},future:{singularNominative:"шамамен {{count}} жылдан кейін",singularGenitive:"шамамен {{count}} жылдан кейін",pluralGenitive:"шамамен {{count}} жылдан кейін"}},xYears:{regular:{singularNominative:"{{count}} жыл",singularGenitive:"{{count}} жыл",pluralGenitive:"{{count}} жыл"},future:{singularNominative:"{{count}} жылдан кейін",singularGenitive:"{{count}} жылдан кейін",pluralGenitive:"{{count}} жылдан кейін"}},overXYears:{regular:{singularNominative:"{{count}} жылдан астам",singularGenitive:"{{count}} жылдан астам",pluralGenitive:"{{count}} жылдан астам"},future:{singularNominative:"{{count}} жылдан астам",singularGenitive:"{{count}} жылдан астам",pluralGenitive:"{{count}} жылдан астам"}},almostXYears:{regular:{singularNominative:"{{count}} жылға жақын",singularGenitive:"{{count}} жылға жақын",pluralGenitive:"{{count}} жылға жақын"},future:{singularNominative:"{{count}} жылдан кейін",singularGenitive:"{{count}} жылдан кейін",pluralGenitive:"{{count}} жылдан кейін"}}};function l(t,e){if(t.one&&e===1)return t.one;var n=e%10,a=e%100;return n===1&&a!==11?t.singularNominative.replace("{{count}}",String(e)):n>=2&&n<=4&&(a<10||a>20)?t.singularGenitive.replace("{{count}}",String(e)):t.pluralGenitive.replace("{{count}}",String(e))}var p=function(e,n,a){var i=h[e];return typeof i=="function"?i(a):i.type==="weeks"?n===1?i.one:i.other.replace("{{count}}",String(n)):a!=null&&a.addSuffix?a.comparison&&a.comparison>0?i.future?l(i.future,n):l(i.regular,n)+" кейін":i.past?l(i.past,n):l(i.regular,n)+" бұрын":l(i.regular,n)},G={full:"EEEE, do MMMM y 'ж.'",long:"do MMMM y 'ж.'",medium:"d MMM y 'ж.'",short:"dd.MM.yyyy"},y={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},w={any:"{{date}}, {{time}}"},b={date:s({formats:G,defaultWidth:"full"}),time:s({formats:y,defaultWidth:"full"}),dateTime:s({formats:w,defaultWidth:"any"})},c=["жексенбіде","дүйсенбіде","сейсенбіде","сәрсенбіде","бейсенбіде","жұмада","сенбіде"];function P(t){var e=c[t];return"'өткен "+e+" сағат' p'-де'"}function m(t){var e=c[t];return"'"+e+" сағат' p'-де'"}function N(t){var e=c[t];return"'келесі "+e+" сағат' p'-де'"}var W={lastWeek:function(e,n,a){var i=e.getUTCDay();return d(e,n,a)?m(i):P(i)},yesterday:"'кеше сағат' p'-де'",today:"'бүгін сағат' p'-де'",tomorrow:"'ертең сағат' p'-де'",nextWeek:function(e,n,a){var i=e.getUTCDay();return d(e,n,a)?m(i):N(i)},other:"P"},M=function(e,n,a,i){var r=W[e];return typeof r=="function"?r(n,a,i):r},k={narrow:["б.з.д.","б.з."],abbreviated:["б.з.д.","б.з."],wide:["біздің заманымызға дейін","біздің заманымыз"]},x={narrow:["1","2","3","4"],abbreviated:["1-ші тоқ.","2-ші тоқ.","3-ші тоқ.","4-ші тоқ."],wide:["1-ші тоқсан","2-ші тоқсан","3-ші тоқсан","4-ші тоқсан"]},D={narrow:["Қ","А","Н","С","М","М","Ш","Т","Қ","Қ","Қ","Ж"],abbreviated:["қаң","ақп","нау","сәу","мам","мау","шіл","там","қыр","қаз","қар","жел"],wide:["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"]},C={narrow:["Қ","А","Н","С","М","М","Ш","Т","Қ","Қ","Қ","Ж"],abbreviated:["қаң","ақп","нау","сәу","мам","мау","шіл","там","қыр","қаз","қар","жел"],wide:["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"]},F={narrow:["Ж","Д","С","С","Б","Ж","С"],short:["жс","дс","сс","ср","бс","жм","сб"],abbreviated:["жс","дс","сс","ср","бс","жм","сб"],wide:["жексенбі","дүйсенбі","сейсенбі","сәрсенбі","бейсенбі","жұма","сенбі"]},S={narrow:{am:"ТД",pm:"ТК",midnight:"түн ортасы",noon:"түс",morning:"таң",afternoon:"күндіз",evening:"кеш",night:"түн"},wide:{am:"ТД",pm:"ТК",midnight:"түн ортасы",noon:"түс",morning:"таң",afternoon:"күндіз",evening:"кеш",night:"түн"}},V={narrow:{am:"ТД",pm:"ТК",midnight:"түн ортасында",noon:"түс",morning:"таң",afternoon:"күн",evening:"кеш",night:"түн"},wide:{am:"ТД",pm:"ТК",midnight:"түн ортасында",noon:"түсте",morning:"таңертең",afternoon:"күндіз",evening:"кеште",night:"түнде"}},v={0:"-ші",1:"-ші",2:"-ші",3:"-ші",4:"-ші",5:"-ші",6:"-шы",7:"-ші",8:"-ші",9:"-шы",10:"-шы",20:"-шы",30:"-шы",40:"-шы",50:"-ші",60:"-шы",70:"-ші",80:"-ші",90:"-шы",100:"-ші"},z=function(e,n){var a=Number(e),i=a%10,r=a>=100?100:null,g=v[a]||v[i]||r&&v[r]||"";return a+g},X={ordinalNumber:z,era:u({values:k,defaultWidth:"wide"}),quarter:u({values:x,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:u({values:D,defaultWidth:"wide",formattingValues:C,defaultFormattingWidth:"wide"}),day:u({values:F,defaultWidth:"wide"}),dayPeriod:u({values:S,defaultWidth:"any",formattingValues:V,defaultFormattingWidth:"wide"})},T=/^(\d+)(-?(ші|шы))?/i,E=/\d+/i,H={narrow:/^((б )?з\.?\s?д\.?)/i,abbreviated:/^((б )?з\.?\s?д\.?)/i,wide:/^(біздің заманымызға дейін|біздің заманымыз|біздің заманымыздан)/i},L={any:[/^б/i,/^з/i]},R={narrow:/^[1234]/i,abbreviated:/^[1234](-?ші)? тоқ.?/i,wide:/^[1234](-?ші)? тоқсан/i},Y={any:[/1/i,/2/i,/3/i,/4/i]},q={narrow:/^(қ|а|н|с|м|мау|ш|т|қыр|қаз|қар|ж)/i,abbreviated:/^(қаң|ақп|нау|сәу|мам|мау|шіл|там|қыр|қаз|қар|жел)/i,wide:/^(қаңтар|ақпан|наурыз|сәуір|мамыр|маусым|шілде|тамыз|қыркүйек|қазан|қараша|желтоқсан)/i},O={narrow:[/^қ/i,/^а/i,/^н/i,/^с/i,/^м/i,/^м/i,/^ш/i,/^т/i,/^қ/i,/^қ/i,/^қ/i,/^ж/i],abbreviated:[/^қаң/i,/^ақп/i,/^нау/i,/^сәу/i,/^мам/i,/^мау/i,/^шіл/i,/^там/i,/^қыр/i,/^қаз/i,/^қар/i,/^жел/i],any:[/^қ/i,/^а/i,/^н/i,/^с/i,/^м/i,/^м/i,/^ш/i,/^т/i,/^қ/i,/^қ/i,/^қ/i,/^ж/i]},U={narrow:/^(ж|д|с|с|б|ж|с)/i,short:/^(жс|дс|сс|ср|бс|жм|сб)/i,wide:/^(жексенбі|дүйсенбі|сейсенбі|сәрсенбі|бейсенбі|жұма|сенбі)/i},_={narrow:[/^ж/i,/^д/i,/^с/i,/^с/i,/^б/i,/^ж/i,/^с/i],short:[/^жс/i,/^дс/i,/^сс/i,/^ср/i,/^бс/i,/^жм/i,/^сб/i],any:[/^ж[ек]/i,/^д[үй]/i,/^сe[й]/i,/^сә[р]/i,/^б[ей]/i,/^ж[ұм]/i,/^се[н]/i]},A={narrow:/^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,wide:/^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,any:/^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i},Q={any:{am:/^ТД/i,pm:/^ТК/i,midnight:/^түн орта/i,noon:/^күндіз/i,morning:/таң/i,afternoon:/түс/i,evening:/кеш/i,night:/түн/i}},I={ordinalNumber:f({matchPattern:T,parsePattern:E,valueCallback:function(e){return parseInt(e,10)}}),era:o({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:L,defaultParseWidth:"any"}),quarter:o({matchPatterns:R,defaultMatchWidth:"wide",parsePatterns:Y,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:o({matchPatterns:q,defaultMatchWidth:"wide",parsePatterns:O,defaultParseWidth:"any"}),day:o({matchPatterns:U,defaultMatchWidth:"wide",parsePatterns:_,defaultParseWidth:"any"}),dayPeriod:o({matchPatterns:A,defaultMatchWidth:"wide",parsePatterns:Q,defaultParseWidth:"any"})},ee={code:"kk",formatDistance:p,formatLong:b,formatRelative:M,localize:X,match:I,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{ee as default};
//# sourceMappingURL=index.b776dba2.js.map
