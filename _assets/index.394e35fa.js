import{dc as e,c as s,a as i,h as o,i as r,o as a,j as t,k as n}from"./index.db24b8f1.js";import"./xlsx.a48e520c.js";import"./index.2d955445.js";import"./Trigger.303d467b.js";import"./omit.820c82e3.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.68db0f8a.js";import"./CheckOutlined.b08be770.js";import{B as p,s as d}from"./index.535d4427.js";import"./colors.692cdd84.js";import"./RightOutlined.64b48e54.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.9edb8058.js";import"./index.28b15714.js";import"./index.a172b251.js";import"./index.d1c715e4.js";import"./UpOutlined.611d51a7.js";import"./index.118a37e3.js";import"./index.9daecf3c.js";import"./index.5c08980b.js";import"./index.b02f2162.js";import"./useDebounce.8dbcf364.js";import"./useEventListener.e8f38262.js";import"./useBreakpoint.ec70ff65.js";import"./tsxHelper.00e8ba63.js";import"./index.ac876ed0.js";import"./index.53d2c82a.js";import"./index.c5a5f0b0.js";import{u as m}from"./useForm.ca9cb1ec.js";const{uploadUrl:c=""}=s();function l(s,i){return e.uploadFile({url:c,onUploadProgress:i},s)}const j=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:l}}];var u=i({components:{BasicUpload:p,BasicForm:d},setup(){const{createMessage:e}=o(),[s]=m({labelWidth:120,schemas:j,actionColOptions:{span:16}});return{handleChange:s=>{e.info(`已上传文件${JSON.stringify(s)}`)},uploadApi:l,register:s}}});const b={class:"p-4"};u.render=function(e,s,i,o,p,d){const m=r("a-alert"),c=r("BasicUpload"),l=r("BasicForm");return a(),t("div",b,[n(m,{message:"基础示例",class:"my-5"}),n(c,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi},null,8,["onChange","api"]),n(m,{message:"嵌入表单,加入表单校验",class:"my-5"}),n(l,{onRegister:e.register},null,8,["onRegister"])])};export default u;