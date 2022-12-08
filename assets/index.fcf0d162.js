import{d as s,e as t,f as u,g as o}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.687e7bfd.js";import"./index.7aa59e00.js";import"./Logo.vue_vue_type_script_setup_true_lang.8fe20832.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.1b1ebf02.js";import"./use-controllable.99ee2f86.js";/*! PatchyVideo/Platinum by VoileLabs */var l={lessThanXSeconds:{one:"bir saniyədən az",other:"{{count}} bir saniyədən az"},xSeconds:{one:"1 saniyə",other:"{{count}} saniyə"},halfAMinute:"yarım dəqiqə",lessThanXMinutes:{one:"bir dəqiqədən az",other:"{{count}} bir dəqiqədən az"},xMinutes:{one:"bir dəqiqə",other:"{{count}} dəqiqə"},aboutXHours:{one:"təxminən 1 saat",other:"təxminən {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 gün",other:"{{count}} gün"},aboutXWeeks:{one:"təxminən 1 həftə",other:"təxminən {{count}} həftə"},xWeeks:{one:"1 həftə",other:"{{count}} həftə"},aboutXMonths:{one:"təxminən 1 ay",other:"təxminən {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"təxminən 1 il",other:"təxminən {{count}} il"},xYears:{one:"1 il",other:"{{count}} il"},overXYears:{one:"1 ildən çox",other:"{{count}} ildən çox"},almostXYears:{one:"demək olar ki 1 il",other:"demək olar ki {{count}} il"}},c=function(a,i,e){var r,m=l[a];return typeof m=="string"?r=m:i===1?r=m.one:r=m.other.replace("{{count}}",String(i)),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?r+" sonra":r+" əvvəl":r},h={full:"EEEE, do MMMM y 'il'",long:"do MMMM y 'il'",medium:"d MMM y 'il'",short:"dd.MM.yyyy"},v={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},$={full:"{{date}} {{time}} - 'də'",long:"{{date}} {{time}} - 'də'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},g={date:s({formats:h,defaultWidth:"full"}),time:s({formats:v,defaultWidth:"full"}),dateTime:s({formats:$,defaultWidth:"full"})},f={lastWeek:"'sonuncu' eeee p -'də'",yesterday:"'dünən' p -'də'",today:"'bugün' p -'də'",tomorrow:"'sabah' p -'də'",nextWeek:"eeee p -'də'",other:"P"},y=function(a,i,e,r){return f[a]},b={narrow:["e.ə","b.e"],abbreviated:["e.ə","b.e"],wide:["eramızdan əvvəl","bizim era"]},p={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ci kvartal","2ci kvartal","3cü kvartal","4cü kvartal"]},M={narrow:["Y","F","M","A","M","İ","İ","A","S","O","N","D"],abbreviated:["Yan","Fev","Mar","Apr","May","İyun","İyul","Avq","Sen","Okt","Noy","Dek"],wide:["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"]},P={narrow:["B.","B.e","Ç.a","Ç.","C.a","C.","Ş."],short:["B.","B.e","Ç.a","Ç.","C.a","C.","Ş."],abbreviated:["Baz","Baz.e","Çər.a","Çər","Cüm.a","Cüm","Şə"],wide:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"]},x={narrow:{am:"am",pm:"pm",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},abbreviated:{am:"AM",pm:"PM",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},wide:{am:"a.m.",pm:"p.m.",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"}},w={narrow:{am:"a",pm:"p",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},abbreviated:{am:"AM",pm:"PM",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},wide:{am:"a.m.",pm:"p.m.",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"}},d={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"},z=function(a){if(a===0)return a+"-ıncı";var i=a%10,e=a%100-i,r=a>=100?100:null;return d[i]?d[i]:d[e]?d[e]:r!==null?d[r]:""},k=function(a,i){var e=Number(a),r=z(e);return e+r},C={ordinalNumber:k,era:t({values:b,defaultWidth:"wide"}),quarter:t({values:p,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:t({values:M,defaultWidth:"wide"}),day:t({values:P,defaultWidth:"wide"}),dayPeriod:t({values:x,defaultWidth:"wide",formattingValues:w,defaultFormattingWidth:"wide"})},W=/^(\d+)(-?(ci|inci|nci|uncu|üncü|ncı))?/i,B=/\d+/i,D={narrow:/^(b|a)$/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)$/i,wide:/^(bizim eradan əvvəl|bizim era)$/i},A={any:[/^b$/i,/^(a|c)$/i]},q={narrow:/^[1234]$/i,abbreviated:/^K[1234]$/i,wide:/^[1234](ci)? kvartal$/i},F={any:[/1/i,/2/i,/3/i,/4/i]},N={narrow:/^[(?-i)yfmaisond]$/i,abbreviated:/^(Yan|Fev|Mar|Apr|May|İyun|İyul|Avq|Sen|Okt|Noy|Dek)$/i,wide:/^(Yanvar|Fevral|Mart|Aprel|May|İyun|İyul|Avgust|Sentyabr|Oktyabr|Noyabr|Dekabr)$/i},S={narrow:[/^[(?-i)y]$/i,/^[(?-i)f]$/i,/^[(?-i)m]$/i,/^[(?-i)a]$/i,/^[(?-i)m]$/i,/^[(?-i)i]$/i,/^[(?-i)i]$/i,/^[(?-i)a]$/i,/^[(?-i)s]$/i,/^[(?-i)o]$/i,/^[(?-i)n]$/i,/^[(?-i)d]$/i],abbreviated:[/^Yan$/i,/^Fev$/i,/^Mar$/i,/^Apr$/i,/^May$/i,/^İyun$/i,/^İyul$/i,/^Avg$/i,/^Sen$/i,/^Okt$/i,/^Noy$/i,/^Dek$/i],wide:[/^Yanvar$/i,/^Fevral$/i,/^Mart$/i,/^Aprel$/i,/^May$/i,/^İyun$/i,/^İyul$/i,/^Avgust$/i,/^Sentyabr$/i,/^Oktyabr$/i,/^Noyabr$/i,/^Dekabr$/i]},Y={narrow:/^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,short:/^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,abbreviated:/^(Baz\.e|Çər|Çər\.a|Cüm|Cüm\.a|Şə)$/i,wide:/^(Bazar|Bazar ertəsi|Çərşənbə axşamı|Çərşənbə|Cümə axşamı|Cümə|Şənbə)$/i},O={narrow:[/^B\.$/i,/^B\.e$/i,/^Ç\.a$/i,/^Ç\.$/i,/^C\.a$/i,/^C\.$/i,/^Ş\.$/i],abbreviated:[/^Baz$/i,/^Baz\.e$/i,/^Çər\.a$/i,/^Çər$/i,/^Cüm\.a$/i,/^Cüm$/i,/^Şə$/i],wide:[/^Bazar$/i,/^Bazar ertəsi$/i,/^Çərşənbə axşamı$/i,/^Çərşənbə$/i,/^Cümə axşamı$/i,/^Cümə$/i,/^Şənbə$/i],any:[/^B\.$/i,/^B\.e$/i,/^Ç\.a$/i,/^Ç\.$/i,/^C\.a$/i,/^C\.$/i,/^Ş\.$/i]},V={narrow:/^(a|p|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i,any:/^(am|pm|a\.m\.|p\.m\.|AM|PM|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i},X={any:{am:/^a$/i,pm:/^p$/i,midnight:/^gecəyarı$/i,noon:/^gün$/i,morning:/səhər$/i,afternoon:/gündüz$/i,evening:/axşam$/i,night:/gecə$/i}},E={ordinalNumber:u({matchPattern:W,parsePattern:B,valueCallback:function(a){return parseInt(a,10)}}),era:o({matchPatterns:D,defaultMatchWidth:"wide",parsePatterns:A,defaultParseWidth:"any"}),quarter:o({matchPatterns:q,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:o({matchPatterns:N,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"narrow"}),day:o({matchPatterns:Y,defaultMatchWidth:"wide",parsePatterns:O,defaultParseWidth:"any"}),dayPeriod:o({matchPatterns:V,defaultMatchWidth:"any",parsePatterns:X,defaultParseWidth:"any"})},_={code:"az",formatDistance:c,formatLong:g,formatRelative:y,localize:C,match:E,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{_ as default};
//# sourceMappingURL=index.fcf0d162.js.map
