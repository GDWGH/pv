import{d as u,e as r,f as p,g as s}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.fb8d6663.js";import{i as w}from"./index.2745988c.js";import"./index.7d4e7a00.js";import"./Logo.vue_vue_type_script_setup_true_lang.27739dde.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.517ac89b.js";import"./use-controllable.fbdddb8f.js";/*! PatchyVideo/Platinum by VoileLabs */var f={lessThanXSeconds:{one:{regular:"mniej niż sekunda",past:"mniej niż sekundę",future:"mniej niż sekundę"},twoFour:"mniej niż {{count}} sekundy",other:"mniej niż {{count}} sekund"},xSeconds:{one:{regular:"sekunda",past:"sekundę",future:"sekundę"},twoFour:"{{count}} sekundy",other:"{{count}} sekund"},halfAMinute:{one:"pół minuty",twoFour:"pół minuty",other:"pół minuty"},lessThanXMinutes:{one:{regular:"mniej niż minuta",past:"mniej niż minutę",future:"mniej niż minutę"},twoFour:"mniej niż {{count}} minuty",other:"mniej niż {{count}} minut"},xMinutes:{one:{regular:"minuta",past:"minutę",future:"minutę"},twoFour:"{{count}} minuty",other:"{{count}} minut"},aboutXHours:{one:{regular:"około godziny",past:"około godziny",future:"około godzinę"},twoFour:"około {{count}} godziny",other:"około {{count}} godzin"},xHours:{one:{regular:"godzina",past:"godzinę",future:"godzinę"},twoFour:"{{count}} godziny",other:"{{count}} godzin"},xDays:{one:{regular:"dzień",past:"dzień",future:"1 dzień"},twoFour:"{{count}} dni",other:"{{count}} dni"},aboutXWeeks:{one:"około tygodnia",twoFour:"około {{count}} tygodni",other:"około {{count}} tygodni"},xWeeks:{one:"tydzień",twoFour:"{{count}} tygodnie",other:"{{count}} tygodni"},aboutXMonths:{one:"około miesiąc",twoFour:"około {{count}} miesiące",other:"około {{count}} miesięcy"},xMonths:{one:"miesiąc",twoFour:"{{count}} miesiące",other:"{{count}} miesięcy"},aboutXYears:{one:"około rok",twoFour:"około {{count}} lata",other:"około {{count}} lat"},xYears:{one:"rok",twoFour:"{{count}} lata",other:"{{count}} lat"},overXYears:{one:"ponad rok",twoFour:"ponad {{count}} lata",other:"ponad {{count}} lat"},almostXYears:{one:"prawie rok",twoFour:"prawie {{count}} lata",other:"prawie {{count}} lat"}};function h(a,e){if(e===1)return a.one;var n=e%100;if(n<=20&&n>10)return a.other;var i=n%10;return i>=2&&i<=4?a.twoFour:a.other}function d(a,e,n){var i=h(a,e),t=typeof i=="string"?i:i[n];return t.replace("{{count}}",String(e))}var g=function(e,n,i){var t=f[e];return i!=null&&i.addSuffix?i.comparison&&i.comparison>0?"za "+d(t,n,"future"):d(t,n,"past")+" temu":d(t,n,"regular")},v={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},z={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},k={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},y={date:u({formats:v,defaultWidth:"full"}),time:u({formats:z,defaultWidth:"full"}),dateTime:u({formats:k,defaultWidth:"full"})},b={masculine:"ostatni",feminine:"ostatnia"},P={masculine:"ten",feminine:"ta"},M={masculine:"następny",feminine:"następna"},I={0:"feminine",1:"masculine",2:"masculine",3:"feminine",4:"masculine",5:"masculine",6:"feminine"};function m(a,e,n,i){var t;if(w(e,n,i))t=P;else if(a==="lastWeek")t=b;else if(a==="nextWeek")t=M;else throw new Error("Cannot determine adjectives for token ".concat(a));var o=e.getUTCDay(),l=I[o],c=t[l];return"'".concat(c,"' eeee 'o' p")}var W={lastWeek:m,yesterday:"'wczoraj o' p",today:"'dzisiaj o' p",tomorrow:"'jutro o' p",nextWeek:m,other:"P"},F=function(e,n,i,t){var o=W[e];return typeof o=="function"?o(e,n,i,t):o},j={narrow:["p.n.e.","n.e."],abbreviated:["p.n.e.","n.e."],wide:["przed naszą erą","naszej ery"]},V={narrow:["1","2","3","4"],abbreviated:["I kw.","II kw.","III kw.","IV kw."],wide:["I kwartał","II kwartał","III kwartał","IV kwartał"]},x={narrow:["S","L","M","K","M","C","L","S","W","P","L","G"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],wide:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"]},C={narrow:["s","l","m","k","m","c","l","s","w","p","l","g"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],wide:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"]},D={narrow:["N","P","W","Ś","C","P","S"],short:["nie","pon","wto","śro","czw","pią","sob"],abbreviated:["niedz.","pon.","wt.","śr.","czw.","pt.","sob."],wide:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]},H={narrow:["n","p","w","ś","c","p","s"],short:["nie","pon","wto","śro","czw","pią","sob"],abbreviated:["niedz.","pon.","wt.","śr.","czw.","pt.","sob."],wide:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]},L={narrow:{am:"a",pm:"p",midnight:"półn.",noon:"poł",morning:"rano",afternoon:"popoł.",evening:"wiecz.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"północ",noon:"południe",morning:"rano",afternoon:"popołudnie",evening:"wieczór",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"północ",noon:"południe",morning:"rano",afternoon:"popołudnie",evening:"wieczór",night:"noc"}},S={narrow:{am:"a",pm:"p",midnight:"o półn.",noon:"w poł.",morning:"rano",afternoon:"po poł.",evening:"wiecz.",night:"w nocy"},abbreviated:{am:"AM",pm:"PM",midnight:"o północy",noon:"w południe",morning:"rano",afternoon:"po południu",evening:"wieczorem",night:"w nocy"},wide:{am:"AM",pm:"PM",midnight:"o północy",noon:"w południe",morning:"rano",afternoon:"po południu",evening:"wieczorem",night:"w nocy"}},T=function(e,n){return String(e)},N={ordinalNumber:T,era:r({values:j,defaultWidth:"wide"}),quarter:r({values:V,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:r({values:x,defaultWidth:"wide",formattingValues:C,defaultFormattingWidth:"wide"}),day:r({values:D,defaultWidth:"wide",formattingValues:H,defaultFormattingWidth:"wide"}),dayPeriod:r({values:L,defaultWidth:"wide",formattingValues:S,defaultFormattingWidth:"wide"})},X=/^(\d+)?/i,A=/\d+/i,E={narrow:/^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,abbreviated:/^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,wide:/^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i},G={any:[/^p/i,/^n/i]},R={narrow:/^[1234]/i,abbreviated:/^(I|II|III|IV)\s*kw\.?/i,wide:/^(I|II|III|IV)\s*kwarta(ł|l)/i},Y={narrow:[/1/i,/2/i,/3/i,/4/i],any:[/^I kw/i,/^II kw/i,/^III kw/i,/^IV kw/i]},$={narrow:/^[slmkcwpg]/i,abbreviated:/^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i,wide:/^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i},q={narrow:[/^s/i,/^l/i,/^m/i,/^k/i,/^m/i,/^c/i,/^l/i,/^s/i,/^w/i,/^p/i,/^l/i,/^g/i],any:[/^st/i,/^lu/i,/^mar/i,/^k/i,/^maj/i,/^c/i,/^lip/i,/^si/i,/^w/i,/^p/i,/^lis/i,/^g/i]},O={narrow:/^[npwścs]/i,short:/^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i,abbreviated:/^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i,wide:/^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i},Q={narrow:[/^n/i,/^p/i,/^w/i,/^ś/i,/^c/i,/^p/i,/^s/i],abbreviated:[/^n/i,/^po/i,/^w/i,/^(ś|s)r/i,/^c/i,/^pt/i,/^so/i],any:[/^n/i,/^po/i,/^w/i,/^(ś|s)r/i,/^c/i,/^pi/i,/^so/i]},U={narrow:/^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,any:/^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i},K={narrow:{am:/^a$/i,pm:/^p$/i,midnight:/pó(ł|l)n/i,noon:/po(ł|l)/i,morning:/rano/i,afternoon:/po\s*po(ł|l)/i,evening:/wiecz/i,night:/noc/i},any:{am:/^am/i,pm:/^pm/i,midnight:/pó(ł|l)n/i,noon:/po(ł|l)/i,morning:/rano/i,afternoon:/po\s*po(ł|l)/i,evening:/wiecz/i,night:/noc/i}},_={ordinalNumber:p({matchPattern:X,parsePattern:A,valueCallback:function(e){return parseInt(e,10)}}),era:s({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:G,defaultParseWidth:"any"}),quarter:s({matchPatterns:R,defaultMatchWidth:"wide",parsePatterns:Y,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:s({matchPatterns:$,defaultMatchWidth:"wide",parsePatterns:q,defaultParseWidth:"any"}),day:s({matchPatterns:O,defaultMatchWidth:"wide",parsePatterns:Q,defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:U,defaultMatchWidth:"any",parsePatterns:K,defaultParseWidth:"any"})},ne={code:"pl",formatDistance:g,formatLong:y,formatRelative:F,localize:N,match:_,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{ne as default};
//# sourceMappingURL=index.9ed093dc.js.map
