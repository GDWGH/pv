import{d as g,u as k,r as x,aG as $,G as b,y as C,C as I,U as P,m as S,aw as A,B,H as E,o as n,g as u,f as o,b as v}from"./index.8a1193b7.js";import{V as N,_ as O}from"./VideoRowPlaceholder.vue_vue_type_script_setup_true_lang.6753310a.js";import"./Cover.vue_vue_type_script_setup_true_lang.3ecdd7f0.js";import"./index.53332c17.js";import"./LayoutDefault.vue_vue_type_script_setup_true_lang.488ba244.js";import"./Logo.vue_vue_type_script_setup_true_lang.1cb4fd3b.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.0424ca2c.js";import"./use-controllable.0872efef.js";import"./CoverPlaceholder.3e30278c.js";/*! PatchyVideo/Platinum by VoileLabs */const V={key:0},q={key:1},U=g({__name:"CompPlaylist",props:{data:{default:"{}"}},setup(m){const _=m;k();const e=x({playlist_id:"5e057a1b31929c83a76d18a4",title_pos:"tl",video_show_title:!0,video_show_date:!0,video_rows:1,...JSON.parse(_.data)}),{result:s,load:f,fetchMore:w,forceDisabled:y}=$(b`
    query ($pid: String!, $limit: Int!) {
      getPlaylist(para: { pid: $pid }) {
        item {
          title
          count
        }
        videos(offset: 0, limit: $limit) {
          id
          item {
            title
            coverImage
          }
          meta {
            createdAt
          }
        }
        meta {
          createdAt
          modifiedAt
        }
      }
    }
  `,{},{notifyOnNetworkStatusChange:!0}),a=C(null),{width:h}=I(a),t=P(()=>Math.floor(h.value/(240+16))*e.video_rows),c=S(!1);let l=0;A(a,([{isIntersecting:i}])=>{c.value=i},{rootMargin:"200px 200px 200px 200px"}),B(()=>{l===t.value||!c.value||(l=t.value,!(s.value&&l<=s.value.getPlaylist.videos.length)&&(y.value?f(void 0,{pid:e.playlist_id,limit:t.value}):w({variables:{pid:e.playlist_id,limit:t.value},updateQuery(i,{fetchMoreResult:d}){return d||i}})))});const r=E(s,null,i=>i.getPlaylist);return(i,d)=>{var p;return n(),u("div",{ref_key:"el",ref:a,class:"w-full"},[o(r)?(n(),u("div",V,[v(N,{name:(p=e.title)!=null?p:o(r).item.title,"title-links-to":`/playlist/${e.playlist_id}`,videos:o(r).videos,count:o(t),rows:e.video_rows,"video-show-title":e.video_show_title,"video-show-date":e.video_show_date},null,8,["name","title-links-to","videos","count","rows","video-show-title","video-show-date"])])):(n(),u("div",q,[v(O,{count:o(t),rows:e.video_rows},null,8,["count","rows"])]))],512)}}});export{U as default};
//# sourceMappingURL=CompPlaylist.0b1c79fa.js.map
