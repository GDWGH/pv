import{d as m,u as p,a6 as b,m as u,B as f,o as d,g as c,e as t,t as n,f as e,b as h,w as v,Q as k,J as x,K as _,F as y,j as w}from"./index.3d160d1f.js";/*! PatchyVideo/Platinum by VoileLabs */const C=["textContent"],V=t("div",{class:"i-uil:external-link-alt text-lg"},null,-1),B=t("div",{class:"w-full h-px my-2 bg-gray-300"},null,-1),L={key:0,class:"flex flex-col"},N={class:"mb-1"},A=["textContent"],D=["textContent"],E={class:"w-full max-w-112 rounded-lg border border-purple-300 dark:border-gray-600 bg-white dark:bg-gray-800"},F={class:"mt-4"},R={class:"mb-1"},S=["textContent"],T={class:"w-full max-w-112 rounded-lg border border-purple-300 dark:border-gray-600 bg-white dark:bg-gray-800"},U={key:1,class:"flex"},j={class:"mt-30vh mx-auto text-xl text-gray-600 dark:text-gray-300"},I=["textContent"],J=t("div",{class:"i-uil:spinner-alt text-2xl animate-spin"},null,-1),$=m({__name:"SettingsAccount",setup(K){const{t:s}=p(),o=b(),a=u(""),i=u("");return f(()=>{a.value=o.username||"",i.value=o.desc||""}),(M,l)=>{const g=w("RouterLink");return d(),c(y,null,[t("h2",{class:"inline-block text-2xl font-light",textContent:n(e(s)("settings.account.profile.name"))},null,8,C),h(g,{class:"ml-2 px-1 pb-0.5 rounded-lg border border-purple-400 dark:border-gray-600",to:`/user/${e(o).uid}`},{default:v(()=>[k(n(e(s)("common.nav-top.user.userprofile"))+" ",1),V]),_:1},8,["to"]),B,e(o).isLogin?(d(),c("div",L,[t("div",null,[t("div",N,[t("h3",{class:"font-medium",textContent:n(e(s)("settings.account.profile.username.label"))},null,8,A),t("div",{class:"text-sm text-gray-600 dark:text-gray-300",textContent:n(e(s)("settings.account.profile.username.desc"))},null,8,D)]),t("div",E,[x(t("input",{"onUpdate:modelValue":l[0]||(l[0]=r=>a.value=r),class:"inline-block px-2 py-1 w-full rounded-lg outline-none dark:bg-gray-800"},null,512),[[_,a.value]])])]),t("div",F,[t("div",R,[t("h3",{class:"font-medium",textContent:n(e(s)("settings.account.profile.description.label"))},null,8,S)]),t("div",T,[x(t("textarea",{"onUpdate:modelValue":l[1]||(l[1]=r=>i.value=r),rows:"4",class:"inline-block px-2 py-1 w-full rounded-lg outline-none dark:bg-gray-800"},null,512),[[_,i.value]])])])])):(d(),c("div",U,[t("div",j,[t("div",{class:"inline-block align-middle",textContent:n(e(s)("settings.account.loading"))},null,8,I),J])]))],64)}}});export{$ as default};
//# sourceMappingURL=SettingsAccount.c8caa0fb.js.map
