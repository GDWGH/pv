import{d as b,u as y,x as f,m as k,B as C,o as s,g as u,e as i,f as o,t as p,b as h,w as c,J as w,K as _,M as N,i as B,a9 as M,au as V,j as K}from"./index.7f917682.js";/*! PatchyVideo/Platinum by VoileLabs */const P={key:0,class:"xs:text-xs"},$={class:"border-t pt-1 flex-1 flex justify-between items-center"},j=["textContent"],D=["textContent"],E=["onKeydown"],I=["textContent"],S=["textContent"],J=b({__name:"PvPagination",props:{page:{default:1},pageCount:{default:1}},emits:["previous","next","change","update:page","update:pageCount"],setup(t,{emit:l}){const g=t,{t:r}=y(),n=f(g,"page",l),e=k(n.value);function m(){if(isNaN(e.value)||!Number.isSafeInteger(e.value)||e.value<=0||e.value>g.pageCount){M({message:r("ui.pv-pagination.alert"),type:V.warning});return}n.value!==e.value&&(n.value=e.value,l("change",e.value))}return C(()=>{e.value=n.value}),(v,a)=>{const x=K("i18n-t");return t.pageCount-1&&t.pageCount?(s(),u("div",P,[i("div",$,[o(n)!==1?(s(),u("a",{key:0,class:"inline-flex items-center px-2 py-1 border border-purple-300 text-sm font-medium rounded-lg hover:text-gray-500 dark:bg-gray-600 dark:border-purple-900 dark:hover:bg-black md:px-4 md:py-2",onClick:a[0]||(a[0]=d=>v.$emit("previous")),textContent:p(o(r)("ui.pv-pagination.page-previous"))},null,8,j)):(s(),u("a",{key:1,disabled:"",class:"inline-flex items-center px-2 py-1 border border-purple-300 text-sm font-medium rounded-lg dark:bg-gray-600 dark:border-purple-900 md:px-4 md:py-2",textContent:p(o(r)("ui.pv-pagination.page-previous"))},null,8,D)),h(x,{keypath:"ui.pv-pagination.page-number",tag:"div",places:{count:t.pageCount}},{count:c(()=>[w(i("input",{"onUpdate:modelValue":a[1]||(a[1]=d=>e.value=d),class:"w-12 border rounded-md border-purple-400 p-1 shadow-inner dark:bg-gray-500",onKeydown:N(m,["enter"]),onBlur:m},null,40,E),[[_,e.value,void 0,{number:!0}]])]),total:c(()=>[i("span",null,p(t.pageCount),1)]),_:1},8,["places"]),o(n)!==t.pageCount?(s(),u("a",{key:2,class:"inline-flex items-center px-2 py-1 border border-purple-300 text-sm font-medium rounded-lg hover:text-gray-500 dark:bg-gray-600 dark:border-purple-900 dark:hover:bg-black md:px-4 md:py-2",onClick:a[2]||(a[2]=d=>v.$emit("next")),textContent:p(o(r)("ui.pv-pagination.page-next"))},null,8,I)):(s(),u("a",{key:3,disabled:"",class:"inline-flex items-center px-2 py-1 border border-purple-300 text-sm font-medium rounded-lg dark:bg-gray-600 dark:border-purple-900 md:px-4 md:py-2",textContent:p(o(r)("ui.pv-pagination.page-next"))},null,8,S))])])):B("",!0)}}});export{J as _};
//# sourceMappingURL=PvPagination.vue_vue_type_script_setup_true_lang.1eb0334d.js.map
