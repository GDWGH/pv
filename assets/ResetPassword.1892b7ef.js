import{d as I,u as R,m as c,U as D,o as v,g as _,f as l,e,b as S,t as o,J as y,K as x,M as V,i as C,s as N,ar as T,as as B,ac as E,ad as j,a1 as q}from"./index.23fa4d1c.js";import{r as J}from"./resDataStatus.1d07d88c.js";import{s as L}from"./setSiteTitle.db0fa839.js";import{_ as K}from"./Logo.vue_vue_type_script_setup_true_lang.2c758ada.js";/*! PatchyVideo/Platinum by VoileLabs */const d=b=>(T("data-v-508e2e7a"),b=b(),B(),b),M={class:"reset-password h-screen w-full md:min-h-xl bg-bottom bg-no-repeat bg-cover dark:filter dark:brightness-75"},O={key:0,class:"flex-wrap content-between w-full h-full p-5 shadow filter drop-shadow-md backdrop-filter backdrop-blur-sm flex"},$={class:"w-full text-center"},z={class:"text-lg"},H={class:"w-full space-y-3"},A={class:"flex w-full border-b border-black dark:border-white"},F=d(()=>e("div",{class:"i-uil:padlock align-middle text-2xl"},null,-1)),G=["placeholder"],Q={class:"text-red-500 text-sm h-4"},W={class:"flex w-full border-b border-black dark:border-white"},X=d(()=>e("div",{class:"i-uil:padlock align-middle text-2xl"},null,-1)),Y=["placeholder","onKeydown"],Z={class:"text-red-500 text-sm h-4"},ee={class:"space-y-1"},se=["disabled"],te={key:0,class:"text-red-500"},ae=d(()=>e("div",{class:"h-20 w-full"},null,-1)),le=d(()=>e("div",null,"© VoileLabs 2019-2022",-1)),oe={key:1,class:"flex-wrap content-between w-80 h-full p-5 bg-white bg-opacity-50 filter drop-shadow-md backdrop-filter backdrop-blur-sm ml-48 text-black flex"},re={class:"w-full"},de={class:"text-lg text-center"},ne={class:"w-full space-y-3"},ie={class:"flex w-full border-b border-black"},ue=d(()=>e("div",{class:"i-uil:padlock align-middle text-2xl"},null,-1)),ce=["placeholder"],pe={class:"text-red-500 text-sm h-4"},we={class:"flex w-full border-b border-black"},he=d(()=>e("div",{class:"i-uil:padlock align-middle text-2xl"},null,-1)),ve=["placeholder","onKeydown"],_e={class:"text-red-500 text-sm h-4"},be={class:"space-y-1"},fe=["disabled"],ge={key:0,class:"text-red-500"},me=d(()=>e("div",{class:"h-20 w-full"},null,-1)),ye=d(()=>e("div",null,"© VoileLabs 2019-2022",-1)),xe=I({__name:"ResetPassword",setup(b){const{t:s}=R(),P=E(),U=j();L(`${s("user.reset-password.title")} - PatchyVideo`);const a=c("ready"),f={fine:s("user.reset-password.password.password-status.fine"),tip:s("user.reset-password.password.password-status.tip"),msg:s("user.reset-password.password.password-status.msg")},p=c(f.fine),g={fine:s("user.reset-password.password2.password2-status.fine"),tip:s("user.reset-password.password2.password2-status.tip"),msg:s("user.reset-password.password2.password2-status.msg")},w=c(g.fine),r=c(),i=c(),k=D(()=>P.query.key),h=c("");async function m(){if(a.value==="loading")return;a.value="loading";let u=!0;if(r.value?r.value.length<6||r.value.length>64?(u=!1,p.value=f.msg):p.value=f.fine:(u=!1,p.value=f.tip),i.value?i.value!==r.value?(u=!1,w.value=g.msg):w.value=g.fine:(u=!1,w.value=g.tip),!k.value){a.value="error",h.value=s("user.reset-password.reset-status.error");return}if(!u){a.value="ready";return}await fetch("https://patchyvideo.com/be/user/resetpass.do",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({reset_key:k.value,new_pass:r.value}),credentials:"include"}).then(t=>t.json()).then(t=>{t.status===J.SUCCEED?U.push({path:"/user/redirect",query:{from:"reset-password"}}):(a.value="error",h.value=t.dataerr.reason)}).catch(t=>{a.value="error",h.value=t})}return(u,t)=>(v(),_("div",M,[l(N)["<md"]?(v(),_("div",O,[e("div",$,[S(K,{larger:20}),e("div",z,o(l(s)("user.reset-password.title")),1)]),e("div",H,[e("div",null,[e("div",A,[F,y(e("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>r.value=n),type:"password",class:"outline-none w-full bg-transparent placeholder-gray-700 text-gray-700 dark:placeholder-white dark:text-white",placeholder:l(s)("user.reset-password.password.placeholder")},null,8,G),[[x,r.value]])]),e("div",Q,o(p.value),1)]),e("div",null,[e("div",W,[X,y(e("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>i.value=n),type:"password",class:"outline-none w-full bg-transparent placeholder-gray-700 text-gray-700 dark:placeholder-white dark:text-white",placeholder:l(s)("user.reset-password.password2.placeholder"),onKeydown:V(m,["enter"])},null,40,Y),[[x,i.value]])]),e("div",Z,o(w.value),1)]),e("div",ee,[e("button",{disabled:a.value==="loading",class:"w-full py-2 border border-transparent rounded-md text-white bg-blue-600 focus:outline-none focus:ring-2 focus:bg-blue-700 disabled:bg-blue-300 disabled:focus:bg-blue-300",onClick:m},o(a.value==="loading"?l(s)("user.reset-password.reset-status.loading"):l(s)("user.reset-password.reset-status.ready")),9,se),a.value==="error"?(v(),_("div",te,o(h.value),1)):C("",!0)])]),ae,le])):(v(),_("div",oe,[e("div",re,[S(K,{larger:20}),e("div",de,o(l(s)("user.reset-password.title")),1)]),e("div",ne,[e("div",null,[e("div",ie,[ue,y(e("input",{"onUpdate:modelValue":t[2]||(t[2]=n=>r.value=n),type:"password",class:"outline-none w-full bg-transparent placeholder-gray-700 text-gray-700",placeholder:l(s)("user.reset-password.password.placeholder")},null,8,ce),[[x,r.value]])]),e("div",pe,o(p.value),1)]),e("div",null,[e("div",we,[he,y(e("input",{"onUpdate:modelValue":t[3]||(t[3]=n=>i.value=n),type:"password",class:"outline-none w-full bg-transparent placeholder-gray-700 text-gray-700",placeholder:l(s)("user.reset-password.password2.placeholder"),onKeydown:V(m,["enter"])},null,40,ve),[[x,i.value]])]),e("div",_e,o(w.value),1)]),e("div",be,[e("button",{disabled:a.value==="loading",class:"w-full py-2 border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:bg-blue-700 disabled:bg-blue-300 disabled:focus:bg-blue-300 disabled:hover:bg-blue-300 disabled:hover:cursor-not-allowed",onClick:m},o(a.value==="loading"?l(s)("user.reset-password.reset-status.loading"):l(s)("user.reset-password.reset-status.ready")),9,fe),a.value==="error"?(v(),_("div",ge,o(h.value),1)):C("",!0)])]),me,ye]))]))}});const Ke=q(xe,[["__scopeId","data-v-508e2e7a"]]);export{Ke as default};
//# sourceMappingURL=ResetPassword.1892b7ef.js.map
