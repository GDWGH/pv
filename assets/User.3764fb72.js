import{_ as Z,b as ee,p as U}from"./LayoutDefault.vue_vue_type_script_setup_true_lang.4eba3af8.js";import{d as E,u as T,x as se,U as te,o as p,g as m,J as k,K as j,f as s,L as C,F as P,e,v as le,i as ae,ar as B,as as D,a1 as M,a6 as oe,m as c,aI as ne,aJ as re,q as ue,c as ie,w as S,G as de,r as ce,b as f,t as a,Q as q,a9 as pe,au as ve,j as me}from"./index.a25910c7.js";import{s as fe}from"./setSiteTitle.db0fa839.js";import"./Logo.vue_vue_type_script_setup_true_lang.74321eb4.js";import"./PvSelect.vue_vue_type_script_setup_true_lang.b8744985.js";import"./use-controllable.ee433882.js";/*! PatchyVideo/Platinum by VoileLabs */const F=r=>(B("data-v-c35128f0"),r=r(),D(),r),we={class:"relative w-full"},_e=["placeholder"],ge=["placeholder"],he={class:"text-gray-300 absolute top-1/2 transform -translate-y-1/2 left-1"},ye=["placeholder"],xe=F(()=>e("div",{class:"i-uil:padlock text-gray-300 absolute top-1/2 transform -translate-y-1/2 left-1"},null,-1)),be=["placeholder"],Ue=F(()=>e("div",{class:"i-uil:envelope text-gray-300 absolute top-1/2 transform -translate-y-1/2 left-1"},null,-1)),ke=E({__name:"UserInput",props:{value:null,type:{default:"singleLine"},placeholder:null},emits:["update:value"],setup(r,{emit:t}){const g=r,{t:y}=T(),o=se(g,"value",t),w=te(()=>{var d;return(d=g.placeholder)!=null?d:y("user.input.placeholder")});return(d,u)=>(p(),m("div",we,[r.type==="richText"?k((p(),m("textarea",{key:0,"onUpdate:modelValue":u[0]||(u[0]=i=>C(o)?o.value=i:null),class:"input input-rich w-full",rows:"4",placeholder:s(w)},null,8,_e)),[[j,s(o)]]):r.type==="singleLine"?(p(),m(P,{key:1},[k(e("input",{"onUpdate:modelValue":u[1]||(u[1]=i=>C(o)?o.value=i:null),class:"input input-single w-full",placeholder:s(w)},null,8,ge),[[j,s(o)]]),e("div",he,[le(d.$slots,"prepend",{},void 0,!0)])],64)):r.type==="password"?(p(),m(P,{key:2},[k(e("input",{"onUpdate:modelValue":u[2]||(u[2]=i=>C(o)?o.value=i:null),class:"input input-single w-full",type:"password",placeholder:s(w)},null,8,ye),[[j,s(o)]]),xe],64)):r.type==="email"?(p(),m(P,{key:3},[k(e("input",{"onUpdate:modelValue":u[3]||(u[3]=i=>C(o)?o.value=i:null),class:"input input-single w-full",type:"email",placeholder:s(w)},null,8,be),[[j,s(o)]]),Ue],64)):ae("",!0)]))}});const h=M(ke,[["__scopeId","data-v-c35128f0"]]),V=r=>(B("data-v-d104ae9d"),r=r(),D(),r),je={key:0,class:"w-full h-full flex justify-start flex-col md:flex-row"},Ce={class:"half-container justify-center items-center"},$e={class:"mt-5"},Ie={class:"mt-8 px-4"},Le={class:"w-full mt-20 flex flex-col justify-start items-center"},Pe={class:"half-container p-8 md:p-16 justify-start items-start"},Se={class:"w-full"},Ve={key:0,class:"flex flex-col justify-between items-start lg:flex-row"},Ae=V(()=>e("div",{class:"i-uil:user"},null,-1)),Ne={class:"w-full lg:w-2/5 flex justify-evenly mt-5 lg:mt-0"},Re=V(()=>e("div",{class:"i-uil:edit-alt"},null,-1)),qe={key:1,class:"flex flex-row justify-start"},Ee={class:"w-full lg:w-4/5 mt-4"},Te={class:"w-full mt-4 flex flex-col justify-start items-start"},Be={class:"w-full mt-4 flex flex-col justify-start items-start"},De={class:"password-row"},Me={class:"password-row-label"},Fe={class:"password-row mt-6"},Ge={class:"password-row-label"},Je={class:"password-row mt-6"},Ke={class:"password-row-label"},Oe={class:"w-full mt-4 flex flex-row justify-start"},Qe={class:"password-row"},ze=V(()=>e("p",{class:"password-row-label"},null,-1)),He={class:"password-row-input flex flex-row justify-between"},We={class:"w-full lg:w-4/5 mt-4 flex flex-col justify-start"},Xe={class:"mt-4 w-full flex flex-row justify-start"},Ye={key:1,class:"text-lg"},Ze=E({__name:"User",setup(r){const{t}=T(),g=oe();fe(`${t("user.user-page.title")} - PatchyVideo`);const y=c(!1),o=c(""),w=ne("chooseAvatarInput"),d=c(""),u=c(""),i=c(""),$=c(""),I=c(""),A=c(""),N=c(""),L=c(""),G=re();ue(()=>g.isLogin,async _=>{if(!_)return;const l=await G.query({query:de`
        query ($uid: String!) {
          getUser(para: { uid: $uid }) {
            id
            desc
            username
            image
            email
            gravatar
          }
        }
      `,variables:{uid:g.uid}}),v=ce(l.data.getUser);o.value=v.image,d.value=v.username,A.value=v.email||"",L.value=v.desc},{immediate:!0});const J=_=>{const l=_.target.files;if(!(l!=null&&l.length)){pe({message:"请选择头像文件！",type:ve.error});return}const v=new FileReader;v.readAsDataURL(l[0]),v.onload=x=>{var b,n,R;o.value=(R=(n=(b=x==null?void 0:x.target)==null?void 0:b.result)==null?void 0:n.toString())!=null?R:""}},K=()=>{var _;(_=w.value)==null||_.click()},O=()=>{U()},Q=()=>{y.value=!0,u.value=d.value},z=()=>{U()},H=()=>{U()},W=()=>{U()},X=()=>{i.value=$.value=I.value=""},Y=()=>{U()};return(_,l)=>{const v=me("RouterLink"),x=Z;return p(),ie(x,{"show-search-bar":!1},{default:S(()=>{var b;return[s(g).isLogin?(p(),m("div",je,[e("div",Ce,[f(ee,{title:d.value,image:o.value,class:"w-3/5 md:w-1/2 mt-10 rounded-full transition duration-300 overflow-hidden transform"},null,8,["title","image"]),e("p",$e,a(s(t)("user.user-page.avatar.current")),1),e("p",Ie,a(s(t)("user.user-page.avatar.requirement")),1),e("div",Le,[e("input",{ref_key:"chooseAvatarInput",ref:w,class:"hidden",type:"file",accept:".jpg,.jpeg,.png,.bmp,.gif",onInput:J},null,544),e("button",{class:"w-1/2 md:w-1/4 btn btn-primary",onClick:K},a(s(t)("user.user-page.avatar.choose-image")),1),e("button",{class:"mt-5 w-1/2 md:w-1/4 btn btn-default",onClick:O},a(s(t)("user.user-page.avatar.upload")),1)])]),e("div",Pe,[e("div",Se,[y.value?(p(),m("div",Ve,[f(h,{value:d.value,type:"singleLine",placeholder:s(t)("user.user-page.username.placeholder"),class:"w-full lg:w-3/5","onUpdate:value":l[0]||(l[0]=n=>u.value=n)},{prepend:S(()=>[Ae]),_:1},8,["value","placeholder"]),e("div",Ne,[e("button",{class:"btn btn-default w-3/7 sm:w-1/3 lg:w-2/5 flex justify-evenly items-center",onClick:z},[Re,q(" "+a(s(t)("user.user-page.username.modify")),1)]),e("button",{class:"btn btn-default w-3/7 sm:w-1/3 lg:w-2/5",onClick:l[1]||(l[1]=n=>y.value=!1)},a(s(t)("user.user-page.username.cancel")),1)])])):(p(),m("div",qe,[e("div",null,a(d.value),1),e("div",{class:"i-uil:edit-alt ml-2 cursor-pointer hover:text-blue-400 transition duration-300",onClick:Q})]))]),e("div",Ee,[f(h,{value:L.value,"onUpdate:value":l[2]||(l[2]=n=>L.value=n),type:"richText",placeholder:s(t)("user.user-page.description.placeholder")},null,8,["value","placeholder"]),e("button",{class:"btn btn-default w-1/2 sm:w-1/4 mt-4",onClick:H},a(s(t)("user.user-page.description.save")),1)]),e("div",Te,[e("p",null,a(s(t)("user.user-page.password.title")),1),e("div",Be,[e("div",De,[e("p",Me,a(s(t)("user.user-page.password.old")),1),f(h,{value:i.value,"onUpdate:value":l[3]||(l[3]=n=>i.value=n),type:"password",placeholder:s(t)("user.user-page.password.oldPlaceholder"),class:"password-row-input"},null,8,["value","placeholder"])]),e("div",Fe,[e("p",Ge,a(s(t)("user.user-page.password.new")),1),f(h,{value:$.value,"onUpdate:value":l[4]||(l[4]=n=>$.value=n),type:"password",placeholder:s(t)("user.user-page.password.newPlaceholder"),class:"password-row-input"},null,8,["value","placeholder"])]),e("div",Je,[e("p",Ke,a(s(t)("user.user-page.password.confirmNew")),1),f(h,{value:I.value,"onUpdate:value":l[5]||(l[5]=n=>I.value=n),type:"password",placeholder:s(t)("user.user-page.password.confirmNewPlaceholder"),class:"password-row-input"},null,8,["value","placeholder"])])]),e("div",Oe,[e("div",Qe,[ze,e("div",He,[e("button",{class:"btn btn-default w-2/5 sm:w-1/3",onClick:W},a(s(t)("user.user-page.password.commit")),1),e("button",{class:"btn btn-default w-2/5 sm:w-1/3",onClick:X},a(s(t)("user.user-page.password.reset")),1)])])])]),e("div",We,[e("p",null,a(s(t)("user.user-page.email.title")),1),f(h,{value:N.value,"onUpdate:value":l[6]||(l[6]=n=>N.value=n),class:"w-full mt-4",type:"email",placeholder:s(t)("user.user-page.email.placeholder")},null,8,["value","placeholder"]),e("button",{class:"mt-4 w-1/2 sm:w-1/4 btn btn-default",onClick:Y},a(s(t)("user.user-page.email.bind")),1),e("div",Xe,[e("p",null,a(s(t)("user.user-page.email.boundEmail"))+"："+a((b=A.value)!=null?b:s(t)("user.user-page.email.none")),1)])])])])):(p(),m("div",Ye,[f(v,{to:"/user/login"},{default:S(()=>[q(a(s(t)("user.user-page.not-logged-in")),1)]),_:1})]))]}),_:1})}}});const ns=M(Ze,[["__scopeId","data-v-d104ae9d"]]);export{ns as default};
//# sourceMappingURL=User.3764fb72.js.map
