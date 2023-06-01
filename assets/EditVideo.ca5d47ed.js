import{d as B,u as q,a6 as E,U as m,D as N,G as h,B as r,H as T,m as p,a7 as w,q as A,f as i,o as f,g as x,e as l,t as d,c as D,i as F,ap as H,aq as I,aE as M,ac as P}from"./index.833a7080.js";import{_ as R}from"./PvSelect.vue_vue_type_script_setup_true_lang.3186bd97.js";import{s as n}from"./setSiteTitle.db0fa839.js";import"./use-controllable.33fbeceb.js";/*! PatchyVideo/Platinum by VoileLabs */const U={key:0,class:"mx-2"},G={class:"pl-2 text-gray-700 dark:text-gray-200 border-b border-purple-200 dark:border-gray-700"},Q={class:"mx-2 mt-1"},j={class:"flex flex-col gap-2"},z={class:"flex"},J=["textContent"],K={class:"flex"},L=["textContent"],te=B({__name:"EditVideo",setup(O){const{t}=q(),y=P(),C=E(),_=m(()=>y.params.vid),{result:V,loading:S,refetch:$}=N(h`
    query ($vid: String!) {
      getVideo(para: { vid: $vid, lang: "CHS" }) {
        item {
          title
          desc
          uploadTime
          url
          repostType
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
        clearence
      }
    }
  `,{vid:_.value});r(()=>{S.value?H():I()});const e=T(V,null,a=>a==null?void 0:a.getVideo);r(()=>{e.value&&n(t("video.edit-video.title",{videoname:e.value.item.title}))});const o=p("3"),g=m(()=>[{name:t("video.edit-video.profile.ranks.0"),value:"0"},{name:t("video.edit-video.profile.ranks.1"),value:"1"},{name:t("video.edit-video.profile.ranks.2"),value:"2"},{name:t("video.edit-video.profile.ranks.3"),value:"3"}]);r(()=>{e.value&&(o.value=e.value.clearence.toString())});const v=p(!1),k=m(()=>v.value),u=p(!1);{const{mutate:a}=w(h`
      mutation ($clearence: Int!, $vid: String!) {
        setVideoClearence(para: { clearence: $clearence, vid: $vid })
      }
    `);A(o,(s,c)=>{var b;s!==c&&s!==((b=e.value)==null?void 0:b.clearence.toString())&&(v.value=!0,a({vid:_.value,clearence:Number(o.value)}).then(()=>{v.value=!1,$()}).catch(W=>{u.value=!0,v.value=!1}))})}return r(()=>{if(k.value&&e.value){n(t("video.edit-video.profile.edit.saving",{videoname:e.value.item.title}));const a=r(()=>{!k.value&&e.value&&(a(),u.value?n(t("video.edit-video.profile.edit.failed",{videoname:e.value.item.title})):(n(t("video.edit-video.profile.edit.saved",{videoname:e.value.item.title})),M(()=>{e.value&&n(t("video.edit-video.title",{videoname:e.value.item.title}))},3e3)),u.value=!1)})}}),(a,s)=>i(e)?(f(),x("div",U,[l("div",G,d(i(t)("video.edit-video.profile.profile")),1),l("div",Q,[l("div",j,[l("div",z,[l("span",null,d(i(t)("video.edit-video.profile.title")),1),l("span",{class:"ml-4 border-b border-purple-300 dark:border-gray-600",textContent:d(i(e).item.title)},null,8,J)]),l("div",K,[l("span",null,d(i(t)("video.edit-video.profile.ranks.rank")),1),i(C).isAdmin?(f(),D(R,{key:0,modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=c=>o.value=c),class:"ml-4 w-52","item-list":i(g)},null,8,["modelValue","item-list"])):(f(),x("span",{key:1,class:"ml-4 border-b border-purple-400 dark:border-purple-800",textContent:d(i(g)[Number(o.value)].name)},null,8,L))])])])])):F("",!0)}});export{te as default};
//# sourceMappingURL=EditVideo.ca5d47ed.js.map
