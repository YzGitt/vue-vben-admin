let s=document.createElement("style");s.innerHTML=".scroll-wrap[data-v-6aa17979]{width:50%;height:300px;background:#fff}",document.head.appendChild(s);import{a,r as l,f as o,cU as r,cV as t,i as e,o as c,j as n,k as i,ad as d,aH as p,n as m,aR as f,p as u}from"./index.db24b8f1.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import{A as j}from"./index.b952661d.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.9edb8058.js";import{s as x,S as b}from"./index.81dc9147.js";import"./useTimeout.8adf281f.js";import"./tsxHelper.00e8ba63.js";import"./index.a831763a.js";import"./domUtils.b4ec2d0c.js";import"./index.ac876ed0.js";var C=a({components:{CollapseContainer:x,ScrollContainer:b,Alert:j},setup(){const s=l(null),a=()=>{const a=o(s);if(!a)throw new Error("scroll is Null");return a};return{scrollTo:function(s){a().scrollTo(s)},scrollRef:s,scrollBottom:function(){a().scrollBottom()}}}});const _=f("data-v-6aa17979");r("data-v-6aa17979");const v={class:"p-4"},T={class:"my-4"},k=u("滚动到100px位置"),h=u("滚动到800px位置"),y=u("滚动到顶部"),w=u("滚动到底部"),g={class:"scroll-wrap"},A={class:"p-3"};t();const S=_(((s,a,l,o,r,t)=>{const f=e("Alert"),u=e("a-button"),j=e("ScrollContainer");return c(),n("div",v,[i(f,{message:"抽取el-scrollbar，并对其进行扩展,滚动条美化,适用于各个浏览器",type:"info"}),i("div",T,[i(u,{onClick:a[1]||(a[1]=a=>s.scrollTo(100)),class:"mr-2"},{default:_((()=>[k])),_:1}),i(u,{onClick:a[2]||(a[2]=a=>s.scrollTo(800)),class:"mr-2"},{default:_((()=>[h])),_:1}),i(u,{onClick:a[3]||(a[3]=a=>s.scrollTo(0)),class:"mr-2"},{default:_((()=>[y])),_:1}),i(u,{onClick:a[4]||(a[4]=a=>s.scrollBottom()),class:"mr-2"},{default:_((()=>[w])),_:1})]),i("div",g,[i(j,{class:"mt-4",ref:"scrollRef"},{default:_((()=>[i("ul",A,[(c(),n(d,null,p(100,(s=>i("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},m(s),1))),64))])])),_:1},512)])])}));C.render=S,C.__scopeId="data-v-6aa17979";export default C;