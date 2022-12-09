import{d as m,e as o,f as s,g as d}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.57cea977.js";import"./index.15012c7a.js";import"./Logo.vue_vue_type_script_setup_true_lang.abb8fabe.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.d5bf6964.js";import"./use-controllable.30ca8e24.js";/*! PatchyVideo/Platinum by VoileLabs */var u={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},l=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],v=function(e,r,a){var t,i=u[e];return typeof i=="string"?t=i:r===1?t=i.one:a&&a.onlyNumeric?t=i.other.replace("{{count}}",String(r)):t=i.other.replace("{{count}}",r<13?l[r]:String(r)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"om "+t:t+" sidan":t},f={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},h={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},g={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},c={date:m({formats:f,defaultWidth:"full"}),time:m({formats:h,defaultWidth:"full"}),dateTime:m({formats:g,defaultWidth:"full"})},p={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},b=function(e,r,a,t){return p[e]},k={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},y={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},P={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},w={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},M={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},W=function(e,r){var a=Number(e);return a+"."},j={ordinalNumber:W,era:o({values:k,defaultWidth:"wide"}),quarter:o({values:y,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:o({values:P,defaultWidth:"wide"}),day:o({values:w,defaultWidth:"wide"}),dayPeriod:o({values:M,defaultWidth:"wide"})},D=/^(\d+)\.?/i,K=/\d+/i,x={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},E={any:[/^f/i,/^e/i]},F={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},H={any:[/1/i,/2/i,/3/i,/4/i]},N={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},z={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},S={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},X={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},C={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},L={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Q={ordinalNumber:s({matchPattern:D,parsePattern:K,valueCallback:function(e){return parseInt(e,10)}}),era:d({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),quarter:d({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:d({matchPatterns:N,defaultMatchWidth:"wide",parsePatterns:z,defaultParseWidth:"any"}),day:d({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:C,defaultMatchWidth:"any",parsePatterns:L,defaultParseWidth:"any"})},Y={code:"nn",formatDistance:v,formatLong:c,formatRelative:b,localize:j,match:Q,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{Y as default};
//# sourceMappingURL=index.dfc51cb3.js.map