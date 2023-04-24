import{d as s,e as u,f as l,g as c}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.afd17cd8.js";import"./index.15c35549.js";import"./Logo.vue_vue_type_script_setup_true_lang.87ff7e45.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.306da5b1.js";import"./use-controllable.ff36ffa0.js";/*! PatchyVideo/Platinum by VoileLabs */function d(t){return t.one!==void 0}var p={lessThanXSeconds:{present:{one:"manj kot {{count}} sekunda",two:"manj kot {{count}} sekundi",few:"manj kot {{count}} sekunde",other:"manj kot {{count}} sekund"},past:{one:"manj kot {{count}} sekundo",two:"manj kot {{count}} sekundama",few:"manj kot {{count}} sekundami",other:"manj kot {{count}} sekundami"},future:{one:"manj kot {{count}} sekundo",two:"manj kot {{count}} sekundi",few:"manj kot {{count}} sekunde",other:"manj kot {{count}} sekund"}},xSeconds:{present:{one:"{{count}} sekunda",two:"{{count}} sekundi",few:"{{count}} sekunde",other:"{{count}} sekund"},past:{one:"{{count}} sekundo",two:"{{count}} sekundama",few:"{{count}} sekundami",other:"{{count}} sekundami"},future:{one:"{{count}} sekundo",two:"{{count}} sekundi",few:"{{count}} sekunde",other:"{{count}} sekund"}},halfAMinute:"pol minute",lessThanXMinutes:{present:{one:"manj kot {{count}} minuta",two:"manj kot {{count}} minuti",few:"manj kot {{count}} minute",other:"manj kot {{count}} minut"},past:{one:"manj kot {{count}} minuto",two:"manj kot {{count}} minutama",few:"manj kot {{count}} minutami",other:"manj kot {{count}} minutami"},future:{one:"manj kot {{count}} minuto",two:"manj kot {{count}} minuti",few:"manj kot {{count}} minute",other:"manj kot {{count}} minut"}},xMinutes:{present:{one:"{{count}} minuta",two:"{{count}} minuti",few:"{{count}} minute",other:"{{count}} minut"},past:{one:"{{count}} minuto",two:"{{count}} minutama",few:"{{count}} minutami",other:"{{count}} minutami"},future:{one:"{{count}} minuto",two:"{{count}} minuti",few:"{{count}} minute",other:"{{count}} minut"}},aboutXHours:{present:{one:"približno {{count}} ura",two:"približno {{count}} uri",few:"približno {{count}} ure",other:"približno {{count}} ur"},past:{one:"približno {{count}} uro",two:"približno {{count}} urama",few:"približno {{count}} urami",other:"približno {{count}} urami"},future:{one:"približno {{count}} uro",two:"približno {{count}} uri",few:"približno {{count}} ure",other:"približno {{count}} ur"}},xHours:{present:{one:"{{count}} ura",two:"{{count}} uri",few:"{{count}} ure",other:"{{count}} ur"},past:{one:"{{count}} uro",two:"{{count}} urama",few:"{{count}} urami",other:"{{count}} urami"},future:{one:"{{count}} uro",two:"{{count}} uri",few:"{{count}} ure",other:"{{count}} ur"}},xDays:{present:{one:"{{count}} dan",two:"{{count}} dni",few:"{{count}} dni",other:"{{count}} dni"},past:{one:"{{count}} dnem",two:"{{count}} dnevoma",few:"{{count}} dnevi",other:"{{count}} dnevi"},future:{one:"{{count}} dan",two:"{{count}} dni",few:"{{count}} dni",other:"{{count}} dni"}},aboutXWeeks:{one:"približno {{count}} teden",two:"približno {{count}} tedna",few:"približno {{count}} tedne",other:"približno {{count}} tednov"},xWeeks:{one:"{{count}} teden",two:"{{count}} tedna",few:"{{count}} tedne",other:"{{count}} tednov"},aboutXMonths:{present:{one:"približno {{count}} mesec",two:"približno {{count}} meseca",few:"približno {{count}} mesece",other:"približno {{count}} mesecev"},past:{one:"približno {{count}} mesecem",two:"približno {{count}} mesecema",few:"približno {{count}} meseci",other:"približno {{count}} meseci"},future:{one:"približno {{count}} mesec",two:"približno {{count}} meseca",few:"približno {{count}} mesece",other:"približno {{count}} mesecev"}},xMonths:{present:{one:"{{count}} mesec",two:"{{count}} meseca",few:"{{count}} meseci",other:"{{count}} mesecev"},past:{one:"{{count}} mesecem",two:"{{count}} mesecema",few:"{{count}} meseci",other:"{{count}} meseci"},future:{one:"{{count}} mesec",two:"{{count}} meseca",few:"{{count}} mesece",other:"{{count}} mesecev"}},aboutXYears:{present:{one:"približno {{count}} leto",two:"približno {{count}} leti",few:"približno {{count}} leta",other:"približno {{count}} let"},past:{one:"približno {{count}} letom",two:"približno {{count}} letoma",few:"približno {{count}} leti",other:"približno {{count}} leti"},future:{one:"približno {{count}} leto",two:"približno {{count}} leti",few:"približno {{count}} leta",other:"približno {{count}} let"}},xYears:{present:{one:"{{count}} leto",two:"{{count}} leti",few:"{{count}} leta",other:"{{count}} let"},past:{one:"{{count}} letom",two:"{{count}} letoma",few:"{{count}} leti",other:"{{count}} leti"},future:{one:"{{count}} leto",two:"{{count}} leti",few:"{{count}} leta",other:"{{count}} let"}},overXYears:{present:{one:"več kot {{count}} leto",two:"več kot {{count}} leti",few:"več kot {{count}} leta",other:"več kot {{count}} let"},past:{one:"več kot {{count}} letom",two:"več kot {{count}} letoma",few:"več kot {{count}} leti",other:"več kot {{count}} leti"},future:{one:"več kot {{count}} leto",two:"več kot {{count}} leti",few:"več kot {{count}} leta",other:"več kot {{count}} let"}},almostXYears:{present:{one:"skoraj {{count}} leto",two:"skoraj {{count}} leti",few:"skoraj {{count}} leta",other:"skoraj {{count}} let"},past:{one:"skoraj {{count}} letom",two:"skoraj {{count}} letoma",few:"skoraj {{count}} leti",other:"skoraj {{count}} leti"},future:{one:"skoraj {{count}} leto",two:"skoraj {{count}} leti",few:"skoraj {{count}} leta",other:"skoraj {{count}} let"}}};function f(t){switch(t%100){case 1:return"one";case 2:return"two";case 3:case 4:return"few";default:return"other"}}var w=function(e,o,n){var a="",r="present";n!=null&&n.addSuffix&&(n.comparison&&n.comparison>0?(r="future",a="čez "):(r="past",a="pred "));var i=p[e];if(typeof i=="string")a+=i;else{var m=f(o);d(i)?a+=i[m].replace("{{count}}",String(o)):a+=i[r][m].replace("{{count}}",String(o))}return a},h={full:"EEEE, dd. MMMM y",long:"dd. MMMM y",medium:"d. MMM y",short:"d. MM. yy"},b={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},j={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},v={date:s({formats:h,defaultWidth:"full"}),time:s({formats:b,defaultWidth:"full"}),dateTime:s({formats:j,defaultWidth:"full"})},k={lastWeek:function(e){var o=e.getUTCDay();switch(o){case 0:return"'prejšnjo nedeljo ob' p";case 3:return"'prejšnjo sredo ob' p";case 6:return"'prejšnjo soboto ob' p";default:return"'prejšnji' EEEE 'ob' p"}},yesterday:"'včeraj ob' p",today:"'danes ob' p",tomorrow:"'jutri ob' p",nextWeek:function(e){var o=e.getUTCDay();switch(o){case 0:return"'naslednjo nedeljo ob' p";case 3:return"'naslednjo sredo ob' p";case 6:return"'naslednjo soboto ob' p";default:return"'naslednji' EEEE 'ob' p"}},other:"P"},g=function(e,o,n,a){var r=k[e];return typeof r=="function"?r(o):r},P={narrow:["pr. n. št.","po n. št."],abbreviated:["pr. n. št.","po n. št."],wide:["pred našim štetjem","po našem štetju"]},y={narrow:["1","2","3","4"],abbreviated:["1. čet.","2. čet.","3. čet.","4. čet."],wide:["1. četrtletje","2. četrtletje","3. četrtletje","4. četrtletje"]},M={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan.","feb.","mar.","apr.","maj","jun.","jul.","avg.","sep.","okt.","nov.","dec."],wide:["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"]},W={narrow:["n","p","t","s","č","p","s"],short:["ned.","pon.","tor.","sre.","čet.","pet.","sob."],abbreviated:["ned.","pon.","tor.","sre.","čet.","pet.","sob."],wide:["nedelja","ponedeljek","torek","sreda","četrtek","petek","sobota"]},z={narrow:{am:"d",pm:"p",midnight:"24.00",noon:"12.00",morning:"j",afternoon:"p",evening:"v",night:"n"},abbreviated:{am:"dop.",pm:"pop.",midnight:"poln.",noon:"pold.",morning:"jut.",afternoon:"pop.",evening:"več.",night:"noč"},wide:{am:"dop.",pm:"pop.",midnight:"polnoč",noon:"poldne",morning:"jutro",afternoon:"popoldne",evening:"večer",night:"noč"}},D={narrow:{am:"d",pm:"p",midnight:"24.00",noon:"12.00",morning:"zj",afternoon:"p",evening:"zv",night:"po"},abbreviated:{am:"dop.",pm:"pop.",midnight:"opoln.",noon:"opold.",morning:"zjut.",afternoon:"pop.",evening:"zveč.",night:"ponoči"},wide:{am:"dop.",pm:"pop.",midnight:"opolnoči",noon:"opoldne",morning:"zjutraj",afternoon:"popoldan",evening:"zvečer",night:"ponoči"}},E=function(e,o){var n=Number(e);return n+"."},x={ordinalNumber:E,era:u({values:P,defaultWidth:"wide"}),quarter:u({values:y,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:u({values:M,defaultWidth:"wide"}),day:u({values:W,defaultWidth:"wide"}),dayPeriod:u({values:z,defaultWidth:"wide",formattingValues:D,defaultFormattingWidth:"wide"})},F=/^(\d+)\./i,C=/\d+/i,H={abbreviated:/^(pr\. n\. št\.|po n\. št\.)/i,wide:/^(pred Kristusom|pred na[sš]im [sš]tetjem|po Kristusu|po na[sš]em [sš]tetju|na[sš]ega [sš]tetja)/i},V={any:[/^pr/i,/^(po|na[sš]em)/i]},X={narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?[čc]et\.?/i,wide:/^[1234]\. [čc]etrtletje/i},N={any:[/1/i,/2/i,/3/i,/4/i]},T={narrow:/^[jfmasond]/i,abbreviated:/^(jan\.|feb\.|mar\.|apr\.|maj|jun\.|jul\.|avg\.|sep\.|okt\.|nov\.|dec\.)/i,wide:/^(januar|februar|marec|april|maj|junij|julij|avgust|september|oktober|november|december)/i},L={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],abbreviated:[/^ja/i,/^fe/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i],wide:[/^ja/i,/^fe/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i]},S={narrow:/^[nptsčc]/i,short:/^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,abbreviated:/^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,wide:/^(nedelja|ponedeljek|torek|sreda|[cč]etrtek|petek|sobota)/i},R={narrow:[/^n/i,/^p/i,/^t/i,/^s/i,/^[cč]/i,/^p/i,/^s/i],any:[/^n/i,/^po/i,/^t/i,/^sr/i,/^[cč]/i,/^pe/i,/^so/i]},Y={narrow:/^(d|po?|z?v|n|z?j|24\.00|12\.00)/i,any:/^(dop\.|pop\.|o?poln(\.|o[cč]i?)|o?pold(\.|ne)|z?ve[cč](\.|er)|(po)?no[cč]i?|popold(ne|an)|jut(\.|ro)|zjut(\.|raj))/i},q={narrow:{am:/^d/i,pm:/^p/i,midnight:/^24/i,noon:/^12/i,morning:/^(z?j)/i,afternoon:/^p/i,evening:/^(z?v)/i,night:/^(n|po)/i},any:{am:/^dop\./i,pm:/^pop\./i,midnight:/^o?poln/i,noon:/^o?pold/i,morning:/j/i,afternoon:/^pop\./i,evening:/^z?ve/i,night:/(po)?no/i}},O={ordinalNumber:l({matchPattern:F,parsePattern:C,valueCallback:function(e){return parseInt(e,10)}}),era:c({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any"}),quarter:c({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:c({matchPatterns:T,defaultMatchWidth:"wide",parsePatterns:L,defaultParseWidth:"wide"}),day:c({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:R,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:Y,defaultMatchWidth:"any",parsePatterns:q,defaultParseWidth:"any"})},I={code:"sl",formatDistance:w,formatLong:v,formatRelative:g,localize:x,match:O,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{I as default};
//# sourceMappingURL=index.ae8432d4.js.map
