import{X as J,V as Y,B as ee,m as k,U as S,d as V,W as K,F as te,a5 as U,ag as de,q as le,S as N,am as R,u as ce,x as ve,y as G,Z as pe,o as _,c as z,w as F,f as I,L as fe,e as E,b as H,t as Q,P as B,T as be,$ as me,g as X,h as xe,R as he,i as ge}from"./index.cb117665.js";import{o as y,u as D,d as ye,e as Oe,f as Se,V as we,a as Le,P as A,w as ae,t as j,b as Pe,R as Z,c as O}from"./use-controllable.1ed1f64a.js";/*! PatchyVideo/Platinum by VoileLabs */function ke(e){throw new Error("Unexpected object: "+e)}var L=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(L||{});function Re(e,a){let n=a.resolveItems();if(n.length<=0)return null;let s=a.resolveActiveIndex(),t=s!=null?s:-1,r=(()=>{switch(e.focus){case 0:return n.findIndex(o=>!a.resolveDisabled(o));case 1:{let o=n.slice().reverse().findIndex((u,v,f)=>t!==-1&&f.length-v-1>=t?!1:!a.resolveDisabled(u));return o===-1?o:n.length-1-o}case 2:return n.findIndex((o,u)=>u<=t?!1:!a.resolveDisabled(o));case 3:{let o=n.slice().reverse().findIndex(u=>!a.resolveDisabled(u));return o===-1?o:n.length-1-o}case 4:return n.findIndex(o=>a.resolveId(o)===e.id);case 5:return null;default:ke(e)}})();return r===-1?s:r}let oe=Symbol("Context");var M=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(M||{});function Ie(){return J(oe,null)}function Ee(e){Y(oe,e)}const ne=typeof window>"u"||typeof document>"u";function De(e){if(ne)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let a=y(e);if(a)return a.ownerDocument}return document}let q=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Ne=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Ne||{}),Te=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Te||{}),Ve=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Ve||{});function _e(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(q))}var $=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))($||{});function re(e,a=0){var n;return e===((n=De(e))==null?void 0:n.body)?!1:D(a,{[0](){return e.matches(q)},[1](){let s=e;for(;s!==null;){if(s.matches(q))return!0;s=s.parentElement}return!1}})}let Fe=["textarea","input"].join(",");function Ae(e){var a,n;return(n=(a=e==null?void 0:e.matches)==null?void 0:a.call(e,Fe))!=null?n:!1}function ie(e,a=n=>n){return e.slice().sort((n,s)=>{let t=a(n),r=a(s);if(t===null||r===null)return 0;let o=t.compareDocumentPosition(r);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function tt(e,a,n=!0,s=null){var t;let r=(t=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?t:document,o=Array.isArray(e)?n?ie(e):e:_e(e);s=s!=null?s:r.activeElement;let u=(()=>{if(a&5)return 1;if(a&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),v=(()=>{if(a&1)return 0;if(a&2)return Math.max(0,o.indexOf(s))-1;if(a&4)return Math.max(0,o.indexOf(s))+1;if(a&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=a&32?{preventScroll:!0}:{},l=0,i=o.length,m;do{if(l>=i||l+i<=0)return 0;let x=v+l;if(a&16)x=(x+i)%i;else{if(x<0)return 3;if(x>=i)return 1}m=o[x],m==null||m.focus(f),l+=u}while(m!==r.activeElement);return a&6&&Ae(m)&&m.select(),m.hasAttribute("tabindex")||m.setAttribute("tabindex","0"),2}function W(e,a,n){ne||ee(s=>{document.addEventListener(e,a,n),s(()=>document.removeEventListener(e,a,n))})}function Ce(e,a,n=S(()=>!0)){function s(r,o){if(!n.value||r.defaultPrevented)return;let u=o(r);if(u===null||!u.ownerDocument.documentElement.contains(u))return;let v=function f(l){return typeof l=="function"?f(l()):Array.isArray(l)||l instanceof Set?l:[l]}(e);for(let f of v){if(f===null)continue;let l=f instanceof HTMLElement?f:y(f);if(l!=null&&l.contains(u))return}return!re(u,$.Loose)&&u.tabIndex!==-1&&r.preventDefault(),a(r,u)}let t=k(null);W("mousedown",r=>{var o,u;n.value&&(t.value=((u=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:u[0])||r.target)},!0),W("click",r=>{!t.value||(s(r,()=>t.value),t.value=null)},!0),W("blur",r=>s(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Be(e,a){return e===a}var Me=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Me||{}),je=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(je||{}),Ue=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ue||{});function ze(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let ue=Symbol("ListboxContext");function C(e){let a=J(ue,null);if(a===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,C),n}return a}let He=V({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Be},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:a,attrs:n,emit:s}){let t=k(1),r=k(null),o=k(null),u=k(null),v=k([]),f=k(""),l=k(null),i=k(1);function m(d=c=>c){let c=l.value!==null?v.value[l.value]:null,b=ie(d(v.value.slice()),P=>y(P.dataRef.domRef)),g=c?b.indexOf(c):null;return g===-1&&(g=null),{options:b,activeOptionIndex:g}}let x=S(()=>e.multiple?1:0),[w,p]=ye(S(()=>e.modelValue),d=>s("update:modelValue",d),S(()=>e.defaultValue)),h={listboxState:t,value:w,mode:x,compare(d,c){if(typeof e.by=="string"){let b=e.by;return(d==null?void 0:d[b])===(c==null?void 0:c[b])}return e.by(d,c)},orientation:S(()=>e.horizontal?"horizontal":"vertical"),labelRef:r,buttonRef:o,optionsRef:u,disabled:S(()=>e.disabled),options:v,searchQuery:f,activeOptionIndex:l,activationTrigger:i,closeListbox(){e.disabled||t.value!==1&&(t.value=1,l.value=null)},openListbox(){e.disabled||t.value!==0&&(t.value=0)},goToOption(d,c,b){if(e.disabled||t.value===1)return;let g=m(),P=Re(d===L.Specific?{focus:L.Specific,id:c}:{focus:d},{resolveItems:()=>g.options,resolveActiveIndex:()=>g.activeOptionIndex,resolveId:T=>T.id,resolveDisabled:T=>T.dataRef.disabled});f.value="",l.value=P,i.value=b!=null?b:1,v.value=g.options},search(d){if(e.disabled||t.value===1)return;let c=f.value!==""?0:1;f.value+=d.toLowerCase();let b=(l.value!==null?v.value.slice(l.value+c).concat(v.value.slice(0,l.value+c)):v.value).find(P=>P.dataRef.textValue.startsWith(f.value)&&!P.dataRef.disabled),g=b?v.value.indexOf(b):-1;g===-1||g===l.value||(l.value=g,i.value=1)},clearSearch(){e.disabled||t.value!==1&&f.value!==""&&(f.value="")},registerOption(d,c){let b=m(g=>[...g,{id:d,dataRef:c}]);v.value=b.options,l.value=b.activeOptionIndex},unregisterOption(d){let c=m(b=>{let g=b.findIndex(P=>P.id===d);return g!==-1&&b.splice(g,1),b});v.value=c.options,l.value=c.activeOptionIndex,i.value=1},select(d){e.disabled||p(D(x.value,{[0]:()=>d,[1]:()=>{let c=R(h.value.value).slice(),b=R(d),g=c.findIndex(P=>h.compare(b,R(P)));return g===-1?c.push(b):c.splice(g,1),c}}))}};return Ce([o,u],(d,c)=>{var b;h.closeListbox(),re(c,$.Loose)||(d.preventDefault(),(b=y(o))==null||b.focus())},S(()=>t.value===0)),Y(ue,h),Ee(S(()=>D(t.value,{[0]:M.Open,[1]:M.Closed}))),()=>{let{name:d,modelValue:c,disabled:b,...g}=e,P={open:t.value===0,disabled:b,value:w.value};return K(te,[...d!=null&&w.value!=null?Oe({[d]:w.value}).map(([T,se])=>K(Se,we({features:Le.Hidden,key:T,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:T,value:se}))):[],A({ourProps:{},theirProps:{...n,...ae(g,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:P,slots:a,attrs:n,name:"Listbox"})])}}});V({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"}},setup(e,{attrs:a,slots:n}){let s=C("ListboxLabel"),t=`headlessui-listbox-label-${j()}`;function r(){var o;(o=y(s.buttonRef))==null||o.focus({preventScroll:!0})}return()=>{let o={open:s.listboxState.value===0,disabled:s.disabled.value},u={id:t,ref:s.labelRef,onClick:r};return A({ourProps:u,theirProps:e,slot:o,attrs:a,slots:n,name:"ListboxLabel"})}}});let We=V({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"}},setup(e,{attrs:a,slots:n,expose:s}){let t=C("ListboxButton"),r=`headlessui-listbox-button-${j()}`;s({el:t.buttonRef,$el:t.buttonRef});function o(l){switch(l.key){case O.Space:case O.Enter:case O.ArrowDown:l.preventDefault(),t.openListbox(),N(()=>{var i;(i=y(t.optionsRef))==null||i.focus({preventScroll:!0}),t.value.value||t.goToOption(L.First)});break;case O.ArrowUp:l.preventDefault(),t.openListbox(),N(()=>{var i;(i=y(t.optionsRef))==null||i.focus({preventScroll:!0}),t.value.value||t.goToOption(L.Last)});break}}function u(l){switch(l.key){case O.Space:l.preventDefault();break}}function v(l){t.disabled.value||(t.listboxState.value===0?(t.closeListbox(),N(()=>{var i;return(i=y(t.buttonRef))==null?void 0:i.focus({preventScroll:!0})})):(l.preventDefault(),t.openListbox(),ze(()=>{var i;return(i=y(t.optionsRef))==null?void 0:i.focus({preventScroll:!0})})))}let f=Pe(S(()=>({as:e.as,type:a.type})),t.buttonRef);return()=>{var l,i;let m={open:t.listboxState.value===0,disabled:t.disabled.value,value:t.value.value},x={ref:t.buttonRef,id:r,type:f.value,"aria-haspopup":!0,"aria-controls":(l=y(t.optionsRef))==null?void 0:l.id,"aria-expanded":t.disabled.value?void 0:t.listboxState.value===0,"aria-labelledby":t.labelRef.value?[(i=y(t.labelRef))==null?void 0:i.id,r].join(" "):void 0,disabled:t.disabled.value===!0?!0:void 0,onKeydown:o,onKeyup:u,onClick:v};return A({ourProps:x,theirProps:e,slot:m,attrs:a,slots:n,name:"ListboxButton"})}}}),qe=V({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:a,slots:n,expose:s}){let t=C("ListboxOptions"),r=`headlessui-listbox-options-${j()}`,o=k(null);s({el:t.optionsRef,$el:t.optionsRef});function u(l){switch(o.value&&clearTimeout(o.value),l.key){case O.Space:if(t.searchQuery.value!=="")return l.preventDefault(),l.stopPropagation(),t.search(l.key);case O.Enter:if(l.preventDefault(),l.stopPropagation(),t.activeOptionIndex.value!==null){let i=t.options.value[t.activeOptionIndex.value];t.select(i.dataRef.value)}t.mode.value===0&&(t.closeListbox(),N(()=>{var i;return(i=y(t.buttonRef))==null?void 0:i.focus({preventScroll:!0})}));break;case D(t.orientation.value,{vertical:O.ArrowDown,horizontal:O.ArrowRight}):return l.preventDefault(),l.stopPropagation(),t.goToOption(L.Next);case D(t.orientation.value,{vertical:O.ArrowUp,horizontal:O.ArrowLeft}):return l.preventDefault(),l.stopPropagation(),t.goToOption(L.Previous);case O.Home:case O.PageUp:return l.preventDefault(),l.stopPropagation(),t.goToOption(L.First);case O.End:case O.PageDown:return l.preventDefault(),l.stopPropagation(),t.goToOption(L.Last);case O.Escape:l.preventDefault(),l.stopPropagation(),t.closeListbox(),N(()=>{var i;return(i=y(t.buttonRef))==null?void 0:i.focus({preventScroll:!0})});break;case O.Tab:l.preventDefault(),l.stopPropagation();break;default:l.key.length===1&&(t.search(l.key),o.value=setTimeout(()=>t.clearSearch(),350));break}}let v=Ie(),f=S(()=>v!==null?v.value===M.Open:t.listboxState.value===0);return()=>{var l,i,m,x;let w={open:t.listboxState.value===0},p={"aria-activedescendant":t.activeOptionIndex.value===null||(l=t.options.value[t.activeOptionIndex.value])==null?void 0:l.id,"aria-multiselectable":t.mode.value===1?!0:void 0,"aria-labelledby":(x=(i=y(t.labelRef))==null?void 0:i.id)!=null?x:(m=y(t.buttonRef))==null?void 0:m.id,"aria-orientation":t.orientation.value,id:r,onKeydown:u,role:"listbox",tabIndex:0,ref:t.optionsRef};return A({ourProps:p,theirProps:e,slot:w,attrs:a,slots:n,features:Z.RenderStrategy|Z.Static,visible:f.value,name:"ListboxOptions"})}}}),$e=V({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(e,{slots:a,attrs:n,expose:s}){let t=C("ListboxOption"),r=`headlessui-listbox-option-${j()}`,o=k(null);s({el:o,$el:o});let u=S(()=>t.activeOptionIndex.value!==null?t.options.value[t.activeOptionIndex.value].id===r:!1),v=S(()=>D(t.mode.value,{[0]:()=>t.compare(R(t.value.value),R(e.value)),[1]:()=>R(t.value.value).some(p=>t.compare(R(p),R(e.value)))})),f=S(()=>D(t.mode.value,{[1]:()=>{var p;let h=R(t.value.value);return((p=t.options.value.find(d=>h.some(c=>t.compare(R(c),R(d.dataRef.value)))))==null?void 0:p.id)===r},[0]:()=>v.value})),l=S(()=>({disabled:e.disabled,value:e.value,textValue:"",domRef:o}));U(()=>{var p,h;let d=(h=(p=y(o))==null?void 0:p.textContent)==null?void 0:h.toLowerCase().trim();d!==void 0&&(l.value.textValue=d)}),U(()=>t.registerOption(r,l)),de(()=>t.unregisterOption(r)),U(()=>{le([t.listboxState,v],()=>{t.listboxState.value===0&&(!v.value||D(t.mode.value,{[1]:()=>{f.value&&t.goToOption(L.Specific,r)},[0]:()=>{t.goToOption(L.Specific,r)}}))},{immediate:!0})}),ee(()=>{t.listboxState.value===0&&(!u.value||t.activationTrigger.value!==0&&N(()=>{var p,h;return(h=(p=y(o))==null?void 0:p.scrollIntoView)==null?void 0:h.call(p,{block:"nearest"})}))});function i(p){if(e.disabled)return p.preventDefault();t.select(e.value),t.mode.value===0&&(t.closeListbox(),N(()=>{var h;return(h=y(t.buttonRef))==null?void 0:h.focus({preventScroll:!0})}))}function m(){if(e.disabled)return t.goToOption(L.Nothing);t.goToOption(L.Specific,r)}function x(){e.disabled||u.value||t.goToOption(L.Specific,r,0)}function w(){e.disabled||!u.value||t.goToOption(L.Nothing)}return()=>{let{disabled:p}=e,h={active:u.value,selected:v.value,disabled:p},d={id:r,ref:o,role:"option",tabIndex:p===!0?void 0:-1,"aria-disabled":p===!0?!0:void 0,"aria-selected":v.value,disabled:void 0,onClick:i,onFocus:m,onPointermove:x,onMousemove:x,onPointerleave:w,onMouseleave:w};return A({ourProps:d,theirProps:ae(e,["value","disabled"]),slot:h,attrs:n,slots:a,name:"ListboxOption"})}}});const Ke=["data-todo"],Ge={class:"block truncate"},Qe={class:"pointer-events-none absolute flex inset-y-0 right-0 pr-2 items-center"},Xe={key:0,class:"absolute inset-y-0 left-0 flex items-center pl-2.5 text-purple-600 dark:text-purple-300"},Ze=E("span",{class:"i-uil:check h-4 w-4","aria-hidden":"true"},null,-1),Je=[Ze],lt=V({__name:"PvSelect",props:{itemList:null,modelValue:null,class:null},emits:["update:modelValue"],setup(e,{emit:a}){const n=e,{t:s}=ce(),t=ve(n,"modelValue",a),r=G(),o=G(),u=pe(r,{immediate:!0}),v=k(!1),f=x=>{v.value=x};le(v,()=>{u.update()},{flush:"pre"});const l=S(()=>u.top.value+u.height.value),i=S(()=>u.left.value),m=x=>{var w;return((w=n.itemList.find(p=>p.value===x))==null?void 0:w.name)||s("ui.pv-select.select")};return(x,w)=>(_(),z(I(He),{modelValue:I(t),"onUpdate:modelValue":w[0]||(w[0]=p=>fe(t)?t.value=p:null)},{default:F(({open:p})=>[E("div",{class:"hidden","data-todo":f(p)},null,8,Ke),E("div",{ref_key:"rootEl",ref:r,class:B(["mt-1",n.class])},[H(I(We),{class:"focus:outline-none relative w-full py-0.5 pl-4 pr-8 rounded-full text-left shadow-sm ring-1 ring-purple-300 ring-opacity-75 dark:ring-gray-700 focus-visible:ring-offset-1 focus-visible:ring-offset-purple-400 dark:focus-visible:ring-offset-gray-500"},{default:F(()=>[E("span",Ge,Q(m(I(t))),1),E("span",Qe,[E("span",{class:B(["i-uil:angle-down w-5 h-5 text-gray-400 transition-transform",{"rotate-180":p}]),"aria-hidden":"true"},null,2)])]),_:2},1024),(_(),z(be,{to:"body"},[E("div",{ref_key:"optionsEl",ref:o,class:"z-51 fixed max-h-60 -mx-1 pt-1 pb-2 px-1 rounded-md overflow-hidden",style:me({top:`${I(l)}px`,left:`${I(i)}px`,width:`calc(${I(u).width.value}px + 0.5rem)`})},[H(he,{"enter-active-class":"transition ease-out duration-100 transform","enter-from-class":"-translate-y-2/3 opacity-40","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition ease-out duration-100 transform","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"-translate-y-2/3 opacity-0"},{default:F(()=>[H(I(qe),{class:"focus:outline-none w-full rounded-md overflow-auto text-base shadow-lg ring-1 ring-gray-500 ring-opacity-10 bg-white dark:bg-gray-800"},{default:F(()=>[(_(!0),X(te,null,xe(e.itemList,h=>(_(),z(I($e),{key:h.value,value:h.value,as:"template"},{default:F(({active:d,selected:c})=>[E("li",{class:B(["relative py-1 pl-8 pr-4 cursor-pointer select-none",d?"bg-purple-50 text-purple-900 dark:bg-indigo-900 dark:text-purple-50":"text-gray-900 dark:text-gray-100"])},[E("span",{class:B(["block truncate",c?"font-medium":"font-normal"])},Q(h.name),3),c?(_(),X("span",Xe,Je)):ge("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})],4)]))],2)]),_:1},8,["modelValue"]))}});export{_e as E,$ as F,Ne as M,Te as N,tt as P,lt as _,Ee as c,ne as e,re as h,M as l,De as m,Ie as p,Ce as y};
//# sourceMappingURL=PvSelect.vue_vue_type_script_setup_true_lang.b0c6d15e.js.map
