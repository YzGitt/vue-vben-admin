import{a as e,i as r,o,j as i,k as s,w as t,p as a}from"./index.db24b8f1.js";import"./xlsx.a48e520c.js";import"./index.2d955445.js";import"./Trigger.303d467b.js";import"./omit.820c82e3.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.68db0f8a.js";import"./CheckOutlined.b08be770.js";import"./index.535d4427.js";import{A as n}from"./index.b952661d.js";import"./colors.692cdd84.js";import"./RightOutlined.64b48e54.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.9edb8058.js";import"./index.28b15714.js";import"./index.a172b251.js";import"./index.d1c715e4.js";import"./UpOutlined.611d51a7.js";import"./index.118a37e3.js";import"./index.9daecf3c.js";import"./index.5c08980b.js";import"./index.b02f2162.js";import"./useDebounce.8dbcf364.js";import"./useEventListener.e8f38262.js";import"./useBreakpoint.ec70ff65.js";import"./tsxHelper.00e8ba63.js";import"./index.ac876ed0.js";import{u as p}from"./index.abf33e7c.js";import m from"./Drawer1.a4f05f8f.js";import c from"./Drawer2.c073611a.js";import d from"./Drawer3.67ae4859.js";import"./index.53d2c82a.js";import"./index.c5a5f0b0.js";import"./useForm.ca9cb1ec.js";import l from"./Drawer4.21e6b596.js";import w from"./Drawer5.f9232bda.js";var D=e({components:{Alert:n,Drawer1:m,Drawer2:c,Drawer3:d,Drawer4:l,Drawer5:w},setup(){const[e,{openDrawer:r,setDrawerProps:o}]=p(),[i,{openDrawer:s}]=p(),[t,{openDrawer:a}]=p(),[n,{openDrawer:m}]=p(),[c,{openDrawer:d}]=p();return{register1:e,openDrawer1:r,register2:i,openDrawer2:s,register3:t,openDrawer3:a,register4:n,register5:c,openDrawer5:d,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),o({loading:!0}),setTimeout((()=>{o({loading:!1})}),2e3)}}}});const f={class:"px-10 py-4"},j=a("打开Drawer"),g=a("打开Drawer"),u=a("打开Drawer"),b=a("打开Drawer并传递数据"),x=a("打开详情Drawer");D.render=function(e,a,n,p,m,c){const d=r("Alert"),l=r("a-button"),w=r("Drawer1"),D=r("Drawer2"),y=r("Drawer3"),k=r("Drawer4"),R=r("Drawer5");return o(),i("div",f,[s(d,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:t((()=>[j])),_:1},8,["onClick"]),s(d,{message:"内外同时同时显示隐藏","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.openDrawer2},{default:t((()=>[g])),_:1},8,["onClick"]),s(d,{message:"自适应高度/显示footer","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.openDrawer3},{default:t((()=>[u])),_:1},8,["onClick"]),s(d,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[b])),_:1},8,["onClick"]),s(d,{message:"详情页模式","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.openDrawer5},{default:t((()=>[x])),_:1},8,["onClick"]),s(w,{onRegister:e.register1},null,8,["onRegister"]),s(D,{onRegister:e.register2},null,8,["onRegister"]),s(y,{onRegister:e.register3},null,8,["onRegister"]),s(k,{onRegister:e.register4},null,8,["onRegister"]),s(R,{onRegister:e.register5},null,8,["onRegister"])])};export default D;