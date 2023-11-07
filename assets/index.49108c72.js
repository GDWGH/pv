import{d,e as n,f as m,g as i}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.db60e659.js";import"./index.8700d0c0.js";import"./Logo.vue_vue_type_script_setup_true_lang.7e50fc7c.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.ce4e1c59.js";import"./use-controllable.027a5e0f.js";/*! PatchyVideo/Platinum by VoileLabs */var s={lessThanXSeconds:{one:"minna en 1 sekúnda",other:"minna en {{count}} sekúndur"},xSeconds:{one:"1 sekúnda",other:"{{count}} sekúndur"},halfAMinute:"hálf mínúta",lessThanXMinutes:{one:"minna en 1 mínúta",other:"minna en {{count}} mínútur"},xMinutes:{one:"1 mínúta",other:"{{count}} mínútur"},aboutXHours:{one:"u.þ.b. 1 klukkustund",other:"u.þ.b. {{count}} klukkustundir"},xHours:{one:"1 klukkustund",other:"{{count}} klukkustundir"},xDays:{one:"1 dagur",other:"{{count}} dagar"},aboutXWeeks:{one:"um viku",other:"um {{count}} vikur"},xWeeks:{one:"1 viku",other:"{{count}} vikur"},aboutXMonths:{one:"u.þ.b. 1 mánuður",other:"u.þ.b. {{count}} mánuðir"},xMonths:{one:"1 mánuður",other:"{{count}} mánuðir"},aboutXYears:{one:"u.þ.b. 1 ár",other:"u.þ.b. {{count}} ár"},xYears:{one:"1 ár",other:"{{count}} ár"},overXYears:{one:"meira en 1 ár",other:"meira en {{count}} ár"},almostXYears:{one:"næstum 1 ár",other:"næstum {{count}} ár"}},l=function(a,u,r){var e,o=s[a];return typeof o=="string"?e=o:u===1?e=o.one:e=o.other.replace("{{count}}",u.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"í "+e:e+" síðan":e},f={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"d.MM.y"},h={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},g={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},v={date:d({formats:f,defaultWidth:"full"}),time:d({formats:h,defaultWidth:"full"}),dateTime:d({formats:g,defaultWidth:"full"})},c={lastWeek:"'síðasta' dddd 'kl.' p",yesterday:"'í gær kl.' p",today:"'í dag kl.' p",tomorrow:"'á morgun kl.' p",nextWeek:"dddd 'kl.' p",other:"P"},b=function(a,u,r,e){return c[a]},k={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["fyrir Krist","eftir Krist"]},p={narrow:["1","2","3","4"],abbreviated:["1F","2F","3F","4F"],wide:["1. fjórðungur","2. fjórðungur","3. fjórðungur","4. fjórðungur"]},y={narrow:["J","F","M","A","M","J","J","Á","S","Ó","N","D"],abbreviated:["jan.","feb.","mars","apríl","maí","júní","júlí","ágúst","sept.","okt.","nóv.","des."],wide:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"]},P={narrow:["S","M","Þ","M","F","F","L"],short:["Su","Má","Þr","Mi","Fi","Fö","La"],abbreviated:["sun.","mán.","þri.","mið.","fim.","fös.","lau."],wide:["sunnudagur","mánudagur","þriðjudagur","miðvikudagur","fimmtudagur","föstudagur","laugardagur"]},w={narrow:{am:"f",pm:"e",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"},wide:{am:"fyrir hádegi",pm:"eftir hádegi",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"}},M={narrow:{am:"f",pm:"e",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"},wide:{am:"fyrir hádegi",pm:"eftir hádegi",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"}},j=function(a,u){var r=Number(a);return r+"."},W={ordinalNumber:j,era:n({values:k,defaultWidth:"wide"}),quarter:n({values:p,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:n({values:y,defaultWidth:"wide"}),day:n({values:P,defaultWidth:"wide"}),dayPeriod:n({values:w,defaultWidth:"wide",formattingValues:M,defaultFormattingWidth:"wide"})},F=/^(\d+)(\.)?/i,K=/\d+(\.)?/i,D={narrow:/^(f\.Kr\.|e\.Kr\.)/i,abbreviated:/^(f\.Kr\.|e\.Kr\.)/i,wide:/^(fyrir Krist|eftir Krist)/i},x={any:[/^(f\.Kr\.)/i,/^(e\.Kr\.)/i]},H={narrow:/^[1234]\.?/i,abbreviated:/^q[1234]\.?/i,wide:/^[1234]\.? fjórðungur/i},z={any:[/1\.?/i,/2\.?/i,/3\.?/i,/4\.?/i]},L={narrow:/^[jfmásónd]/i,abbreviated:/^(jan\.|feb\.|mars\.|apríl\.|maí|júní|júlí|águst|sep\.|oct\.|nov\.|dec\.)/i,wide:/^(januar|febrúar|mars|apríl|maí|júní|júlí|águst|september|október|nóvember|desember)/i},N={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^á/i,/^s/i,/^ó/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maí/i,/^jún/i,/^júl/i,/^áu/i,/^s/i,/^ó/i,/^n/i,/^d/i]},S={narrow:/^[smtwf]/i,short:/^(su|má|þr|mi|fi|fö|la)/i,abbreviated:/^(sun|mán|þri|mið|fim|fös|lau)\.?/i,wide:/^(sunnudagur|mánudagur|þriðjudagur|miðvikudagur|fimmtudagur|föstudagur|laugardagur)/i},V={narrow:[/^s/i,/^m/i,/^þ/i,/^m/i,/^f/i,/^f/i,/^l/i],any:[/^su/i,/^má/i,/^þr/i,/^mi/i,/^fi/i,/^fö/i,/^la/i]},X={narrow:/^(f|e|síðdegis|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i,any:/^(fyrir hádegi|eftir hádegi|[ef]\.?h\.?|síðdegis|morgunn|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i},C={any:{am:/^f/i,pm:/^e/i,midnight:/^mi/i,noon:/^há/i,morning:/morgunn/i,afternoon:/síðdegi/i,evening:/kvöld/i,night:/nótt/i}},E={ordinalNumber:m({matchPattern:F,parsePattern:K,valueCallback:function(a){return parseInt(a,10)}}),era:i({matchPatterns:D,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),quarter:i({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:z,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:i({matchPatterns:L,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any"}),day:i({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any"}),dayPeriod:i({matchPatterns:X,defaultMatchWidth:"any",parsePatterns:C,defaultParseWidth:"any"})},J={code:"is",formatDistance:l,formatLong:v,formatRelative:b,localize:W,match:E,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{J as default};
//# sourceMappingURL=index.49108c72.js.map
