import{a as I,_ as ae}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.3bb9cba5.js";import{d as W,x as re,m as v,q as X,U as q,o as r,g as o,e,b as d,J as oe,K as le,w as S,Q as J,t as l,P as ie,f as u,i as V,R as ne,F as N,ac as Y,ad as Z,a9 as de,au as ue,u as ce,D as ve,G as pe,H as me,B as z,c as D,ap as ye,aq as fe,s as M,h as j,j as ge}from"./index.7d7d5570.js";import{_ as Q}from"./Cover.vue_vue_type_script_setup_true_lang.2cbc0e48.js";import{_ as _e}from"./BackTop.vue_vue_type_script_setup_true_lang.2aeaa435.js";import{_ as F}from"./PvSelect.vue_vue_type_script_setup_true_lang.bd36211f.js";import{P as H,g as G}from"./decodeAdditionalConstraint.998b4fce.js";import{_ as xe}from"./PvPagination.vue_vue_type_script_setup_true_lang.31c485e3.js";import{C as K}from"./CoverPlaceholder.f3b6e7f4.js";import{s as he}from"./setSiteTitle.db0fa839.js";import{b as be}from"./backTop.a4b6f707.js";import"./Logo.vue_vue_type_script_setup_true_lang.66ad72d8.js";import"./use-controllable.38efddb1.js";import"./index.d04b5959.js";/*! PatchyVideo/Platinum by VoileLabs */const we={class:"w-full border-b p-1 pb-1.5 flex justify-between"},ke=e("div",{class:"flex items-center flex-nowrap space-x-1"},[e("div",{class:"i-uil:search text-2xl transition-colors"}),e("div",{class:"text-lg"},l("高级搜索"))],-1),qe={class:"mt-4 space-y-3"},$e={class:"flex justify-between space-x-2 items-center"},Ce=e("div",{class:"whitespace-nowrap"},l("包含关键字："),-1),Ne={class:"flex justify-between space-x-6 items-center"},Se=e("div",{class:"whitespace-nowrap"},l("排除标签："),-1),Ae={class:"flex justify-between space-x-6 items-center"},Pe=e("div",{class:"whitespace-nowrap"},l("排序方式："),-1),je={class:"flex justify-between items-center"},Oe=e("div",{class:"whitespace-nowrap"},l("标签数量："),-1),Ve={class:"flex flex-row items-center gap-1"},Le=["disabled"],Te={class:"flex justify-around border-t pt-3"},Ue=e("div",null,[e("div",{class:"text-xs italic"},[e("div",null,l("#更多高级筛选功能请参考：")),e("a",{href:"https://patchyvideo.wiki/zh/SearchSystem",target:"_blank",class:"text-purple-300 hover:text-purple-500 transition transition-colors"},l("搜索系统 - PatchyVideo Wiki"))])],-1),Je=W({__name:"AdvancedSearch",props:{open:{type:Boolean,default:!1,requred:!0}},emits:["update:open"],setup(B,{emit:p}){const t=B,c=Y(),_=Z(),x=re(t,"open",p),A=v(String(c.query.a?Array.isArray(c.query.a)?c.query.a[0]:c.query.a:"")),b=v(A.value===""?{searchContentAndOrNot:"",exceptContent:"",tag:{moreLessEqualTagNum:"",tagNum:""}}:JSON.parse(decodeURI(window.atob(A.value)))),h=v(b.value.searchContentAndOrNot);function w(){}const m=v(b.value.exceptContent);function E(){}const k=v(String(c.query.order?Array.isArray(c.query.order)?c.query.order[0]:c.query.order:"last_modified")),O=[{value:"latest",name:"创建时间正序"},{value:"oldest",name:"创建时间倒序"},{value:"last_modified",name:"最近修改顺序"}],L=[{name:"大于",value:">"},{name:"小于",value:"<"},{name:"等于",value:"="},{name:"不计",value:""}],y=v(b.value.tag.tagNum),g=v(b.value.tag.moreLessEqualTagNum);X(g,C=>{C===""&&(y.value="")});function T(){h.value="",m.value="",k.value="last_modified",g.value="",y.value=""}function $(){return g.value!==""&&(isNaN(Number(y.value))||!Number.isSafeInteger(y.value)||Number(y.value)<0)?(de({message:"请检查标签数量项的填写是否正确！",type:ue.warning}),!1):!0}const U=q(()=>window.btoa(encodeURI(JSON.stringify({searchContentAndOrNot:h.value,exceptContent:m.value,tag:{moreLessEqualTagNum:g.value,tagNum:y.value}}))));function P(){if(!$())return;const C={order:k.value,a:U.value};_.push({path:c.path,query:C}),x.value=!1}return(C,s)=>(r(),o(N,null,[e("div",{class:ie(["fixed max-h-full z-50 transform transition-transform duration-300 inset-x-0 bottom-0 overflow-auto p-3 bg-white dark:bg-gray-900 shadow border-purple-200 dark:border-gray-600 lt-sm:max-h-70vh lt-sm:rounded-t lt-sm:border-t sm:rounded-l sm:border-l sm:right-0 sm:inset-y-0 sm:left-auto sm:p-2 sm:w-95",{"sm:translate-x-full translate-y-full sm:translate-y-0":!u(x)}])},[e("div",we,[ke,e("div",{class:"i-uil:times text-2xl transition-colors",onClick:s[0]||(s[0]=i=>x.value=!1)})]),e("div",qe,[e("div",$e,[Ce,d(I,{keyword:h.value,"onUpdate:keyword":s[1]||(s[1]=i=>h.value=i),"default-placeholder":"输入标签或文本，用空格隔开",class:"w-full","show-tag-cnt":!1,onSearch:s[2]||(s[2]=i=>void 0)},null,8,["keyword"])]),e("div",Ne,[Se,d(I,{keyword:m.value,"onUpdate:keyword":s[3]||(s[3]=i=>m.value=i),"default-placeholder":"只能输入标签哦，用空格隔开",class:"w-full","show-tag-cnt":!1,onSearch:s[4]||(s[4]=i=>void 0)},null,8,["keyword"])]),e("div",Ae,[Pe,d(F,{modelValue:k.value,"onUpdate:modelValue":s[5]||(s[5]=i=>k.value=i),class:"flex-1 max-w-64","item-list":O},null,8,["modelValue"])]),e("div",je,[Oe,e("div",Ve,[d(F,{modelValue:g.value,"onUpdate:modelValue":s[6]||(s[6]=i=>g.value=i),"item-list":L},null,8,["modelValue"]),oe(e("input",{"onUpdate:modelValue":s[7]||(s[7]=i=>y.value=i),disabled:g.value==="",class:"w-12 border rounded-md border-purple-300 p-1 shadow-inner dark:border-gray-700 dark:bg-gray-500"},null,8,Le),[[le,y.value,void 0,{number:!0}]])])]),e("div",Te,[d(H,{onClick:s[8]||(s[8]=i=>T())},{default:S(()=>[J(l("重置"))]),_:1}),d(H,{onClick:s[9]||(s[9]=i=>P())},{default:S(()=>[J(l("搜索"))]),_:1})]),Ue])],2),d(ne,{"enter-active-class":"transition-all duration-200","enter-from-class":"bg-opacity-0","leave-active-class":"transition-all duration-200","leave-to-class":"bg-opacity-0"},{default:S(()=>[u(x)?(r(),o("div",{key:0,class:"fixed inset-0 z-49",onClick:s[10]||(s[10]=i=>x.value=!1)})):V("",!0)]),_:1})],64))}}),Be={class:"p-2 md:p-10 md:m-auto xl:w-9/10 2xl:w-4/5"},Ee={key:0},Re=["textContent"],Ie={key:0},ze={class:"w-2/5 mr-0.5"},De=e("div",{class:"w-3/5 flex flex-wrap content-between"},[e("div",{class:"line-clamp-2 overflow-ellipsis overflow-hidden w-full rounded-md bg-gray-400 dark:bg-gray-600"},"   "),e("div",{class:"w-2/5 text-sm text-gray-600 dark:text-gray-300 rounded-md bg-gray-400 dark:bg-gray-600"},"   ")],-1),Me={key:1,class:"search-result-backimg justify-evenly flex-wrap flex"},Qe=e("div",{class:"flex justify-center items-center gap-x-1 border-b border-purple-300 dark:border-gray-500 py-3"},[e("div",{class:"flex-1 rounded-md text-xl truncate font-semibold lg:text-2xl bg-gray-400 dark:bg-gray-600"},"   ")],-1),Fe={class:"flex p-2 pt-3"},He={class:"w-1/2 mr-5"},Ge={class:"w-1/2 py-2 flex flex-wrap content-between"},Ke={class:"line-clamp-3 w-full overflow-ellipsis overflow-hidden"},We=e("div",{class:"w-full text-right text-sm text-gray-600 dark:text-gray-300"},[e("div",{class:"w-2/5 float-right rounded-md bg-gray-300 dark:bg-gray-600"},"   ")],-1),Xe={key:1},Ye={key:2},Ze={class:"border-b pb-1"},et={key:0},tt={class:"w-2/5 mr-0.5"},st={class:"w-3/5 flex flex-wrap content-between"},at={class:"w-full"},rt={class:"line-clamp-2 overflow-ellipsis overflow-hidden w-full flex items-center"},ot={key:0,class:"bg-purple-400 text-white text-xs rounded px-1"},lt={class:"line-clamp-2 overflow-ellipsis overflow-hidden w-full text-xs text-gray-500"},it={class:"w-full text-sm text-gray-600 dark:text-gray-300"},nt={key:1,class:"justify-evenly flex-wrap flex"},dt={key:0,class:"bg-purple-400 dark:bg-violet-800 text-white text-xs rounded px-1 py-0.5"},ut={class:"text-xl truncate font-semibold lg:text-2xl"},ct={class:"flex p-2 pt-3"},vt={class:"w-1/2 mr-5"},pt={class:"w-1/2 py-2 flex flex-wrap content-between"},mt={class:"line-clamp-3 w-full overflow-ellipsis overflow-hidden"},yt={class:"w-full text-right text-sm text-gray-600 dark:text-gray-300"},ft=["title"],gt=e("div",{class:"i-uil:file-search-alt text-2xl"},null,-1),_t=[gt],Ot=W({__name:"PlaylistList",setup(B){const{t:p}=ce();he(`${p("playlist.playlist-list.title")} - PatchyVideo`);const t=Y(),c=Z(),_=v(),x=v(""),A=v(0),b=v(0),h=v(),w=q(()=>Number(t.query.limit?Array.isArray(t.query.limit)?t.query.limit[0]:t.query.limit:20)),m=q(()=>Number(t.query.page?Array.isArray(t.query.page)?t.query.page[0]:t.query.page:0)),E=q(()=>m.value+1),k=q(()=>String(t.query.order?Array.isArray(t.query.order)?t.query.order[0]:t.query.order:"last_modified")),O=q(()=>String(t.query.a?Array.isArray(t.query.a)?t.query.a[0]:t.query.a:"")),{result:L,loading:y,onError:g,fetchMore:T}=ve(pe`
    query ($offset: Int, $limit: Int, $order: String, $query: String) {
      listPlaylist(para: { offset: $offset, limit: $limit, order: $order, query: $query }) {
        playlists {
          id
          item {
            cover
            title
            desc
            count
            private
          }
        }
        count
        pageCount
      }
    }
  `,{offset:m.value*w.value,limit:w.value,order:k.value,query:G(O.value)},{notifyOnNetworkStatusChange:!0}),$=me(L,null,n=>n==null?void 0:n.listPlaylist);z(()=>{$.value&&(A.value=$.value.count,b.value=$.value.pageCount,h.value=$.value.playlists)}),z(()=>{y.value?(_.value="loading",ye()):(_.value="result",fe())}),g(n=>{x.value=n.message,_.value="error"});const U=q(()=>t.query);X(U,()=>{be(),T({variables:{offset:m.value*w.value,limit:w.value,order:k.value,query:G(O.value)},updateQuery(n,{fetchMoreResult:f}){return f||n}})});const P=v(!1);function C(){P.value=!0}function s(){const n=JSON.parse(JSON.stringify(t.query));n.page=m.value-1,c.push({path:t.path,query:n})}function i(){const n=JSON.parse(JSON.stringify(t.query));n.page=m.value+1,c.push({path:t.path,query:n})}function ee(n){const f=JSON.parse(JSON.stringify(t.query));f.page=n-1,c.push({path:t.path,query:f})}return(n,f)=>{const R=ge("RouterLink"),te=ae;return r(),D(te,null,{default:S(()=>[e("div",Be,[_.value==="loading"?(r(),o("div",Ee,[e("div",{class:"border-b pb-1",textContent:l(u(p)("search.search-result.video.main-body.loading.searching"))},null,8,Re),u(M)["<md"]?(r(),o("div",Ie,[(r(!0),o(N,null,j(u(w),a=>(r(),o("div",{key:a,class:"py-1 flex text-sm hover:bg-gray-50 dark:hover:bg-gray-800"},[e("div",ze,[d(K,{class:"rounded-md"})]),De]))),128))])):(r(),o("div",Me,[(r(!0),o(N,null,j(u(w),a=>(r(),o("div",{key:a,class:"w-12/25 my-5 p-2 border border-purple-300 shadow-md rounded-lg bg-white bg-opacity-50 dark:border-gray-700 dark:bg-gray-900"},[Qe,e("div",Fe,[e("div",He,[d(K,{class:"rounded-md"})]),e("div",Ge,[e("div",Ke,[(r(),o(N,null,j(3,se=>e("div",{key:se,class:"mb-1 w-full rounded-md bg-gray-300 dark:bg-gray-600"},"   ")),64))]),We])])]))),128))]))])):_.value==="error"?(r(),o("div",Xe,[e("div",null,l(u(p)("playlist.playlist-list.main-body.failed.load-failed")),1),e("div",null,l(u(p)("playlist.playlist-list.main-body.failed.load-failed-reason")+x.value),1)])):_.value==="result"?(r(),o("div",Ye,[e("div",Ze,l(u(p)("playlist.playlist-list.main-body.successful.load-result-count",{count:A.value})),1),u(M)["<md"]?(r(),o("div",et,[(r(!0),o(N,null,j(h.value,a=>(r(),D(R,{key:a.item.title,class:"py-1 flex text-sm hover:bg-gray-50 dark:hover:bg-gray-800",to:`/playlist/${a.id.toHexString()}`,target:"_blank"},{default:S(()=>[e("div",tt,[d(Q,{title:a.item.title,"cover-image":a.item.cover,class:"rounded-sm"},null,8,["title","cover-image"])]),e("div",st,[e("div",at,[e("div",rt,[a.item.private?(r(),o("span",ot,"Private")):V("",!0),J(" "+l(a.item.title),1)]),e("div",lt,l(a.item.desc),1)]),e("div",it,l(u(p)("playlist.playlist-list.playlist.playlist-count",{count:a.item.count})),1)])]),_:2},1032,["to"]))),128))])):(r(),o("div",nt,[(r(!0),o(N,null,j(h.value,a=>(r(),o("div",{key:a.item.title,class:"w-12/25 my-5 p-2 border border-purple-300 shadow rounded-lg bg-white bg-opacity-50 dark:border-gray-700 dark:bg-gray-900"},[d(R,{to:`/playlist/${a.id}`,target:"_blank",class:"flex justify-center items-center gap-x-1 border-b border-purple-300 dark:border-gray-500 py-3"},{default:S(()=>[a.item.private?(r(),o("span",dt,"Private")):V("",!0),e("div",ut,l(a.item.title),1)]),_:2},1032,["to"]),e("div",ct,[e("div",vt,[d(Q,{title:a.item.title,"cover-image":a.item.cover,class:"rounded-md border border-purple-200 dark:border-gray-700"},null,8,["title","cover-image"])]),e("div",pt,[e("div",mt,l(a.item.desc),1),e("div",yt,l(u(p)("playlist.playlist-list.playlist.playlist-count",{count:a.item.count})),1)])])]))),128))])),d(xe,{"page-count":b.value,page:u(E),onPrevious:s,onNext:i,onChange:ee},null,8,["page-count","page"])])):V("",!0)]),e("div",{class:"shadow fixed bottom-20 right-5 bg-gray-50 cursor-pointer p-2 transition-opacity rounded-full dark:bg-gray-800",title:u(p)("playlist.playlist-list.advanced-search.name"),onClick:f[0]||(f[0]=a=>C())},_t,8,ft),d(Je,{open:P.value,"onUpdate:open":f[1]||(f[1]=a=>P.value=a)},null,8,["open"]),d(_e)]),_:1})}}});export{Ot as default};
//# sourceMappingURL=PlaylistList.17f36161.js.map
