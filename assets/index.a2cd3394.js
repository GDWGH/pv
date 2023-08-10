import{d as s,e as i,f as d,g as o}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.2d8d3568.js";import"./index.57502b4c.js";import"./Logo.vue_vue_type_script_setup_true_lang.9d0a187a.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.d67dc95b.js";import"./use-controllable.1e086112.js";/*! PatchyVideo/Platinum by VoileLabs */var u={lessThanXSeconds:{one:"më pak se një sekondë",other:"më pak se {{count}} sekonda"},xSeconds:{one:"1 sekondë",other:"{{count}} sekonda"},halfAMinute:"gjysëm minuti",lessThanXMinutes:{one:"më pak se një minute",other:"më pak se {{count}} minuta"},xMinutes:{one:"1 minutë",other:"{{count}} minuta"},aboutXHours:{one:"rreth 1 orë",other:"rreth {{count}} orë"},xHours:{one:"1 orë",other:"{{count}} orë"},xDays:{one:"1 ditë",other:"{{count}} ditë"},aboutXWeeks:{one:"rreth 1 javë",other:"rreth {{count}} javë"},xWeeks:{one:"1 javë",other:"{{count}} javë"},aboutXMonths:{one:"rreth 1 muaj",other:"rreth {{count}} muaj"},xMonths:{one:"1 muaj",other:"{{count}} muaj"},aboutXYears:{one:"rreth 1 vit",other:"rreth {{count}} vite"},xYears:{one:"1 vit",other:"{{count}} vite"},overXYears:{one:"mbi 1 vit",other:"mbi {{count}} vite"},almostXYears:{one:"pothuajse 1 vit",other:"pothuajse {{count}} vite"}},h=function(a,t,e){var r,m=u[a];return typeof m=="string"?r=m:t===1?r=m.one:r=m.other.replace("{{count}}",String(t)),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"në "+r:r+" më parë":r},l={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},v={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},f={full:"{{date}} 'në' {{time}}",long:"{{date}} 'në' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},b={date:s({formats:l,defaultWidth:"full"}),time:s({formats:v,defaultWidth:"full"}),dateTime:s({formats:f,defaultWidth:"full"})},c={lastWeek:"'të' eeee 'e shkuar në' p",yesterday:"'dje në' p",today:"'sot në' p",tomorrow:"'nesër në' p",nextWeek:"eeee 'at' p",other:"P"},p=function(a,t,e,r){return c[a]},g={narrow:["P","M"],abbreviated:["PK","MK"],wide:["Para Krishtit","Mbas Krishtit"]},j={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["4-mujori I","4-mujori II","4-mujori III","4-mujori IV"]},P={narrow:["J","S","M","P","M","Q","K","G","S","T","N","D"],abbreviated:["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gus","Sht","Tet","Nën","Dhj"],wide:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"]},M={narrow:["D","H","M","M","E","P","S"],short:["Di","Hë","Ma","Më","En","Pr","Sh"],abbreviated:["Die","Hën","Mar","Mër","Enj","Pre","Sht"],wide:["Dielë","Hënë","Martë","Mërkurë","Enjte","Premte","Shtunë"]},k={narrow:{am:"p",pm:"m",midnight:"m",noon:"d",morning:"mëngjes",afternoon:"dite",evening:"mbrëmje",night:"natë"},abbreviated:{am:"PD",pm:"MD",midnight:"mesnëtë",noon:"drek",morning:"mëngjes",afternoon:"mbasdite",evening:"mbrëmje",night:"natë"},wide:{am:"p.d.",pm:"m.d.",midnight:"mesnëtë",noon:"drek",morning:"mëngjes",afternoon:"mbasdite",evening:"mbrëmje",night:"natë"}},y={narrow:{am:"p",pm:"m",midnight:"m",noon:"d",morning:"në mëngjes",afternoon:"në mbasdite",evening:"në mbrëmje",night:"në mesnatë"},abbreviated:{am:"PD",pm:"MD",midnight:"mesnatë",noon:"drek",morning:"në mëngjes",afternoon:"në mbasdite",evening:"në mbrëmje",night:"në mesnatë"},wide:{am:"p.d.",pm:"m.d.",midnight:"mesnatë",noon:"drek",morning:"në mëngjes",afternoon:"në mbasdite",evening:"në mbrëmje",night:"në mesnatë"}},w=function(a,t){var e=Number(a);return(t==null?void 0:t.unit)==="hour"?String(e):e===1?e+"-rë":e===4?e+"t":e+"-të"},W={ordinalNumber:w,era:i({values:g,defaultWidth:"wide"}),quarter:i({values:j,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:i({values:P,defaultWidth:"wide"}),day:i({values:M,defaultWidth:"wide"}),dayPeriod:i({values:k,defaultWidth:"wide",formattingValues:y,defaultFormattingWidth:"wide"})},D=/^(\d+)(-rë|-të|t|)?/i,S=/\d+/i,q={narrow:/^(p|m)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(para krishtit|mbas krishtit)/i},x={any:[/^b/i,/^(p|m)/i]},E={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]-mujori (i{1,3}|iv)/i},N={any:[/1/i,/2/i,/3/i,/4/i]},F={narrow:/^[jsmpqkftnd]/i,abbreviated:/^(jan|shk|mar|pri|maj|qer|kor|gus|sht|tet|nën|dhj)/i,wide:/^(janar|shkurt|mars|prill|maj|qershor|korrik|gusht|shtator|tetor|nëntor|dhjetor)/i},Q={narrow:[/^j/i,/^s/i,/^m/i,/^p/i,/^m/i,/^q/i,/^k/i,/^g/i,/^s/i,/^t/i,/^n/i,/^d/i],any:[/^ja/i,/^shk/i,/^mar/i,/^pri/i,/^maj/i,/^qer/i,/^kor/i,/^gu/i,/^sht/i,/^tet/i,/^n/i,/^d/i]},V={narrow:/^[dhmeps]/i,short:/^(di|hë|ma|më|en|pr|sh)/i,abbreviated:/^(die|hën|mar|mër|enj|pre|sht)/i,wide:/^(dielë|hënë|martë|mërkurë|enjte|premte|shtunë)/i},z={narrow:[/^d/i,/^h/i,/^m/i,/^m/i,/^e/i,/^p/i,/^s/i],any:[/^d/i,/^h/i,/^ma/i,/^më/i,/^e/i,/^p/i,/^s/i]},I={narrow:/^(p|m|me|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i,any:/^([pm]\.?\s?d\.?|drek|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i},X={any:{am:/^p/i,pm:/^m/i,midnight:/^me/i,noon:/^dr/i,morning:/mëngjes/i,afternoon:/mbasdite/i,evening:/mbrëmje/i,night:/natë/i}},C={ordinalNumber:d({matchPattern:D,parsePattern:S,valueCallback:function(a){return parseInt(a,10)}}),era:o({matchPatterns:q,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),quarter:o({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:o({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:Q,defaultParseWidth:"any"}),day:o({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:z,defaultParseWidth:"any"}),dayPeriod:o({matchPatterns:I,defaultMatchWidth:"any",parsePatterns:X,defaultParseWidth:"any"})},Y={code:"sq",formatDistance:h,formatLong:b,formatRelative:p,localize:W,match:C,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{Y as default};
//# sourceMappingURL=index.a2cd3394.js.map
