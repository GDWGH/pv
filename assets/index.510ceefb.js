import{d as u,e as r,f as s,g as n}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.40a0a7cd.js";import"./index.3f81edfd.js";import"./Logo.vue_vue_type_script_setup_true_lang.c4052b27.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.153f8267.js";import"./use-controllable.bea814f3.js";/*! PatchyVideo/Platinum by VoileLabs */var h={lessThanXSeconds:{one:"kurang dari 1 saat",other:"kurang dari {{count}} saat"},xSeconds:{one:"1 saat",other:"{{count}} saat"},halfAMinute:"setengah minit",lessThanXMinutes:{one:"kurang dari 1 minit",other:"kurang dari {{count}} minit"},xMinutes:{one:"1 minit",other:"{{count}} minit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXWeeks:{one:"sekitar 1 minggu",other:"sekitar {{count}} minggu"},xWeeks:{one:"1 minggu",other:"{{count}} minggu"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}},d=function(a,m,t){var e,o=h[a];return typeof o=="string"?e=o:m===1?e=o.one:e=o.other.replace("{{count}}",String(m)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"dalam masa "+e:e+" yang lalu":e},l={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"d/M/yyyy"},g={full:"HH.mm.ss",long:"HH.mm.ss",medium:"HH.mm",short:"HH.mm"},p={full:"{{date}} 'pukul' {{time}}",long:"{{date}} 'pukul' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},b={date:u({formats:l,defaultWidth:"full"}),time:u({formats:g,defaultWidth:"full"}),dateTime:u({formats:p,defaultWidth:"full"})},f={lastWeek:"eeee 'lepas pada jam' p",yesterday:"'Semalam pada jam' p",today:"'Hari ini pada jam' p",tomorrow:"'Esok pada jam' p",nextWeek:"eeee 'pada jam' p",other:"P"},c=function(a,m,t,e){return f[a]},v={narrow:["SM","M"],abbreviated:["SM","M"],wide:["Sebelum Masihi","Masihi"]},k={narrow:["1","2","3","4"],abbreviated:["S1","S2","S3","S4"],wide:["Suku pertama","Suku kedua","Suku ketiga","Suku keempat"]},y={narrow:["J","F","M","A","M","J","J","O","S","O","N","D"],abbreviated:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogo","Sep","Okt","Nov","Dis"],wide:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"]},M={narrow:["A","I","S","R","K","J","S"],short:["Ahd","Isn","Sel","Rab","Kha","Jum","Sab"],abbreviated:["Ahd","Isn","Sel","Rab","Kha","Jum","Sab"],wide:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"]},P={narrow:{am:"am",pm:"pm",midnight:"tgh malam",noon:"tgh hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},wide:{am:"a.m.",pm:"p.m.",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"}},w={narrow:{am:"am",pm:"pm",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},wide:{am:"a.m.",pm:"p.m.",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"}},S=function(a,m){return"ke-"+Number(a)},j={ordinalNumber:S,era:r({values:v,defaultWidth:"wide"}),quarter:r({values:k,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:r({values:y,defaultWidth:"wide"}),day:r({values:M,defaultWidth:"wide"}),dayPeriod:r({values:P,defaultWidth:"wide",formattingValues:w,defaultFormattingWidth:"wide"})},W=/^ke-(\d+)?/i,D=/petama|\d+/i,J={narrow:/^(sm|m)/i,abbreviated:/^(s\.?\s?m\.?|m\.?)/i,wide:/^(sebelum masihi|masihi)/i},F={any:[/^s/i,/^(m)/i]},H={narrow:/^[1234]/i,abbreviated:/^S[1234]/i,wide:/Suku (pertama|kedua|ketiga|keempat)/i},x={any:[/pertama|1/i,/kedua|2/i,/ketiga|3/i,/keempat|4/i]},A={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mac|apr|mei|jun|jul|ogo|sep|okt|nov|dis)/i,wide:/^(januari|februari|mac|april|mei|jun|julai|ogos|september|oktober|november|disember)/i},N={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^o/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^ma/i,/^ap/i,/^me/i,/^jun/i,/^jul/i,/^og/i,/^s/i,/^ok/i,/^n/i,/^d/i]},O={narrow:/^[aisrkj]/i,short:/^(ahd|isn|sel|rab|kha|jum|sab)/i,abbreviated:/^(ahd|isn|sel|rab|kha|jum|sab)/i,wide:/^(ahad|isnin|selasa|rabu|khamis|jumaat|sabtu)/i},R={narrow:[/^a/i,/^i/i,/^s/i,/^r/i,/^k/i,/^j/i,/^s/i],any:[/^a/i,/^i/i,/^se/i,/^r/i,/^k/i,/^j/i,/^sa/i]},V={narrow:/^(am|pm|tengah malam|tengah hari|pagi|petang|malam)/i,any:/^([ap]\.?\s?m\.?|tengah malam|tengah hari|pagi|petang|malam)/i},X={any:{am:/^a/i,pm:/^pm/i,midnight:/^tengah m/i,noon:/^tengah h/i,morning:/pa/i,afternoon:/tengah h/i,evening:/pe/i,night:/m/i}},C={ordinalNumber:s({matchPattern:W,parsePattern:D,valueCallback:function(a){return parseInt(a,10)}}),era:n({matchPatterns:J,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any"}),quarter:n({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:n({matchPatterns:A,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any"}),day:n({matchPatterns:O,defaultMatchWidth:"wide",parsePatterns:R,defaultParseWidth:"any"}),dayPeriod:n({matchPatterns:V,defaultMatchWidth:"any",parsePatterns:X,defaultParseWidth:"any"})},Y={code:"ms",formatDistance:d,formatLong:b,formatRelative:c,localize:j,match:C,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{Y as default};
//# sourceMappingURL=index.510ceefb.js.map
