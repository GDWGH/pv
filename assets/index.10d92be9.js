import{d as m,e as o,f as h,g as d}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.8f858e30.js";import"./index.0f643b2c.js";import"./Logo.vue_vue_type_script_setup_true_lang.2e850749.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.848a8000.js";import"./use-controllable.ace926a8.js";/*! PatchyVideo/Platinum by VoileLabs */var v={lessThanXSeconds:{one:"פחות משנייה",two:"פחות משתי שניות",other:"פחות מ־{{count}} שניות"},xSeconds:{one:"שנייה",two:"שתי שניות",other:"{{count}} שניות"},halfAMinute:"חצי דקה",lessThanXMinutes:{one:"פחות מדקה",two:"פחות משתי דקות",other:"פחות מ־{{count}} דקות"},xMinutes:{one:"דקה",two:"שתי דקות",other:"{{count}} דקות"},aboutXHours:{one:"כשעה",two:"כשעתיים",other:"כ־{{count}} שעות"},xHours:{one:"שעה",two:"שעתיים",other:"{{count}} שעות"},xDays:{one:"יום",two:"יומיים",other:"{{count}} ימים"},aboutXWeeks:{one:"כשבוע",two:"כשבועיים",other:"כ־{{count}} שבועות"},xWeeks:{one:"שבוע",two:"שבועיים",other:"{{count}} שבועות"},aboutXMonths:{one:"כחודש",two:"כחודשיים",other:"כ־{{count}} חודשים"},xMonths:{one:"חודש",two:"חודשיים",other:"{{count}} חודשים"},aboutXYears:{one:"כשנה",two:"כשנתיים",other:"כ־{{count}} שנים"},xYears:{one:"שנה",two:"שנתיים",other:"{{count}} שנים"},overXYears:{one:"יותר משנה",two:"יותר משנתיים",other:"יותר מ־{{count}} שנים"},almostXYears:{one:"כמעט שנה",two:"כמעט שנתיים",other:"כמעט {{count}} שנים"}},f=function(t,e,a){if(t==="xDays"&&a!==null&&a!==void 0&&a.addSuffix&&e<=2)return a.comparison&&a.comparison>0?e===1?"מחר":"מחרתיים":e===1?"אתמול":"שלשום";var r,i=v[t];return typeof i=="string"?r=i:e===1?r=i.one:e===2?r=i.two:r=i.other.replace("{{count}}",String(e)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"בעוד "+r:"לפני "+r:r},c={full:"EEEE, d בMMMM y",long:"d בMMMM y",medium:"d בMMM y",short:"d.M.y"},w={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},b={full:"{{date}} 'בשעה' {{time}}",long:"{{date}} 'בשעה' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},g={date:m({formats:c,defaultWidth:"full"}),time:m({formats:w,defaultWidth:"full"}),dateTime:m({formats:b,defaultWidth:"full"})},P={lastWeek:"eeee 'שעבר בשעה' p",yesterday:"'אתמול בשעה' p",today:"'היום בשעה' p",tomorrow:"'מחר בשעה' p",nextWeek:"eeee 'בשעה' p",other:"P"},y=function(t,e,a,r){return P[t]},p={narrow:["לפנה״ס","לספירה"],abbreviated:["לפנה״ס","לספירה"],wide:["לפני הספירה","לספירה"]},M={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["רבעון 1","רבעון 2","רבעון 3","רבעון 4"]},W={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["ינו׳","פבר׳","מרץ","אפר׳","מאי","יוני","יולי","אוג׳","ספט׳","אוק׳","נוב׳","דצמ׳"],wide:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"]},x={narrow:["א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ש׳"],short:["א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ש׳"],abbreviated:["יום א׳","יום ב׳","יום ג׳","יום ד׳","יום ה׳","יום ו׳","שבת"],wide:["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","יום שבת"]},$={narrow:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בוקר",afternoon:"אחר הצהריים",evening:"ערב",night:"לילה"},abbreviated:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בוקר",afternoon:"אחר הצהריים",evening:"ערב",night:"לילה"},wide:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בוקר",afternoon:"אחר הצהריים",evening:"ערב",night:"לילה"}},D={narrow:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בבוקר",afternoon:"בצהריים",evening:"בערב",night:"בלילה"},abbreviated:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בבוקר",afternoon:"אחר הצהריים",evening:"בערב",night:"בלילה"},wide:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בבוקר",afternoon:"אחר הצהריים",evening:"בערב",night:"בלילה"}},k=function(t,e){var a=Number(t);if(a<=0||a>10)return String(a);var r=String(e==null?void 0:e.unit),i=["year","hour","minute","second"].indexOf(r)>=0,l=["ראשון","שני","שלישי","רביעי","חמישי","שישי","שביעי","שמיני","תשיעי","עשירי"],s=["ראשונה","שנייה","שלישית","רביעית","חמישית","שישית","שביעית","שמינית","תשיעית","עשירית"],u=a-1;return i?s[u]:l[u]},F={ordinalNumber:k,era:o({values:p,defaultWidth:"wide"}),quarter:o({values:M,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:o({values:W,defaultWidth:"wide"}),day:o({values:x,defaultWidth:"wide"}),dayPeriod:o({values:$,defaultWidth:"wide",formattingValues:D,defaultFormattingWidth:"wide"})},N=/^(\d+|(ראשון|שני|שלישי|רביעי|חמישי|שישי|שביעי|שמיני|תשיעי|עשירי|ראשונה|שנייה|שלישית|רביעית|חמישית|שישית|שביעית|שמינית|תשיעית|עשירית))/i,z=/^(\d+|רא|שנ|של|רב|ח|שי|שב|שמ|ת|ע)/i,S={narrow:/^ל(ספירה|פנה״ס)/i,abbreviated:/^ל(ספירה|פנה״ס)/i,wide:/^ל(פני ה)?ספירה/i},V={any:[/^לפ/i,/^לס/i]},X={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^רבעון [1234]/i},C={any:[/1/i,/2/i,/3/i,/4/i]},E={narrow:/^\d+/i,abbreviated:/^(ינו|פבר|מרץ|אפר|מאי|יוני|יולי|אוג|ספט|אוק|נוב|דצמ)׳?/i,wide:/^(ינואר|פברואר|מרץ|אפריל|מאי|יוני|יולי|אוגוסט|ספטמבר|אוקטובר|נובמבר|דצמבר)/i},H={narrow:[/^1$/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^7/i,/^8/i,/^9/i,/^10/i,/^11/i,/^12/i],any:[/^ינ/i,/^פ/i,/^מר/i,/^אפ/i,/^מא/i,/^יונ/i,/^יול/i,/^אוג/i,/^ס/i,/^אוק/i,/^נ/i,/^ד/i]},L={narrow:/^[אבגדהוש]׳/i,short:/^[אבגדהוש]׳/i,abbreviated:/^(שבת|יום (א|ב|ג|ד|ה|ו)׳)/i,wide:/^יום (ראשון|שני|שלישי|רביעי|חמישי|שישי|שבת)/i},Q={abbreviated:[/א׳$/i,/ב׳$/i,/ג׳$/i,/ד׳$/i,/ה׳$/i,/ו׳$/i,/^ש/i],wide:[/ן$/i,/ני$/i,/לישי$/i,/עי$/i,/מישי$/i,/שישי$/i,/ת$/i],any:[/^א/i,/^ב/i,/^ג/i,/^ד/i,/^ה/i,/^ו/i,/^ש/i]},O={any:/^(אחר ה|ב)?(חצות|צהריים|בוקר|ערב|לילה|אחה״צ|לפנה״צ)/i},q={any:{am:/^לפ/i,pm:/^אחה/i,midnight:/^ח/i,noon:/^צ/i,morning:/בוקר/i,afternoon:/בצ|אחר/i,evening:/ערב/i,night:/לילה/i}},R=["רא","שנ","של","רב","ח","שי","שב","שמ","ת","ע"],T={ordinalNumber:h({matchPattern:N,parsePattern:z,valueCallback:function(t){var e=parseInt(t,10);return isNaN(e)?R.indexOf(t)+1:e}}),era:d({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any"}),quarter:d({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:d({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any"}),day:d({matchPatterns:L,defaultMatchWidth:"wide",parsePatterns:Q,defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:O,defaultMatchWidth:"any",parsePatterns:q,defaultParseWidth:"any"})},B={code:"he",formatDistance:f,formatLong:g,formatRelative:y,localize:F,match:T,options:{weekStartsOn:0,firstWeekContainsDate:1}};export{B as default};
//# sourceMappingURL=index.10d92be9.js.map
