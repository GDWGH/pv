import{d as m,e as d,f as s,g as o}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.dca57faa.js";import"./index.77afc4e3.js";import"./Logo.vue_vue_type_script_setup_true_lang.dcdf6b79.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.a6dd86d1.js";import"./use-controllable.6172a0fa.js";/*! PatchyVideo/Platinum by VoileLabs */var u={lessThanXSeconds:{one:"mens d’una segonda",other:"mens de {{count}} segondas"},xSeconds:{one:"1 segonda",other:"{{count}} segondas"},halfAMinute:"30 segondas",lessThanXMinutes:{one:"mens d’una minuta",other:"mens de {{count}} minutas"},xMinutes:{one:"1 minuta",other:"{{count}} minutas"},aboutXHours:{one:"environ 1 ora",other:"environ {{count}} oras"},xHours:{one:"1 ora",other:"{{count}} oras"},xDays:{one:"1 jorn",other:"{{count}} jorns"},aboutXWeeks:{one:"environ 1 setmana",other:"environ {{count}} setmanas"},xWeeks:{one:"1 setmana",other:"{{count}} setmanas"},aboutXMonths:{one:"environ 1 mes",other:"environ {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"mai d’un an",other:"mai de {{count}} ans"},almostXYears:{one:"gaireben un an",other:"gaireben {{count}} ans"}},l=function(e,t,n){var a,r=u[e];return typeof r=="string"?a=r:t===1?a=r.one:a=r.other.replace("{{count}}",String(t)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"d’aquí "+a:"fa "+a:a},h={full:"EEEE d 'de' MMMM y",long:"d 'de' MMMM y",medium:"d MMM y",short:"dd/MM/y"},c={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},v={full:"{{date}} 'a' {{time}}",long:"{{date}} 'a' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},g={date:m({formats:h,defaultWidth:"full"}),time:m({formats:c,defaultWidth:"full"}),dateTime:m({formats:v,defaultWidth:"full"})},b={lastWeek:"eeee 'passat a' p",yesterday:"'ièr a' p",today:"'uèi a' p",tomorrow:"'deman a' p",nextWeek:"eeee 'a' p",other:"P"},f=function(e,t,n,a){return b[e]},p={narrow:["ab. J.C.","apr. J.C."],abbreviated:["ab. J.C.","apr. J.C."],wide:["abans Jèsus-Crist","après Jèsus-Crist"]},j={narrow:["T1","T2","T3","T4"],abbreviated:["1èr trim.","2nd trim.","3en trim.","4en trim."],wide:["1èr trimèstre","2nd trimèstre","3en trimèstre","4en trimèstre"]},P={narrow:["GN","FB","MÇ","AB","MA","JN","JL","AG","ST","OC","NV","DC"],abbreviated:["gen.","febr.","març","abr.","mai","junh","jul.","ag.","set.","oct.","nov.","dec."],wide:["genièr","febrièr","març","abril","mai","junh","julhet","agost","setembre","octòbre","novembre","decembre"]},w={narrow:["dg.","dl.","dm.","dc.","dj.","dv.","ds."],short:["dg.","dl.","dm.","dc.","dj.","dv.","ds."],abbreviated:["dg.","dl.","dm.","dc.","dj.","dv.","ds."],wide:["dimenge","diluns","dimars","dimècres","dijòus","divendres","dissabte"]},M={narrow:{am:"am",pm:"pm",midnight:"mièjanuèch",noon:"miègjorn",morning:"matin",afternoon:"aprèp-miègjorn",evening:"vèspre",night:"nuèch"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"mièjanuèch",noon:"miègjorn",morning:"matin",afternoon:"aprèp-miègjorn",evening:"vèspre",night:"nuèch"},wide:{am:"a.m.",pm:"p.m.",midnight:"mièjanuèch",noon:"miègjorn",morning:"matin",afternoon:"aprèp-miègjorn",evening:"vèspre",night:"nuèch"}},y={narrow:{am:"am",pm:"pm",midnight:"mièjanuèch",noon:"miègjorn",morning:"del matin",afternoon:"de l’aprèp-miègjorn",evening:"del ser",night:"de la nuèch"},abbreviated:{am:"AM",pm:"PM",midnight:"mièjanuèch",noon:"miègjorn",morning:"del matin",afternoon:"de l’aprèp-miègjorn",evening:"del ser",night:"de la nuèch"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"mièjanuèch",noon:"miègjorn",morning:"del matin",afternoon:"de l’aprèp-miègjorn",evening:"del ser",night:"de la nuèch"}},C=function(e,t){var n=Number(e),a=t==null?void 0:t.unit,r;switch(n){case 1:r="èr";break;case 2:r="nd";break;default:r="en"}return(a==="year"||a==="week"||a==="hour"||a==="minute"||a==="second")&&(r+="a"),n+r},W={ordinalNumber:C,era:d({values:p,defaultWidth:"wide"}),quarter:d({values:j,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:d({values:P,defaultWidth:"wide"}),day:d({values:w,defaultWidth:"wide"}),dayPeriod:d({values:M,defaultWidth:"wide",formattingValues:y,defaultFormattingWidth:"wide"})},J=/^(\d+)(èr|nd|en)?[a]?/i,k=/\d+/i,D={narrow:/^(ab\.J\.C|apr\.J\.C|apr\.J\.-C)/i,abbreviated:/^(ab\.J\.-C|ab\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(abans Jèsus-Crist|après Jèsus-Crist)/i},N={any:[/^ab/i,/^ap/i]},F={narrow:/^T[1234]/i,abbreviated:/^[1234](èr|nd|en)? trim\.?/i,wide:/^[1234](èr|nd|en)? trimèstre/i},T={any:[/1/i,/2/i,/3/i,/4/i]},x={narrow:/^(GN|FB|MÇ|AB|MA|JN|JL|AG|ST|OC|NV|DC)/i,abbreviated:/^(gen|febr|març|abr|mai|junh|jul|ag|set|oct|nov|dec)\.?/i,wide:/^(genièr|febrièr|març|abril|mai|junh|julhet|agost|setembre|octòbre|novembre|decembre)/i},H={any:[/^g/i,/^f/i,/^ma[r?]|MÇ/i,/^ab/i,/^ma[i?]/i,/^ju[n?]|JN/i,/^ju[l?]|JL/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},V={narrow:/^d[glmcjvs]\.?/i,short:/^d[glmcjvs]\.?/i,abbreviated:/^d[glmcjvs]\.?/i,wide:/^(dimenge|diluns|dimars|dimècres|dijòus|divendres|dissabte)/i},L={narrow:[/^dg/i,/^dl/i,/^dm/i,/^dc/i,/^dj/i,/^dv/i,/^ds/i],short:[/^dg/i,/^dl/i,/^dm/i,/^dc/i,/^dj/i,/^dv/i,/^ds/i],abbreviated:[/^dg/i,/^dl/i,/^dm/i,/^dc/i,/^dj/i,/^dv/i,/^ds/i],any:[/^dg|dime/i,/^dl|dil/i,/^dm|dima/i,/^dc|dimè/i,/^dj|dij/i,/^dv|div/i,/^ds|dis/i]},z={any:/(^(a\.?m|p\.?m))|(ante meridiem|post meridiem)|((del |de la |de l’)(matin|aprèp-miègjorn|vèspre|ser|nuèch))/i},A={any:{am:/(^a)|ante meridiem/i,pm:/(^p)|post meridiem/i,midnight:/^mièj/i,noon:/^mièg/i,morning:/matin/i,afternoon:/aprèp-miègjorn/i,evening:/vèspre|ser/i,night:/nuèch/i}},X={ordinalNumber:s({matchPattern:J,parsePattern:k,valueCallback:function(e){return parseInt(e,10)}}),era:o({matchPatterns:D,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any"}),quarter:o({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:T,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:o({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any"}),day:o({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:L,defaultParseWidth:"any"}),dayPeriod:o({matchPatterns:z,defaultMatchWidth:"any",parsePatterns:A,defaultParseWidth:"any"})},G={code:"oc",formatDistance:l,formatLong:g,formatRelative:f,localize:W,match:X,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{G as default};
//# sourceMappingURL=index.e03422cc.js.map
