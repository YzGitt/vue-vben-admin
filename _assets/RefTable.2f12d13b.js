import{a as e,r as i,h as t,f as o,i as s,o as n,j as a,k as l,w as c,p as r}from"./index.54b7cc7b.js";import"./xlsx.a48e520c.js";import"./index.a52d88f6.js";import"./index.a439205d.js";import"./Trigger.9f179c61.js";import"./omit.a368f9ae.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6cff96b8.js";import"./CheckOutlined.29be3015.js";import"./index.a5bb273d.js";import"./colors.5745025a.js";import"./index.10e116a5.js";import"./RightOutlined.0becd0a0.js";import"./index.39160d78.js";import"./types.c19bf052.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.eedde627.js";import"./_baseFor.f4e5f03f.js";import"./index.56208f19.js";import"./index.a172b251.js";import"./index.3d154f97.js";import"./index.48bb8c88.js";import"./UpOutlined.78f2a1da.js";import"./LeftOutlined.ec9c5e19.js";import"./index.2a5e56d5.js";import"./index.551ba04e.js";import"./index.b96a1214.js";import"./index.dfac5dac.js";import"./index.9dad5c27.js";import"./zh_CN.0242bd16.js";import"./TableAction.5cb35fa3.js";import"./index.5869ffa6.js";import"./CaretDownFilled.9914b908.js";import"./CheckOutlined.849e8bad.js";import"./CloseOutlined.2f4d26e5.js";import{s as d}from"./EditTableHeaderIcon.77d2e466.js";import"./DownOutlined.56cf5734.js";import"./FullscreenOutlined.402f7a3b.js";import"./LeftOutlined.f377cd8d.js";import"./functional.f8b4d09e.js";import"./RedoOutlined.7a1d2243.js";import"./RightOutlined.81bd46b9.js";import"./SettingOutlined.76369938.js";import"./useTimeout.8036edbf.js";import"./useDebounce.eb7ff478.js";import"./useEventListener.89e18c2c.js";import"./useBreakpoint.7a6f6445.js";import"./index.dcd2bc4f.js";import"./tsxHelper.948ab144.js";import"./index.32b7dc7d.js";import"./index.90135c93.js";import"./useForm.ba76dbfd.js";import"./index.611d4577.js";import"./useModalContext.fd3dbdef.js";import"./domUtils.745b64ab.js";import"./useFullScreen.ca67aa0c.js";import"./uuid.40269c00.js";import"./useWindowSizeFn.86d8ff28.js";import"./useExpose.5bc091f5.js";import"./index.6f8ac870.js";import{getBasicColumns as m,getBasicShortColumns as p}from"./tableData.684b235b.js";import{d as f}from"./table.38849b07.js";var u=e({components:{BasicTable:d},setup(){const e=i(null),{createMessage:s}=t();function n(){const i=o(e);if(!i)throw new Error("tableAction is null");return i}return{tableRef:e,api:f,columns:m(),changeLoading:function(){n().setLoading(!0),setTimeout((()=>{n().setLoading(!1)}),1e3)},changeColumns:function(){n().setColumns(p())},reloadTable:function(){n().setColumns(m()),n().reload({page:1})},getColumn:function(){s.info("请在控制台查看！")},getTableData:function(){s.info("请在控制台查看！")},getPagination:function(){s.info("请在控制台查看！")},setPaginationInfo:function(){n().setPagination({current:2}),n().reload()},getSelectRowList:function(){s.info("请在控制台查看！")},getSelectRowKeyList:function(){s.info("请在控制台查看！")},setSelectedRowKeyList:function(){n().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){n().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},C=r("还原"),g=r("开启loading"),x=r("更改Columns"),k=r("获取Columns"),w=r("获取表格数据"),R=r("跳转到第2页"),S={class:"mb-4"},_=r("获取选中行"),L=r("获取选中行Key"),O=r("设置选中行"),T=r("清空选中行"),h=r("获取分页信息");u.render=function(e,i,t,o,r,d){const m=s("a-button"),p=s("BasicTable");return n(),a("div",j,[l("div",b,[l(m,{class:"mr-2",onClick:e.reloadTable},{default:c((()=>[C])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.changeLoading},{default:c((()=>[g])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.changeColumns},{default:c((()=>[x])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getColumn},{default:c((()=>[k])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getTableData},{default:c((()=>[w])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:c((()=>[R])),_:1},8,["onClick"])]),l("div",S,[l(m,{class:"mr-2",onClick:e.getSelectRowList},{default:c((()=>[_])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:c((()=>[L])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:c((()=>[O])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.clearSelect},{default:c((()=>[T])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getPagination},{default:c((()=>[h])),_:1},8,["onClick"])]),l(p,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default u;