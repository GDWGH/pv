import{a as re,_ as he}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.32ace6f4.js";import{d as ye,x as _e,m as d,q as W,U as j,o as i,g as u,e,b as v,P as le,t as o,F as D,h as R,J as E,K as P,w as H,Q as Y,f as c,i as z,R as xe,ac as ge,ad as be,a9 as M,au as F,u as we,a6 as ke,D as qe,G as $e,B as ie,H as Ne,c as ne,ap as Se,aq as Ce,s as ue,j as Ve}from"./index.7ecd3020.js";import{C as de}from"./CoverPlaceholder.02e4a2c2.js";import{_ as ce}from"./Cover.vue_vue_type_script_setup_true_lang.4870af15.js";import{_ as Ae}from"./PvPagination.vue_vue_type_script_setup_true_lang.18516773.js";import{_ as B}from"./PvSelect.vue_vue_type_script_setup_true_lang.55f34051.js";import{_ as je}from"./PvSwitch.vue_vue_type_script_setup_true_lang.b38a2626.js";import{P as ve,g as me}from"./decodeAdditionalConstraint.b8759322.js";import{_ as Ie}from"./BackTop.vue_vue_type_script_setup_true_lang.a52e0e63.js";import{s as Oe}from"./setSiteTitle.db0fa839.js";import{p as pe}from"./biliHelper.9b20d4b7.js";import{b as Ue}from"./backTop.a4b6f707.js";import{g as fe}from"./imageUrl.5afb7f35.js";import"./Logo.vue_vue_type_script_setup_true_lang.761dc0b4.js";import"./use-controllable.756a9410.js";import"./index.b667936a.js";/*! PatchyVideo/Platinum by VoileLabs */const Ee={class:"w-full border-b p-1 pb-1.5 flex justify-between"},Pe=e("div",{class:"flex items-center flex-nowrap space-x-1"},[e("div",{class:"i-uil:search text-2xl transition-colors"}),e("div",{class:"text-lg"},o("高级搜索"))],-1),Te={class:"mt-4 space-y-3"},Le={class:"flex justify-between space-x-6 items-center"},De=e("div",{class:"whitespace-nowrap"},o("搜索类型："),-1),He={class:"flex justify-between space-x-2 items-center"},Je=e("div",{class:"whitespace-nowrap"},o("包含关键字："),-1),Be={class:"flex justify-between space-x-6 items-center"},Re=e("div",{class:"whitespace-nowrap"},o("排除标签："),-1),ze={class:"flex justify-between space-x-6 items-center"},Me=e("div",{class:"whitespace-nowrap"},o("排序方式："),-1),Fe={class:"flex justify-between items-center"},Qe=e("div",{class:"whitespace-nowrap"},o("源网站："),-1),Ge={class:"flex max-w-72 flex-wrap gap-x-1"},Ke=["onClick"],We=e("div",{class:"mb-1 whitespace-nowrap"},o("原视频发布时间："),-1),Ye={class:"flex flex-col space-y-0.5"},Xe={class:"flex justify-between items-center"},Ze={class:"flex flex-row flex-nowrap items-center gap-x-0.5"},et=["disabled"],tt=e("label",null,"-",-1),at=["disabled"],lt=e("label",null,"-",-1),st=["disabled"],ot={class:"flex justify-between items-center"},rt={class:"flex flex-row flex-nowrap items-center gap-x-0.5"},it=["disabled"],nt=e("label",null,"-",-1),ut=["disabled"],dt=e("label",null,"-",-1),ct=["disabled"],vt={class:"flex justify-between items-center"},mt=e("div",{class:"whitespace-nowrap"},o("标签数量："),-1),pt={class:"flex flex-row items-center gap-1"},ft=["disabled"],yt={class:"flex justify-between items-center"},gt=e("div",{class:"whitespace-nowrap"},o("仅展示待人工整理标签的视频"),-1),bt={class:"flex justify-around border-t pt-3"},ht=e("div",null,[e("div",{class:"text-xs italic"},[e("div",null,o("#更多高级筛选功能请参考：")),e("a",{href:"https://patchyvideo.wiki/zh/SearchSystem",target:"_blank",class:"text-purple-600 transition transition-colors dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-400"},o("搜索系统 - PatchyVideo Wiki"))])],-1),_t=ye({__name:"AdvancedSearch",props:{open:{type:Boolean,default:!1,requred:!0}},emits:["update:open"],setup(se,{emit:b}){const n=se,m=ge(),X=be(),_=_e(n,"open",b),J=d(String(m.query.a?Array.isArray(m.query.a)?m.query.a[0]:m.query.a:"")),p=d(J.value===""?{searchContentAndOrNot:"",exceptContent:"",visibleSites:[""],date1:{beforeAfterEqualDate1:"",year1:"",month1:"",day1:""},date2:{beforeAfterEqualDate2:"",year2:"",month2:"",day2:""},tag:{moreLessEqualTagNum:"",tagNum:""},onlyShowAutotagedVideos:!1}:JSON.parse(decodeURI(window.atob(J.value)))),I=d(String(m.query.qtype?Array.isArray(m.query.qtype)?m.query.qtype[0]:m.query.qtype:"tag")),V=[{name:"标签/文本模式",value:"tag"},{name:"仅文本模式",value:"text"}],k=d(p.value.searchContentAndOrNot);function T(){}const L=d(p.value.exceptContent);function Z(){}const O=d(String(m.query.order?Array.isArray(m.query.order)?m.query.order[0]:m.query.order:"last_modified")),Q=[{value:"latest",name:"索引时间正序"},{value:"oldest",name:"索引时间倒序"},{value:"video_latest",name:"原视频发布正序"},{value:"video_oldest",name:"原视频发布倒序"},{value:"last_modified",name:"最近修改顺序"}],y=d(p.value.visibleSites),ee=[{name:"Bilibili",value:"bili"},{name:"Nicovideo",value:"nico"},{name:"YouTube",value:"ytb"},{name:"Twitter",value:"twitter"},{name:"Acfun",value:"acfun"},{name:"微博",value:"weibo-mobile"},{name:"站酷",value:"zcool"},{name:"IPFS",value:"ipfs"}];function G(w=""){if(w==="")y.value=[""];else{const t=y.value.indexOf(w);if(t!==-1)y.value.splice(t,1),y.value.length===0&&(y.value=[""]);else{y.value.push(w);const a=y.value.indexOf("");a!==-1&&y.value.splice(a,1)}}}const K=[{name:"晚于",value:">"},{name:"早于",value:"<"},{name:"等于",value:"="},{name:"不计",value:""}],h=d(p.value.date1.year1),N=d(p.value.date1.month1),g=d(p.value.date1.day1),f=d(p.value.date1.beforeAfterEqualDate1);W(f,w=>{w===""&&(h.value="",N.value="",g.value="")});const q=d(p.value.date2.year2),x=d(p.value.date2.month2),S=d(p.value.date2.day2),$=d(p.value.date2.beforeAfterEqualDate2);W($,w=>{w===""&&(q.value="",x.value="",S.value="")});const te=[{name:"大于",value:">"},{name:"小于",value:"<"},{name:"等于",value:"="},{name:"不计",value:""}],C=d(p.value.tag.tagNum),s=d(p.value.tag.moreLessEqualTagNum);W(s,w=>{w===""&&(C.value="")});const r=d(p.value.onlyShowAutotagedVideos);function A(){I.value="tag",k.value="",L.value="",O.value="last_modified",y.value=[""],f.value="",h.value="",N.value="",g.value="",$.value="",q.value="",x.value="",S.value="",s.value="",C.value="",r.value=!1}function ae(){return f.value!==""&&(isNaN(Number(h.value))||!Number.isSafeInteger(h.value)||Number(h.value)<=0||isNaN(Number(N.value))||!Number.isSafeInteger(N.value)||Number(N.value)<=0||isNaN(Number(g.value))||!Number.isSafeInteger(g.value)||Number(g.value)<=0)?(M({message:"请检查原视频发布时间项1的填写是否正确！",type:F.warning}),!1):$.value!==""&&(isNaN(Number(q.value))||!Number.isSafeInteger(q.value)||Number(q.value)<=0||isNaN(Number(x.value))||!Number.isSafeInteger(x.value)||Number(x.value)<=0||isNaN(Number(S.value))||!Number.isSafeInteger(S.value)||Number(S.value)<=0)?(M({message:"请检查原视频发布时间项2的填写是否正确！",type:F.warning}),!1):s.value!==""&&(isNaN(Number(C.value))||!Number.isSafeInteger(C.value)||Number(C.value)<0)?(M({message:"请检查标签数量项的填写是否正确！",type:F.warning}),!1):!0}const l=j(()=>window.btoa(encodeURI(JSON.stringify({searchContentAndOrNot:k.value,exceptContent:L.value,visibleSites:y.value,date1:{beforeAfterEqualDate1:f.value,year1:h.value,month1:N.value,day1:g.value},date2:{beforeAfterEqualDate2:$.value,year2:q.value,month2:x.value,day2:S.value},tag:{moreLessEqualTagNum:s.value,tagNum:C.value},onlyShowAutotagedVideos:r.value}))));function U(){if(!ae())return;const w={qtype:I.value,order:O.value,a:l.value};X.push({path:m.path,query:w}),_.value=!1}return(w,t)=>(i(),u(D,null,[e("div",{class:le(["fixed max-h-full z-50 transform transition-transform duration-300 inset-x-0 bottom-0 overflow-auto p-3 bg-white dark:bg-gray-900 shadow border-purple-200 dark:border-gray-600 lt-sm:max-h-70vh lt-sm:rounded-t lt-sm:border-t sm:rounded-l sm:border-l sm:right-0 sm:inset-y-0 sm:left-auto sm:p-2 sm:w-95",{"sm:translate-x-full translate-y-full sm:translate-y-0":!c(_)}])},[e("div",Ee,[Pe,e("div",{class:"i-uil:times text-2xl transition-colors",onClick:t[0]||(t[0]=a=>_.value=!1)})]),e("div",Te,[e("div",Le,[De,v(B,{modelValue:I.value,"onUpdate:modelValue":t[1]||(t[1]=a=>I.value=a),class:"flex-1 max-w-64","item-list":V},null,8,["modelValue"])]),e("div",He,[Je,v(re,{keyword:k.value,"onUpdate:keyword":t[2]||(t[2]=a=>k.value=a),"default-placeholder":"输入标签或文本，用空格隔开",class:"w-full","show-tag-cnt":!1,onSearch:t[3]||(t[3]=a=>void 0)},null,8,["keyword"])]),e("div",Be,[Re,v(re,{keyword:L.value,"onUpdate:keyword":t[4]||(t[4]=a=>L.value=a),"default-placeholder":"只能输入标签哦，用空格隔开",class:"w-full","show-tag-cnt":!1,onSearch:t[5]||(t[5]=a=>void 0)},null,8,["keyword"])]),e("div",ze,[Me,v(B,{modelValue:O.value,"onUpdate:modelValue":t[6]||(t[6]=a=>O.value=a),class:"flex-1 max-w-64","item-list":Q},null,8,["modelValue"])]),e("div",Fe,[Qe,e("div",Ge,[e("div",{class:le(["px-2 py-0.5 rounded-lg text-sm border border-purple-300 cursor-pointer transition transition-colors whitespace-nowrap mb-1 dark:border-gray-600",{"bg-purple-400 dark:bg-indigo-800 text-white":y.value.findIndex(a=>a==="")!==-1}]),onClick:t[7]||(t[7]=a=>G())},o("全部"),2),(i(),u(D,null,R(ee,a=>e("div",{key:a.value,class:le(["px-2 py-0.5 rounded-lg text-sm border border-purple-300 cursor-pointer transition transition-colors whitespace-nowrap mb-1 dark:border-gray-600",{"bg-purple-400 dark:bg-indigo-800 text-white":y.value.findIndex(oe=>oe===a.value)!==-1}]),onClick:oe=>G(a.value)},o(a.name),11,Ke)),64))])]),e("div",null,[We,e("div",Ye,[e("div",Xe,[v(B,{modelValue:f.value,"onUpdate:modelValue":t[8]||(t[8]=a=>f.value=a),"item-list":K},null,8,["modelValue"]),e("div",Ze,[E(e("input",{"onUpdate:modelValue":t[9]||(t[9]=a=>h.value=a),disabled:f.value==="",placeholder:"年",class:"focus:outline-none w-15 border rounded-md border-purple-300 px-1 py-0.5 shadow-inner dark:border-gray-700 dark:bg-gray-500"},null,8,et),[[P,h.value,void 0,{number:!0}]]),tt,E(e("input",{"onUpdate:modelValue":t[10]||(t[10]=a=>N.value=a),disabled:f.value==="",placeholder:"月",class:"focus:outline-none w-10 border rounded-md border-purple-300 px-1 py-0.5 shadow-inner dark:border-gray-700 dark:bg-gray-500"},null,8,at),[[P,N.value,void 0,{number:!0}]]),lt,E(e("input",{"onUpdate:modelValue":t[11]||(t[11]=a=>g.value=a),disabled:f.value==="",placeholder:"日",class:"focus:outline-none w-10 border rounded-md border-purple-300 px-1 py-0.5 shadow-inner dark:border-gray-700 dark:bg-gray-500"},null,8,st),[[P,g.value,void 0,{number:!0}]])])]),e("div",ot,[v(B,{modelValue:$.value,"onUpdate:modelValue":t[12]||(t[12]=a=>$.value=a),"item-list":K},null,8,["modelValue"]),e("div",rt,[E(e("input",{"onUpdate:modelValue":t[13]||(t[13]=a=>q.value=a),disabled:$.value==="",placeholder:"年",class:"focus:outline-none w-15 border rounded-md border-purple-300 px-1 py-0.5 shadow-inner dark:border-gray-700 dark:bg-gray-500"},null,8,it),[[P,q.value,void 0,{number:!0}]]),nt,E(e("input",{"onUpdate:modelValue":t[14]||(t[14]=a=>x.value=a),disabled:$.value==="",placeholder:"月",class:"focus:outline-none w-10 border rounded-md border-purple-300 px-1 py-0.5 shadow-inner dark:border-gray-700 dark:bg-gray-500"},null,8,ut),[[P,x.value,void 0,{number:!0}]]),dt,E(e("input",{"onUpdate:modelValue":t[15]||(t[15]=a=>S.value=a),disabled:$.value==="",placeholder:"日",class:"focus:outline-none w-10 border rounded-md border-purple-300 p-1 py-0.5 shadow-inner dark:border-gray-700 dark:bg-gray-500"},null,8,ct),[[P,S.value,void 0,{number:!0}]])])])])]),e("div",vt,[mt,e("div",pt,[v(B,{modelValue:s.value,"onUpdate:modelValue":t[16]||(t[16]=a=>s.value=a),"item-list":te},null,8,["modelValue"]),E(e("input",{"onUpdate:modelValue":t[17]||(t[17]=a=>C.value=a),disabled:s.value==="",class:"w-12 border rounded-md border-purple-300 px-1 py-0.5 shadow-inner dark:border-gray-700 dark:bg-gray-500"},null,8,ft),[[P,C.value,void 0,{number:!0}]])])]),e("div",yt,[gt,v(je,{modelValue:r.value,"onUpdate:modelValue":t[18]||(t[18]=a=>r.value=a)},null,8,["modelValue"])]),e("div",bt,[v(ve,{onClick:t[19]||(t[19]=a=>A())},{default:H(()=>[Y(o("重置"))]),_:1}),v(ve,{onClick:t[20]||(t[20]=a=>U())},{default:H(()=>[Y(o("搜索"))]),_:1})]),ht])],2),v(xe,{"enter-active-class":"transition-all duration-200","enter-from-class":"bg-opacity-0","leave-active-class":"transition-all duration-200","leave-to-class":"bg-opacity-0"},{default:H(()=>[c(_)?(i(),u("div",{key:0,class:"fixed inset-0 z-49",onClick:t[21]||(t[21]=a=>_.value=!1)})):z("",!0)]),_:1})],64))}}),xt={class:"p-2 md:p-10 md:m-auto xl:w-9/10 2xl:w-8/10"},wt={key:0},kt=e("div",{class:"border-b pb-1"},[e("span",{class:"inline-block w-36 rounded-md bg-gray-300 dark:bg-gray-600"}," ")],-1),qt={class:"p-1 text-xs text-right md:text-sm"},$t={key:0},Nt={class:"w-2/5 mr-0.5"},St=e("div",{class:"w-3/5 text-sm pb-1 flex flex-wrap content-between"},[e("div",{class:"line-clamp-2 overflow-ellipsis overflow-hidden rounded-md w-full bg-gray-400 dark:bg-gray-600"},"   "),e("div",{class:"flex text-xs h-4 align-middle rounded-md w-2/5 bg-gray-400 dark:bg-gray-600"})],-1),Ct={key:1,class:"search-result-backimg justify-evenly flex-wrap flex"},Vt=e("div",{class:"p-3 text-left text-sm lg:text-base"},[e("div",{class:"line-clamp-2 overflow-ellipsis overflow-hidden rounded-md bg-gray-400 dark:bg-gray-600"},"   "),e("div",{class:"flex text-xs h-4 mt-1 align-middle rounded-md bg-gray-300 dark:bg-gray-600"})],-1),At={key:1},jt={key:2},It=["textContent"],Ot={class:"p-1 text-xs text-right md:text-sm"},Ut={key:0},Et={class:"relative w-2/5 mr-0.5"},Pt={key:0,class:"absolute flex flex-col justify-center items-center top-0 bottom-0 w-full bg-gray-200 bg-opacity-80 hover:bg-opacity-20 transition-background-color"},Tt=e("div",{class:"i-uil:eye-slash text-4xl"},null,-1),Lt={class:"text-lg"},Dt={class:"flex flex-wrap content-between w-3/5 pb-1 text-sm"},Ht={key:0,class:"overflow-hidden w-full"},Jt={class:"inline-block w-full truncate"},Bt={class:"text-xs inline-block w-full truncate text-gray-600 dark:text-gray-300"},Rt={class:"font-semibold"},zt={key:1,class:"line-clamp-2 overflow-ellipsis overflow-hidden w-full"},Mt=["title"],Ft=["src","alt"],Qt={key:1,class:"justify-evenly flex-wrap flex"},Gt={class:"relative"},Kt={key:0,class:"absolute flex flex-col justify-center items-center top-0 bottom-0 w-full bg-gray-200 bg-opacity-80 hover:bg-opacity-20 transition-background-color"},Wt=e("div",{class:"i-uil:eye-slash text-8xl"},null,-1),Yt={class:"text-2xl"},Xt={class:"p-3 text-left text-sm lg:text-base"},Zt={key:0},ea=["title"],ta=["title"],aa={class:"font-semibold"},la=["title"],sa=["title"],oa=["src","alt"],ra={key:0,class:"text-right px-2 pb-1 cursor-pointer"},ia={key:0},na=["onClick"],ua={key:2},da=["onClick"],ca=["title"],va=e("div",{class:"i-uil:file-search-alt text-2xl"},null,-1),ma=[va],Aa=ye({__name:"VideoList",setup(se){const{t:b}=we();Oe(`${b("video.video-list.title")} - PatchyVideo`);const n=ge(),m=be(),X=ke(),_=d(),J=d(""),p=d(0),I=d(0),V=d([]),k=j(()=>Number(n.query.limit?Array.isArray(n.query.limit)?n.query.limit[0]:n.query.limit:20)),T=j(()=>Number(n.query.page?Array.isArray(n.query.page)?n.query.page[0]:n.query.page:0)),L=j(()=>T.value+1),Z=j(()=>String(n.query.qtype?Array.isArray(n.query.qtype)?n.query.qtype[0]:n.query.qtype:"tag")),O=j(()=>String(n.query.order?Array.isArray(n.query.order)?n.query.order[0]:n.query.order:"last_modified")),Q=j(()=>String(n.query.a?Array.isArray(n.query.a)?n.query.a[0]:n.query.a:"")),{result:y,loading:ee,onError:G,fetchMore:K}=qe($e`
    query ($offset: Int!, $limit: Int!, $query: String!, $qtype: String, $order: String!) {
      listVideo(
        para: { offset: $offset, limit: $limit, humanReadableTag: true, query: $query, qtype: $qtype, order: $order }
      ) {
        count
        pageCount
        videos {
          id
          item {
            coverImage
            title
            site
            cid
            partName
            url
          }
          clearence
        }
      }
    }
  `,{offset:T.value*k.value,limit:k.value,query:me(Q.value),qtype:Z.value,order:O.value},{notifyOnNetworkStatusChange:!0});ie(()=>{ee.value?(_.value="loading",Se()):(_.value="result",Ce())});const h=Ne(y,null,s=>s==null?void 0:s.listVideo);ie(()=>{h.value&&(p.value=h.value.count,I.value=h.value.pageCount,V.value=h.value.videos.map(s=>({...s})))}),G(s=>{J.value=s.message,_.value="error"});const N=j(()=>n.query);W(N,()=>{Ue(),K({variables:{offset:T.value*k.value,limit:k.value,query:me(Q.value),qtype:Z.value,order:O.value},updateQuery(s,{fetchMoreResult:r}){return r||s}})});const g=d([]),f=d([]),q=async s=>{f.value.find(r=>r===s)&&f.value.splice(f.value.findIndex(r=>r===s),1),g.value.push(s),await fetch("https://patchyvideo.com/be/videos/condemn_video.do",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({vid:s}),credentials:"include"}).then(r=>r.json()).then(r=>{if(r.status==="SUCCEED"&&V.value.find(A=>A.id.toHexString()===s))V.value[V.value.findIndex(A=>A.id.toHexString()===s)].clearence=0;else throw M({message:`vid为 ${s} 的视频隐藏失败，请注意！`,type:F.error}),f.value.push(s),new Error(r)}).catch(r=>{console.error(r),M({message:`vid为 ${s} 的视频隐藏失败，请注意！`,type:F.error}),f.value.push(s)}),g.value.find(r=>r===s)&&g.value.splice(g.value.findIndex(r=>r===s),1)},x=d(!1);function S(){x.value=!0}function $(){const s=JSON.parse(JSON.stringify(n.query));s.page=T.value-1,m.push({path:n.path,query:s})}function te(){const s=JSON.parse(JSON.stringify(n.query));s.page=T.value+1,m.push({path:n.path,query:s})}function C(s){const r=JSON.parse(JSON.stringify(n.query));r.page=s-1,m.push({path:n.path,query:r})}return(s,r)=>{const A=Ve("RouterLink"),ae=he;return i(),ne(ae,null,{default:H(()=>[e("div",xt,[_.value==="loading"?(i(),u("div",wt,[kt,e("div",qt,o(c(b)("video.video-list.main-body.tips")),1),c(ue)["<md"]?(i(),u("div",$t,[(i(!0),u(D,null,R(c(k),l=>(i(),u("div",{key:l,class:"py-1 flex hover:bg-gray-50 dark:hover:bg-gray-800"},[e("div",Nt,[v(de,{class:"rounded-md"})]),St]))),128))])):(i(),u("div",Ct,[(i(!0),u(D,null,R(c(k),l=>(i(),u("div",{key:l,class:"w-12/50 my-2 border border-purple-400 shadow-sm rounded-lg bg-white bg-opacity-50 dark:border-purple-800 dark:bg-gray-900"},[v(de,{class:"rounded-md"}),Vt]))),128))]))])):_.value==="error"?(i(),u("div",At,[e("div",null,o(c(b)("video.video-list.main-body.failed.search-failed")),1),e("div",null,o(c(b)("video.video-list.main-body.failed.search-failed-reason")+J.value),1)])):_.value==="result"?(i(),u("div",jt,[e("div",{class:"border-b pb-1",textContent:o(c(b)("video.video-list.main-body.successful.search-result-count",{count:p.value}))},null,8,It),e("div",Ot,o(c(b)("video.video-list.main-body.tips")),1),c(ue)["<md"]?(i(),u("div",Ut,[(i(!0),u(D,null,R(V.value,l=>(i(),ne(A,{key:l.item.title,class:"py-1 flex hover:bg-gray-50 dark:hover:bg-gray-800",to:`/video/${l.id.toHexString()}`},{default:H(()=>[e("div",Et,[v(ce,{title:l.item.title,"cover-image":l.item.coverImage,class:"rounded-sm"},null,8,["title","cover-image"]),l.clearence===0?(i(),u("div",Pt,[Tt,e("div",Lt,o(c(b)("video.video-list.video.hidden")),1)])):z("",!0)]),e("div",Dt,[l.item.partName?(i(),u("div",Ht,[e("a",Jt,o(l.item.title),1),e("div",Bt,[e("label",Rt,o(`P${c(pe)(l.item.url)}:`),1),Y(o(l.item.partName),1)])])):(i(),u("a",zt,o(l.item.title),1)),e("div",{class:"flex text-xs h-4 align-middle",title:l.item.site},[e("div",null,o(c(b)("video.video-list.video.source-site")),1),e("img",{class:"cover h-full",src:c(fe)(l.item.site),alt:l.item.site},null,8,Ft)],8,Mt)])]),_:2},1032,["to"]))),128))])):(i(),u("div",Qt,[(i(!0),u(D,null,R(V.value,l=>(i(),u("div",{key:l.item.title,class:"w-12/50 my-2 border border-purple-300 shadow-sm rounded-lg overflow-hidden bg-white bg-opacity-50 dark:border-gray-700 dark:bg-gray-900"},[v(A,{to:`/video/${l.id.toHexString()}`},{default:H(()=>[e("div",Gt,[v(ce,{title:l.item.title,"cover-image":l.item.coverImage},null,8,["title","cover-image"]),l.clearence===0?(i(),u("div",Kt,[Wt,e("div",Yt,o(c(b)("video.video-list.video.hidden")),1)])):z("",!0)]),e("div",Xt,[l.item.partName?(i(),u("div",Zt,[e("a",{class:"inline-block w-full truncate",title:l.item.title},o(l.item.title),9,ea),e("div",{class:"text-xs inline-block w-full truncate text-gray-600 dark:text-gray-300",title:l.item.partName},[e("label",aa,o(`P${c(pe)(l.item.url)}:`),1),Y(o(l.item.partName),1)],8,ta)])):(i(),u("a",{key:1,class:"line-clamp-2 overflow-ellipsis overflow-hidden",title:l.item.title},o(l.item.title),9,la)),e("div",{class:"flex text-xs h-4 align-middle",title:l.item.site},[e("div",null,o(c(b)("video.video-list.video.source-site")),1),e("img",{class:"cover",src:c(fe)(l.item.site),alt:l.item.site},null,8,oa)],8,sa)])]),_:2},1032,["to"]),c(X).isAdmin?(i(),u("div",ra,[g.value.find(U=>U===l.id.toHexString())?(i(),u("div",ia," 请求中... ")):f.value.find(U=>U===l.id.toHexString())?(i(),u("div",{key:1,class:"text-red transition-color hover:text-purple-600",onClick:U=>q(l.id.toHexString())}," 隐藏失败！请点击重试 ",8,na)):l.clearence===0?(i(),u("div",ua," 已隐藏 ")):(i(),u("div",{key:3,class:"transition-color hover:text-purple-600",onClick:U=>q(l.id.toHexString())}," 隐藏 ",8,da))])):z("",!0)]))),128))])),v(Ae,{"page-count":I.value,page:c(L),onPrevious:$,onNext:te,onChange:C},null,8,["page-count","page"])])):z("",!0)]),e("div",{class:"shadow fixed bottom-20 right-5 bg-gray-50 cursor-pointer p-2 transition-opacity rounded-full dark:bg-gray-800",title:c(b)("video.video-list.advanced-search.name"),onClick:r[0]||(r[0]=l=>S())},ma,8,ca),v(_t,{open:x.value,"onUpdate:open":r[1]||(r[1]=l=>x.value=l)},null,8,["open"]),v(Ie)]),_:1})}}});export{Aa as default};
//# sourceMappingURL=VideoList.82140d6b.js.map
