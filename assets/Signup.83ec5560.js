import{d as D,u as Z,m as o,U,o as V,g as O,e,b as P,t as i,f as d,N as I,J as E,K as N,M as J,i as $,w as H,j as K,Q as B,ar as L,as as M,ad as R,a1 as q}from"./index.0e507373.js";import{s as F}from"./setSiteTitle.db0fa839.js";import{r as T}from"./resDataStatus.1d07d88c.js";import{_ as G}from"./Logo.vue_vue_type_script_setup_true_lang.7dbf0447.js";/*! PatchyVideo/Platinum by VoileLabs */const w=b=>(L("data-v-81452981"),b=b(),M(),b),Q={class:"sign-up h-screen w-full md:min-h-xl flex justify-end bg-bottom bg-no-repeat bg-cover dark:filter dark:brightness-75"},W={class:"flex flex-wrap content-between w-full md:w-80 h-full p-5 text-white lt-md:dark:text-white md:text-black bg-white bg-opacity-50 filter drop-shadow-md backdrop-filter backdrop-blur-sm lt-md:shadow md:mr-50"},X={class:"w-full lt-md:text-center"},Y=["textContent"],ee=["onSubmit"],te={class:"flex w-full border-b border-black lt-md:dark:border-white"},se=w(()=>e("div",{class:"i-uil:user align-middle text-2xl"},null,-1)),ae=["placeholder"],le=["textContent"],ne={class:"flex w-full border-b border-black lt-md:dark:border-white"},oe=w(()=>e("div",{class:"i-uil:lock-open-alt align-middle text-2xl"},null,-1)),ue=["placeholder"],re=["textContent"],ie={class:"flex w-full border-b border-black lt-md:dark:border-white"},de=w(()=>e("div",{class:"i-uil:padlock align-middle text-2xl"},null,-1)),pe=["placeholder"],ce=["textContent"],me={class:"flex w-full border-b border-black lt-md:dark:border-white"},ve=w(()=>e("div",{class:"i-uil:envelope align-middle text-2xl"},null,-1)),he=["placeholder","onKeydown"],fe=["textContent"],ge={class:"space-y-1"},we=["disabled","textContent"],_e=["textContent"],be=w(()=>e("div",{class:"h-20 w-full"},null,-1)),xe=w(()=>e("div",null,"© VoileLabs 2019-2022",-1)),ye=D({__name:"Signup",setup(b){const{t}=Z(),z=R();F(`${t("user.signup.title")} - PatchyVideo`);const n=o("ready"),p=U(()=>({fine:t("user.signup.username.username-status.fine"),tip:t("user.signup.username.username-status.tip"),msg:t("user.signup.username.username-status.msg"),res:t("user.signup.username.username-status.res"),err:t("user.signup.username.username-status.err")})),c=o(p.value.fine),x=U(()=>({fine:t("user.signup.password.password-status.fine"),tip:t("user.signup.password.password-status.tip"),msg:t("user.signup.password.password-status.msg")})),y=o(x.value.fine),S=U(()=>({fine:t("user.signup.password2.password2-status.fine"),tip:t("user.signup.password2.password2-status.tip"),msg:t("user.signup.password2.password2-status.msg")})),k=o(S.value.fine),A=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,m=U(()=>({fine:t("user.signup.email.email-status.fine"),tip:t("user.signup.email.email-status.tip"),msg:t("user.signup.email.email-status.msg"),res:t("user.signup.email.email-status.res"),err:t("user.signup.email.email-status.err")})),v=o(m.value.fine),h=o(""),f=o(""),C=o(""),g=o(""),_=o("");async function j(){if(n.value==="loading")return;n.value="loading";let s=!0;if(h.value?h.value.length<2||h.value.length>32?(s=!1,c.value=p.value.msg):c.value=p.value.fine:(s=!1,c.value=p.value.tip),f.value?f.value.length<6||f.value.length>64?(s=!1,y.value=x.value.msg):y.value=x.value.fine:(s=!1,y.value=x.value.tip),C.value?C.value!==f.value?(s=!1,k.value=S.value.msg):k.value=S.value.fine:(s=!1,k.value=S.value.tip),g.value?A.test(g.value)?v.value=m.value.fine:(s=!1,v.value=m.value.msg):(s=!1,v.value=m.value.tip),s){const a=fetch("https://patchyvideo.com/be/user/exists.do",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({username:h.value}),credentials:"include"}).then(r=>r.json()).then(r=>{r.status!==T.SUCCEED?(c.value=p.value.err,s=!1):r.data&&(c.value=p.value.res,s=!1)}).catch(()=>{c.value=p.value.err,s=!1}),u=fetch("https://patchyvideo.com/be/user/email_avail.do",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({email:g.value}),credentials:"include"}).then(r=>r.json()).then(r=>{r.status!==T.SUCCEED?(v.value=m.value.err,s=!1):r.data&&(v.value=m.value.res,s=!1)}).catch(()=>{v.value=m.value.err,s=!1});await a,await u}if(!s){n.value="ready";return}let l="";await fetch("https://patchyvideo.com/be/auth/get_session.do",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({type:"SIGNUP"}),credentials:"include"}).then(a=>a.json()).then(a=>{a.status===T.SUCCEED?l=a.data:(n.value="error",_.value=t("user.signup.signup-status.error"))}).catch(a=>{n.value="error",_.value=a}),await fetch("https://patchyvideo.com/be/signup.do",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({username:h.value,password:f.value,email:g.value,session:l}),credentials:"include"}).then(a=>a.json()).then(a=>{a.status===T.SUCCEED?z.push({path:"/user/redirect",query:{from:"sign-up"}}):(n.value="error",_.value=a.dataerr.reason)}).catch(a=>{n.value="error",_.value=a})}return(s,l)=>{const a=K("RouterLink");return V(),O("div",Q,[e("div",W,[e("div",X,[P(G,{larger:20}),e("div",{class:"text-lg text-center",textContent:i(d(t)("user.signup.title"))},null,8,Y)]),e("form",{class:"w-full space-y-2",autocomplete:"on",onSubmit:I(j,["prevent"])},[e("div",null,[e("div",te,[se,E(e("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>h.value=u),type:"text",name:"username",autocomplete:"username",class:"autofill outline-none w-full bg-transparent placeholder-gray-700 text-gray-700 lt-md:dark:placeholder-white lt-md:dark:text-white",placeholder:d(t)("user.signup.username.placeholder")},null,8,ae),[[N,h.value]])]),e("div",{class:"text-red-500 text-sm h-4",textContent:i(c.value)},null,8,le)]),e("div",null,[e("div",ne,[oe,E(e("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>f.value=u),type:"password",name:"password",autocomplete:"new-password",class:"autofill outline-none w-full bg-transparent placeholder-gray-700 text-gray-700 lt-md:dark:placeholder-white lt-md:dark:text-white",placeholder:d(t)("user.signup.password.placeholder")},null,8,ue),[[N,f.value]])]),e("div",{class:"text-red-500 text-sm h-4",textContent:i(y.value)},null,8,re)]),e("div",null,[e("div",ie,[de,E(e("input",{"onUpdate:modelValue":l[2]||(l[2]=u=>C.value=u),type:"password",name:"re-password",autocomplete:"new-password",class:"autofill outline-none w-full bg-transparent placeholder-gray-700 text-gray-700 lt-md:dark:placeholder-white lt-md:dark:text-white",placeholder:d(t)("user.signup.password2.placeholder")},null,8,pe),[[N,C.value]])]),e("div",{class:"text-red-500 text-sm h-4",textContent:i(k.value)},null,8,ce)]),e("div",null,[e("div",me,[ve,E(e("input",{"onUpdate:modelValue":l[3]||(l[3]=u=>g.value=u),type:"email",name:"email",autocomplete:"email",class:"autofill outline-none w-full bg-transparent placeholder-gray-700 text-gray-700 lt-md:dark:placeholder-white lt-md:dark:text-white",placeholder:d(t)("user.signup.email.placeholder"),onKeydown:J(j,["enter"])},null,40,he),[[N,g.value]])]),e("div",{class:"text-red-500 text-sm h-4",textContent:i(v.value)},null,8,fe)]),e("div",ge,[e("button",{type:"submit",disabled:n.value==="loading",class:"w-full py-2 border border-transparent rounded-md text-white bg-blue-600 focus:outline-none focus:ring-2 focus:bg-blue-700 disabled:bg-blue-300 disabled:focus:bg-blue-300 disabled:hover:bg-blue-300 disabled:hover:cursor-not-allowed",textContent:i(n.value==="loading"?d(t)("user.signup.signup-status.loading"):d(t)("user.signup.signup-status.ready"))},null,8,we),n.value==="error"?(V(),O("div",{key:0,class:"text-red-500",textContent:i(_.value)},null,8,_e)):$("",!0),P(a,{class:"block text-blue-600 text-right hover:text-blue-800",to:"/user/login"},{default:H(()=>[B(i(`←${d(t)("user.signup.login")}`),1)]),_:1})])],40,ee),be,xe])])}}});const Ee=q(ye,[["__scopeId","data-v-81452981"]]);export{Ee as default};
//# sourceMappingURL=Signup.83ec5560.js.map
