import{k as e,v as t,cv as r,a as n,at as o,i as l,o as a,j as c}from"./index.db24b8f1.js";import"./xlsx.a48e520c.js";import{D as i}from"./DoubleRightOutlined.e2cc5e22.js";var u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"}}]},name:"double-left",theme:"outlined"};function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(n,o){var l=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},n,o.attrs);return e(r,t(l,{icon:u}),null)};f.displayName="DoubleLeftOutlined",f.inheritAttrs=!1;var b=n({name:"SiderTrigger",components:{DoubleRightOutlined:i,DoubleLeftOutlined:f},setup(){const{getCollapsed:e}=o();return{getCollapsed:e}}});b.render=function(e,t,r,n,o,i){const u=l("DoubleRightOutlined"),s=l("DoubleLeftOutlined");return e.getCollapsed?(a(),c(u,{key:0})):(a(),c(s,{key:1}))};export default b;