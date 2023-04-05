import{d as s,e as o,f as m,g as l}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.32b84dc7.js";import"./index.741bf611.js";import"./Logo.vue_vue_type_script_setup_true_lang.37c957dc.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.83d96706.js";import"./use-controllable.eb9e6fcb.js";/*! PatchyVideo/Platinum by VoileLabs */var d={lessThanXSeconds:{one:"inqas minn sekonda",other:"inqas minn {{count}} sekondi"},xSeconds:{one:"sekonda",other:"{{count}} sekondi"},halfAMinute:"nofs minuta",lessThanXMinutes:{one:"inqas minn minuta",other:"inqas minn {{count}} minuti"},xMinutes:{one:"minuta",other:"{{count}} minuti"},aboutXHours:{one:"madwar siegħa",other:"madwar {{count}} siegħat"},xHours:{one:"siegħa",other:"{{count}} siegħat"},xDays:{one:"ġurnata",other:"{{count}} ġranet"},aboutXWeeks:{one:"madwar ġimgħa",other:"madwar {{count}} ġimgħat"},xWeeks:{one:"ġimgħa",other:"{{count}} ġimgħat"},aboutXMonths:{one:"madwar xahar",other:"madwar {{count}} xhur"},xMonths:{one:"xahar",other:"{{count}} xhur"},aboutXYears:{one:"madwar sena",two:"madwar sentejn",other:"madwar {{count}} snin"},xYears:{one:"sena",two:"sentejn",other:"{{count}} snin"},overXYears:{one:"aktar minn sena",two:"aktar minn sentejn",other:"aktar minn {{count}} snin"},almostXYears:{one:"kważi sena",two:"kważi sentejn",other:"kważi {{count}} snin"}},u=function(a,r,e){var i,t=d[a];return typeof t=="string"?i=t:r===1?i=t.one:r===2&&t.two?i=t.two:i=t.other.replace("{{count}}",String(r)),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"f'"+i:i+" ilu":i},f={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},h={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},w={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},g={date:s({formats:f,defaultWidth:"full"}),time:s({formats:h,defaultWidth:"full"}),dateTime:s({formats:w,defaultWidth:"full"})},v={lastWeek:"eeee 'li għadda' 'fil-'p",yesterday:"'Il-bieraħ fil-'p",today:"'Illum fil-'p",tomorrow:"'Għada fil-'p",nextWeek:"eeee 'fil-'p",other:"P"},b=function(a,r,e,i){return v[a]},c={narrow:["Q","W"],abbreviated:["QK","WK"],wide:["qabel Kristu","wara Kristu"]},j={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1. kwart","2. kwart","3. kwart","4. kwart"]},p={narrow:["J","F","M","A","M","Ġ","L","A","S","O","N","D"],abbreviated:["Jan","Fra","Mar","Apr","Mej","Ġun","Lul","Aww","Set","Ott","Nov","Diċ"],wide:["Jannar","Frar","Marzu","April","Mejju","Ġunju","Lulju","Awwissu","Settembru","Ottubru","Novembru","Diċembru"]},y={narrow:["Ħ","T","T","E","Ħ","Ġ","S"],short:["Ħa","Tn","Tl","Er","Ħa","Ġi","Si"],abbreviated:["Ħad","Tne","Tli","Erb","Ħam","Ġim","Sib"],wide:["Il-Ħadd","It-Tnejn","It-Tlieta","L-Erbgħa","Il-Ħamis","Il-Ġimgħa","Is-Sibt"]},P={narrow:{am:"a",pm:"p",midnight:"nofsillejl",noon:"nofsinhar",morning:"għodwa",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"lejl"},abbreviated:{am:"AM",pm:"PM",midnight:"nofsillejl",noon:"nofsinhar",morning:"għodwa",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"lejl"},wide:{am:"a.m.",pm:"p.m.",midnight:"nofsillejl",noon:"nofsinhar",morning:"għodwa",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"lejl"}},M={narrow:{am:"a",pm:"p",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filgħodu",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"billejl"},abbreviated:{am:"AM",pm:"PM",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filgħodu",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"billejl"},wide:{am:"a.m.",pm:"p.m.",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filgħodu",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"billejl"}},k=function(a,r){var e=Number(a);return e+"º"},W={ordinalNumber:k,era:o({values:c,defaultWidth:"wide"}),quarter:o({values:j,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:o({values:p,defaultWidth:"wide"}),day:o({values:y,defaultWidth:"wide"}),dayPeriod:o({values:P,defaultWidth:"wide",formattingValues:M,defaultFormattingWidth:"wide"})},x=/^(\d+)(º)?/i,D=/\d+/i,q={narrow:/^(q|w)/i,abbreviated:/^(q\.?\s?k\.?|b\.?\s?c\.?\s?e\.?|w\.?\s?k\.?)/i,wide:/^(qabel kristu|before common era|wara kristu|common era)/i},F={any:[/^(q|b)/i,/^(w|c)/i]},S={narrow:/^[1234]/i,abbreviated:/^k[1234]/i,wide:/^[1234](\.)? kwart/i},T={any:[/1/i,/2/i,/3/i,/4/i]},z={narrow:/^[jfmaglsond]/i,abbreviated:/^(jan|fra|mar|apr|mej|ġun|lul|aww|set|ott|nov|diċ)/i,wide:/^(jannar|frar|marzu|april|mejju|ġunju|lulju|awwissu|settembru|ottubru|novembru|diċembru)/i},E={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^ġ/i,/^l/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mej/i,/^ġ/i,/^l/i,/^aw/i,/^s/i,/^o/i,/^n/i,/^d/i]},H={narrow:/^[ħteġs]/i,short:/^(ħa|tn|tl|er|ħa|ġi|si)/i,abbreviated:/^(ħad|tne|tli|erb|ħam|ġim|sib)/i,wide:/^(il-ħadd|it-tnejn|it-tlieta|l-erbgħa|il-ħamis|il-ġimgħa|is-sibt)/i},L={narrow:[/^ħ/i,/^t/i,/^t/i,/^e/i,/^ħ/i,/^ġ/i,/^s/i],any:[/^(il-)?ħad/i,/^(it-)?tn/i,/^(it-)?tl/i,/^(l-)?er/i,/^(il-)?ham/i,/^(il-)?ġi/i,/^(is-)?si/i]},N={narrow:/^(a|p|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i,any:/^([ap]\.?\s?m\.?|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i},A={any:{am:/^a/i,pm:/^p/i,midnight:/^f'nofsillejl/i,noon:/^f'nofsinhar/i,morning:/għodwa/i,afternoon:/wara(\s.*)nofsinhar/i,evening:/filgħaxija/i,night:/lejl/i}},I={ordinalNumber:m({matchPattern:x,parsePattern:D,valueCallback:function(a){return parseInt(a,10)}}),era:l({matchPatterns:q,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any"}),quarter:l({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:T,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:l({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),day:l({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:L,defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:N,defaultMatchWidth:"any",parsePatterns:A,defaultParseWidth:"any"})},Q={code:"mt",formatDistance:u,formatLong:g,formatRelative:b,localize:W,match:I,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{Q as default};
//# sourceMappingURL=index.d45986f9.js.map
