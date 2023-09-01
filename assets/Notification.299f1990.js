import{m as L,b as me,c as ue,_ as ve}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.219e522e.js";import{d as Y,u as Z,m as p,ao as de,D as ee,G as z,B as M,ap as te,aq as le,H as K,q as ie,a7 as ce,o as s,g as n,e as i,t as r,f as l,P as h,F as W,h as pe,j as fe,b as C,w as X,N as ye,i as $,U as I,$ as ge,c as se,s as _e,L as R,Q as G,R as xe,ac as ke,ad as be}from"./index.53375790.js";import{_ as ne}from"./PvPagination.vue_vue_type_script_setup_true_lang.c449d26e.js";import{s as $e}from"./setSiteTitle.db0fa839.js";import"./Logo.vue_vue_type_script_setup_true_lang.8bcedbd5.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.b9cae3d1.js";import"./use-controllable.7f28a887.js";/*! PatchyVideo/Platinum by VoileLabs */function he(E){window.open(E,"_blank")}const Ce={class:"border-b flex justify-between p-1"},Ne={key:0},we={key:1},Ae={key:2},Te={key:3},Se=["onClick","onMouseup"],qe={class:"text-xs bg-gray-100 text-gray-400 p-1 truncate dark:bg-gray-500 dark:text-gray-200"},Ue={class:"text-xs text-gray-600 dark:text-white"},ae=Y({__name:"NoteBoxReplyComment",props:{limit:null,offset:null,pageCount:null},emits:["update:limit","update:offset","update:pageCount"],setup(E,{emit:_}){const a=E,{t:f}=Z(),g=p("comment_reply"),T=p(!0),{limit:k,offset:N,pageCount:S}=de(a,_),u=p(),c=p([]),d=p(0),x=p(0),{result:y,loading:q,onError:H,fetchMore:Q}=ee(z`
    query ($offset: Int, $limit: Int, $listAll: Boolean, $noteType: String) {
      listNotifications(para: { offset: $offset, limit: $limit, listAll: $listAll, noteType: $noteType }) {
        notes {
          id
          read
          ... on ReplyNotificationObject {
            cid
            repliedBy {
              id
              username
              image
              gravatar
            }
            time
            repliedObj
            repliedType
            content
          }
        }
        countAll
        countUnread
        pageCount
      }
    }
  `,{offset:N.value*k.value,limit:k.value,listAll:T.value,noteType:g.value},{notifyOnNetworkStatusChange:!0});M(()=>{q.value?(u.value="loading",te()):(u.value="result",le())});const A=K(y,null,o=>o==null?void 0:o.listNotifications);M(()=>{A.value?(c.value=A.value.notes,d.value=A.value.countAll,x.value=A.value.countUnread,S.value=A.value.pageCount):u.value="error"});const U=p("");H(o=>{U.value=o.message,u.value="error"}),ie(a,()=>{Q({variables:{offset:N.value*k.value,limit:k.value,listAll:T.value,noteType:g.value},updateQuery(o,{fetchMoreResult:t}){return t||o}})},{deep:!0});const{mutate:b,loading:V,onDone:P,onError:J}=ce(z`
    mutation ($markAll: Boolean, $noteType: String, $noteIds: [String!]) {
      markAsRead(para: { markAll: $markAll, noteType: $noteType, noteIds: $noteIds }) {
        empty
      }
    }
  `);M(()=>{V.value&&L.value++});let j=!1;P(()=>{L.value--,j&&location.reload()}),J(()=>{L.value--});function w(o=!1,t="comment_reply",m,e=!1){!x.value||e||(j=o,b({markAll:o,noteType:t,noteIds:m}))}return(o,t)=>{const m=fe("router-link");return s(),n(W,null,[i("div",Ce,[i("div",null,r(l(f)("user-notification.notification-reply.title")),1),i("div",{class:h(["text-sm cursor-pointer transition transition-colors hover:text-purple-300",{"text-gray-500":!x.value}]),onClick:t[0]||(t[0]=e=>w(!0,g.value="comment_reply",[]))},r(l(f)("user-notification.notification-reply.mark-all-as-read")),3)]),u.value==="loading"?(s(),n("div",Ne,r(l(f)("user-notification.notification-reply.loading")),1)):u.value==="error"?(s(),n("div",we)):d.value===0?(s(),n("div",Ae,r(l(f)("user-notification.notification-reply.no-message")),1)):(s(),n("div",Te,[(s(!0),n(W,null,pe(c.value,e=>(s(),n("div",{key:e.id.toHexString()},[e.__typename==="ReplyNotificationObject"?(s(),n("div",{key:0,class:h(["flex items-center m-1 p-2 shadow rounded-md",{"bg-gray-100 dark:bg-gray-500":!e.read}])},[C(m,{class:"w-1/6 md:w-1/15 mr-2 cursor-pointer",to:`/user/${e.repliedBy.id.toHexString()}`},{default:X(()=>[C(me,{title:e.repliedBy.username,image:e.repliedBy.image,gravatar:e.repliedBy.gravatar,class:"rounded-full ring-2 ring-white"},null,8,["title","image","gravatar"])]),_:2},1032,["to"]),C(m,{to:`${(e.repliedType==="forum"?"":e.repliedType==="video"?"/video/":"/playlist/")+e.repliedObj}#${e.cid}`,custom:""},{default:X(({href:v,navigate:D})=>[i("div",{class:"w-5/6 md:w-14/15",onClick:()=>{w(!1,e.__typename,[e.id.toHexString()],e.read),D()},onMouseup:ye(()=>{w(!1,e.__typename,[e.id.toHexString()],e.read),l(he)(v)},["middle"])},[i("div",null,r(l(f)("user-notification.notification-reply.reply",{username:e.repliedBy.username})),1),i("div",qe,r(e.content),1),i("div",Ue,[C(ue,{date:e.time},null,8,["date"])])],40,Se)]),_:2},1032,["to"])],2)):$("",!0)]))),128))]))],64)}}}),F=p({commentReply:0,systemMessage:0}),O=I(()=>F.value.systemMessage),B=I(()=>F.value.commentReply),Re={class:"border-b flex justify-between p-1"},Oe={key:0},Be={key:1},Me={key:2},je={key:3,class:"space-y-2"},Ie={class:"relative overflow-hidden"},Ee={class:"flex justify-between text-xs text-gray-600 dark:text-white"},He=["onClick"],re=Y({__name:"NoteBoxSystemMessage",props:{limit:null,offset:null,pageCount:null},emits:["update:limit","update:offset","update:pageCount"],setup(E,{emit:_}){const a=E,{t:f}=Z(),g=p("system_message"),T=p(!0),{limit:k,offset:N,pageCount:S}=de(a,_),u=p(),c=p([]),d=p([]),x=p(),y=p(0),q=p(0),{result:H,loading:Q,onError:A,fetchMore:U}=ee(z`
    query ($offset: Int, $limit: Int, $listAll: Boolean, $noteType: String) {
      listNotifications(para: { offset: $offset, limit: $limit, listAll: $listAll, noteType: $noteType }) {
        notes {
          id
          read
          type
          ... on SystemNotificationObject {
            time
            title
            content
          }
        }
        countAll
        countUnread
        pageCount
      }
    }
  `,{offset:N.value*k.value,limit:k.value,listAll:T.value,noteType:g.value},{notifyOnNetworkStatusChange:!0});M(()=>{Q.value?(u.value="loading",te()):(u.value="result",le())});const b=K(H,null,m=>m==null?void 0:m.listNotifications);M(()=>{b.value?(d.value=b.value.notes.map(m=>m.read),c.value=b.value.notes,y.value=b.value.countAll,q.value=b.value.countUnread,S.value=b.value.pageCount):u.value="error"});const V=p("");A(m=>{V.value=m.message,u.value="error"}),ie(a,()=>{U({variables:{offset:N.value*k.value,limit:k.value,listAll:T.value,noteType:g.value},updateQuery(m,{fetchMoreResult:e}){return e||m}})},{deep:!0});const{mutate:P,loading:J,onDone:j,onError:w}=ce(z`
    mutation ($markAll: Boolean, $noteType: String, $noteIds: [String!]) {
      markAsRead(para: { markAll: $markAll, noteType: $noteType, noteIds: $noteIds }) {
        empty
      }
    }
  `);M(()=>{J.value&&L.value++});let o=!1;j(()=>{L.value--,o&&location.reload(),F.value.systemMessage--}),w(()=>{L.value--});function t(m=!1,e=g.value,v,D=!1){x.value===v[0]?x.value=void 0:x.value=v[0],!(!q.value||D)&&(v[0]&&(d.value[c.value.findIndex(oe=>oe.id.toHexString()===v[0])]=!0),o=m,P({markAll:m,noteType:e,noteIds:v}))}return(m,e)=>(s(),n(W,null,[i("div",Re,[i("div",null,r(l(f)("user-notification.notification-system.title")),1),i("div",{class:h(["text-sm cursor-pointer transition transition-colors hover:text-purple-300",{"text-gray-500":!q.value}]),onClick:e[0]||(e[0]=v=>t(!0,g.value="system_message",[]))},r(l(f)("user-notification.notification-system.mark-all-as-read")),3)]),u.value==="loading"?(s(),n("div",Oe,r(l(f)("user-notification.notification-system.loading")),1)):u.value==="error"?(s(),n("div",Be)):y.value===0?(s(),n("div",Me,r(l(f)("user-notification.notification-system.no-message")),1)):(s(),n("div",je,[(s(!0),n(W,null,pe(c.value,(v,D)=>(s(),n("div",{key:v.id.toHexString()},[v.__typename==="SystemNotificationObject"?(s(),n("div",{key:0,class:h(["m-1 p-2 shadow rounded-md space-y-2",{"bg-gray-100 dark:bg-gray-500":!d.value[D]}])},[i("div",null,r(v.title),1),i("div",Ie,[i("div",{class:"transform transition-all duration-200 text-sm",style:ge({marginTop:v.id.toHexString()===x.value?"0":"-100%"})},r(v.content),5)]),i("div",Ee,[C(ue,{date:v.time},null,8,["date"]),i("div",{class:"cursor-pointer text-purple-300",onClick:oe=>t(!1,v.type,[v.id.toHexString()],d.value[D])},r(v.id.toHexString()===x.value?l(f)("user-notification.notification-system.fold"):l(f)("user-notification.notification-system.unfold")),9,He)])],2)):$("",!0)]))),128))]))],64))}}),Pe={key:0,class:"w-full p-2 dark:bg-gray-900 dark:border-black"},Je={key:0},De={key:1},Le=["title"],Qe=i("div",{class:"i-uil:chat text-2xl"},null,-1),Ve={key:0,class:"absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1"},ze={class:"w-full border-b p-1 pb-1.5 flex justify-between"},Fe={class:"flex items-center flex-nowrap"},Ge=i("div",{class:"i-uil:telegram-alt text-2xl transition-colors"},null,-1),Ke={class:"text-lg ml-2"},We={class:"mt-4 space-y-2"},Xe=i("div",{class:"i-uil:comment-alt-dots inline align-middle text-xl text-center"},null,-1),Ye={key:0,class:"bg-red-500 text-white text-sm rounded-full px-2"},Ze=i("div",{class:"i-uil:at inline align-middle text-xl text-center"},null,-1),et=i("div",{class:"i-uil:volume inline align-middle text-xl text-center"},null,-1),tt={key:0,class:"bg-red-500 text-white text-sm rounded-full px-2"},lt={key:1,class:"p-5 flex space-x-3 min-h-screen w-9/10 m-auto xl:w-4/5"},it={class:"p-1 overflow-auto rounded-md shadow bg-white w-1/4 xl:w-1/5 dark:bg-gray-900"},ot={class:"w-full border-b p-1 pb-1.5 flex items-center flex-nowrap"},st=i("div",{class:"i-uil:telegram-alt text-2xl transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"},null,-1),nt={class:"text-lg ml-2"},at={class:"mt-4 space-y-2"},rt=i("div",{class:"i-uil:comment-alt-dots inline align-middle text-xl text-center"},null,-1),ut={key:0,class:"bg-red-500 text-white text-sm rounded-full px-2"},dt=i("div",{class:"i-uil:at inline align-middle text-xl text-center"},null,-1),ct=i("div",{class:"i-uil:volume inline align-middle text-xl text-center"},null,-1),pt={key:0,class:"bg-red-500 text-white text-sm rounded-full px-2"},mt={class:"w-3/4 p-2 bg-white rounded-md shadow xl:4/5 dark:bg-gray-600"},vt={key:0},ft={key:1},ht=Y({__name:"Notification",setup(E){const{t:_}=Z(),a=ke(),f=be();$e("消息中心 - PatchyVideo");const g=p(),T=p(!0),k=p(0),N=p(0),S=p(),u=p(0),c=I(()=>Number(a.query.limit?Array.isArray(a.query.limit)?a.query.limit[0]:a.query.limit:10)),d=I(()=>Number(a.query.page?Array.isArray(a.query.page)?a.query.page[0]:a.query.page:0)),x=I(()=>d.value+1),y=I(()=>String(a.query.type?Array.isArray(a.query.type)?a.query.type[0]:a.query.type:"comment_reply")),{result:q,loading:H,onError:Q,fetchMore:A}=ee(z`
    query ($offset: Int, $limit: Int, $listAll: Boolean, $noteType: String) {
      listNotifications(para: { offset: $offset, limit: $limit, listAll: $listAll, noteType: $noteType }) {
        notes {
          id
        }
        countAll
        countUnread
        pageCount
      }
      listUnreadNotificationsCount {
        list {
          msgtype
          count
        }
      }
    }
  `,{offset:d.value*c.value,limit:c.value,listAll:T.value,noteType:y.value},{notifyOnNetworkStatusChange:!0});M(()=>{H.value?(S.value="loading",te()):(S.value="result",le())});const U=K(q,null,o=>o==null?void 0:o.listNotifications),b=K(q,null,o=>o==null?void 0:o.listUnreadNotificationsCount);M(()=>{U.value?(k.value=U.value.countAll,N.value=U.value.countUnread,b.value&&b.value.list.forEach(o=>{o.msgtype==="system_message"?F.value.systemMessage=o.count:o.msgtype==="comment_reply"&&(F.value.commentReply=o.count)}),u.value=U.value.pageCount):S.value="error"}),Q(()=>{S.value="error"});const V=I(()=>a.query);ie(V,()=>{A({variables:{offset:d.value*c.value,limit:c.value,listAll:T.value,noteType:y.value},updateQuery(o,{fetchMoreResult:t}){return t||o}})});function P(){const o=JSON.parse(JSON.stringify(a.query));o.page=d.value-1,f.push({path:a.path,query:o})}function J(){const o=JSON.parse(JSON.stringify(a.query));o.page=d.value+1,f.push({path:a.path,query:o})}function j(o){const t=JSON.parse(JSON.stringify(a.query));t.page=o-1,f.push({path:a.path,query:t})}function w(o){const t=JSON.parse(JSON.stringify(a.query));t.type!==o&&(g.value=!1,t.page=0,t.type=o,f.push({path:a.path,query:t}))}return(o,t)=>{const m=ve;return s(),se(m,{"fetch-note":!1},{default:X(()=>[l(_e)["<md"]?(s(),n("div",Pe,[l(y)==="comment_reply"?(s(),n("div",Je,[C(ae,{limit:l(c),"onUpdate:limit":t[0]||(t[0]=e=>R(c)?c.value=e:null),offset:l(d),"onUpdate:offset":t[1]||(t[1]=e=>R(d)?d.value=e:null),pageCount:u.value,"onUpdate:pageCount":t[2]||(t[2]=e=>u.value=e)},null,8,["limit","offset","pageCount"])])):l(y)==="system_message"?(s(),n("div",De,[C(re,{limit:l(c),"onUpdate:limit":t[3]||(t[3]=e=>R(c)?c.value=e:null),offset:l(d),"onUpdate:offset":t[4]||(t[4]=e=>R(d)?d.value=e:null),pageCount:u.value,"onUpdate:pageCount":t[5]||(t[5]=e=>u.value=e)},null,8,["limit","offset","pageCount"])])):$("",!0),C(ne,{"page-count":Number(u.value),page:l(x),onPrevious:P,onNext:J,onChange:j},null,8,["page-count","page"]),i("div",{class:"shadow fixed bottom-20 right-5 bg-gray-50 select-none p-2 rounded-full dark:bg-gray-800",title:l(_)("user-notification.notification.slide-open"),onClick:t[6]||(t[6]=e=>g.value=!0)},[Qe,N.value?(s(),n("label",Ve,r(N.value>99?"99+":N.value),1)):$("",!0)],8,Le),i("div",{class:h(["fixed inset-x-0 border-t rounded-t border-purple-400 p-1 z-50 bottom-0 overflow-auto bg-white transform transition-transform duration-300 dark:bg-gray-900",{"translate-y-full":!g.value}])},[i("div",ze,[i("div",Fe,[Ge,i("div",Ke,r(l(_)("user-notification.notification.title")),1)]),i("div",{class:"i-uil:times text-2xl transition-colors",onClick:t[7]||(t[7]=e=>g.value=!1)})]),i("div",We,[i("div",{class:h(["flex align-middle p-2 rounded-md cursor-pointer",{"bg-gray-50 shadow-inner dark:bg-gray-500":l(y)==="comment_reply"}]),onClick:t[8]||(t[8]=e=>w("comment_reply"))},[Xe,i("div",null,[G(r(l(_)("user-notification.notification.reply"))+" ",1),l(B)?(s(),n("label",Ye,r((l(B)?l(B):0)>99?"99+":l(B)),1)):$("",!0)])],2),i("div",{class:h(["flex align-middle p-2 rounded-md text-gray-500 cursor-pointer",{"bg-gray-50 shadow-inner dark:bg-gray-500":l(y)==="at"}])},[Ze,i("div",null,r(l(_)("user-notification.notification.at")),1)],2),i("div",{class:h(["flex align-middle p-2 rounded-md cursor-pointer",{"bg-gray-50 shadow-inner dark:bg-gray-500":l(y)==="system_message"}]),onClick:t[9]||(t[9]=e=>w("system_message"))},[et,i("div",null,[G(r(l(_)("user-notification.notification.system"))+" ",1),l(O)?(s(),n("label",tt,r((l(O)?l(O):0)>99?"99+":l(O)),1)):$("",!0)])],2)])],2),C(xe,{"enter-active-class":"transition-all duration-200","enter-from-class":"bg-opacity-0","leave-active-class":"transition-all duration-200","leave-to-class":"bg-opacity-0"},{default:X(()=>[g.value?(s(),n("div",{key:0,class:"fixed inset-0 z-49",onClick:t[10]||(t[10]=e=>g.value=!1)})):$("",!0)]),_:1})])):(s(),n("div",lt,[i("div",it,[i("div",ot,[st,i("div",nt,r(l(_)("user-notification.notification.title")),1)]),i("div",at,[i("div",{class:h(["flex align-middle p-2 rounded-md cursor-pointer",{"bg-gray-50 shadow-inner dark:bg-gray-500":l(y)==="comment_reply"}]),onClick:t[11]||(t[11]=e=>w("comment_reply"))},[rt,i("div",null,[G(r(l(_)("user-notification.notification.reply"))+" ",1),l(B)?(s(),n("label",ut,r((l(B)?l(B):0)>99?"99+":l(B)),1)):$("",!0)])],2),i("div",{class:h(["flex align-middle p-2 rounded-md text-gray-500 cursor-pointer",{"bg-gray-50 shadow-inner dark:bg-gray-500":l(y)==="at"}])},[dt,i("div",null,r(l(_)("user-notification.notification.at")),1)],2),i("div",{class:h(["flex align-middle p-2 rounded-md cursor-pointer",{"bg-gray-50 shadow-inner dark:bg-gray-500":l(y)==="system_message"}]),onClick:t[12]||(t[12]=e=>w("system_message"))},[ct,i("div",null,[G(r(l(_)("user-notification.notification.system"))+" ",1),l(O)?(s(),n("label",pt,r((l(O)?l(O):0)>99?"99+":l(O)),1)):$("",!0)])],2)])]),i("div",mt,[l(y)==="comment_reply"?(s(),n("div",vt,[C(ae,{limit:l(c),"onUpdate:limit":t[13]||(t[13]=e=>R(c)?c.value=e:null),offset:l(d),"onUpdate:offset":t[14]||(t[14]=e=>R(d)?d.value=e:null),pageCount:u.value,"onUpdate:pageCount":t[15]||(t[15]=e=>u.value=e)},null,8,["limit","offset","pageCount"])])):l(y)==="system_message"?(s(),n("div",ft,[C(re,{limit:l(c),"onUpdate:limit":t[16]||(t[16]=e=>R(c)?c.value=e:null),offset:l(d),"onUpdate:offset":t[17]||(t[17]=e=>R(d)?d.value=e:null),pageCount:u.value,"onUpdate:pageCount":t[18]||(t[18]=e=>u.value=e)},null,8,["limit","offset","pageCount"])])):$("",!0),l(H)?$("",!0):(s(),se(ne,{key:2,"page-count":Number(u.value),page:l(x),onPrevious:P,onNext:J,onChange:j},null,8,["page-count","page"]))])]))]),_:1})}}});export{ht as default};
//# sourceMappingURL=Notification.299f1990.js.map
