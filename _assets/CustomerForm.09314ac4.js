import{a as e,d6 as s,ac as i,h as o,i as t,o as r,j as n,k as a,w as d}from"./index.db24b8f1.js";import"./xlsx.a48e520c.js";import"./index.2d955445.js";import"./Trigger.303d467b.js";import"./omit.820c82e3.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.68db0f8a.js";import"./CheckOutlined.b08be770.js";import{s as p}from"./index.535d4427.js";import"./colors.692cdd84.js";import"./RightOutlined.64b48e54.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.9edb8058.js";import"./index.28b15714.js";import"./index.a172b251.js";import"./index.d1c715e4.js";import"./UpOutlined.611d51a7.js";import"./index.118a37e3.js";import"./index.9daecf3c.js";import"./index.5c08980b.js";import"./index.b02f2162.js";import{s as l}from"./index.81dc9147.js";import"./useTimeout.8adf281f.js";import"./useDebounce.8dbcf364.js";import"./useEventListener.e8f38262.js";import"./useBreakpoint.ec70ff65.js";import"./tsxHelper.00e8ba63.js";import"./index.a831763a.js";import"./domUtils.b4ec2d0c.js";import"./index.ac876ed0.js";import"./index.53d2c82a.js";import"./index.c5a5f0b0.js";import{u as m}from"./useForm.ca9cb1ec.js";const c=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>s(i,{placeholder:"请输入",value:e[o],onChange:s=>{e[o]=s.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var u=e({components:{BasicForm:p,CollapseContainer:l},setup(){const{createMessage:e}=o(),[s,{setProps:i}]=m({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:s,schemas:c,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:i}}});const f={class:"m-4"};u.render=function(e,s,i,o,p,l){const m=t("a-input"),c=t("BasicForm"),u=t("CollapseContainer");return r(),n("div",f,[a(u,{title:"自定义表单"},{default:d((()=>[a(c,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:d((({model:e,field:s})=>[a(m,{value:e[s],"onUpdate:value":i=>e[s]=i,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])};export default u;