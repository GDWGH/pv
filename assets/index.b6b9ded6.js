import{d as u,e as i,f as m,g as d}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.00b1b1e2.js";import"./index.33540638.js";import"./Logo.vue_vue_type_script_setup_true_lang.6e9106c6.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.eea85483.js";import"./use-controllable.37e269db.js";/*! PatchyVideo/Platinum by VoileLabs */var s={lessThanXSeconds:{one:"minder as 'n sekonde",other:"minder as {{count}} sekondes"},xSeconds:{one:"1 sekonde",other:"{{count}} sekondes"},halfAMinute:"'n halwe minuut",lessThanXMinutes:{one:"minder as 'n minuut",other:"minder as {{count}} minute"},xMinutes:{one:"'n minuut",other:"{{count}} minute"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} ure"},xHours:{one:"1 uur",other:"{{count}} ure"},xDays:{one:"1 dag",other:"{{count}} dae"},aboutXWeeks:{one:"ongeveer 1 week",other:"ongeveer {{count}} weke"},xWeeks:{one:"1 week",other:"{{count}} weke"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maande"},xMonths:{one:"1 maand",other:"{{count}} maande"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer as 1 jaar",other:"meer as {{count}} jaar"},almostXYears:{one:"byna 1 jaar",other:"byna {{count}} jaar"}},l=function(a,r,e){var t,o=s[a];return typeof o=="string"?t=o:r===1?t=o.one:t=o.other.replace("{{count}}",String(r)),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"oor "+t:t+" gelede":t},g={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"yyyy/MM/dd"},v={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},h={full:"{{date}} 'om' {{time}}",long:"{{date}} 'om' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},c={date:u({formats:g,defaultWidth:"full"}),time:u({formats:v,defaultWidth:"full"}),dateTime:u({formats:h,defaultWidth:"full"})},f={lastWeek:"'verlede' eeee 'om' p",yesterday:"'gister om' p",today:"'vandag om' p",tomorrow:"'môre om' p",nextWeek:"eeee 'om' p",other:"P"},b=function(a,r,e,t){return f[a]},y={narrow:["vC","nC"],abbreviated:["vC","nC"],wide:["voor Christus","na Christus"]},M={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ste kwartaal","2de kwartaal","3de kwartaal","4de kwartaal"]},w={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des"],wide:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"]},p={narrow:["S","M","D","W","D","V","S"],short:["So","Ma","Di","Wo","Do","Vr","Sa"],abbreviated:["Son","Maa","Din","Woe","Don","Vry","Sat"],wide:["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"]},D={narrow:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"},abbreviated:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"},wide:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"}},P={narrow:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"},abbreviated:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"},wide:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"}},W=function(a){var r=Number(a),e=r%100;if(e<20)switch(e){case 1:case 8:return r+"ste";default:return r+"de"}return r+"ste"},k={ordinalNumber:W,era:i({values:y,defaultWidth:"wide"}),quarter:i({values:M,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:i({values:w,defaultWidth:"wide"}),day:i({values:p,defaultWidth:"wide"}),dayPeriod:i({values:D,defaultWidth:"wide",formattingValues:P,defaultFormattingWidth:"wide"})},S=/^(\d+)(ste|de)?/i,J=/\d+/i,V={narrow:/^([vn]\.? ?C\.?)/,abbreviated:/^([vn]\. ?C\.?)/,wide:/^((voor|na) Christus)/},C={any:[/^v/,/^n/]},F={narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234](st|d)e kwartaal/i},A={any:[/1/i,/2/i,/3/i,/4/i]},N={narrow:/^[jfmasond]/i,abbreviated:/^(Jan|Feb|Mrt|Apr|Mei|Jun|Jul|Aug|Sep|Okt|Nov|Dec)\.?/i,wide:/^(Januarie|Februarie|Maart|April|Mei|Junie|Julie|Augustus|September|Oktober|November|Desember)/i},x={narrow:[/^J/i,/^F/i,/^M/i,/^A/i,/^M/i,/^J/i,/^J/i,/^A/i,/^S/i,/^O/i,/^N/i,/^D/i],any:[/^Jan/i,/^Feb/i,/^Mrt/i,/^Apr/i,/^Mei/i,/^Jun/i,/^Jul/i,/^Aug/i,/^Sep/i,/^Okt/i,/^Nov/i,/^Dec/i]},H={narrow:/^[smdwv]/i,short:/^(So|Ma|Di|Wo|Do|Vr|Sa)/i,abbreviated:/^(Son|Maa|Din|Woe|Don|Vry|Sat)/i,wide:/^(Sondag|Maandag|Dinsdag|Woensdag|Donderdag|Vrydag|Saterdag)/i},O={narrow:[/^S/i,/^M/i,/^D/i,/^W/i,/^D/i,/^V/i,/^S/i],any:[/^So/i,/^Ma/i,/^Di/i,/^Wo/i,/^Do/i,/^Vr/i,/^Sa/i]},j={any:/^(vm|nm|middernag|(?:uur )?die (oggend|middag|aand))/i},z={any:{am:/^vm/i,pm:/^nm/i,midnight:/^middernag/i,noon:/^middaguur/i,morning:/oggend/i,afternoon:/middag/i,evening:/laat middag/i,night:/aand/i}},X={ordinalNumber:m({matchPattern:S,parsePattern:J,valueCallback:function(a){return parseInt(a,10)}}),era:d({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any"}),quarter:d({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:A,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:d({matchPatterns:N,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),day:d({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:O,defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:j,defaultMatchWidth:"any",parsePatterns:z,defaultParseWidth:"any"})},Y={code:"af",formatDistance:l,formatLong:c,formatRelative:b,localize:k,match:X,options:{weekStartsOn:0,firstWeekContainsDate:1}};export{Y as default};
//# sourceMappingURL=index.b6b9ded6.js.map
