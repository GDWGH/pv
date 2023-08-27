import{e as i,d as u,f as l,g as o}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.8a762b51.js";import"./index.c6eae5f0.js";import"./Logo.vue_vue_type_script_setup_true_lang.879bcfda.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.8d2891ba.js";import"./use-controllable.6e5dce2d.js";/*! PatchyVideo/Platinum by VoileLabs */var m={locale:{1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},number:{"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"}},h={narrow:["ईसा-पूर्व","ईस्वी"],abbreviated:["ईसा-पूर्व","ईस्वी"],wide:["ईसा-पूर्व","ईसवी सन"]},c={narrow:["1","2","3","4"],abbreviated:["ति1","ति2","ति3","ति4"],wide:["पहली तिमाही","दूसरी तिमाही","तीसरी तिमाही","चौथी तिमाही"]},f={narrow:["ज","फ़","मा","अ","मई","जू","जु","अग","सि","अक्टू","न","दि"],abbreviated:["जन","फ़र","मार्च","अप्रैल","मई","जून","जुल","अग","सित","अक्टू","नव","दिस"],wide:["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्टूबर","नवंबर","दिसंबर"]},v={narrow:["र","सो","मं","बु","गु","शु","श"],short:["र","सो","मं","बु","गु","शु","श"],abbreviated:["रवि","सोम","मंगल","बुध","गुरु","शुक्र","शनि"],wide:["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"]},b={narrow:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},abbreviated:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},wide:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"}},g={narrow:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},abbreviated:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},wide:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"}},P=function(a,n){var t=Number(a);return s(t)};function p(e){var a=e.toString().replace(/[१२३४५६७८९०]/g,function(n){return m.number[n]});return Number(a)}function s(e){return e.toString().replace(/\d/g,function(a){return m.locale[a]})}var w={ordinalNumber:P,era:i({values:h,defaultWidth:"wide"}),quarter:i({values:c,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:i({values:f,defaultWidth:"wide"}),day:i({values:v,defaultWidth:"wide"}),dayPeriod:i({values:b,defaultWidth:"wide",formattingValues:g,defaultFormattingWidth:"wide"})},y={lessThanXSeconds:{one:"१ सेकंड से कम",other:"{{count}} सेकंड से कम"},xSeconds:{one:"१ सेकंड",other:"{{count}} सेकंड"},halfAMinute:"आधा मिनट",lessThanXMinutes:{one:"१ मिनट से कम",other:"{{count}} मिनट से कम"},xMinutes:{one:"१ मिनट",other:"{{count}} मिनट"},aboutXHours:{one:"लगभग १ घंटा",other:"लगभग {{count}} घंटे"},xHours:{one:"१ घंटा",other:"{{count}} घंटे"},xDays:{one:"१ दिन",other:"{{count}} दिन"},aboutXWeeks:{one:"लगभग १ सप्ताह",other:"लगभग {{count}} सप्ताह"},xWeeks:{one:"१ सप्ताह",other:"{{count}} सप्ताह"},aboutXMonths:{one:"लगभग १ महीना",other:"लगभग {{count}} महीने"},xMonths:{one:"१ महीना",other:"{{count}} महीने"},aboutXYears:{one:"लगभग १ वर्ष",other:"लगभग {{count}} वर्ष"},xYears:{one:"१ वर्ष",other:"{{count}} वर्ष"},overXYears:{one:"१ वर्ष से अधिक",other:"{{count}} वर्ष से अधिक"},almostXYears:{one:"लगभग १ वर्ष",other:"लगभग {{count}} वर्ष"}},M=function(a,n,t){var r,d=y[a];return typeof d=="string"?r=d:n===1?r=d.one:r=d.other.replace("{{count}}",s(n)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?r+"मे ":r+" पहले":r},W={full:"EEEE, do MMMM, y",long:"do MMMM, y",medium:"d MMM, y",short:"dd/MM/yyyy"},k={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},D={full:"{{date}} 'को' {{time}}",long:"{{date}} 'को' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},x={date:u({formats:W,defaultWidth:"full"}),time:u({formats:k,defaultWidth:"full"}),dateTime:u({formats:D,defaultWidth:"full"})},N={lastWeek:"'पिछले' eeee p",yesterday:"'कल' p",today:"'आज' p",tomorrow:"'कल' p",nextWeek:"eeee 'को' p",other:"P"},F=function(a,n,t,r){return N[a]},V=/^[०१२३४५६७८९]+/i,z=/^[०१२३४५६७८९]+/i,X={narrow:/^(ईसा-पूर्व|ईस्वी)/i,abbreviated:/^(ईसा\.?\s?पूर्व\.?|ईसा\.?)/i,wide:/^(ईसा-पूर्व|ईसवी पूर्व|ईसवी सन|ईसवी)/i},L={any:[/^b/i,/^(a|c)/i]},C={narrow:/^[1234]/i,abbreviated:/^ति[1234]/i,wide:/^[1234](पहली|दूसरी|तीसरी|चौथी)? तिमाही/i},E={any:[/1/i,/2/i,/3/i,/4/i]},S={narrow:/^[जफ़माअप्मईजूनजुअगसिअक्तनदि]/i,abbreviated:/^(जन|फ़र|मार्च|अप्|मई|जून|जुल|अग|सित|अक्तू|नव|दिस)/i,wide:/^(जनवरी|फ़रवरी|मार्च|अप्रैल|मई|जून|जुलाई|अगस्त|सितंबर|अक्तूबर|नवंबर|दिसंबर)/i},T={narrow:[/^ज/i,/^फ़/i,/^मा/i,/^अप्/i,/^मई/i,/^जू/i,/^जु/i,/^अग/i,/^सि/i,/^अक्तू/i,/^न/i,/^दि/i],any:[/^जन/i,/^फ़/i,/^मा/i,/^अप्/i,/^मई/i,/^जू/i,/^जु/i,/^अग/i,/^सि/i,/^अक्तू/i,/^नव/i,/^दिस/i]},R={narrow:/^[रविसोममंगलबुधगुरुशुक्रशनि]/i,short:/^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,abbreviated:/^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,wide:/^(रविवार|सोमवार|मंगलवार|बुधवार|गुरुवार|शुक्रवार|शनिवार)/i},Y={narrow:[/^रवि/i,/^सोम/i,/^मंगल/i,/^बुध/i,/^गुरु/i,/^शुक्र/i,/^शनि/i],any:[/^रवि/i,/^सोम/i,/^मंगल/i,/^बुध/i,/^गुरु/i,/^शुक्र/i,/^शनि/i]},_={narrow:/^(पू|अ|म|द.\?|सु|दो|शा|रा)/i,any:/^(पूर्वाह्न|अपराह्न|म|द.\?|सु|दो|शा|रा)/i},q={any:{am:/^पूर्वाह्न/i,pm:/^अपराह्न/i,midnight:/^मध्य/i,noon:/^दो/i,morning:/सु/i,afternoon:/दो/i,evening:/शा/i,night:/रा/i}},O={ordinalNumber:l({matchPattern:V,parsePattern:z,valueCallback:p}),era:o({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:L,defaultParseWidth:"any"}),quarter:o({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:o({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:T,defaultParseWidth:"any"}),day:o({matchPatterns:R,defaultMatchWidth:"wide",parsePatterns:Y,defaultParseWidth:"any"}),dayPeriod:o({matchPatterns:_,defaultMatchWidth:"any",parsePatterns:q,defaultParseWidth:"any"})},G={code:"hi",formatDistance:M,formatLong:x,formatRelative:F,localize:w,match:O,options:{weekStartsOn:0,firstWeekContainsDate:4}};export{G as default};
//# sourceMappingURL=index.e3df2ca2.js.map
