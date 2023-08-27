import{d,e as i,f as s,g as u}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.8a762b51.js";import"./index.c6eae5f0.js";import"./Logo.vue_vue_type_script_setup_true_lang.879bcfda.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.8d2891ba.js";import"./use-controllable.6e5dce2d.js";/*! PatchyVideo/Platinum by VoileLabs */var l={lessThanXSeconds:{one:{standalone:"manje od 1 sekunde",withPrepositionAgo:"manje od 1 sekunde",withPrepositionIn:"manje od 1 sekundu"},dual:"manje od {{count}} sekunde",other:"manje od {{count}} sekundi"},xSeconds:{one:{standalone:"1 sekunda",withPrepositionAgo:"1 sekunde",withPrepositionIn:"1 sekundu"},dual:"{{count}} sekunde",other:"{{count}} sekundi"},halfAMinute:"pola minute",lessThanXMinutes:{one:{standalone:"manje od 1 minute",withPrepositionAgo:"manje od 1 minute",withPrepositionIn:"manje od 1 minutu"},dual:"manje od {{count}} minute",other:"manje od {{count}} minuta"},xMinutes:{one:{standalone:"1 minuta",withPrepositionAgo:"1 minute",withPrepositionIn:"1 minutu"},dual:"{{count}} minute",other:"{{count}} minuta"},aboutXHours:{one:{standalone:"oko 1 sat",withPrepositionAgo:"oko 1 sat",withPrepositionIn:"oko 1 sat"},dual:"oko {{count}} sata",other:"oko {{count}} sati"},xHours:{one:{standalone:"1 sat",withPrepositionAgo:"1 sat",withPrepositionIn:"1 sat"},dual:"{{count}} sata",other:"{{count}} sati"},xDays:{one:{standalone:"1 dan",withPrepositionAgo:"1 dan",withPrepositionIn:"1 dan"},dual:"{{count}} dana",other:"{{count}} dana"},aboutXWeeks:{one:{standalone:"oko 1 nedelju",withPrepositionAgo:"oko 1 nedelju",withPrepositionIn:"oko 1 nedelju"},dual:"oko {{count}} nedelje",other:"oko {{count}} nedelje"},xWeeks:{one:{standalone:"1 nedelju",withPrepositionAgo:"1 nedelju",withPrepositionIn:"1 nedelju"},dual:"{{count}} nedelje",other:"{{count}} nedelje"},aboutXMonths:{one:{standalone:"oko 1 mesec",withPrepositionAgo:"oko 1 mesec",withPrepositionIn:"oko 1 mesec"},dual:"oko {{count}} meseca",other:"oko {{count}} meseci"},xMonths:{one:{standalone:"1 mesec",withPrepositionAgo:"1 mesec",withPrepositionIn:"1 mesec"},dual:"{{count}} meseca",other:"{{count}} meseci"},aboutXYears:{one:{standalone:"oko 1 godinu",withPrepositionAgo:"oko 1 godinu",withPrepositionIn:"oko 1 godinu"},dual:"oko {{count}} godine",other:"oko {{count}} godina"},xYears:{one:{standalone:"1 godina",withPrepositionAgo:"1 godine",withPrepositionIn:"1 godinu"},dual:"{{count}} godine",other:"{{count}} godina"},overXYears:{one:{standalone:"preko 1 godinu",withPrepositionAgo:"preko 1 godinu",withPrepositionIn:"preko 1 godinu"},dual:"preko {{count}} godine",other:"preko {{count}} godina"},almostXYears:{one:{standalone:"gotovo 1 godinu",withPrepositionAgo:"gotovo 1 godinu",withPrepositionIn:"gotovo 1 godinu"},dual:"gotovo {{count}} godine",other:"gotovo {{count}} godina"}},m=function(e,n,a){var o,t=l[e];return typeof t=="string"?o=t:n===1?a!=null&&a.addSuffix?a.comparison&&a.comparison>0?o=t.one.withPrepositionIn:o=t.one.withPrepositionAgo:o=t.one.standalone:n%10>1&&n%10<5&&String(n).substr(-2,1)!=="1"?o=t.dual.replace("{{count}}",String(n)):o=t.other.replace("{{count}}",String(n)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"za "+o:"pre "+o:o},p={full:"EEEE, d. MMMM yyyy.",long:"d. MMMM yyyy.",medium:"d. MMM yy.",short:"dd. MM. yy."},h={full:"HH:mm:ss (zzzz)",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},c={full:"{{date}} 'u' {{time}}",long:"{{date}} 'u' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},v={date:d({formats:p,defaultWidth:"full"}),time:d({formats:h,defaultWidth:"full"}),dateTime:d({formats:c,defaultWidth:"full"})},g={lastWeek:function(e){switch(e.getUTCDay()){case 0:return"'prošle nedelje u' p";case 3:return"'prošle srede u' p";case 6:return"'prošle subote u' p";default:return"'prošli' EEEE 'u' p"}},yesterday:"'juče u' p",today:"'danas u' p",tomorrow:"'sutra u' p",nextWeek:function(e){switch(e.getUTCDay()){case 0:return"'sledeće nedelje u' p";case 3:return"'sledeću sredu u' p";case 6:return"'sledeću subotu u' p";default:return"'sledeći' EEEE 'u' p"}},other:"P"},f=function(e,n,a,o){var t=g[e];return typeof t=="function"?t(n):t},P={narrow:["pr.n.e.","AD"],abbreviated:["pr. Hr.","po. Hr."],wide:["Pre Hrista","Posle Hrista"]},b={narrow:["1.","2.","3.","4."],abbreviated:["1. kv.","2. kv.","3. kv.","4. kv."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},k={narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],wide:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"]},w={narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],wide:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"]},j={narrow:["N","P","U","S","Č","P","S"],short:["ned","pon","uto","sre","čet","pet","sub"],abbreviated:["ned","pon","uto","sre","čet","pet","sub"],wide:["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"]},y={narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"posle podne",evening:"uveče",night:"noću"}},M={narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"posle podne",evening:"uveče",night:"noću"}},W=function(e,n){var a=Number(e);return a+"."},A={ordinalNumber:W,era:i({values:P,defaultWidth:"wide"}),quarter:i({values:b,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:i({values:k,defaultWidth:"wide",formattingValues:w,defaultFormattingWidth:"wide"}),day:i({values:j,defaultWidth:"wide"}),dayPeriod:i({values:M,defaultWidth:"wide",formattingValues:y,defaultFormattingWidth:"wide"})},H=/^(\d+)\./i,I=/\d+/i,D={narrow:/^(pr\.n\.e\.|AD)/i,abbreviated:/^(pr\.\s?Hr\.|po\.\s?Hr\.)/i,wide:/^(Pre Hrista|pre nove ere|Posle Hrista|nova era)/i},E={any:[/^pr/i,/^(po|nova)/i]},x={narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?kv\.?/i,wide:/^[1234]\. kvartal/i},F={any:[/1/i,/2/i,/3/i,/4/i]},S={narrow:/^(10|11|12|[123456789])\./i,abbreviated:/^(jan|feb|mar|apr|maj|jun|jul|avg|sep|okt|nov|dec)/i,wide:/^((januar|januara)|(februar|februara)|(mart|marta)|(april|aprila)|(maj|maja)|(jun|juna)|(jul|jula)|(avgust|avgusta)|(septembar|septembra)|(oktobar|oktobra)|(novembar|novembra)|(decembar|decembra))/i},V={narrow:[/^1/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^7/i,/^8/i,/^9/i,/^10/i,/^11/i,/^12/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^avg/i,/^s/i,/^o/i,/^n/i,/^d/i]},z={narrow:/^[npusčc]/i,short:/^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i,abbreviated:/^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i,wide:/^(nedelja|ponedeljak|utorak|sreda|(četvrtak|cetvrtak)|petak|subota)/i},C={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},N={any:/^(am|pm|ponoc|ponoć|(po)?podne|uvece|uveče|noću|posle podne|ujutru)/i},X={any:{am:/^a/i,pm:/^p/i,midnight:/^pono/i,noon:/^pod/i,morning:/jutro/i,afternoon:/(posle\s|po)+podne/i,evening:/(uvece|uveče)/i,night:/(nocu|noću)/i}},L={ordinalNumber:s({matchPattern:H,parsePattern:I,valueCallback:function(e){return parseInt(e,10)}}),era:u({matchPatterns:D,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),quarter:u({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:u({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any"}),day:u({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any"}),dayPeriod:u({matchPatterns:N,defaultMatchWidth:"any",parsePatterns:X,defaultParseWidth:"any"})},U={code:"sr-Latn",formatDistance:m,formatLong:v,formatRelative:f,localize:A,match:L,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{U as default};
//# sourceMappingURL=index.1742bea9.js.map
