import{d as h,e as d,f as m,g as o}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.0b40a51a.js";import"./index.e2bc7831.js";import"./Logo.vue_vue_type_script_setup_true_lang.eff70c21.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.5c0e6da8.js";import"./use-controllable.b89dcc4e.js";/*! PatchyVideo/Platinum by VoileLabs */var s={lessThanXSeconds:{one:"nas lugha na diog",other:"nas lugha na {{count}} diogan"},xSeconds:{one:"1 diog",two:"2 dhiog",twenty:"20 diog",other:"{{count}} diogan"},halfAMinute:"leth mhionaid",lessThanXMinutes:{one:"nas lugha na mionaid",other:"nas lugha na {{count}} mionaidean"},xMinutes:{one:"1 mionaid",two:"2 mhionaid",twenty:"20 mionaid",other:"{{count}} mionaidean"},aboutXHours:{one:"mu uair de thìde",other:"mu {{count}} uairean de thìde"},xHours:{one:"1 uair de thìde",two:"2 uair de thìde",twenty:"20 uair de thìde",other:"{{count}} uairean de thìde"},xDays:{one:"1 là",other:"{{count}} là"},aboutXWeeks:{one:"mu 1 seachdain",other:"mu {{count}} seachdainean"},xWeeks:{one:"1 seachdain",other:"{{count}} seachdainean"},aboutXMonths:{one:"mu mhìos",other:"mu {{count}} mìosan"},xMonths:{one:"1 mìos",other:"{{count}} mìosan"},aboutXYears:{one:"mu bhliadhna",other:"mu {{count}} bliadhnaichean"},xYears:{one:"1 bhliadhna",other:"{{count}} bliadhna"},overXYears:{one:"còrr is bliadhna",other:"còrr is {{count}} bliadhnaichean"},almostXYears:{one:"cha mhòr bliadhna",other:"cha mhòr {{count}} bliadhnaichean"}},l=function(a,e,i){var n,t=s[a];return typeof t=="string"?n=t:e===1?n=t.one:e===2&&!!t.two?n=t.two:e===20&&!!t.twenty?n=t.twenty:n=t.other.replace("{{count}}",String(e)),i!=null&&i.addSuffix?i.comparison&&i.comparison>0?"ann an "+n:"o chionn "+n:n},u={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},c={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},f={full:"{{date}} 'aig' {{time}}",long:"{{date}} 'aig' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},g={date:h({formats:u,defaultWidth:"full"}),time:h({formats:c,defaultWidth:"full"}),dateTime:h({formats:f,defaultWidth:"full"})},v={lastWeek:"'mu dheireadh' eeee 'aig' p",yesterday:"'an-dè aig' p",today:"'an-diugh aig' p",tomorrow:"'a-màireach aig' p",nextWeek:"eeee 'aig' p",other:"P"},b=function(a,e,i,n){return v[a]},w={narrow:["R","A"],abbreviated:["RC","AD"],wide:["ro Chrìosta","anno domini"]},y={narrow:["1","2","3","4"],abbreviated:["C1","C2","C3","C4"],wide:["a' chiad chairteal","an dàrna cairteal","an treas cairteal","an ceathramh cairteal"]},P={narrow:["F","G","M","G","C","Ò","I","L","S","D","S","D"],abbreviated:["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh"],wide:["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"]},p={narrow:["D","L","M","C","A","H","S"],short:["Dò","Lu","Mà","Ci","Ar","Ha","Sa"],abbreviated:["Did","Dil","Dim","Dic","Dia","Dih","Dis"],wide:["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"]},D={narrow:{am:"m",pm:"f",midnight:"m.o.",noon:"m.l.",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"},abbreviated:{am:"M.",pm:"F.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"},wide:{am:"m.",pm:"f.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"}},M={narrow:{am:"m",pm:"f",midnight:"m.o.",noon:"m.l.",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"},abbreviated:{am:"M.",pm:"F.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"},wide:{am:"m.",pm:"f.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"}},W=function(a){var e=Number(a),i=e%100;if(i>20||i<10)switch(i%10){case 1:return e+"d";case 2:return e+"na"}return i===12?e+"na":e+"mh"},C={ordinalNumber:W,era:d({values:w,defaultWidth:"wide"}),quarter:d({values:y,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:d({values:P,defaultWidth:"wide"}),day:d({values:p,defaultWidth:"wide"}),dayPeriod:d({values:D,defaultWidth:"wide",formattingValues:M,defaultFormattingWidth:"wide"})},A=/^(\d+)(d|na|tr|mh)?/i,S=/\d+/i,F={narrow:/^(r|a)/i,abbreviated:/^(r\.?\s?c\.?|r\.?\s?a\.?\s?c\.?|a\.?\s?d\.?|a\.?\s?c\.?)/i,wide:/^(ro Chrìosta|ron aois choitchinn|anno domini|aois choitcheann)/i},k={any:[/^b/i,/^(a|c)/i]},L={narrow:/^[1234]/i,abbreviated:/^c[1234]/i,wide:/^[1234](cd|na|tr|mh)? cairteal/i},x={any:[/1/i,/2/i,/3/i,/4/i]},z={narrow:/^[fgmcòilsd]/i,abbreviated:/^(faoi|gear|màrt|gibl|cèit|ògmh|iuch|lùn|sult|dàmh|samh|dùbh)/i,wide:/^(am faoilleach|an gearran|am màrt|an giblean|an cèitean|an t-Ògmhios|an t-Iuchar|an lùnastal|an t-Sultain|an dàmhair|an t-Samhain|an dùbhlachd)/i},V={narrow:[/^f/i,/^g/i,/^m/i,/^g/i,/^c/i,/^ò/i,/^i/i,/^l/i,/^s/i,/^d/i,/^s/i,/^d/i],any:[/^fa/i,/^ge/i,/^mà/i,/^gi/i,/^c/i,/^ò/i,/^i/i,/^l/i,/^su/i,/^d/i,/^sa/i,/^d/i]},X={narrow:/^[dlmcahs]/i,short:/^(dò|lu|mà|ci|ar|ha|sa)/i,abbreviated:/^(did|dil|dim|dic|dia|dih|dis)/i,wide:/^(didòmhnaich|diluain|dimàirt|diciadain|diardaoin|dihaoine|disathairne)/i},N={narrow:[/^d/i,/^l/i,/^m/i,/^c/i,/^a/i,/^h/i,/^s/i],any:[/^d/i,/^l/i,/^m/i,/^c/i,/^a/i,/^h/i,/^s/i]},E={narrow:/^(a|p|mi|n|(san|aig) (madainn|feasgar|feasgar|oidhche))/i,any:/^([ap]\.?\s?m\.?|meadhan oidhche|meadhan là|(san|aig) (madainn|feasgar|feasgar|oidhche))/i},G={any:{am:/^m/i,pm:/^f/i,midnight:/^meadhan oidhche/i,noon:/^meadhan là/i,morning:/sa mhadainn/i,afternoon:/feasgar/i,evening:/feasgar/i,night:/air an oidhche/i}},R={ordinalNumber:m({matchPattern:A,parsePattern:S,valueCallback:function(a){return parseInt(a,10)}}),era:o({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:k,defaultParseWidth:"any"}),quarter:o({matchPatterns:L,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:o({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any"}),day:o({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any"}),dayPeriod:o({matchPatterns:E,defaultMatchWidth:"any",parsePatterns:G,defaultParseWidth:"any"})},O={code:"gd",formatDistance:l,formatLong:g,formatRelative:b,localize:C,match:R,options:{weekStartsOn:0,firstWeekContainsDate:1}};export{O as default};
//# sourceMappingURL=index.b38fbf91.js.map
