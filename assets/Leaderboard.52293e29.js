import{_ as k,b as L}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.bc7ad73d.js";import{d as R,u as V,m as v,U as b,r as N,D as j,G as B,B as D,H as P,o as s,c as T,w as d,ap as q,aq as U,e as t,f as a,g as i,t as l,b as r,F as E,h as F,Q,j as z,P as f}from"./index.99610eb0.js";import{_ as G}from"./BackTop.vue_vue_type_script_setup_true_lang.daf27e63.js";import{_ as H}from"./PvTabs.vue_vue_type_script_setup_true_lang.6fc3906b.js";import{_ as S}from"./PvSelect.vue_vue_type_script_setup_true_lang.bae8bd9c.js";import"./Logo.vue_vue_type_script_setup_true_lang.c4d8157f.js";import"./use-controllable.896bf655.js";/*! PatchyVideo/Platinum by VoileLabs */const A={class:"p-2 md:p-10 md:m-auto xl:w-9/10 2xl:w-4/5"},J={key:0},K={key:1},M={key:2},O={class:"flex flex-col flex-nowrap justify-start items-center px-0 md:px-2"},W={class:"rank-list w-full"},X={class:"flex flex-row justify-between items-center w-full my-2 md:my-4 sm:h-36 md:h-30 p-4 hover:rounded-xl hover:bg-[#f4f4f5] hover:shadow-xl box-border transition-all duration-300 shadow-gray-500/20 cursor-pointer"},Y={class:"flex flex-row justify-start items-center w-1/2 sm:w-1/3 md:w-1/5 h-full"},Z=["textContent"],I={class:"flex flex-col md:flex-row justify-between md:items-center w-1/2 sm:w-2/3 md:w-4/5 h-full lt-md:ml-2"},ee=["textContent"],te=["textContent"],ae=["textContent"],oe=t("div",{class:"w-full h-px my-4 md:my-8 bg-gray-400"},null,-1),ce=R({__name:"Leaderboard",setup(se){const{t:o}=V(),x=v("tag-contributions"),_=b(()=>[{value:`${24*7*52*10}`,name:o("leaderboard.tag-contributions.date-range.all")},{value:`${24*30}`,name:o("leaderboard.tag-contributions.date-range.last-month")},{value:`${24*7}`,name:o("leaderboard.tag-contributions.date-range.last-week")},{value:`${24}`,name:o("leaderboard.tag-contributions.date-range.last-day")}]),u=v(_.value[0].value),c=N({0:"text-shadow-xl text-[#f77]",1:"text-shadow-xl text-[#228dff]",2:"text-shadow-xl text-[#54df31]"}),{result:y,loading:w,error:p}=j(B`
    query ($dateRangeNumber: Int!) {
      getLeaderboard(hrs: $dateRangeNumber, k: 30) {
        items {
          count
          user {
            id
            username
            desc
            image
          }
        }
      }
    }
  `,{dateRangeNumber:b(()=>parseInt(u.value))},{fetchPolicy:"network-only"});D(()=>{w.value?q():U()});const C=P(y,[],h=>h.getLeaderboard.items);return(h,m)=>{const g=z("RouterLink"),$=k;return s(),T($,null,{default:d(()=>[t("div",A,[a(w)?(s(),i("div",J,l(a(o)("leaderboard.loading")),1)):a(p)?(s(),i("div",K,l(a(p).message),1)):(s(),i("div",M,[r(H,{modelValue:x.value,"onUpdate:modelValue":m[1]||(m[1]=e=>x.value=e),tabs:[{name:"tag-contributions",label:a(o)("leaderboard.tag-contributions.name")},{name:"others",label:"其他排行榜"}]},{"tag-contributions":d(()=>[t("div",O,[r(S,{modelValue:u.value,"onUpdate:modelValue":m[0]||(m[0]=e=>u.value=e),class:"md:w-1/4","item-list":a(_)},null,8,["modelValue","item-list"]),t("div",W,[(s(!0),i(E,null,F(a(C),(e,n)=>(s(),i("div",{key:n,class:"rank-item w-full"},[t("div",X,[t("div",Y,[t("div",{class:f(["w-1/3 md:w-14 text-3xl text-center md:text-left text-gray-600 font-bold hover:opacity-70 transition-all duration-300 cursor-pointer",c[n]]),textContent:l(n+1)},null,10,Z),r(g,{to:`/user/${e.user.id}`,class:"relative lt-md:w-2/3 md:min-w-max md:h-24 hover:opacity-70 transition-all duration-300 cursor-pointer"},{default:d(()=>[r(L,{class:"md:w-full md:h-full rounded-full",alt:e.user.username,image:e.user.image},null,8,["alt","image"])]),_:2},1032,["to"])]),t("div",I,[r(g,{to:`/users/${e.user.id}`,class:"w-full md:w-1/4 md:ml-8"},{default:d(()=>[t("div",{class:f(["text-xl text-gray-600 font-bold hover:opacity-70 whitespace-nowrap overflow-hidden transition-all duration-300 cursor-pointer",c[n]]),textContent:l(e.user.username)},null,10,ee)]),_:2},1032,["to"]),t("div",{class:"w-full md:w-1/3 lt-md:h-6 md:max-h-28 md:overflow-auto md:ml-4 lt-md:my-2 text-gray-500 text-ellipsis overflow-hidden md:overflow-clip whitespace-nowrap md:whitespace-normal box-border",textContent:l(e.user.desc)},null,8,te),t("div",{class:f(["flex-grow w-full md:w-5/12 md:ml-8 text-left md:text-right text-xl font-bold text-gray-600 hover:opacity-70 whitespace-normal md:whitespace-nowrap transition-all duration-300 cursor-pointer",c[n]]),textContent:l(a(o)("leaderboard.tag-contributions.edit-time",e.count))},null,10,ae)])]),oe]))),128))])])]),others:d(()=>[Q(" 其他排行榜列表 ")]),_:1},8,["modelValue","tabs"])]))]),r(G)]),_:1})}}});export{ce as default};
//# sourceMappingURL=Leaderboard.52293e29.js.map
