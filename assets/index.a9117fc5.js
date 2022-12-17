import{d as u,e as i,f as s,g as n}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.9c53ba45.js";import"./index.fa314e4a.js";import"./Logo.vue_vue_type_script_setup_true_lang.d3957fb9.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.4d078bea.js";import"./use-controllable.22714abd.js";/*! PatchyVideo/Platinum by VoileLabs */var l={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXWeeks:{one:"sekitar 1 minggu",other:"sekitar {{count}} minggu"},xWeeks:{one:"1 minggu",other:"{{count}} minggu"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}},d=function(a,m,e){var t,o=l[a];return typeof o=="string"?t=o:m===1?t=o.one:t=o.other.replace("{{count}}",m.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"dalam waktu "+t:t+" yang lalu":t},h={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"d/M/yyyy"},g={full:"HH.mm.ss",long:"HH.mm.ss",medium:"HH.mm",short:"HH.mm"},b={full:"{{date}} 'pukul' {{time}}",long:"{{date}} 'pukul' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},f={date:u({formats:h,defaultWidth:"full"}),time:u({formats:g,defaultWidth:"full"}),dateTime:u({formats:b,defaultWidth:"full"})},v={lastWeek:"eeee 'lalu pukul' p",yesterday:"'Kemarin pukul' p",today:"'Hari ini pukul' p",tomorrow:"'Besok pukul' p",nextWeek:"eeee 'pukul' p",other:"P"},c=function(a,m,e,t){return v[a]},p={narrow:["SM","M"],abbreviated:["SM","M"],wide:["Sebelum Masehi","Masehi"]},k={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["Kuartal ke-1","Kuartal ke-2","Kuartal ke-3","Kuartal ke-4"]},M={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agt","Sep","Okt","Nov","Des"],wide:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]},y={narrow:["M","S","S","R","K","J","S"],short:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],abbreviated:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],wide:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},P={narrow:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},wide:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"}},w={narrow:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},wide:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"}},W=function(a,m){var e=Number(a);return"ke-"+e},j={ordinalNumber:W,era:i({values:p,defaultWidth:"wide"}),quarter:i({values:k,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:i({values:M,defaultWidth:"wide"}),day:i({values:y,defaultWidth:"wide"}),dayPeriod:i({values:P,defaultWidth:"wide",formattingValues:w,defaultFormattingWidth:"wide"})},S=/^ke-(\d+)?/i,D=/\d+/i,K={narrow:/^(sm|m)/i,abbreviated:/^(s\.?\s?m\.?|s\.?\s?e\.?\s?u\.?|m\.?|e\.?\s?u\.?)/i,wide:/^(sebelum masehi|sebelum era umum|masehi|era umum)/i},A={any:[/^s/i,/^(m|e)/i]},J={narrow:/^[1234]/i,abbreviated:/^K-?\s[1234]/i,wide:/^Kuartal ke-?\s?[1234]/i},F={any:[/1/i,/2/i,/3/i,/4/i]},H={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|mei|jun|jul|agt|sep|okt|nov|des)/i,wide:/^(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)/i},x={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^ma/i,/^ap/i,/^me/i,/^jun/i,/^jul/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},N={narrow:/^[srkjm]/i,short:/^(min|sen|sel|rab|kam|jum|sab)/i,abbreviated:/^(min|sen|sel|rab|kam|jum|sab)/i,wide:/^(minggu|senin|selasa|rabu|kamis|jumat|sabtu)/i},R={narrow:[/^m/i,/^s/i,/^s/i,/^r/i,/^k/i,/^j/i,/^s/i],any:[/^m/i,/^sen/i,/^sel/i,/^r/i,/^k/i,/^j/i,/^sa/i]},V={narrow:/^(a|p|tengah m|tengah h|(di(\swaktu)?) (pagi|siang|sore|malam))/i,any:/^([ap]\.?\s?m\.?|tengah malam|tengah hari|(di(\swaktu)?) (pagi|siang|sore|malam))/i},X={any:{am:/^a/i,pm:/^pm/i,midnight:/^tengah m/i,noon:/^tengah h/i,morning:/pagi/i,afternoon:/siang/i,evening:/sore/i,night:/malam/i}},C={ordinalNumber:s({matchPattern:S,parsePattern:D,valueCallback:function(a){return parseInt(a,10)}}),era:n({matchPatterns:K,defaultMatchWidth:"wide",parsePatterns:A,defaultParseWidth:"any"}),quarter:n({matchPatterns:J,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:n({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),day:n({matchPatterns:N,defaultMatchWidth:"wide",parsePatterns:R,defaultParseWidth:"any"}),dayPeriod:n({matchPatterns:V,defaultMatchWidth:"any",parsePatterns:X,defaultParseWidth:"any"})},_={code:"id",formatDistance:d,formatLong:f,formatRelative:c,localize:j,match:C,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{_ as default};
//# sourceMappingURL=index.a9117fc5.js.map
