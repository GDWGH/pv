import{d as m,e as n,f as s,g as i}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.9d17fd30.js";import"./index.a9f360d8.js";import"./Logo.vue_vue_type_script_setup_true_lang.243a024e.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.23469051.js";import"./use-controllable.87047e03.js";/*! PatchyVideo/Platinum by VoileLabs */var u={lessThanXSeconds:{one:"minder dan een seconde",other:"minder dan {{count}} seconden"},xSeconds:{one:"1 seconde",other:"{{count}} seconden"},halfAMinute:"een halve minuut",lessThanXMinutes:{one:"minder dan een minuut",other:"minder dan {{count}} minuten"},xMinutes:{one:"een minuut",other:"{{count}} minuten"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} uur"},xHours:{one:"1 uur",other:"{{count}} uur"},xDays:{one:"1 dag",other:"{{count}} dagen"},aboutXWeeks:{one:"ongeveer 1 week",other:"ongeveer {{count}} weken"},xWeeks:{one:"1 week",other:"{{count}} weken"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maanden"},xMonths:{one:"1 maand",other:"{{count}} maanden"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer dan 1 jaar",other:"meer dan {{count}} jaar"},almostXYears:{one:"bijna 1 jaar",other:"bijna {{count}} jaar"}},l=function(a,o,e){var r,d=u[a];return typeof d=="string"?r=d:o===1?r=d.one:r=d.other.replace("{{count}}",String(o)),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"over "+r:r+" geleden":r},h={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd.MM.y"},v={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},c={full:"{{date}} 'om' {{time}}",long:"{{date}} 'om' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},g={date:m({formats:h,defaultWidth:"full"}),time:m({formats:v,defaultWidth:"full"}),dateTime:m({formats:c,defaultWidth:"full"})},f={lastWeek:"'vorige' eeee 'om' p",yesterday:"'gisteren om' p",today:"'vandaag om' p",tomorrow:"'morgen om' p",nextWeek:"eeee 'om' p",other:"P"},b=function(a,o,e,r){return f[a]},w={narrow:["v.C.","n.C."],abbreviated:["v.Chr.","n.Chr."],wide:["voor Christus","na Christus"]},p={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1e kwartaal","2e kwartaal","3e kwartaal","4e kwartaal"]},P={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mrt.","apr.","mei","jun.","jul.","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},M={narrow:["Z","M","D","W","D","V","Z"],short:["zo","ma","di","wo","do","vr","za"],abbreviated:["zon","maa","din","woe","don","vri","zat"],wide:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},j={narrow:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middag",morning:"'s ochtends",afternoon:"'s namiddags",evening:"'s avonds",night:"'s nachts"},abbreviated:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middag",morning:"'s ochtends",afternoon:"'s namiddags",evening:"'s avonds",night:"'s nachts"},wide:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middag",morning:"'s ochtends",afternoon:"'s namiddags",evening:"'s avonds",night:"'s nachts"}},y=function(a,o){var e=Number(a);return e+"e"},k={ordinalNumber:y,era:n({values:w,defaultWidth:"wide"}),quarter:n({values:p,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:n({values:P,defaultWidth:"wide"}),day:n({values:M,defaultWidth:"wide"}),dayPeriod:n({values:j,defaultWidth:"wide"})},z=/^(\d+)e?/i,W=/\d+/i,C={narrow:/^([vn]\.? ?C\.?)/,abbreviated:/^([vn]\. ?Chr\.?)/,wide:/^((voor|na) Christus)/},D={any:[/^v/,/^n/]},x={narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234]e kwartaal/i},H={any:[/1/i,/2/i,/3/i,/4/i]},F={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i},N={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^jan/i,/^feb/i,/^m(r|a)/i,/^apr/i,/^mei/i,/^jun/i,/^jul/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i]},X={narrow:/^[zmdwv]/i,short:/^(zo|ma|di|wo|do|vr|za)/i,abbreviated:/^(zon|maa|din|woe|don|vri|zat)/i,wide:/^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i},E={narrow:[/^z/i,/^m/i,/^d/i,/^w/i,/^d/i,/^v/i,/^z/i],any:[/^zo/i,/^ma/i,/^di/i,/^wo/i,/^do/i,/^vr/i,/^za/i]},V={any:/^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i},A={any:{am:/^am/i,pm:/^pm/i,midnight:/^middernacht/i,noon:/^het middaguur/i,morning:/ochtend/i,afternoon:/middag/i,evening:/avond/i,night:/nacht/i}},L={ordinalNumber:s({matchPattern:z,parsePattern:W,valueCallback:function(a){return parseInt(a,10)}}),era:i({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:D,defaultParseWidth:"any"}),quarter:i({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:i({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any"}),day:i({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),dayPeriod:i({matchPatterns:V,defaultMatchWidth:"any",parsePatterns:A,defaultParseWidth:"any"})},Y={code:"nl-BE",formatDistance:l,formatLong:g,formatRelative:b,localize:k,match:L,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{Y as default};
//# sourceMappingURL=index.daa892b9.js.map
