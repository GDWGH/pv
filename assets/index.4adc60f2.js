import{d as m,e as i,f as h,g as s}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.164caab7.js";import"./index.1c5054d5.js";import"./Logo.vue_vue_type_script_setup_true_lang.35611309.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.0fd2b122.js";import"./use-controllable.eacbcade.js";/*! PatchyVideo/Platinum by VoileLabs */var l={lessThanXSeconds:{standalone:{one:"manner wéi eng Sekonn",other:"manner wéi {{count}} Sekonnen"},withPreposition:{one:"manner wéi enger Sekonn",other:"manner wéi {{count}} Sekonnen"}},xSeconds:{standalone:{one:"eng Sekonn",other:"{{count}} Sekonnen"},withPreposition:{one:"enger Sekonn",other:"{{count}} Sekonnen"}},halfAMinute:{standalone:"eng hallef Minutt",withPreposition:"enger hallwer Minutt"},lessThanXMinutes:{standalone:{one:"manner wéi eng Minutt",other:"manner wéi {{count}} Minutten"},withPreposition:{one:"manner wéi enger Minutt",other:"manner wéi {{count}} Minutten"}},xMinutes:{standalone:{one:"eng Minutt",other:"{{count}} Minutten"},withPreposition:{one:"enger Minutt",other:"{{count}} Minutten"}},aboutXHours:{standalone:{one:"ongeféier eng Stonn",other:"ongeféier {{count}} Stonnen"},withPreposition:{one:"ongeféier enger Stonn",other:"ongeféier {{count}} Stonnen"}},xHours:{standalone:{one:"eng Stonn",other:"{{count}} Stonnen"},withPreposition:{one:"enger Stonn",other:"{{count}} Stonnen"}},xDays:{standalone:{one:"een Dag",other:"{{count}} Deeg"},withPreposition:{one:"engem Dag",other:"{{count}} Deeg"}},aboutXWeeks:{standalone:{one:"ongeféier eng Woch",other:"ongeféier {{count}} Wochen"},withPreposition:{one:"ongeféier enger Woche",other:"ongeféier {{count}} Wochen"}},xWeeks:{standalone:{one:"eng Woch",other:"{{count}} Wochen"},withPreposition:{one:"enger Woch",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"ongeféier ee Mount",other:"ongeféier {{count}} Méint"},withPreposition:{one:"ongeféier engem Mount",other:"ongeféier {{count}} Méint"}},xMonths:{standalone:{one:"ee Mount",other:"{{count}} Méint"},withPreposition:{one:"engem Mount",other:"{{count}} Méint"}},aboutXYears:{standalone:{one:"ongeféier ee Joer",other:"ongeféier {{count}} Joer"},withPreposition:{one:"ongeféier engem Joer",other:"ongeféier {{count}} Joer"}},xYears:{standalone:{one:"ee Joer",other:"{{count}} Joer"},withPreposition:{one:"engem Joer",other:"{{count}} Joer"}},overXYears:{standalone:{one:"méi wéi ee Joer",other:"méi wéi {{count}} Joer"},withPreposition:{one:"méi wéi engem Joer",other:"méi wéi {{count}} Joer"}},almostXYears:{standalone:{one:"bal ee Joer",other:"bal {{count}} Joer"},withPreposition:{one:"bal engem Joer",other:"bal {{count}} Joer"}}},c=["d","h","n","t","z"],g=["a,","e","i","o","u"],f=[0,1,2,3,8,9],v=[40,50,60,70];function d(r){var t=r.charAt(0).toLowerCase();if(g.indexOf(t)!=-1||c.indexOf(t)!=-1)return!0;var n=r.split(" ")[0],e=parseInt(n);return!isNaN(e)&&f.indexOf(e%10)!=-1&&v.indexOf(parseInt(n.substring(0,2)))==-1}var w=function(t,n,e){var o,a=l[t],u=e!=null&&e.addSuffix?a.withPreposition:a.standalone;return typeof u=="string"?o=u:n===1?o=u.one:o=u.other.replace("{{count}}",String(n)),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"a"+(d(o)?"n":"")+" "+o:"viru"+(d(o)?"n":"")+" "+o:o},M={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.yy"},b={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},p={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},P={date:m({formats:M,defaultWidth:"full"}),time:m({formats:b,defaultWidth:"full"}),dateTime:m({formats:p,defaultWidth:"full"})},S={lastWeek:function(t){var n=t.getUTCDay(),e="'läschte";return(n===2||n===4)&&(e+="n"),e+="' eeee 'um' p",e},yesterday:"'gëschter um' p",today:"'haut um' p",tomorrow:"'moien um' p",nextWeek:"eeee 'um' p",other:"P"},W=function(t,n,e,o){var a=S[t];return typeof a=="function"?a(n):a},y={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["viru Christus","no Christus"]},D={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},N={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mäe","Abr","Mee","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","Mäerz","Abrëll","Mee","Juni","Juli","August","September","Oktober","November","Dezember"]},k={narrow:["S","M","D","M","D","F","S"],short:["So","Mé","Dë","Më","Do","Fr","Sa"],abbreviated:["So.","Mé.","Dë.","Më.","Do.","Fr.","Sa."],wide:["Sonndeg","Méindeg","Dënschdeg","Mëttwoch","Donneschdeg","Freideg","Samschdeg"]},J={narrow:{am:"mo.",pm:"nomë.",midnight:"Mëtternuecht",noon:"Mëtteg",morning:"Moien",afternoon:"Nomëtteg",evening:"Owend",night:"Nuecht"},abbreviated:{am:"moies",pm:"nomëttes",midnight:"Mëtternuecht",noon:"Mëtteg",morning:"Moien",afternoon:"Nomëtteg",evening:"Owend",night:"Nuecht"},wide:{am:"moies",pm:"nomëttes",midnight:"Mëtternuecht",noon:"Mëtteg",morning:"Moien",afternoon:"Nomëtteg",evening:"Owend",night:"Nuecht"}},C={narrow:{am:"mo.",pm:"nom.",midnight:"Mëtternuecht",noon:"mëttes",morning:"moies",afternoon:"nomëttes",evening:"owes",night:"nuets"},abbreviated:{am:"moies",pm:"nomëttes",midnight:"Mëtternuecht",noon:"mëttes",morning:"moies",afternoon:"nomëttes",evening:"owes",night:"nuets"},wide:{am:"moies",pm:"nomëttes",midnight:"Mëtternuecht",noon:"mëttes",morning:"moies",afternoon:"nomëttes",evening:"owes",night:"nuets"}},O=function(t,n){var e=Number(t);return e+"."},F={ordinalNumber:O,era:i({values:y,defaultWidth:"wide"}),quarter:i({values:D,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:i({values:N,defaultWidth:"wide"}),day:i({values:k,defaultWidth:"wide"}),dayPeriod:i({values:J,defaultWidth:"wide",formattingValues:C,defaultFormattingWidth:"wide"})},E=/^(\d+)(\.)?/i,z=/\d+/i,x={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(viru Christus|virun eiser Zäitrechnung|no Christus|eiser Zäitrechnung)/i},j={any:[/^v/i,/^n/i]},_={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},Q={any:[/1/i,/2/i,/3/i,/4/i]},T={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mäe|abr|mee|jun|jul|aug|sep|okt|nov|dez)/i,wide:/^(januar|februar|mäerz|abrëll|mee|juni|juli|august|september|oktober|november|dezember)/i},H={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mä/i,/^ab/i,/^me/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},A={narrow:/^[smdf]/i,short:/^(so|mé|dë|më|do|fr|sa)/i,abbreviated:/^(son?|méi?|dën?|mët?|don?|fre?|sam?)\.?/i,wide:/^(sonndeg|méindeg|dënschdeg|mëttwoch|donneschdeg|freideg|samschdeg)/i},I={any:[/^so/i,/^mé/i,/^dë/i,/^më/i,/^do/i,/^f/i,/^sa/i]},L={narrow:/^(mo\.?|nomë\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i,abbreviated:/^(moi\.?|nomët\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i,wide:/^(moies|nomëttes|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i},V={any:{am:/^m/i,pm:/^n/i,midnight:/^Mëtter/i,noon:/^mëttes/i,morning:/moies/i,afternoon:/nomëttes/i,evening:/owes/i,night:/nuets/i}},X={ordinalNumber:h({matchPattern:E,parsePattern:z,valueCallback:function(t){return parseInt(t,10)}}),era:s({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:j,defaultParseWidth:"any"}),quarter:s({matchPatterns:_,defaultMatchWidth:"wide",parsePatterns:Q,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:s({matchPatterns:T,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any"}),day:s({matchPatterns:A,defaultMatchWidth:"wide",parsePatterns:I,defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:L,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any"})},Z={code:"lb",formatDistance:w,formatLong:P,formatRelative:W,localize:F,match:X,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{Z as default};
//# sourceMappingURL=index.4adc60f2.js.map
