import{d,e as n,f as s,g as o}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.78462481.js";import"./index.c4014581.js";import"./Logo.vue_vue_type_script_setup_true_lang.64f61647.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.a941d760.js";import"./use-controllable.8e4f919b.js";/*! PatchyVideo/Platinum by VoileLabs */var l={lessThanXSeconds:{one:"segundo bat baino gutxiago",other:"{{count}} segundo baino gutxiago"},xSeconds:{one:"1 segundo",other:"{{count}} segundo"},halfAMinute:"minutu erdi",lessThanXMinutes:{one:"minutu bat baino gutxiago",other:"{{count}} minutu baino gutxiago"},xMinutes:{one:"1 minutu",other:"{{count}} minutu"},aboutXHours:{one:"1 ordu gutxi gorabehera",other:"{{count}} ordu gutxi gorabehera"},xHours:{one:"1 ordu",other:"{{count}} ordu"},xDays:{one:"1 egun",other:"{{count}} egun"},aboutXWeeks:{one:"aste 1 inguru",other:"{{count}} aste inguru"},xWeeks:{one:"1 aste",other:"{{count}} astean"},aboutXMonths:{one:"1 hilabete gutxi gorabehera",other:"{{count}} hilabete gutxi gorabehera"},xMonths:{one:"1 hilabete",other:"{{count}} hilabete"},aboutXYears:{one:"1 urte gutxi gorabehera",other:"{{count}} urte gutxi gorabehera"},xYears:{one:"1 urte",other:"{{count}} urte"},overXYears:{one:"1 urte baino gehiago",other:"{{count}} urte baino gehiago"},almostXYears:{one:"ia 1 urte",other:"ia {{count}} urte"}},g=function(a,i,e){var r,u=l[a];return typeof u=="string"?r=u:i===1?r=u.one:r=u.other.replace("{{count}}",String(i)),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"en "+r:"duela "+r:r},m={full:"EEEE, y'ko' MMMM'ren' d'a' y'ren'",long:"y'ko' MMMM'ren' d'a'",medium:"y MMM d",short:"yy/MM/dd"},h={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},b={full:"{{date}} 'tan' {{time}}",long:"{{date}} 'tan' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},v={date:d({formats:m,defaultWidth:"full"}),time:d({formats:h,defaultWidth:"full"}),dateTime:d({formats:b,defaultWidth:"full"})},f={lastWeek:"'joan den' eeee, LT",yesterday:"'atzo,' p",today:"'gaur,' p",tomorrow:"'bihar,' p",nextWeek:"eeee, p",other:"P"},c={lastWeek:"'joan den' eeee, p",yesterday:"'atzo,' p",today:"'gaur,' p",tomorrow:"'bihar,' p",nextWeek:"eeee, p",other:"P"},p=function(a,i){return i.getUTCHours()!==1?c[a]:f[a]},k={narrow:["k.a.","k.o."],abbreviated:["k.a.","k.o."],wide:["kristo aurretik","kristo ondoren"]},w={narrow:["1","2","3","4"],abbreviated:["1H","2H","3H","4H"],wide:["1. hiruhilekoa","2. hiruhilekoa","3. hiruhilekoa","4. hiruhilekoa"]},z={narrow:["u","o","m","a","m","e","u","a","i","u","a","a"],abbreviated:["urt","ots","mar","api","mai","eka","uzt","abu","ira","urr","aza","abe"],wide:["urtarrila","otsaila","martxoa","apirila","maiatza","ekaina","uztaila","abuztua","iraila","urria","azaroa","abendua"]},P={narrow:["i","a","a","a","o","o","l"],short:["ig","al","as","az","og","or","lr"],abbreviated:["iga","ast","ast","ast","ost","ost","lar"],wide:["igandea","astelehena","asteartea","asteazkena","osteguna","ostirala","larunbata"]},y={narrow:{am:"a",pm:"p",midnight:"ge",noon:"eg",morning:"goiza",afternoon:"arratsaldea",evening:"arratsaldea",night:"gaua"},abbreviated:{am:"AM",pm:"PM",midnight:"gauerdia",noon:"eguerdia",morning:"goiza",afternoon:"arratsaldea",evening:"arratsaldea",night:"gaua"},wide:{am:"a.m.",pm:"p.m.",midnight:"gauerdia",noon:"eguerdia",morning:"goiza",afternoon:"arratsaldea",evening:"arratsaldea",night:"gaua"}},M={narrow:{am:"a",pm:"p",midnight:"ge",noon:"eg",morning:"goizean",afternoon:"arratsaldean",evening:"arratsaldean",night:"gauean"},abbreviated:{am:"AM",pm:"PM",midnight:"gauerdia",noon:"eguerdia",morning:"goizean",afternoon:"arratsaldean",evening:"arratsaldean",night:"gauean"},wide:{am:"a.m.",pm:"p.m.",midnight:"gauerdia",noon:"eguerdia",morning:"goizean",afternoon:"arratsaldean",evening:"arratsaldean",night:"gauean"}},W=function(a,i){var e=Number(a);return e+"."},x={ordinalNumber:W,era:n({values:k,defaultWidth:"wide"}),quarter:n({values:w,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:n({values:z,defaultWidth:"wide"}),day:n({values:P,defaultWidth:"wide"}),dayPeriod:n({values:y,defaultWidth:"wide",formattingValues:M,defaultFormattingWidth:"wide"})},H=/^(\d+)(.)?/i,D=/\d+/i,F={narrow:/^(k.a.|k.o.)/i,abbreviated:/^(k.a.|k.o.)/i,wide:/^(kristo aurretik|kristo ondoren)/i},C={narrow:[/^k.a./i,/^k.o./i],abbreviated:[/^(k.a.)/i,/^(k.o.)/i],wide:[/^(kristo aurretik)/i,/^(kristo ondoren)/i]},L={narrow:/^[1234]/i,abbreviated:/^[1234]H/i,wide:/^[1234](.)? hiruhilekoa/i},V={any:[/1/i,/2/i,/3/i,/4/i]},X={narrow:/^[uomaei]/i,abbreviated:/^(urt|ots|mar|api|mai|eka|uzt|abu|ira|urr|aza|abe)/i,wide:/^(urtarrila|otsaila|martxoa|apirila|maiatza|ekaina|uztaila|abuztua|iraila|urria|azaroa|abendua)/i},N={narrow:[/^u/i,/^o/i,/^m/i,/^a/i,/^m/i,/^e/i,/^u/i,/^a/i,/^i/i,/^u/i,/^a/i,/^a/i],any:[/^urt/i,/^ots/i,/^mar/i,/^api/i,/^mai/i,/^eka/i,/^uzt/i,/^abu/i,/^ira/i,/^urr/i,/^aza/i,/^abe/i]},E={narrow:/^[iaol]/i,short:/^(ig|al|as|az|og|or|lr)/i,abbreviated:/^(iga|ast|ast|ast|ost|ost|lar)/i,wide:/^(igandea|astelehena|asteartea|asteazkena|osteguna|ostirala|larunbata)/i},T={narrow:[/^i/i,/^a/i,/^a/i,/^a/i,/^o/i,/^o/i,/^l/i],short:[/^ig/i,/^al/i,/^as/i,/^az/i,/^og/i,/^or/i,/^lr/i],abbreviated:[/^iga/i,/^ast/i,/^ast/i,/^ast/i,/^ost/i,/^ost/i,/^lar/i],wide:[/^igandea/i,/^astelehena/i,/^asteartea/i,/^asteazkena/i,/^osteguna/i,/^ostirala/i,/^larunbata/i]},R={narrow:/^(a|p|ge|eg|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i,any:/^([ap]\.?\s?m\.?|gauerdia|eguerdia|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i},S={narrow:{am:/^a/i,pm:/^p/i,midnight:/^ge/i,noon:/^eg/i,morning:/goiz/i,afternoon:/arratsaldea/i,evening:/arratsaldea/i,night:/gau/i},any:{am:/^a/i,pm:/^p/i,midnight:/^gauerdia/i,noon:/^eguerdia/i,morning:/goiz/i,afternoon:/arratsaldea/i,evening:/arratsaldea/i,night:/gau/i}},Y={ordinalNumber:s({matchPattern:H,parsePattern:D,valueCallback:function(a){return parseInt(a,10)}}),era:o({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"wide"}),quarter:o({matchPatterns:L,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:o({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any"}),day:o({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:T,defaultParseWidth:"wide"}),dayPeriod:o({matchPatterns:R,defaultMatchWidth:"any",parsePatterns:S,defaultParseWidth:"any"})},I={code:"eu",formatDistance:g,formatLong:v,formatRelative:p,localize:x,match:Y,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{I as default};
//# sourceMappingURL=index.1855303c.js.map
