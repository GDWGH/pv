import{d as s,u as a,m as l,z as c,o as r,g as i,P as u,f as d,at as p,e as m}from"./index.dee047dc.js";/*! PatchyVideo/Platinum by VoileLabs */const _=["title"],f=m("div",{class:"i-uil:top-arrow-to-top text-3xl"},null,-1),v=[f],w=s({__name:"BackTop",setup(b){const{t:n}=a(),o=l(document.body.scrollTop||document.documentElement.scrollTop);c(document,"scroll",p(()=>{o.value=document.body.scrollTop||document.documentElement.scrollTop},10,!0));function e(){o.value>0&&(window.requestAnimationFrame(e),window.scrollTo(0,o.value-o.value/5))}return(k,t)=>(r(),i("div",{class:u(["fixed bottom-5 right-5 p-2 cursor-pointer select-none bg-gray-50 dark:bg-gray-800 shadow transition-opacity rounded-full",{"opacity-50":!o.value}]),title:d(n)("ui.back-top.back-top"),onClick:t[0]||(t[0]=T=>e())},v,10,_))}});export{w as _};
//# sourceMappingURL=BackTop.vue_vue_type_script_setup_true_lang.72b39fe4.js.map
