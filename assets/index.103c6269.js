import{d as s,e as i,f as u,g as n}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.40d1f18a.js";import"./index.34fa3c03.js";import"./Logo.vue_vue_type_script_setup_true_lang.99b2ba3f.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.cdb76b79.js";import"./use-controllable.617a8113.js";/*! PatchyVideo/Platinum by VoileLabs */var l={lessThanXSeconds:{one:"1 сониядан кам",other:"{{count}} сониядан кам"},xSeconds:{one:"1 сония",other:"{{count}} сония"},halfAMinute:"ярим дақиқа",lessThanXMinutes:{one:"1 дақиқадан кам",other:"{{count}} дақиқадан кам"},xMinutes:{one:"1 дақиқа",other:"{{count}} дақиқа"},aboutXHours:{one:"тахминан 1 соат",other:"тахминан {{count}} соат"},xHours:{one:"1 соат",other:"{{count}} соат"},xDays:{one:"1 кун",other:"{{count}} кун"},aboutXWeeks:{one:"тахминан 1 хафта",other:"тахминан {{count}} хафта"},xWeeks:{one:"1 хафта",other:"{{count}} хафта"},aboutXMonths:{one:"тахминан 1 ой",other:"тахминан {{count}} ой"},xMonths:{one:"1 ой",other:"{{count}} ой"},aboutXYears:{one:"тахминан 1 йил",other:"тахминан {{count}} йил"},xYears:{one:"1 йил",other:"{{count}} йил"},overXYears:{one:"1 йилдан кўп",other:"{{count}} йилдан кўп"},almostXYears:{one:"деярли 1 йил",other:"деярли {{count}} йил"}},m=function(a,o,t){var e,d=l[a];return typeof d=="string"?e=d:o===1?e=d.one:e=d.other.replace("{{count}}",String(o)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?e+"дан кейин":e+" олдин":e},h={full:"EEEE, do MMMM, y",long:"do MMMM, y",medium:"d MMM, y",short:"dd/MM/yyyy"},c={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},f={any:"{{date}}, {{time}}"},v={date:s({formats:h,defaultWidth:"full"}),time:s({formats:c,defaultWidth:"full"}),dateTime:s({formats:f,defaultWidth:"any"})},y={lastWeek:"'ўтган' eeee p 'да'",yesterday:"'кеча' p 'да'",today:"'бугун' p 'да'",tomorrow:"'эртага' p 'да'",nextWeek:"eeee p 'да'",other:"P"},b=function(a,o,t,e){return y[a]},P={narrow:["М.А","М"],abbreviated:["М.А","М"],wide:["Милоддан Аввалги","Милодий"]},p={narrow:["1","2","3","4"],abbreviated:["1-чор.","2-чор.","3-чор.","4-чор."],wide:["1-чорак","2-чорак","3-чорак","4-чорак"]},w={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],wide:["январ","феврал","март","апрел","май","июн","июл","август","сентабр","октабр","ноябр","декабр"]},M={narrow:["Я","Д","С","Ч","П","Ж","Ш"],short:["як","ду","се","чо","па","жу","ша"],abbreviated:["якш","душ","сеш","чор","пай","жум","шан"],wide:["якшанба","душанба","сешанба","чоршанба","пайшанба","жума","шанба"]},g={any:{am:"П.О.",pm:"П.К.",midnight:"ярим тун",noon:"пешин",morning:"эрталаб",afternoon:"пешиндан кейин",evening:"кечаси",night:"тун"}},W={any:{am:"П.О.",pm:"П.К.",midnight:"ярим тун",noon:"пешин",morning:"эрталаб",afternoon:"пешиндан кейин",evening:"кечаси",night:"тун"}},k=function(a,o){return String(a)},D={ordinalNumber:k,era:i({values:P,defaultWidth:"wide"}),quarter:i({values:p,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:i({values:w,defaultWidth:"wide"}),day:i({values:M,defaultWidth:"wide"}),dayPeriod:i({values:g,defaultWidth:"any",formattingValues:W,defaultFormattingWidth:"any"})},x=/^(\d+)(чи)?/i,z=/\d+/i,F={narrow:/^(м\.а|м\.)/i,abbreviated:/^(м\.а|м\.)/i,wide:/^(милоддан аввал|милоддан кейин)/i},C={any:[/^м/i,/^а/i]},V={narrow:/^[1234]/i,abbreviated:/^[1234]-чор./i,wide:/^[1234]-чорак/i},X={any:[/1/i,/2/i,/3/i,/4/i]},E={narrow:/^[яфмамииасонд]/i,abbreviated:/^(янв|фев|мар|апр|май|июн|июл|авг|сен|окт|ноя|дек)/i,wide:/^(январ|феврал|март|апрел|май|июн|июл|август|сентабр|октабр|ноябр|декабр)/i},H={narrow:[/^я/i,/^ф/i,/^м/i,/^а/i,/^м/i,/^и/i,/^и/i,/^а/i,/^с/i,/^о/i,/^н/i,/^д/i],any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^май/i,/^июн/i,/^июл/i,/^ав/i,/^с/i,/^о/i,/^н/i,/^д/i]},L={narrow:/^[ядсчпжш]/i,short:/^(як|ду|се|чо|па|жу|ша)/i,abbreviated:/^(якш|душ|сеш|чор|пай|жум|шан)/i,wide:/^(якшанба|душанба|сешанба|чоршанба|пайшанба|жума|шанба)/i},N={narrow:[/^я/i,/^д/i,/^с/i,/^ч/i,/^п/i,/^ж/i,/^ш/i],any:[/^як/i,/^ду/i,/^се/i,/^чор/i,/^пай/i,/^жу/i,/^шан/i]},S={any:/^(п\.о\.|п\.к\.|ярим тун|пешиндан кейин|(эрталаб|пешиндан кейин|кечаси|тун))/i},R={any:{am:/^п\.о\./i,pm:/^п\.к\./i,midnight:/^ярим тун/i,noon:/^пешиндан кейин/i,morning:/эрталаб/i,afternoon:/пешиндан кейин/i,evening:/кечаси/i,night:/тун/i}},T={ordinalNumber:u({matchPattern:x,parsePattern:z,valueCallback:function(a){return parseInt(a,10)}}),era:n({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any"}),quarter:n({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:n({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any"}),day:n({matchPatterns:L,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any"}),dayPeriod:n({matchPatterns:S,defaultMatchWidth:"any",parsePatterns:R,defaultParseWidth:"any"})},A={code:"uz-Cyrl",formatDistance:m,formatLong:v,formatRelative:b,localize:D,match:T,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{A as default};
//# sourceMappingURL=index.103c6269.js.map
