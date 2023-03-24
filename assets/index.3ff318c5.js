import{d as s,e as i,f as m,g as n}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.71647c40.js";import"./index.f5c06a96.js";import"./Logo.vue_vue_type_script_setup_true_lang.03264095.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.31d03349.js";import"./use-controllable.fea3d8af.js";/*! PatchyVideo/Platinum by VoileLabs */var u={lessThanXSeconds:{one:"ավելի քիչ քան 1 վայրկյան",other:"ավելի քիչ քան {{count}} վայրկյան"},xSeconds:{one:"1 վայրկյան",other:"{{count}} վայրկյան"},halfAMinute:"կես րոպե",lessThanXMinutes:{one:"ավելի քիչ քան 1 րոպե",other:"ավելի քիչ քան {{count}} րոպե"},xMinutes:{one:"1 րոպե",other:"{{count}} րոպե"},aboutXHours:{one:"մոտ 1 ժամ",other:"մոտ {{count}} ժամ"},xHours:{one:"1 ժամ",other:"{{count}} ժամ"},xDays:{one:"1 օր",other:"{{count}} օր"},aboutXWeeks:{one:"մոտ 1 շաբաթ",other:"մոտ {{count}} շաբաթ"},xWeeks:{one:"1 շաբաթ",other:"{{count}} շաբաթ"},aboutXMonths:{one:"մոտ 1 ամիս",other:"մոտ {{count}} ամիս"},xMonths:{one:"1 ամիս",other:"{{count}} ամիս"},aboutXYears:{one:"մոտ 1 տարի",other:"մոտ {{count}} տարի"},xYears:{one:"1 տարի",other:"{{count}} տարի"},overXYears:{one:"ավելի քան 1 տարի",other:"ավելի քան {{count}} տարի"},almostXYears:{one:"համարյա 1 տարի",other:"համարյա {{count}} տարի"}},l=function(a,o,e){var t,d=u[a];return typeof d=="string"?t=d:o===1?t=d.one:t=d.other.replace("{{count}}",String(o)),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?t+" հետո":t+" առաջ":t},h={full:"d MMMM, y, EEEE",long:"d MMMM, y",medium:"d MMM, y",short:"dd.MM.yyyy"},f={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},v={full:"{{date}} 'ժ․'{{time}}",long:"{{date}} 'ժ․'{{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},c={date:s({formats:h,defaultWidth:"full"}),time:s({formats:f,defaultWidth:"full"}),dateTime:s({formats:v,defaultWidth:"full"})},b={lastWeek:"'նախորդ' eeee p'֊ին'",yesterday:"'երեկ' p'֊ին'",today:"'այսօր' p'֊ին'",tomorrow:"'վաղը' p'֊ին'",nextWeek:"'հաջորդ' eeee p'֊ին'",other:"P"},g=function(a,o,e,t){return b[a]},p={narrow:["Ք","Մ"],abbreviated:["ՔԱ","ՄԹ"],wide:["Քրիստոսից առաջ","Մեր թվարկության"]},P={narrow:["1","2","3","4"],abbreviated:["Ք1","Ք2","Ք3","Ք4"],wide:["1֊ին քառորդ","2֊րդ քառորդ","3֊րդ քառորդ","4֊րդ քառորդ"]},w={narrow:["Հ","Փ","Մ","Ա","Մ","Հ","Հ","Օ","Ս","Հ","Ն","Դ"],abbreviated:["հուն","փետ","մար","ապր","մայ","հուն","հուլ","օգս","սեպ","հոկ","նոյ","դեկ"],wide:["հունվար","փետրվար","մարտ","ապրիլ","մայիս","հունիս","հուլիս","օգոստոս","սեպտեմբեր","հոկտեմբեր","նոյեմբեր","դեկտեմբեր"]},y={narrow:["Կ","Ե","Ե","Չ","Հ","Ո","Շ"],short:["կր","եր","եք","չք","հգ","ուր","շբ"],abbreviated:["կիր","երկ","երք","չոր","հնգ","ուրբ","շաբ"],wide:["կիրակի","երկուշաբթի","երեքշաբթի","չորեքշաբթի","հինգշաբթի","ուրբաթ","շաբաթ"]},M={narrow:{am:"a",pm:"p",midnight:"կեսգշ",noon:"կեսօր",morning:"առավոտ",afternoon:"ցերեկ",evening:"երեկո",night:"գիշեր"},abbreviated:{am:"AM",pm:"PM",midnight:"կեսգիշեր",noon:"կեսօր",morning:"առավոտ",afternoon:"ցերեկ",evening:"երեկո",night:"գիշեր"},wide:{am:"a.m.",pm:"p.m.",midnight:"կեսգիշեր",noon:"կեսօր",morning:"առավոտ",afternoon:"ցերեկ",evening:"երեկո",night:"գիշեր"}},W={narrow:{am:"a",pm:"p",midnight:"կեսգշ",noon:"կեսօր",morning:"առավոտը",afternoon:"ցերեկը",evening:"երեկոյան",night:"գիշերը"},abbreviated:{am:"AM",pm:"PM",midnight:"կեսգիշերին",noon:"կեսօրին",morning:"առավոտը",afternoon:"ցերեկը",evening:"երեկոյան",night:"գիշերը"},wide:{am:"a.m.",pm:"p.m.",midnight:"կեսգիշերին",noon:"կեսօրին",morning:"առավոտը",afternoon:"ցերեկը",evening:"երեկոյան",night:"գիշերը"}},k=function(a,o){var e=Number(a),t=e%100;return t<10&&t%10===1?e+"֊ին":e+"֊րդ"},D={ordinalNumber:k,era:i({values:p,defaultWidth:"wide"}),quarter:i({values:P,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:i({values:w,defaultWidth:"wide"}),day:i({values:y,defaultWidth:"wide"}),dayPeriod:i({values:M,defaultWidth:"wide",formattingValues:W,defaultFormattingWidth:"wide"})},x=/^(\d+)((-|֊)?(ին|րդ))?/i,H=/\d+/i,F={narrow:/^(Ք|Մ)/i,abbreviated:/^(Ք\.?\s?Ա\.?|Մ\.?\s?Թ\.?\s?Ա\.?|Մ\.?\s?Թ\.?|Ք\.?\s?Հ\.?)/i,wide:/^(քրիստոսից առաջ|մեր թվարկությունից առաջ|մեր թվարկության|քրիստոսից հետո)/i},z={any:[/^ք/i,/^մ/i]},V={narrow:/^[1234]/i,abbreviated:/^ք[1234]/i,wide:/^[1234]((-|֊)?(ին|րդ)) քառորդ/i},X={any:[/1/i,/2/i,/3/i,/4/i]},C={narrow:/^[հփմաօսնդ]/i,abbreviated:/^(հուն|փետ|մար|ապր|մայ|հուն|հուլ|օգս|սեպ|հոկ|նոյ|դեկ)/i,wide:/^(հունվար|փետրվար|մարտ|ապրիլ|մայիս|հունիս|հուլիս|օգոստոս|սեպտեմբեր|հոկտեմբեր|նոյեմբեր|դեկտեմբեր)/i},N={narrow:[/^հ/i,/^փ/i,/^մ/i,/^ա/i,/^մ/i,/^հ/i,/^հ/i,/^օ/i,/^ս/i,/^հ/i,/^ն/i,/^դ/i],any:[/^հու/i,/^փ/i,/^մար/i,/^ա/i,/^մայ/i,/^հուն/i,/^հուլ/i,/^օ/i,/^ս/i,/^հոկ/i,/^ն/i,/^դ/i]},E={narrow:/^[եչհոշկ]/i,short:/^(կր|եր|եք|չք|հգ|ուր|շբ)/i,abbreviated:/^(կիր|երկ|երք|չոր|հնգ|ուրբ|շաբ)/i,wide:/^(կիրակի|երկուշաբթի|երեքշաբթի|չորեքշաբթի|հինգշաբթի|ուրբաթ|շաբաթ)/i},L={narrow:[/^կ/i,/^ե/i,/^ե/i,/^չ/i,/^հ/i,/^(ո|Ո)/,/^շ/i],short:[/^կ/i,/^եր/i,/^եք/i,/^չ/i,/^հ/i,/^(ո|Ո)/,/^շ/i],abbreviated:[/^կ/i,/^երկ/i,/^երք/i,/^չ/i,/^հ/i,/^(ո|Ո)/,/^շ/i],wide:[/^կ/i,/^երկ/i,/^երե/i,/^չ/i,/^հ/i,/^(ո|Ո)/,/^շ/i]},S={narrow:/^([ap]|կեսգշ|կեսօր|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i,any:/^([ap]\.?\s?m\.?|կեսգիշեր(ին)?|կեսօր(ին)?|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i},R={any:{am:/^a/i,pm:/^p/i,midnight:/կեսգիշեր/i,noon:/կեսօր/i,morning:/առավոտ/i,afternoon:/ցերեկ/i,evening:/երեկո/i,night:/գիշեր/i}},T={ordinalNumber:m({matchPattern:x,parsePattern:H,valueCallback:function(a){return parseInt(a,10)}}),era:n({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:z,defaultParseWidth:"any"}),quarter:n({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:n({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any"}),day:n({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:L,defaultParseWidth:"wide"}),dayPeriod:n({matchPatterns:S,defaultMatchWidth:"any",parsePatterns:R,defaultParseWidth:"any"})},Q={code:"hy",formatDistance:l,formatLong:c,formatRelative:g,localize:D,match:T,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{Q as default};
//# sourceMappingURL=index.3ff318c5.js.map
