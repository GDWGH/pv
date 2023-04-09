import{d as u,e as i,f as s,g as d}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.f83f1fd7.js";import"./index.f26990f7.js";import"./Logo.vue_vue_type_script_setup_true_lang.d05716d3.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.ef3bc432.js";import"./use-controllable.84332405.js";/*! PatchyVideo/Platinum by VoileLabs */var m={lessThanXSeconds:{one:"أقل من ثانية",two:"أقل من ثانيتين",threeToTen:"أقل من {{count}} ثواني",other:"أقل من {{count}} ثانية"},xSeconds:{one:"ثانية واحدة",two:"ثانيتان",threeToTen:"{{count}} ثواني",other:"{{count}} ثانية"},halfAMinute:"نصف دقيقة",lessThanXMinutes:{one:"أقل من دقيقة",two:"أقل من دقيقتين",threeToTen:"أقل من {{count}} دقائق",other:"أقل من {{count}} دقيقة"},xMinutes:{one:"دقيقة واحدة",two:"دقيقتان",threeToTen:"{{count}} دقائق",other:"{{count}} دقيقة"},aboutXHours:{one:"ساعة واحدة تقريباً",two:"ساعتين تقريبا",threeToTen:"{{count}} ساعات تقريباً",other:"{{count}} ساعة تقريباً"},xHours:{one:"ساعة واحدة",two:"ساعتان",threeToTen:"{{count}} ساعات",other:"{{count}} ساعة"},xDays:{one:"يوم واحد",two:"يومان",threeToTen:"{{count}} أيام",other:"{{count}} يوم"},aboutXWeeks:{one:"أسبوع واحد تقريبا",two:"أسبوعين تقريبا",threeToTen:"{{count}} أسابيع تقريبا",other:"{{count}} أسبوعا تقريبا"},xWeeks:{one:"أسبوع واحد",two:"أسبوعان",threeToTen:"{{count}} أسابيع",other:"{{count}} أسبوعا"},aboutXMonths:{one:"شهر واحد تقريباً",two:"شهرين تقريبا",threeToTen:"{{count}} أشهر تقريبا",other:"{{count}} شهرا تقريباً"},xMonths:{one:"شهر واحد",two:"شهران",threeToTen:"{{count}} أشهر",other:"{{count}} شهرا"},aboutXYears:{one:"سنة واحدة تقريباً",two:"سنتين تقريبا",threeToTen:"{{count}} سنوات تقريباً",other:"{{count}} سنة تقريباً"},xYears:{one:"سنة واحد",two:"سنتان",threeToTen:"{{count}} سنوات",other:"{{count}} سنة"},overXYears:{one:"أكثر من سنة",two:"أكثر من سنتين",threeToTen:"أكثر من {{count}} سنوات",other:"أكثر من {{count}} سنة"},almostXYears:{one:"ما يقارب سنة واحدة",two:"ما يقارب سنتين",threeToTen:"ما يقارب {{count}} سنوات",other:"ما يقارب {{count}} سنة"}},h=function(e,n,o){var a=m[e],t;return typeof a=="string"?t=a:n===1?t=a.one:n===2?t=a.two:n<=10?t=a.threeToTen.replace("{{count}}",String(n)):t=a.other.replace("{{count}}",String(n)),o!=null&&o.addSuffix?o.comparison&&o.comparison>0?"خلال "+t:"منذ "+t:t},l={full:"EEEE، do MMMM y",long:"do MMMM y",medium:"d MMM y",short:"dd/MM/yyyy"},c={full:"HH:mm:ss",long:"HH:mm:ss",medium:"HH:mm:ss",short:"HH:mm"},f={full:"{{date}} 'عند الساعة' {{time}}",long:"{{date}} 'عند الساعة' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},v={date:u({formats:l,defaultWidth:"full"}),time:u({formats:c,defaultWidth:"full"}),dateTime:u({formats:f,defaultWidth:"full"})},w={lastWeek:"eeee 'الماضي عند الساعة' p",yesterday:"'الأمس عند الساعة' p",today:"'اليوم عند الساعة' p",tomorrow:"'غدا عند الساعة' p",nextWeek:"eeee 'القادم عند الساعة' p",other:"P"},g=function(e){return w[e]},b={narrow:["ق","ب"],abbreviated:["ق.م.","ب.م."],wide:["قبل الميلاد","بعد الميلاد"]},P={narrow:["1","2","3","4"],abbreviated:["ر1","ر2","ر3","ر4"],wide:["الربع الأول","الربع الثاني","الربع الثالث","الربع الرابع"]},T={narrow:["ي","ف","م","أ","م","ي","ي","أ","س","أ","ن","د"],abbreviated:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],wide:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]},y={narrow:["ح","ن","ث","ر","خ","ج","س"],short:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],abbreviated:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],wide:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"]},p={narrow:{am:"ص",pm:"م",morning:"الصباح",noon:"الظهر",afternoon:"بعد الظهر",evening:"المساء",night:"الليل",midnight:"منتصف الليل"},abbreviated:{am:"ص",pm:"م",morning:"الصباح",noon:"الظهر",afternoon:"بعد الظهر",evening:"المساء",night:"الليل",midnight:"منتصف الليل"},wide:{am:"ص",pm:"م",morning:"الصباح",noon:"الظهر",afternoon:"بعد الظهر",evening:"المساء",night:"الليل",midnight:"منتصف الليل"}},M={narrow:{am:"ص",pm:"م",morning:"في الصباح",noon:"الظهر",afternoon:"بعد الظهر",evening:"في المساء",night:"في الليل",midnight:"منتصف الليل"},abbreviated:{am:"ص",pm:"م",morning:"في الصباح",noon:"الظهر",afternoon:"بعد الظهر",evening:"في المساء",night:"في الليل",midnight:"منتصف الليل"},wide:{am:"ص",pm:"م",morning:"في الصباح",noon:"الظهر",afternoon:"بعد الظهر",evening:"في المساء",night:"في الليل",midnight:"منتصف الليل"}},W=function(e){return String(e)},k={ordinalNumber:W,era:i({values:b,defaultWidth:"wide"}),quarter:i({values:P,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:i({values:T,defaultWidth:"wide"}),day:i({values:y,defaultWidth:"wide"}),dayPeriod:i({values:p,defaultWidth:"wide",formattingValues:M,defaultFormattingWidth:"wide"})},D=/^(\d+)(th|st|nd|rd)?/i,x=/\d+/i,H={narrow:/[قب]/,abbreviated:/[قب]\.م\./,wide:/(قبل|بعد) الميلاد/},F={any:[/قبل/,/بعد/]},X={narrow:/^[1234]/i,abbreviated:/ر[1234]/,wide:/الربع (الأول|الثاني|الثالث|الرابع)/},C={any:[/1/i,/2/i,/3/i,/4/i]},S={narrow:/^[أيفمسند]/,abbreviated:/^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,wide:/^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/},V={narrow:[/^ي/i,/^ف/i,/^م/i,/^أ/i,/^م/i,/^ي/i,/^ي/i,/^أ/i,/^س/i,/^أ/i,/^ن/i,/^د/i],any:[/^يناير/i,/^فبراير/i,/^مارس/i,/^أبريل/i,/^مايو/i,/^يونيو/i,/^يوليو/i,/^أغسطس/i,/^سبتمبر/i,/^أكتوبر/i,/^نوفمبر/i,/^ديسمبر/i]},E={narrow:/^[حنثرخجس]/i,short:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,abbreviated:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,wide:/^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i},L={narrow:[/^ح/i,/^ن/i,/^ث/i,/^ر/i,/^خ/i,/^ج/i,/^س/i],wide:[/^الأحد/i,/^الاثنين/i,/^الثلاثاء/i,/^الأربعاء/i,/^الخميس/i,/^الجمعة/i,/^السبت/i],any:[/^أح/i,/^اث/i,/^ث/i,/^أر/i,/^خ/i,/^ج/i,/^س/i]},N={narrow:/^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/,any:/^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/},R={any:{am:/^ص/,pm:/^م/,midnight:/منتصف الليل/,noon:/الظهر/,afternoon:/بعد الظهر/,morning:/في الصباح/,evening:/في المساء/,night:/في الليل/}},Y={ordinalNumber:s({matchPattern:D,parsePattern:x,valueCallback:function(e){return parseInt(e,10)}}),era:d({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any"}),quarter:d({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:d({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any"}),day:d({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:L,defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:N,defaultMatchWidth:"any",parsePatterns:R,defaultParseWidth:"any"})},G={code:"ar",formatDistance:h,formatLong:v,formatRelative:g,localize:k,match:Y,options:{weekStartsOn:6,firstWeekContainsDate:1}};export{G as default};
//# sourceMappingURL=index.f177bac8.js.map
