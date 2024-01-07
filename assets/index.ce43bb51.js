import{d as u,e as i,f as s,g as d}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.ea11e591.js";import"./index.cc9c6bcc.js";import"./Logo.vue_vue_type_script_setup_true_lang.764bbefb.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.373bfae5.js";import"./use-controllable.44991f83.js";/*! PatchyVideo/Platinum by VoileLabs */var m={lessThanXSeconds:{one:"أقل من ثانية",two:"أقل من زوز ثواني",threeToTen:"أقل من {{count}} ثواني",other:"أقل من {{count}} ثانية"},xSeconds:{one:"ثانية",two:"زوز ثواني",threeToTen:"{{count}} ثواني",other:"{{count}} ثانية"},halfAMinute:"نص دقيقة",lessThanXMinutes:{one:"أقل من دقيقة",two:"أقل من دقيقتين",threeToTen:"أقل من {{count}} دقايق",other:"أقل من {{count}} دقيقة"},xMinutes:{one:"دقيقة",two:"دقيقتين",threeToTen:"{{count}} دقايق",other:"{{count}} دقيقة"},aboutXHours:{one:"ساعة تقريب",two:"ساعتين تقريب",threeToTen:"{{count}} سوايع تقريب",other:"{{count}} ساعة تقريب"},xHours:{one:"ساعة",two:"ساعتين",threeToTen:"{{count}} سوايع",other:"{{count}} ساعة"},xDays:{one:"نهار",two:"نهارين",threeToTen:"{{count}} أيام",other:"{{count}} يوم"},aboutXWeeks:{one:"جمعة تقريب",two:"جمعتين تقريب",threeToTen:"{{count}} جماع تقريب",other:"{{count}} جمعة تقريب"},xWeeks:{one:"جمعة",two:"جمعتين",threeToTen:"{{count}} جماع",other:"{{count}} جمعة"},aboutXMonths:{one:"شهر تقريب",two:"شهرين تقريب",threeToTen:"{{count}} أشهرة تقريب",other:"{{count}} شهر تقريب"},xMonths:{one:"شهر",two:"شهرين",threeToTen:"{{count}} أشهرة",other:"{{count}} شهر"},aboutXYears:{one:"عام تقريب",two:"عامين تقريب",threeToTen:"{{count}} أعوام تقريب",other:"{{count}} عام تقريب"},xYears:{one:"عام",two:"عامين",threeToTen:"{{count}} أعوام",other:"{{count}} عام"},overXYears:{one:"أكثر من عام",two:"أكثر من عامين",threeToTen:"أكثر من {{count}} أعوام",other:"أكثر من {{count}} عام"},almostXYears:{one:"عام تقريب",two:"عامين تقريب",threeToTen:"{{count}} أعوام تقريب",other:"{{count}} عام تقريب"}},h=function(e,n,o){var a=m[e],t;return typeof a=="string"?t=a:n===1?t=a.one:n===2?t=a.two:n<=10?t=a.threeToTen.replace("{{count}}",String(n)):t=a.other.replace("{{count}}",String(n)),o!=null&&o.addSuffix?o.comparison&&o.comparison>0?"في "+t:"عندو "+t:t},l={full:"EEEE، do MMMM y",long:"do MMMM y",medium:"d MMM y",short:"dd/MM/yyyy"},c={full:"HH:mm:ss",long:"HH:mm:ss",medium:"HH:mm:ss",short:"HH:mm"},f={full:"{{date}} 'مع' {{time}}",long:"{{date}} 'مع' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},v={date:u({formats:l,defaultWidth:"full"}),time:u({formats:c,defaultWidth:"full"}),dateTime:u({formats:f,defaultWidth:"full"})},w={lastWeek:"eeee 'إلي فات مع' p",yesterday:"'البارح مع' p",today:"'اليوم مع' p",tomorrow:"'غدوة مع' p",nextWeek:"eeee 'الجمعة الجاية مع' p 'نهار'",other:"P"},g=function(e){return w[e]},b={narrow:["ق","ب"],abbreviated:["ق.م.","ب.م."],wide:["قبل الميلاد","بعد الميلاد"]},P={narrow:["1","2","3","4"],abbreviated:["ر1","ر2","ر3","ر4"],wide:["الربع الأول","الربع الثاني","الربع الثالث","الربع الرابع"]},T={narrow:["د","ن","أ","س","أ","ج","ج","م","أ","م","ف","ج"],abbreviated:["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],wide:["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]},y={narrow:["ح","ن","ث","ر","خ","ج","س"],short:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],abbreviated:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],wide:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"]},p={narrow:{am:"ص",pm:"ع",morning:"الصباح",noon:"القايلة",afternoon:"بعد القايلة",evening:"العشية",night:"الليل",midnight:"نص الليل"},abbreviated:{am:"ص",pm:"ع",morning:"الصباح",noon:"القايلة",afternoon:"بعد القايلة",evening:"العشية",night:"الليل",midnight:"نص الليل"},wide:{am:"ص",pm:"ع",morning:"الصباح",noon:"القايلة",afternoon:"بعد القايلة",evening:"العشية",night:"الليل",midnight:"نص الليل"}},M={narrow:{am:"ص",pm:"ع",morning:"في الصباح",noon:"في القايلة",afternoon:"بعد القايلة",evening:"في العشية",night:"في الليل",midnight:"نص الليل"},abbreviated:{am:"ص",pm:"ع",morning:"في الصباح",noon:"في القايلة",afternoon:"بعد القايلة",evening:"في العشية",night:"في الليل",midnight:"نص الليل"},wide:{am:"ص",pm:"ع",morning:"في الصباح",noon:"في القايلة",afternoon:"بعد القايلة",evening:"في العشية",night:"في الليل",midnight:"نص الليل"}},W=function(e){return String(e)},k={ordinalNumber:W,era:i({values:b,defaultWidth:"wide"}),quarter:i({values:P,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:i({values:T,defaultWidth:"wide"}),day:i({values:y,defaultWidth:"wide"}),dayPeriod:i({values:p,defaultWidth:"wide",formattingValues:M,defaultFormattingWidth:"wide"})},D=/^(\d+)(th|st|nd|rd)?/i,x=/\d+/i,H={narrow:/[قب]/,abbreviated:/[قب]\.م\./,wide:/(قبل|بعد) الميلاد/},F={any:[/قبل/,/بعد/]},X={narrow:/^[1234]/i,abbreviated:/ر[1234]/,wide:/الربع (الأول|الثاني|الثالث|الرابع)/},C={any:[/1/i,/2/i,/3/i,/4/i]},N={narrow:/^[جفمأسند]/,abbreviated:/^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,wide:/^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/},S={narrow:[/^ج/i,/^ف/i,/^م/i,/^أ/i,/^م/i,/^ج/i,/^ج/i,/^أ/i,/^س/i,/^أ/i,/^ن/i,/^د/i],any:[/^جانفي/i,/^فيفري/i,/^مارس/i,/^أفريل/i,/^ماي/i,/^جوان/i,/^جويلية/i,/^أوت/i,/^سبتمبر/i,/^أكتوبر/i,/^نوفمبر/i,/^ديسمبر/i]},V={narrow:/^[حنثرخجس]/i,short:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,abbreviated:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,wide:/^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i},E={narrow:[/^ح/i,/^ن/i,/^ث/i,/^ر/i,/^خ/i,/^ج/i,/^س/i],wide:[/^الأحد/i,/^الاثنين/i,/^الثلاثاء/i,/^الأربعاء/i,/^الخميس/i,/^الجمعة/i,/^السبت/i],any:[/^أح/i,/^اث/i,/^ث/i,/^أر/i,/^خ/i,/^ج/i,/^س/i]},L={narrow:/^(ص|ع|ن ل|ل|(في|مع) (صباح|قايلة|عشية|ليل))/,any:/^([صع]|نص الليل|قايلة|(في|مع) (صباح|قايلة|عشية|ليل))/},R={any:{am:/^ص/,pm:/^ع/,midnight:/نص الليل/,noon:/قايلة/,afternoon:/بعد القايلة/,morning:/صباح/,evening:/عشية/,night:/ليل/}},Y={ordinalNumber:s({matchPattern:D,parsePattern:x,valueCallback:function(e){return parseInt(e,10)}}),era:d({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any"}),quarter:d({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:d({matchPatterns:N,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any"}),day:d({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:L,defaultMatchWidth:"any",parsePatterns:R,defaultParseWidth:"any"})},G={code:"ar-TN",formatDistance:h,formatLong:v,formatRelative:g,localize:k,match:Y,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{G as default};
//# sourceMappingURL=index.ce43bb51.js.map
