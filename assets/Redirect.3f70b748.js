import{d as m,u as p,U as c,m as _,a5 as v,q as h,o as g,g as w,e as k,t as i,f as s,b as x,w as R,ad as y,j as B,Q as C,ac as N}from"./index.4cfa5115.js";import{s as V}from"./setSiteTitle.db0fa839.js";/*! PatchyVideo/Platinum by VoileLabs */const j={class:"text-center h-full w-full p-6"},S=m({__name:"Redirect",setup(q){const{t:e}=p(),l=N(),r=y();V(e("user.redirect.title"));const o={"sign-up":e("user.redirect.from.sign-up"),"reset-password":e("user.redirect.from.reset-password"),default:"?"},a=c(()=>l.query.from);let u=!1;for(const n in o)n===a.value&&(u=!0);u||r.push("/404");const d=c(()=>o[a.value]),t=_(5);return v(()=>{setInterval(()=>t.value--,1e3)}),h(t,()=>{t.value||r.push("/user/login")}),(n,F)=>{const f=B("RouterLink");return g(),w("div",j,[k("div",null,i(s(e)("user.redirect.log",{fromWord:s(d),count:t.value})),1),x(f,{class:"underline",to:"/user/login"},{default:R(()=>[C(i(s(e)("user.redirect.jump")),1)]),_:1})])}}});export{S as default};
//# sourceMappingURL=Redirect.3f70b748.js.map
