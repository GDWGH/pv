import{d as N,u as D,a6 as T,m as c,o as x,g as y,e,b,t as o,f as n,N as U,J as C,K as S,M as K,w as k,i as P,j as $,Q as L,ar as B,as as M,ad as O,a8 as V,a1 as R}from"./index.833a7080.js";import{s as A}from"./setSiteTitle.db0fa839.js";import{_ as j}from"./Logo.vue_vue_type_script_setup_true_lang.10ee29ff.js";/*! PatchyVideo/Platinum by VoileLabs */const h=p=>(B("data-v-f6876c16"),p=p(),M(),p),F={class:"login h-screen w-full md:min-h-xl bg-bottom bg-no-repeat bg-cover dark:filter dark:brightness-75"},G={class:"flex flex-wrap content-between w-full md:w-80 h-full p-5 text-white md:text-black bg-white bg-opacity-50 filter drop-shadow-md backdrop-filter backdrop-blur-sm lt-md:shadow md:ml-48"},J={class:"w-full lt-md:text-center"},Q=["textContent"],q=["onSubmit"],z={class:"flex w-full border-b border-black"},H=h(()=>e("div",{class:"i-uil:user align-middle text-2xl"},null,-1)),W=["placeholder"],X=["textContent"],Y={class:"flex w-full border-b border-black"},Z=h(()=>e("div",{class:"i-uil:padlock align-middle text-2xl"},null,-1)),ee=["placeholder","onKeydown"],te=["textContent"],se={class:"space-y-1"},le=["disabled","textContent"],ae=["textContent"],oe=h(()=>e("div",{class:"h-20 w-full"},null,-1)),ne=h(()=>e("div",null,"© VoileLabs 2019-2022",-1)),re=N({__name:"Login",setup(p){const{t}=D(),I=O(),E=T();A(`${t("user.login.title")} - PatchyVideo`);const l=c("ready"),g={fine:t("user.login.username.username-status.fine"),tip:t("user.login.username.username-status.tip"),msg:t("user.login.username.username-status.msg")},m=c(g.fine),v={fine:t("user.login.password.password-status.fine"),tip:t("user.login.password.password-status.tip"),msg:t("user.login.password.password-status.msg")},f=c(v.fine),r=c(""),u=c(""),i=c("");async function w(){if(l.value==="loading")return;l.value="loading";let d=!0;if(r.value?r.value.length<2||r.value.length>32?(d=!1,m.value=g.msg):m.value=g.fine:(d=!1,m.value=g.tip),u.value?u.value.length<6||u.value.length>64?(d=!1,f.value=v.msg):f.value=v.fine:(d=!1,f.value=v.tip),!d){l.value="ready";return}let a="";try{const s=await V("https://patchyvideo.com/be/auth/get_session.do",{method:"POST",credentials:"include",body:{type:"LOGIN"}});if(s.status==="SUCCEED")a=s.data;else{l.value="error",i.value=t("user.login.login-status.error");return}}catch(s){i.value=String(s),l.value="error";return}try{const s=await V("https://patchyvideo.com/be/login.do",{method:"POST",credentials:"include",body:{username:r.value,password:u.value,session:a}});s.status==="SUCCEED"?(l.value="ready",await E.refetch(),I.push("/")):s.status==="FAILED"?(l.value="error",i.value=t("user.login.login-status.failed")):(l.value="error",i.value=s.dataerr.reason)}catch(s){l.value="error",i.value=String(s)}}return(d,a)=>{const s=$("RouterLink");return x(),y("div",F,[e("div",G,[e("div",J,[b(j,{larger:20}),e("div",{class:"text-lg md:text-center",textContent:o(n(t)("user.login.title"))},null,8,Q)]),e("form",{class:"w-full space-y-3",autocomplete:"on",onSubmit:U(w,["prevent"])},[e("div",null,[e("div",z,[H,C(e("input",{"onUpdate:modelValue":a[0]||(a[0]=_=>r.value=_),type:"text",name:"username",autocomplete:"username",class:"autofill outline-none w-full bg-transparent placeholder-white md:placeholder-gray-700 md:text-gray-700",placeholder:n(t)("user.login.username.placeholder")},null,8,W),[[S,r.value]])]),e("div",{class:"text-red-500 text-sm h-4",textContent:o(m.value)},null,8,X)]),e("div",null,[e("div",Y,[Z,C(e("input",{"onUpdate:modelValue":a[1]||(a[1]=_=>u.value=_),type:"password",name:"password",autocomplete:"current-password",class:"autofill outline-none w-full bg-transparent placeholder-white md:placeholder-gray-700 md:text-gray-700",placeholder:n(t)("user.login.password.placeholder"),onKeydown:K(w,["enter"])},null,40,ee),[[S,u.value]])]),e("div",{class:"text-red-500 text-sm h-4",textContent:o(f.value)},null,8,te),b(s,{class:"block text-right text-xs text-blue-600",to:"/user/forget-password"},{default:k(()=>[L(o(n(t)("user.login.forget-password")),1)]),_:1})]),e("div",se,[e("button",{type:"submit",disabled:l.value==="loading",class:"w-full py-2 border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:bg-blue-700 disabled:bg-blue-300 disabled:focus:bg-blue-300 disabled:hover:bg-blue-300 disabled:hover:cursor-not-allowed",textContent:o(l.value==="loading"?n(t)("user.login.login-status.loading"):n(t)("user.login.login-status.ready"))},null,8,le),l.value==="error"?(x(),y("div",{key:0,class:"text-red-500",textContent:o(i.value)},null,8,ae)):P("",!0),b(s,{class:"block text-blue-600 hover:text-blue-800",to:"/user/signup"},{default:k(()=>[L(o(`${n(t)("user.login.signup")}→`),1)]),_:1})])],40,q),oe,ne])])}}});const ce=R(re,[["__scopeId","data-v-f6876c16"]]);export{ce as default};
//# sourceMappingURL=Login.ce05f4f2.js.map
