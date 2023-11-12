import{d as s,e as r,f as d,g as u}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.d631cce5.js";import"./index.470c3dd0.js";import"./Logo.vue_vue_type_script_setup_true_lang.f516dae6.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.300d4397.js";import"./use-controllable.96da74d3.js";/*! PatchyVideo/Platinum by VoileLabs */var l={lessThanXSeconds:{one:{standalone:"manje od 1 sekunde",withPrepositionAgo:"manje od 1 sekunde",withPrepositionIn:"manje od 1 sekundu"},dual:"manje od {{count}} sekunde",other:"manje od {{count}} sekundi"},xSeconds:{one:{standalone:"1 sekunda",withPrepositionAgo:"1 sekunde",withPrepositionIn:"1 sekundu"},dual:"{{count}} sekunde",other:"{{count}} sekundi"},halfAMinute:"pola minute",lessThanXMinutes:{one:{standalone:"manje od 1 minute",withPrepositionAgo:"manje od 1 minute",withPrepositionIn:"manje od 1 minutu"},dual:"manje od {{count}} minute",other:"manje od {{count}} minuta"},xMinutes:{one:{standalone:"1 minuta",withPrepositionAgo:"1 minute",withPrepositionIn:"1 minutu"},dual:"{{count}} minute",other:"{{count}} minuta"},aboutXHours:{one:{standalone:"oko 1 sat",withPrepositionAgo:"oko 1 sat",withPrepositionIn:"oko 1 sat"},dual:"oko {{count}} sata",other:"oko {{count}} sati"},xHours:{one:{standalone:"1 sat",withPrepositionAgo:"1 sat",withPrepositionIn:"1 sat"},dual:"{{count}} sata",other:"{{count}} sati"},xDays:{one:{standalone:"1 dan",withPrepositionAgo:"1 dan",withPrepositionIn:"1 dan"},dual:"{{count}} dana",other:"{{count}} dana"},aboutXWeeks:{one:{standalone:"oko 1 tjedan",withPrepositionAgo:"oko 1 tjedan",withPrepositionIn:"oko 1 tjedan"},dual:"oko {{count}} tjedna",other:"oko {{count}} tjedana"},xWeeks:{one:{standalone:"1 tjedan",withPrepositionAgo:"1 tjedan",withPrepositionIn:"1 tjedan"},dual:"{{count}} tjedna",other:"{{count}} tjedana"},aboutXMonths:{one:{standalone:"oko 1 mjesec",withPrepositionAgo:"oko 1 mjesec",withPrepositionIn:"oko 1 mjesec"},dual:"oko {{count}} mjeseca",other:"oko {{count}} mjeseci"},xMonths:{one:{standalone:"1 mjesec",withPrepositionAgo:"1 mjesec",withPrepositionIn:"1 mjesec"},dual:"{{count}} mjeseca",other:"{{count}} mjeseci"},aboutXYears:{one:{standalone:"oko 1 godinu",withPrepositionAgo:"oko 1 godinu",withPrepositionIn:"oko 1 godinu"},dual:"oko {{count}} godine",other:"oko {{count}} godina"},xYears:{one:{standalone:"1 godina",withPrepositionAgo:"1 godine",withPrepositionIn:"1 godinu"},dual:"{{count}} godine",other:"{{count}} godina"},overXYears:{one:{standalone:"preko 1 godinu",withPrepositionAgo:"preko 1 godinu",withPrepositionIn:"preko 1 godinu"},dual:"preko {{count}} godine",other:"preko {{count}} godina"},almostXYears:{one:{standalone:"gotovo 1 godinu",withPrepositionAgo:"gotovo 1 godinu",withPrepositionIn:"gotovo 1 godinu"},dual:"gotovo {{count}} godine",other:"gotovo {{count}} godina"}},p=function(e,n,a){var t,o=l[e];return typeof o=="string"?t=o:n===1?a!=null&&a.addSuffix?a.comparison&&a.comparison>0?t=o.one.withPrepositionIn:t=o.one.withPrepositionAgo:t=o.one.standalone:n%10>1&&n%10<5&&String(n).substr(-2,1)!=="1"?t=o.dual.replace("{{count}}",String(n)):t=o.other.replace("{{count}}",String(n)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"za "+t:"prije "+t:t},m={full:"EEEE, d. MMMM y.",long:"d. MMMM y.",medium:"d. MMM y.",short:"dd. MM. y."},v={full:"HH:mm:ss (zzzz)",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},h={full:"{{date}} 'u' {{time}}",long:"{{date}} 'u' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},j={date:s({formats:m,defaultWidth:"full"}),time:s({formats:v,defaultWidth:"full"}),dateTime:s({formats:h,defaultWidth:"full"})},c={lastWeek:function(e){switch(e.getUTCDay()){case 0:return"'prošlu nedjelju u' p";case 3:return"'prošlu srijedu u' p";case 6:return"'prošlu subotu u' p";default:return"'prošli' EEEE 'u' p"}},yesterday:"'jučer u' p",today:"'danas u' p",tomorrow:"'sutra u' p",nextWeek:function(e){switch(e.getUTCDay()){case 0:return"'iduću nedjelju u' p";case 3:return"'iduću srijedu u' p";case 6:return"'iduću subotu u' p";default:return"'prošli' EEEE 'u' p"}},other:"P"},g=function(e,n,a,t){var o=c[e];return typeof o=="function"?o(n):o},k={narrow:["pr.n.e.","AD"],abbreviated:["pr. Kr.","po. Kr."],wide:["Prije Krista","Poslije Krista"]},f={narrow:["1.","2.","3.","4."],abbreviated:["1. kv.","2. kv.","3. kv.","4. kv."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},P={narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["sij","velj","ožu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],wide:["siječanj","veljača","ožujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac"]},w={narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["sij","velj","ožu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],wide:["siječnja","veljače","ožujka","travnja","svibnja","lipnja","srpnja","kolovoza","rujna","listopada","studenog","prosinca"]},b={narrow:["N","P","U","S","Č","P","S"],short:["ned","pon","uto","sri","čet","pet","sub"],abbreviated:["ned","pon","uto","sri","čet","pet","sub"],wide:["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"]},M={narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"navečer",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"navečer",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"poslije podne",evening:"navečer",night:"noću"}},y={narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"navečer",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"navečer",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"poslije podne",evening:"navečer",night:"noću"}},W=function(e,n){var a=Number(e);return a+"."},A={ordinalNumber:W,era:r({values:k,defaultWidth:"wide"}),quarter:r({values:f,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:r({values:P,defaultWidth:"wide",formattingValues:w,defaultFormattingWidth:"wide"}),day:r({values:b,defaultWidth:"wide"}),dayPeriod:r({values:y,defaultWidth:"wide",formattingValues:M,defaultFormattingWidth:"wide"})},z=/^(\d+)\./i,I=/\d+/i,D={narrow:/^(pr\.n\.e\.|AD)/i,abbreviated:/^(pr\.\s?Kr\.|po\.\s?Kr\.)/i,wide:/^(Prije Krista|prije nove ere|Poslije Krista|nova era)/i},E={any:[/^pr/i,/^(po|nova)/i]},x={narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?kv\.?/i,wide:/^[1234]\. kvartal/i},F={any:[/1/i,/2/i,/3/i,/4/i]},H={narrow:/^(10|11|12|[123456789])\./i,abbreviated:/^(sij|velj|(ožu|ozu)|tra|svi|lip|srp|kol|ruj|lis|stu|pro)/i,wide:/^((siječanj|siječnja|sijecanj|sijecnja)|(veljača|veljače|veljaca|veljace)|(ožujak|ožujka|ozujak|ozujka)|(travanj|travnja)|(svibanj|svibnja)|(lipanj|lipnja)|(srpanj|srpnja)|(kolovoz|kolovoza)|(rujan|rujna)|(listopad|listopada)|(studeni|studenog)|(prosinac|prosinca))/i},S={narrow:[/1/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i,/8/i,/9/i,/10/i,/11/i,/12/i],abbreviated:[/^sij/i,/^velj/i,/^(ožu|ozu)/i,/^tra/i,/^svi/i,/^lip/i,/^srp/i,/^kol/i,/^ruj/i,/^lis/i,/^stu/i,/^pro/i],wide:[/^sij/i,/^velj/i,/^(ožu|ozu)/i,/^tra/i,/^svi/i,/^lip/i,/^srp/i,/^kol/i,/^ruj/i,/^lis/i,/^stu/i,/^pro/i]},V={narrow:/^[npusčc]/i,short:/^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,abbreviated:/^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,wide:/^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i},C={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},K={any:/^(am|pm|ponoc|ponoć|(po)?podne|navecer|navečer|noću|poslije podne|ujutro)/i},N={any:{am:/^a/i,pm:/^p/i,midnight:/^pono/i,noon:/^pod/i,morning:/jutro/i,afternoon:/(poslije\s|po)+podne/i,evening:/(navece|naveče)/i,night:/(nocu|noću)/i}},X={ordinalNumber:d({matchPattern:z,parsePattern:I,valueCallback:function(e){return parseInt(e,10)}}),era:u({matchPatterns:D,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),quarter:u({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:u({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"wide"}),day:u({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any"}),dayPeriod:u({matchPatterns:K,defaultMatchWidth:"any",parsePatterns:N,defaultParseWidth:"any"})},O={code:"hr",formatDistance:p,formatLong:j,formatRelative:g,localize:A,match:X,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{O as default};
//# sourceMappingURL=index.5becd2c5.js.map
