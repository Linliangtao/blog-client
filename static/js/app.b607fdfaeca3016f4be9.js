webpackJsonp([10],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a=n("Dd8w"),o=n.n(a),s=n("p+dL"),i="/auth/register",u="/auth/login",c="/auth/logout",l="/auth",d=function(t){var e=t.username,n=t.password;return Object(s.a)(i,"POST",{username:e,password:n})},f=function(t){var e=t.username,n=t.password;return Object(s.a)(u,"POST",{username:e,password:n})},h=function(){return Object(s.a)(c)},p=function(){return Object(s.a)(l)},m=n("NYxO"),g={data:function(){return{}},computed:o()({},Object(m.c)(["isLogin","user"])),created:function(){this.checkLogin().then().catch()},methods:o()({},Object(m.b)(["checkLogin","logout"]),{onLogout:function(){this.logout()}})},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:{login:t.isLogin,"no-login":!t.isLogin}},[t.isLogin?t._e():[n("h1",[t._v("LET'S SHARE")]),t._v(" "),n("p",[t._v("共享博客，每天学习一点一点")]),t._v(" "),n("div",{staticClass:"buttons"},[n("router-link",{attrs:{to:"/login"}},[n("el-button",[t._v("立即登录")])],1),t._v(" "),n("router-link",{attrs:{to:"/register"}},[n("el-button",[t._v("立即注册")])],1)],1)],t._v(" "),t.isLogin?[n("router-link",{attrs:{to:"/"}},[n("h1",[t._v("LET'S SHARE")])]),t._v(" "),n("div",{staticClass:"right"},[n("router-link",{attrs:{to:"/create"}},[n("i",{staticClass:"edit el-icon-plus"})]),t._v(" "),n("div",{staticClass:"user"},[n("img",{attrs:{src:t.user.avatar,alt:t.user.username,title:t.user.username}}),t._v(" "),n("ul",[n("li",{staticClass:"pitem"},[n("router-link",{attrs:{to:"/my"}},[t._v("我的博客")])],1),t._v(" "),n("li",{staticClass:"pitem"},[n("a",{attrs:{href:"#"},on:{click:t.onLogout}},[t._v("注销登录")])])])])],1)]:t._e()],2)},staticRenderFns:[]};var b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("p",[this._v("© 小涛 倾情打造多人共享博客")])])}]};var L={name:"App",components:{Header:n("VU/8")(g,v,!1,function(t){n("erA1")},null,null).exports,Footer:n("VU/8")(null,b,!1,function(t){n("Z8P/")},"data-v-756570a9",null).exports}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header",{attrs:{id:"header"}}),this._v(" "),e("main",{attrs:{id:"main"}},[e("router-view")],1),this._v(" "),e("Footer",{attrs:{id:"footer"}})],1)},staticRenderFns:[]};var _=n("VU/8")(L,w,!1,function(t){n("w3oM")},null,null).exports,k=n("/ocq"),x=n("Xxa5"),P=n.n(x),A=n("exGp"),C=n.n(A),E={state:{user:null,isLogin:!1},getters:{user:function(t){return t.user},isLogin:function(t){return t.isLogin}},mutations:{setUser:function(t,e){t.user=e.user},setLogin:function(t,e){t.isLogin=e.isLogin}},actions:{login:function(t,e){var n=t.commit,r=e.username,a=e.password;return f({username:r,password:a}).then(function(t){n("setUser",{user:t.data}),n("setLogin",{isLogin:!0})})},register:function(t,e){var n=this,r=t.commit,a=e.username,o=e.password;return C()(P.a.mark(function t(){var e;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d({username:a,password:o});case 2:return e=t.sent,r("setUser",{user:e.data}),r("setLogin",{isLogin:!0}),t.abrupt("return",e.data);case 6:case"end":return t.stop()}},t,n)}))()},logout:function(t){var e=this,n=t.commit;return C()(P.a.mark(function t(){return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:n("setUser",{user:null}),n("setLogin",!1);case 4:case"end":return t.stop()}},t,e)}))()},checkLogin:function(t){var e=this,n=t.commit,r=t.state;return C()(P.a.mark(function t(){var a;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.isLogin){t.next=2;break}return t.abrupt("return",!0);case 2:return t.next=4,p();case 4:if(a=t.sent,n("setLogin",{isLogin:a.isLogin}),a.isLogin){t.next=8;break}return t.abrupt("return",!1);case 8:return n("setUser",{user:a.data}),t.abrupt("return",!0);case 10:case"end":return t.stop()}},t,e)}))()}}};r.default.use(m.a);var q=new m.a.Store({modules:{auth:E,blog:{state:{},getters:{},mutations:{},actions:{}}}});window.store=q,r.default.use(k.a);var O=new k.a({routes:[{path:"/",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"/wCl"))}},{path:"/login",component:function(){return n.e(6).then(n.bind(null,"9Kem"))}},{path:"/detail/:blogId",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"8rvE"))}},{path:"/edit/:blogId",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"iFIX"))},meta:{requireAuth:!0}},{path:"/create",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"uYxL"))},meta:{requireAuth:!0}},{path:"/user/:userId",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"YqAS"))},meta:{requireAuth:!0}},{path:"/my",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"y7D+"))},meta:{requireAuth:!0}},{path:"/register",component:function(){return n.e(5).then(n.bind(null,"9CD8"))}}]});O.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requireAuth})?q.dispatch("checkLogin").then(function(e){e?n():n({path:"/login",query:{redirect:t.fullPath}})}):n()});var y=O,M=n("zL8q"),U=n.n(M),j=(n("tvR6"),n("pFYg")),F=n.n(j);function R(t){var e=("object"===(void 0===t?"undefined":F()(t))?t:new Date(t)).getTime(),n=Date.now()-e,r="";switch(!0){case n<6e4:r="刚刚";break;case n<36e5:r=Math.floor(n/6e4)+"分钟前";break;case n<864e5:r=Math.floor(n/36e5)+"小时前";break;default:r=Math.floor(n/864e5)+"天前"}return r}var S={install:function(t,e){t.prototype.friendlyDate=R}};r.default.use(U.a),r.default.use(S),r.default.config.productionTip=!1,new r.default({el:"#app",router:y,store:q,render:function(t){return t(_)}})},"Z8P/":function(t,e){},erA1:function(t,e){},"p+dL":function(t,e,n){"use strict";e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new a.a(function(r,a){var o={url:t,method:e};"get"===e.toLowerCase()?o.params=n:o.data=n,s()(o).then(function(t){"ok"===t.data.status?r(t.data):(i.Message.error(t.data.msg),a(t.data))}).catch(function(t){i.Message.err("网络异常"),a({msg:"网络异常"})})})};var r=n("//Fk"),a=n.n(r),o=n("mtWM"),s=n.n(o),i=n("zL8q");n.n(i);s.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",s.a.defaults.baseURL=" https://blog-server.hunger-valley.com",s.a.defaults.withCredentials=!0},tvR6:function(t,e){},w3oM:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b607fdfaeca3016f4be9.js.map