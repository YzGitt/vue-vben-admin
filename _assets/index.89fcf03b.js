let a=document.createElement("style");a.innerHTML=".account-center-col[data-v-efaad362]:not(:last-child){padding:0 10px}.account-center-col[data-v-efaad362]:not(:last-child):not(:last-child){border-right:1px dashed #cecece}.account-center-top[data-v-efaad362]{padding:10px;margin:16px 16px 12px;background:#fff;border-radius:3px}.account-center-top__avatar[data-v-efaad362]{text-align:center}.account-center-top__avatar img[data-v-efaad362]{border-radius:50%}.account-center-top__avatar span[data-v-efaad362]{display:block;font-size:20px;font-weight:500}.account-center-top__avatar div[data-v-efaad362]{margin-top:3px;font-size:12px}.account-center-top__detail[data-v-efaad362]{padding-left:20px;margin-top:15px}.account-center-top__team-item[data-v-efaad362]{display:inline-block;padding:4px 24px}.account-center-top__team span[data-v-efaad362]{margin-left:3px}.account-center-bottom[data-v-efaad362]{padding:10px;margin:0 16px 16px;background:#fff;border-radius:3px}",document.head.appendChild(a);import{a as t,cU as e,cV as s,i as o,o as i,j as d,k as n,ad as r,aH as c,aR as l,p,n as f,dd as m}from"./index.db24b8f1.js";import"./xlsx.a48e520c.js";import"./index.2d955445.js";import"./Trigger.303d467b.js";import"./omit.820c82e3.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.68db0f8a.js";import"./CheckOutlined.b08be770.js";import"./colors.692cdd84.js";import"./RightOutlined.64b48e54.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.9edb8058.js";import{T as u}from"./index.8afb32ee.js";import"./UpOutlined.611d51a7.js";import"./LeftOutlined.89d256a7.js";import"./index.6ff03e1e.js";import{T as x}from"./index.9daecf3c.js";import"./index.30457827.js";import"./zh_CN.0242bd16.js";import"./index.f5d7740c.js";import{s as _}from"./index.81dc9147.js";import"./useTimeout.8adf281f.js";import"./tsxHelper.00e8ba63.js";import"./index.a831763a.js";import"./domUtils.b4ec2d0c.js";import"./index.ac876ed0.js";import{_ as j}from"./header.0299ae16.js";import{I as b}from"./index.53d2c82a.js";import{tags as v,teams as g,details as C,achieveList as h}from"./data.1c6ef02f.js";import T from"./Application.71506c07.js";import k from"./Article.af4f270e.js";import y from"./Project.76e38032.js";var $=t({components:{CollapseContainer:_,Icon:b,Tag:x,Tabs:u,TabPane:u.TabPane,Article:k,Application:T,Project:y},setup:()=>({prefixCls:"account-center",headerImg:j,tags:v,teams:g,details:C,achieveList:h})});const I=l("data-v-efaad362");e("data-v-efaad362");const A=n("span",null,"Serati Ma",-1),O=n("div",null,"海纳百川，有容乃大",-1);s();const P=I(((a,t,e,s,l,u)=>{const x=o("a-col"),_=o("Icon"),j=o("a-row"),b=o("Tag"),v=o("CollapseContainer"),g=o("TabPane"),C=o("Tabs");return i(),d("div",{class:a.prefixCls},[n(j,{class:`${a.prefixCls}-top`},{default:I((()=>[n(x,{span:9,class:`${a.prefixCls}-col`},{default:I((()=>[n(j,null,{default:I((()=>[n(x,{span:8},{default:I((()=>[n("div",{class:`${a.prefixCls}-top__avatar`},[n("img",{width:"70",src:a.headerImg},null,8,["src"]),A,O],2)])),_:1}),n(x,{span:16},{default:I((()=>[n("div",{class:`${a.prefixCls}-top__detail`},[(i(!0),d(r,null,c(a.details,((a,t)=>(i(),d("p",{key:t},[n(_,{icon:a.icon},null,8,["icon"]),p(" "+f(a.title),1)])))),128))],2)])),_:1})])),_:1})])),_:1},8,["class"]),n(x,{span:7,class:`${a.prefixCls}-col`},{default:I((()=>[n(v,{title:"标签",canExpan:!1},{default:I((()=>[(i(!0),d(r,null,c(a.tags,((a,t)=>(i(),d(b,{key:t,class:"mb-2"},{default:I((()=>[p(f(a),1)])),_:2},1024)))),128))])),_:1})])),_:1},8,["class"]),n(x,{span:8,class:`${a.prefixCls}-col`},{default:I((()=>[n(v,{class:`${a.prefixCls}-top__team`,title:"团队",canExpan:!1},{default:I((()=>[(i(!0),d(r,null,c(a.teams,((t,e)=>(i(),d("div",{key:e,class:`${a.prefixCls}-top__team-item`},[n(_,{icon:t.icon,color:t.color},null,8,["icon","color"]),n("span",null,f(t.title),1)],2)))),128))])),_:1},8,["class"])])),_:1},8,["class"])])),_:1},8,["class"]),n("div",{class:`${a.prefixCls}-bottom`},[n(C,null,{default:I((()=>[(i(!0),d(r,null,c(a.achieveList,(a=>(i(),d(g,{key:a.key,tab:a.name},{default:I((()=>[(i(),d(m(a.component)))])),_:2},1032,["tab"])))),128))])),_:1})],2)],2)}));$.render=P,$.__scopeId="data-v-efaad362";export default $;