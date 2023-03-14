import{d,e as r,f as h,g as i}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.06953ac1.js";import"./index.08303f26.js";import"./Logo.vue_vue_type_script_setup_true_lang.bc18fe84.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.b28633bb.js";import"./use-controllable.647a9f0c.js";/*! PatchyVideo/Platinum by VoileLabs */var s={lessThanXSeconds:{one:"sekunddan kam",other:"{{count}} sekunddan kam"},xSeconds:{one:"1 sekund",other:"{{count}} sekund"},halfAMinute:"yarim minut",lessThanXMinutes:{one:"bir minutdan kam",other:"{{count}} minutdan kam"},xMinutes:{one:"1 minut",other:"{{count}} minut"},aboutXHours:{one:"tahminan 1 soat",other:"tahminan {{count}} soat"},xHours:{one:"1 soat",other:"{{count}} soat"},xDays:{one:"1 kun",other:"{{count}} kun"},aboutXWeeks:{one:"tahminan 1 hafta",other:"tahminan {{count}} hafta"},xWeeks:{one:"1 hafta",other:"{{count}} hafta"},aboutXMonths:{one:"tahminan 1 oy",other:"tahminan {{count}} oy"},xMonths:{one:"1 oy",other:"{{count}} oy"},aboutXYears:{one:"tahminan 1 yil",other:"tahminan {{count}} yil"},xYears:{one:"1 yil",other:"{{count}} yil"},overXYears:{one:"1 yildan ko'p",other:"{{count}} yildan ko'p"},almostXYears:{one:"deyarli 1 yil",other:"deyarli {{count}} yil"}},m=function(a,o,t){var e,u=s[a];return typeof u=="string"?e=u:o===1?e=u.one:e=u.other.replace("{{count}}",String(o)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?e+" dan keyin":e+" oldin":e},l={full:"EEEE, do MMMM, y",long:"do MMMM, y",medium:"d MMM, y",short:"dd/MM/yyyy"},y={full:"h:mm:ss zzzz",long:"h:mm:ss z",medium:"h:mm:ss",short:"h:mm"},c={any:"{{date}}, {{time}}"},v={date:d({formats:l,defaultWidth:"full"}),time:d({formats:y,defaultWidth:"full"}),dateTime:d({formats:c,defaultWidth:"any"})},b={lastWeek:"'oldingi' eeee p 'da'",yesterday:"'kecha' p 'da'",today:"'bugun' p 'da'",tomorrow:"'ertaga' p 'da'",nextWeek:"eeee p 'da'",other:"P"},f=function(a,o,t,e){return b[a]},k={narrow:["M.A","M."],abbreviated:["M.A","M."],wide:["Miloddan Avvalgi","Milodiy"]},p={narrow:["1","2","3","4"],abbreviated:["CH.1","CH.2","CH.3","CH.4"],wide:["1-chi chorak","2-chi chorak","3-chi chorak","4-chi chorak"]},g={narrow:["Y","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["Yan","Fev","Mar","Apr","May","Iyun","Iyul","Avg","Sen","Okt","Noy","Dek"],wide:["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"]},M={narrow:["Y","D","S","CH","P","J","SH"],short:["Ya","Du","Se","Cho","Pa","Ju","Sha"],abbreviated:["Yak","Dush","Sesh","Chor","Pay","Jum","Shan"],wide:["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"]},P={narrow:{am:"a",pm:"p",midnight:"y.t",noon:"p.",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},abbreviated:{am:"AM",pm:"PM",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},wide:{am:"a.m.",pm:"p.m.",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"}},w={narrow:{am:"a",pm:"p",midnight:"y.t",noon:"p.",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},abbreviated:{am:"AM",pm:"PM",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},wide:{am:"a.m.",pm:"p.m.",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"}},W=function(a,o){return String(a)},D={ordinalNumber:W,era:r({values:k,defaultWidth:"wide"}),quarter:r({values:p,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:r({values:g,defaultWidth:"wide"}),day:r({values:M,defaultWidth:"wide"}),dayPeriod:r({values:P,defaultWidth:"wide",formattingValues:w,defaultFormattingWidth:"wide"})},S=/^(\d+)(chi)?/i,C=/\d+/i,q={narrow:/^(m\.a|m\.)/i,abbreviated:/^(m\.a\.?\s?m\.?)/i,wide:/^(miloddan avval|miloddan keyin)/i},A={any:[/^b/i,/^(a|c)/i]},F={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](chi)? chorak/i},Y={any:[/1/i,/2/i,/3/i,/4/i]},x={narrow:/^[yfmasond]/i,abbreviated:/^(yan|fev|mar|apr|may|iyun|iyul|avg|sen|okt|noy|dek)/i,wide:/^(yanvar|fevral|mart|aprel|may|iyun|iyul|avgust|sentabr|oktabr|noyabr|dekabr)/i},z={narrow:[/^y/i,/^f/i,/^m/i,/^a/i,/^m/i,/^i/i,/^i/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ya/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^iyun/i,/^iyul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i]},N={narrow:/^[ydschj]/i,short:/^(ya|du|se|cho|pa|ju|sha)/i,abbreviated:/^(yak|dush|sesh|chor|pay|jum|shan)/i,wide:/^(yakshanba|dushanba|seshanba|chorshanba|payshanba|juma|shanba)/i},H={narrow:[/^y/i,/^d/i,/^s/i,/^ch/i,/^p/i,/^j/i,/^sh/i],any:[/^ya/i,/^d/i,/^se/i,/^ch/i,/^p/i,/^j/i,/^sh/i]},V={narrow:/^(a|p|y\.t|p| (ertalab|tushdan keyin|kechqurun|tun))/i,any:/^([ap]\.?\s?m\.?|yarim tun|peshin| (ertalab|tushdan keyin|kechqurun|tun))/i},X={any:{am:/^a/i,pm:/^p/i,midnight:/^y\.t/i,noon:/^pe/i,morning:/ertalab/i,afternoon:/tushdan keyin/i,evening:/kechqurun/i,night:/tun/i}},I={ordinalNumber:h({matchPattern:S,parsePattern:C,valueCallback:function(a){return parseInt(a,10)}}),era:i({matchPatterns:q,defaultMatchWidth:"wide",parsePatterns:A,defaultParseWidth:"any"}),quarter:i({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:Y,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:i({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:z,defaultParseWidth:"any"}),day:i({matchPatterns:N,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any"}),dayPeriod:i({matchPatterns:V,defaultMatchWidth:"any",parsePatterns:X,defaultParseWidth:"any"})},R={code:"uz",formatDistance:m,formatLong:v,formatRelative:f,localize:D,match:I,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{R as default};
//# sourceMappingURL=index.2a4b3005.js.map
