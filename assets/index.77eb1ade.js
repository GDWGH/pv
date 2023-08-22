import{d as s,e as o,f as m,g as d}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.e0d2f8c3.js";import"./index.94bf2ab3.js";import"./Logo.vue_vue_type_script_setup_true_lang.5775d52b.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.97a45db7.js";import"./use-controllable.efd2e78a.js";/*! PatchyVideo/Platinum by VoileLabs */var u={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 mês",other:"cerca de {{count}} meses"},xMonths:{one:"1 mês",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}},l=function(a,e,t){var i,r=u[a];return typeof r=="string"?i=r:e===1?i=r.one:i=r.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"em "+i:"há "+i:i},h={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},c={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},f={full:"{{date}} 'às' {{time}}",long:"{{date}} 'às' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},v={date:s({formats:h,defaultWidth:"full"}),time:s({formats:c,defaultWidth:"full"}),dateTime:s({formats:f,defaultWidth:"full"})},b={lastWeek:function(a){var e=a.getUTCDay(),t=e===0||e===6?"último":"última";return"'"+t+"' eeee 'às' p"},yesterday:"'ontem às' p",today:"'hoje às' p",tomorrow:"'amanhã às' p",nextWeek:"eeee 'às' p",other:"P"},g=function(a,e,t,i){var r=b[a];return typeof r=="function"?r(e):r},p={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},P={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},w={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},y={narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sab"],abbreviated:["domingo","segunda","terça","quarta","quinta","sexta","sábado"],wide:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},M={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"}},W={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},j=function(a,e){var t=Number(a);return(e==null?void 0:e.unit)==="week"?t+"ª":t+"º"},q={ordinalNumber:j,era:o({values:p,defaultWidth:"wide"}),quarter:o({values:P,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:o({values:w,defaultWidth:"wide"}),day:o({values:y,defaultWidth:"wide"}),dayPeriod:o({values:M,defaultWidth:"wide",formattingValues:W,defaultFormattingWidth:"wide"})},k=/^(\d+)[ºªo]?/i,x=/\d+/i,D={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},z={any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},C={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},T={any:[/1/i,/2/i,/3/i,/4/i]},H={narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},F={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},S={narrow:/^(dom|[23456]ª?|s[aá]b)/i,short:/^(dom|[23456]ª?|s[aá]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,wide:/^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i},V={short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[aá]b/i]},X={narrow:/^(a|p|mn|md|(da) (manhã|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i},N={any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manhã/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},E={ordinalNumber:m({matchPattern:k,parsePattern:x,valueCallback:function(a){return parseInt(a,10)}}),era:d({matchPatterns:D,defaultMatchWidth:"wide",parsePatterns:z,defaultParseWidth:"any"}),quarter:d({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:T,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:d({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any"}),day:d({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:X,defaultMatchWidth:"any",parsePatterns:N,defaultParseWidth:"any"})},O={code:"pt-BR",formatDistance:l,formatLong:v,formatRelative:g,localize:q,match:E,options:{weekStartsOn:0,firstWeekContainsDate:1}};export{O as default};
//# sourceMappingURL=index.77eb1ade.js.map
