let e=document.createElement("style");e.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}.custom-enter{opacity:0;transform:scale(.4) translate(100%)}.custom-enter-to{opacity:1}.custom-enter-active{position:absolute;top:0;width:100%;transition:.5s}.custom-leave{opacity:1}.custom-leave-to{opacity:0;transform:scale(.4) translate(-100%)}.custom-leave-active{transition:.5s}",document.head.appendChild(e);import{a as t,i as a,o,j as s,k as i,w as n}from"./index.db24b8f1.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.68db0f8a.js";import{A as r}from"./index.b952661d.js";import"./RightOutlined.64b48e54.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.9edb8058.js";import"./index.8afb32ee.js";import"./UpOutlined.611d51a7.js";import"./LeftOutlined.89d256a7.js";import"./index.6ff03e1e.js";import{L as m,a as d}from"./index.81dc9147.js";import"./useTimeout.8adf281f.js";import"./tsxHelper.00e8ba63.js";import"./index.a831763a.js";import"./domUtils.b4ec2d0c.js";import"./index.ac876ed0.js";import p from"./TargetContent.aba4e67f.js";var l=t({components:{LazyContainer:m,TargetContent:p,Skeleton:d,Alert:r},setup:()=>({})});const c={class:"p-4 lazy-base-demo"},u={class:"lazy-base-demo-wrap"},f=i("h1",null,"向下滚动",-1),b={class:"lazy-base-demo-box"};l.render=function(e,t,r,m,d,p){const l=a("Alert"),x=a("TargetContent"),j=a("LazyContainer");return o(),s("div",c,[i(l,{message:"自定义动画",description:"懒加载组件显示动画",type:"info","show-icon":""}),i("div",u,[f,i("div",b,[i(j,{transitionName:"custom"},{default:n((()=>[i(x)])),_:1})])])])};export default l;