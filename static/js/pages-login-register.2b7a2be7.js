(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-register"],{"0c54":function(e,t,n){var o=n("c758");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("27af675b",o,!0,{sourceMap:!1,shadowMode:!1})},"17d4":function(e,t,n){"use strict";var o=n("0c54"),i=n.n(o);i.a},4247:function(e,t,n){"use strict";n.r(t);var o=n("bbfe"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},"4b05":function(e,t,n){"use strict";n.r(t);var o=n("e730"),i=n("4247");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("17d4");var s,r=n("f0c5"),c=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"9ed850e2",null,!1,o["a"],s);t["default"]=c.exports},bbfe:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("a44e"),i={data:function(){return{nickname:null,mobile_phone:null,code:null,password:null,repeat_password:null,avatar:null,tips:"",sticket:null}},onLoad:function(){},methods:{clickimage:function(){var e=this;this.$common.imageupload().then((function(t){e.avatar=t.url}))},clicklogin:function(){this.avatar?this.nickname?this.mobile_phone?this.code?this.password||this.repeat_password?this.password===this.repeat_password?(0,o.mobileRegisterNew)({nickname:this.nickname,mobile_phone:this.mobile_phone,code:this.code,password:this.password,repeat_password:this.repeat_password,avatar:this.avatar}).then((function(e){uni.showModal({title:"提示",content:"账号注册成功，去登录",showCancel:!1,success:function(e){e.confirm&&uni.navigateTo({url:"/pages/login/login"})}})})):wx.showToast({title:"请确定密码是否一致",icon:"none",duration:2e3}):wx.showToast({title:"请输入密码",icon:"none",duration:2e3}):wx.showToast({title:"请输入验证码",icon:"none",duration:2e3}):wx.showToast({title:"请输入手机号",icon:"none",duration:2e3}):wx.showToast({title:"请输入昵称",icon:"none",duration:2e3}):wx.showToast({title:"请输入上传头像",icon:"none",duration:2e3})},agreement:function(e){uni.navigateTo({url:"/pages/login/agreement?id="+e})},codeChange:function(e){this.tips=e},validatePhoneNumber:function(e){var t=/^1[3456789]\d{9}$/;return t.test(e)},getCode:function(){var e=this;this.validatePhoneNumber(this.mobile_phone)?this.$refs.uCode.canGetCode&&(0,o.sendCode)({mobile_phone:this.mobile_phone}).then((function(t){uni.$u.toast("验证码已发送"),e.$refs.uCode.start()})).catch((function(e){uni.$u.toast("验证码发送失败")})):wx.showToast({title:"请输入手机号",icon:"none",duration:2e3})}}};t.default=i},c758:function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-9ed850e2]{background-color:#fff;padding:10px;height:calc(100vh - 64px)}.login[data-v-9ed850e2]{background-color:#564dfb;font-size:1rem;color:#fff;line-height:2.6rem;border-radius:5px;text-align:center;margin-top:3.75rem}.loginbot[data-v-9ed850e2]{font-size:16px;margin-top:10px}.loginbot .register[data-v-9ed850e2]{color:#564dfb}.udemoblocktitle[data-v-9ed850e2]{font-size:14px;color:#333;margin:5px 0}.udemoblock[data-v-9ed850e2]{margin-top:10px}',""]),e.exports=t},e730:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var o={uIcon:n("95f3").default,"u-Input":n("8801").default,uInput:n("1b89").default,uCode:n("87a2").default,uButton:n("fea8").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticStyle:{margin:"20px 20px 40px 20px"}},[n("v-uni-view",{staticStyle:{margin:"auto",width:"7rem",height:"7rem"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickimage()}}},[e.avatar?n("v-uni-image",{staticStyle:{width:"7rem",height:"7rem"},attrs:{src:e.avatar}}):n("v-uni-view",{staticStyle:{"background-color":"#f4f5f7",width:"7rem",height:"7rem",display:"flex","justify-content":"center","align-items":"center"}},[n("u-icon",{attrs:{name:"photo",color:"#D3D4D6",size:"28"}})],1)],1)],1),n("v-uni-view",{staticClass:"udemoblock"},[n("v-uni-view",{staticClass:"udemoblocktitle"},[e._v("昵称")]),n("v-uni-view",{staticClass:"udemoblockcontent"},[n("u--input",{attrs:{placeholder:"请输入昵称",border:"surround",clearable:!0},model:{value:e.nickname,callback:function(t){e.nickname=t},expression:"nickname"}})],1)],1),n("v-uni-view",{staticClass:"udemoblock"},[n("v-uni-view",{staticClass:"udemoblocktitle"},[e._v("手机号 +86")]),n("v-uni-view",{staticClass:"udemoblockcontent"},[n("u--input",{attrs:{placeholder:"请输入手机号码",border:"surround",type:"number",maxlength:11,clearable:!0},model:{value:e.mobile_phone,callback:function(t){e.mobile_phone=t},expression:"mobile_phone"}})],1)],1),n("v-uni-view",{staticClass:"udemoblock"},[n("v-uni-view",{staticClass:"udemoblocktitle"},[e._v("验证码")]),n("v-uni-view",{staticClass:"udemoblockcontent"},[n("u-input",{attrs:{placeholder:"请输入验证码",border:"surround",type:"number",maxlength:6,clearable:!0},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},[n("template",{slot:"suffix"},[n("u-code",{ref:"uCode",attrs:{seconds:"60",changeText:"X秒重新获取"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.codeChange.apply(void 0,arguments)}}}),n("u-button",{staticStyle:{"background-color":"#564DFB",color:"#fff",border:"1px solid #564DFB"},attrs:{text:e.tips,size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}}})],1)],2)],1)],1),n("v-uni-view",{staticClass:"udemoblock"},[n("v-uni-view",{staticClass:"udemoblocktitle"},[e._v("密码")]),n("v-uni-view",{staticClass:"udemoblockcontent"},[n("u--input",{attrs:{placeholder:"请输入密码",border:"surround",clearable:!0,password:!0},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),n("v-uni-view",{staticClass:"udemoblock"},[n("v-uni-view",{staticClass:"udemoblocktitle"},[e._v("确认密码")]),n("v-uni-view",{staticClass:"udemoblockcontent"},[n("u--input",{attrs:{placeholder:"请输入确认密码",border:"surround",clearable:!0,password:!0},model:{value:e.repeat_password,callback:function(t){e.repeat_password=t},expression:"repeat_password"}})],1)],1),n("v-uni-view",{staticClass:"login",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clicklogin.apply(void 0,arguments)}}},[e._v("立即注册")])],1)},a=[]}}]);