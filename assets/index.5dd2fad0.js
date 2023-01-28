import{d as s,e as n,f as u,g as i}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.ede8f42f.js";import"./index.97b6fec1.js";import"./Logo.vue_vue_type_script_setup_true_lang.56478ba7.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.6babdb82.js";import"./use-controllable.08cd6171.js";/*! PatchyVideo/Platinum by VoileLabs */var d={lessThanXSeconds:{one:"malpli ol sekundo",other:"malpli ol {{count}} sekundoj"},xSeconds:{one:"1 sekundo",other:"{{count}} sekundoj"},halfAMinute:"duonminuto",lessThanXMinutes:{one:"malpli ol minuto",other:"malpli ol {{count}} minutoj"},xMinutes:{one:"1 minuto",other:"{{count}} minutoj"},aboutXHours:{one:"proksimume 1 horo",other:"proksimume {{count}} horoj"},xHours:{one:"1 horo",other:"{{count}} horoj"},xDays:{one:"1 tago",other:"{{count}} tagoj"},aboutXMonths:{one:"proksimume 1 monato",other:"proksimume {{count}} monatoj"},xWeeks:{one:"1 semajno",other:"{{count}} semajnoj"},aboutXWeeks:{one:"proksimume 1 semajno",other:"proksimume {{count}} semajnoj"},xMonths:{one:"1 monato",other:"{{count}} monatoj"},aboutXYears:{one:"proksimume 1 jaro",other:"proksimume {{count}} jaroj"},xYears:{one:"1 jaro",other:"{{count}} jaroj"},overXYears:{one:"pli ol 1 jaro",other:"pli ol {{count}} jaroj"},almostXYears:{one:"preskaŭ 1 jaro",other:"preskaŭ {{count}} jaroj"}},l=function(a,r,e){var t,m=d[a];return typeof m=="string"?t=m:r===1?t=m.one:t=m.other.replace("{{count}}",String(r)),e!=null&&e.addSuffix?e!=null&&e.comparison&&e.comparison>0?"post "+t:"antaŭ "+t:t},h={full:"EEEE, do 'de' MMMM y",long:"y-MMMM-dd",medium:"y-MMM-dd",short:"yyyy-MM-dd"},v={full:"Ho 'horo kaj' m:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},p={any:"{{date}} {{time}}"},j={date:s({formats:h,defaultWidth:"full"}),time:s({formats:v,defaultWidth:"full"}),dateTime:s({formats:p,defaultWidth:"any"})},c={lastWeek:"'pasinta' eeee 'je' p",yesterday:"'hieraŭ je' p",today:"'hodiaŭ je' p",tomorrow:"'morgaŭ je' p",nextWeek:"eeee 'je' p",other:"P"},f=function(a,r,e,t){return c[a]},b={narrow:["aK","pK"],abbreviated:["a.K.E.","p.K.E."],wide:["antaŭ Komuna Erao","Komuna Erao"]},k={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1-a kvaronjaro","2-a kvaronjaro","3-a kvaronjaro","4-a kvaronjaro"]},g={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan","feb","mar","apr","maj","jun","jul","aŭg","sep","okt","nov","dec"],wide:["januaro","februaro","marto","aprilo","majo","junio","julio","aŭgusto","septembro","oktobro","novembro","decembro"]},P={narrow:["D","L","M","M","Ĵ","V","S"],short:["di","lu","ma","me","ĵa","ve","sa"],abbreviated:["dim","lun","mar","mer","ĵaŭ","ven","sab"],wide:["dimanĉo","lundo","mardo","merkredo","ĵaŭdo","vendredo","sabato"]},w={narrow:{am:"a",pm:"p",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"},abbreviated:{am:"a.t.m.",pm:"p.t.m.",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"},wide:{am:"antaŭtagmeze",pm:"posttagmeze",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"}},y=function(a){var r=Number(a);return r+"-a"},M={ordinalNumber:y,era:n({values:b,defaultWidth:"wide"}),quarter:n({values:k,defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:n({values:g,defaultWidth:"wide"}),day:n({values:P,defaultWidth:"wide"}),dayPeriod:n({values:w,defaultWidth:"wide"})},z=/^(\d+)(-?a)?/i,W=/\d+/i,x={narrow:/^([ap]k)/i,abbreviated:/^([ap]\.?\s?k\.?\s?e\.?)/i,wide:/^((antaǔ |post )?komuna erao)/i},D={any:[/^a/i,/^[kp]/i]},E={narrow:/^[1234]/i,abbreviated:/^k[1234]/i,wide:/^[1234](-?a)? kvaronjaro/i},K={any:[/1/i,/2/i,/3/i,/4/i]},F={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|maj|jun|jul|a(ŭ|ux|uh|u)g|sep|okt|nov|dec)/i,wide:/^(januaro|februaro|marto|aprilo|majo|junio|julio|a(ŭ|ux|uh|u)gusto|septembro|oktobro|novembro|decembro)/i},H={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^a(u|ŭ)/i,/^s/i,/^o/i,/^n/i,/^d/i]},N={narrow:/^[dlmĵjvs]/i,short:/^(di|lu|ma|me|(ĵ|jx|jh|j)a|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)|ven|sab)/i,wide:/^(diman(ĉ|cx|ch|c)o|lundo|mardo|merkredo|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)do|vendredo|sabato)/i},X={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^(j|ĵ)/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^me/i,/^(j|ĵ)/i,/^v/i,/^s/i]},C={narrow:/^([ap]|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,abbreviated:/^([ap][.\s]?t[.\s]?m[.\s]?|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,wide:/^(anta(ŭ|ux)tagmez|posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo]/i},L={any:{am:/^a/i,pm:/^p/i,midnight:/^noktom/i,noon:/^t/i,morning:/^m/i,afternoon:/^posttagmeze/i,evening:/^v/i,night:/^n/i}},S={ordinalNumber:u({matchPattern:z,parsePattern:W,valueCallback:function(a){return parseInt(a,10)}}),era:i({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:D,defaultParseWidth:"any"}),quarter:i({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:K,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:i({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any"}),day:i({matchPatterns:N,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any"}),dayPeriod:i({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:L,defaultParseWidth:"any"})},q={code:"eo",formatDistance:l,formatLong:j,formatRelative:f,localize:M,match:S,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{q as default};
//# sourceMappingURL=index.5dd2fad0.js.map
