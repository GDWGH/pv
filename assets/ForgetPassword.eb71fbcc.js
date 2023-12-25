import{d as Z,u as E,m as b,o as u,g as c,f as o,e,b as v,t as l,J as m,K as x,M as y,i as k,w as S,l as I,a9 as K,au as P,j as T,s as $,Q as C,ar as D,as as F,a1 as L}from"./index.d2f99d5f.js";import{s as N}from"./setSiteTitle.db0fa839.js";import{r as V}from"./resDataStatus.1d07d88c.js";import{_ as z}from"./Logo.vue_vue_type_script_setup_true_lang.8fe2c6c9.js";/*! PatchyVideo/Platinum by VoileLabs */const d=f=>(D("data-v-f4b55bf1"),f=f(),F(),f),j={class:"forget-password h-screen w-full md:min-h-xl flex justify-end bg-center bg-no-repeat bg-cover dark:filter dark:brightness-75"},M={key:0,class:"flex-wrap content-between w-full h-full p-5 shadow text-white flex filter drop-shadow-md backdrop-filter backdrop-blur-sm"},B={class:"w-full text-center"},U={class:"text-lg"},J={class:"w-full space-y-2"},O={class:"flex w-full border-b border-white"},R=d(()=>e("div",{class:"i-uil:envelope align-middle text-2xl"},null,-1)),q=["placeholder","onKeydown"],H={class:"text-red-500 text-sm h-4"},Q={class:"space-y-1"},G=["disabled"],W={key:0,class:"text-red-500"},X=d(()=>e("div",{class:"h-20 w-full"},null,-1)),Y=d(()=>e("div",null,"© VoileLabs 2019-2022",-1)),ee={key:1,class:"flex mr-50 p-5 w-80 h-full flex-wrap content-between text-black bg-white bg-opacity-50 filter drop-shadow-md backdrop-filter backdrop-blur-sm"},se={class:"w-full"},te={class:"text-lg text-center"},ae={class:"w-full space-y-2"},oe={class:"flex w-full border-b border-black"},le=d(()=>e("div",{class:"i-uil:envelope align-middle text-2xl"},null,-1)),re=["placeholder","onKeydown"],de={class:"text-red-500 text-sm h-4"},ie={class:"space-y-1"},ne=["disabled"],ue={key:0,class:"text-red-500"},ce=d(()=>e("div",{class:"h-20 w-full"},null,-1)),fe=d(()=>e("div",null,"© VoileLabs 2019-2022",-1)),pe=Z({__name:"ForgetPassword",setup(f){const{t:s}=E();N(`${s("user.forget-password.title")} - PatchyVideo`);const t=b("ready"),A=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,p={fine:s("user.forget-password.email.email-status.fine"),tip:s("user.forget-password.email.email-status.tip"),msg:s("user.forget-password.email.email-status.msg")},i=b(p.fine),r=b(""),n=b(" ");async function _(){if(t.value==="loading")return;t.value="loading";let g=!0;if(r.value?A.test(r.value)?i.value=p.fine:(g=!1,i.value=p.msg):(g=!1,i.value=p.tip),!g){t.value="ready";return}await fetch("https://patchyvideo.com/be/user/request_resetpass.do",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({email:r.value,lang:I.value}),credentials:"include"}).then(a=>a.json()).then(a=>{a.status===V.SUCCEED?(t.value="ready",K({message:s("user.forget-password.send-status.successful"),type:P.warning})):a.status===V.FAILED?(t.value="error",n.value=s("user.forget-password.send-status.failed")):(t.value="error",n.value=s("user.forget-password.send-status.error"))}).catch(a=>{t.value="error",n.value=a})}return(g,a)=>{const w=T("RouterLink");return u(),c("div",j,[o($)["<md"]?(u(),c("div",M,[e("div",B,[v(z,{larger:20}),e("div",U,l(o(s)("user.forget-password.title")),1)]),e("div",J,[e("div",null,[e("div",O,[R,m(e("input",{"onUpdate:modelValue":a[0]||(a[0]=h=>r.value=h),class:"outline-none w-full bg-transparent placeholder-white",placeholder:o(s)("user.forget-password.email.placeholder"),onKeydown:y(_,["enter"])},null,40,q),[[x,r.value]])]),e("div",H,l(i.value),1)]),e("div",Q,[e("button",{disabled:t.value==="loading",class:"w-full py-2 border border-transparent rounded-md text-white bg-blue-600 focus:outline-none focus:ring-2 focus:bg-blue-700 disabled:bg-blue-300 disabled:focus:bg-blue-300",onClick:_},l(t.value==="loading"?o(s)("user.forget-password.send-status.loading"):o(s)("user.forget-password.send-status.ready")),9,G),t.value==="error"?(u(),c("div",W,l(n.value),1)):k("",!0),v(w,{class:"block text-right text-blue-600",to:"/user/login"},{default:S(()=>[C(l(`←${o(s)("user.forget-password.login")}`),1)]),_:1})])]),X,Y])):(u(),c("div",ee,[e("div",se,[v(z,{larger:20}),e("div",te,l(o(s)("user.forget-password.title")),1)]),e("div",ae,[e("div",null,[e("div",oe,[le,m(e("input",{"onUpdate:modelValue":a[1]||(a[1]=h=>r.value=h),class:"outline-none w-full bg-transparent placeholder-gray-700 text-gray-700",placeholder:o(s)("user.forget-password.email.placeholder"),onKeydown:y(_,["enter"])},null,40,re),[[x,r.value]])]),e("div",de,l(i.value),1)]),e("div",ie,[e("button",{disabled:t.value==="loading",class:"w-full py-2 border border-transparent rounded-md text-white bg-blue-600 focus:outline-none focus:ring-2 focus:bg-blue-700 disabled:bg-blue-300 disabled:focus:bg-blue-300 disabled:hover:bg-blue-300 disabled:hover:cursor-not-allowed",onClick:_},l(t.value==="loading"?o(s)("user.forget-password.send-status.loading"):o(s)("user.forget-password.send-status.ready")),9,ne),t.value==="error"?(u(),c("div",ue,l(n.value),1)):k("",!0),v(w,{class:"block text-blue-600 text-right hover:text-blue-800",to:"/user/login"},{default:S(()=>[C(l(`←${o(s)("user.forget-password.login")}`),1)]),_:1})])]),ce,fe]))])}}});const he=L(pe,[["__scopeId","data-v-f4b55bf1"]]);export{he as default};
//# sourceMappingURL=ForgetPassword.eb71fbcc.js.map
