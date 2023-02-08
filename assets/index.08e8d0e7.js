import{d as u,e as r,f as d,g as n}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.454685e1.js";import"./index.0c09ff66.js";import"./Logo.vue_vue_type_script_setup_true_lang.5e07c82c.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.ae0a6a4b.js";import"./use-controllable.38258bd5.js";/*! PatchyVideo/Platinum by VoileLabs */var s={lessThanXSeconds:{one:"mai puțin de o secundă",other:"mai puțin de {{count}} secunde"},xSeconds:{one:"1 secundă",other:"{{count}} secunde"},halfAMinute:"jumătate de minut",lessThanXMinutes:{one:"mai puțin de un minut",other:"mai puțin de {{count}} minute"},xMinutes:{one:"1 minut",other:"{{count}} minute"},aboutXHours:{one:"circa 1 oră",other:"circa {{count}} ore"},xHours:{one:"1 oră",other:"{{count}} ore"},xDays:{one:"1 zi",other:"{{count}} zile"},aboutXWeeks:{one:"circa o săptămână",other:"circa {{count}} săptămâni"},xWeeks:{one:"1 săptămână",other:"{{count}} săptămâni"},aboutXMonths:{one:"circa 1 lună",other:"circa {{count}} luni"},xMonths:{one:"1 lună",other:"{{count}} luni"},aboutXYears:{one:"circa 1 an",other:"circa {{count}} ani"},xYears:{one:"1 an",other:"{{count}} ani"},overXYears:{one:"peste 1 an",other:"peste {{count}} ani"},almostXYears:{one:"aproape 1 an",other:"aproape {{count}} ani"}},l=function(a,o,i){var e,m=s[a];return typeof m=="string"?e=m:o===1?e=m.one:e=m.other.replace("{{count}}",String(o)),i!=null&&i.addSuffix?i.comparison&&i.comparison>0?"în "+e:e+" în urmă":e},c={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd.MM.yyyy"},p={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},h={full:"{{date}} 'la' {{time}}",long:"{{date}} 'la' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},v={date:u({formats:c,defaultWidth:"full"}),time:u({formats:p,defaultWidth:"full"}),dateTime:u({formats:h,defaultWidth:"full"})},f={lastWeek:"eeee 'trecută la' p",yesterday:"'ieri la' p",today:"'astăzi la' p",tomorrow:"'mâine la' p",nextWeek:"eeee 'viitoare la' p",other:"P"},b=function(a,o,i,e){return f[a]},g={narrow:["Î","D"],abbreviated:["Î.d.C.","D.C."],wide:["Înainte de Cristos","După Cristos"]},y={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["primul trimestru","al doilea trimestru","al treilea trimestru","al patrulea trimestru"]},P={narrow:["I","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["ian","feb","mar","apr","mai","iun","iul","aug","sep","oct","noi","dec"],wide:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"]},w={narrow:["d","l","m","m","j","v","s"],short:["du","lu","ma","mi","jo","vi","sâ"],abbreviated:["dum","lun","mar","mie","joi","vin","sâm"],wide:["duminică","luni","marți","miercuri","joi","vineri","sâmbătă"]},M={narrow:{am:"a",pm:"p",midnight:"mn",noon:"ami",morning:"dim",afternoon:"da",evening:"s",night:"n"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"}},z={narrow:{am:"a",pm:"p",midnight:"mn",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"}},W=function(a,o){return String(a)},D={ordinalNumber:W,era:r({values:g,defaultWidth:"wide"}),quarter:r({values:y,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:r({values:P,defaultWidth:"wide"}),day:r({values:w,defaultWidth:"wide"}),dayPeriod:r({values:M,defaultWidth:"wide",formattingValues:z,defaultFormattingWidth:"wide"})},C=/^(\d+)?/i,k=/\d+/i,j={narrow:/^(Î|D)/i,abbreviated:/^(Î\.?\s?d\.?\s?C\.?|Î\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,wide:/^(Înainte de Cristos|Înaintea erei noastre|După Cristos|Era noastră)/i},x={any:[/^ÎC/i,/^DC/i],wide:[/^(Înainte de Cristos|Înaintea erei noastre)/i,/^(După Cristos|Era noastră)/i]},F={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^trimestrul [1234]/i},H={any:[/1/i,/2/i,/3/i,/4/i]},T={narrow:/^[ifmaasond]/i,abbreviated:/^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,wide:/^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i},E={narrow:[/^i/i,/^f/i,/^m/i,/^a/i,/^m/i,/^i/i,/^i/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ia/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^iun/i,/^iul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},V={narrow:/^[dlmjvs]/i,short:/^(d|l|ma|mi|j|v|s)/i,abbreviated:/^(dum|lun|mar|mie|jo|vi|sâ)/i,wide:/^(duminica|luni|marţi|miercuri|joi|vineri|sâmbătă)/i},X={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^mi/i,/^j/i,/^v/i,/^s/i]},N={narrow:/^(a|p|mn|a|(dimineaţa|după-amiaza|seara|noaptea))/i,any:/^([ap]\.?\s?m\.?|miezul nopții|amiaza|(dimineaţa|după-amiaza|seara|noaptea))/i},S={any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/amiaza/i,morning:/dimineaţa/i,afternoon:/după-amiaza/i,evening:/seara/i,night:/noaptea/i}},L={ordinalNumber:d({matchPattern:C,parsePattern:k,valueCallback:function(a){return parseInt(a,10)}}),era:n({matchPatterns:j,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),quarter:n({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:n({matchPatterns:T,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),day:n({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any"}),dayPeriod:n({matchPatterns:N,defaultMatchWidth:"any",parsePatterns:S,defaultParseWidth:"any"})},_={code:"ro",formatDistance:l,formatLong:v,formatRelative:b,localize:D,match:L,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{_ as default};
//# sourceMappingURL=index.08e8d0e7.js.map
