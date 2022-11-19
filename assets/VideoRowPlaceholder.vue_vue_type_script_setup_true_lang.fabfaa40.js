import{_ as y}from"./Cover.vue_vue_type_script_setup_true_lang.9396f881.js";import{c as k}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.fd1981ec.js";import{d as g,o as e,g as o,c as i,w as d,e as a,t as c,F as s,h as _,$ as h,j as f,ar as v,as as p,b as u,i as m,ax as b,Q as C,a1 as S}from"./index.2528643d.js";import{C as $}from"./CoverPlaceholder.2b79ba8c.js";/*! PatchyVideo/Platinum by VoileLabs */const V=t=>(v("data-v-72357c6c"),t=t(),p(),t),T={class:"title inline-block text-xl"},B=["textContent"],L=V(()=>a("div",{class:"title-arrow i-uil:arrow-right inline-block w-8 h-8 align-top text-gray-600 dark:text-gray-300 transform -translate-x-1 opacity-25 transition-all duration-200"},null,-1)),R=["textContent"],I=["textContent"],N={key:1,class:"w-full text-sm truncate text-gray-600 dark:text-gray-300 font-light"},D=g({__name:"VideoRow",props:{name:null,titleLinksTo:null,count:null,rows:null,videos:null,videoShowTitle:{type:Boolean},videoShowDate:{type:Boolean}},setup(t){return(x,w)=>{var r;const l=f("RouterLink");return e(),o(s,null,[t.titleLinksTo?(e(),i(l,{key:0,to:t.titleLinksTo},{default:d(()=>[a("h4",T,[a("span",{class:"title-text",textContent:c(t.name)},null,8,B),L])]),_:1},8,["to"])):(e(),o("h4",{key:1,class:"inline-block text-xl",textContent:c(t.name)},null,8,R)),a("div",{class:"grid mt-2 grid-flow-row gap-4",style:h({gridTemplateColumns:`repeat(${t.count/((r=t.rows)!=null?r:1)}, minmax(0, 1fr))`})},[(e(!0),o(s,null,_(t.videos.slice(0,t.count),n=>(e(),i(l,{key:n.id.toHexString(),to:`/video/${n.id.toHexString()}`,class:"rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-100"},{default:d(()=>[u(y,{title:n.item.title,"cover-image":n.item.coverImage,class:"rounded-md border border-gray-200 dark:border-gray-800"},null,8,["title","cover-image"]),t.videoShowTitle?(e(),o("a",{key:0,class:"w-full overflow-hidden line-clamp-2 overflow-ellipsis",textContent:c(n.item.title)},null,8,I)):m("",!0),t.videoShowDate?(e(),o("div",N,[(e(),i(b,null,{default:d(()=>[u(k,{date:n.meta.createdAt},null,8,["date"])]),_:2},1024)),C("  ")])):m("",!0)]),_:2},1032,["to"]))),128))],4)],64)}}});const Q=S(D,[["__scopeId","data-v-72357c6c"]]),F=a("h4",{class:"text-xl w-64 rounded-md bg-gray-300 dark:bg-gray-700"},"   ",-1),H=a("div",{class:"w-4/5 h-4 mt-1 rounded-md bg-gray-300 dark:bg-gray-700"},"   ",-1),P=a("div",{class:"w-3/5 h-3.5 mt-1 rounded-md bg-gray-300 dark:bg-gray-700"},"   ",-1),q=g({__name:"VideoRowPlaceholder",props:{count:null,rows:null},setup(t){return(x,w)=>{var l;return e(),o(s,null,[F,a("div",{class:"grid mt-2 grid-flow-row gap-4",style:h({gridTemplateColumns:`repeat(${t.count/((l=t.rows)!=null?l:1)}, minmax(0, 1fr))`})},[(e(!0),o(s,null,_(t.count,r=>(e(),o("div",{key:r,class:"rounded-md"},[u($,{class:"rounded-md"}),H,P]))),128))],4)],64)}}});export{Q as V,q as _};
//# sourceMappingURL=VideoRowPlaceholder.vue_vue_type_script_setup_true_lang.fabfaa40.js.map
