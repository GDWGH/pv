import{d,e as n,f as m,g as i}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.314bcd79.js";import"./index.e85e1a63.js";import"./Logo.vue_vue_type_script_setup_true_lang.a2f5b2f9.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.d453b0af.js";import"./use-controllable.adb402c2.js";/*! PatchyVideo/Platinum by VoileLabs */var u={lessThanXSeconds:{one:"minder as 1 sekonde",other:"minder as {{count}} sekonden"},xSeconds:{one:"1 sekonde",other:"{{count}} sekonden"},halfAMinute:"oardel minút",lessThanXMinutes:{one:"minder as 1 minút",other:"minder as {{count}} minuten"},xMinutes:{one:"1 minút",other:"{{count}} minuten"},aboutXHours:{one:"sawat 1 oere",other:"sawat {{count}} oere"},xHours:{one:"1 oere",other:"{{count}} oere"},xDays:{one:"1 dei",other:"{{count}} dagen"},aboutXWeeks:{one:"sawat 1 wike",other:"sawat {{count}} wiken"},xWeeks:{one:"1 wike",other:"{{count}} wiken"},aboutXMonths:{one:"sawat 1 moanne",other:"sawat {{count}} moannen"},xMonths:{one:"1 moanne",other:"{{count}} moannen"},aboutXYears:{one:"sawat 1 jier",other:"sawat {{count}} jier"},xYears:{one:"1 jier",other:"{{count}} jier"},overXYears:{one:"mear as 1 jier",other:"mear as {{count}}s jier"},almostXYears:{one:"hast 1 jier",other:"hast {{count}} jier"}},l=function(e,o,a){var t,s=u[e];return typeof s=="string"?t=s:o===1?t=s.one:t=s.other.replace("{{count}}",String(o)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"oer "+t:t+" lyn":t},h={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd-MM-y"},f={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},c={full:"{{date}} 'om' {{time}}",long:"{{date}} 'om' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},v={date:d({formats:h,defaultWidth:"full"}),time:d({formats:f,defaultWidth:"full"}),dateTime:d({formats:c,defaultWidth:"full"})},w={lastWeek:"'ôfrûne' eeee 'om' p",yesterday:"'juster om' p",today:"'hjoed om' p",tomorrow:"'moarn om' p",nextWeek:"eeee 'om' p",other:"P"},b=function(e,o,a,t){return w[e]},p={narrow:["f.K.","n.K."],abbreviated:["f.Kr.","n.Kr."],wide:["foar Kristus","nei Kristus"]},j={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1e fearnsjier","2e fearnsjier","3e fearnsjier","4e fearnsjier"]},P={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan.","feb.","mrt.","apr.","mai.","jun.","jul.","aug.","sep.","okt.","nov.","des."],wide:["jannewaris","febrewaris","maart","april","maaie","juny","july","augustus","septimber","oktober","novimber","desimber"]},y={narrow:["s","m","t","w","t","f","s"],short:["si","mo","ti","wo","to","fr","so"],abbreviated:["snein","moa","tii","woa","ton","fre","sneon"],wide:["snein","moandei","tiisdei","woansdei","tongersdei","freed","sneon"]},g={narrow:{am:"AM",pm:"PM",midnight:"middernacht",noon:"middei",morning:"moarns",afternoon:"middeis",evening:"jûns",night:"nachts"},abbreviated:{am:"AM",pm:"PM",midnight:"middernacht",noon:"middei",morning:"moarns",afternoon:"middeis",evening:"jûns",night:"nachts"},wide:{am:"AM",pm:"PM",midnight:"middernacht",noon:"middei",morning:"moarns",afternoon:"middeis",evening:"jûns",night:"nachts"}},M=function(e,o){var a=Number(e);return a+"e"},k={ordinalNumber:M,era:n({values:p,defaultWidth:"wide"}),quarter:n({values:j,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:n({values:P,defaultWidth:"wide"}),day:n({values:y,defaultWidth:"wide"}),dayPeriod:n({values:g,defaultWidth:"wide"})},W=/^(\d+)e?/i,K=/\d+/i,D={narrow:/^([fn]\.? ?K\.?)/,abbreviated:/^([fn]\. ?Kr\.?)/,wide:/^((foar|nei) Kristus)/},x={any:[/^f/,/^n/]},H={narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234]e fearnsjier/i},z={any:[/1/i,/2/i,/3/i,/4/i]},F={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mrt.|apr.|mai.|jun.|jul.|aug.|sep.|okt.|nov.|des.)/i,wide:/^(jannewaris|febrewaris|maart|april|maaie|juny|july|augustus|septimber|oktober|novimber|desimber)/i},X={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^jan/i,/^feb/i,/^m(r|a)/i,/^apr/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^des/i]},C={narrow:/^[smtwf]/i,short:/^(si|mo|ti|wo|to|fr|so)/i,abbreviated:/^(snein|moa|tii|woa|ton|fre|sneon)/i,wide:/^(snein|moandei|tiisdei|woansdei|tongersdei|freed|sneon)/i},N={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^sn/i,/^mo/i,/^ti/i,/^wo/i,/^to/i,/^fr/i,/^sn/i]},E={any:/^(am|pm|middernacht|middeis|moarns|middei|jûns|nachts)/i},L={any:{am:/^am/i,pm:/^pm/i,midnight:/^middernacht/i,noon:/^middei/i,morning:/moarns/i,afternoon:/^middeis/i,evening:/jûns/i,night:/nachts/i}},V={ordinalNumber:m({matchPattern:W,parsePattern:K,valueCallback:function(e){return parseInt(e,10)}}),era:i({matchPatterns:D,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),quarter:i({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:z,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:i({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any"}),day:i({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any"}),dayPeriod:i({matchPatterns:E,defaultMatchWidth:"any",parsePatterns:L,defaultParseWidth:"any"})},_={code:"fy",formatDistance:l,formatLong:v,formatRelative:b,localize:k,match:V,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{_ as default};
//# sourceMappingURL=index.ab25d81c.js.map
