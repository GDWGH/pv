import{_ as k,b}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.81170eac.js";import{d as w,u as C,a6 as S,U as u,D as B,G as R,B as c,H as $,m as A,o as i,c as d,w as D,ap as L,aq as q,f as e,g as M,e as s,$ as N,s as P,b as U,t as o,i as g,ac as V,j as z}from"./index.178f0af6.js";import{s as E}from"./setSiteTitle.db0fa839.js";import"./Logo.vue_vue_type_script_setup_true_lang.76d73eb8.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.6e263cf2.js";import"./use-controllable.7fdbe9ba.js";/*! PatchyVideo/Platinum by VoileLabs */const H={key:0,class:"max-w-screen-xl mx-auto"},j=s("div",{class:"w-full aspect-ratio-6/1 bg-gray-200 dark:bg-gray-600"},null,-1),G={class:"flex flex-row lt-sm:mt-2 ml-4 md:ml-16"},I={class:"aspect-ratio-1/1 flex-shrink-0 flex-grow-0 sm:-mt-16"},Q={class:"mt-1 sm:mt-2 ml-2 sm:ml-6"},T=["textContent"],F={class:"text-xs sm:text-sm text-gray-800 dark:text-gray-300"},J=["textContent"],K={class:"mt-4 ml-8"},se=w({__name:"Profile",setup(O){const{t:n}=C(),f=V(),p=S(),m=u(()=>f.params.uid),_=u(()=>m.value===p.uid),{result:x,loading:v}=B(R`
    query ($uid: String!) {
      getUser(para: { uid: $uid }) {
        id
        username
        desc
        image
        gravatar
        meta {
          createdAt
        }
      }
    }
  `,{uid:m});c(()=>{v.value?L():q()});const t=$(x,null,a=>a==null?void 0:a.getUser);c(()=>{t.value&&E(n("user.profile.title",{username:t.value.username}))});const l=A(!1);return(a,r)=>{const h=z("RouterLink"),y=k;return i(),d(y,null,{default:D(()=>[e(t)?(i(),M("div",H,[j,s("div",G,[s("div",I,[s("div",{class:"overflow-hidden border-2 border-gray-300 dark:border-gray-800 transform transition-all ease duration-300",style:N({borderRadius:l.value?"0.25rem":e(P).md?"14rem":"5rem"}),onMouseenter:r[0]||(r[0]=()=>l.value=!0),onMouseleave:r[1]||(r[1]=()=>l.value=!1)},[U(b,{class:"w-20 h-20 md:w-56 md:h-56 cursor-pointer",openable:"","hide-title":"",alt:e(t).username,image:e(t).image,gravatar:e(t).gravatar},null,8,["alt","image","gravatar"])],36)]),s("div",Q,[s("h1",{class:"inline-block text-lg sm:text-2xl font-medium",textContent:o(e(t).username)},null,8,T),e(_)?(i(),d(h,{key:0,class:"i-uil:edit-alt ml-1 text-2xl align-text-bottom text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200 transition-colors duration-100",to:"/settings/account"})):g("",!0),s("div",F,o(e(n)("user.profile.info.created-at",{date:e(t).meta.createdAt.toLocaleDateString()})),1),s("p",{class:"whitespace-pre break-normal line-clamp-4",textContent:o(e(t).desc)},null,8,J)])]),s("div",K,o(e(n)("user.profile.nothing")),1)])):g("",!0)]),_:1})}}});export{se as default};
//# sourceMappingURL=Profile.7b89a4f8.js.map
