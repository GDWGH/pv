import{d as s,e as i,f as d,g as r}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.488ba244.js";import"./index.8a1193b7.js";import"./Logo.vue_vue_type_script_setup_true_lang.1cb4fd3b.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.0424ca2c.js";import"./use-controllable.0872efef.js";/*! PatchyVideo/Platinum by VoileLabs */var l={lessThanXSeconds:{one:"mwens pase yon segond",other:"mwens pase {{count}} segond"},xSeconds:{one:"1 segond",other:"{{count}} segond"},halfAMinute:"30 segond",lessThanXMinutes:{one:"mwens pase yon minit",other:"mwens pase {{count}} minit"},xMinutes:{one:"1 minit",other:"{{count}} minit"},aboutXHours:{one:"anviwon inè",other:"anviwon {{count}} è"},xHours:{one:"1 lè",other:"{{count}} lè"},xDays:{one:"1 jou",other:"{{count}} jou"},aboutXWeeks:{one:"anviwon 1 semèn",other:"anviwon {{count}} semèn"},xWeeks:{one:"1 semèn",other:"{{count}} semèn"},aboutXMonths:{one:"anviwon 1 mwa",other:"anviwon {{count}} mwa"},xMonths:{one:"1 mwa",other:"{{count}} mwa"},aboutXYears:{one:"anviwon 1 an",other:"anviwon {{count}} an"},xYears:{one:"1 an",other:"{{count}} an"},overXYears:{one:"plis pase 1 an",other:"plis pase {{count}} an"},almostXYears:{one:"prèske 1 an",other:"prèske {{count}} an"}},u=function(a,o,e){var n,m=l[a];return typeof m=="string"?n=m:o===1?n=m.one:n=m.other.replace("{{count}}",String(o)),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"nan "+n:"sa fè "+n:n},v={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},h={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},f={full:"{{date}} 'nan lè' {{time}}",long:"{{date}} 'nan lè' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},c={date:s({formats:v,defaultWidth:"full"}),time:s({formats:h,defaultWidth:"full"}),dateTime:s({formats:f,defaultWidth:"full"})},p={lastWeek:"eeee 'pase nan lè' p",yesterday:"'yè nan lè' p",today:"'jodi a' p",tomorrow:"'demen nan lè' p'",nextWeek:"eeee 'pwochen nan lè' p",other:"P"},w=function(a,o,e,n){return p[a]},y={narrow:["av. J.-K","ap. J.-K"],abbreviated:["av. J.-K","ap. J.-K"],wide:["anvan Jezi Kris","apre Jezi Kris"]},b={narrow:["T1","T2","T3","T4"],abbreviated:["1ye trim.","2yèm trim.","3yèm trim.","4yèm trim."],wide:["1ye trimès","2yèm trimès","3yèm trimès","4yèm trimès"]},P={narrow:["J","F","M","A","M","J","J","O","S","O","N","D"],abbreviated:["janv.","fevr.","mas","avr.","me","jen","jiyè","out","sept.","okt.","nov.","des."],wide:["janvye","fevrye","mas","avril","me","jen","jiyè","out","septanm","oktòb","novanm","desanm"]},M={narrow:["D","L","M","M","J","V","S"],short:["di","le","ma","mè","je","va","sa"],abbreviated:["dim.","len.","mad.","mèk.","jed.","van.","sam."],wide:["dimanch","lendi","madi","mèkredi","jedi","vandredi","samdi"]},g={narrow:{am:"AM",pm:"PM",midnight:"minwit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"swa",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minwit",noon:"midi",morning:"maten",afternoon:"aprèmidi",evening:"swa",night:"maten"},wide:{am:"AM",pm:"PM",midnight:"minwit",noon:"midi",morning:"nan maten",afternoon:"nan aprèmidi",evening:"nan aswè",night:"nan maten"}},j=function(a,o){var e=Number(a);if(e===0)return String(e);var n=e===1?"ye":"yèm";return e+n},k={ordinalNumber:j,era:i({values:y,defaultWidth:"wide"}),quarter:i({values:b,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:i({values:P,defaultWidth:"wide"}),day:i({values:M,defaultWidth:"wide"}),dayPeriod:i({values:g,defaultWidth:"wide"})},W=/^(\d+)(ye|yèm)?/i,J=/\d+/i,K={narrow:/^(av\.J\.K|ap\.J\.K|ap\.J\.-K)/i,abbreviated:/^(av\.J\.-K|av\.J-K|apr\.J\.-K|apr\.J-K|ap\.J-K)/i,wide:/^(avan Jezi Kris|apre Jezi Kris)/i},D={any:[/^av/i,/^ap/i]},z={narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](ye|yèm)? trimès/i},x={any:[/1/i,/2/i,/3/i,/4/i]},H={narrow:/^[jfmasond]/i,abbreviated:/^(janv|fevr|mas|avr|me|jen|jiyè|out|sept|okt|nov|des)\.?/i,wide:/^(janvye|fevrye|mas|avril|me|jen|jiyè|out|septanm|oktòb|novanm|desanm)/i},F={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^o/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^ma/i,/^av/i,/^me/i,/^je/i,/^ji/i,/^ou/i,/^s/i,/^ok/i,/^n/i,/^d/i]},N={narrow:/^[lmjvsd]/i,short:/^(di|le|ma|me|je|va|sa)/i,abbreviated:/^(dim|len|mad|mèk|jed|van|sam)\.?/i,wide:/^(dimanch|lendi|madi|mèkredi|jedi|vandredi|samdi)/i},S={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^le/i,/^ma/i,/^mè/i,/^je/i,/^va/i,/^sa/i]},T={narrow:/^(a|p|minwit|midi|mat\.?|ap\.?m\.?|swa)/i,any:/^([ap]\.?\s?m\.?|nan maten|nan aprèmidi|nan aswè)/i},X={any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/sw/i,night:/nwit/i}},C={ordinalNumber:d({matchPattern:W,parsePattern:J,valueCallback:function(a){return parseInt(a,10)}}),era:r({matchPatterns:K,defaultMatchWidth:"wide",parsePatterns:D,defaultParseWidth:"any"}),quarter:r({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:r({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any"}),day:r({matchPatterns:N,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any"}),dayPeriod:r({matchPatterns:T,defaultMatchWidth:"any",parsePatterns:X,defaultParseWidth:"any"})},R={code:"ht",formatDistance:u,formatLong:c,formatRelative:w,localize:k,match:C,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{R as default};
//# sourceMappingURL=index.6d8d12ec.js.map
