import{d as yt,u as gt,y as H,m as d,Z as _t,U as E,aA as wt,z as p,aB as xt,av as Ye,q as L,aC as bt,a5 as kt,ag as Ge,_ as $t,B as ae,aD as Ct,o as u,g as r,J as z,O as X,e as n,f,i as U,P as C,t as O,F as de,h as ve,$ as J,b as $e,w as Ce,R as St,aE as Se,S as Tt,c as Bt,Q as Mt,ar as qt,as as Rt,at as Pt,a1 as Et}from"./index.a0f42487.js";import{t as Ft,n as Vt,_ as At}from"./PvSwitch.vue_vue_type_script_setup_true_lang.03ade95d.js";/*! PatchyVideo/Platinum by VoileLabs */const Q=k=>(qt("data-v-c6badfac"),k=k(),Rt(),k),Wt=["crossorigin"],Ht=["crossorigin"],Lt=["src"],Ut={class:"m-2 flex justify-between"},Ot=["textContent"],jt=Q(()=>n("div",{class:"i-uil:setting text-white text-2xl"},null,-1)),Nt=[jt],Dt={class:"h-full m-0 align-middle"},zt={class:"absolute h-full w-full overflow-hidden"},Xt={key:0,class:"h-1/2 w-full"},Jt={key:1,class:"h-1/2 w-full"},Qt={key:2,class:"h-full w-full"},Yt=Q(()=>n("span",{class:"absolute right-0 top-0 w-3 h-3 -mt-1 -mr-1.5 bg-white rounded-full cursor-pointer"},null,-1)),Gt=[Yt],Zt={class:"flex flex-row justify-between flex-nowrap h-8 mx-4 my-1 text-white overflow-hidden"},Kt={class:"flex-grow-0 flex flex-row items-center"},It={key:0,class:"i-uil:spinner-alt text-2xl animate-spin"},ea={key:1,class:"i-uil:pause text-2xl"},ta={key:2,class:"i-uil:play text-2xl"},aa=Q(()=>n("div",{class:"px-1"},null,-1)),la={class:"flex flex-row items-center gap-2"},sa={key:0,class:"i-uil:volume"},ia={key:1,class:"i-uil:volume-mute"},oa={class:"lt-sm:hidden h-full m-0"},na=Q(()=>n("span",{class:"absolute -right-1.5 -top-1 w-3 h-3 bg-white rounded-full cursor-pointer"},null,-1)),ua=[na],ra={class:"flex-grow-0 flex items-center"},ca={key:0,class:"i-uil:expand-arrows-alt text-2xl"},da={key:1,class:"i-uil:compress-arrows text-2xl"},va=Q(()=>n("span",{class:"px-1"},null,-1)),fa={class:"px-2 pt-3 pb-2 font-medium"},pa=["textContent"],ha=["onClick","textContent"],ma=["onClick"],ya=["textContent"],ga={class:"inline-block float-right"},_a=["textContent"],wa=Q(()=>n("div",{class:"i-uil:arrow-right inline-block text-2xl align-middle"},null,-1)),xa={class:"flex justify-between"},ba={key:1,class:"absolute bottom-2 left-2 log overflow-y-scroll text-sm text-white"},ka=["textContent"],$a=yt({__name:"Player",props:{item:null,fullHeight:{type:Boolean,default:!1},disableFullscreen:{type:Boolean,default:!1}},setup(k){const le=k,Te=["144p","240p","360p","480p","720p","1080p","1440p","2160p","2880p","4320p"].reverse(),se=["webm_dash","mp4_dash","flv"],{t:c}=gt(),Y=H(null),y=d("video"),s=H(null),{width:Be}=_t(Y),Ze=E(()=>s.value&&s.value.videoWidth>0&&s.value.videoHeight>0?Be.value/s.value.videoWidth*s.value.videoHeight:Be.value/16*9),fe=d(""),F=d([]),ie=d(),w=d(!1),{isFullscreen:Me,toggle:qe}=wt(Y),o=H(null),x=d(!1),S=d(!1),Ke=E(()=>S.value&&(!w.value||x.value));let oe;p(s,"waiting",()=>{const{stop:t}=Se(()=>{S.value=!1},200);oe=t}),p(s,"canplay",()=>{oe&&(oe(),oe=void 0),S.value=!0});let ne;p(o,"waiting",()=>{const{stop:t}=Se(()=>{x.value=!1},200);ne=t}),p(o,"canplay",()=>{ne&&(ne(),ne=void 0),x.value=!0}),p(o,"timeupdate",()=>{!o.value.paused&&x.value&&(!s.value||!S.value||s.value.paused)&&o.value.pause()});const Re=d(!1),G=E(()=>Re.value||xt.value.includes("enable_cors_requests")),ue=d(!0);let Z;const Pe=Pt((t=200)=>{Z&&Z();const{stop:a}=Se(()=>{ue.value=!1},t,{immediate:!0});Z=a},200,!0);p(Y,"mousemove",()=>{Z&&Z(),ue.value=!0,Me.value&&Pe(800)}),p(Y,"mouseleave",()=>{Pe()});const j=d(!1),Ee=Ye("player_settings_sync_audio",!1),Fe=d(!1),pe=d(!1),re=E(()=>({default:{id:"default",name:c("video.player.settings.default.name"),items:[{type:"sub",to:"quality",text:c("video.player.settings.default.items.quality"),rightText:fe.value},{type:"check",text:c("video.player.settings.default.items.audio"),checked:Ee},...(()=>G.value?[{type:"check",text:c("video.player.settings.default.items.canvas"),checked:Fe},{type:"check",text:c("video.player.settings.default.items.canvas-transparent"),checked:pe}]:[])()]},quality:{id:"quality",name:c("video.player.settings.quality.name"),parent:"default",items:[...(()=>ie.value?[{type:"text",text:c("video.player.settings.quality.items.current-codec",{container:ie.value.container.replace(/_dash$/,""),codec:ie.value.vcodec||"unknown"})}]:[])(),...(()=>{const t=[];return F.value.forEach(a=>{t.includes(a.quality)||t.push(a.quality)}),t.map(a=>({type:"text",text:`${fe.value===a?"·":" "} ${a}`,onClick:()=>_e(a)}))})()]}})),N=d("default"),K=E(()=>re.value[N.value]),I=d(!1);L(N,(t,a)=>{I.value=t===re.value[a].parent});const Ie=()=>{N.value=K.value.parent},Ve=d(""),he=H(null),h=t=>{Ve.value+=t,Tt(()=>{he.value&&he.value.scrollIntoView({block:"end"})})},b=d(!1),ee=d(!1),et=()=>{ee.value||(ee.value=!0),b.value=!b.value},Ae=()=>{if(s.value&&S.value&&(!w.value||o.value&&x.value))try{s.value.currentTime===s.value.duration&&(s.value.currentTime=0,o.value&&(o.value.currentTime=0)),b.value&&s.value.paused&&s.value.play(),!b.value&&!s.value.paused&&s.value.pause()}catch{}};bt(Ae,500),L(b,Ae),p(s,"ended",()=>{b.value=!1}),kt(()=>{p(s,"play",()=>{w.value&&o.value&&(o.value.currentTime=s.value.currentTime,o.value.play())}),p(s,"pause",()=>{w.value&&o.value&&(o.value.currentTime=s.value.currentTime,o.value.pause())})});const M=d(0);p(s,"durationchange",()=>{M.value=s.value.duration});const q=d(!1),We=t=>{if(t){const a=[];let e=0;for(let l=0;l<t.length;l++)e<t.start(l)&&a.push({isBuffer:!1,start:e,end:t.start(l)}),a.push({isBuffer:!0,start:t.start(l),end:t.end(l)}),e=t.end(l);return e<M.value&&a.push({isBuffer:!1,start:e,end:M.value}),a.map(l=>({isBuffer:l.isBuffer,start:l.start/M.value,end:l.end/M.value}))}else return[{isBuffer:!1,start:0,end:1}]},R=d(0),He=d(null),Le=E(()=>We(He.value)),Ue=d(null),tt=E(()=>We(Ue.value)),at=E(()=>R.value/M.value),V=H(null),Oe=()=>{s.value&&(s.value.currentTime=R.value),o.value&&(o.value.currentTime=R.value)};p(s,"timeupdate",()=>{R.value=s.value.currentTime,w.value&&(S.value&&x.value?(o.value&&Ee.value&&Math.abs(o.value.currentTime-R.value)>.1&&(o.value.currentTime=s.value.currentTime+(o.value.currentTime-R.value),o.value.play()),o.value&&o.value.paused&&!s.value.paused&&o.value.play(),o.value&&!o.value.paused&&s.value.paused&&o.value.pause()):(s.value.pause(),L(x,()=>{x.value&&b.value&&s.value.play()},{flush:"post"}))),s.value&&(He.value=s.value.buffered),o.value&&(Ue.value=o.value.buffered)}),p(V,"click",t=>{let a=(t.clientX-V.value.getBoundingClientRect().left)/V.value.clientWidth;a=Math.max(0,Math.min(1,a)),R.value=a*M.value,Oe()}),p(V,"mousedown",t=>{const a=p("mousemove",l=>{let i=(l.clientX-V.value.getBoundingClientRect().left)/V.value.clientWidth;i=Math.max(0,Math.min(1,i)),R.value=i*M.value}),e=p("mouseup",l=>{a(),e(),Oe()})});const T=Ye("player_settings_volume",.5,{listenToStorageChanges:!1}),me=d(!1);L([T,s,o,me],()=>{let t=T.value;me.value&&(t=1),s.value&&s.value.volume!==t&&(s.value.volume=t),o.value&&o.value.volume!==t&&(o.value.volume=t)});const A=H(null);p(A,"click",t=>{let a=(t.clientX-A.value.getBoundingClientRect().left)/A.value.clientWidth;a=Math.max(0,Math.min(1,a)),Number.isFinite(a)&&(T.value=a)}),p(A,"mousedown",t=>{const a=p("mousemove",l=>{let i=(l.clientX-A.value.getBoundingClientRect().left)/A.value.clientWidth;i=Math.max(0,Math.min(1,i)),Number.isFinite(i)&&(T.value=i)}),e=p("mouseup",l=>{a(),e()})});const lt=/(https:\/\/|http:\/\/)www.bilibili.com\/video\/av(\S+)\?p=(\S+)/,st=/(https:\/\/|http:\/\/)www.nicovideo.jp\/watch\/sm(\S+)/,it=/(https:\/\/|http:\/\/)www.youtube.com\/watch\?v=(\S+)/,ot=/(https:\/\/|http:\/\/)www.acfun.cn\/v\/ac(\S+)/,ye=d("");function nt(t){const a=lt.exec(t);if(a)return`//player.bilibili.com/player.html?aid=${a[2]}&page=${a[3]}`;const e=st.exec(t);if(e)return`//embed.nicovideo.jp/watch/sm${e[2]}`;const l=it.exec(t);if(l)return`https://www.youtube.com/embed/${l[2]}`;const i=ot.exec(t);if(i)return`https://www.acfun.cn/player/ac${i[2]}`}function ut(t){h(`${c("video.player.iframe.enable")}
`);const a=nt(t);return a?(ye.value=a,y.value="iframe",!0):(h(`${c("video.player.iframe.failed")}
`),!1)}const rt=(t,a,e=!1)=>`${e?"audio":"video"}/${t.replace(/_dash$/,"")}${a?`; codecs="${a}"`:""}`,ge=(t,a,e=!1)=>["flv"].includes(t)?!0:window.MediaSource.isTypeSupported(rt(t,a,e));let $;Ge(()=>{$==null||$.destroy()});async function _e(t){var a;if((!s.value||!o.value)&&await new Promise(e=>{L([s,o],([l,i])=>{l&&i&&e()})}),fe.value=t,$==null||$.destroy(),s.value){h(`${c("video.player.play-stream.source.video.source-changing")}
`);const e=(a=F.value.filter(i=>i.quality===t).find(i=>ge(i.container,i.vcodec)))!=null?a:F.value.find(i=>ge(i.container,i.vcodec));if(!e)return h(`${c("video.player.play-stream.source.video.source-nothing")}
`),!1;const l=e.audioStreams?e.audioStreams.sort((i,v)=>se.indexOf(i.container)-se.indexOf(v.container)).sort((i,v)=>{var m,g;return((m=i.tbr)!=null?m:0)-((g=v.tbr)!=null?g:0)}).reverse().find(i=>ge(i.container,i.acodec,!0)):void 0;if(e.audioStreams&&!l)return h(`${c("video.player.play-stream.source.audio.source-nothing")}
`),!1;try{switch(e.container){case"flv":{h(`${c("video.player.play-stream.container.flv.player-loading")}
`);try{const v=(await $t(()=>import("./flv.ef494493.js").then(m=>m.f),["assets/flv.ef494493.js","assets/index.a0f42487.js","assets/index.40792eff.css"])).default;h(`${c("video.player.play-stream.container.flv.parse-creating")}
`),"createPlayer"in v&&($=v.createPlayer({type:"flv",url:e.src[0].replace(/^http:/,"https:")}),$.attachMediaElement(s.value),h(`${c("video.player.play-stream.container.flv.source-loading")}
`),$.load(),$.on("metadata_arrived",()=>{h(`${c("video.player.play-stream.container.flv.player-loaded")}
`),q.value=!0}),w.value=!1)}catch(i){return h(`${c("video.player.play-stream.container.flv.player-failed")}
${i}
`),!1}return!0}case"webm_dash":case"mp4_dash":return h(`${c("video.player.play-stream.container.mp4_dash.source-loading")}
`),s.value.src=e.src[0],p(s,"canplay",()=>{h(`${c("video.player.play-stream.container.mp4_dash.player-loaded")}
`),ie.value=e,q.value=!0},{once:!0}),e.audioStreams&&(o.value.src=e.audioStreams[0].src[0],o.value.currentTime=s.value.currentTime,o.value.load(),w.value=!0),s.value.load(),!0}}catch(i){return h(`${c("video.player.play-stream.container.failed")}
${i}
`),!1}}}async function ct(t){try{h(`${c("video.player.video.address-parsing")}
`);const e=await(await fetch("https://patchyvideo.com/be/helper/get_video_stream",{method:"POST",credentials:"include",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({url:t})})).json();if(!e.data)return!1;switch(e.data.extractor){case"BiliBili":{F.value=e.data.streams;const l=F.value[0];if(h(`${c("video.player.video.profile.known-source",{source:"BiliBili",format:l.container,quality:l.quality})}
`),Re.value=!0,await _e(l.quality))return!0;break}case"Youtube":{let l=[];const i=[];e.data.streams.forEach(m=>{m.quality==="tiny"?i.push(m):l.push(m)}),l=l.map(m=>({...m,audioStreams:i})).sort((m,g)=>se.indexOf(m.container)-se.indexOf(g.container)).sort((m,g)=>Te.indexOf(m.quality)-Te.indexOf(g.quality)),F.value=l;const v=F.value[0];if(h(`${c("video.player.video.profile.known-source",{source:"Youtube",format:v.container,quality:v.quality})}
`),await _e(v.quality))return!0;break}default:{h(c("video.player.video.profile.unknown-source",{source:e.data.extractor}));break}}return!1}catch{return!1}}const dt=["youtube"];async function vt(t){return!!(dt.includes(t.site)&&await ct(t.url)||ut(t.url))}const je=d("");L(()=>le.item.url,async()=>{!le.item.url||(h(`${c("video.player.video.info-fetching")}
`),je.value=le.item.url,h(`${c("video.player.video.URL",{url:je.value})}
`),vt(le.item))},{immediate:!0});const Ne=H(null);{ae(()=>{!G.value&&y.value==="canvas"&&(y.value="iframe")}),ae(()=>{Fe.value?y.value="canvas":y.value==="canvas"&&(y.value="video")});let t,a,e,l,i,v,m,g,De=!1;const we=16;ae(()=>{G.value&&ee.value&&!De&&(ae(()=>{if(w.value&&o.value&&m!=="audio")g&&g(),t=new AudioContext,v=t.createMediaElementSource(o.value),m="audio";else if(!w.value&&s.value&&m!=="video")g&&g(),t=new AudioContext,v=t.createMediaElementSource(s.value),m="video";else return;a=t.createGain(),me.value=!0,e=t.createAnalyser(),e.minDecibels=-90,e.maxDecibels=-10,e.smoothingTimeConstant=.8,e.fftSize=4096,l=e.frequencyBinCount/16+we,i=new Uint8Array(l),t.state==="suspended"&&t.resume(),v.connect(a),v.connect(e),a.connect(t.destination),g=()=>{t==null||t.close(),v==null||v.disconnect(0),v=void 0,a==null||a.disconnect(0),a=void 0,e==null||e.disconnect(0),e=void 0,g=void 0}}),ae(()=>{a&&(a.gain.value=T.value)}),De=!0)}),Ge(()=>{g&&g()});let ft=0;const W=[],{pause:pt,resume:ht}=Ct(()=>{const D=Ne.value,xe=s.value;if(D&&!(xe!=null&&xe.paused)){const te=D.width=D.clientWidth,B=D.height=D.clientHeight,_=D.getContext("2d");if(!_)return;if(pe.value?_.clearRect(0,0,te,B):(_.fillStyle="rgb(0,0,0)",_.fillRect(0,0,te,B)),e&&l&&i){e.getByteFrequencyData(i);const P=Math.PI/12,ce=(te+B*Math.tan(P))/(l-we)-1;let be=0;for(const mt of i.slice(we)){const ke=mt/255;_.fillStyle=`rgba(255,255,255,${ke/2+.2})`,_.beginPath();const Xe=be-(1-ke)*B*Math.tan(P),Je=(1-ke)*B;_.moveTo(Xe,Je),_.lineTo(Xe+ce,Je+ce*Math.tan(P));const Qe=be-B*Math.tan(P);_.lineTo(Qe+ce/Math.cos(P)**2,B),_.lineTo(Qe,B),_.fill(),be+=ce+1}}{W.push(performance.now()),W.length>50&&W.shift(),_.fillStyle="rgb(255,255,255)";const P=`Frame: ${ft++} Width: ${te} Height: ${B} FPS: ${Math.floor(1e3/((W[W.length-1]-W[0])/W.length))}`,ze=(te-_.measureText(P).width)/2;_.fillText(P,ze,20)}}},{immediate:!1});L([y,b,S,x],()=>{y.value==="canvas"&&b.value&&S.value&&(!w.value||x.value)&&ht(),(y.value!=="canvas"||!b.value||!S.value||w.value&&!x.value)&&pt()},{immediate:!0})}return(t,a)=>(u(),r("div",{ref_key:"root",ref:Y,class:C(["root relative w-full bg-black overflow-hidden",{"h-full":k.fullHeight}]),style:J({height:k.fullHeight?void 0:`${f(Ze)}px`})},[z(n("video",{ref_key:"video",ref:s,class:"video w-full h-full focus:outline-none",playsinline:"",preload:"auto",crossorigin:f(G)?"":void 0},null,8,Wt),[[X,q.value&&(y.value==="video"||y.value==="canvas"&&pe.value)]]),n("audio",{ref_key:"audio",ref:o,class:"hidden",crossorigin:f(G)?"":void 0},null,8,Ht),y.value==="iframe"&&ye.value?(u(),r("iframe",{key:0,title:"Video Player",class:"block w-full h-full",src:ye.value,allow:"fullscreen",sandbox:"allow-scripts allow-popups-to-escape-sandbox allow-same-origin"},null,8,Lt)):U("",!0),z(n("canvas",{ref_key:"canvas",ref:Ne,class:"absolute top-0 w-full h-full"},null,512),[[X,y.value==="canvas"]]),z(n("div",{class:C(["absolute top-0 left-0 right-0 bg-black bg-opcity-75 transform transition-all ease-in-out duration-300",{"-translate-y-3/2":!j.value&&!ue.value&&ee.value}])},[n("div",Ut,[n("div",{class:C(["flex-nowrap text-white whitespace-nowrap overflow-hidden",{"ml-2":!k.item.title.startsWith("【")}]),textContent:O(k.item.title)},null,10,Ot),n("div",{onClick:a[0]||(a[0]=e=>j.value=!0)},Nt)])],2),[[X,q.value&&y.value!=="iframe"]]),z(n("div",{class:C(["absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 transform transition-all ease-in-out duration-300",{"translate-y-3/2":!j.value&&!ue.value&&ee.value}])},[n("div",Dt,[n("div",{ref_key:"progressbar",ref:V,class:"relative w-full h-1 bg-gray-600 transition-all ease-in-out"},[n("div",zt,[w.value?(u(),r("div",Xt,[(u(!0),r(de,null,ve(f(Le),(e,l)=>(u(),r("div",{key:l,class:C(["absolute h-1/2",{"bg-orange-200":e.isBuffer}]),style:J({width:`${(e.end-e.start)*100}%`,left:`${e.start*100}%`})},null,6))),128))])):U("",!0),w.value?(u(),r("div",Jt,[(u(!0),r(de,null,ve(f(tt),(e,l)=>(u(),r("div",{key:l,class:C(["absolute h-1/2",{"bg-purple-400":e.isBuffer}]),style:J({width:`${(e.end-e.start)*100}%`,left:`${e.start*100}%`})},null,6))),128))])):(u(),r("div",Qt,[(u(!0),r(de,null,ve(f(Le),(e,l)=>(u(),r("div",{key:l,class:C(["absolute h-full",{"bg-orange-200":e.isBuffer}]),style:J({width:`${(e.end-e.start)*100}%`,left:`${e.start*100}%`})},null,6))),128))]))]),n("div",{class:"absolute h-full bg-purple-600",style:J({width:`${f(at)*100}%`})},Gt,4)],512)]),n("div",Zt,[n("div",Kt,[n("div",{class:"flex",onClick:et},[f(Ke)?b.value?(u(),r("div",ea)):(u(),r("div",ta)):(u(),r("div",It))]),aa,n("div",la,[n("div",{class:"flex items-center text-2xl",onClick:a[1]||(a[1]=()=>{T.value=f(T)?0:1})},[f(T)>0?(u(),r("div",sa)):(u(),r("div",ia))]),n("div",oa,[n("div",{ref_key:"volumebar",ref:A,class:"w-16 h-1 bg-gray-600 rounded-full transition-all ease-in-out"},[n("div",{class:"relative h-full left-0 bottom-0 bg-purple-600 rounded-l-full",style:J({width:`${f(T)*100}%`})},ua,4)],512)])])]),n("div",ra,[k.disableFullscreen?U("",!0):(u(),r("span",{key:0,class:"flex",onClick:a[2]||(a[2]=(...e)=>f(qe)&&f(qe)(...e))},[f(Me)?(u(),r("div",da)):(u(),r("div",ca))])),va])])],2),[[X,q.value&&y.value!=="iframe"]]),z(n("div",{class:"absolute top-0 bottom-0 left-0 right-0",onClick:a[3]||(a[3]=e=>j.value=!1)},null,512),[[X,q.value&&y.value!=="iframe"&&j.value]]),z(n("div",{class:C(["absolute top-0 bottom-0 right-0 bg-black transform transition-all duration-300 ease-in-out overflow-hidden",{"translate-x-full":!j.value}])},[$e(St,{"enter-active-class":I.value?"transition-all duration-250 transform":"absolute top-0 transform transition-all duration-250","leave-active-class":I.value?"absolute top-0 transform transition-all duration-250":"transition-all duration-250 transform","enter-from-class":I.value?"-translate-x-full":"translate-x-full","leave-to-class":I.value?"translate-x-full":"-translate-x-full"},{default:Ce(()=>{var e;return[(u(),r("div",{key:N.value,class:"text-white w-72 overflow-x-hidden divide-y-1 divide-gray-600"},[n("div",fa,[f(K).parent&&f(K).parent in f(re)?(u(),r("div",{key:0,class:"i-uil:arrow-left absolute text-2xl align-middle",onClick:Ie})):U("",!0),n("div",{class:"text-center select-none",textContent:O((e=f(K).name)!=null?e:N.value)},null,8,pa)]),(u(!0),r(de,null,ve(f(K).items,(l,i)=>(u(),r("div",{key:i,class:C(["px-2 py-1 whitespace-pre transform transition-all ease-in-out duration-100",{"hover:bg-gray-900 cursor-pointer":"onClick"in l||"to"in l}])},[l.type==="text"?(u(),r("div",{key:0,class:C(l.class),onClick:l.onClick,textContent:O(l.text)},null,10,ha)):l.type==="sub"&&l.to in f(re)?(u(),r("div",{key:1,onClick:v=>N.value=l.to},[n("div",{class:"inline-block",textContent:O(l.text)},null,8,ya),n("div",ga,[l.rightText?(u(),r("span",{key:0,class:"text-gray-300",textContent:O(l.rightText)},null,8,_a)):U("",!0),wa])],8,ma)):l.type==="check"?(u(),Bt(f(Ft),{key:2},{default:Ce(()=>[n("div",xa,[$e(f(Vt),{class:"select-none"},{default:Ce(()=>[Mt(O(l.text),1)]),_:2},1024),$e(At,{modelValue:l.checked.value,"onUpdate:modelValue":v=>l.checked.value=v,size:"sm"},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1024)):U("",!0)],2))),128))]))]}),_:1},8,["enter-active-class","leave-active-class","enter-from-class","leave-to-class"])],2),[[X,q.value&&y.value!=="iframe"]]),!q.value&&y.value!=="iframe"?(u(),r("div",ba,[n("p",{ref_key:"logEl",ref:he,class:"whitespace-pre",textContent:O(Ve.value)},null,8,ka)])):U("",!0)],6))}});const Ta=Et($a,[["__scopeId","data-v-c6badfac"]]);export{Ta as P};
//# sourceMappingURL=Player.08f53015.js.map
