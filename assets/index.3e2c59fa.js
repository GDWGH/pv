import{d as k,e as i,f as c,g as u}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.0e0864ed.js";import"./index.f7ed1c20.js";import"./Logo.vue_vue_type_script_setup_true_lang.786d6d36.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.faa4830e.js";import"./use-controllable.d4aed882.js";/*! PatchyVideo/Platinum by VoileLabs */function d(a){return a.replace(/sekuntia?/,"sekunnin")}function h(a){return a.replace(/minuuttia?/,"minuutin")}function v(a){return a.replace(/tuntia?/,"tunnin")}function y(a){return a.replace(/päivää?/,"päivän")}function f(a){return a.replace(/(viikko|viikkoa)/,"viikon")}function p(a){return a.replace(/(kuukausi|kuukautta)/,"kuukauden")}function o(a){return a.replace(/(vuosi|vuotta)/,"vuoden")}var b={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:d},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:d},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(e){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:h},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:h},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:v},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:v},xDays:{one:"päivä",other:"{{count}} päivää",futureTense:y},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:f},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:f},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:p},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:p},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:o},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:o},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:o},almostXYears:{one:"lähes vuosi",other:"lähes {{count}} vuotta",futureTense:o}},w=function(e,n,t){var r=b[e],s=n===1?r.one:r.other.replace("{{count}}",String(n));return t!=null&&t.addSuffix?t.comparison&&t.comparison>0?r.futureTense(s)+" kuluttua":s+" sitten":s},P={full:"eeee d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"d.M.y"},g={full:"HH.mm.ss zzzz",long:"HH.mm.ss z",medium:"HH.mm.ss",short:"HH.mm"},M={full:"{{date}} 'klo' {{time}}",long:"{{date}} 'klo' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},T={date:k({formats:P,defaultWidth:"full"}),time:k({formats:g,defaultWidth:"full"}),dateTime:k({formats:M,defaultWidth:"full"})},W={lastWeek:"'viime' eeee 'klo' p",yesterday:"'eilen klo' p",today:"'tänään klo' p",tomorrow:"'huomenna klo' p",nextWeek:"'ensi' eeee 'klo' p",other:"P"},j=function(e,n,t,r){return W[e]},H={narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","jälkeen ajanlaskun alun"]},D={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},m={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},x={narrow:m.narrow,abbreviated:m.abbreviated,wide:["tammikuuta","helmikuuta","maaliskuuta","huhtikuuta","toukokuuta","kesäkuuta","heinäkuuta","elokuuta","syyskuuta","lokakuuta","marraskuuta","joulukuuta"]},l={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},F={narrow:l.narrow,short:l.short,abbreviated:l.abbreviated,wide:["sunnuntaina","maanantaina","tiistaina","keskiviikkona","torstaina","perjantaina","lauantaina"]},V={narrow:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},wide:{am:"ap",pm:"ip",midnight:"keskiyöllä",noon:"keskipäivällä",morning:"aamupäivällä",afternoon:"iltapäivällä",evening:"illalla",night:"yöllä"}},z=function(e,n){var t=Number(e);return t+"."},L={ordinalNumber:z,era:i({values:H,defaultWidth:"wide"}),quarter:i({values:D,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:i({values:m,defaultWidth:"wide",formattingValues:x,defaultFormattingWidth:"wide"}),day:i({values:l,defaultWidth:"wide",formattingValues:F,defaultFormattingWidth:"wide"}),dayPeriod:i({values:V,defaultWidth:"wide"})},S=/^(\d+)(\.)/i,X=/\d+/i,C={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},N={any:[/^e/i,/^j/i]},Q={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},Y={any:[/1/i,/2/i,/3/i,/4/i]},_={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},q={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},R={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},E={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},O={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},K={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},A={ordinalNumber:c({matchPattern:S,parsePattern:X,valueCallback:function(e){return parseInt(e,10)}}),era:u({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any"}),quarter:u({matchPatterns:Q,defaultMatchWidth:"wide",parsePatterns:Y,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:u({matchPatterns:_,defaultMatchWidth:"wide",parsePatterns:q,defaultParseWidth:"any"}),day:u({matchPatterns:R,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),dayPeriod:u({matchPatterns:O,defaultMatchWidth:"any",parsePatterns:K,defaultParseWidth:"any"})},Z={code:"fi",formatDistance:w,formatLong:T,formatRelative:j,localize:L,match:A,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{Z as default};
//# sourceMappingURL=index.3e2c59fa.js.map
