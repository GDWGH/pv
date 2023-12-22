import{b as D,c as te,a as he,_ as ye}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.a8aaec06.js";import{d as G,m as I,q as ce,y as F,aw as ke,S as be,o as l,g as i,e,P as V,a1 as we,a6 as ne,U as O,a7 as ue,G as K,t as v,J as ge,O as ve,c as _,i as H,Q as T,N as re,F as S,D as me,H as Q,r as X,f as a,s as Y,b as p,h as N,j as xe,w as h,ax as Z,I as pe,B as le,ay as $e,u as Ce,av as Se,ap as Te,aq as Be,T as de,ac as He,az as Ie}from"./index.c24d4ea6.js";import{P as Ae}from"./Player.a1d7d0e1.js";import{_ as Re}from"./Cover.vue_vue_type_script_setup_true_lang.b0c3952e.js";import{C as Pe}from"./CoverPlaceholder.3ea8d06d.js";import{M as je,f as Le,U as ae}from"./UserAvatarPopper.036be7dd.js";import{s as Me}from"./setSiteTitle.db0fa839.js";import{a as Oe}from"./imageUrl.5afb7f35.js";import"./Logo.vue_vue_type_script_setup_true_lang.9d603434.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.3d8ec813.js";import"./use-controllable.212014f1.js";import"./PvSwitch.vue_vue_type_script_setup_true_lang.cf73d1b9.js";import"./index.79f1e9b5.js";/*! PatchyVideo/Platinum by VoileLabs */var se=(c=>(c.Playlist="PLAYLIST",c.Video="VIDEO",c))(se||{}),_e=(c=>(c.Author="AUTHOR",c.Character="CHARACTER",c.Copyright="COPYRIGHT",c.General="GENERAL",c.Language="LANGUAGE",c.Meta="META",c.Soundtrack="SOUNDTRACK",c))(_e||{});const fe=new je({html:!1,breaks:!0,linkify:!0}).use(Le);fe.block.ruler.enableOnly(["paragraph"]);function Ee(c){let x;try{x=fe.render(c.replace(/\[\[表情:(\p{L}+)\]\]/gu,"[[face:$1]]"),{last:[]})}catch(r){console.error(r),x=`<div class="font-mono">Error throwed from Markdown parser: ${r}<br />${r instanceof Error&&r.stack?r.stack.replaceAll(`
`,"<br />"):String(r)}</div>`}return x}const qe={class:"overflow-hidden"},ze={class:"-my-24"},Ue=["innerHTML"],Ne=G({__name:"MarkdownCommentBlock",props:{text:null,size:{default:""}},emits:["htmlChanged"],setup(c,{emit:x}){const r=c,y=I(""),g=I(!0);ce(r,(w,$)=>{w.text!==$.text&&(g.value=!0)});const f=F(null);return ke(f,([{isIntersecting:w}])=>{w&&g.value&&(y.value=Ee(r.text),be(()=>x("htmlChanged")),g.value=!1)},{rootMargin:"400px 400px 400px 400px"}),(w,$)=>(l(),i("div",qe,[e("div",ze,[e("article",{ref_key:"root",ref:f,class:V(["prose dark:prose-invert break-all my-24",{"text-sm":c.size==="sm","text-lg":c.size==="lg","text-xl":c.size==="xl"}]),innerHTML:y.value},null,10,Ue)])]))}});const ee=we(Ne,[["__scopeId","data-v-b0ee444b"]]),Ve={class:"w-full max-w-75ch rounded border border-gray-300 dark:border-gray-600 overflow-hidden"},De={class:"flex flex-row flex-nowrap justify-between items-center px-1 py-0.5 w-full text-sm border-b border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"},Ge=e("div",{class:"flex flex-row flex-nowrap items-center text-gray-800 dark:text-gray-300"}," 富文本编辑正在制作中 ",-1),Fe={class:"flex flex-row flex-nowrap items-center"},Ke=["textContent"],We={class:"w-full p-0.5 -my-24"},Je=e("div",{class:"px-1 py-0.5 w-full text-xs text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"},[T(" 请遵守"),e("a",{class:"text-blue-600 dark:text-blue-500",target:"_blank",rel:"noopener noreferrer",href:"https://patchyvideo.wiki/zh/Comments"},"评论规则"),T("！评论区支持部分 Markdown 语法，点击右上角的预览按钮预览渲染效果。 ")],-1),Qe=["onSubmit","onReset"],Ye=e("button",{type:"submit",class:"px-4 py-1 rounded-md text-purple-800 dark:text-white border-2 border-purple-300 dark:border-indigo-700"}," 发表 ",-1),Xe=e("button",{type:"reset",class:"px-4 py-1 rounded-md border-2 border-gray-300 dark:border-gray-600"}," 清空 ",-1),Ze={key:0},et=e("i",{class:"i-uil:spinner-alt animate-spin"},null,-1),tt={key:1},lt=G({__name:"CommentPost",props:{videoId:null,playlistId:null},emits:["refetchThread"],setup(c,{emit:x}){const r=c,y=ne(),g=O(()=>r.videoId?se.Video:r.playlistId?se.Playlist:null),f=O(()=>{var C,A;return(A=(C=r.videoId)!=null?C:r.playlistId)!=null?A:null}),{mutate:w}=ue(K`
  mutation ($type: CommentType!, $id: String!, $content: String!) {
    postComment(para: { commentType: $type, targetId: $id, content: $content, filter: false }) {
      commentId
      thread {
        id
      }
    }
  }
`),$=I(null),L=I(""),o=()=>{!$.value||(L.value=$.value.innerText)},E=()=>{!$.value||($.value.innerHTML="",L.value="")},q=I(!1),U=I(""),P=async()=>{var A;if(!y.isLogin||!L.value||!f.value)return;q.value=!0;const C=await w({type:g.value,id:f.value,content:L.value}).catch(m=>{q.value=!1,U.value=String(m)});q.value=!1,(A=C==null?void 0:C.data)!=null&&A.postComment.commentId&&(E(),x("refetchThread",C.data.postComment.thread.id.toHexString()))},B=I(!1),j=()=>{!$.value||(B.value=!B.value)};return(C,A)=>(l(),i(S,null,[e("div",Ve,[e("div",De,[Ge,e("div",Fe,[e("button",{onClick:j,textContent:v(B.value?"编辑":"预览")},null,8,Ke)])]),ge(e("div",We,[e("div",{ref_key:"inputEl",ref:$,class:"prose dark:prose-invert break-all min-h-24 my-24 focus-visible:outline-none",contenteditable:"true",onInput:o},null,544)],512),[[ve,!B.value]]),B.value&&$.value?(l(),_(ee,{key:0,class:"p-0.5",text:L.value},null,8,["text"])):H("",!0),Je]),e("form",{class:"flex flex-row items-center gap-2 mt-1",onSubmit:re(P,["prevent"]),onReset:re(E,["prevent"])},[Ye,Xe,q.value?(l(),i("div",Ze,[et,T("正在发表评论…… ")])):H("",!0),U.value?(l(),i("div",tt," 评论发表失败："+v(U.value),1)):H("",!0)],40,Qe)],64))}}),at={class:"mx-1 md:mx-2 lg:mx-4"},st=e("i",{class:"i-uil:spinner-alt text-lg animate-spin"},null,-1),it={key:0,class:"flex flex-row flex-nowrap py-2"},nt={class:"flex-none mx-2"},ot={class:"flex-1"},rt=["textContent"],dt=e("span",{class:"text-xs text-gray-500 dark:text-gray-400"},[e("span",{class:"ml-1.5"},"发表一条友善的评论")],-1),ct={class:"flex flex-row flex-nowrap"},ut={class:"flex-none mx-2"},gt={key:0,class:"w-px h-[calc(100%-2rem)] mt-1 mx-auto bg-gray-300 dark:bg-gray-700"},vt=["textContent"],mt={class:"text-xs text-gray-500 dark:text-gray-300"},xt={key:0,class:"ml-1.5"},pt={key:0,class:"min-h-6 text-gray-600 dark:text-gray-400"},_t=["onClick"],ft={class:"flex-none w-10 md:w-14"},ht={class:"flex flex-row w-full h-full ml-6 md:ml-8"},yt={key:0,class:"w-px h-full bg-gray-300 dark:bg-gray-700"},kt={key:0,class:"flex-none mt-1 mr-2"},bt={key:0,class:"mr-1"},wt=["textContent"],$t={key:1},Ct=["textContent"],St={key:2,class:"min-h-8 text-sm text-gray-600 dark:text-gray-400"},Tt=["onClick"],Bt=["onClick"],Ht=e("div",{class:"flex-none w-10 md:w-14"},[e("div",{class:"flex flex-row w-full h-full ml-6 md:ml-8"},[e("div",{class:"w-px h-3 bg-gray-300 dark:bg-gray-700"}),e("div",{class:"mt-3 w-3 md:w-5 h-px bg-gray-300 dark:bg-gray-700"})])],-1),It={key:0,class:"flex flex-row text-sm items-center text-blue-600 dark:text-blue-300"},At=e("div",{class:"i-uil:arrow-to-bottom text-base transform rotate-180"},null,-1),Rt={key:1,class:"flex flex-row text-sm items-center text-blue-600 dark:text-blue-300"},Pt=e("div",{class:"i-uil:arrow-from-top text-base"},null,-1),jt=G({__name:"CommentList",props:{commentThreadId:null,videoId:null,playlistId:null},setup(c){const x=c,r=ne(),y=O(()=>!x.commentThreadId),g=I(null),f=O(()=>{var m;return(m=g.value)!=null?m:x.commentThreadId}),{result:w,loading:$,refetch:L,start:o,stop:E}=me(K`
    query ($tid: String!) {
      getThread(para: { threadId: $tid }) {
        count
        comments {
          id
          content
          hidden
          deleted
          edited
          meta {
            createdAt
            createdBy {
              id
              username
              image
              gravatar
              desc
            }
          }
          children {
            id
            content
            hidden
            deleted
            edited
            meta {
              createdAt
              createdBy {
                id
                username
                image
                gravatar
                desc
              }
            }
          }
        }
      }
    }
  `,{tid:f},{enabled:!y.value});ce(y,m=>{m?E():o()});const q=Q(w,null,m=>m==null?void 0:m.getThread),U=O(()=>{var m,R,z;return(z=(R=(m=q.value)==null?void 0:m.comments)==null?void 0:R.filter(k=>k.content&&k.meta.createdBy&&!k.deleted).map(k=>{var t;return{...k,children:(t=k.children)==null?void 0:t.filter(b=>b.content&&b.meta.createdBy&&!b.deleted).sort((b,d)=>+d.meta.createdAt-+b.meta.createdAt)}}).filter(k=>!!k).sort((k,t)=>+t.meta.createdAt+(t.pinned?1<<32:0)-(+k.meta.createdAt+(k.pinned?1<<32:0))))!=null?z:[]}),P=X({}),B=(m,R)=>P[m]?R:R.slice(0,3),j=m=>m.children&&m.children.length>3&&!P[m.id.toHexString()],C=X({}),A=m=>{m!==f.value?g.value=m:L()};return(m,R)=>{var k;const z=xe("RouterLink");return l(),i(S,null,[e("div",at,[a($)&&!a(y)?(l(),i(S,{key:0},[T(" 正在加载评论区"),st],64)):(l(),i(S,{key:1},[T(" 共 "+v(((k=a(q))==null?void 0:k.count)||0)+" 条评论 ",1)],64))]),a(r).isLogin&&a(Y).md?(l(),i("div",it,[e("div",nt,[p(D,{class:"inline-block w-8 md:w-12 h-8 md:h-12 rounded-full object-cover",image:a(r).image,email:a(r).email,alt:a(r).username,"hide-title":""},null,8,["image","email","alt"])]),e("div",ot,[e("div",null,[e("span",{class:"text-sm font-medium",textContent:v(a(r).username)},null,8,rt),dt]),p(lt,{"video-id":c.videoId,"playlist-id":c.playlistId,onRefetchThread:A},null,8,["video-id","playlist-id"])])])):H("",!0),(l(!0),i(S,null,N(a(U),t=>{var b,d,s;return l(),i("div",{key:t.id.toHexString(),class:"py-2"},[e("div",ct,[e("div",ut,[p(z,{to:`/user/${t.meta.createdBy.id.toHexString()}`},{default:h(()=>[p(ae,{uid:t.meta.createdBy.id.toHexString()},{default:h(()=>[p(D,{class:"inline-block w-8 md:w-12 h-8 md:h-12 rounded-full object-cover",image:t.meta.createdBy.image,gravatar:t.meta.createdBy.gravatar,alt:t.meta.createdBy.username,"hide-title":""},null,8,["image","gravatar","alt"])]),_:2},1032,["uid"])]),_:2},1032,["to"]),((d=(b=t.children)==null?void 0:b.length)!=null?d:0>0)?(l(),i("div",gt)):H("",!0)]),e("div",null,[e("div",null,[p(z,{to:`/user/${t.meta.createdBy.id.toHexString()}`},{default:h(()=>[e("span",{class:"text-sm font-medium",textContent:v(t.meta.createdBy.username)},null,8,vt)]),_:2},1032,["to"]),e("span",mt,[(l(),_(Z,null,{default:h(()=>[p(te,{class:"ml-1.5",date:t.meta.createdAt},null,8,["date"])]),_:2},1024)),t.edited?(l(),i("span",xt,"edited")):H("",!0)])]),((s=C[t.id.toHexString()])!=null?s:t.hidden)?(l(),i("div",pt,[T(" 此评论已被折叠 "),e("span",{class:"text-blue-500 dark:text-blue-600 cursor-pointer",onClick:()=>C[t.id.toHexString()]=!1},"显示评论",8,_t)])):(l(),_(ee,{key:1,class:"min-h-6",text:t.content,size:"md"},null,8,["text"]))])]),(l(!0),i(S,null,N(t.children?B(t.id.toHexString(),t.children):void 0,(u,M)=>{var W;return l(),i("div",{key:u.id.toHexString(),class:"flex flex-row flex-nowrap"},[e("div",ft,[e("div",ht,[t.children.length>3||M!==t.children.length-1?(l(),i("div",yt)):(l(),i("div",{key:1,class:V(["w-px bg-gray-300 dark:bg-gray-700",j(t)?"h-3":"h-5"])},null,2)),e("div",{class:V(["w-3 md:w-5 h-px bg-gray-300 dark:bg-gray-700",j(t)?"mt-3":"mt-5"])},null,2)])]),j(t)?H("",!0):(l(),i("div",kt,[p(z,{to:`/user/${u.meta.createdBy.id.toHexString()}`},{default:h(()=>[p(ae,{uid:u.meta.createdBy.id.toHexString()},{default:h(()=>[p(D,{class:"inline-block w-8 h-8 rounded-full object-cover",image:u.meta.createdBy.image,gravatar:u.meta.createdBy.gravatar,alt:u.meta.createdBy.username,"hide-title":""},null,8,["image","gravatar","alt"])]),_:2},1032,["uid"])]),_:2},1032,["to"])])),e("div",{class:V(["flex",{"flex-col":!j(t)}])},[j(t)?(l(),i("div",bt,[p(z,{to:`/user/${u.meta.createdBy.id.toHexString()}`},{default:h(()=>[e("span",{class:"text-sm font-medium",textContent:v(u.meta.createdBy.username)},null,8,wt)]),_:2},1032,["to"]),T(": ")])):(l(),i("div",$t,[p(z,{to:`/user/${u.meta.createdBy.id.toHexString()}`},{default:h(()=>[e("span",{class:"text-sm font-medium",textContent:v(u.meta.createdBy.username)},null,8,Ct)]),_:2},1032,["to"]),(l(),_(Z,null,{default:h(()=>[p(te,{class:"text-xs text-gray-500 dark:text-gray-300 ml-2",date:u.meta.createdAt},null,8,["date"])]),_:2},1024))])),((W=C[t.id.toHexString()])!=null?W:t.hidden)?(l(),i("div",St,[T(" 此评论已被折叠 "),e("span",{class:"text-blue-500 dark:text-blue-600 cursor-pointer",onClick:()=>C[t.id.toHexString()]=!1},"显示评论",8,Tt)])):(l(),_(ee,{key:3,class:"min-h-6",text:u.content,size:"sm"},null,8,["text"]))],2)])}),128)),t.children&&t.children.length>3?(l(),i("div",{key:0,class:"flex flex-row flex-nowrap cursor-pointer",onClick:()=>{P[t.id.toHexString()]=!P[t.id.toHexString()]}},[Ht,P[t.id.toHexString()]?(l(),i("div",It,[At,T(" 收起楼中楼 ")])):(l(),i("div",Rt,[Pt,T(" 展开楼中楼 ")]))],8,Bt)):H("",!0)])}),128))],64)}}}),Lt={class:"inline-flex px-2.5 text-base flex-row items-center gap-1 whitespace-nowrap rounded-full border-1 border-gray-400 dark:border-gray-600"},Mt=["textContent"],ie=G({__name:"RoundTag",props:{tag:null,removeable:{type:Boolean}},emits:["remove"],setup(c,{emit:x}){const r=c,y=O(()=>({category:r.tag.category.toLowerCase(),name:pe(r.tag.languages).replace(/_/g," ")})),g={copyright:"bg-copyright",language:"bg-language",character:"bg-character",author:"bg-author",general:"bg-general",meta:"bg-meta",soundtrack:"bg-soundtrack"};return(f,w)=>(l(),i("div",Lt,[e("span",{class:V(["inline-block w-2 h-2 rounded-full",g[a(y).category]])},null,2),e("span",{textContent:v(a(y).name)},null,8,Mt),c.removeable?(l(),i("button",{key:0,class:"inline i-uil:times text-gray-600 dark:text-gray-400 hover:text-black",title:"删除标签",onClick:w[0]||(w[0]=()=>x("remove"))})):H("",!0)]))}}),Ot={class:"flex flex-col gap-2"},Et={class:"flex justify-between"},qt=e("div",{class:"ml-1 font-light"}," 现有标签 ",-1),zt={class:"flex flex-row gap-1 items-center"},Ut={key:0,class:"text-gray-800 dark:text-gray-200"},Nt=e("div",{class:"inline-block i-uil:spinner-alt animate-spin"},null,-1),Vt={class:"flex gap-1 flex-row flex-wrap"},Dt=e("div",{class:"ml-1 font-light"}," 加入标签 ",-1),Gt=G({__name:"EditTags",props:{vid:null,tags:null},emits:["refetch"],setup(c,{emit:x}){const r=c,{resolveClient:y}=$e(),g=I([]),f=I([]);le(()=>{g.value=[...r.tags]});const w=O(()=>{if(g.value.length!==r.tags.length)return!0;const t=r.tags.map(d=>d.tagid).sort((d,s)=>d-s),b=g.value.map(d=>d.tagid).sort((d,s)=>d-s);return t.some((d,s)=>d!==b[s])}),$=async t=>{var u;if(g.value.find(M=>M.tagid===t)||f.value.includes(t))return!1;f.value.push(t);const d=await y().query({query:K`
        query ($tid: Int!) {
          getTagObjects(para: { tagid: [$tid] }) {
            __typename
            id
            tagid
            category
            languages {
              lang
              value
            }
          }
        }
      `,variables:{tid:t}}).catch(()=>null);f.value.splice(f.value.indexOf(t),1);const s=(u=d==null?void 0:d.data)==null?void 0:u.getTagObjects[0];return s?(g.value.push(s),!0):!1},L=t=>{const b=g.value.findIndex(d=>d.tagid===t);return b===-1?!1:(g.value.splice(b,1),!0)},o=X([]),E=X([]),q=()=>{if(o.length>0){const t=o.pop();E.push(t),t.type==="add"?L(t.tagid):$(t.tagid)}},U=()=>{if(E.length>0){const t=E.pop();o.push(t),t.type==="add"?$(t.tagid):L(t.tagid)}},P=t=>{o.push(t),E.length=0},B=I(""),j=F(),C=t=>{L(t)&&P({type:"remove",tagid:t})},A=async t=>{typeof t.id=="number"&&await $(t.id)&&P({type:"add",tagid:t.id})},{mutate:m}=ue(K`
  mutation ($vid: String!, $tags: [Int!]!) {
    editVideoTagIds(para: { editBehaviour: "replace", tags: $tags, videoId: $vid }) {
      tagid
    }
  }
`),R=I(!1),z=I(""),k=async()=>{!w.value||(R.value=!0,await m({vid:r.vid,tags:g.value.map(t=>t.tagid)}).catch(t=>{z.value=t.message}),x("refetch"),R.value=!1)};return(t,b)=>(l(),i("div",Ot,[e("div",null,[e("div",Et,[qt,e("div",zt,[R.value?(l(),i("div",Ut,[T(" 正在提交"),Nt])):a(w)?(l(),i("button",{key:1,class:"text-blue-500",onClick:k}," 提交修改 ")):H("",!0),e("button",{class:V(["inline i-uil:redo text-lg -scale-x-full",{"text-gray-400 dark:text-gray-600":!o.length}]),onClick:q},null,2),e("button",{class:V(["inline i-uil:redo text-lg",{"text-gray-400 dark:text-gray-600":!E.length}]),onClick:U},null,2)])]),e("div",Vt,[(l(!0),i(S,null,N(g.value,d=>(l(),_(ie,{key:d.id.toHexString(),tag:d,removeable:"",onRemove:()=>C(d.tagid)},null,8,["tag","onRemove"]))),128)),(l(!0),i(S,null,N(f.value,d=>(l(),_(ie,{key:d,tag:{category:a(_e).General,languages:[{__typename:"MultilingualMapping",lang:"ENG",value:`id<${d.toString()}>`}]}},null,8,["tag"]))),128))])]),e("div",null,[Dt,p(he,{keyword:B.value,"onUpdate:keyword":b[0]||(b[0]=d=>B.value=d),"teleport-result":a(j),onSuggestionClick:A},null,8,["keyword","teleport-result"]),e("div",{ref_key:"editTagSearchResult",ref:j},null,512)])]))}}),Ft={key:0,class:"xl:mx-2"},Kt={class:"grid grid-cols-12 space-x-2 grid-flow-row-dense"},Wt={class:"col-span-full xl:col-span-9"},Jt=["textContent"],Qt={class:"flex flex-row items-center gap-2 text-gray-600 dark:text-gray-300"},Yt=["textContent"],Xt=["textContent"],Zt=["title"],el=["textContent"],tl=["title"],ll=e("div",{class:"my-1"},null,-1),al={class:"mx-1 md:mx-2 lg:mx-4"},sl={class:"flex mb-1 gap-1 items-center flex-wrap"},il=["title"],nl={key:1},ol=e("div",{class:"w-full border-t border-purple-300 dark:border-indigo-800 my-2"},null,-1),rl={class:"col-span-full xl:col-span-3"},dl={key:0,class:"flex flex-col mt-2 gap-1"},cl=e("div",{class:"i-uil:arrow-left text-xl"},null,-1),ul={class:"flex xl:flex-col justify-start px-1 xl:pt-4"},gl={class:"flex-shrink-0"},vl={class:"hidden sm:block ml-1.5 overflow-hidden"},ml=["textContent"],xl=["textContent"],pl=["textContent"],_l=e("br",null,null,-1),fl={class:"overflow-hidden whitespace-nowrap overflow-ellipsis text-sm text-gray-600 dark:text-gray-300"},hl={key:0,class:"xl:mx-2 border-purple-300 dark:border-purple-800 border-b xl:border xl:rounded-md xl:mt-2 flex flex-col max-h-125"},yl={class:"mx-2 my-1 flex justify-between"},kl=e("div",{class:"i-uil:list-ui-alt inline-block text-lg align-middle text-gray-800 dark:text-gray-100"},null,-1),bl={class:"text-sm text-gray-900 dark:text-gray-200"},wl={class:"flex flex-col justify-around"},$l={class:"h-full overflow-y-auto"},Cl={class:"flex flex-col flex-shrink-0 flex-grow-0 justify-around text-xs w-6 self-center text-center overflow-hidden"},Sl={key:0,class:"i-uil:play mx-auto"},Tl={class:"flex-shrink-0 flex-grow-0 w-24"},Bl={class:"aspect-ratio-8/5"},Hl=["src"],Il={class:"flex flex-col justify-between"},Al=["textContent"],Rl=["textContent"],Pl={class:"mt-2"},jl={class:"ml-1 font-light"},Ll={class:"flex flex-col"},Ml={class:"col-span-2"},Ol={class:"col-span-3 flex mt-0.5 flex-wrap content-start text-sm"},El=["textContent"],ql=["textContent"],zl={key:1,class:"mx-2"},Ul={class:"grid grid-cols-12 grid-flow-row-dense"},Nl=e("div",{class:"col-span-full xl:col-span-9"},[e("div",null,[e("h1",{class:"mt-1 sm:text-lg lg:text-xl w-4/5 rounded-md bg-gray-300 dark:bg-gray-600"},"   "),e("div",{class:"mt-1 text-gray-600 dark:text-gray-300 w-2/5 rounded-md bg-gray-300 dark:bg-gray-600"},"   ")]),e("div",{class:"w-full mt-1"},[e("div",{class:"aspect-ratio-16/9"},[e("div",{class:"w-full h-full bg-gray-400 dark:bg-gray-600"})])])],-1),Vl={class:"col-span-full xl:col-span-3 space-x-2"},Dl=e("div",{class:"flex xl:flex-col justify-start px-1 xl:pt-4"},[e("div",{class:"flex items-center flex-nowrap px-1 py-1 xl:w-full"},[e("div",{class:"relative flex-shrink-0"},[e("div",{class:"inline-block w-10 lg:w-14 h-10 lg:h-14 rounded-full bg-gray-400 dark:bg-gray-600"},"   ")]),e("div",{class:"hidden sm:block w-full ml-3 overflow-hidden"},[e("div",{class:"inline-block w-4/5 rounded-md bg-gray-300 dark:bg-gray-600"},"   "),e("br"),e("div",{class:"inline-block overflow-hidden whitespace-nowrap overflow-ellipsis text-sm w-2/5 mt-1 rounded-md bg-gray-400 dark:bg-gray-600"},"   ")])])],-1),Gl={class:"flex flex-col space-y-1 mt-2"},Fl={class:"col-span-2"},Kl=e("div",{class:"col-span-3 flex flex-wrap content-start text-sm"},[e("a",{class:"line-clamp-2 overflow-ellipsis overflow-hidden w-4/5 rounded-md bg-gray-400 dark:bg-gray-600"}," "),e("div",{class:"text-sm mt-1 inline-block w-2/5 truncate rounded-md bg-gray-300 dark:bg-gray-600"},"   ")],-1),oa=G({__name:"Video",setup(c){const{t:x}=Ce(),r=He(),y=ne(),g=O(()=>r.params.vid),f=O(()=>Array.isArray(r.query.list)?r.query.list[0]:r.query.list),{result:w,loading:$,refetch:L}=me(K`
    query ($vid: String!, $fetchPlaylist: Boolean!, $pid: String = "") {
      getVideo(para: { vid: $vid, lang: "CHS" }) {
        item {
          title
          desc
          uploadTime
          url
          repostType
          site
        }
        meta {
          createdBy {
            id
            username
            desc
            image
            gravatar
          }
        }
        tags {
          __typename
          id
          tagid
          category
          languages {
            lang
            value
          }
          ... on AuthorTagObject {
            authorRole
            author {
              id
              tagname
              avatar
              desc
            }
          }
        }
        commentThread {
          id
        }
        relatedVideos(topK: 20) {
          id
          item {
            title
            coverImage
          }
          meta {
            createdBy {
              username
            }
          }
        }
        clearence
      }
      listAdjacentVideos(para: { pid: $pid, vid: $vid, k: 200 }) @include(if: $fetchPlaylist) {
        video {
          id
          item {
            title
            coverImage
          }
          meta {
            createdBy {
              username
            }
          }
        }
        rank
      }
      getPlaylist(para: { pid: $pid }) @include(if: $fetchPlaylist) {
        item {
          title
          count
        }
        meta {
          createdBy {
            username
          }
        }
      }
    }
  `,{vid:g.value,fetchPlaylist:!!f.value,pid:f.value});le(()=>{$.value?Te():Be()});const o=Q(w,null,s=>s==null?void 0:s.getVideo);le(()=>{o.value&&Me(`${o.value.item.title} - PatchyVideo`)});const E=O(()=>o.value?o.value.tags.filter(s=>s.__typename==="AuthorTagObject").map(s=>s.author&&{type:"AuthorTag",id:s.author.id,tagid:s.tagid,name:s.author.tagname,desc:s.author.desc,avatar:s.author.avatar,position:s.authorRole}).concat([o.value.meta.createdBy&&{type:"User",id:o.value.meta.createdBy.id,name:o.value.meta.createdBy.username,desc:o.value.meta.createdBy.desc,avatar:o.value.meta.createdBy.image,gravatar:o.value.meta.createdBy.gravatar||void 0,position:x("video.video.uploader")}]).filter(s=>!!s):[]),q=O(()=>o.value?o.value.tags.filter(s=>s.__typename==="RegularTagObject"):[]),U=F(null),P=F(null),B=Q(w,null,s=>s==null?void 0:s.getPlaylist),j=Q(w,null,s=>s==null?void 0:s.listAdjacentVideos),C=O(()=>{var s,u;return o.value&&j.value?((u=(s=j.value.find(M=>M.video.id.toHexString()===g.value))==null?void 0:s.rank)!=null?u:-2)+1:-1}),A=I(!Y.xl),m=Se("video_tag_render_as_plain_text",!1),R=F(null),z=()=>{R.value&&!R.value.closed&&R.value.focus();const{window:s}=Ie({url:`/edit-video/${g.value}`});R.value=s},k=O(()=>{var s,u;return(u=(s=o.value)==null?void 0:s.clearence)!=null?u:3}),t=I(""),b=()=>{t.value=x("video.video.edit.hide-video.saving"),fetch("https://patchyvideo.com/be/videos/condemn_video.do",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({vid:g.value}),credentials:"include"}).then(s=>s.json()).then(s=>{if(s.status==="SUCCEED")t.value=x("video.video.edit.hide-video.succeed");else throw new Error(s)}).catch(s=>{var u;console.error(s),t.value=x("video.video.edit.hide-video.failed",{error:(u=s.message)!=null?u:s})})},d=I(!1);return(s,u)=>{const M=xe("RouterLink"),W=ye;return l(),_(W,null,{default:h(()=>{var oe;return[a(o)?(l(),i("div",Ft,[e("div",Kt,[e("div",Wt,[e("div",null,[e("h1",{class:"mt-1 sm:text-lg lg:text-xl font-semibold sm:font-medium lg:font-normal",textContent:v(a(o).item.title)},null,8,Jt),e("div",Qt,[e("div",{textContent:v(a(x)(`video.video.repost-type.${a(o).item.repostType}`,a(o).item.repostType))},null,8,Yt),a(k)!==3?(l(),i("div",{key:0,textContent:v(a(x)(`video.video.ranks.${a(k)}`))},null,8,Xt)):H("",!0),(l(),_(Z,null,{default:h(()=>[p(te,{date:a(o).item.uploadTime},null,8,["date"])]),_:1})),a(y).isAdmin?(l(),i(S,{key:1},[e("div",{title:a(x)("video.video.edit.hide-video.title"),class:"i-uil:eye-slash text-lg cursor-pointer select-none",onClick:b},null,8,Zt),t.value?(l(),i("div",{key:0,textContent:v(t.value)},null,8,el)):H("",!0)],64)):H("",!0),a(y).isLogin?(l(),i("div",{key:2,title:a(x)("video.video.edit.edit-video"),class:"i-uil:pen text-lg cursor-pointer select-none",onClick:z},null,8,tl)):H("",!0)])]),(l(),_(Z,null,{default:h(()=>[p(Ae,{item:a(o).item},null,8,["item"])]),_:1})),ll,e("div",{ref_key:"mobilePlaylistTarget",ref:P},null,512),e("div",{ref_key:"mobileAuthorTarget",ref:U},null,512),e("div",al,[e("div",sl,[e("span",{title:a(y).isLogin?a(x)("video.video.edit.edit-tags"):void 0},[e("div",{class:V(["i-uil:tag-alt inline-block text-2xl align-middle text-gray-600 dark:text-gray-300",{"cursor-pointer":a(y).isLogin}]),onClick:u[0]||(u[0]=()=>a(y).isLogin&&(d.value=!0))},null,2)],8,il),a(m)?(l(),i("div",nl,[(l(!0),i(S,null,N(a(q),n=>(l(),i("span",{key:n.id.toHexString(),class:"mr-2 text-blue-600"},"#"+v(a(pe)(n.languages)),1))),128))])):(l(!0),i(S,{key:0},N(a(q),n=>(l(),_(ie,{key:n.id.toHexString(),tag:n},null,8,["tag"]))),128))]),p(ee,{text:a(o).item.desc,size:"sm"},null,8,["text"])]),ol,e("div",null,[p(jt,{"comment-thread-id":(oe=a(o).commentThread)==null?void 0:oe.id.toHexString(),"video-id":a(g)},null,8,["comment-thread-id","video-id"])])]),e("div",rl,[d.value?(l(),i("div",dl,[e("button",{class:"flex items-center text-blue-500",onClick:u[1]||(u[1]=()=>d.value=!1)},[cl,T(" 返回详情 ")]),(l(),_(Gt,{key:a(g),vid:a(g),tags:a(o).tags,onRefetch:a(L)},null,8,["vid","tags","onRefetch"]))])):(l(),i(S,{key:1},[(l(),_(de,{to:a(U),disabled:!a(U)||a(Y).xl},[e("div",ul,[(l(!0),i(S,null,N(a(E),n=>(l(),i("div",{key:n.id.toHexString(),class:"flex items-center flex-nowrap px-1 py-1 xl:w-full"},[e("div",gl,[n.type==="User"?(l(),_(M,{key:0,to:`/user/${n.id.toHexString()}`},{default:h(()=>[p(ae,{uid:n.id.toHexString()},{default:h(()=>[p(D,{class:"inline-block w-10 lg:w-14 h-10 lg:h-14 rounded-full bg-gray-500 object-cover",image:n.avatar,gravatar:n.gravatar,alt:n.name,"hide-title":""},null,8,["image","gravatar","alt"])]),_:2},1032,["uid"])]),_:2},1032,["to"])):n.tagid?(l(),_(M,{key:1,to:`/tag/author/${n.tagid}`},{default:h(()=>[p(D,{class:"inline-block w-10 lg:w-14 h-10 lg:h-14 rounded-full bg-gray-500 object-cover",image:n.avatar,gravatar:n.gravatar,alt:n.name},null,8,["image","gravatar","alt"])]),_:2},1032,["to"])):(l(),_(D,{key:2,class:"inline-block w-10 lg:w-14 h-10 lg:h-14 rounded-full bg-gray-500 object-cover",image:n.avatar,gravatar:n.gravatar,alt:n.name},null,8,["image","gravatar","alt"]))]),e("div",vl,[n.type==="User"?(l(),_(M,{key:0,to:`/user/${n.id.toHexString()}`},{default:h(()=>[e("span",{class:"inline-block align-text-bottom px-0.75 mr-0.5 rounded bg-purple-400 dark:bg-violet-800 text-xs lg:text-sm text-white whitespace-nowrap overflow-hidden",textContent:v(n.position)},null,8,ml),T(v(n.name),1)]),_:2},1032,["to"])):n.tagid?(l(),_(M,{key:1,to:`/tag/author/${n.tagid}`},{default:h(()=>[e("span",{class:"inline-block align-text-bottom px-0.75 mr-0.5 rounded bg-purple-400 dark:bg-violet-800 text-xs lg:text-sm text-white whitespace-nowrap overflow-hidden",textContent:v(n.position)},null,8,xl),T(v(n.name),1)]),_:2},1032,["to"])):(l(),i(S,{key:2},[e("span",{class:"inline-block align-text-bottom px-0.75 mr-0.5 rounded bg-purple-400 dark:bg-violet-800 text-xs lg:text-sm text-white whitespace-nowrap overflow-hidden",textContent:v(n.position)},null,8,pl),T(v(n.name),1)],64)),_l,e("div",fl,v(n.desc||a(x)("video.video.no-desc")),1)])]))),128))])],8,["to","disabled"])),(l(),_(de,{to:a(P),disabled:!a(P)||a(Y).xl},[a(B)?(l(),i("div",hl,[e("div",yl,[e("div",null,[p(M,{class:"",to:`/playlist/${a(f)}`},{default:h(()=>[kl,T(" "+v(a(B).item.title),1)]),_:1},8,["to"]),e("div",bl,v(a(B).meta.createdBy?`${a(B).meta.createdBy.username} - `:"")+v(`${a(C)} / ${a(B).item.count}`),1)]),e("div",wl,[e("div",{class:V(["i-uil:angle-up text-2xl transform transition-transform duration-200 select-none cursor-pointer",{"rotate-180":A.value}]),onClick:u[2]||(u[2]=n=>A.value=!A.value)},null,2)])]),ge(e("div",$l,[(l(!0),i(S,null,N(a(j),(n,J)=>(l(),_(M,{key:n.video.id.toHexString(),class:V(["flex justify-start space-x-1 py-1 hover:bg-purple-50 dark:hover:bg-gray-800",{"bg-purple-50 dark:bg-gray-800":n.video.id.toHexString()===a(g)}]),to:`/video/${n.video.id}?list=${a(f)}`},{default:h(()=>[e("div",Cl,[J+1===a(C)?(l(),i("div",Sl)):(l(),i(S,{key:1},[T(v(n.rank+1),1)],64))]),e("div",Tl,[e("div",Bl,[e("img",{class:"inline-block",width:"96",height:"54",src:a(Oe)({image:n.video.item.coverImage})},null,8,Hl)])]),e("div",Il,[e("h2",{class:"text-sm line-clamp-2",textContent:v(n.video.item.title)},null,8,Al),n.video.meta.createdBy?(l(),i("div",{key:0,class:"text-xs text-gray-900 dark:text-gray-200",textContent:v(n.video.meta.createdBy.username)},null,8,Rl)):H("",!0)])]),_:2},1032,["class","to"]))),128))],512),[[ve,!A.value]])])):H("",!0)],8,["to","disabled"])),e("div",Pl,[e("span",jl,v(a(x)("video.video.related-video")),1),e("div",Ll,[(l(!0),i(S,null,N(a(o).relatedVideos,n=>(l(),_(M,{key:n.id.toHexString(),to:`/video/${n.id.toHexString()}`,class:"grid grid-cols-5 space-x-1.5 py-0.5 rounded-md hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors duration-100"},{default:h(()=>{var J;return[e("div",Ml,[p(Re,{title:n.item.title,"cover-image":n.item.coverImage,class:"rounded-md"},null,8,["title","cover-image"])]),e("div",Ol,[e("a",{class:"line-clamp-2 overflow-ellipsis overflow-hidden w-full",textContent:v(n.item.title)},null,8,El),e("div",{class:"text-sm inline-block w-full mt-1 truncate font-light",textContent:v((J=n.meta.createdBy)==null?void 0:J.username)},null,8,ql)])]}),_:2},1032,["to"]))),128))])])],64))])])])):(l(),i("div",zl,[e("div",Ul,[Nl,e("div",Vl,[Dl,e("div",Gl,[(l(),i(S,null,N(20,n=>e("div",{key:n,class:"grid grid-cols-5 space-x-1 hover:bg-purple-50 dark:hover:bg-gray-800"},[e("div",Fl,[p(Pe,{class:"rounded-sm"})]),Kl])),64))])])])]))]}),_:1})}}});export{oa as default};
//# sourceMappingURL=Video.79980182.js.map
