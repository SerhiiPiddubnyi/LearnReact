(this.webpackJsonpSN=this.webpackJsonpSN||[]).push([[0],{129:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__3zvLU"}},130:function(e,t,n){e.exports=n.p+"static/media/loader.dd50b232.gif"},132:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__22zhR"}},133:function(e,t,n){e.exports={item:"Post_item__euHzL"}},15:function(e,t,n){e.exports={nav:"Navbar_nav__2Q4Lm",item:"Navbar_item__3Iueq",active:"Navbar_active__FhkBw"}},161:function(e,t,n){e.exports=n(286)},166:function(e,t,n){},28:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__105iv",dialogsItems:"Dialogs_dialogsItems__20dui",dialog:"Dialogs_dialog__Y1nJ0",active:"Dialogs_active__3xY94",messages:"Dialogs_messages__2l-jP",message:"Dialogs_message__1a79Z"}},286:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);n(94),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(61),s=n.n(o),i=n(24),u=n(25),c=n(27),l=n(26),m=(n(166),n(15)),f=n.n(m),p=n(12),d=function(){return r.a.createElement("nav",{className:f.a.nav},r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/profile",activeClassName:f.a.active},"Profile")),r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/dialogs",activeClassName:f.a.active},"Messages")),r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/users",activeClassName:f.a.active},"Users")),r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/news",activeClassName:f.a.active},"News")),r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/videos",activeClassName:f.a.active},"Videos")),r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/setting",activeClassName:f.a.active},"Setting")))},g=n(9),h=n(42),E=n(5),v={dialogs:[{id:1,name:"Vasya"},{id:2,name:"Kasya"},{id:3,name:"Ivasya"},{id:4,name:"Tasya"},{id:5,name:"Masya"},{id:6,name:"Pasya"}],messages:[{id:1,message:"Hi!"},{id:2,message:"How are you?"},{id:3,message:"I am fine!"}]},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD-MESSAGE":return Object(E.a)(Object(E.a)({},e),{},{messages:[].concat(Object(h.a)(e.messages),[{id:4,message:t.text}])});default:return e}},O=n(28),_=n.n(O),P=function(e){return r.a.createElement("div",{className:_.a.dialog},e.message)},j=function(e){return r.a.createElement("div",{className:_.a.dialog+" "+_.a.active},r.a.createElement(p.b,{to:"/dialogs/"+e.id},e.name))},S=n(124),w=n(125),y=n(135),C=n(50),k=n.n(C),N=function(e){return function(t){var n=t.input,a=t.meta,o=Object(y.a)(t,["input","meta"]),s=a.touched&&a.error;return r.a.createElement("div",{className:k.a.formControl+" "+(s?k.a.error:"")},r.a.createElement("div",null,r.a.createElement(e,Object.assign({},n,o))),s&&r.a.createElement("span",null,a.error))}},T=function(e){if(!(e&&e.length>0))return"This field is required"},I=function(e){return function(t){if(t&&t.length>e)return"Max length ".concat(e)}},x=I(10),U=N("textarea"),A=Object(w.a)({form:"message"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(S.a,{placeholder:"Your message",validate:[T,x],component:U,name:"text"})),r.a.createElement("div",null,r.a.createElement("button",null,"Send!")))})),L=function(e){return r.a.createElement("div",null,r.a.createElement(A,{onSubmit:function(t){e.addMessage(t.text)}}))},F=function(e){var t=e.dialogsPage.dialogs.map((function(e){return r.a.createElement(j,{key:e.id,name:e.name,id:e.id})})),n=e.dialogsPage.messages.map((function(e){return r.a.createElement(P,{key:e.id,message:e.message})}));return r.a.createElement("div",{className:_.a.dialogs},r.a.createElement("div",{className:_.a.dialogsItems},t),r.a.createElement("div",{className:_.a.messages},n,r.a.createElement(L,e)))},D=n(10),M=function(e){return{isAuth:e.auth.isAuth}},z=n(6),R=Object(z.d)(Object(D.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(t){e(function(e){return{type:"dialogs/ADD-MESSAGE",text:e}}(t))}}})),(function(e){var t=function(t){Object(c.a)(a,t);var n=Object(l.a)(a);function a(){return Object(i.a)(this,a),n.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(g.a,{to:"/login"})}}]),a}(r.a.Component);return Object(D.b)(M)(t)}))(F),G=n(11),H=n.n(G),B=n(19),W=n(84).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"62005d27-039f-4c86-85d5-445b3f38c01d"}}),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return W.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},Z=function(e,t){return"follow"===t?W.post("follow/".concat(e)).then((function(e){return e.data})):W.delete("follow/".concat(e)).then((function(e){return e.data}))},q=function(){return W.get("auth/me").then((function(e){if(0===e.data.resultCode)return e.data}))},J=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return W.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},V=function(){return W.delete("auth/login").then((function(e){return e.data}))},X=function(e){return W.get("profile/".concat(e)).then((function(e){return e.data}))},K=function(e){return W.get("profile/status/".concat(e)).then((function(e){return e.data}))},Q=function(e){return W.put("profile/status",{status:e}).then((function(e){return e.data}))},$=function(e){var t=new FormData;return t.append("image",e),W.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},ee={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingProgress:[]},te=function(e){return{type:"users/FOLLOWING",userId:e}},ne=function(e){return{type:"users/SET_CURRENT_PAGE",currentPage:e}},ae=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFething:e}},re=function(e,t){return{type:"users/TOGGLE_IS_FETCHING_FOLLOW",isFething:e,userId:t}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/FOLLOWING":return Object(E.a)(Object(E.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(E.a)(Object(E.a)({},e),{},{followed:!e.followed}):e}))});case"users/SET_USERS":return Object(E.a)(Object(E.a)({},e),{},{users:t.users});case"users/SET_CURRENT_PAGE":return Object(E.a)(Object(E.a)({},e),{},{currentPage:t.currentPage});case"users/SET_TOTAL_USERS_COUNT":return Object(E.a)(Object(E.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"users/TOGGLE_IS_FETCHING":return Object(E.a)(Object(E.a)({},e),{},{isFetching:t.isFething});case"users/TOGGLE_IS_FETCHING_FOLLOW":return Object(E.a)(Object(E.a)({},e),{},{followingProgress:t.isFething?[].concat(Object(h.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!=t.userId}))});default:return e}},se=n(67),ie=n.n(se),ue=function(e){var t=e.totalUsersCount,n=e.pageSize,a=e.currentPage,o=e.onPageChanged,s=0,i=0,u=Math.ceil(t/n);a<=6||u<12?(s=1,i=u<12?u:11):(s=a-5,i=a+5<u?a+5:u);for(var c=[],l=s;l<=i;l++)c.push(l);var m=function(){return r.a.createElement("button",{onClick:function(){o(1)}},"To start")},f=function(){return r.a.createElement("button",{onClick:function(){o(u)}},"To end")};return r.a.createElement("div",{className:ie.a.paginatorComment},a>6&&r.a.createElement(m,null),c.map((function(e){return r.a.createElement("span",null,r.a.createElement("span",{className:a===e?ie.a.selectedPage:ie.a.allPages,onClick:function(){o(e)}},e))})),a+5<u&&r.a.createElement(f,null))},ce=n(129),le=n.n(ce),me=n(65),fe=n.n(me),pe=function(e){var t=e.user,n=e.followingProgress,a=e.following;return r.a.createElement("div",{key:t.id},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(p.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:t.photos.small?t.photos.small:fe.a,className:le.a.userPhoto}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id,"unfollow")}},"Unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id,"follow")}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"user.location.country"),r.a.createElement("div",null,"user.location.city"))))},de=function(e){return r.a.createElement("div",null,r.a.createElement(ue,e),e.users.map((function(t){return r.a.createElement(pe,{user:t,followingProgress:e.followingProgress,following:e.following})})))},ge=n(130),he=n.n(ge),Ee=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:he.a}))},ve=n(131),be=Object(ve.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Oe=function(e){return e.usersPage.pageSize},_e=function(e){return e.usersPage.totalUsersCount},Pe=function(e){return e.usersPage.currentPage},je=function(e){return e.usersPage.isFetching},Se=function(e){return e.usersPage.followingProgress},we=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.pageSize;e.props.setUsersCreator(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.setUsersCreator(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(Ee,null):null,r.a.createElement(de,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,followingProgress:this.props.followingProgress,following:this.props.following}))}}]),n}(r.a.Component),ye=Object(z.d)(Object(D.b)((function(e){return{users:be(e),pageSize:Oe(e),totalUsersCount:_e(e),currentPage:Pe(e),isFetching:je(e),followingProgress:Se(e)}}),{setUsersCreator:function(e,t){return function(){var n=Object(B.a)(H.a.mark((function n(a){var r;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(ne(e)),a(ae(!0)),n.next=4,Y(e,t);case 4:r=n.sent,a(ae(!1)),a({type:"users/SET_USERS",users:r.items}),a({type:"users/SET_TOTAL_USERS_COUNT",totalUsersCount:r.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},following:function(e,t){return function(){var n=Object(B.a)(H.a.mark((function n(a){return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(re(!0,e)),n.next=3,Z(e,t);case 3:0===n.sent.resultCode&&a(te(e)),a(re(!1,e));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(we),Ce=n(90),ke=n.n(Ce),Ne=n(92),Te=function(e){var t=Object(a.useState)(!1),n=Object(Ne.a)(t,2),o=n[0],s=n[1],i=Object(a.useState)(e.status),u=Object(Ne.a)(i,2),c=u[0],l=u[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"No status(((")),o&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(c)},value:c})))},Ie=function(e){var t=e.userProfile,n=e.status,a=e.updateStatus,o=e.isOwner,s=e.addMainPhoto;if(!t)return r.a.createElement(Ee,null);return r.a.createElement("div",null,r.a.createElement("div",{className:ke.a.deckriptionBlock},r.a.createElement("div",null,t.fullName),r.a.createElement("img",{className:ke.a.userPic,src:t.photos.small||fe.a}),o&&r.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&s(e.target.files[0])}}),r.a.createElement(Te,{status:n,updateStatus:a})))},xe="profile/ADD-POST",Ue="profile/DEL-POST",Ae={posts:[{id:1,message:"Hi! how are you",likesCount:4},{id:2,message:"It's my first post.",likesCount:18}],userProfile:null,status:""},Le=function(e){return{type:"profile/SET_STATUS",status:e}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:var n={id:3,message:t.text,likesCount:1};return Object(E.a)(Object(E.a)({},e),{},{posts:[].concat(Object(h.a)(e.posts),[n])});case Ue:return Object(E.a)(Object(E.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postID}))});case"profile/SET_USER_PROFILE":return Object(E.a)(Object(E.a)({},e),{},{userProfile:t.userProfile});case"profile/SET_STATUS":return Object(E.a)(Object(E.a)({},e),{},{status:t.status});case"profile/SET_MAIN_PHOTO":return Object(E.a)(Object(E.a)({},e),{},{userProfile:Object(E.a)(Object(E.a)({},e.userProfile),{},{photos:t.photos})});default:return e}},De=n(132),Me=n.n(De),ze=n(133),Re=n.n(ze),Ge=function(e){return r.a.createElement("div",{className:Re.a.item},r.a.createElement("img",{src:"https://5koleso.ru/wp-content/uploads/2020/01/mercedes-benz-vision_avtr_concept-2020-1280-03-1024x768.jpg"}),e.message,r.a.createElement("div",null,r.a.createElement("button",null,"Like")," ",e.likesCount))},He=I(10),Be=N("textarea"),We=Object(w.a)({form:"post"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(S.a,{placeholder:"Your post",component:Be,name:"text",validate:[T,He]})),r.a.createElement("div",null,r.a.createElement("button",null,"Add post")))})),Ye=function(e){return r.a.createElement("div",null,r.a.createElement(We,{onSubmit:function(t){e.addPost(t.text)}}))},Ze=r.a.memo((function(e){console.log("render");var t=e.profilePage.posts.map((function(e){return r.a.createElement(Ge,{key:e.id,message:e.message,likesCount:e.likesCount})}));return r.a.createElement("div",{className:Me.a.postsBlock},r.a.createElement("h3",null,"My posts"),r.a.createElement(Ye,e),t)})),qe=Object(D.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPost:function(t){e(function(e){return{type:xe,text:e}}(t))}}}))(Ze),Je=function(e){return r.a.createElement("div",null,r.a.createElement(Ie,{userProfile:e.userProfile,addMainPhoto:e.addMainPhoto,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner}),r.a.createElement(qe,null))},Ve=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){e.match.params.userId!==this.props.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(Je,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,userProfile:this.props.userProfile,status:this.props.status,updateStatus:this.props.updateStatus,addMainPhoto:this.props.addMainPhoto}))}}]),n}(r.a.Component),Xe=Object(z.d)(Object(D.b)((function(e){return{userProfile:e.profilePage.userProfile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(){var t=Object(B.a)(H.a.mark((function t(n){var a;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X(e);case 2:a=t.sent,n({type:"profile/SET_USER_PROFILE",userProfile:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(B.a)(H.a.mark((function t(n){var a;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K(e);case 2:a=t.sent,n(Le(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(B.a)(H.a.mark((function t(n){return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q(e);case 2:0===t.sent.resultCode&&n(Le(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},addMainPhoto:function(e){return function(){var t=Object(B.a)(H.a.mark((function t(n){var a;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$(e);case 2:0===(a=t.sent).resultCode&&n({type:"profile/SET_MAIN_PHOTO",photos:a.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),g.f)(Ve),Ke=n(91),Qe=n.n(Ke),$e=function(e){return r.a.createElement("header",{className:Qe.a.header},r.a.createElement("img",{src:"https://s2.logaster.com/static/v3/img/products/logo.png"}),r.a.createElement("div",{className:Qe.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Logout")):r.a.createElement(p.b,{to:"/login"},"Login")))},et=n(35),tt={id:null,email:null,login:null,isAuth:!1,isFetching:!1},nt=function(e,t,n,a){return{type:"auth/SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:a}}},at=function(){return function(){var e=Object(B.a)(H.a.mark((function e(t){var n,a,r,o,s;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:0===(n=e.sent).resultCode&&(a=n.data,r=a.id,o=a.email,s=a.login,t(nt(r,o,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(E.a)(Object(E.a)({},e),t.payload);default:return e}},ot=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement($e,this.props)}}]),n}(r.a.Component),st=Object(D.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(B.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:0===e.sent.resultCode&&t(nt(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ot),it=N("input"),ut=I(20),ct=Object(w.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement(S.a,{placeholder:"Email",validate:[T,ut],component:it,name:"email"})),r.a.createElement("div",null,r.a.createElement(S.a,{placeholder:"Password",type:"password",validate:[T,ut],component:it,name:"password"})),r.a.createElement("div",null,r.a.createElement(S.a,{type:"checkbox",component:it,name:"rememberMe"})," Remember me"),n&&r.a.createElement("div",{className:k.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),lt=Object(D.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var a=Object(B.a)(H.a.mark((function a(r){var o,s;return H.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,J(e,t,n);case 2:0===(o=a.sent).resultCode?r(at()):(s=o.messages.length>0?o.messages[0]:"Some error",r(Object(et.a)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(g.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(ct,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),mt={initialized:!1},ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{initialized:!0});default:return e}},pt=n(134),dt=n(126),gt=Object(z.c)({profilePage:Fe,dialogsPage:b,usersPage:oe,auth:rt,form:dt.a,app:ft}),ht=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.d,Et=Object(z.e)(gt,ht(Object(z.a)(pt.a)));window.store=Et;var vt=Et,bt=function(e){return function(t){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(Ee,null)},r.a.createElement(e,t))}},Ot=r.a.lazy((function(){return n.e(3).then(n.bind(null,290))})),_t=r.a.lazy((function(){return n.e(4).then(n.bind(null,291))})),Pt=r.a.lazy((function(){return n.e(5).then(n.bind(null,292))})),jt=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(st,null),r.a.createElement(d,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(g.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Xe,null)}}),r.a.createElement(g.b,{path:"/dialogs",render:function(){return r.a.createElement(R,null)}}),r.a.createElement(g.b,{path:"/users",render:function(){return r.a.createElement(ye,null)}}),r.a.createElement(g.b,{path:"/login",render:function(){return r.a.createElement(lt,null)}}),r.a.createElement(g.b,{path:"/news",render:bt(Ot)}),r.a.createElement(g.b,{path:"/setting",render:bt(_t)}),r.a.createElement(g.b,{path:"/videos",render:bt(Pt)}))):r.a.createElement(Ee,null)}}]),n}(r.a.Component),St=Object(z.d)(g.f,Object(D.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(at());Promise.all([t]).then((function(){e({type:"app/INITIALIZED_SUCCESS"})}))}}}))(jt),wt=function(e){return r.a.createElement(p.a,null,r.a.createElement(D.a,{store:vt},r.a.createElement(St,null)))};s.a.render(r.a.createElement(wt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},50:function(e,t,n){e.exports={formControl:"FormsControl_formControl__2jLRp",error:"FormsControl_error__3u6HW",formSummaryError:"FormsControl_formSummaryError__1JgOO"}},65:function(e,t,n){e.exports=n.p+"static/media/user.70914ad2.png"},67:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__2bZmv",allPages:"Paginator_allPages__2wRSW",paginatorComment:"Paginator_paginatorComment__1qDqB"}},90:function(e,t,n){e.exports={imgHead:"ProfileInfo_imgHead__303V_",deckriptionBlock:"ProfileInfo_deckriptionBlock__B2adT",userPic:"ProfileInfo_userPic__sAHHu"}},91:function(e,t,n){e.exports={header:"Header_header__XMb0Z",loginBlock:"Header_loginBlock__2EoEo"}},94:function(e,t,n){}},[[161,1,2]]]);
//# sourceMappingURL=main.4ee7bf4b.chunk.js.map