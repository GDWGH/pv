import{m,V as w,U as v,d as h,a5 as P,ag as $,f as p,X as k,W as x,F as M,x as T,o as U,c as F,w as A,e as H,P as V,L as I}from"./index.2bd6e8d1.js";import{t as S,P as g,d as N,b as W,f as X,V as Y,a as q,w as J,c as C,p as Q}from"./use-controllable.e5b1c0e5.js";/*! PatchyVideo/Platinum by VoileLabs */let j=Symbol("DescriptionContext");function Z(){let t=k(j,null);if(t===null)throw new Error("Missing parent");return t}function _({slot:t=m({}),name:a="Description",props:n={}}={}){let e=m([]);function s(l){return e.value.push(l),()=>{let r=e.value.indexOf(l);r!==-1&&e.value.splice(r,1)}}return w(j,{register:s,slot:t,name:a,props:n}),v(()=>e.value.length>0?e.value.join(" "):void 0)}let se=h({name:"Description",props:{as:{type:[Object,String],default:"p"}},setup(t,{attrs:a,slots:n}){let e=Z(),s=`headlessui-description-${S()}`;return P(()=>$(e.register(s))),()=>{let{name:l="Description",slot:r=m({}),props:i={}}=e,f=t,d={...Object.entries(i).reduce((c,[u,b])=>Object.assign(c,{[u]:p(b)}),{}),id:s};return g({ourProps:d,theirProps:f,slot:r.value,attrs:a,slots:n,name:l})}}}),O=Symbol("LabelContext");function D(){let t=k(O,null);if(t===null){let a=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(a,D),a}return t}function ee({slot:t={},name:a="Label",props:n={}}={}){let e=m([]);function s(l){return e.value.push(l),()=>{let r=e.value.indexOf(l);r!==-1&&e.value.splice(r,1)}}return w(O,{register:s,slot:t,name:a,props:n}),v(()=>e.value.length>0?e.value.join(" "):void 0)}let te=h({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1}},setup(t,{slots:a,attrs:n}){let e=D(),s=`headlessui-label-${S()}`;return P(()=>$(e.register(s))),()=>{let{name:l="Label",slot:r={},props:i={}}=e,{passive:f,...d}=t,c={...Object.entries(i).reduce((u,[b,y])=>Object.assign(u,{[b]:p(y)}),{}),id:s};return f&&(delete c.onClick,delete d.onClick),g({ourProps:c,theirProps:d,slot:r,attrs:n,slots:a,name:l})}}}),z=Symbol("GroupContext"),re=h({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:a,attrs:n}){let e=m(null),s=ee({name:"SwitchLabel",props:{onClick(){!e.value||(e.value.click(),e.value.focus({preventScroll:!0}))}}}),l=_({name:"SwitchDescription"});return w(z,{switchRef:e,labelledby:s,describedby:l}),()=>g({theirProps:t,ourProps:{},slot:{},slots:a,attrs:n,name:"SwitchGroup"})}}),le=h({name:"Switch",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,default:!1},name:{type:String,optional:!0},value:{type:String,optional:!0}},inheritAttrs:!1,setup(t,{emit:a,attrs:n,slots:e,expose:s}){let l=k(z,null),r=`headlessui-switch-${S()}`,[i,f]=N(v(()=>t.modelValue),o=>a("update:modelValue",o),v(()=>t.defaultChecked));function d(){f(!i.value)}let c=m(null),u=l===null?c:l.switchRef,b=W(v(()=>({as:t.as,type:n.type})),u);s({el:u,$el:u});function y(o){o.preventDefault(),d()}function B(o){o.key===C.Space?(o.preventDefault(),d()):o.key===C.Enter&&Q(o.currentTarget)}function L(o){o.preventDefault()}return()=>{let{name:o,value:E,...K}=t,R={checked:i.value},G={id:r,ref:u,role:"switch",type:b.value,tabIndex:0,"aria-checked":i.value,"aria-labelledby":l==null?void 0:l.labelledby.value,"aria-describedby":l==null?void 0:l.describedby.value,onClick:y,onKeyup:B,onKeypress:L};return x(M,[o!=null&&i.value!=null?x(X,Y({features:q.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:i.value,name:o,value:E})):null,g({ourProps:G,theirProps:{...n,...J(K,["modelValue","defaultChecked"])},slot:R,attrs:n,slots:e,name:"Switch"})])}}}),oe=te;const ie=h({__name:"PvSwitch",props:{size:{default:"md"},modelValue:{type:Boolean}},emits:["update:modelValue"],setup(t,{emit:a}){const e=T(t,"modelValue",a);return(s,l)=>(U(),F(p(le),{modelValue:p(e),"onUpdate:modelValue":l[0]||(l[0]=r=>I(e)?e.value=r:null),class:V(["focus:outline-none relative inline-flex flex-shrink-0 rounded-full shadow-inner border-1 border-transparent transition-colors duration-200 ease-in-out cursor-pointer focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-opacity-75",{"h-5.5 w-10":t.size==="sm","w-12 h-6.5":t.size==="md","bg-purple-300 dark:bg-indigo-800":!p(e),"bg-purple-400 dark:bg-indigo-600":p(e)}])},{default:A(()=>[H("span",{class:V(["inline-block transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out pointer-events-none",{"w-5":t.size==="sm","w-6":t.size==="md","translate-x-4.5":p(e)&&t.size==="sm","translate-x-5.5":p(e)&&t.size==="md"}])},null,2)]),_:1},8,["modelValue","class"]))}});export{ie as _,oe as n,re as t};
//# sourceMappingURL=PvSwitch.vue_vue_type_script_setup_true_lang.b89df52a.js.map
