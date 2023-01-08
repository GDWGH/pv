import{_ as me,a as ye}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.540984e6.js";import{d as M,u as F,m as O,ao as ee,D as te,G as se,B as D,ap as le,aq as re,H as ae,q as oe,o as l,g as a,e,t as n,f as s,s as J,F as b,h as x,i as C,ac as ie,ad as ne,j as ue,b as I,P as Q,c as A,w as B,Q as z,ar as de,as as ce,a1 as ve,U as V,L as w}from"./index.9c80c8f4.js";import{_ as ge}from"./BackTop.vue_vue_type_script_setup_true_lang.9d2ef5de.js";import{C as E}from"./CoverPlaceholder.c17b0c30.js";import{_ as W}from"./Cover.vue_vue_type_script_setup_true_lang.32299345.js";import{g as K,a as X}from"./imageUrl.5afb7f35.js";import{b as pe}from"./backTop.a4b6f707.js";import{p as Z}from"./biliHelper.9b20d4b7.js";import{_ as fe}from"./PvPagination.vue_vue_type_script_setup_true_lang.c462ed3b.js";import{s as he}from"./setSiteTitle.db0fa839.js";import"./Logo.vue_vue_type_script_setup_true_lang.59f13bec.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.21f5ac43.js";import"./use-controllable.b761af51.js";import"./index.041d4b7b.js";/*! PatchyVideo/Platinum by VoileLabs */const H=h=>(de("data-v-b0435e42"),h=h(),ce(),h),_e={key:0},be=["textContent"],xe={key:0},we={class:"w-2/5 mr-0.5"},ke=H(()=>e("div",{class:"w-3/5 text-sm pb-1 flex flex-wrap content-between"},[e("div",{class:"line-clamp-2 overflow-ellipsis overflow-hidden rounded-md w-full bg-gray-400 dark:bg-gray-600"},"   "),e("div",{class:"flex text-xs h-4 align-middle rounded-md w-2/5 bg-gray-400 dark:bg-gray-600"})],-1)),$e={key:1,class:"search-result-backimg flex flex-wrap justify-evenly bg-center bg-no-repeat bg-contain"},qe=H(()=>e("div",{class:"p-3 text-left text-sm lg:text-base"},[e("div",{class:"line-clamp-2 overflow-ellipsis overflow-hidden rounded-md bg-gray-300 dark:bg-gray-600"},"   "),e("div",{class:"flex text-xs h-4 mt-1 align-middle rounded-md bg-gray-300 dark:bg-gray-600"})],-1)),Ce={key:1},Se=["textContent"],Ne=["textContent"],Oe={key:2},Ie={class:"flex flex-wrap-reverse justify-between items-end border-b pb-1"},Pe=["textContent"],je=["textContent"],Ue={class:"flex self-center space-x-2"},Ve=["onClick","textContent"],Ae={key:0},Je={class:"relative w-2/5 mr-0.5"},Re={key:0,class:"absolute flex flex-col justify-center items-center top-0 bottom-0 w-full bg-gray-200 bg-opacity-80 hover:bg-opacity-20 transition-background-color"},Te=H(()=>e("div",{class:"i-uil:eye-slash text-4xl"},null,-1)),Le={class:"text-lg"},Be={class:"w-3/5 text-sm pb-1 flex flex-wrap content-between"},De={key:0,class:"overflow-hidden w-full"},Ee={class:"inline-block w-full truncate"},He={class:"text-xs inline-block w-full truncate text-gray-600 dark:text-gray-300"},Qe={class:"font-semibold"},ze={key:1,class:"line-clamp-2 overflow-ellipsis overflow-hidden w-full"},Me=["title"],Fe=["src","alt"],Ye={key:1,class:"search-result-backimg flex flex-wrap justify-evenly bg-center bg-no-repeat bg-contain"},Ge={class:"relative"},We={key:0,class:"absolute flex flex-col justify-center items-center top-0 bottom-0 w-full bg-gray-200 bg-opacity-80 hover:bg-opacity-20 transition-background-color"},Ke=H(()=>e("div",{class:"i-uil:eye-slash text-8xl"},null,-1)),Xe={class:"text-2xl"},Ze={class:"p-3 text-left text-sm lg:text-base"},et={key:0},tt=["title"],st=["title"],lt={class:"font-semibold"},rt=["title"],at=["title"],ot=["src","alt"],it=M({__name:"SearchVideo",props:{query:null,limit:null,offset:null,order:null,visibleSite:null,pageCount:null},emits:["update:query","update:limit","update:offset","update:order","update:visibleSite","update:pageCount"],setup(h,{emit:k}){const o=h,{t:u}=F(),v=ie(),m=ne(),c=O(),p=O(""),$=O(0),y=O([]),{query:g,limit:f,offset:S,order:q,visibleSite:j,pageCount:R}=ee(o,k),T=[{value:"",name:u("search.search-result.video.visible-sites.all")},{value:"ANY(site:acfun site:bilibili site:zcool)",name:u("search.search-result.video.visible-sites.home")},{value:"ANY(site:nicovideo site:twitter site:youtube site:ipfs)",name:u("search.search-result.video.visible-sites.abroad")}],{result:P,loading:_,onError:U,fetchMore:d}=te(se`
    query ($offset: Int!, $limit: Int!, $query: String!, $order: String!, $additionalConstraint: String) {
      listVideo(
        para: {
          offset: $offset
          limit: $limit
          humanReadableTag: true
          query: $query
          order: $order
          additionalConstraint: $additionalConstraint
        }
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
  `,{offset:S.value*f.value,limit:f.value,query:g.value,order:q.value,additionalConstraint:j.value},{notifyOnNetworkStatusChange:!0});D(()=>{_.value?(c.value="loading",le()):(c.value="result",re())});const t=ae(P,null,r=>r==null?void 0:r.listVideo);D(()=>{t.value&&($.value=t.value.count,R.value=t.value.pageCount,y.value=t.value.videos)}),U(r=>{p.value=r.message,c.value="error"}),oe(o,()=>{pe(),d({variables:{offset:S.value*f.value,limit:f.value,query:g.value,order:q.value,additionalConstraint:j.value},updateQuery(r,{fetchMoreResult:N}){return N||r}})},{deep:!0});function L(r){localStorage.setItem("VisibleSite",r);const N=JSON.parse(JSON.stringify(v.query));N.page=0,N.visible_site=r,m.push({path:v.path,query:N})}return(r,N)=>{const G=ue("RouterLink");return c.value==="loading"?(l(),a("div",_e,[e("div",{textContent:n(s(u)("search.search-result.video.main-body.loading.searching"))},null,8,be),s(J)["<md"]?(l(),a("div",xe,[(l(!0),a(b,null,x(s(f),i=>(l(),a("div",{key:i,class:"py-1 flex hover:bg-gray-50 dark:hover:bg-gray-800"},[e("div",we,[I(E,{class:"rounded-md"})]),ke]))),128))])):(l(),a("div",$e,[(l(!0),a(b,null,x(s(f),i=>(l(),a("div",{key:i,class:"w-12/50 my-2 border border-purple-400 shadow-sm rounded-lg bg-white bg-opacity-50 dark:border-purple-800 dark:bg-gray-900"},[I(E,{class:"rounded-md"}),qe]))),128))]))])):c.value==="error"?(l(),a("div",Ce,[e("div",{textContent:n(s(u)("search.search-result.video.main-body.failed.search-failed"))},null,8,Se),e("div",{textContent:n(s(u)("search.search-result.video.main-body.failed.search-failed-reason")+p.value)},null,8,Ne)])):c.value==="result"?(l(),a("div",Oe,[e("div",Ie,[$.value===0?(l(),a("div",{key:0,textContent:n(s(u)("search.search-result.video.main-body.successful.search-no-result"))},null,8,Pe)):(l(),a("div",{key:1,textContent:n(s(u)("search.search-result.video.main-body.successful.search-result-count",{count:$.value}))},null,8,je)),e("div",Ue,[(l(),a(b,null,x(T,i=>e("label",{key:i.value,class:Q(["px-2 py-1 cursor-pointer text-gray-400 text-sm font-semibold md:text-base md:font-bold md:px-3 md:py-1",{"text-black rounded-full bg-gray-100 dark:text-white dark:bg-gray-500":i.value===s(j)}]),onClick:ts=>L(i.value),textContent:n(i.name)},null,10,Ve)),64))])]),s(J)["<md"]?(l(),a("div",Ae,[(l(!0),a(b,null,x(y.value,i=>(l(),A(G,{key:i.item.title,class:"py-1 flex hover:bg-gray-50 dark:hover:bg-gray-800",to:`/video/${i.id.toHexString()}`},{default:B(()=>[e("div",Je,[I(W,{title:i.item.title,"cover-image":i.item.coverImage,class:"rounded-sm"},null,8,["title","cover-image"]),i.clearence===0?(l(),a("div",Re,[Te,e("div",Le,n(s(u)("search.search-result.video.video.hidden")),1)])):C("",!0)]),e("div",Be,[i.item.partName?(l(),a("div",De,[e("a",Ee,n(i.item.title),1),e("div",He,[e("label",Qe,n(`P${s(Z)(i.item.url)}:`),1),z(n(i.item.partName),1)])])):(l(),a("a",ze,n(i.item.title),1)),e("div",{class:"flex text-xs h-4 align-middle",title:i.item.site},[e("div",null,n(s(u)("search.search-result.video.video.source-site")),1),e("img",{class:"cover h-full",src:s(K)(i.item.site),alt:i.item.site},null,8,Fe)],8,Me)])]),_:2},1032,["to"]))),128))])):(l(),a("div",Ye,[(l(!0),a(b,null,x(y.value,i=>(l(),A(G,{key:i.item.title,class:"w-12/50 my-2 border border-purple-400 shadow-sm rounded-lg overflow-hidden bg-white bg-opacity-50 dark:border-purple-800 dark:bg-gray-900",to:`/video/${i.id.toHexString()}`},{default:B(()=>[e("div",Ge,[I(W,{title:i.item.title,"cover-image":i.item.coverImage},null,8,["title","cover-image"]),i.clearence===0?(l(),a("div",We,[Ke,e("div",Xe,n(s(u)("search.search-result.video.video.hidden")),1)])):C("",!0)]),e("div",Ze,[i.item.partName?(l(),a("div",et,[e("a",{class:"inline-block w-full truncate",title:i.item.title},n(i.item.title),9,tt),e("div",{class:"text-xs inline-block w-full truncate text-gray-600 dark:text-gray-300",title:i.item.partName},[e("label",lt,n(`P${s(Z)(i.item.url)}: `),1),z(n(i.item.partName),1)],8,st)])):(l(),a("a",{key:1,class:"line-clamp-2 overflow-ellipsis overflow-hidden",title:i.item.title},n(i.item.title),9,rt)),e("div",{class:"flex text-xs h-4 align-middle",title:i.item.site},[e("div",null,n(s(u)("search.search-result.video.video.source-site")),1),e("img",{class:"cover",src:s(K)(i.item.site),alt:i.item.site},null,8,ot)],8,at)])]),_:2},1032,["to"]))),128))]))])):C("",!0)}}});const nt=ve(it,[["__scopeId","data-v-b0435e42"]]),Y=h=>(de("data-v-183ebf9a"),h=h(),ce(),h),ut={key:0},dt=["textContent"],ct={key:0},vt={class:"w-2/5 mr-0.5"},pt=Y(()=>e("div",{class:"w-3/5 flex flex-wrap content-between"},[e("div",{class:"line-clamp-2 overflow-ellipsis overflow-hidden w-full rounded-md bg-gray-400 dark:bg-gray-600"},"   "),e("div",{class:"w-2/5 text-sm text-gray-600 dark:text-gray-300 rounded-md bg-gray-300 dark:bg-gray-600"},"   ")],-1)),mt={key:1,class:"search-result-backimg flex flex-wrap justify-evenly bg-center bg-no-repeat bg-contain"},yt=Y(()=>e("div",{class:"block border-b py-3 text-center text-xl truncate font-semibold lg:text-2xl rounded-md bg-gray-400 dark:bg-gray-600"},"   ",-1)),gt={class:"flex p-2 pt-3"},ft={class:"w-1/2 mr-5"},ht={class:"w-1/2 py-2 flex flex-wrap content-between"},_t={class:"line-clamp-3 w-full overflow-ellipsis overflow-hidden"},bt=Y(()=>e("div",{class:"w-full text-right text-sm text-gray-600 dark:text-gray-300"},[e("div",{class:"w-2/5 float-right rounded-md bg-gray-300 dark:bg-gray-600"},"   ")],-1)),xt={key:1},wt={key:2},kt={key:3},$t={class:"border-b pb-1"},qt={key:0},Ct={class:"w-2/5 mr-0.5"},St={class:"aspect-ratio-16/10 overflow-hidden rounded-sm"},Nt=["src"],Ot={class:"w-3/5 flex flex-wrap content-between"},It={class:"w-full"},Pt={class:"line-clamp-2 overflow-ellipsis overflow-hidden w-full flex items-center"},jt={key:0,class:"bg-purple-400 text-white text-xs rounded px-1"},Ut={class:"line-clamp-2 overflow-ellipsis overflow-hidden w-full text-xs text-gray-500"},Vt=["textContent"],At={key:1,class:"search-result-backimg flex flex-wrap justify-evenly bg-center bg-no-repeat bg-contain"},Jt={key:0,class:"bg-purple-400 text-white text-xs rounded px-1 py-0.5"},Rt={class:"text-xl truncate font-semibold lg:text-2xl"},Tt={class:"flex p-2 pt-3"},Lt={class:"w-1/2 mr-5"},Bt={class:"aspect-ratio-16/10 overflow-hidden"},Dt=["src"],Et={class:"w-1/2 py-2 flex flex-wrap content-between"},Ht=["textContent"],Qt=["textContent"],zt=M({__name:"SearchPlaylist",props:{query:null,limit:null,offset:null,order:null,pageCount:null},emits:["update:query","update:limit","update:offset","update:order","update:pageCount"],setup(h,{emit:k}){const o=h,{t:u}=F(),v=O(),m=O(""),c=O(0),p=O(),{query:$,limit:y,offset:g,order:f,pageCount:S}=ee(o,k),{result:q,loading:j,onError:R,fetchMore:T}=te(se`
    query ($offset: Int, $limit: Int, $query: String, $order: String) {
      listPlaylist(para: { offset: $offset, limit: $limit, query: $query, order: $order }) {
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
  `,{offset:g.value*y.value,limit:y.value,query:$.value,order:f.value},{notifyOnNetworkStatusChange:!0});D(()=>{j.value?(v.value="loading",le()):(v.value="result",re())});const P=ae(q,null,_=>_==null?void 0:_.listPlaylist);return D(()=>{P.value&&(c.value=P.value.count,S.value=P.value.pageCount,p.value=P.value.playlists)}),R(_=>{m.value=_.message,v.value="error"}),oe(o,()=>{pe(),T({variables:{offset:g.value*y.value,limit:y.value,query:$.value,order:f.value},updateQuery(_,{fetchMoreResult:U}){return U||_}})},{deep:!0}),(_,U)=>{const d=ue("RouterLink");return v.value==="loading"?(l(),a("div",ut,[e("div",{class:"border-b pb-1",textContent:n(s(u)("search.search-result.video.main-body.loading.searching"))},null,8,dt),s(J)["<md"]?(l(),a("div",ct,[(l(!0),a(b,null,x(s(y),t=>(l(),a("div",{key:t,class:"py-1 flex text-sm hover:bg-gray-50 dark:hover:bg-gray-800"},[e("div",vt,[I(E,{class:"rounded-md"})]),pt]))),128))])):(l(),a("div",mt,[(l(!0),a(b,null,x(s(y),t=>(l(),a("div",{key:t,class:"w-12/25 my-5 p-2 border border-purple-400 shadow-md rounded-lg bg-white bg-opacity-50 dark:border-purple-800 dark:bg-gray-900"},[yt,e("div",gt,[e("div",ft,[I(E,{class:"rounded-md"})]),e("div",ht,[e("div",_t,[(l(),a(b,null,x(3,L=>e("div",{key:L,class:"mb-1 w-full rounded-md bg-gray-300 dark:bg-gray-600"},"   ")),64))]),bt])])]))),128))]))])):v.value==="error"?(l(),a("div",xt,[e("div",null,n(s(u)("search.search-result.playlist.main-body.failed.search-failed")),1),e("div",null,n(s(u)("search.search-result.playlist.main-body.failed.search-failed-reason")+m.value),1)])):c.value===0?(l(),a("div",wt,n(s(u)("search.search-result.playlist.main-body.successful.search-no-result")),1)):v.value==="result"?(l(),a("div",kt,[e("div",$t,n(s(u)("search.search-result.playlist.main-body.successful.search-result-count",{count:c.value})),1),s(J)["<md"]?(l(),a("div",qt,[(l(!0),a(b,null,x(p.value,t=>(l(),A(d,{key:t.item.title,class:"py-1 flex text-sm hover:bg-gray-50 dark:hover:bg-gray-800",to:`/playlist/${t.id.toHexString()}`},{default:B(()=>[e("div",Ct,[e("div",St,[e("img",{class:"object-cover h-full w-full dark:filter dark:brightness-75",src:s(X)({image:t.item.cover})},null,8,Nt)])]),e("div",Ot,[e("div",It,[e("div",Pt,[t.item.private?(l(),a("label",jt,"Private")):C("",!0),z(" "+n(t.item.title),1)]),e("div",Ut,n(t.item.desc),1)]),e("div",{class:"w-full text-sm text-gray-600 dark:text-gray-300",textContent:n(s(u)("search.search-result.playlist.playlist.playlist-count",{count:t.item.count}))},null,8,Vt)])]),_:2},1032,["to"]))),128))])):(l(),a("div",At,[(l(!0),a(b,null,x(p.value,t=>(l(),a("div",{key:t.item.title,class:"w-12/25 my-5 p-2 border border-purple-400 shadow-md rounded-lg bg-white bg-opacity-50 dark:border-purple-800 dark:bg-gray-900"},[I(d,{to:`/playlist/${t.id}`,class:"flex justify-center items-center space-x-1 border-b py-3"},{default:B(()=>[t.item.private?(l(),a("label",Jt,"Private")):C("",!0),e("div",Rt,n(t.item.title),1)]),_:2},1032,["to"]),e("div",Tt,[e("div",Lt,[e("div",Bt,[e("img",{class:"object-cover h-full w-full rounded-lg dark:filter dark:brightness-75",src:s(X)({image:t.item.cover})},null,8,Dt)])]),e("div",Et,[e("div",{class:"line-clamp-3 w-full overflow-ellipsis overflow-hidden",textContent:n(t.item.desc)},null,8,Ht),e("div",{class:"w-full text-right text-sm text-gray-600 dark:text-gray-300",textContent:n(s(u)("search.search-result.playlist.playlist.playlist-count",{count:t.item.count}))},null,8,Qt)])])]))),128))]))])):C("",!0)}}});const Mt=ve(zt,[["__scopeId","data-v-183ebf9a"]]),Ft={class:"text-center flex flex-col justify-start items-center"},Yt={key:0,class:"text-lg font-semibold m-4 px-auto"},Gt={class:"p-2 md:m-auto xl:w-9/10 2xl:w-4/5"},Wt={class:"my-2 md:m-0 md:flex md:justify-between"},Kt={class:"flex"},Xt=["onClick","textContent"],Zt={key:0,class:"flex self-center"},es=["onClick","textContent"],gs=M({__name:"SearchResult",setup(h){const{t:k}=F(),o=ie(),u=ne(),v=O(0),m=V(()=>{const d=String(o.query.i?Array.isArray(o.query.i)?o.query.i.join(" "):o.query.i:"");return d&&he(k("search.search-result.title")+d),d}),c=V(()=>Number(o.query.limit?Array.isArray(o.query.limit)?o.query.limit[0]:o.query.limit:20)),p=V(()=>Number(o.query.page?Array.isArray(o.query.page)?o.query.page[0]:o.query.page:0)),$=V(()=>p.value+1),y=[{value:"last_modified",name:k("search.search-result.order.last-modified")},{value:"video_oldest",name:k("search.search-result.order.video-oldest")}],g=V(()=>String(o.query.order?Array.isArray(o.query.order)?o.query.order[0]:o.query.order:y[0].value)),f=V(()=>String(o.query.visible_site?Array.isArray(o.query.visible_site)?o.query.visible_site[0]:o.query.visible_site:localStorage.getItem("VisibleSite")||"")),S=[{value:"video",name:k("search.search-result.video.tab")},{value:"playlist",name:k("search.search-result.playlist.tab")}],q=V(()=>String(o.query.tab?Array.isArray(o.query.tab)?o.query.tab[0]:o.query.tab:S[0].value));function j(d){const t=JSON.parse(JSON.stringify(o.query));t.i=d,t.page=0,u.push({path:o.path,query:t})}function R(){const d=JSON.parse(JSON.stringify(o.query));d.page=p.value-1,u.push({path:o.path,query:d})}function T(){const d=JSON.parse(JSON.stringify(o.query));d.page=p.value+1,u.push({path:o.path,query:d})}function P(d){const t=JSON.parse(JSON.stringify(o.query));t.page=d-1,u.push({path:o.path,query:t})}function _(d){const t=JSON.parse(JSON.stringify(o.query));t.page=0,t.tab=d,delete t.visible_site,delete t.order,u.push({path:o.path,query:t})}function U(d){const t=JSON.parse(JSON.stringify(o.query));t.page=0,t.order=d,u.push({path:o.path,query:t})}return(d,t)=>{const L=me;return l(),A(L,{"show-search-bar":!s(J).sm},{default:B(()=>[e("div",Ft,[s(J).sm?(l(),a("h3",Yt,n(s(k)("search.search-result.search-keywords")+s(m)),1)):C("",!0),s(J).sm?(l(),A(ye,{key:1,keyword:s(m),"onUpdate:keyword":t[0]||(t[0]=r=>w(m)?m.value=r:null),class:"w-2/5 md:w-4/6 lg:w-3/6",onSearch:j},null,8,["keyword"])):C("",!0)]),e("div",Gt,[e("div",Wt,[e("div",Kt,[(l(),a(b,null,x(S,r=>e("div",{key:r.value,class:Q(["px-5 py-2 cursor-pointer text-gray-400 text-sm font-semibold border-t-4 border-transparent md:text-base md:font-bold md:p-5 md:pt-3",{"text-black border-purple-300 dark:text-white":r.value===s(q)}]),onClick:N=>_(r.value),textContent:n(r.name)},null,10,Xt)),64))]),s(q)==="video"||s(q)==="playlist"?(l(),a("div",Zt,[(l(),a(b,null,x(y,r=>e("label",{key:r.value,class:Q(["px-2 py-1 cursor-pointer text-gray-400 text-sm font-semibold md:text-base md:font-bold md:px-5 md:py-2",{"text-black rounded-full bg-gray-100 dark:text-white dark:bg-gray-500":r.value===s(g)}]),onClick:N=>U(r.value),textContent:n(r.name)},null,10,es)),64))])):C("",!0)]),s(q)===S[0].value?(l(),A(nt,{key:0,query:s(m),"onUpdate:query":t[1]||(t[1]=r=>w(m)?m.value=r:null),limit:s(c),"onUpdate:limit":t[2]||(t[2]=r=>w(c)?c.value=r:null),offset:s(p),"onUpdate:offset":t[3]||(t[3]=r=>w(p)?p.value=r:null),order:s(g),"onUpdate:order":t[4]||(t[4]=r=>w(g)?g.value=r:null),"visible-site":s(f),"onUpdate:visible-site":t[5]||(t[5]=r=>w(f)?f.value=r:null),"page-count":v.value,"onUpdate:page-count":t[6]||(t[6]=r=>v.value=r)},null,8,["query","limit","offset","order","visible-site","page-count"])):s(q)===S[1].value?(l(),A(Mt,{key:1,query:s(m),"onUpdate:query":t[7]||(t[7]=r=>w(m)?m.value=r:null),limit:s(c),"onUpdate:limit":t[8]||(t[8]=r=>w(c)?c.value=r:null),offset:s(p),"onUpdate:offset":t[9]||(t[9]=r=>w(p)?p.value=r:null),order:s(g),"onUpdate:order":t[10]||(t[10]=r=>w(g)?g.value=r:null),"page-count":v.value,"onUpdate:page-count":t[11]||(t[11]=r=>v.value=r)},null,8,["query","limit","offset","order","page-count"])):C("",!0)]),I(fe,{"page-count":v.value,"onUpdate:page-count":t[12]||(t[12]=r=>v.value=r),page:s($),"onUpdate:page":t[13]||(t[13]=r=>w($)?$.value=r:null),onPrevious:R,onNext:T,onChange:P},null,8,["page-count","page"]),I(ge)]),_:1},8,["show-search-bar"])}}});export{gs as default};
//# sourceMappingURL=SearchResult.94d0f02e.js.map
