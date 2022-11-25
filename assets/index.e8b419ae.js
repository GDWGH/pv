import{d as u,e as i,f as s,g as d}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.80b15374.js";import"./index.7766d1e6.js";import"./Logo.vue_vue_type_script_setup_true_lang.ff19ae26.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.eb42a9e4.js";import"./use-controllable.94c5eb73.js";/*! PatchyVideo/Platinum by VoileLabs */var h={lessThanXSeconds:{one:"أقل من ثانية",two:"أقل من ثانيتين",threeToTen:"أقل من {{count}} ثواني",other:"أقل من {{count}} ثانية"},xSeconds:{one:"ثانية",two:"ثانيتين",threeToTen:"{{count}} ثواني",other:"{{count}} ثانية"},halfAMinute:"نص دقيقة",lessThanXMinutes:{one:"أقل من دقيقة",two:"أقل من دقيقتين",threeToTen:"أقل من {{count}} دقايق",other:"أقل من {{count}} دقيقة"},xMinutes:{one:"دقيقة",two:"دقيقتين",threeToTen:"{{count}} دقايق",other:"{{count}} دقيقة"},aboutXHours:{one:"حوالي ساعة",two:"حوالي ساعتين",threeToTen:"حوالي {{count}} ساعات",other:"حوالي {{count}} ساعة"},xHours:{one:"ساعة",two:"ساعتين",threeToTen:"{{count}} ساعات",other:"{{count}} ساعة"},xDays:{one:"يوم",two:"يومين",threeToTen:"{{count}} أيام",other:"{{count}} يوم"},aboutXWeeks:{one:"حوالي أسبوع",two:"حوالي أسبوعين",threeToTen:"حوالي {{count}} أسابيع",other:"حوالي {{count}} أسبوع"},xWeeks:{one:"أسبوع",two:"أسبوعين",threeToTen:"{{count}} أسابيع",other:"{{count}} أسبوع"},aboutXMonths:{one:"حوالي شهر",two:"حوالي شهرين",threeToTen:"حوالي {{count}} أشهر",other:"حوالي {{count}} شهر"},xMonths:{one:"شهر",two:"شهرين",threeToTen:"{{count}} أشهر",other:"{{count}} شهر"},aboutXYears:{one:"حوالي سنة",two:"حوالي سنتين",threeToTen:"حوالي {{count}} سنين",other:"حوالي {{count}} سنة"},xYears:{one:"عام",two:"عامين",threeToTen:"{{count}} أعوام",other:"{{count}} عام"},overXYears:{one:"أكثر من سنة",two:"أكثر من سنتين",threeToTen:"أكثر من {{count}} سنين",other:"أكثر من {{count}} سنة"},almostXYears:{one:"عام تقريبًا",two:"عامين تقريبًا",threeToTen:"{{count}} أعوام تقريبًا",other:"{{count}} عام تقريبًا"}},m=function(e,a,r){var t,n=h[e];return typeof n=="string"?t=n:a===1?t=n.one:a===2?t=n.two:a<=10?t=n.threeToTen.replace("{{count}}",String(a)):t=n.other.replace("{{count}}",String(a)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"في خلال ".concat(t):"منذ ".concat(t):t},l={full:"EEEE، do MMMM y",long:"do MMMM y",medium:"dd/MMM/y",short:"d/MM/y"},c={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},f={full:"{{date}} 'الساعة' {{time}}",long:"{{date}} 'الساعة' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},v={date:u({formats:l,defaultWidth:"full"}),time:u({formats:c,defaultWidth:"full"}),dateTime:u({formats:f,defaultWidth:"full"})},w={lastWeek:"eeee 'اللي جاي الساعة' p",yesterday:"'إمبارح الساعة' p",today:"'النهاردة الساعة' p",tomorrow:"'بكرة الساعة' p",nextWeek:"eeee 'الساعة' p",other:"P"},g=function(e,a,r,t){return w[e]},b={narrow:["ق","ب"],abbreviated:["ق.م","ب.م"],wide:["قبل الميلاد","بعد الميلاد"]},P={narrow:["1","2","3","4"],abbreviated:["ر1","ر2","ر3","ر4"],wide:["الربع الأول","الربع الثاني","الربع الثالث","الربع الرابع"]},T={narrow:["ي","ف","م","أ","م","ي","ي","أ","س","أ","ن","د"],abbreviated:["ينا","فبر","مارس","أبريل","مايو","يونـ","يولـ","أغسـ","سبتـ","أكتـ","نوفـ","ديسـ"],wide:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]},p={narrow:["ح","ن","ث","ر","خ","ج","س"],short:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],abbreviated:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],wide:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"]},y={narrow:{am:"ص",pm:"م",midnight:"ن",noon:"ظ",morning:"صباحاً",afternoon:"بعد الظهر",evening:"مساءً",night:"ليلاً"},abbreviated:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهراً",morning:"صباحاً",afternoon:"بعد الظهر",evening:"مساءً",night:"ليلاً"},wide:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهراً",morning:"صباحاً",afternoon:"بعد الظهر",evening:"مساءً",night:"ليلاً"}},M={narrow:{am:"ص",pm:"م",midnight:"ن",noon:"ظ",morning:"في الصباح",afternoon:"بعد الظهر",evening:"في المساء",night:"في الليل"},abbreviated:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهراً",morning:"في الصباح",afternoon:"بعد الظهر",evening:"في المساء",night:"في الليل"},wide:{am:"ص",pm:"م",midnight:"نصف الليل",morning:"في الصباح",noon:"ظهراً",afternoon:"بعد الظهر",evening:"في المساء",night:"في الليل"}},W=function(e,a){return String(e)},k={ordinalNumber:W,era:i({values:b,defaultWidth:"wide"}),quarter:i({values:P,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:i({values:T,defaultWidth:"wide"}),day:i({values:p,defaultWidth:"wide"}),dayPeriod:i({values:y,defaultWidth:"wide",formattingValues:M,defaultFormattingWidth:"wide"})},D=/^(\d+)/,x=/\d+/i,F={narrow:/^(ق|ب)/g,abbreviated:/^(ق.م|ب.م)/g,wide:/^(قبل الميلاد|بعد الميلاد)/g},z={any:[/^ق/g,/^ب/g]},E={narrow:/^[1234]/,abbreviated:/^ر[1234]/,wide:/^الربع (الأول|الثاني|الثالث|الرابع)/},V={wide:[/الربع الأول/,/الربع الثاني/,/الربع الثالث/,/الربع الرابع/],any:[/1/,/2/,/3/,/4/]},X={narrow:/^(ي|ف|م|أ|س|ن|د)/,abbreviated:/^(ينا|فبر|مارس|أبريل|مايو|يونـ|يولـ|أغسـ|سبتـ|أكتـ|نوفـ|ديسـ)/,wide:/^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/},C={narrow:[/^ي/,/^ف/,/^م/,/^أ/,/^م/,/^ي/,/^ي/,/^أ/,/^س/,/^أ/,/^ن/,/^د/],any:[/^ينا/,/^فبر/,/^مارس/,/^أبريل/,/^مايو/,/^يون/,/^يول/,/^أغس/,/^سبت/,/^أكت/,/^نوف/,/^ديس/]},S={narrow:/^(ح|ن|ث|ر|خ|ج|س)/,short:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/,abbreviated:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/,wide:/^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/},L={narrow:[/^ح/,/^ن/,/^ث/,/^ر/,/^خ/,/^ج/,/^س/],any:[/أحد/,/اثنين/,/ثلاثاء/,/أربعاء/,/خميس/,/جمعة/,/سبت/]},N={narrow:/^(ص|م|ن|ظ|في الصباح|بعد الظهر|في المساء|في الليل)/,abbreviated:/^(ص|م|نصف الليل|ظهراً|في الصباح|بعد الظهر|في المساء|في الليل)/,wide:/^(ص|م|نصف الليل|في الصباح|ظهراً|بعد الظهر|في المساء|في الليل)/,any:/^(ص|م|صباح|ظهر|مساء|ليل)/},R={any:{am:/^ص/,pm:/^م/,midnight:/^ن/,noon:/^ظ/,morning:/^ص/,afternoon:/^بعد/,evening:/^م/,night:/^ل/}},Y={ordinalNumber:s({matchPattern:D,parsePattern:x,valueCallback:function(e){return parseInt(e,10)}}),era:d({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:z,defaultParseWidth:"any"}),quarter:d({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:d({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any"}),day:d({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:L,defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:N,defaultMatchWidth:"any",parsePatterns:R,defaultParseWidth:"any"})},Q={code:"ar-EG",formatDistance:m,formatLong:v,formatRelative:g,localize:k,match:Y,options:{weekStartsOn:0,firstWeekContainsDate:1}};export{Q as default};
//# sourceMappingURL=index.e8b419ae.js.map
