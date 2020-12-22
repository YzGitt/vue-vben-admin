import{k as t,v as e,cv as r,a,d6 as n,i,o as s,j as o,w as l}from"./index.db24b8f1.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.9edb8058.js";import{s as c}from"./index.81dc9147.js";import"./useTimeout.8adf281f.js";import"./tsxHelper.00e8ba63.js";import"./index.a831763a.js";import"./domUtils.b4ec2d0c.js";import"./index.ac876ed0.js";import{B as u,t as f}from"./data.49e66170.js";var d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=function(a,n){var i=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),a.forEach((function(e){p(t,e,r[e])}))}return t}({},a,n.attrs);return t(r,e(i,{icon:d}),null)};b.displayName="DeleteOutlined",b.inheritAttrs=!1;var m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v=function(a,n){var i=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),a.forEach((function(e){h(t,e,r[e])}))}return t}({},a,n.attrs);return t(r,e(i,{icon:m}),null)};v.displayName="PlusOutlined",v.inheritAttrs=!1;var g=a({components:{BasicTree:u,CollapseContainer:c},setup:()=>({treeData:f,actionList:[{render:t=>n(v,{class:"ml-2",onClick:()=>{}})},{render:()=>n(b)}],getRightMenuList:function(t){return[{label:"新增",handler:()=>{},icon:"bi:plus"},{label:"删除",handler:()=>{},icon:"bx:bxs-folder-open"}]}})});const j={class:"flex p-4"};g.render=function(e,r,a,n,c,u){const f=i("BasicTree"),d=i("CollapseContainer");return s(),o("div",j,[t(d,{title:"右侧操作按钮",class:"mr-4",style:{width:"33%"}},{default:l((()=>[t(f,{treeData:e.treeData,actionList:e.actionList},null,8,["treeData","actionList"])])),_:1}),t(d,{title:"右键菜单",class:"mr-4",style:{width:"33%"}},{default:l((()=>[t(f,{treeData:e.treeData,beforeRightClick:e.getRightMenuList},null,8,["treeData","beforeRightClick"])])),_:1})])};export default g;