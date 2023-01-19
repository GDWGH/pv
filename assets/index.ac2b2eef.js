import{d,e as o,f as s,g as m}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.78d6fa5b.js";import"./index.64328a4f.js";import"./Logo.vue_vue_type_script_setup_true_lang.68e69c8d.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.14fbbebf.js";import"./use-controllable.0aa15895.js";/*! PatchyVideo/Platinum by VoileLabs */var l={lessThanXSeconds:{one:"mindre än en sekund",other:"mindre än {{count}} sekunder"},xSeconds:{one:"en sekund",other:"{{count}} sekunder"},halfAMinute:"en halv minut",lessThanXMinutes:{one:"mindre än en minut",other:"mindre än {{count}} minuter"},xMinutes:{one:"en minut",other:"{{count}} minuter"},aboutXHours:{one:"ungefär en timme",other:"ungefär {{count}} timmar"},xHours:{one:"en timme",other:"{{count}} timmar"},xDays:{one:"en dag",other:"{{count}} dagar"},aboutXWeeks:{one:"ungefär en vecka",other:"ungefär {{count}} vecka"},xWeeks:{one:"en vecka",other:"{{count}} vecka"},aboutXMonths:{one:"ungefär en månad",other:"ungefär {{count}} månader"},xMonths:{one:"en månad",other:"{{count}} månader"},aboutXYears:{one:"ungefär ett år",other:"ungefär {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"över ett år",other:"över {{count}} år"},almostXYears:{one:"nästan ett år",other:"nästan {{count}} år"}},u=["noll","en","två","tre","fyra","fem","sex","sju","åtta","nio","tio","elva","tolv"],f=function(t,r,e){var a,i=l[t];return typeof i=="string"?a=i:r===1?a=i.one:e&&e.onlyNumeric?a=i.other.replace("{{count}}",String(r)):a=i.other.replace("{{count}}",r<13?u[r]:String(r)),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"om "+a:a+" sedan":a},v={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"y-MM-dd"},g={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},h={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},c={date:d({formats:v,defaultWidth:"full"}),time:d({formats:g,defaultWidth:"full"}),dateTime:d({formats:h,defaultWidth:"full"})},p={lastWeek:"'i' EEEE's kl.' p",yesterday:"'igår kl.' p",today:"'idag kl.' p",tomorrow:"'imorgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},b=function(t,r,e,a){return p[t]},k={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["före Kristus","efter Kristus"]},P={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1:a kvartalet","2:a kvartalet","3:e kvartalet","4:e kvartalet"]},w={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","maj","juni","juli","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},y={narrow:["S","M","T","O","T","F","L"],short:["sö","må","ti","on","to","fr","lö"],abbreviated:["sön","mån","tis","ons","tors","fre","lör"],wide:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"]},M={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"morg.",afternoon:"efterm.",evening:"kväll",night:"natt"},abbreviated:{am:"f.m.",pm:"e.m.",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"efterm.",evening:"kväll",night:"natt"},wide:{am:"förmiddag",pm:"eftermiddag",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"eftermiddag",evening:"kväll",night:"natt"}},j={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},abbreviated:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},wide:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på eftermiddagen",evening:"på kvällen",night:"på natten"}},W=function(t,r){var e=Number(t),a=e%100;if(a>20||a<10)switch(a%10){case 1:case 2:return e+":a"}return e+":e"},E={ordinalNumber:W,era:o({values:k,defaultWidth:"wide"}),quarter:o({values:P,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:o({values:w,defaultWidth:"wide"}),day:o({values:y,defaultWidth:"wide"}),dayPeriod:o({values:M,defaultWidth:"wide",formattingValues:j,defaultFormattingWidth:"wide"})},D=/^(\d+)(:a|:e)?/i,K=/\d+/i,x={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},F={any:[/^f/i,/^[ev]/i]},H={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},N={any:[/1/i,/2/i,/3/i,/4/i]},z={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},S={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},V={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tors|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},X={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},C={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},L={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},Q={ordinalNumber:s({matchPattern:D,parsePattern:K,valueCallback:function(t){return parseInt(t,10)}}),era:m({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any"}),quarter:m({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:m({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any"}),day:m({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any"}),dayPeriod:m({matchPatterns:C,defaultMatchWidth:"any",parsePatterns:L,defaultParseWidth:"any"})},_={code:"sv",formatDistance:f,formatLong:c,formatRelative:b,localize:E,match:Q,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{_ as default};
//# sourceMappingURL=index.ac2b2eef.js.map
