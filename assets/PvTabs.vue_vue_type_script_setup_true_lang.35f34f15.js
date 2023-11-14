import{d as P,m as y,W as E,U as x,V as G,B as H,F as D,a5 as M,ag as N,X as K,x as X,o as S,g as $,b as C,w as A,f as k,h as V,c as j,e as J,P as Q,t as Y,v as Z}from"./index.f71aa2ee.js";import{a as ee,f as q,o as h,P as F,w as te,t as R,b as ae,R as L,c as b,u as le}from"./use-controllable.c5592158.js";import{N as O,m as ne,P as w,M as m}from"./PvSelect.vue_vue_type_script_setup_true_lang.3cd70b4f.js";/*! PatchyVideo/Platinum by VoileLabs */function re(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(u=>setTimeout(()=>{throw u}))}let se=P({props:{onFocus:{type:Function,required:!0}},setup(t){let u=y(!0);return()=>u.value?E(q,{as:"button",type:"button",features:ee.Focusable,onFocus(o){o.preventDefault();let i,e=50;function n(){var a;if(e--<=0){i&&cancelAnimationFrame(i);return}if((a=t.onFocus)!=null&&a.call(t)){u.value=!1,cancelAnimationFrame(i);return}i=requestAnimationFrame(n)}i=requestAnimationFrame(n)}}):null}}),W=Symbol("TabsContext");function B(t){let u=K(W,null);if(u===null){let o=new Error(`<${t} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,B),o}return u}let ue=P({name:"TabGroup",emits:{change:t=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:u,attrs:o,emit:i}){let e=y(null),n=y([]),a=y([]),d=x(()=>t.selectedIndex!==null),p=x(()=>d.value?t.selectedIndex:e.value),v={selectedIndex:e,orientation:x(()=>t.vertical?"vertical":"horizontal"),activation:x(()=>t.manual?"manual":"auto"),tabs:n,panels:a,setSelectedIndex(r){p.value!==r&&i("change",r),d.value||(e.value=r)},registerTab(r){n.value.includes(r)||n.value.push(r)},unregisterTab(r){let s=n.value.indexOf(r);s!==-1&&n.value.splice(s,1)},registerPanel(r){a.value.includes(r)||a.value.push(r)},unregisterPanel(r){let s=a.value.indexOf(r);s!==-1&&a.value.splice(s,1)}};return G(W,v),H(()=>{var r;if(v.tabs.value.length<=0||t.selectedIndex===null&&e.value!==null)return;let s=v.tabs.value.map(g=>h(g)).filter(Boolean),f=s.filter(g=>!g.hasAttribute("disabled")),I=(r=t.selectedIndex)!=null?r:t.defaultIndex;if(I<0)e.value=s.indexOf(f[0]);else if(I>v.tabs.value.length)e.value=s.indexOf(f[f.length-1]);else{let g=s.slice(0,I),l=[...s.slice(I),...g].find(c=>f.includes(c));if(!l)return;e.value=s.indexOf(l)}}),()=>{let r={selectedIndex:e.value};return E(D,[n.value.length<=0&&E(se,{onFocus:()=>{for(let s of n.value){let f=h(s);if((f==null?void 0:f.tabIndex)===0)return f.focus(),!0}return!1}}),F({theirProps:{...o,...te(t,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:r,slots:u,attrs:o,name:"TabGroup"})])}}}),oe=P({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:u,slots:o}){let i=B("TabList");return()=>{let e={selectedIndex:i.selectedIndex.value},n={role:"tablist","aria-orientation":i.orientation.value};return F({ourProps:n,theirProps:t,slot:e,attrs:u,slots:o,name:"TabList"})}}}),ie=P({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(t,{attrs:u,slots:o,expose:i}){let e=B("Tab"),n=`headlessui-tabs-tab-${R()}`,a=y(null);i({el:a,$el:a}),M(()=>e.registerTab(a)),N(()=>e.unregisterTab(a));let d=x(()=>e.tabs.value.indexOf(a)),p=x(()=>d.value===e.selectedIndex.value);function v(l){var c;let T=l();if(T===O.Success&&e.activation.value==="auto"){let U=(c=ne(a))==null?void 0:c.activeElement,_=e.tabs.value.findIndex(z=>h(z)===U);_!==-1&&e.setSelectedIndex(_)}return T}function r(l){let c=e.tabs.value.map(T=>h(T)).filter(Boolean);if(l.key===b.Space||l.key===b.Enter){l.preventDefault(),l.stopPropagation(),e.setSelectedIndex(d.value);return}switch(l.key){case b.Home:case b.PageUp:return l.preventDefault(),l.stopPropagation(),v(()=>w(c,m.First));case b.End:case b.PageDown:return l.preventDefault(),l.stopPropagation(),v(()=>w(c,m.Last))}if(v(()=>le(e.orientation.value,{vertical(){return l.key===b.ArrowUp?w(c,m.Previous|m.WrapAround):l.key===b.ArrowDown?w(c,m.Next|m.WrapAround):O.Error},horizontal(){return l.key===b.ArrowLeft?w(c,m.Previous|m.WrapAround):l.key===b.ArrowRight?w(c,m.Next|m.WrapAround):O.Error}}))===O.Success)return l.preventDefault()}let s=y(!1);function f(){var l;s.value||(s.value=!0,!t.disabled&&((l=h(a))==null||l.focus(),e.setSelectedIndex(d.value),re(()=>{s.value=!1})))}function I(l){l.preventDefault()}let g=ae(x(()=>({as:t.as,type:u.type})),a);return()=>{var l;let c={selected:p.value},T={ref:a,onKeydown:r,onMousedown:I,onClick:f,id:n,role:"tab",type:g.value,"aria-controls":(l=h(e.panels.value[d.value]))==null?void 0:l.id,"aria-selected":p.value,tabIndex:p.value?0:-1,disabled:t.disabled?!0:void 0};return F({ourProps:T,theirProps:t,slot:c,attrs:u,slots:o,name:"Tab"})}}}),de=P({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:u,attrs:o}){let i=B("TabPanels");return()=>{let e={selectedIndex:i.selectedIndex.value};return F({theirProps:t,ourProps:{},slot:e,attrs:o,slots:u,name:"TabPanels"})}}}),ce=P({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:u,slots:o,expose:i}){let e=B("TabPanel"),n=`headlessui-tabs-panel-${R()}`,a=y(null);i({el:a,$el:a}),M(()=>e.registerPanel(a)),N(()=>e.unregisterPanel(a));let d=x(()=>e.panels.value.indexOf(a)),p=x(()=>d.value===e.selectedIndex.value);return()=>{var v;let r={selected:p.value},s={ref:a,id:n,role:"tabpanel","aria-labelledby":(v=h(e.tabs.value[d.value]))==null?void 0:v.id,tabIndex:p.value?0:-1};return!p.value&&t.unmount&&!t.static?E(q,{as:"span",...s}):F({ourProps:s,theirProps:t,slot:r,attrs:u,slots:o,features:L.Static|L.RenderStrategy,visible:p.value,name:"TabPanel"})}}});const pe={class:"w-full"},ve=["textContent"],xe=P({__name:"PvTabs",props:{modelValue:null,tabs:null},emits:["tab-click","update:modelValue"],setup(t,{emit:u}){const o=t,i=X(o,"modelValue",u,{passive:!0}),e=x({get(){const n=o.tabs.findIndex(a=>a.name===i.value);return n===-1?0:n},set(n){i.value=o.tabs[n].name}});return(n,a)=>(S(),$("div",pe,[C(k(ue),{"selected-index":k(e),onChange:a[0]||(a[0]=d=>e.value=d)},{default:A(()=>[C(k(oe),{class:"flex p-1 gap-x-1 rounded-xl bg-purple-100 dark:bg-gray-800"},{default:A(()=>[(S(!0),$(D,null,V(t.tabs,d=>(S(),j(k(ie),{key:d.name,as:"template"},{default:A(({selected:p})=>[J("button",{class:Q(["focus:outline-none py-2 px-4 rounded-lg leading-5 transition-colors focus:ring-1 focus:ring-white focus:ring-opacity-60 focus:ring-offset-1 focus:ring-offset-purple-300 dark:focus:ring-offset-indigo-800",p?"text-purple-800 bg-white shadow dark:text-white dark:bg-gray-600":"text-purple-600 hover:text-purple-700 hover:bg-white/70 dark:text-gray-200 dark:hover:text-white dark:hover:bg-white/15"]),textContent:Y(d.label)},null,10,ve)]),_:2},1024))),128))]),_:1}),C(k(de),{class:"mt-2"},{default:A(()=>[(S(!0),$(D,null,V(t.tabs,d=>(S(),j(k(ce),{key:d.name,name:d.name},{default:A(()=>[Z(n.$slots,d.name)]),_:2},1032,["name"]))),128))]),_:3})]),_:3},8,["selected-index"])]))}});export{xe as _};
//# sourceMappingURL=PvTabs.vue_vue_type_script_setup_true_lang.35f34f15.js.map
