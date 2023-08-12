import{an as A,W as E,F as P,m as b,a5 as $,B as k,d as N,U as y}from"./index.fa8a688c.js";/*! PatchyVideo/Platinum by VoileLabs */function v(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,v),o}var S=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(S||{}),T=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(T||{});function H({visible:e=!0,features:t=0,ourProps:n,theirProps:o,...r}){var a;let i=U(o,n),u=Object.assign(r,{props:i});if(e||t&2&&i.static)return h(u);if(t&1){let l=(a=i.unmount)==null||a?0:1;return v(l,{[0](){return null},[1](){return h({...r,props:{...i,hidden:!0,style:{display:"none"}}})}})}return h(u)}function h({props:e,attrs:t,slots:n,slot:o,name:r}){var a;let{as:i,...u}=D(e,["unmount","static"]),l=(a=n.default)==null?void 0:a.call(n,o),d={};if(o){let f=!1,p=[];for(let[s,c]of Object.entries(o))typeof c=="boolean"&&(f=!0),c===!0&&p.push(s);f&&(d["data-headlessui-state"]=p.join(" "))}if(i==="template"){if(l=w(l!=null?l:[]),Object.keys(u).length>0||Object.keys(t).length>0){let[f,...p]=l!=null?l:[];if(!R(f)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(u).concat(Object.keys(t)).sort((s,c)=>s.localeCompare(c)).map(s=>`  - ${s}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(s=>`  - ${s}`).join(`
`)].join(`
`));return A(f,Object.assign({},u,d))}return Array.isArray(l)&&l.length===1?l[0]:l}return E(i,Object.assign({},u,d),l)}function w(e){return e.flatMap(t=>t.type===P?w(t.children):[t])}function U(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let o of e)for(let r in o)r.startsWith("on")&&typeof o[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(o[r])):t[r]=o[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(o=>[o,void 0])));for(let o in n)Object.assign(t,{[o](r,...a){let i=n[o];for(let u of i){if(r instanceof Event&&r.defaultPrevented)return;u(r,...a)}}});return t}function M(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function D(e,t=[]){let n=Object.assign({},e);for(let o of t)o in n&&delete n[o];return n}function R(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let B=0;function F(){return++B}function W(){return F()}var L=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(L||{});function m(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}function g(e,t){if(e)return e;let n=t!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function V(e,t){let n=b(g(e.value.type,e.value.as));return $(()=>{n.value=g(e.value.type,e.value.as)}),k(()=>{var o;n.value||!m(t)||m(t)instanceof HTMLButtonElement&&!((o=m(t))!=null&&o.hasAttribute("type"))&&(n.value="button")}),n}var x=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(x||{});let Y=N({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:o,...r}=e,a={"aria-hidden":(o&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(o&4)===4&&(o&2)!==2&&{display:"none"}}};return H({ourProps:a,theirProps:r,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function C(e={},t=null,n=[]){for(let[o,r]of Object.entries(e))O(n,j(t,o),r);return n}function j(e,t){return e?e+"["+t+"]":t}function O(e,t,n){if(Array.isArray(n))for(let[o,r]of n.entries())O(e,j(t,o.toString()),r);else n instanceof Date?e.push([t,n.toISOString()]):typeof n=="boolean"?e.push([t,n?"1":"0"]):typeof n=="string"?e.push([t,n]):typeof n=="number"?e.push([t,`${n}`]):n==null?e.push([t,""]):C(n,t,e)}function q(e){var t;let n=(t=e==null?void 0:e.form)!=null?t:e.closest("form");if(n){for(let o of n.elements)if(o.tagName==="INPUT"&&o.type==="submit"||o.tagName==="BUTTON"&&o.type==="submit"||o.nodeName==="INPUT"&&o.type==="image"){o.click();return}}}function z(e,t,n){let o=b(n==null?void 0:n.value),r=y(()=>e.value!==void 0);return[y(()=>r.value?e.value:o.value),function(a){return r.value||(o.value=a),t==null?void 0:t(a)}]}export{H as P,S as R,M as V,x as a,V as b,L as c,z as d,C as e,Y as f,m as o,q as p,W as t,v as u,D as w};
//# sourceMappingURL=use-controllable.79e4214a.js.map
