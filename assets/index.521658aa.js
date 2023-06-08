import{e as o,d as u,f as l,g as d}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.fcb3a685.js";import"./index.0c820647.js";import"./Logo.vue_vue_type_script_setup_true_lang.84f46bde.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.d38a1d75.js";import"./use-controllable.3da68426.js";/*! PatchyVideo/Platinum by VoileLabs */var h={locale:{1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},number:{"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"}},c={narrow:["খ্রিঃপূঃ","খ্রিঃ"],abbreviated:["খ্রিঃপূর্ব","খ্রিঃ"],wide:["খ্রিস্টপূর্ব","খ্রিস্টাব্দ"]},v={narrow:["১","২","৩","৪"],abbreviated:["১ত্রৈ","২ত্রৈ","৩ত্রৈ","৪ত্রৈ"],wide:["১ম ত্রৈমাসিক","২য় ত্রৈমাসিক","৩য় ত্রৈমাসিক","৪র্থ ত্রৈমাসিক"]},f={narrow:["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্ট","অক্টো","নভে","ডিসে"],abbreviated:["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্ট","অক্টো","নভে","ডিসে"],wide:["জানুয়ারি","ফেব্রুয়ারি","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"]},b={narrow:["র","সো","ম","বু","বৃ","শু","শ"],short:["রবি","সোম","মঙ্গল","বুধ","বৃহ","শুক্র","শনি"],abbreviated:["রবি","সোম","মঙ্গল","বুধ","বৃহ","শুক্র","শনি"],wide:["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার ","শুক্রবার","শনিবার"]},g={narrow:{am:"পূ",pm:"অপ",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},abbreviated:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},wide:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"}},w={narrow:{am:"পূ",pm:"অপ",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},abbreviated:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},wide:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"}};function P(r,e){if(r>18&&r<=31)return e+"শে";switch(r){case 1:return e+"লা";case 2:case 3:return e+"রা";case 4:return e+"ঠা";default:return e+"ই"}}var p=function(e,i){var t=Number(e),a=s(t),n=i==null?void 0:i.unit;if(n==="date")return P(t,a);if(t>10||t===0)return a+"তম";var m=t%10;switch(m){case 2:case 3:return a+"য়";case 4:return a+"র্থ";case 6:return a+"ষ্ঠ";default:return a+"ম"}};function s(r){return r.toString().replace(/\d/g,function(e){return h.locale[e]})}var y={ordinalNumber:p,era:o({values:c,defaultWidth:"wide"}),quarter:o({values:v,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:o({values:f,defaultWidth:"wide"}),day:o({values:b,defaultWidth:"wide"}),dayPeriod:o({values:g,defaultWidth:"wide",formattingValues:w,defaultFormattingWidth:"wide"})},M={lessThanXSeconds:{one:"প্রায় ১ সেকেন্ড",other:"প্রায় {{count}} সেকেন্ড"},xSeconds:{one:"১ সেকেন্ড",other:"{{count}} সেকেন্ড"},halfAMinute:"আধ মিনিট",lessThanXMinutes:{one:"প্রায় ১ মিনিট",other:"প্রায় {{count}} মিনিট"},xMinutes:{one:"১ মিনিট",other:"{{count}} মিনিট"},aboutXHours:{one:"প্রায় ১ ঘন্টা",other:"প্রায় {{count}} ঘন্টা"},xHours:{one:"১ ঘন্টা",other:"{{count}} ঘন্টা"},xDays:{one:"১ দিন",other:"{{count}} দিন"},aboutXWeeks:{one:"প্রায় ১ সপ্তাহ",other:"প্রায় {{count}} সপ্তাহ"},xWeeks:{one:"১ সপ্তাহ",other:"{{count}} সপ্তাহ"},aboutXMonths:{one:"প্রায় ১ মাস",other:"প্রায় {{count}} মাস"},xMonths:{one:"১ মাস",other:"{{count}} মাস"},aboutXYears:{one:"প্রায় ১ বছর",other:"প্রায় {{count}} বছর"},xYears:{one:"১ বছর",other:"{{count}} বছর"},overXYears:{one:"১ বছরের বেশি",other:"{{count}} বছরের বেশি"},almostXYears:{one:"প্রায় ১ বছর",other:"প্রায় {{count}} বছর"}},W=function(e,i,t){var a,n=M[e];return typeof n=="string"?a=n:i===1?a=n.one:a=n.other.replace("{{count}}",s(i)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?a+" এর মধ্যে":a+" আগে":a},k={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},D={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},x={full:"{{date}} {{time}} 'সময়'",long:"{{date}} {{time}} 'সময়'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},F={date:u({formats:k,defaultWidth:"full"}),time:u({formats:D,defaultWidth:"full"}),dateTime:u({formats:x,defaultWidth:"full"})},V={lastWeek:"'গত' eeee 'সময়' p",yesterday:"'গতকাল' 'সময়' p",today:"'আজ' 'সময়' p",tomorrow:"'আগামীকাল' 'সময়' p",nextWeek:"eeee 'সময়' p",other:"P"},z=function(e,i,t,a){return V[e]},X=/^(\d+)(ম|য়|র্থ|ষ্ঠ|শে|ই|তম)?/i,C=/\d+/i,L={narrow:/^(খ্রিঃপূঃ|খ্রিঃ)/i,abbreviated:/^(খ্রিঃপূর্ব|খ্রিঃ)/i,wide:/^(খ্রিস্টপূর্ব|খ্রিস্টাব্দ)/i},E={narrow:[/^খ্রিঃপূঃ/i,/^খ্রিঃ/i],abbreviated:[/^খ্রিঃপূর্ব/i,/^খ্রিঃ/i],wide:[/^খ্রিস্টপূর্ব/i,/^খ্রিস্টাব্দ/i]},N={narrow:/^[১২৩৪]/i,abbreviated:/^[১২৩৪]ত্রৈ/i,wide:/^[১২৩৪](ম|য়|র্থ)? ত্রৈমাসিক/i},S={any:[/১/i,/২/i,/৩/i,/৪/i]},T={narrow:/^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i,abbreviated:/^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i,wide:/^(জানুয়ারি|ফেব্রুয়ারি|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্টেম্বর|অক্টোবর|নভেম্বর|ডিসেম্বর)/i},O={any:[/^জানু/i,/^ফেব্রু/i,/^মার্চ/i,/^এপ্রিল/i,/^মে/i,/^জুন/i,/^জুলাই/i,/^আগস্ট/i,/^সেপ্ট/i,/^অক্টো/i,/^নভে/i,/^ডিসে/i]},R={narrow:/^(র|সো|ম|বু|বৃ|শু|শ)+/i,short:/^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i,abbreviated:/^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i,wide:/^(রবিবার|সোমবার|মঙ্গলবার|বুধবার|বৃহস্পতিবার |শুক্রবার|শনিবার)+/i},Y={narrow:[/^র/i,/^সো/i,/^ম/i,/^বু/i,/^বৃ/i,/^শু/i,/^শ/i],short:[/^রবি/i,/^সোম/i,/^মঙ্গল/i,/^বুধ/i,/^বৃহ/i,/^শুক্র/i,/^শনি/i],abbreviated:[/^রবি/i,/^সোম/i,/^মঙ্গল/i,/^বুধ/i,/^বৃহ/i,/^শুক্র/i,/^শনি/i],wide:[/^রবিবার/i,/^সোমবার/i,/^মঙ্গলবার/i,/^বুধবার/i,/^বৃহস্পতিবার /i,/^শুক্রবার/i,/^শনিবার/i]},q={narrow:/^(পূ|অপ|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i,abbreviated:/^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i,wide:/^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i},_={any:{am:/^পূ/i,pm:/^অপ/i,midnight:/^মধ্যরাত/i,noon:/^মধ্যাহ্ন/i,morning:/সকাল/i,afternoon:/বিকাল/i,evening:/সন্ধ্যা/i,night:/রাত/i}},H={ordinalNumber:l({matchPattern:X,parsePattern:C,valueCallback:function(e){return parseInt(e,10)}}),era:d({matchPatterns:L,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"wide"}),quarter:d({matchPatterns:N,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:d({matchPatterns:T,defaultMatchWidth:"wide",parsePatterns:O,defaultParseWidth:"any"}),day:d({matchPatterns:R,defaultMatchWidth:"wide",parsePatterns:Y,defaultParseWidth:"wide"}),dayPeriod:d({matchPatterns:q,defaultMatchWidth:"wide",parsePatterns:_,defaultParseWidth:"any"})},G={code:"bn",formatDistance:W,formatLong:F,formatRelative:z,localize:y,match:H,options:{weekStartsOn:0,firstWeekContainsDate:1}};export{G as default};
//# sourceMappingURL=index.521658aa.js.map
