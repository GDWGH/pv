import{e as t,f as d,g as s}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.d3dcf6dc.js";/*! PatchyVideo/Platinum by VoileLabs */var u={lessThanXSeconds:{one:"moins d’une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d’une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXWeeks:{one:"environ 1 semaine",other:"environ {{count}} semaines"},xWeeks:{one:"1 semaine",other:"{{count}} semaines"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d’un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu’un an",other:"presque {{count}} ans"}},N=function(e,i,a){var r,n=u[e];return typeof n=="string"?r=n:i===1?r=n.one:r=n.other.replace("{{count}}",String(i)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"dans "+r:"il y a "+r:r},l={narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant Jésus-Christ","après Jésus-Christ"]},v={narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2ème trim.","3ème trim.","4ème trim."],wide:["1er trimestre","2ème trimestre","3ème trimestre","4ème trimestre"]},h={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],wide:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},c={narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},f={narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"après-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l’après-midi",evening:"du soir",night:"du matin"}},b=function(e,i){var a=Number(e),r=i==null?void 0:i.unit;if(a===0)return"0";var n=["year","week","hour","minute","second"],m;return a===1?m=r&&n.includes(r)?"ère":"er":m="ème",a+m},X={ordinalNumber:b,era:t({values:l,defaultWidth:"wide"}),quarter:t({values:v,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:t({values:h,defaultWidth:"wide"}),day:t({values:c,defaultWidth:"wide"}),dayPeriod:t({values:f,defaultWidth:"wide"})},p=/^(\d+)(ième|ère|ème|er|e)?/i,P=/\d+/i,j={narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant Jésus-Christ|après Jésus-Christ)/i},w={any:[/^av/i,/^ap/i]},y={narrow:/^T?[1234]/i,abbreviated:/^[1234](er|ème|e)? trim\.?/i,wide:/^[1234](er|ème|e)? trimestre/i},M={any:[/1/i,/2/i,/3/i,/4/i]},C={narrow:/^[jfmasond]/i,abbreviated:/^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,wide:/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i},g={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]},J={narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},W={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},x={narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i},D={any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},T={ordinalNumber:d({matchPattern:p,parsePattern:P,valueCallback:function(e){return parseInt(e)}}),era:s({matchPatterns:j,defaultMatchWidth:"wide",parsePatterns:w,defaultParseWidth:"any"}),quarter:s({matchPatterns:y,defaultMatchWidth:"wide",parsePatterns:M,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:s({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:g,defaultParseWidth:"any"}),day:s({matchPatterns:J,defaultMatchWidth:"wide",parsePatterns:W,defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:x,defaultMatchWidth:"any",parsePatterns:D,defaultParseWidth:"any"})};export{N as f,X as l,T as m};
//# sourceMappingURL=index.11f7b420.js.map
