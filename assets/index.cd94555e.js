import{d as m,e as o,f as s,g as d}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.ec264cc5.js";import"./index.52c19682.js";import"./Logo.vue_vue_type_script_setup_true_lang.a5527815.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.7fd85ee5.js";import"./use-controllable.ab434583.js";/*! PatchyVideo/Platinum by VoileLabs */var u={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"aproximadamente 1 hora",other:"aproximadamente {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"aproximadamente 1 semana",other:"aproximadamente {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"aproximadamente 1 mês",other:"aproximadamente {{count}} meses"},xMonths:{one:"1 mês",other:"{{count}} meses"},aboutXYears:{one:"aproximadamente 1 ano",other:"aproximadamente {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}},l=function(a,t,e){var i,r=u[a];return typeof r=="string"?i=r:t===1?i=r.one:i=r.other.replace("{{count}}",String(t)),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"daqui a "+i:"há "+i:i},h={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d 'de' MMM 'de' y",short:"dd/MM/y"},f={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},c={full:"{{date}} 'às' {{time}}",long:"{{date}} 'às' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},v={date:m({formats:h,defaultWidth:"full"}),time:m({formats:f,defaultWidth:"full"}),dateTime:m({formats:c,defaultWidth:"full"})},g={lastWeek:function(a){var t=a.getUTCDay(),e=t===0||t===6?"último":"última";return"'"+e+"' eeee 'às' p"},yesterday:"'ontem às' p",today:"'hoje às' p",tomorrow:"'amanhã às' p",nextWeek:"eeee 'às' p",other:"P"},b=function(a,t,e,i){var r=g[a];return typeof r=="function"?r(t):r},p={narrow:["aC","dC"],abbreviated:["a.C.","d.C."],wide:["antes de Cristo","depois de Cristo"]},P={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},M={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},w={narrow:["d","s","t","q","q","s","s"],short:["dom","seg","ter","qua","qui","sex","sáb"],abbreviated:["dom","seg","ter","qua","qui","sex","sáb"],wide:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},y={narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"noite",night:"madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"noite",night:"madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"noite",night:"madrugada"}},q={narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da noite",night:"da madrugada"}},x=function(a,t){var e=Number(a);return e+"º"},W={ordinalNumber:x,era:o({values:p,defaultWidth:"wide"}),quarter:o({values:P,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:o({values:M,defaultWidth:"wide"}),day:o({values:w,defaultWidth:"wide"}),dayPeriod:o({values:y,defaultWidth:"wide",formattingValues:q,defaultFormattingWidth:"wide"})},j=/^(\d+)(º|ª)?/i,k=/\d+/i,C={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes da era comum|depois de cristo|era comum)/i},D={any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes da era comum)/i,/^(depois de cristo|era comum)/i]},z={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º|ª)? trimestre/i},H={any:[/1/i,/2/i,/3/i,/4/i]},T={narrow:/^[jfmasond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},F={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ab/i,/^mai/i,/^jun/i,/^jul/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},V={narrow:/^[dstq]/i,short:/^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,wide:/^(domingo|segunda-?\s?feira|terça-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[áa]bado)/i},X={narrow:[/^d/i,/^s/i,/^t/i,/^q/i,/^q/i,/^s/i,/^s/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[áa]/i]},A={narrow:/^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i,any:/^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i},N={any:{am:/^a/i,pm:/^p/i,midnight:/^meia/i,noon:/^meio/i,morning:/manh[ãa]/i,afternoon:/tarde/i,evening:/noite/i,night:/madrugada/i}},E={ordinalNumber:s({matchPattern:j,parsePattern:k,valueCallback:function(a){return parseInt(a,10)}}),era:d({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:D,defaultParseWidth:"any"}),quarter:d({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:d({matchPatterns:T,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any"}),day:d({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:A,defaultMatchWidth:"any",parsePatterns:N,defaultParseWidth:"any"})},_={code:"pt",formatDistance:l,formatLong:v,formatRelative:b,localize:W,match:E,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{_ as default};
//# sourceMappingURL=index.cd94555e.js.map
