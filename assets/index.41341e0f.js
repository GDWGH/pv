import{d,e as i,f as u,g as n}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.cdc373b7.js";import"./index.876d4bb9.js";import"./Logo.vue_vue_type_script_setup_true_lang.c18f0d16.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.063a1861.js";import"./use-controllable.ad9c987a.js";/*! PatchyVideo/Platinum by VoileLabs */var s={lessThanXSeconds:"តិចជាង {{count}} វិនាទី",xSeconds:"{{count}} វិនាទី",halfAMinute:"កន្លះនាទី",lessThanXMinutes:"តិចជាង {{count}} នាទី",xMinutes:"{{count}} នាទី",aboutXHours:"ប្រហែល {{count}} ម៉ោង",xHours:"{{count}} ម៉ោង",xDays:"{{count}} ថ្ងៃ",aboutXWeeks:"ប្រហែល {{count}} សប្តាហ៍",xWeeks:"{{count}} សប្តាហ៍",aboutXMonths:"ប្រហែល {{count}} ខែ",xMonths:"{{count}} ខែ",aboutXYears:"ប្រហែល {{count}} ឆ្នាំ",xYears:"{{count}} ឆ្នាំ",overXYears:"ជាង {{count}} ឆ្នាំ",almostXYears:"ជិត {{count}} ឆ្នាំ"},l=function(a,o,t){var m=s[a],r=m;return typeof o=="number"&&(r=r.replace("{{count}}",o.toString())),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"ក្នុងរយៈពេល "+r:r+"មុន":r},h={full:"EEEE do MMMM y",long:"do MMMM y",medium:"d MMM y",short:"dd/MM/yyyy"},v={full:"h:mm:ss a",long:"h:mm:ss a",medium:"h:mm:ss a",short:"h:mm a"},c={full:"{{date}} 'ម៉ោង' {{time}}",long:"{{date}} 'ម៉ោង' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},f={date:d({formats:h,defaultWidth:"full"}),time:d({formats:v,defaultWidth:"full"}),dateTime:d({formats:c,defaultWidth:"full"})},b={lastWeek:"'ថ្ងៃ'eeee'ស​ប្តា​ហ៍​មុនម៉ោង' p",yesterday:"'ម្សិលមិញនៅម៉ោង' p",today:"'ថ្ងៃនេះម៉ោង' p",tomorrow:"'ថ្ងៃស្អែកម៉ោង' p",nextWeek:"'ថ្ងៃ'eeee'ស​ប្តា​ហ៍​ក្រោយម៉ោង' p",other:"P"},g=function(a,o,t,m){return b[a]},P={narrow:["ម.គស","គស"],abbreviated:["មុនគ.ស","គ.ស"],wide:["មុនគ្រិស្តសករាជ","នៃគ្រិស្តសករាជ"]},w={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["ត្រីមាសទី 1","ត្រីមាសទី 2","ត្រីមាសទី 3","ត្រីមាសទី 4"]},y={narrow:["ម.ក","ក.ម","មិ","ម.ស","ឧ.ស","ម.ថ","ក.ដ","សី","កញ","តុ","វិ","ធ"],abbreviated:["មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"],wide:["មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"]},p={narrow:["អា","ច","អ","ព","ព្រ","សុ","ស"],short:["អា","ច","អ","ព","ព្រ","សុ","ស"],abbreviated:["អា","ច","អ","ព","ព្រ","សុ","ស"],wide:["អាទិត្យ","ចន្ទ","អង្គារ","ពុធ","ព្រហស្បតិ៍","សុក្រ","សៅរ៍"]},M={narrow:{am:"ព្រឹក",pm:"ល្ងាច",midnight:"​ពេលកណ្ដាលអធ្រាត្រ",noon:"ពេលថ្ងៃត្រង់",morning:"ពេលព្រឹក",afternoon:"ពេលរសៀល",evening:"ពេលល្ងាច",night:"ពេលយប់"},abbreviated:{am:"ព្រឹក",pm:"ល្ងាច",midnight:"​ពេលកណ្ដាលអធ្រាត្រ",noon:"ពេលថ្ងៃត្រង់",morning:"ពេលព្រឹក",afternoon:"ពេលរសៀល",evening:"ពេលល្ងាច",night:"ពេលយប់"},wide:{am:"ព្រឹក",pm:"ល្ងាច",midnight:"​ពេលកណ្ដាលអធ្រាត្រ",noon:"ពេលថ្ងៃត្រង់",morning:"ពេលព្រឹក",afternoon:"ពេលរសៀល",evening:"ពេលល្ងាច",night:"ពេលយប់"}},W={narrow:{am:"ព្រឹក",pm:"ល្ងាច",midnight:"​ពេលកណ្ដាលអធ្រាត្រ",noon:"ពេលថ្ងៃត្រង់",morning:"ពេលព្រឹក",afternoon:"ពេលរសៀល",evening:"ពេលល្ងាច",night:"ពេលយប់"},abbreviated:{am:"ព្រឹក",pm:"ល្ងាច",midnight:"​ពេលកណ្ដាលអធ្រាត្រ",noon:"ពេលថ្ងៃត្រង់",morning:"ពេលព្រឹក",afternoon:"ពេលរសៀល",evening:"ពេលល្ងាច",night:"ពេលយប់"},wide:{am:"ព្រឹក",pm:"ល្ងាច",midnight:"​ពេលកណ្ដាលអធ្រាត្រ",noon:"ពេលថ្ងៃត្រង់",morning:"ពេលព្រឹក",afternoon:"ពេលរសៀល",evening:"ពេលល្ងាច",night:"ពេលយប់"}},k=function(a,o){var t=Number(a);return t.toString()},D={ordinalNumber:k,era:i({values:P,defaultWidth:"wide"}),quarter:i({values:w,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:i({values:y,defaultWidth:"wide"}),day:i({values:p,defaultWidth:"wide"}),dayPeriod:i({values:M,defaultWidth:"wide",formattingValues:W,defaultFormattingWidth:"wide"})},x=/^(\d+)(th|st|nd|rd)?/i,F=/\d+/i,V={narrow:/^(ម\.)?គស/i,abbreviated:/^(មុន)?គ\.ស/i,wide:/^(មុន|នៃ)គ្រិស្តសករាជ/i},X={any:[/^(ម|មុន)គ\.?ស/i,/^(នៃ)?គ\.?ស/i]},C={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^(ត្រីមាស)(ទី)?\s?[1234]/i},N={any:[/1/i,/2/i,/3/i,/4/i]},E={narrow:/^(ម\.ក|ក\.ម|មិ|ម\.ស|ឧ\.ស|ម\.ថ|ក\.ដ|សី|កញ|តុ|វិ|ធ)/i,abbreviated:/^(មករា|កុម្ភៈ|មីនា|មេសា|ឧសភា|មិថុនា|កក្កដា|សីហា|កញ្ញា|តុលា|វិច្ឆិកា|ធ្នូ)/i,wide:/^(មករា|កុម្ភៈ|មីនា|មេសា|ឧសភា|មិថុនា|កក្កដា|សីហា|កញ្ញា|តុលា|វិច្ឆិកា|ធ្នូ)/i},L={narrow:[/^ម\.ក/i,/^ក\.ម/i,/^មិ/i,/^ម\.ស/i,/^ឧ\.ស/i,/^ម\.ថ/i,/^ក\.ដ/i,/^សី/i,/^កញ/i,/^តុ/i,/^វិ/i,/^ធ/i],any:[/^មក/i,/^កុ/i,/^មីន/i,/^មេ/i,/^ឧស/i,/^មិថ/i,/^កក/i,/^សី/i,/^កញ/i,/^តុ/i,/^វិច/i,/^ធ/i]},Q={narrow:/^(អា|ច|អ|ព|ព្រ|សុ|ស)/i,short:/^(អា|ច|អ|ព|ព្រ|សុ|ស)/i,abbreviated:/^(អា|ច|អ|ព|ព្រ|សុ|ស)/i,wide:/^(អាទិត្យ|ចន្ទ|អង្គារ|ពុធ|ព្រហស្បតិ៍|សុក្រ|សៅរ៍)/i},S={narrow:[/^អា/i,/^ច/i,/^អ/i,/^ព/i,/^ព្រ/i,/^សុ/i,/^ស/i],any:[/^អា/i,/^ច/i,/^អ/i,/^ព/i,/^ព្រ/i,/^សុ/i,/^សៅ/i]},q={narrow:/^(ព្រឹក|ល្ងាច|ពេលព្រឹក|ពេលថ្ងៃត្រង់|ពេលល្ងាច|ពេលរសៀល|ពេលយប់|ពេលកណ្ដាលអធ្រាត្រ)/i,any:/^(ព្រឹក|ល្ងាច|ពេលព្រឹក|ពេលថ្ងៃត្រង់|ពេលល្ងាច|ពេលរសៀល|ពេលយប់|ពេលកណ្ដាលអធ្រាត្រ)/i},R={any:{am:/^ព្រឹក/i,pm:/^ល្ងាច/i,midnight:/^ពេលកណ្ដាលអធ្រាត្រ/i,noon:/^ពេលថ្ងៃត្រង់/i,morning:/ពេលព្រឹក/i,afternoon:/ពេលរសៀល/i,evening:/ពេលល្ងាច/i,night:/ពេលយប់/i}},T={ordinalNumber:u({matchPattern:x,parsePattern:F,valueCallback:function(a){return parseInt(a,10)}}),era:n({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any"}),quarter:n({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:n({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:L,defaultParseWidth:"any"}),day:n({matchPatterns:Q,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any"}),dayPeriod:n({matchPatterns:q,defaultMatchWidth:"any",parsePatterns:R,defaultParseWidth:"any"})},A={code:"km",formatDistance:l,formatLong:f,formatRelative:g,localize:D,match:T,options:{weekStartsOn:0,firstWeekContainsDate:1}};export{A as default};
//# sourceMappingURL=index.41341e0f.js.map
