import{a as e,i as l,o,j as i,k as s,w as t,p as n}from"./index.db24b8f1.js";import"./xlsx.a48e520c.js";import"./index.2d955445.js";import"./Trigger.303d467b.js";import"./omit.820c82e3.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.68db0f8a.js";import"./CheckOutlined.b08be770.js";import{s as a}from"./index.535d4427.js";import"./colors.692cdd84.js";import"./RightOutlined.64b48e54.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.9edb8058.js";import"./index.28b15714.js";import"./index.a172b251.js";import"./index.d1c715e4.js";import"./UpOutlined.611d51a7.js";import"./index.118a37e3.js";import"./index.9daecf3c.js";import"./index.5c08980b.js";import"./index.b02f2162.js";import{s as p}from"./index.81dc9147.js";import"./useTimeout.8adf281f.js";import"./useDebounce.8dbcf364.js";import"./useEventListener.e8f38262.js";import"./useBreakpoint.ec70ff65.js";import"./tsxHelper.00e8ba63.js";import"./index.a831763a.js";import"./domUtils.b4ec2d0c.js";import"./index.ac876ed0.js";import"./index.53d2c82a.js";import"./index.c5a5f0b0.js";import{u as d}from"./useForm.ca9cb1ec.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"字段4必填"}]:[],componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},labelWidth:200}],r=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"同步f2的值为f1",onChange:l=>{e.f2=l.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e,tableAction:l})=>({placeholder:"值改变时执行查询,查看控制台",onChange:async()=>{const{validate:l}=e;await l()}})}];var m=e({components:{BasicForm:a,CollapseContainer:p},setup(){const[e,{setProps:l,updateSchema:o,appendSchemaByField:i,removeSchemaByFiled:s}]=d({labelWidth:120,schemas:c,actionColOptions:{span:24}}),[t]=d({labelWidth:120,schemas:r,actionColOptions:{span:24}});return{register:e,register1:t,schemas:c,setProps:l,changeLabel3:function(){o({field:"field3",label:"字段3 New"})},changeLabel34:function(){o([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])},appendField:function(){i({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")},deleteField:function(){s("field11")}}}});const f={class:"m-4"},b={class:"mb-4"},u=n("更改字段3label"),j=n("同时更改字段3,4label"),h=n("往字段3后面插入字段10"),P=n("删除字段11");m.render=function(e,n,a,p,d,c){const r=l("a-button"),m=l("BasicForm"),g=l("CollapseContainer");return o(),i("div",f,[s("div",b,[s(r,{onClick:e.changeLabel3,class:"mr-2"},{default:t((()=>[u])),_:1},8,["onClick"]),s(r,{onClick:e.changeLabel34,class:"mr-2"},{default:t((()=>[j])),_:1},8,["onClick"]),s(r,{onClick:e.appendField,class:"mr-2"},{default:t((()=>[h])),_:1},8,["onClick"]),s(r,{onClick:e.deleteField,class:"mr-2"},{default:t((()=>[P])),_:1},8,["onClick"])]),s(g,{title:"动态表单示例,动态根据表单内其他值改变"},{default:t((()=>[s(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),s(g,{class:"mt-5",title:"componentProps动态改变"},{default:t((()=>[s(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])};export default m;