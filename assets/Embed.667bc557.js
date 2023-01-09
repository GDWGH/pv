import{d as l,U as u,D as c,G as n,H as m,B as d,f as s,o,g as p,c as f,w as v,ax as _,i as g,b as h,ac as b}from"./index.b63bf4b0.js";import{P as k}from"./Player.4cd43e2d.js";import{s as x}from"./setSiteTitle.db0fa839.js";import"./PvSwitch.vue_vue_type_script_setup_true_lang.2a4e7d73.js";import"./use-controllable.e469c405.js";/*! PatchyVideo/Platinum by VoileLabs */const y={key:0,class:"absolute top-0 bottom-0 left-0 right-0"},H=l({__name:"Embed",setup(B){const i=b(),a=u(()=>i.params.vid),{result:r}=c(n`
    query ($vid: String!) {
      getVideo(para: { vid: $vid, lang: "CHS" }) {
        item {
          title
          url
          site
        }
      }
    }
  `,{vid:a.value}),e=m(r,null,t=>t==null?void 0:t.getVideo);return d(()=>{e.value&&x(e.value.item.title)}),(t,C)=>s(e)?(o(),p("div",y,[(o(),f(_,null,{default:v(()=>[h(k,{item:s(e).item,"full-height":!0,"disable-fullscreen":!0},null,8,["item"])]),_:1}))])):g("",!0)}});export{H as default};
//# sourceMappingURL=Embed.667bc557.js.map
