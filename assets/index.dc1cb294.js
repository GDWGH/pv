import{d as m,e as l,f as c,g as p}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.9435967d.js";import"./index.ab579fd4.js";import"./Logo.vue_vue_type_script_setup_true_lang.974432e9.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.01daf25a.js";import"./use-controllable.38d61a73.js";/*! PatchyVideo/Platinum by VoileLabs */var f={xseconds_other:"sekundė_sekundžių_sekundes",xminutes_one:"minutė_minutės_minutę",xminutes_other:"minutės_minučių_minutes",xhours_one:"valanda_valandos_valandą",xhours_other:"valandos_valandų_valandas",xdays_one:"diena_dienos_dieną",xdays_other:"dienos_dienų_dienas",xweeks_one:"savaitė_savaitės_savaitę",xweeks_other:"savaitės_savaičių_savaites",xmonths_one:"mėnuo_mėnesio_mėnesį",xmonths_other:"mėnesiai_mėnesių_mėnesius",xyears_one:"metai_metų_metus",xyears_other:"metai_metų_metus",about:"apie",over:"daugiau nei",almost:"beveik",lessthan:"mažiau nei"},k=function(e,n,a,s){return n?s?"kelių sekundžių":"kelias sekundes":"kelios sekundės"},t=function(e,n,a,s){return n?s?d(a)[1]:d(a)[2]:d(a)[0]},i=function(e,n,a,s){var u=e+" ";return e===1?u+t(e,n,a,s):n?s?u+d(a)[1]:u+(g(e)?d(a)[1]:d(a)[2]):u+(g(e)?d(a)[1]:d(a)[0])};function g(r){return r%10===0||r>10&&r<20}function d(r){return f[r].split("_")}var w={lessThanXSeconds:{one:k,other:i},xSeconds:{one:k,other:i},halfAMinute:"pusė minutės",lessThanXMinutes:{one:t,other:i},xMinutes:{one:t,other:i},aboutXHours:{one:t,other:i},xHours:{one:t,other:i},xDays:{one:t,other:i},aboutXWeeks:{one:t,other:i},xWeeks:{one:t,other:i},aboutXMonths:{one:t,other:i},xMonths:{one:t,other:i},aboutXYears:{one:t,other:i},xYears:{one:t,other:i},overXYears:{one:t,other:i},almostXYears:{one:t,other:i}},I=function(e,n,a){var s=e.match(/about|over|almost|lessthan/i),u=s?e.replace(s[0],""):e,h=(a==null?void 0:a.comparison)!==void 0&&a.comparison>0,o,v=w[e];if(typeof v=="string"?o=v:n===1?o=v.one(n,(a==null?void 0:a.addSuffix)===!0,u.toLowerCase()+"_one",h):o=v.other(n,(a==null?void 0:a.addSuffix)===!0,u.toLowerCase()+"_other",h),s){var b=s[0].toLowerCase();o=f[b]+" "+o}return a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"po "+o:"prieš "+o:o},_={full:"y 'm'. MMMM d 'd'., EEEE",long:"y 'm'. MMMM d 'd'.",medium:"y-MM-dd",short:"y-MM-dd"},P={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},y={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},M={date:m({formats:_,defaultWidth:"full"}),time:m({formats:P,defaultWidth:"full"}),dateTime:m({formats:y,defaultWidth:"full"})},W={lastWeek:"'Praėjusį' eeee p",yesterday:"'Vakar' p",today:"'Šiandien' p",tomorrow:"'Rytoj' p",nextWeek:"eeee p",other:"P"},x=function(e,n,a,s){return W[e]},V={narrow:["pr. Kr.","po Kr."],abbreviated:["pr. Kr.","po Kr."],wide:["prieš Kristų","po Kristaus"]},S={narrow:["1","2","3","4"],abbreviated:["I ketv.","II ketv.","III ketv.","IV ketv."],wide:["I ketvirtis","II ketvirtis","III ketvirtis","IV ketvirtis"]},K={narrow:["1","2","3","4"],abbreviated:["I k.","II k.","III k.","IV k."],wide:["I ketvirtis","II ketvirtis","III ketvirtis","IV ketvirtis"]},D={narrow:["S","V","K","B","G","B","L","R","R","S","L","G"],abbreviated:["saus.","vas.","kov.","bal.","geg.","birž.","liep.","rugp.","rugs.","spal.","lapkr.","gruod."],wide:["sausis","vasaris","kovas","balandis","gegužė","birželis","liepa","rugpjūtis","rugsėjis","spalis","lapkritis","gruodis"]},L={narrow:["S","V","K","B","G","B","L","R","R","S","L","G"],abbreviated:["saus.","vas.","kov.","bal.","geg.","birž.","liep.","rugp.","rugs.","spal.","lapkr.","gruod."],wide:["sausio","vasario","kovo","balandžio","gegužės","birželio","liepos","rugpjūčio","rugsėjo","spalio","lapkričio","gruodžio"]},j={narrow:["S","P","A","T","K","P","Š"],short:["Sk","Pr","An","Tr","Kt","Pn","Št"],abbreviated:["sk","pr","an","tr","kt","pn","št"],wide:["sekmadienis","pirmadienis","antradienis","trečiadienis","ketvirtadienis","penktadienis","šeštadienis"]},F={narrow:["S","P","A","T","K","P","Š"],short:["Sk","Pr","An","Tr","Kt","Pn","Št"],abbreviated:["sk","pr","an","tr","kt","pn","št"],wide:["sekmadienį","pirmadienį","antradienį","trečiadienį","ketvirtadienį","penktadienį","šeštadienį"]},C={narrow:{am:"pr. p.",pm:"pop.",midnight:"vidurnaktis",noon:"vidurdienis",morning:"rytas",afternoon:"diena",evening:"vakaras",night:"naktis"},abbreviated:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"vidurdienis",morning:"rytas",afternoon:"diena",evening:"vakaras",night:"naktis"},wide:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"vidurdienis",morning:"rytas",afternoon:"diena",evening:"vakaras",night:"naktis"}},H={narrow:{am:"pr. p.",pm:"pop.",midnight:"vidurnaktis",noon:"perpiet",morning:"rytas",afternoon:"popietė",evening:"vakaras",night:"naktis"},abbreviated:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"perpiet",morning:"rytas",afternoon:"popietė",evening:"vakaras",night:"naktis"},wide:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"perpiet",morning:"rytas",afternoon:"popietė",evening:"vakaras",night:"naktis"}},R=function(e,n){var a=Number(e);return a+"-oji"},z={ordinalNumber:R,era:l({values:V,defaultWidth:"wide"}),quarter:l({values:S,defaultWidth:"wide",formattingValues:K,defaultFormattingWidth:"wide",argumentCallback:function(e){return e-1}}),month:l({values:D,defaultWidth:"wide",formattingValues:L,defaultFormattingWidth:"wide"}),day:l({values:j,defaultWidth:"wide",formattingValues:F,defaultFormattingWidth:"wide"}),dayPeriod:l({values:C,defaultWidth:"wide",formattingValues:H,defaultFormattingWidth:"wide"})},T=/^(\d+)(-oji)?/i,X=/\d+/i,N={narrow:/^p(r|o)\.?\s?(kr\.?|me)/i,abbreviated:/^(pr\.\s?(kr\.|m\.\s?e\.)|po\s?kr\.|mūsų eroje)/i,wide:/^(prieš Kristų|prieš mūsų erą|po Kristaus|mūsų eroje)/i},E={wide:[/prieš/i,/(po|mūsų)/i],any:[/^pr/i,/^(po|m)/i]},A={narrow:/^([1234])/i,abbreviated:/^(I|II|III|IV)\s?ketv?\.?/i,wide:/^(I|II|III|IV)\s?ketvirtis/i},B={narrow:[/1/i,/2/i,/3/i,/4/i],any:[/I$/i,/II$/i,/III/i,/IV/i]},G={narrow:/^[svkbglr]/i,abbreviated:/^(saus\.|vas\.|kov\.|bal\.|geg\.|birž\.|liep\.|rugp\.|rugs\.|spal\.|lapkr\.|gruod\.)/i,wide:/^(sausi(s|o)|vasari(s|o)|kov(a|o)s|balandž?i(s|o)|gegužės?|birželi(s|o)|liep(a|os)|rugpjū(t|č)i(s|o)|rugsėj(is|o)|spali(s|o)|lapkri(t|č)i(s|o)|gruodž?i(s|o))/i},Y={narrow:[/^s/i,/^v/i,/^k/i,/^b/i,/^g/i,/^b/i,/^l/i,/^r/i,/^r/i,/^s/i,/^l/i,/^g/i],any:[/^saus/i,/^vas/i,/^kov/i,/^bal/i,/^geg/i,/^birž/i,/^liep/i,/^rugp/i,/^rugs/i,/^spal/i,/^lapkr/i,/^gruod/i]},$={narrow:/^[spatkš]/i,short:/^(sk|pr|an|tr|kt|pn|št)/i,abbreviated:/^(sk|pr|an|tr|kt|pn|št)/i,wide:/^(sekmadien(is|į)|pirmadien(is|į)|antradien(is|į)|trečiadien(is|į)|ketvirtadien(is|į)|penktadien(is|į)|šeštadien(is|į))/i},q={narrow:[/^s/i,/^p/i,/^a/i,/^t/i,/^k/i,/^p/i,/^š/i],wide:[/^se/i,/^pi/i,/^an/i,/^tr/i,/^ke/i,/^pe/i,/^še/i],any:[/^sk/i,/^pr/i,/^an/i,/^tr/i,/^kt/i,/^pn/i,/^št/i]},O={narrow:/^(pr.\s?p.|pop.|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i,any:/^(priešpiet|popiet$|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i},Q={narrow:{am:/^pr/i,pm:/^pop./i,midnight:/^vidurnaktis/i,noon:/^(vidurdienis|perp)/i,morning:/rytas/i,afternoon:/(die|popietė)/i,evening:/vakaras/i,night:/naktis/i},any:{am:/^pr/i,pm:/^popiet$/i,midnight:/^vidurnaktis/i,noon:/^(vidurdienis|perp)/i,morning:/rytas/i,afternoon:/(die|popietė)/i,evening:/vakaras/i,night:/naktis/i}},J={ordinalNumber:c({matchPattern:T,parsePattern:X,valueCallback:function(e){return parseInt(e,10)}}),era:p({matchPatterns:N,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),quarter:p({matchPatterns:A,defaultMatchWidth:"wide",parsePatterns:B,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:p({matchPatterns:G,defaultMatchWidth:"wide",parsePatterns:Y,defaultParseWidth:"any"}),day:p({matchPatterns:$,defaultMatchWidth:"wide",parsePatterns:q,defaultParseWidth:"any"}),dayPeriod:p({matchPatterns:O,defaultMatchWidth:"any",parsePatterns:Q,defaultParseWidth:"any"})},ra={code:"lt",formatDistance:I,formatLong:M,formatRelative:x,localize:z,match:J,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{ra as default};
//# sourceMappingURL=index.dc1cb294.js.map
