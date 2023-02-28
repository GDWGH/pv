import{i as s}from"./index.83e715b9.js";import{e as o,f as l,g as m}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.73a63df2.js";/*! PatchyVideo/Platinum by VoileLabs */var g={lessThanXSeconds:{one:"meno di un secondo",other:"meno di {{count}} secondi"},xSeconds:{one:"un secondo",other:"{{count}} secondi"},halfAMinute:"alcuni secondi",lessThanXMinutes:{one:"meno di un minuto",other:"meno di {{count}} minuti"},xMinutes:{one:"un minuto",other:"{{count}} minuti"},aboutXHours:{one:"circa un'ora",other:"circa {{count}} ore"},xHours:{one:"un'ora",other:"{{count}} ore"},xDays:{one:"un giorno",other:"{{count}} giorni"},aboutXWeeks:{one:"circa una settimana",other:"circa {{count}} settimane"},xWeeks:{one:"una settimana",other:"{{count}} settimane"},aboutXMonths:{one:"circa un mese",other:"circa {{count}} mesi"},xMonths:{one:"un mese",other:"{{count}} mesi"},aboutXYears:{one:"circa un anno",other:"circa {{count}} anni"},xYears:{one:"un anno",other:"{{count}} anni"},overXYears:{one:"più di un anno",other:"più di {{count}} anni"},almostXYears:{one:"quasi un anno",other:"quasi {{count}} anni"}},L=function(e,i,n){var t,r=g[e];return typeof r=="string"?t=r:i===1?t=r.one:t=r.other.replace("{{count}}",i.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"tra "+t:t+" fa":t},d=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"];function c(a){switch(a){case 0:return"'domenica scorsa alle' p";default:return"'"+d[a]+" scorso alle' p"}}function u(a){return"'"+d[a]+" alle' p"}function v(a){switch(a){case 0:return"'domenica prossima alle' p";default:return"'"+d[a]+" prossimo alle' p"}}var h={lastWeek:function(e,i,n){var t=e.getUTCDay();return s(e,i,n)?u(t):c(t)},yesterday:"'ieri alle' p",today:"'oggi alle' p",tomorrow:"'domani alle' p",nextWeek:function(e,i,n){var t=e.getUTCDay();return s(e,i,n)?u(t):v(t)},other:"P"},E=function(e,i,n,t){var r=h[e];return typeof r=="function"?r(i,n,t):r},f={narrow:["aC","dC"],abbreviated:["a.C.","d.C."],wide:["avanti Cristo","dopo Cristo"]},b={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},p={narrow:["G","F","M","A","M","G","L","A","S","O","N","D"],abbreviated:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],wide:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"]},P={narrow:["D","L","M","M","G","V","S"],short:["dom","lun","mar","mer","gio","ven","sab"],abbreviated:["dom","lun","mar","mer","gio","ven","sab"],wide:["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"]},z={narrow:{am:"m.",pm:"p.",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"},abbreviated:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"},wide:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"}},w={narrow:{am:"m.",pm:"p.",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"},abbreviated:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"},wide:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"}},y=function(e,i){var n=Number(e);return String(n)},Y={ordinalNumber:y,era:o({values:f,defaultWidth:"wide"}),quarter:o({values:b,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:o({values:p,defaultWidth:"wide"}),day:o({values:P,defaultWidth:"wide"}),dayPeriod:o({values:z,defaultWidth:"wide",formattingValues:w,defaultFormattingWidth:"wide"})},M=/^(\d+)(º)?/i,W=/\d+/i,C={narrow:/^(aC|dC)/i,abbreviated:/^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,wide:/^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i},k={any:[/^a/i,/^(d|e)/i]},D={narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](º)? trimestre/i},x={any:[/1/i,/2/i,/3/i,/4/i]},V={narrow:/^[gfmalsond]/i,abbreviated:/^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,wide:/^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i},T={narrow:[/^g/i,/^f/i,/^m/i,/^a/i,/^m/i,/^g/i,/^l/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ge/i,/^f/i,/^mar/i,/^ap/i,/^mag/i,/^gi/i,/^l/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},N={narrow:/^[dlmgvs]/i,short:/^(do|lu|ma|me|gi|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|gio|ven|sab)/i,wide:/^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i},S={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^g/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^me/i,/^g/i,/^v/i,/^s/i]},X={narrow:/^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,any:/^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i},A={any:{am:/^a/i,pm:/^p/i,midnight:/^mezza/i,noon:/^mezzo/i,morning:/mattina/i,afternoon:/pomeriggio/i,evening:/sera/i,night:/notte/i}},G={ordinalNumber:l({matchPattern:M,parsePattern:W,valueCallback:function(e){return parseInt(e,10)}}),era:m({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:k,defaultParseWidth:"any"}),quarter:m({matchPatterns:D,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:m({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:T,defaultParseWidth:"any"}),day:m({matchPatterns:N,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any"}),dayPeriod:m({matchPatterns:X,defaultMatchWidth:"any",parsePatterns:A,defaultParseWidth:"any"})};export{E as a,L as f,Y as l,G as m};
//# sourceMappingURL=index.8c72a01e.js.map
