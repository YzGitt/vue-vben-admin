import{a as e,r,Q as t,o,j as a}from"./index.db24b8f1.js";import"./xlsx.a48e520c.js";import"./useTimeout.8adf281f.js";import{u as i}from"./useECharts.1e04feef.js";import"./useDebounce.8dbcf364.js";import"./useEventListener.e8f38262.js";import"./useBreakpoint.ec70ff65.js";import{b as s}from"./props.c31746e0.js";var n=e({props:s,setup(){const e=r(null),{setOptions:o,echarts:a}=i(e);return t((()=>{o({tooltip:{trigger:"axis",padding:3,backgroundColor:"rgba(0, 0, 0, .6)",borderColor:"#777",borderWidth:1},legend:{show:!1},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,axisTick:{inside:!0},data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},yAxis:{type:"value",axisTick:{inside:!0}},series:[{name:"产品一",type:"line",itemStyle:{color:"#5B8FF9"},areaStyle:{color:new a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#5B8FF9"},{offset:1,color:"rgba(118,168,248, 0)"}],!1),shadowColor:"rgba(118,168,248, 0.9)",shadowBlur:20},data:[134,330,132,101,90,230,210,150,230,400,232,234],animationDuration:3e3}]})})),{chartRef:e}}});n.render=function(e,r,t,i,s,n){return o(),a("div",{ref:"chartRef",style:{height:e.height,width:e.width}},null,4)};export default n;