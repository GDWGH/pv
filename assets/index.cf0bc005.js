import{f as i,a as o,b as m,m as g}from"./index.a8b07fdb.js";import{e as a}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.b3214a6a.js";import"./index.c48c7f99.js";import"./Logo.vue_vue_type_script_setup_true_lang.6f140d37.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.6ddd6a15.js";import"./use-controllable.dbf44e1a.js";/*! PatchyVideo/Platinum by VoileLabs */var d={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},h={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},n={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},u={narrow:n.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:n.wide},s={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},l={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},v={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},c=function(t){var r=Number(t);return r+"."},b={ordinalNumber:c,era:a({values:d,defaultWidth:"wide"}),quarter:a({values:h,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:a({values:n,formattingValues:u,defaultWidth:"wide"}),day:a({values:s,defaultWidth:"wide"}),dayPeriod:a({values:l,defaultWidth:"wide",formattingValues:v,defaultFormattingWidth:"wide"})},S={code:"de",formatDistance:i,formatLong:o,formatRelative:m,localize:b,match:g,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{S as default};
//# sourceMappingURL=index.cf0bc005.js.map
