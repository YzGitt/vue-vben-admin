import{a as e,i as l,o,j as i,k as s,w as t,p as n}from"./index.dc2474c5.js";import"./xlsx.a48e520c.js";import"./index.42b663c7.js";import"./omit.b6891b40.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.483b4322.js";import"./CheckOutlined.443a507c.js";import{s as a}from"./index.51354d44.js";import"./index.24bd1cf1.js";import"./colors.36c97d94.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.954ddf05.js";import"./index.0316d2b5.js";import"./UpOutlined.a4448786.js";import"./DownOutlined.16ed644d.js";import"./index.ff51f9f3.js";import"./index.0ed8c2eb.js";import"./index.4b77d643.js";import{s as d}from"./index.c7a3deea.js";import"./CloseOutlined.b1e89784.js";import"./index.45a74137.js";import"./index.aa029d51.js";import"./LeftOutlined.9fba55b2.js";import"./functional.eee1b379.js";import"./RightOutlined.69404973.js";import"./useTimeout.ece0018d.js";import"./useDebounce.6bfe7d92.js";import"./useEventListener.242996ad.js";import"./useBreakpoint.0182c2b6.js";import"./resizeEvent.4ed1410d.js";import"./domUtils.7f740ab5.js";import"./useExpose.d292bc72.js";import"./animation.580f6c3e.js";import"./index.779102c9.js";import"./index.177e3769.js";import"./useWindowSizeFn.b69303c2.js";import"./uuid.40269c00.js";import"./download.5de813c4.js";import{u as p}from"./useForm.423dbb98.js";const r=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"字段4必填"}]:[],componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},labelWidth:200}],c=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"同步f2的值为f1",onChange:l=>{e.f2=l.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e,tableAction:l})=>({placeholder:"值改变时执行查询,查看控制台",onChange:async()=>{const{validate:l}=e;await l()}})}];var m=e({components:{BasicForm:a,CollapseContainer:d},setup(){const[e,{setProps:l,updateSchema:o,appendSchemaByField:i,removeSchemaByFiled:s}]=p({labelWidth:120,schemas:r,actionColOptions:{span:24}}),[t]=p({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:e,register1:t,schemas:r,setProps:l,changeLabel3:function(){o({field:"field3",label:"字段3 New"})},changeLabel34:function(){o([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])},appendField:function(){i({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")},deleteField:function(){s("field11")}}}});const f={class:"m-4"},b={class:"mb-4"},u=n("更改字段3label"),j=n("同时更改字段3,4label"),h=n("往字段3后面插入字段10"),P=n("删除字段11");m.render=function(e,n,a,d,p,r){const c=l("a-button"),m=l("BasicForm"),g=l("CollapseContainer");return o(),i("div",f,[s("div",b,[s(c,{onClick:e.changeLabel3,class:"mr-2"},{default:t((()=>[u])),_:1},8,["onClick"]),s(c,{onClick:e.changeLabel34,class:"mr-2"},{default:t((()=>[j])),_:1},8,["onClick"]),s(c,{onClick:e.appendField,class:"mr-2"},{default:t((()=>[h])),_:1},8,["onClick"]),s(c,{onClick:e.deleteField,class:"mr-2"},{default:t((()=>[P])),_:1},8,["onClick"])]),s(g,{title:"动态表单示例,动态根据表单内其他值改变"},{default:t((()=>[s(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),s(g,{class:"mt-5",title:"componentProps动态改变"},{default:t((()=>[s(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])};export default m;