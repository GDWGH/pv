import{d,e as r,f as s,g as u}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.4b37486e.js";import"./index.5c0a7612.js";import"./Logo.vue_vue_type_script_setup_true_lang.9f862e66.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.5612780d.js";import"./use-controllable.9b5bc4a3.js";/*! PatchyVideo/Platinum by VoileLabs */var m={lessThanXSeconds:{one:{standalone:"manje od 1 sekunde",withPrepositionAgo:"manje od 1 sekunde",withPrepositionIn:"manje od 1 sekundu"},dual:"manje od {{count}} sekunde",other:"manje od {{count}} sekundi"},xSeconds:{one:{standalone:"1 sekunda",withPrepositionAgo:"1 sekunde",withPrepositionIn:"1 sekundu"},dual:"{{count}} sekunde",other:"{{count}} sekundi"},halfAMinute:"pola minute",lessThanXMinutes:{one:{standalone:"manje od 1 minute",withPrepositionAgo:"manje od 1 minute",withPrepositionIn:"manje od 1 minutu"},dual:"manje od {{count}} minute",other:"manje od {{count}} minuta"},xMinutes:{one:{standalone:"1 minuta",withPrepositionAgo:"1 minute",withPrepositionIn:"1 minutu"},dual:"{{count}} minute",other:"{{count}} minuta"},aboutXHours:{one:{standalone:"oko 1 sat",withPrepositionAgo:"oko 1 sat",withPrepositionIn:"oko 1 sat"},dual:"oko {{count}} sata",other:"oko {{count}} sati"},xHours:{one:{standalone:"1 sat",withPrepositionAgo:"1 sat",withPrepositionIn:"1 sat"},dual:"{{count}} sata",other:"{{count}} sati"},xDays:{one:{standalone:"1 dan",withPrepositionAgo:"1 dan",withPrepositionIn:"1 dan"},dual:"{{count}} dana",other:"{{count}} dana"},aboutXWeeks:{one:{standalone:"oko 1 sedmicu",withPrepositionAgo:"oko 1 sedmicu",withPrepositionIn:"oko 1 sedmicu"},dual:"oko {{count}} sedmice",other:"oko {{count}} sedmice"},xWeeks:{one:{standalone:"1 sedmicu",withPrepositionAgo:"1 sedmicu",withPrepositionIn:"1 sedmicu"},dual:"{{count}} sedmice",other:"{{count}} sedmice"},aboutXMonths:{one:{standalone:"oko 1 mjesec",withPrepositionAgo:"oko 1 mjesec",withPrepositionIn:"oko 1 mjesec"},dual:"oko {{count}} mjeseca",other:"oko {{count}} mjeseci"},xMonths:{one:{standalone:"1 mjesec",withPrepositionAgo:"1 mjesec",withPrepositionIn:"1 mjesec"},dual:"{{count}} mjeseca",other:"{{count}} mjeseci"},aboutXYears:{one:{standalone:"oko 1 godinu",withPrepositionAgo:"oko 1 godinu",withPrepositionIn:"oko 1 godinu"},dual:"oko {{count}} godine",other:"oko {{count}} godina"},xYears:{one:{standalone:"1 godina",withPrepositionAgo:"1 godine",withPrepositionIn:"1 godinu"},dual:"{{count}} godine",other:"{{count}} godina"},overXYears:{one:{standalone:"preko 1 godinu",withPrepositionAgo:"preko 1 godinu",withPrepositionIn:"preko 1 godinu"},dual:"preko {{count}} godine",other:"preko {{count}} godina"},almostXYears:{one:{standalone:"gotovo 1 godinu",withPrepositionAgo:"gotovo 1 godinu",withPrepositionIn:"gotovo 1 godinu"},dual:"gotovo {{count}} godine",other:"gotovo {{count}} godina"}},l=function(e,n,a){var o,t=m[e];return typeof t=="string"?o=t:n===1?a!=null&&a.addSuffix?a.comparison&&a.comparison>0?o=t.one.withPrepositionIn:o=t.one.withPrepositionAgo:o=t.one.standalone:n%10>1&&n%10<5&&String(n).substr(-2,1)!=="1"?o=t.dual.replace("{{count}}",String(n)):o=t.other.replace("{{count}}",String(n)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"za "+o:"prije "+o:o},p={full:"EEEE, d. MMMM yyyy.",long:"d. MMMM yyyy.",medium:"d. MMM yy.",short:"dd. MM. yy."},c={full:"HH:mm:ss (zzzz)",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},h={full:"{{date}} 'u' {{time}}",long:"{{date}} 'u' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},v={date:d({formats:p,defaultWidth:"full"}),time:d({formats:c,defaultWidth:"full"}),dateTime:d({formats:h,defaultWidth:"full"})},g={lastWeek:function(e){switch(e.getUTCDay()){case 0:return"'prošle nedjelje u' p";case 3:return"'prošle srijede u' p";case 6:return"'prošle subote u' p";default:return"'prošli' EEEE 'u' p"}},yesterday:"'juče u' p",today:"'danas u' p",tomorrow:"'sutra u' p",nextWeek:function(e){switch(e.getUTCDay()){case 0:return"'sljedeće nedjelje u' p";case 3:return"'sljedeću srijedu u' p";case 6:return"'sljedeću subotu u' p";default:return"'sljedeći' EEEE 'u' p"}},other:"P"},f=function(e,n,a,o){var t=g[e];return typeof t=="function"?t(n):t},j={narrow:["pr.n.e.","AD"],abbreviated:["pr. Hr.","po. Hr."],wide:["Prije Hrista","Poslije Hrista"]},P={narrow:["1.","2.","3.","4."],abbreviated:["1. kv.","2. kv.","3. kv.","4. kv."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},b={narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],wide:["januar","februar","mart","april","maj","juni","juli","avgust","septembar","oktobar","novembar","decembar"]},k={narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],wide:["januar","februar","mart","april","maj","juni","juli","avgust","septembar","oktobar","novembar","decembar"]},w={narrow:["N","P","U","S","Č","P","S"],short:["ned","pon","uto","sre","čet","pet","sub"],abbreviated:["ned","pon","uto","sre","čet","pet","sub"],wide:["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"]},y={narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"poslije podne",evening:"uveče",night:"noću"}},M={narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"poslije podne",evening:"uveče",night:"noću"}},W=function(e,n){var a=Number(e);return String(a)+"."},A={ordinalNumber:W,era:r({values:j,defaultWidth:"wide"}),quarter:r({values:P,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:r({values:b,defaultWidth:"wide",formattingValues:k,defaultFormattingWidth:"wide"}),day:r({values:w,defaultWidth:"wide"}),dayPeriod:r({values:y,defaultWidth:"wide",formattingValues:M,defaultFormattingWidth:"wide"})},H=/^(\d+)\./i,I=/\d+/i,D={narrow:/^(pr\.n\.e\.|AD)/i,abbreviated:/^(pr\.\s?Hr\.|po\.\s?Hr\.)/i,wide:/^(Prije Hrista|prije nove ere|Poslije Hrista|nova era)/i},E={any:[/^pr/i,/^(po|nova)/i]},x={narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?kv\.?/i,wide:/^[1234]\. kvartal/i},S={any:[/1/i,/2/i,/3/i,/4/i]},F={narrow:/^(10|11|12|[123456789])\./i,abbreviated:/^(jan|feb|mar|apr|maj|jun|jul|avg|sep|okt|nov|dec)/i,wide:/^((januar|januara)|(februar|februara)|(mart|marta)|(april|aprila)|(maj|maja)|(juni|juna)|(juli|jula)|(avgust|avgusta)|(septembar|septembra)|(oktobar|oktobra)|(novembar|novembra)|(decembar|decembra))/i},V={narrow:[/^1/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^7/i,/^8/i,/^9/i,/^10/i,/^11/i,/^12/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^avg/i,/^s/i,/^o/i,/^n/i,/^d/i]},z={narrow:/^[npusčc]/i,short:/^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i,abbreviated:/^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i,wide:/^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i},C={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},N={any:/^(am|pm|ponoc|ponoć|(po)?podne|uvece|uveče|noću|poslije podne|ujutru)/i},X={any:{am:/^a/i,pm:/^p/i,midnight:/^pono/i,noon:/^pod/i,morning:/jutro/i,afternoon:/(poslije\s|po)+podne/i,evening:/(uvece|uveče)/i,night:/(nocu|noću)/i}},L={ordinalNumber:s({matchPattern:H,parsePattern:I,valueCallback:function(e){return parseInt(e,10)}}),era:u({matchPatterns:D,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),quarter:u({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:u({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any"}),day:u({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any"}),dayPeriod:u({matchPatterns:N,defaultMatchWidth:"any",parsePatterns:X,defaultParseWidth:"any"})},U={code:"bs",formatDistance:l,formatLong:v,formatRelative:f,localize:A,match:L,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{U as default};
//# sourceMappingURL=index.35390129.js.map
