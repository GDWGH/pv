import{d as E,u as D,a6 as L,U as u,B as k,m as P,o as i,c as m,w as d,a as _,_ as p,e as t,t as x,f as s,P as r,g as C,h as A,F as B,ax as R,k as T,ac as V,ad as I,at as S}from"./index.2ed5d8c9.js";import{_ as $}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.625b0f30.js";import{s as F}from"./setSiteTitle.db0fa839.js";import"./Logo.vue_vue_type_script_setup_true_lang.44b0f72e.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.61f91faf.js";import"./use-controllable.65590c63.js";/*! PatchyVideo/Platinum by VoileLabs */const O={class:"flex flex-col sm:flex-row gap-x-8 gap-y-4 max-w-screen-xl mx-4 sm:mx-auto mt-4"},j={class:"flex-shrink-0 w-full sm:w-48"},z={class:"flex flex-row flex-nowrap justify-between items-center"},N=["textContent"],U={class:"flex mt-3 flex-col gap-y-1"},q=["onClick"],G=["textContent"],H={class:"flex-1 flex-shrink-0 min-h-70vh"},J={class:"mt-30vh text-center text-xl text-gray-600 dark:text-gray-300"},K=["textContent"],M=t("div",{class:"i-uil:spinner-alt text-2xl animate-spin"},null,-1),st=E({__name:"ChangeSettings",setup(Q){const w=V(),f=I(),{t:n}=D(),y=L(),a=u(()=>w.params.catogory),h=u(()=>{const l=[{name:"general",text:n("settings.general.name"),icon:"i-mdi-light:cog",component:_(()=>p(()=>import("./SettingsGeneral.2942fa6d.js"),["assets/SettingsGeneral.2942fa6d.js","assets/index.2ed5d8c9.js","assets/index.40792eff.css","assets/PvSelect.vue_vue_type_script_setup_true_lang.61f91faf.js","assets/use-controllable.65590c63.js"]))},{name:"appearance",text:n("settings.appearance.name"),icon:"i-ph:magic-wand-light",component:_(()=>p(()=>import("./SettingsAppearance.093bf73f.js"),["assets/SettingsAppearance.093bf73f.js","assets/index.2ed5d8c9.js","assets/index.40792eff.css","assets/PvSwitch.vue_vue_type_script_setup_true_lang.68fd038b.js","assets/use-controllable.65590c63.js","assets/index.8fe587a6.js"]))}];return y.isLogin&&l.push({name:"account",text:n("settings.account.name"),icon:"i-ph:user-circle-light",component:_(()=>p(()=>import("./SettingsAccount.94c0dd2a.js"),["assets/SettingsAccount.94c0dd2a.js","assets/index.2ed5d8c9.js","assets/index.40792eff.css"]))}),l}),c=u(()=>h.value.find(l=>l.name===a.value));k(()=>{!c.value&&a.value&&f.push("/settings/general")}),k(()=>{c.value&&F(`${c.value.text} - ${n("settings.settings")} - PatchyVideo`)});const o=P(!0),g=S(()=>{o.value=!o.value},100,!1);return(l,v)=>{const b=$;return i(),m(b,null,{default:d(()=>[t("div",O,[t("div",j,[t("div",z,[t("h1",{class:"text-2xl",textContent:x(s(n)("settings.settings"))},null,8,N),t("div",{class:r(["sm:hidden text-3xl",{"i-uil:arrow-from-top":o.value,"i-uil:arrow-to-bottom transform rotate-180":!o.value}]),onClick:v[0]||(v[0]=(...e)=>s(g)&&s(g)(...e))},null,2)]),t("div",{class:r(["overflow-hidden",{"lt-sm:h-0":o.value}])},[t("div",U,[(i(!0),C(B,null,A(s(h),e=>(i(),C("div",{key:e.name,class:r(["pl-2 py-1 rounded-full",{"cursor-default text-purple-900 dark:text-white bg-purple-100 dark:bg-gray-700":s(a)===e.name,"cursor-pointer select-none":s(a)!==e.name}]),onClick:()=>s(a)!==e.name&&s(f).push(`/settings/${e.name}`)},[t("div",{class:r(["inline-block mr-2 text-4xl text-center align-middle",e.icon])},null,2),t("div",{class:"inline-block text-lg align-middle",textContent:x(e.text)},null,8,G)],10,q))),128))])],2)]),t("div",H,[(i(),m(R,{timeout:"150"},{default:d(()=>{var e;return[(i(),m(T((e=s(c))==null?void 0:e.component)))]}),fallback:d(()=>[t("div",J,[t("div",{class:"inline-block align-middle",textContent:x(s(n)("settings.loading"))},null,8,K),M])]),_:1}))])])]),_:1})}}});export{st as default};
//# sourceMappingURL=ChangeSettings.20be03ad.js.map
