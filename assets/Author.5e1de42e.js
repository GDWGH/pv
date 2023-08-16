import{_ as T,b as U,c as z}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.7eccdb25.js";import{d as D,u as F,U as v,D as y,G as w,B as k,H as $,m as C,o as l,c as _,w as u,ap as P,aq as W,f as a,g as i,e as t,$ as E,s as M,b as d,t as n,Q as m,F as f,h as S,i as p,ac as Q,j,P as G,ax as J}from"./index.ba512df2.js";import{s as K}from"./setSiteTitle.db0fa839.js";import{_ as O}from"./Cover.vue_vue_type_script_setup_true_lang.01b4ff1a.js";import{_ as X}from"./PvTabs.vue_vue_type_script_setup_true_lang.920a3250.js";import"./Logo.vue_vue_type_script_setup_true_lang.81c0a1bc.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.763a25b3.js";import"./use-controllable.c29d0d5d.js";import"./index.2ee00494.js";/*! PatchyVideo/Platinum by VoileLabs */const Y={key:0,class:"max-w-screen-xl mx-auto"},Z=t("div",{class:"w-full aspect-ratio-6/1 bg-gray-200 dark:bg-gray-600"},null,-1),ee={class:"flex flex-row lt-sm:mt-2 ml-4 md:ml-16"},te={class:"aspect-ratio-1/1 flex-shrink-0 flex-grow-0 sm:-mt-16"},ae={class:"mt-1 sm:mt-2 ml-2 sm:ml-6"},se=["textContent"],re={class:"text-md sm:text-base text-gray-800 dark:text-gray-300"},oe={class:"inline-flex align-middle flex-row space-x-1 flex-nowrap"},le=["href"],ie=["textContent"],ne={class:"mt-4 ml-8"},ue={key:0},de={class:"flex flex-nowrap gap-2"},me=t("span",{class:"i-uil:external-link-alt text-lg"},null,-1),ce={class:"grid mt-2 grid-cols-5 grid-flow-row gap-x-2"},ge=["textContent"],_e={class:"w-full text-xs truncate text-gray-600 dark:text-gray-300 font-light"},Ce=D({__name:"Author",setup(fe){const{t:h}=F(),V=Q(),q=v(()=>Number(V.params.tid)),{result:R,loading:A}=y(w`
    query ($tid: Int!) {
      getAuthor(para: { tagid: $tid }) {
        tagname
        type
        desc
        avatar
        urls
        commonTags {
          id
          languages {
            lang
            value
          }
        }
      }
    }
  `,{tid:q});k(()=>{A.value?P():W()});const s=$(R,null,e=>e==null?void 0:e.getAuthor);k(()=>{s.value&&K(h("tag.author.title",{tagname:s.value.tagname}))});const I=e=>{const o=new URL(e);return o.hostname.endsWith("bilibili.com")?"bilibili":o.hostname.endsWith("youtube.com")?"youtube":o.hostname.endsWith("twitter.com")?"twitter":"other"},B=e=>{switch(e){case"bilibili":return"i-ri:bilibili-line";case"youtube":return"i-uil:youtube-alt";case"twitter":return"i-uil:twitter-alt";default:return"i-uil:link-alt"}},c=C(!1),L=[{name:"author-videos",label:"发布的视频"}],x=C("author-videos"),{result:N}=y(w`
    query ($limit: Int!, $query: String!, $order: String!) {
      listVideo(
        para: {
          offset: 0
          limit: $limit
          humanReadableTag: true
          query: $query
          order: $order
          qtype: "tag"
        }
      ) {
        count
        videos {
          id
          item {
            title
            coverImage
          }
          meta {
            createdAt
          }
        }
      }
    }
  `,{limit:20,query:v(()=>{var e;return(e=s.value)==null?void 0:e.tagname}),order:"last_modified"},()=>{var e;return{enabled:!!((e=s.value)!=null&&e.tagname)}}),g=$(N,null,e=>e==null?void 0:e.listVideo);return(e,o)=>{const b=j("RouterLink"),H=T;return l(),_(H,null,{default:u(()=>[a(s)?(l(),i("div",Y,[Z,t("div",ee,[t("div",te,[t("div",{class:"overflow-hidden border-2 border-gray-300 dark:border-gray-800 transform transition-all ease duration-300",style:E({borderRadius:c.value?"0.25rem":a(M).md?"14rem":"5rem"}),onMouseenter:o[0]||(o[0]=()=>c.value=!0),onMouseleave:o[1]||(o[1]=()=>c.value=!1)},[d(U,{class:"w-20 h-20 md:w-56 md:h-56 cursor-pointer",openable:"","hide-title":"",alt:a(s).tagname,image:a(s).avatar},null,8,["alt","image"])],36)]),t("div",ae,[t("h1",{class:"text-lg sm:text-2xl font-bold",textContent:n(a(s).tagname)},null,8,se),t("div",re,[m(n(a(h)(`tag.author.type.${a(s).type}`)),1),a(s).urls.length>0?(l(),i(f,{key:0},[m(" ˙ "),t("div",oe,[(l(!0),i(f,null,S(a(s).urls,r=>(l(),i("a",{key:r,target:"_blank",rel:"noopener noreferrer",href:r,class:G(["inline-block text-lg",B(I(r))])},null,10,le))),128))])],64)):p("",!0)]),t("p",{class:"whitespace-pre break-normal line-clamp-4",textContent:n(a(s).desc)},null,8,ie)])]),t("div",ne,[d(X,{modelValue:x.value,"onUpdate:modelValue":o[2]||(o[2]=r=>x.value=r),tabs:L},{"author-videos":u(()=>[a(g)?(l(),i("div",ue,[t("div",de,[t("span",null,n(a(s).tagname)+"共发布了 "+n(a(g).count)+" 个视频",1),d(b,{to:{path:"/search-result",query:{i:a(s).tagname}},class:"flex text-purple-600 flex-nowrap items-center gap-0.5 dark:text-white dark:border-b dark:border-gray-400"},{default:u(()=>[m(" 查看全部"),me]),_:1},8,["to"])]),t("div",ce,[(l(!0),i(f,null,S(a(g).videos,r=>(l(),_(b,{key:r.id.toHexString(),to:`/video/${r.id.toHexString()}`,class:"p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-100"},{default:u(()=>[d(O,{title:r.item.title,"cover-image":r.item.coverImage,class:"rounded-md border border-gray-200 dark:border-gray-800"},null,8,["title","cover-image"]),t("a",{class:"w-full text-sm overflow-hidden line-clamp-2 overflow-ellipsis",textContent:n(r.item.title)},null,8,ge),t("div",_e,[(l(),_(J,null,{default:u(()=>[d(z,{date:r.meta.createdAt},null,8,["date"])]),_:2},1024)),m("  ")])]),_:2},1032,["to"]))),128))])])):p("",!0)]),_:1},8,["modelValue"])])])):p("",!0)]),_:1})}}});export{Ce as default};
//# sourceMappingURL=Author.5e1de42e.js.map
