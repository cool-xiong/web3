(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-market-shop"],{"2da9":function(t,a,i){t.exports=i.p+"static/img/state3.b7ec4d10.png"},"4ece":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-7e8a7884]{padding:10px}.datalist[data-v-7e8a7884]{background-color:#fff;border-radius:4px;margin-top:10px;position:relative}.datalist .intact[data-v-7e8a7884]{text-align:center;position:absolute;border-radius:4px;width:100%;height:100%;font-size:0;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:rgba(0,0,0,.78)}.datalist .name[data-v-7e8a7884]{font-size:.9375rem;color:#333;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:5px;width:%?325?%}.datalist .price[data-v-7e8a7884]{color:#e23918;font-size:.8125rem;padding:5px}.paging[data-v-7e8a7884]{background-color:#564dfb;border:solid 1px #564dfb;margin-right:10px;border-radius:%?10?%;width:3.125rem;text-align:center;height:2rem;font-size:.875rem;line-height:2rem;color:#564dfb}',""]),t.exports=a},"882e":function(t,a,i){"use strict";i.r(a);var e=i("9076"),n=i.n(e);for(var r in e)"default"!==r&&function(t){i.d(a,t,(function(){return e[t]}))}(r);a["default"]=n.a},9076:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=i("a44e"),n={data:function(){return{page:1,totalPage:0,region_id:null,data_list:[]}},onShow:function(t){this.region_id=this.$route.query.id,uni.setNavigationBarTitle({title:this.$route.query.title}),this.init(this.page)},methods:{init:function(t){var a=this;(0,e.productlist)({page:t,region_id:this.region_id}).then((function(t){a.data_list=t.data.data_list.data,a.totalPage=Math.ceil(t.data.data_list.total/t.data.data_list.per_page)}))},clicklistxq:function(t){1==t.is_pub&&uni.navigateTo({url:"/pages/market/listdetails?id="+t.id})}}};a.default=n},"935a":function(t,a,i){"use strict";var e=i("c3c0"),n=i.n(e);n.a},c3c0:function(t,a,i){var e=i("4ece");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("44cc4e24",e,!0,{sourceMap:!1,shadowMode:!1})},cd92:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return r})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"page"},[e("v-uni-view",{staticClass:"flex"},t._l(t.totalPage,(function(a,i){return e("v-uni-view",{key:i,staticClass:"paging",style:i+1==t.page?"background-color: #564dfb;color:#fff;":"background-color: #fff",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.page=a,t.init(a)}}},[t._v(t._s(a))])})),1),e("v-uni-view",{staticClass:"flexsp",staticStyle:{"flex-wrap":"wrap"}},t._l(t.data_list,(function(a,n){return e("v-uni-view",{key:n,staticClass:"datalist",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clicklistxq(a)}}},[e("v-uni-view",{staticStyle:{"font-size":"0"}},[e("v-uni-image",{staticStyle:{width:"345rpx",height:"14.9375rem","border-radius":"4px"},attrs:{src:a.cover_img,mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"name"},[t._v(t._s(a.name))]),e("v-uni-view",{staticClass:"price"},[t._v(t._s(a.price))]),2==a.is_pub?e("v-uni-view",{staticClass:"intact"},[e("v-uni-view",{staticStyle:{height:"30%"}}),e("v-uni-image",{staticStyle:{width:"200rpx",height:"200rpx"},attrs:{src:i("2da9")}})],1):t._e()],1)})),1)],1)},r=[]},daf2:function(t,a,i){"use strict";i.r(a);var e=i("cd92"),n=i("882e");for(var r in n)"default"!==r&&function(t){i.d(a,t,(function(){return n[t]}))}(r);i("935a");var s,o=i("f0c5"),c=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"7e8a7884",null,!1,e["a"],s);a["default"]=c.exports}}]);