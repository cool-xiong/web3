(function(e){function n(n){for(var r,i,u=n[0],s=n[1],c=n[2],l=0,p=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(n);while(p.length)p.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,i=1;i<t.length;i++){var s=t[i];0!==a[s]&&(r=!1)}r&&(o.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},a={index:0},o=[];function i(e){return u.p+"static/js/"+({"pages-index-index":"pages-index-index"}[e]||e)+"."+{"pages-index-index":"3dbea234"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=a[e]=[n,r]}));n.push(t[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var c=new Error;o=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,t[1](c)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="./",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var d=c;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("fdbcc")},1:function(e,n){},2:function(e,n){},2557:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},o=[]},3:function(e,n){},3073:function(e,n,t){"use strict";t.r(n);var r=t("689b"),a=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=a.a},4:function(e,n){},"5c3a":function(e,n,t){"use strict";var r=t("4ea4");t("d3b7"),t("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("96cf");var a=r(t("1da1")),o=r(t("d4ec")),i=r(t("bee2")),u=r(t("2909")),s=r(t("5850")),c=t("2921"),l=r(t("6d9f")),d=(0,u.default)(l.default),p="0x55d398326f99059fF775485246999027B3197955",f=function(){function e(){(0,o.default)(this,e),this.address="",this.bnbBalance=0,this.usdtBalance=0}return(0,i.default)(e,[{key:"initializeWeb3",value:function(){return new Promise((function(e,n){window.ethereum?(window.web3=new s.default(window.ethereum),window.ethereum.enable().then((function(){window.web3.eth.net.isListening().then((function(){e(!0),console.log("已连接到币安链")})).catch((function(){console.error("未连接到币安链，请切换网络"),n()}))}))):console.error("未检测到MetaMask插件，请安装并登录MetaMask")}))}},{key:"getAddress",value:function(){var e=this;return new Promise((function(n,t){if(window.ethereum){var r=new s.default(window.ethereum);r.eth.getAccounts().then((function(t){e.address=t[0],n(e.address)}))}}))}},{key:"getBnbBalance",value:function(){var e=this;return new Promise((function(n,t){if(window.ethereum){var r=new s.default(window.ethereum);r.eth.getBalance(e.address).then((function(t){e.bnbBalance=r.utils.fromWei(t),n(e.bnbBalance)}))}}))}},{key:"getCoinBalance",value:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(n,t){var r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){var a={name:"balanceOf",type:"function",inputs:[{type:"address",name:"account"}]},o=window.web3.eth.abi.encodeFunctionCall(a,[r.address]);window.web3.eth.call({to:n,data:o},(function(n,t){if(n)console.error(n);else{var r=1e6*window.web3.utils.fromWei(t,"mether");e(r)}}))})));case 1:case"end":return e.stop()}}),e)})));function n(n,t){return e.apply(this,arguments)}return n}()},{key:"transfer",value:function(e,n){var t=this;return new Promise((function(r,a){if(window.ethereum){var o=new s.default(window.ethereum),i=[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],u=new o.eth.Contract(i,p),c=o.utils.toWei(e+"","ether");uni.showLoading({title:"转账中"}),u.methods.transfer(n,c).send({from:t.address}).then((function(e){uni.hideLoading(),console.log("转账成功"),r(e.transactionHash)})).catch((function(e){uni.hideLoading(),console.log("拒绝授权 or 交易失败"),console.log(e)}))}}))}},{key:"callContract",value:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(n,t){var r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new window.web3.eth.Contract(d,n),e.next=4,r.methods[t](this.address).call();case 4:return a=e.sent,console.log(a),o=new Promise((function(e,n){e(a)})),e.abrupt("return",o);case 10:e.prev=10,e.t0=e["catch"](0),console.error("callContract 失败",e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));function n(n,t){return e.apply(this,arguments)}return n}()},{key:"callWriteContract",value:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(n,t,r,a){var o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,o=new window.web3.eth.Contract(d,n),e.next=4,o.methods[t](r).send(a);case 4:return i=e.sent,e.abrupt("return",new Promise((function(e,n){i.status?e(!0):n()})));case 8:e.prev=8,e.t0=e["catch"](0),console.error("stakeApply 失败",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function n(n,t,r,a){return e.apply(this,arguments)}return n}()},{key:"approveUSDT",value:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(n){var t,r,a,o,i,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=new window.web3.eth.Contract(d,p),e.next=4,t.methods.allowance(this.address,n).call();case 4:if(r=e.sent,!(r>0)){e.next=7;break}return e.abrupt("return");case 7:return e.prev=7,window.web3=new s.default(window.ethereum),a=new window.web3.eth.Contract(d,p),uni.showLoading({title:"usdt授权中。。。"}),o=c.MaxUint256.toString(),i=55e4,e.next=15,a.methods.approve(n,o).send({from:this.address,gasPrice:window.web3.utils.toWei("10","Gwei"),gasLimit:i});case 15:u=e.sent,console.log("usdt 成功",u),uni.hideLoading(),e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](7),console.error("usdt 失败",e.t0);case 23:console.log("usdt 成功",r),e.next=30;break;case 26:e.prev=26,e.t1=e["catch"](0),console.error("usdt 失败",e.t1),uni.hideLoading();case 30:case"end":return e.stop()}}),e,this,[[0,26],[7,20]])})));function n(n){return e.apply(this,arguments)}return n}()},{key:"getBlockNumber",value:function(){return new Promise((function(e,n){window.web3.eth.getBlockNumber().then((function(n){e(n)})).catch((function(e){n(e)}))}))}},{key:"getPastEvents",value:function(e){var n=this,r=new Promise((function(r,o){var i=t("5850"),u=new i("https://rpc-bsc.48.club"),s=p,c="Transfer",l=e-5e3,d=e,f=n.insertStr(n.address,2,"000000000000000000000000").toLowerCase(),y=["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",f,"0x000000000000000000000000b6a576725913d57808ed9f4aa953176c0b5f089c"],m=pastEventsABI,w=function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new u.eth.Contract(m,s),e.prev=1,e.next=4,n.getPastEvents(c,{fromBlock:l,toBlock:d,topics:y});case 4:t=e.sent,r(t),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](1),o(e.t0),console.error("查询转账事件时发生错误：".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();w()}));return r}},{key:"insertStr",value:function(e,n,t){return e.substring(0,n)+t+e.substring(n)}}]),e}(),y=f;n.default=y},6829:function(e,n,t){var r=t("24fb");n=r(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""]),e.exports=n},"689b":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=r},"6d9f":function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},"835c":function(e,n,t){t("d3b7"),uni.addInterceptor({returnValue:function(e){return!e||"object"!==typeof e&&"function"!==typeof e||"function"!==typeof e.then?e:new Promise((function(n,t){e.then((function(e){return e[0]?t(e[0]):n(e[1])}))}))}})},"9e94":function(e,n,t){"use strict";t.r(n);var r=t("2557"),a=t("3073");for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);t("cbde");var i,u=t("f0c5"),s=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);n["default"]=s.exports},ac47:function(e,n,t){"use strict";(function(e){var n=t("4ea4");t("13d5"),t("d3b7"),t("ac1f"),t("5319"),t("ddb0");var r=n(t("e143")),a={keys:function(){return[]}};e["____703E6F1____"]=!0,delete e["____703E6F1____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},uniIdRouter:{}},e.__uniConfig.compilerVersion="3.2.16",e.__uniConfig.router={mode:"hash",base:"./"},e.__uniConfig.publicPath="./",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=a.keys().reduce((function(e,n){var t=n.replace(/\.\/(uni-app.)?(.*).json/,"$2"),r=a(n);return Object.assign(e[t]||(e[t]={}),r.common||r),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=t.e,r.default.component("pages-index-index",(function(e){var n={component:t.e("pages-index-index").then(function(){return e(t("604f"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"uni-app"})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,t("c8ba"))},b120:function(e,n,t){var r=t("6829");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=t("4f06").default;a("2cc14de2",r,!0,{sourceMap:!1,shadowMode:!1})},cbde:function(e,n,t){"use strict";var r=t("b120"),a=t.n(r);a.a},fdbcc:function(e,n,t){"use strict";var r=t("4ea4"),a=r(t("5530"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("ac47"),t("1c31");var o=r(t("9e94")),i=r(t("e143"));t("835c");var u=r(t("5c3a"));i.default.config.productionTip=!1,i.default.prototype.$web3=new u.default,o.default.mpType="app";var s=new i.default((0,a.default)({},o.default));s.$mount()}});