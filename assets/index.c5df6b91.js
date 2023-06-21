import{d as s,e as o,f as d,g as u}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.602dfe0b.js";import"./index.acbccf05.js";import"./Logo.vue_vue_type_script_setup_true_lang.f519d0a5.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.051f7ee9.js";import"./use-controllable.50c0ea9e.js";/*! PatchyVideo/Platinum by VoileLabs */var m={lessThanXSeconds:{past:"{{count}} წამზე ნაკლები ხნის წინ",present:"{{count}} წამზე ნაკლები",future:"{{count}} წამზე ნაკლებში"},xSeconds:{past:"{{count}} წამის წინ",present:"{{count}} წამი",future:"{{count}} წამში"},halfAMinute:{past:"ნახევარი წუთის წინ",present:"ნახევარი წუთი",future:"ნახევარი წუთში"},lessThanXMinutes:{past:"{{count}} წუთზე ნაკლები ხნის წინ",present:"{{count}} წუთზე ნაკლები",future:"{{count}} წუთზე ნაკლებში"},xMinutes:{past:"{{count}} წუთის წინ",present:"{{count}} წუთი",future:"{{count}} წუთში"},aboutXHours:{past:"დაახლოებით {{count}} საათის წინ",present:"დაახლოებით {{count}} საათი",future:"დაახლოებით {{count}} საათში"},xHours:{past:"{{count}} საათის წინ",present:"{{count}} საათი",future:"{{count}} საათში"},xDays:{past:"{{count}} დღის წინ",present:"{{count}} დღე",future:"{{count}} დღეში"},aboutXWeeks:{past:"დაახლოებით {{count}} კვირას წინ",present:"დაახლოებით {{count}} კვირა",future:"დაახლოებით {{count}} კვირაში"},xWeeks:{past:"{{count}} კვირას კვირა",present:"{{count}} კვირა",future:"{{count}} კვირაში"},aboutXMonths:{past:"დაახლოებით {{count}} თვის წინ",present:"დაახლოებით {{count}} თვე",future:"დაახლოებით {{count}} თვეში"},xMonths:{past:"{{count}} თვის წინ",present:"{{count}} თვე",future:"{{count}} თვეში"},aboutXYears:{past:"დაახლოებით {{count}} წლის წინ",present:"დაახლოებით {{count}} წელი",future:"დაახლოებით {{count}} წელში"},xYears:{past:"{{count}} წლის წინ",present:"{{count}} წელი",future:"{{count}} წელში"},overXYears:{past:"{{count}} წელზე მეტი ხნის წინ",present:"{{count}} წელზე მეტი",future:"{{count}} წელზე მეტი ხნის შემდეგ"},almostXYears:{past:"თითქმის {{count}} წლის წინ",present:"თითქმის {{count}} წელი",future:"თითქმის {{count}} წელში"}},l=function(t,e,a){var r,i=m[t];return typeof i=="string"?r=i:a!=null&&a.addSuffix&&a.comparison&&a.comparison>0?r=i.future.replace("{{count}}",String(e)):a!=null&&a.addSuffix?r=i.past.replace("{{count}}",String(e)):r=i.present.replace("{{count}}",String(e)),r},c={full:"EEEE, do MMMM, y",long:"do, MMMM, y",medium:"d, MMM, y",short:"dd/MM/yyyy"},f={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},h={full:"{{date}} {{time}}'-ზე'",long:"{{date}} {{time}}'-ზე'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},p={date:s({formats:c,defaultWidth:"full"}),time:s({formats:f,defaultWidth:"full"}),dateTime:s({formats:h,defaultWidth:"full"})},v={lastWeek:"'წინა' eeee p'-ზე'",yesterday:"'გუშინ' p'-ზე'",today:"'დღეს' p'-ზე'",tomorrow:"'ხვალ' p'-ზე'",nextWeek:"'შემდეგი' eeee p'-ზე'",other:"P"},g=function(t,e,a,r){return v[t]},b={narrow:["ჩ.წ-მდე","ჩ.წ"],abbreviated:["ჩვ.წ-მდე","ჩვ.წ"],wide:["ჩვენს წელთაღრიცხვამდე","ჩვენი წელთაღრიცხვით"]},P={narrow:["1","2","3","4"],abbreviated:["1-ლი კვ","2-ე კვ","3-ე კვ","4-ე კვ"],wide:["1-ლი კვარტალი","2-ე კვარტალი","3-ე კვარტალი","4-ე კვარტალი"]},y={narrow:["ია","თე","მა","აპ","მს","ვნ","ვლ","აგ","სე","ოქ","ნო","დე"],abbreviated:["იან","თებ","მარ","აპრ","მაი","ივნ","ივლ","აგვ","სექ","ოქტ","ნოე","დეკ"],wide:["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"]},M={narrow:["კვ","ორ","სა","ოთ","ხუ","პა","შა"],short:["კვი","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],abbreviated:["კვი","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],wide:["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"]},w={narrow:{am:"a",pm:"p",midnight:"შუაღამე",noon:"შუადღე",morning:"დილა",afternoon:"საღამო",evening:"საღამო",night:"ღამე"},abbreviated:{am:"AM",pm:"PM",midnight:"შუაღამე",noon:"შუადღე",morning:"დილა",afternoon:"საღამო",evening:"საღამო",night:"ღამე"},wide:{am:"a.m.",pm:"p.m.",midnight:"შუაღამე",noon:"შუადღე",morning:"დილა",afternoon:"საღამო",evening:"საღამო",night:"ღამე"}},W={narrow:{am:"a",pm:"p",midnight:"შუაღამით",noon:"შუადღისას",morning:"დილით",afternoon:"ნაშუადღევს",evening:"საღამოს",night:"ღამით"},abbreviated:{am:"AM",pm:"PM",midnight:"შუაღამით",noon:"შუადღისას",morning:"დილით",afternoon:"ნაშუადღევს",evening:"საღამოს",night:"ღამით"},wide:{am:"a.m.",pm:"p.m.",midnight:"შუაღამით",noon:"შუადღისას",morning:"დილით",afternoon:"ნაშუადღევს",evening:"საღამოს",night:"ღამით"}},k=function(t){var e=Number(t);return e===1?e+"-ლი":e+"-ე"},D={ordinalNumber:k,era:o({values:b,defaultWidth:"wide"}),quarter:o({values:P,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:o({values:y,defaultWidth:"wide"}),day:o({values:M,defaultWidth:"wide"}),dayPeriod:o({values:w,defaultWidth:"wide",formattingValues:W,defaultFormattingWidth:"wide"})},x=/^(\d+)(-ლი|-ე)?/i,F=/\d+/i,z={narrow:/^(ჩვ?\.წ)/i,abbreviated:/^(ჩვ?\.წ)/i,wide:/^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე|ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i},S={any:[/^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე)/i,/^(ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i]},V={narrow:/^[1234]/i,abbreviated:/^[1234]-(ლი|ე)? კვ/i,wide:/^[1234]-(ლი|ე)? კვარტალი/i},X={any:[/1/i,/2/i,/3/i,/4/i]},C={any:/^(ია|თე|მა|აპ|მს|ვნ|ვლ|აგ|სე|ოქ|ნო|დე)/i},N={any:[/^ია/i,/^თ/i,/^მარ/i,/^აპ/i,/^მაი/i,/^ი?ვნ/i,/^ი?ვლ/i,/^აგ/i,/^ს/i,/^ო/i,/^ნ/i,/^დ/i]},E={narrow:/^(კვ|ორ|სა|ოთ|ხუ|პა|შა)/i,short:/^(კვი|ორშ|სამ|ოთხ|ხუთ|პარ|შაბ)/i,wide:/^(კვირა|ორშაბათი|სამშაბათი|ოთხშაბათი|ხუთშაბათი|პარასკევი|შაბათი)/i},L={any:[/^კვ/i,/^ორ/i,/^სა/i,/^ოთ/i,/^ხუ/i,/^პა/i,/^შა/i]},R={any:/^([ap]\.?\s?m\.?|შუაღ|დილ)/i},T={any:{am:/^a/i,pm:/^p/i,midnight:/^შუაღ/i,noon:/^შუადღ/i,morning:/^დილ/i,afternoon:/ნაშუადღევს/i,evening:/საღამო/i,night:/ღამ/i}},Y={ordinalNumber:d({matchPattern:x,parsePattern:F,valueCallback:function(t){return parseInt(t,10)}}),era:u({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any"}),quarter:u({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:u({matchPatterns:C,defaultMatchWidth:"any",parsePatterns:N,defaultParseWidth:"any"}),day:u({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:L,defaultParseWidth:"any"}),dayPeriod:u({matchPatterns:R,defaultMatchWidth:"any",parsePatterns:T,defaultParseWidth:"any"})},Q={code:"ka",formatDistance:l,formatLong:p,formatRelative:g,localize:D,match:Y,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{Q as default};
//# sourceMappingURL=index.c5df6b91.js.map
