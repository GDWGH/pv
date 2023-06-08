import{d as l,e as n,f as m,g as i}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.fcb3a685.js";import"./index.0c820647.js";import"./Logo.vue_vue_type_script_setup_true_lang.84f46bde.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.d38a1d75.js";import"./use-controllable.3da68426.js";/*! PatchyVideo/Platinum by VoileLabs */var d={lessThanXSeconds:{one:"bir saniyeden az",other:"{{count}} saniyeden az"},xSeconds:{one:"1 saniye",other:"{{count}} saniye"},halfAMinute:"yarım dakika",lessThanXMinutes:{one:"bir dakikadan az",other:"{{count}} dakikadan az"},xMinutes:{one:"1 dakika",other:"{{count}} dakika"},aboutXHours:{one:"yaklaşık 1 saat",other:"yaklaşık {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 gün",other:"{{count}} gün"},aboutXWeeks:{one:"yaklaşık 1 hafta",other:"yaklaşık {{count}} hafta"},xWeeks:{one:"1 hafta",other:"{{count}} hafta"},aboutXMonths:{one:"yaklaşık 1 ay",other:"yaklaşık {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"yaklaşık 1 yıl",other:"yaklaşık {{count}} yıl"},xYears:{one:"1 yıl",other:"{{count}} yıl"},overXYears:{one:"1 yıldan fazla",other:"{{count}} yıldan fazla"},almostXYears:{one:"neredeyse 1 yıl",other:"neredeyse {{count}} yıl"}},u=function(a,o,e){var t,s=d[a];return typeof s=="string"?t=s:o===1?t=s.one:t=s.other.replace("{{count}}",o.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?t+" sonra":t+" önce":t},c={full:"d MMMM y EEEE",long:"d MMMM y",medium:"d MMM y",short:"dd.MM.yyyy"},h={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},y={full:"{{date}} 'saat' {{time}}",long:"{{date}} 'saat' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},k={date:l({formats:c,defaultWidth:"full"}),time:l({formats:h,defaultWidth:"full"}),dateTime:l({formats:y,defaultWidth:"full"})},f={lastWeek:"'geçen hafta' eeee 'saat' p",yesterday:"'dün saat' p",today:"'bugün saat' p",tomorrow:"'yarın saat' p",nextWeek:"eeee 'saat' p",other:"P"},v=function(a,o,e,t){return f[a]},g={narrow:["MÖ","MS"],abbreviated:["MÖ","MS"],wide:["Milattan Önce","Milattan Sonra"]},b={narrow:["1","2","3","4"],abbreviated:["1Ç","2Ç","3Ç","4Ç"],wide:["İlk çeyrek","İkinci Çeyrek","Üçüncü çeyrek","Son çeyrek"]},p={narrow:["O","Ş","M","N","M","H","T","A","E","E","K","A"],abbreviated:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],wide:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]},P={narrow:["P","P","S","Ç","P","C","C"],short:["Pz","Pt","Sa","Ça","Pe","Cu","Ct"],abbreviated:["Paz","Pzt","Sal","Çar","Per","Cum","Cts"],wide:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]},M={narrow:{am:"öö",pm:"ös",midnight:"gy",noon:"ö",morning:"sa",afternoon:"ös",evening:"ak",night:"ge"},abbreviated:{am:"ÖÖ",pm:"ÖS",midnight:"gece yarısı",noon:"öğle",morning:"sabah",afternoon:"öğleden sonra",evening:"akşam",night:"gece"},wide:{am:"Ö.Ö.",pm:"Ö.S.",midnight:"gece yarısı",noon:"öğle",morning:"sabah",afternoon:"öğleden sonra",evening:"akşam",night:"gece"}},w={narrow:{am:"öö",pm:"ös",midnight:"gy",noon:"ö",morning:"sa",afternoon:"ös",evening:"ak",night:"ge"},abbreviated:{am:"ÖÖ",pm:"ÖS",midnight:"gece yarısı",noon:"öğlen",morning:"sabahleyin",afternoon:"öğleden sonra",evening:"akşamleyin",night:"geceleyin"},wide:{am:"ö.ö.",pm:"ö.s.",midnight:"gece yarısı",noon:"öğlen",morning:"sabahleyin",afternoon:"öğleden sonra",evening:"akşamleyin",night:"geceleyin"}},z=function(a,o){var e=Number(a);return e+"."},W={ordinalNumber:z,era:n({values:g,defaultWidth:"wide"}),quarter:n({values:b,defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:n({values:p,defaultWidth:"wide"}),day:n({values:P,defaultWidth:"wide"}),dayPeriod:n({values:M,defaultWidth:"wide",formattingValues:w,defaultFormattingWidth:"wide"})},S=/^(\d+)(\.)?/i,C=/\d+/i,H={narrow:/^(mö|ms)/i,abbreviated:/^(mö|ms)/i,wide:/^(milattan önce|milattan sonra)/i},D={any:[/(^mö|^milattan önce)/i,/(^ms|^milattan sonra)/i]},E={narrow:/^[1234]/i,abbreviated:/^[1234]ç/i,wide:/^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i},N={any:[/1/i,/2/i,/3/i,/4/i],abbreviated:[/1ç/i,/2ç/i,/3ç/i,/4ç/i],wide:[/^(i|İ)lk çeyrek/i,/(i|İ)kinci çeyrek/i,/üçüncü çeyrek/i,/son çeyrek/i]},x={narrow:/^[oşmnhtaek]/i,abbreviated:/^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i,wide:/^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i},F={narrow:[/^o/i,/^ş/i,/^m/i,/^n/i,/^m/i,/^h/i,/^t/i,/^a/i,/^e/i,/^e/i,/^k/i,/^a/i],any:[/^o/i,/^ş/i,/^mar/i,/^n/i,/^may/i,/^h/i,/^t/i,/^ağ/i,/^ey/i,/^ek/i,/^k/i,/^ar/i]},V={narrow:/^[psçc]/i,short:/^(pz|pt|sa|ça|pe|cu|ct)/i,abbreviated:/^(paz|pzt|sal|çar|per|cum|cts)/i,wide:/^(pazar(?!tesi)|pazartesi|salı|çarşamba|perşembe|cuma(?!rtesi)|cumartesi)/i},X={narrow:[/^p/i,/^p/i,/^s/i,/^ç/i,/^p/i,/^c/i,/^c/i],any:[/^pz/i,/^pt/i,/^sa/i,/^ça/i,/^pe/i,/^cu/i,/^ct/i],wide:[/^pazar(?!tesi)/i,/^pazartesi/i,/^salı/i,/^çarşamba/i,/^perşembe/i,/^cuma(?!rtesi)/i,/^cumartesi/i]},A={narrow:/^(öö|ös|gy|ö|sa|ös|ak|ge)/i,any:/^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i},T={any:{am:/^ö\.?ö\.?/i,pm:/^ö\.?s\.?/i,midnight:/^(gy|gece yarısı)/i,noon:/^öğ/i,morning:/^sa/i,afternoon:/^öğleden sonra/i,evening:/^ak/i,night:/^ge/i}},L={ordinalNumber:m({matchPattern:S,parsePattern:C,valueCallback:function(a){return parseInt(a,10)}}),era:i({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:D,defaultParseWidth:"any"}),quarter:i({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:i({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any"}),day:i({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any"}),dayPeriod:i({matchPatterns:A,defaultMatchWidth:"any",parsePatterns:T,defaultParseWidth:"any"})},K={code:"tr",formatDistance:u,formatLong:k,formatRelative:v,localize:W,match:L,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{K as default};
//# sourceMappingURL=index.3e099dbf.js.map
