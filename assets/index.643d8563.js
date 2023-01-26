import{d as m,e as d,f as o,g as s}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.0ae9aa8d.js";import"./index.b8da8d20.js";import"./Logo.vue_vue_type_script_setup_true_lang.1199f83e.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.98c5a5fb.js";import"./use-controllable.9068250f.js";/*! PatchyVideo/Platinum by VoileLabs */var l={lessThanXSeconds:{one:"menys d'un segon",eleven:"menys d'onze segons",other:"menys de {{count}} segons"},xSeconds:{one:"1 segon",other:"{{count}} segons"},halfAMinute:"mig minut",lessThanXMinutes:{one:"menys d'un minut",eleven:"menys d'onze minuts",other:"menys de {{count}} minuts"},xMinutes:{one:"1 minut",other:"{{count}} minuts"},aboutXHours:{one:"aproximadament una hora",other:"aproximadament {{count}} hores"},xHours:{one:"1 hora",other:"{{count}} hores"},xDays:{one:"1 dia",other:"{{count}} dies"},aboutXWeeks:{one:"aproximadament una setmana",other:"aproximadament {{count}} setmanes"},xWeeks:{one:"1 setmana",other:"{{count}} setmanes"},aboutXMonths:{one:"aproximadament un mes",other:"aproximadament {{count}} mesos"},xMonths:{one:"1 mes",other:"{{count}} mesos"},aboutXYears:{one:"aproximadament un any",other:"aproximadament {{count}} anys"},xYears:{one:"1 any",other:"{{count}} anys"},overXYears:{one:"més d'un any",eleven:"més d'onze anys",other:"més de {{count}} anys"},almostXYears:{one:"gairebé un any",other:"gairebé {{count}} anys"}},u=function(a,r,e){var t,i=l[a];return typeof i=="string"?t=i:r===1?t=i.one:r===11&&i.eleven?t=i.eleven:t=i.other.replace("{{count}}",String(r)),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"en "+t:"fa "+t:t},v={full:"EEEE, d 'de' MMMM y",long:"d 'de' MMMM y",medium:"d MMM y",short:"dd/MM/y"},h={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},g={full:"{{date}} 'a les' {{time}}",long:"{{date}} 'a les' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},b={date:m({formats:v,defaultWidth:"full"}),time:m({formats:h,defaultWidth:"full"}),dateTime:m({formats:g,defaultWidth:"full"})},c={lastWeek:"'el' eeee 'passat a la' LT",yesterday:"'ahir a la' p",today:"'avui a la' p",tomorrow:"'demà a la' p",nextWeek:"eeee 'a la' p",other:"P"},f={lastWeek:"'el' eeee 'passat a les' p",yesterday:"'ahir a les' p",today:"'avui a les' p",tomorrow:"'demà a les' p",nextWeek:"eeee 'a les' p",other:"P"},p=function(a,r,e,t){return r.getUTCHours()!==1?f[a]:c[a]},y={narrow:["aC","dC"],abbreviated:["a. de C.","d. de C."],wide:["abans de Crist","després de Crist"]},w={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1r trimestre","2n trimestre","3r trimestre","4t trimestre"]},P={narrow:["GN","FB","MÇ","AB","MG","JN","JL","AG","ST","OC","NV","DS"],abbreviated:["gen.","febr.","març","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des."],wide:["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"]},M={narrow:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],short:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],abbreviated:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],wide:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"]},j={narrow:{am:"am",pm:"pm",midnight:"mitjanit",noon:"migdia",morning:"matí",afternoon:"tarda",evening:"vespre",night:"nit"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"mitjanit",noon:"migdia",morning:"matí",afternoon:"tarda",evening:"vespre",night:"nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"mitjanit",noon:"migdia",morning:"matí",afternoon:"tarda",evening:"vespre",night:"nit"}},C={narrow:{am:"am",pm:"pm",midnight:"de la mitjanit",noon:"del migdia",morning:"del matí",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},abbreviated:{am:"AM",pm:"PM",midnight:"de la mitjanit",noon:"del migdia",morning:"del matí",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"de la mitjanit",noon:"del migdia",morning:"del matí",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"}},W=function(a,r){var e=Number(a),t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"r";case 2:return e+"n";case 3:return e+"r";case 4:return e+"t"}return e+"è"},x={ordinalNumber:W,era:d({values:y,defaultWidth:"wide"}),quarter:d({values:w,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:d({values:P,defaultWidth:"wide"}),day:d({values:M,defaultWidth:"wide"}),dayPeriod:d({values:j,defaultWidth:"wide",formattingValues:C,defaultFormattingWidth:"wide"})},N=/^(\d+)(è|r|n|r|t)?/i,D=/\d+/i,k={narrow:/^(aC|dC)/i,abbreviated:/^(a. de C.|d. de C.)/i,wide:/^(abans de Crist|despr[eé]s de Crist)/i},T={narrow:[/^aC/i,/^dC/i],abbreviated:[/^(a. de C.)/i,/^(d. de C.)/i],wide:[/^(abans de Crist)/i,/^(despr[eé]s de Crist)/i]},F={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](è|r|n|r|t)? trimestre/i},z={any:[/1/i,/2/i,/3/i,/4/i]},H={narrow:/^(GN|FB|MÇ|AB|MG|JN|JL|AG|ST|OC|NV|DS)/i,abbreviated:/^(gen.|febr.|març|abr.|maig|juny|jul.|ag.|set.|oct.|nov.|des.)/i,wide:/^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i},L={narrow:[/^GN/i,/^FB/i,/^MÇ/i,/^AB/i,/^MG/i,/^JN/i,/^JL/i,/^AG/i,/^ST/i,/^OC/i,/^NV/i,/^DS/i],abbreviated:[/^gen./i,/^febr./i,/^març/i,/^abr./i,/^maig/i,/^juny/i,/^jul./i,/^ag./i,/^set./i,/^oct./i,/^nov./i,/^des./i],wide:[/^gener/i,/^febrer/i,/^març/i,/^abril/i,/^maig/i,/^juny/i,/^juliol/i,/^agost/i,/^setembre/i,/^octubre/i,/^novembre/i,/^desembre/i]},S={narrow:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,short:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,abbreviated:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,wide:/^(diumenge|dilluns|dimarts|dimecres|dijous|divendres|dissabte)/i},V={narrow:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],abbreviated:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],wide:[/^diumenge/i,/^dilluns/i,/^dimarts/i,/^dimecres/i,/^dijous/i,/^divendres/i,/^disssabte/i]},G={narrow:/^(a|p|mn|md|(del|de la) (matí|tarda|vespre|nit))/i,abbreviated:/^([ap]\.?\s?m\.?|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i,wide:/^(ante meridiem|post meridiem|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i},A={any:{am:/^a/i,pm:/^p/i,midnight:/^mitjanit/i,noon:/^migdia/i,morning:/matí/i,afternoon:/tarda/i,evening:/vespre/i,night:/nit/i}},X={ordinalNumber:o({matchPattern:N,parsePattern:D,valueCallback:function(a){return parseInt(a,10)}}),era:s({matchPatterns:k,defaultMatchWidth:"wide",parsePatterns:T,defaultParseWidth:"wide"}),quarter:s({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:z,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:s({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:L,defaultParseWidth:"wide"}),day:s({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"wide"}),dayPeriod:s({matchPatterns:G,defaultMatchWidth:"wide",parsePatterns:A,defaultParseWidth:"any"})},Y={code:"ca",formatDistance:u,formatLong:b,formatRelative:p,localize:x,match:X,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{Y as default};
//# sourceMappingURL=index.643d8563.js.map
