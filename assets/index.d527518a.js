import{d as o,e as i,f as p,g as n}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.7724dcae.js";import"./index.e8624264.js";import"./Logo.vue_vue_type_script_setup_true_lang.78922cec.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.990bdec9.js";import"./use-controllable.b0fd758e.js";/*! PatchyVideo/Platinum by VoileLabs */var b={about:"körülbelül",over:"több mint",almost:"majdnem",lessthan:"kevesebb mint"},z={xseconds:" másodperc",halfaminute:"fél perc",xminutes:" perc",xhours:" óra",xdays:" nap",xweeks:" hét",xmonths:" hónap",xyears:" év"},g={xseconds:{"-1":" másodperccel ezelőtt",1:" másodperc múlva",0:" másodperce"},halfaminute:{"-1":"fél perccel ezelőtt",1:"fél perc múlva",0:"fél perce"},xminutes:{"-1":" perccel ezelőtt",1:" perc múlva",0:" perce"},xhours:{"-1":" órával ezelőtt",1:" óra múlva",0:" órája"},xdays:{"-1":" nappal ezelőtt",1:" nap múlva",0:" napja"},xweeks:{"-1":" héttel ezelőtt",1:" hét múlva",0:" hete"},xmonths:{"-1":" hónappal ezelőtt",1:" hónap múlva",0:" hónapja"},xyears:{"-1":" évvel ezelőtt",1:" év múlva",0:" éve"}},y=function(e,r,a){var s=e.match(/about|over|almost|lessthan/i),v=s?e.replace(s[0],""):e,c=(a==null?void 0:a.addSuffix)===!0,d=v.toLowerCase(),f=(a==null?void 0:a.comparison)||0,m=c?g[d][f]:z[d],l=d==="halfaminute"?m:r+m;if(s){var h=s[0].toLowerCase();l=b[h]+" "+l}return l},j={full:"y. MMMM d., EEEE",long:"y. MMMM d.",medium:"y. MMM d.",short:"y. MM. dd."},w={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},k={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},P={date:o({formats:j,defaultWidth:"full"}),time:o({formats:w,defaultWidth:"full"}),dateTime:o({formats:k,defaultWidth:"full"})},I=["vasárnap","hétfőn","kedden","szerdán","csütörtökön","pénteken","szombaton"];function u(t){return function(e){var r=I[e.getUTCDay()],a=t?"":"'múlt' ";return"".concat(a,"'").concat(r,"' p'-kor'")}}var M={lastWeek:u(!1),yesterday:"'tegnap' p'-kor'",today:"'ma' p'-kor'",tomorrow:"'holnap' p'-kor'",nextWeek:u(!0),other:"P"},W=function(e,r){var a=M[e];return typeof a=="function"?a(r):a},x={narrow:["ie.","isz."],abbreviated:["i. e.","i. sz."],wide:["Krisztus előtt","időszámításunk szerint"]},V={narrow:["1.","2.","3.","4."],abbreviated:["1. n.év","2. n.év","3. n.év","4. n.év"],wide:["1. negyedév","2. negyedév","3. negyedév","4. negyedév"]},C={narrow:["I.","II.","III.","IV."],abbreviated:["I. n.év","II. n.év","III. n.év","IV. n.év"],wide:["I. negyedév","II. negyedév","III. negyedév","IV. negyedév"]},S={narrow:["J","F","M","Á","M","J","J","A","Sz","O","N","D"],abbreviated:["jan.","febr.","márc.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec."],wide:["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"]},D={narrow:["V","H","K","Sz","Cs","P","Sz"],short:["V","H","K","Sze","Cs","P","Szo"],abbreviated:["V","H","K","Sze","Cs","P","Szo"],wide:["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"]},F={narrow:{am:"de.",pm:"du.",midnight:"éjfél",noon:"dél",morning:"reggel",afternoon:"du.",evening:"este",night:"éjjel"},abbreviated:{am:"de.",pm:"du.",midnight:"éjfél",noon:"dél",morning:"reggel",afternoon:"du.",evening:"este",night:"éjjel"},wide:{am:"de.",pm:"du.",midnight:"éjfél",noon:"dél",morning:"reggel",afternoon:"délután",evening:"este",night:"éjjel"}},N=function(e,r){var a=Number(e);return a+"."},H={ordinalNumber:N,era:i({values:x,defaultWidth:"wide"}),quarter:i({values:V,defaultWidth:"wide",argumentCallback:function(e){return e-1},formattingValues:C,defaultFormattingWidth:"wide"}),month:i({values:S,defaultWidth:"wide"}),day:i({values:D,defaultWidth:"wide"}),dayPeriod:i({values:F,defaultWidth:"wide"})},L=/^(\d+)\.?/i,E=/\d+/i,K={narrow:/^(ie\.|isz\.)/i,abbreviated:/^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i,wide:/^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i},O={narrow:[/ie/i,/isz/i],abbreviated:[/^(i\.?\s?e\.?|b\s?ce)/i,/^(i\.?\s?sz\.?|c\s?e)/i],any:[/előtt/i,/(szerint|i. sz.)/i]},R={narrow:/^[1234]\.?/i,abbreviated:/^[1234]?\.?\s?n\.év/i,wide:/^([1234]|I|II|III|IV)?\.?\s?negyedév/i},q={any:[/1|I$/i,/2|II$/i,/3|III/i,/4|IV/i]},J={narrow:/^[jfmaásond]|sz/i,abbreviated:/^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i,wide:/^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i},Q={narrow:[/^j/i,/^f/i,/^m/i,/^a|á/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s|sz/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^már/i,/^áp/i,/^máj/i,/^jún/i,/^júl/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},T={narrow:/^([vhkpc]|sz|cs|sz)/i,short:/^([vhkp]|sze|cs|szo)/i,abbreviated:/^([vhkp]|sze|cs|szo)/i,wide:/^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i},$={narrow:[/^v/i,/^h/i,/^k/i,/^sz/i,/^c/i,/^p/i,/^sz/i],any:[/^v/i,/^h/i,/^k/i,/^sze/i,/^c/i,/^p/i,/^szo/i]},A={any:/^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i},U={any:{am:/^de\.?/i,pm:/^du\.?/i,midnight:/^éjf/i,noon:/^dé/i,morning:/reg/i,afternoon:/^délu\.?/i,evening:/es/i,night:/éjj/i}},_={ordinalNumber:p({matchPattern:L,parsePattern:E,valueCallback:function(e){return parseInt(e,10)}}),era:n({matchPatterns:K,defaultMatchWidth:"wide",parsePatterns:O,defaultParseWidth:"any"}),quarter:n({matchPatterns:R,defaultMatchWidth:"wide",parsePatterns:q,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:n({matchPatterns:J,defaultMatchWidth:"wide",parsePatterns:Q,defaultParseWidth:"any"}),day:n({matchPatterns:T,defaultMatchWidth:"wide",parsePatterns:$,defaultParseWidth:"any"}),dayPeriod:n({matchPatterns:A,defaultMatchWidth:"any",parsePatterns:U,defaultParseWidth:"any"})},ee={code:"hu",formatDistance:y,formatLong:P,formatRelative:W,localize:H,match:_,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{ee as default};
//# sourceMappingURL=index.d527518a.js.map
