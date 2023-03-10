import{d as C,u as q,r as g,aG as $,G as k,y as V,C as b,U as x,m as S,aw as I,B,H as E,o as d,g as l,f as i,b as v}from"./index.2d7e3ae4.js";import{V as N,_ as O}from"./VideoRowPlaceholder.vue_vue_type_script_setup_true_lang.706e70e8.js";import"./Cover.vue_vue_type_script_setup_true_lang.0ca40896.js";import"./index.6f103584.js";import"./LayoutDefault.vue_vue_type_script_setup_true_lang.8b17b1c1.js";import"./Logo.vue_vue_type_script_setup_true_lang.0d4482b0.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.c556a41d.js";import"./use-controllable.76fb3edf.js";import"./CoverPlaceholder.0012dbac.js";/*! PatchyVideo/Platinum by VoileLabs */const Q={key:0},R={key:1},U=C({__name:"CompQueryVideo",props:{data:{default:"{}"}},setup(m){const p=m,{t:f}=q(),e=g({query:"",order:"latest",additionalConstraint:"",title:f("home.home.components.query-video.default-title"),title_pos:"tl",video_show_title:!0,video_show_date:!0,video_rows:1,...JSON.parse(p.data)}),{result:r,load:_,fetchMore:w,forceDisabled:h}=$(k`
    query ($limit: Int!, $query: String!, $order: String!, $additionalConstraint: String) {
      listVideo(
        para: {
          offset: 0
          limit: $limit
          humanReadableTag: true
          query: $query
          order: $order
          additionalConstraint: $additionalConstraint
        }
      ) {
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
  `,{},{notifyOnNetworkStatusChange:!0}),a=V(null),{width:y}=b(a),t=x(()=>Math.floor(y.value/(240+16))*e.video_rows),u=S(!1);let s=0;I(a,([{isIntersecting:o}])=>{u.value=o},{rootMargin:"200px 200px 200px 200px"}),B(()=>{s===t.value||!u.value||(s=t.value,!(r.value&&s<=r.value.listVideo.videos.length)&&(h.value?_(void 0,{query:e.query,order:e.order,additionalConstraint:e.additionalConstraint,limit:t.value}):w({variables:{query:e.query,order:e.order,additionalConstraint:e.additionalConstraint,limit:t.value},updateQuery(o,{fetchMoreResult:n}){return n||o}})))});const c=E(r,null,o=>o.listVideo);return(o,n)=>(d(),l("div",{ref_key:"el",ref:a,class:"w-full"},[i(c)?(d(),l("div",Q,[v(N,{name:e.title,"title-links-to":{path:"/search-result",query:{i:e.query,order:e.order,visible_site:e.additionalConstraint}},videos:i(c).videos,count:i(t),rows:e.video_rows,"video-show-title":e.video_show_title,"video-show-date":e.video_show_date},null,8,["name","title-links-to","videos","count","rows","video-show-title","video-show-date"])])):(d(),l("div",R,[v(O,{count:i(t),rows:e.video_rows},null,8,["count","rows"])]))],512))}});export{U as default};
//# sourceMappingURL=CompQueryVideo.76d026dd.js.map
