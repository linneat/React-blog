(this["webpackJsonpthe-blog"]=this["webpackJsonpthe-blog"]||[]).push([[0],{31:function(e,t,a){e.exports=a(48)},36:function(e,t,a){},37:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(29),s=a.n(r),o=(a(36),a(37),a(11)),l=a(12),c=a(14),d=a(13),m=a(8),u=a(6),h=a(7),E=a(51),p=a(49),v=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={error:void 0,articles:void 0,showArticle:void 0,id:void 0,username:e.location.state?e.location.state.username:void 0,password:e.location.state?e.location.state.password:void 0,redirect:void 0},a.writeNewArticle=a.writeNewArticle.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"delete",value:function(e){var t=this;if(void 0!==this.state.username&&void 0!==this.state.password){var n="https://boiling-peak-38811.herokuapp.com";void 0!==Object({NODE_ENV:"production",PUBLIC_URL:"/React-blog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL&&(n=Object({NODE_ENV:"production",PUBLIC_URL:"/React-blog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL.trim());var i=n+"/articles/"+e+".json",r=a(21),s=this.state.username,o=this.state.password,l="Basic "+r.encode(s+":"+o);fetch(i,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:l}}).then((function(a){var n=t.state.articles.slice().filter((function(t){return t.id!==e}));t.setState({articles:n})}))}else this.setState({redirect:"/login"})}},{key:"editArticle",value:function(e){this.state.username&&this.state.password?this.setState({redirect:"/edit-article/"+e}):this.setState({redirect:"/login"})}},{key:"writeNewArticle",value:function(){this.state.username&&this.state.password?this.setState({redirect:"/new-article"}):this.setState({redirect:"/login"})}},{key:"componentDidMount",value:function(){var e=this,t="https://boiling-peak-38811.herokuapp.com";void 0!==Object({NODE_ENV:"production",PUBLIC_URL:"/React-blog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL&&(t=Object({NODE_ENV:"production",PUBLIC_URL:"/React-blog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL.trim()),fetch(t+"/articles.json").then((function(e){return e.json()})).then((function(t){e.setState({articles:t})}),(function(t){e.setState({error:t.message})}))}},{key:"render",value:function(){var e=this;return this.state.error?i.a.createElement("div",null,"an error occured: ",this.state.error):void 0===this.state.articles?i.a.createElement("div",{className:"loading"},i.a.createElement(p.a,{animation:"border"}),i.a.createElement("div",null,"loading articles...")):this.state.redirect?i.a.createElement(u.a,{to:{pathname:this.state.redirect,state:{username:this.state.username,password:this.state.password}}}):i.a.createElement("div",{className:"homePageWrap"},i.a.createElement("h1",{className:"headingHomePage"},"Posted Articles"),i.a.createElement("div",{className:"listWrap"},i.a.createElement("ul",{className:"list"},this.state.articles.map((function(t,a){return i.a.createElement("li",{key:a,className:"listItem"},i.a.createElement("span",{className:"itemTitle"},t.title," "),i.a.createElement("span",{className:"buttonsWrap"},i.a.createElement("span",{className:"linkInWrap"},i.a.createElement("button",{className:"buttonInWrap"},i.a.createElement(m.b,{to:"/show-article/"+t.id},"show"))),i.a.createElement("span",{className:"linkInWrap"},i.a.createElement("button",{className:"buttonInWrap",onClick:function(){return e.editArticle(t.id)}},"edit")),i.a.createElement("span",null,i.a.createElement("button",{className:"buttonInWrap",onClick:function(){e.delete(t.id)}},"delete"))),i.a.createElement("hr",{className:"line"}))})))),i.a.createElement("div",{className:"linkHomePage"},i.a.createElement(E.a,{variant:"outline-success",className:"buttonHomePage",onClick:this.writeNewArticle},"Write new article")))}}]),n}(n.Component),_=a(50),T=a(17),O=a(18),C=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={title:"",text:"",id:void 0,username:e.location.state?e.location.state.username:void 0,password:e.location.state?e.location.state.password:void 0},a.handleChangeTitle=a.handleChangeTitle.bind(Object(h.a)(a)),a.handleChangeText=a.handleChangeText.bind(Object(h.a)(a)),a.postArticle=a.postArticle.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"handleChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"handleChangeText",value:function(e){this.setState({text:e.target.value})}},{key:"postArticle",value:function(){var e=this,t="https://boiling-peak-38811.herokuapp.com";void 0!==Object({NODE_ENV:"production",PUBLIC_URL:"/React-blog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL&&(t=Object({NODE_ENV:"production",PUBLIC_URL:"/React-blog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL.trim());var n=t+"/articles.json",i={article:{title:this.state.title,text:this.state.text}},r=a(21),s=this.state.username,o=this.state.password,l="Basic "+r.encode(s+":"+o);fetch(n,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json",Authorization:l}}).then((function(e){return e.json()})).then((function(t){e.setState({id:t.id})}))}},{key:"render",value:function(){return void 0!==this.state.id?i.a.createElement(u.a,{to:"/show-article/"+this.state.id}):void 0===this.state.username?i.a.createElement(u.a,{to:"/login"}):i.a.createElement("div",{className:"articleNewPageWrap"},i.a.createElement("div",null,i.a.createElement(m.b,{to:"/"},i.a.createElement("i",{className:"back"},i.a.createElement(T.a,{icon:O.a})))),i.a.createElement("h1",{className:"heading"},"New article"),i.a.createElement("div",{className:"newArticleWrap"},i.a.createElement(_.a,{className:"form"},i.a.createElement(_.a.Group,{controlId:"exampleForm.ControlInput1",className:"formTopMargin"},i.a.createElement(_.a.Label,{className:"inputTitle"}," Title:"),i.a.createElement(_.a.Control,{className:"editInputTitle",type:"text",placeholder:"title",value:this.state.title,onChange:this.handleChangeTitle})),i.a.createElement(_.a.Group,{controlId:"exampleForm.ControlTextarea1",className:"textWrap"},i.a.createElement(_.a.Label,{className:"inputText"},"Text:"),i.a.createElement(_.a.Control,{className:"editInputText",as:"textarea",rows:"7",value:this.state.text,onChange:this.handleChangeText,placeholder:"text"})),i.a.createElement(E.a,{variant:"outline-success",className:"saveButtonCreate",onClick:this.postArticle},"Create article"))))}}]),n}(n.Component),b=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={error:void 0,article:void 0,id:e.id},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="https://boiling-peak-38811.herokuapp.com";void 0!==Object({NODE_ENV:"production",PUBLIC_URL:"/React-blog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL&&(t=Object({NODE_ENV:"production",PUBLIC_URL:"/React-blog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL.trim());var a=t+"/articles/"+this.state.id+".json";fetch(a).then((function(e){return e.json()})).then((function(t){e.setState({article:t})}),(function(t){e.setState({error:t.message})}))}},{key:"render",value:function(){return this.state.error?i.a.createElement("div",null,"an error occured: ",this.state.error):void 0===this.state.article?i.a.createElement("div",{className:"loading"},i.a.createElement(p.a,{animation:"border"}),i.a.createElement("div",null,"loading article...")):i.a.createElement("div",null,i.a.createElement("div",{className:"homePageWrap"},i.a.createElement("span",null,i.a.createElement(m.b,{to:"/"},i.a.createElement("i",{className:"back"},i.a.createElement(T.a,{icon:O.a})))),i.a.createElement("h1",{className:"heading"},this.state.article.title),i.a.createElement("div",{className:"articleShow"},this.state.article.text.split("\n").map((function(e,t){return i.a.createElement("p",{key:t},e)})))))}}]),a}(n.Component),S=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={article:void 0,id:e.id,showArticle:!1,username:e.location.state?e.location.state.username:void 0,password:e.location.state?e.location.state.password:void 0},a.handleChangeTitle=a.handleChangeTitle.bind(Object(h.a)(a)),a.handleChangeText=a.handleChangeText.bind(Object(h.a)(a)),a.postArticle=a.postArticle.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"handleChangeTitle",value:function(e){var t=this.state.article;t.title=e.target.value,this.setState({article:t})}},{key:"handleChangeText",value:function(e){var t=this.state.article;t.text=e.target.value,this.setState({article:t})}},{key:"postArticle",value:function(){var e=this,t="https://boiling-peak-38811.herokuapp.com";void 0!==Object({NODE_ENV:"production",PUBLIC_URL:"/React-blog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL&&(t=Object({NODE_ENV:"production",PUBLIC_URL:"/React-blog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL.trim());var n=t+"/articles/"+this.state.id+".json",i={article:this.state.article},r=a(21),s=this.state.username,o=this.state.password,l="Basic "+r.encode(s+":"+o);fetch(n,{method:"PATCH",body:JSON.stringify(i),headers:{"Content-Type":"application/json",Authorization:l}}).then((function(e){return e.json()})).then((function(t){e.setState({showArticle:!0})}))}},{key:"componentDidMount",value:function(){var e=this;if(void 0!==this.state.username){var t="https://boiling-peak-38811.herokuapp.com";void 0!==Object({NODE_ENV:"production",PUBLIC_URL:"/React-blog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL&&(t=Object({NODE_ENV:"production",PUBLIC_URL:"/React-blog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL.trim());var a=t+"/articles/"+this.state.id+".json";fetch(a).then((function(e){return e.json()})).then((function(t){e.setState({article:t})}),(function(t){e.setState({error:t.message})}))}}},{key:"render",value:function(){return void 0===this.state.username?i.a.createElement(u.a,{to:"/login"}):this.state.showArticle?i.a.createElement(u.a,{to:"/show-article/"+this.state.id}):this.state.error?i.a.createElement("div",null,"an error occured: ",this.state.error):void 0===this.state.article?i.a.createElement("div",{className:"loading"},i.a.createElement(p.a,{animation:"border"}),i.a.createElement("div",null,"loading article...")):i.a.createElement("div",{className:"articleNewPageWrap"},i.a.createElement("div",null,i.a.createElement(m.b,{to:"/"},i.a.createElement("i",{className:"back"},i.a.createElement(T.a,{icon:O.a})))),i.a.createElement("h1",{className:"heading"},"Edit article"),i.a.createElement("div",{className:"newArticleWrap"},i.a.createElement(_.a,{className:"form"},i.a.createElement(_.a.Group,{controlId:"exampleForm.ControlInput1",className:"formTopMargin"},i.a.createElement(_.a.Label,{className:"inputTitle"}," Title:"),i.a.createElement(_.a.Control,{className:"editInputTitle",type:"text",placeholder:"title",value:this.state.article.title,onChange:this.handleChangeTitle})),i.a.createElement(_.a.Group,{controlId:"exampleForm.ControlTextarea1",className:"textWrap"},i.a.createElement(_.a.Label,{className:"inputText"},"Text:"),i.a.createElement(_.a.Control,{className:"editInputText",as:"textarea",rows:"7",value:this.state.article.text,onChange:this.handleChangeText,placeholder:"text"})),i.a.createElement(E.a,{variant:"outline-success",className:"saveButtonEdit",onClick:this.postArticle},"Save article")),i.a.createElement("div",{className:"postButton"})))}}]),n}(n.Component),g=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",redirect:void 0},n.handleChangeUsername=n.handleChangeUsername.bind(Object(h.a)(n)),n.handleChangePassword=n.handleChangePassword.bind(Object(h.a)(n)),n.logIn=n.logIn.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"handleChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"logIn",value:function(){this.setState({redirect:"/"})}},{key:"render",value:function(){return this.state.redirect?i.a.createElement(u.a,{to:{pathname:this.state.redirect,state:{username:this.state.username,password:this.state.password}}}):i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(m.b,{to:"/"},i.a.createElement("i",{className:"back"},i.a.createElement(T.a,{icon:O.a})))),i.a.createElement("div",{className:"newArticleWrap"},i.a.createElement(_.a,{className:"form"},i.a.createElement(_.a.Group,{controlId:"exampleForm.ControlInput1",className:"formTopMargin"},i.a.createElement(_.a.Label,{className:"inputTitle"}," User name:"),i.a.createElement(_.a.Control,{className:"editInputTitle",type:"text",placeholder:"Username",value:this.state.username,onChange:this.handleChangeUsername})),i.a.createElement(_.a.Group,{controlId:"exampleForm.ControlTextarea1",className:"textWrap"},i.a.createElement(_.a.Label,{className:"inputText"},"Password:"),i.a.createElement(_.a.Control,{className:"editInputText",type:"password",value:this.state.password,onChange:this.handleChangePassword,placeholder:"Password"})),i.a.createElement(E.a,{variant:"outline-success",className:"saveButtonCreate",onClick:this.logIn},"Log in"))))}}]),a}(n.Component),N=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(u.d,null,i.a.createElement(u.b,{path:"/",exact:!0,component:v}),i.a.createElement(u.b,{path:"/new-article",exact:!0,component:C}),i.a.createElement(u.b,{path:"/show-article/:id",render:function(e){return i.a.createElement(b,Object.assign({},e,{id:e.match.params.id}))}}),i.a.createElement(u.b,{path:"/edit-article/:id",render:function(e){return i.a.createElement(S,Object.assign({},e,{id:e.match.params.id}))}}),i.a.createElement(u.b,{path:"/login",exact:!0,component:g}))))}}]),a}(n.Component);a(47);var P=function(){return i.a.createElement("div",{className:"appWrap"},i.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.72a0311e.chunk.js.map