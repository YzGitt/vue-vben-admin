let e=document.createElement("style");e.innerHTML=".step-form-content[data-v-234603f7]{padding:24px;background:#fff}.step-form-form[data-v-234603f7]{width:750px;margin:0 auto}",document.head.appendChild(e);import{a as t,r as i,b as n,a7 as r,cU as o,cV as s,i as a,o as p,j as d,k as m,aI as c,aJ as l,m as u,aR as f,p as j}from"./index.db24b8f1.js";import"./xlsx.a48e520c.js";import"./index.2d955445.js";import"./Trigger.303d467b.js";import"./omit.820c82e3.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.68db0f8a.js";import"./CheckOutlined.b08be770.js";import"./index.535d4427.js";import"./colors.692cdd84.js";import"./RightOutlined.64b48e54.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.9edb8058.js";import"./index.28b15714.js";import"./index.a172b251.js";import"./index.d1c715e4.js";import"./UpOutlined.611d51a7.js";import"./index.118a37e3.js";import"./index.9daecf3c.js";import"./index.5c08980b.js";import"./index.b02f2162.js";import"./useDebounce.8dbcf364.js";import"./useEventListener.e8f38262.js";import"./useBreakpoint.ec70ff65.js";import"./tsxHelper.00e8ba63.js";import"./index.ac876ed0.js";import"./index.53d2c82a.js";import"./index.c5a5f0b0.js";import"./useForm.ca9cb1ec.js";import"./data.cf9202d1.js";import x from"./Step1.04411432.js";import S from"./Step2.e6655090.js";import b from"./Step3.1b4d3c76.js";var v=t({components:{Step1:x,Step2:S,Step3:b},setup(){const e=i(0),t=n({initSetp2:!1,initSetp3:!1});return{current:e,handleStep1Next:function(i){e.value++,t.initSetp2=!0},handleStep2Next:function(i){e.value++,t.initSetp3=!0},handleRedo:function(){e.value=0,t.initSetp2=!1,t.initSetp3=!1},handleStepPrev:function(){e.value--},...r(t)}}});const h=f("data-v-234603f7");o("data-v-234603f7");const g=j(" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。 "),N={class:"m-5 step-form-content"},k={class:"step-form-form"},R={class:"mt-5"};s();const _=h(((e,t,i,n,r,o)=>{const s=a("a-page-header"),f=a("a-step"),j=a("a-steps"),x=a("Step1"),S=a("Step2"),b=a("Step3");return p(),d("div",null,[m(s,{title:"分步表单",ghost:!1},{default:h((()=>[g])),_:1}),m("div",N,[m("div",k,[m(j,{current:e.current},{default:h((()=>[m(f,{title:"填写转账信息"}),m(f,{title:"确认转账信息"}),m(f,{title:"完成"})])),_:1},8,["current"])]),m("div",R,[c(m(x,{onNext:e.handleStep1Next},null,8,["onNext"]),[[l,0===e.current]]),e.initSetp2?c((p(),d(S,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[l,1===e.current]]):u("v-if",!0),e.initSetp3?c((p(),d(b,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[l,2===e.current]]):u("v-if",!0)])])])}));v.render=_,v.__scopeId="data-v-234603f7";export default v;