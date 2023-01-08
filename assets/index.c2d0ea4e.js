import{d,e as i,f as h,g as u}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.bdbf72b1.js";import{i as f}from"./index.916bbcc3.js";import"./index.8af359dd.js";import"./Logo.vue_vue_type_script_setup_true_lang.34991a2a.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.b8f6b918.js";import"./use-controllable.7240830b.js";/*! PatchyVideo/Platinum by VoileLabs */function b(t,e){return e===1&&t.one?t.one:e>=2&&e<=4&&t.twoFour?t.twoFour:t.other}function m(t,e,n){var r=b(t,e),a=r[n];return a.replace("{{count}}",String(e))}function k(t){var e=["lessThan","about","over","almost"].filter(function(n){return!!t.match(new RegExp("^"+n))});return e[0]}function p(t){var e="";return t==="almost"&&(e="takmer"),t==="about"&&(e="približne"),e.length>0?e+" ":""}function l(t){var e="";return t==="lessThan"&&(e="menej než"),t==="over"&&(e="viac než"),e.length>0?e+" ":""}function g(t){return t.charAt(0).toLowerCase()+t.slice(1)}var w={xSeconds:{one:{present:"sekunda",past:"sekundou",future:"sekundu"},twoFour:{present:"{{count}} sekundy",past:"{{count}} sekundami",future:"{{count}} sekundy"},other:{present:"{{count}} sekúnd",past:"{{count}} sekundami",future:"{{count}} sekúnd"}},halfAMinute:{other:{present:"pol minúty",past:"pol minútou",future:"pol minúty"}},xMinutes:{one:{present:"minúta",past:"minútou",future:"minútu"},twoFour:{present:"{{count}} minúty",past:"{{count}} minútami",future:"{{count}} minúty"},other:{present:"{{count}} minút",past:"{{count}} minútami",future:"{{count}} minút"}},xHours:{one:{present:"hodina",past:"hodinou",future:"hodinu"},twoFour:{present:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{present:"{{count}} hodín",past:"{{count}} hodinami",future:"{{count}} hodín"}},xDays:{one:{present:"deň",past:"dňom",future:"deň"},twoFour:{present:"{{count}} dni",past:"{{count}} dňami",future:"{{count}} dni"},other:{present:"{{count}} dní",past:"{{count}} dňami",future:"{{count}} dní"}},xWeeks:{one:{present:"týždeň",past:"týždňom",future:"týždeň"},twoFour:{present:"{{count}} týždne",past:"{{count}} týždňami",future:"{{count}} týždne"},other:{present:"{{count}} týždňov",past:"{{count}} týždňami",future:"{{count}} týždňov"}},xMonths:{one:{present:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{present:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{present:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xYears:{one:{present:"rok",past:"rokom",future:"rok"},twoFour:{present:"{{count}} roky",past:"{{count}} rokmi",future:"{{count}} roky"},other:{present:"{{count}} rokov",past:"{{count}} rokmi",future:"{{count}} rokov"}}},y=function(e,n,r){var a=k(e)||"",o=g(e.substring(a.length)),s=w[o];return r!=null&&r.addSuffix?r.comparison&&r.comparison>0?p(a)+"o "+l(a)+m(s,n,"future"):p(a)+"pred "+l(a)+m(s,n,"past"):p(a)+l(a)+m(s,n,"present")},P={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. M. y",short:"d. M. y"},j={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},M={full:"{{date}}, {{time}}",long:"{{date}}, {{time}}",medium:"{{date}}, {{time}}",short:"{{date}} {{time}}"},W={date:d({formats:P,defaultWidth:"full"}),time:d({formats:j,defaultWidth:"full"}),dateTime:d({formats:M,defaultWidth:"full"})},c=["nedeľu","pondelok","utorok","stredu","štvrtok","piatok","sobotu"];function F(t){var e=c[t];switch(t){case 0:case 3:case 6:return"'minulú "+e+" o' p";default:return"'minulý' eeee 'o' p"}}function v(t){var e=c[t];return t===4?"'vo' eeee 'o' p":"'v "+e+" o' p"}function x(t){var e=c[t];switch(t){case 0:case 4:case 6:return"'budúcu "+e+" o' p";default:return"'budúci' eeee 'o' p"}}var D={lastWeek:function(e,n,r){var a=e.getUTCDay();return f(e,n,r)?v(a):F(a)},yesterday:"'včera o' p",today:"'dnes o' p",tomorrow:"'zajtra o' p",nextWeek:function(e,n,r){var a=e.getUTCDay();return f(e,n,r)?v(a):x(a)},other:"P"},K=function(e,n,r,a){var o=D[e];return typeof o=="function"?o(n,r,a):o},C={narrow:["pred Kr.","po Kr."],abbreviated:["pred Kr.","po Kr."],wide:["pred Kristom","po Kristovi"]},z={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. štvrťrok","2. štvrťrok","3. štvrťrok","4. štvrťrok"]},V={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],wide:["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"]},A={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],wide:["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra"]},L={narrow:["n","p","u","s","š","p","s"],short:["ne","po","ut","st","št","pi","so"],abbreviated:["ne","po","ut","st","št","pi","so"],wide:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"]},T={narrow:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"ráno",afternoon:"pop.",evening:"več.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"ráno",afternoon:"popol.",evening:"večer",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"polnoc",noon:"poludnie",morning:"ráno",afternoon:"popoludnie",evening:"večer",night:"noc"}},E={narrow:{am:"AM",pm:"PM",midnight:"o poln.",noon:"nap.",morning:"ráno",afternoon:"pop.",evening:"več.",night:"v n."},abbreviated:{am:"AM",pm:"PM",midnight:"o poln.",noon:"napol.",morning:"ráno",afternoon:"popol.",evening:"večer",night:"v noci"},wide:{am:"AM",pm:"PM",midnight:"o polnoci",noon:"napoludnie",morning:"ráno",afternoon:"popoludní",evening:"večer",night:"v noci"}},N=function(e,n){var r=Number(e);return r+"."},Q={ordinalNumber:N,era:i({values:C,defaultWidth:"wide"}),quarter:i({values:z,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:i({values:V,defaultWidth:"wide",formattingValues:A,defaultFormattingWidth:"wide"}),day:i({values:L,defaultWidth:"wide"}),dayPeriod:i({values:T,defaultWidth:"wide",formattingValues:E,defaultFormattingWidth:"wide"})},H=/^(\d+)\.?/i,R=/\d+/i,S={narrow:/^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(pred Kristom|pred na[šs][íi]m letopo[čc]tom|po Kristovi|n[áa][šs]ho letopo[čc]tu)/i},q={any:[/^pr/i,/^(po|n)/i]},O={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\. [šs]tvr[ťt]rok/i},U={any:[/1/i,/2/i,/3/i,/4/i]},_={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|m[áa]j|j[úu]n|j[úu]l|aug|sep|okt|nov|dec)/i,wide:/^(janu[áa]ra?|febru[áa]ra?|(marec|marca)|apr[íi]la?|m[áa]ja?|j[úu]na?|j[úu]la?|augusta?|(september|septembra)|(okt[óo]ber|okt[óo]bra)|(november|novembra)|(december|decembra))/i},G={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^m[áa]j/i,/^j[úu]n/i,/^j[úu]l/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},I={narrow:/^[npusšp]/i,short:/^(ne|po|ut|st|št|pi|so)/i,abbreviated:/^(ne|po|ut|st|št|pi|so)/i,wide:/^(nede[ľl]a|pondelok|utorok|streda|[šs]tvrtok|piatok|sobota])/i},Y={narrow:[/^n/i,/^p/i,/^u/i,/^s/i,/^š/i,/^p/i,/^s/i],any:[/^n/i,/^po/i,/^u/i,/^st/i,/^(št|stv)/i,/^pi/i,/^so/i]},B={narrow:/^(am|pm|(o )?poln\.?|(nap\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]\.?|(v n\.?|noc))/i,abbreviated:/^(am|pm|(o )?poln\.?|(napol\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]er|(v )?noci?)/i,any:/^(am|pm|(o )?polnoci?|(na)?poludnie|r[áa]no|popoludn(ie|í|i)|ve[čc]er|(v )?noci?)/i},J={any:{am:/^am/i,pm:/^pm/i,midnight:/poln/i,noon:/^(nap|(na)?pol(\.|u))/i,morning:/^r[áa]no/i,afternoon:/^pop/i,evening:/^ve[čc]/i,night:/^(noc|v n\.)/i}},X={ordinalNumber:h({matchPattern:H,parsePattern:R,valueCallback:function(e){return parseInt(e,10)}}),era:u({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:q,defaultParseWidth:"any"}),quarter:u({matchPatterns:O,defaultMatchWidth:"wide",parsePatterns:U,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:u({matchPatterns:_,defaultMatchWidth:"wide",parsePatterns:G,defaultParseWidth:"any"}),day:u({matchPatterns:I,defaultMatchWidth:"wide",parsePatterns:Y,defaultParseWidth:"any"}),dayPeriod:u({matchPatterns:B,defaultMatchWidth:"any",parsePatterns:J,defaultParseWidth:"any"})},ne={code:"sk",formatDistance:y,formatLong:W,formatRelative:K,localize:Q,match:X,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{ne as default};
//# sourceMappingURL=index.c2d0ea4e.js.map
