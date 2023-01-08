import{d as o,e as s,f as p,g as d}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.7c769f40.js";import{i as u}from"./index.b9e491c0.js";import"./index.c02e7f9b.js";import"./Logo.vue_vue_type_script_setup_true_lang.57b0375f.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.6e20366b.js";import"./use-controllable.95a8e093.js";/*! PatchyVideo/Platinum by VoileLabs */function r(a){return function(e,t){if(e===1)return t!=null&&t.addSuffix?a.one[0].replace("{{time}}",a.one[2]):a.one[0].replace("{{time}}",a.one[1]);var i=e%10===1&&e%100!==11;return t!=null&&t.addSuffix?a.other[0].replace("{{time}}",i?a.other[3]:a.other[4]).replace("{{count}}",String(e)):a.other[0].replace("{{time}}",i?a.other[1]:a.other[2]).replace("{{count}}",String(e))}}var v={lessThanXSeconds:r({one:["mazāk par {{time}}","sekundi","sekundi"],other:["mazāk nekā {{count}} {{time}}","sekunde","sekundes","sekundes","sekundēm"]}),xSeconds:r({one:["1 {{time}}","sekunde","sekundes"],other:["{{count}} {{time}}","sekunde","sekundes","sekundes","sekundēm"]}),halfAMinute:function(e,t){return t!=null&&t.addSuffix?"pusminūtes":"pusminūte"},lessThanXMinutes:r({one:["mazāk par {{time}}","minūti","minūti"],other:["mazāk nekā {{count}} {{time}}","minūte","minūtes","minūtes","minūtēm"]}),xMinutes:r({one:["1 {{time}}","minūte","minūtes"],other:["{{count}} {{time}}","minūte","minūtes","minūtes","minūtēm"]}),aboutXHours:r({one:["apmēram 1 {{time}}","stunda","stundas"],other:["apmēram {{count}} {{time}}","stunda","stundas","stundas","stundām"]}),xHours:r({one:["1 {{time}}","stunda","stundas"],other:["{{count}} {{time}}","stunda","stundas","stundas","stundām"]}),xDays:r({one:["1 {{time}}","diena","dienas"],other:["{{count}} {{time}}","diena","dienas","dienas","dienām"]}),aboutXWeeks:r({one:["apmēram 1 {{time}}","nedēļa","nedēļas"],other:["apmēram {{count}} {{time}}","nedēļa","nedēļu","nedēļas","nedēļām"]}),xWeeks:r({one:["1 {{time}}","nedēļa","nedēļas"],other:["{{count}} {{time}}","nedēļa","nedēļu","nedēļas","nedēļām"]}),aboutXMonths:r({one:["apmēram 1 {{time}}","mēnesis","mēneša"],other:["apmēram {{count}} {{time}}","mēnesis","mēneši","mēneša","mēnešiem"]}),xMonths:r({one:["1 {{time}}","mēnesis","mēneša"],other:["{{count}} {{time}}","mēnesis","mēneši","mēneša","mēnešiem"]}),aboutXYears:r({one:["apmēram 1 {{time}}","gads","gada"],other:["apmēram {{count}} {{time}}","gads","gadi","gada","gadiem"]}),xYears:r({one:["1 {{time}}","gads","gada"],other:["{{count}} {{time}}","gads","gadi","gada","gadiem"]}),overXYears:r({one:["ilgāk par 1 {{time}}","gadu","gadu"],other:["vairāk nekā {{count}} {{time}}","gads","gadi","gada","gadiem"]}),almostXYears:r({one:["gandrīz 1 {{time}}","gads","gada"],other:["vairāk nekā {{count}} {{time}}","gads","gadi","gada","gadiem"]})},c=function(e,t,i){var n=v[e](t,i);return i!=null&&i.addSuffix?i.comparison&&i.comparison>0?"pēc "+n:"pirms "+n:n},f={full:"EEEE, y. 'gada' d. MMMM",long:"y. 'gada' d. MMMM",medium:"dd.MM.y.",short:"dd.MM.y."},k={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},g={full:"{{date}} 'plkst.' {{time}}",long:"{{date}} 'plkst.' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},h={date:o({formats:f,defaultWidth:"full"}),time:o({formats:k,defaultWidth:"full"}),dateTime:o({formats:g,defaultWidth:"full"})},l=["svētdienā","pirmdienā","otrdienā","trešdienā","ceturtdienā","piektdienā","sestdienā"],b={lastWeek:function(e,t,i){if(u(e,t,i))return"eeee 'plkst.' p";var n=l[e.getUTCDay()];return"'Pagājušā "+n+" plkst.' p"},yesterday:"'Vakar plkst.' p",today:"'Šodien plkst.' p",tomorrow:"'Rīt plkst.' p",nextWeek:function(e,t,i){if(u(e,t,i))return"eeee 'plkst.' p";var n=l[e.getUTCDay()];return"'Nākamajā "+n+" plkst.' p"},other:"P"},w=function(e,t,i,n){var m=b[e];return typeof m=="function"?m(t,i,n):m},j={narrow:["p.m.ē","m.ē"],abbreviated:["p. m. ē.","m. ē."],wide:["pirms mūsu ēras","mūsu ērā"]},P={narrow:["1","2","3","4"],abbreviated:["1. cet.","2. cet.","3. cet.","4. cet."],wide:["pirmais ceturksnis","otrais ceturksnis","trešais ceturksnis","ceturtais ceturksnis"]},y={narrow:["1","2","3","4"],abbreviated:["1. cet.","2. cet.","3. cet.","4. cet."],wide:["pirmajā ceturksnī","otrajā ceturksnī","trešajā ceturksnī","ceturtajā ceturksnī"]},M={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","febr.","marts","apr.","maijs","jūn.","jūl.","aug.","sept.","okt.","nov.","dec."],wide:["janvāris","februāris","marts","aprīlis","maijs","jūnijs","jūlijs","augusts","septembris","oktobris","novembris","decembris"]},W={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","febr.","martā","apr.","maijs","jūn.","jūl.","aug.","sept.","okt.","nov.","dec."],wide:["janvārī","februārī","martā","aprīlī","maijā","jūnijā","jūlijā","augustā","septembrī","oktobrī","novembrī","decembrī"]},S={narrow:["S","P","O","T","C","P","S"],short:["Sv","P","O","T","C","Pk","S"],abbreviated:["svētd.","pirmd.","otrd.","trešd.","ceturtd.","piektd.","sestd."],wide:["svētdiena","pirmdiena","otrdiena","trešdiena","ceturtdiena","piektdiena","sestdiena"]},D={narrow:["S","P","O","T","C","P","S"],short:["Sv","P","O","T","C","Pk","S"],abbreviated:["svētd.","pirmd.","otrd.","trešd.","ceturtd.","piektd.","sestd."],wide:["svētdienā","pirmdienā","otrdienā","trešdienā","ceturtdienā","piektdienā","sestdienā"]},F={narrow:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"rīts",afternoon:"diena",evening:"vakars",night:"nakts"},abbreviated:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"rīts",afternoon:"pēcpusd.",evening:"vakars",night:"nakts"},wide:{am:"am",pm:"pm",midnight:"pusnakts",noon:"pusdienlaiks",morning:"rīts",afternoon:"pēcpusdiena",evening:"vakars",night:"nakts"}},x={narrow:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"rītā",afternoon:"dienā",evening:"vakarā",night:"naktī"},abbreviated:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"rītā",afternoon:"pēcpusd.",evening:"vakarā",night:"naktī"},wide:{am:"am",pm:"pm",midnight:"pusnaktī",noon:"pusdienlaikā",morning:"rītā",afternoon:"pēcpusdienā",evening:"vakarā",night:"naktī"}},z=function(e,t){var i=Number(e);return i+"."},C={ordinalNumber:z,era:s({values:j,defaultWidth:"wide"}),quarter:s({values:P,defaultWidth:"wide",formattingValues:y,defaultFormattingWidth:"wide",argumentCallback:function(e){return e-1}}),month:s({values:M,defaultWidth:"wide",formattingValues:W,defaultFormattingWidth:"wide"}),day:s({values:S,defaultWidth:"wide",formattingValues:D,defaultFormattingWidth:"wide"}),dayPeriod:s({values:F,defaultWidth:"wide",formattingValues:x,defaultFormattingWidth:"wide"})},V=/^(\d+)\./i,T=/\d+/i,H={narrow:/^(p\.m\.ē|m\.ē)/i,abbreviated:/^(p\. m\. ē\.|m\. ē\.)/i,wide:/^(pirms mūsu ēras|mūsu ērā)/i},N={any:[/^p/i,/^m/i]},O={narrow:/^[1234]/i,abbreviated:/^[1234](\. cet\.)/i,wide:/^(pirma(is|jā)|otra(is|jā)|treša(is|jā)|ceturta(is|jā)) ceturksn(is|ī)/i},X={narrow:[/^1/i,/^2/i,/^3/i,/^4/i],abbreviated:[/^1/i,/^2/i,/^3/i,/^4/i],wide:[/^p/i,/^o/i,/^t/i,/^c/i]},L={narrow:/^[jfmasond]/i,abbreviated:/^(janv\.|febr\.|marts|apr\.|maijs|jūn\.|jūl\.|aug\.|sept\.|okt\.|nov\.|dec\.)/i,wide:/^(janvār(is|ī)|februār(is|ī)|mart[sā]|aprīl(is|ī)|maij[sā]|jūnij[sā]|jūlij[sā]|august[sā]|septembr(is|ī)|oktobr(is|ī)|novembr(is|ī)|decembr(is|ī))/i},A={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jūn/i,/^jūl/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},E={narrow:/^[spotc]/i,short:/^(sv|pi|o|t|c|pk|s)/i,abbreviated:/^(svētd\.|pirmd\.|otrd.\|trešd\.|ceturtd\.|piektd\.|sestd\.)/i,wide:/^(svētdien(a|ā)|pirmdien(a|ā)|otrdien(a|ā)|trešdien(a|ā)|ceturtdien(a|ā)|piektdien(a|ā)|sestdien(a|ā))/i},J={narrow:[/^s/i,/^p/i,/^o/i,/^t/i,/^c/i,/^p/i,/^s/i],any:[/^sv/i,/^pi/i,/^o/i,/^t/i,/^c/i,/^p/i,/^se/i]},R={narrow:/^(am|pm|pusn\.|pusd\.|rīt(s|ā)|dien(a|ā)|vakar(s|ā)|nakt(s|ī))/,abbreviated:/^(am|pm|pusn\.|pusd\.|rīt(s|ā)|pēcpusd\.|vakar(s|ā)|nakt(s|ī))/,wide:/^(am|pm|pusnakt(s|ī)|pusdienlaik(s|ā)|rīt(s|ā)|pēcpusdien(a|ā)|vakar(s|ā)|nakt(s|ī))/i},Y={any:{am:/^am/i,pm:/^pm/i,midnight:/^pusn/i,noon:/^pusd/i,morning:/^r/i,afternoon:/^(d|pēc)/i,evening:/^v/i,night:/^n/i}},q={ordinalNumber:p({matchPattern:V,parsePattern:T,valueCallback:function(e){return parseInt(e,10)}}),era:d({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any"}),quarter:d({matchPatterns:O,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"wide",valueCallback:function(e){return e+1}}),month:d({matchPatterns:L,defaultMatchWidth:"wide",parsePatterns:A,defaultParseWidth:"any"}),day:d({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:J,defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:R,defaultMatchWidth:"wide",parsePatterns:Y,defaultParseWidth:"any"})},K={code:"lv",formatDistance:c,formatLong:h,formatRelative:w,localize:C,match:q,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{K as default};
//# sourceMappingURL=index.56e5547c.js.map
