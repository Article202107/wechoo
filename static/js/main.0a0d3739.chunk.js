(this.webpackJsonpwechoo=this.webpackJsonpwechoo||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(27),i=n.n(r),s=n(6),o=n(20),u=n(5),j=n(10),l=n.n(j),b=n(15),d=n(21),O=n(18);n(34),n(47),n(48);O.a.initializeApp({apiKey:"AIzaSyCzX21--oQ7YQqGcRcZOZk1ntQvr4FYwkY",authDomain:"wechoo-ce4f1.firebaseapp.com",projectId:"wechoo-ce4f1",storageBucket:"wechoo-ce4f1.appspot.com",messagingSenderId:"534329892446",appId:"1:534329892446:web:987c3804d1c8075b66decf",measurementId:"G-56PJZ3JMQJ"});var p=O.a.auth,h=O.a.auth(),x=O.a.firestore(),f=(O.a.storage(),n(1)),m=function(e){var t=e.questionObj,n=e.userObj,a=t.creator===n.uid,r=Object(c.useState)(!1),i=Object(s.a)(r,2),o=i[0],u=i[1],j=Object(c.useState)(""),O=Object(s.a)(j,2),p=O[0],h=O[1],m=Object(c.useState)(""),v=Object(s.a)(m,2),g=v[0],w=v[1],k=Object(c.useState)(""),C=Object(s.a)(k,2),A=C[0],S=C[1],y=Object(c.useState)({}),B=Object(s.a)(y,2),I=B[0],q=B[1],N=Object(c.useState)([]),Q=Object(s.a)(N,2),_=Q[0],E=Q[1],P=function(){var e=Object(b.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"),e.t0=n,!e.t0){e.next=5;break}return e.next=5,x.collection("Question").doc(t.id).delete();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(e){var t=e.target,n=t.name,c=t.value;"newQuestion"===n?h(c):"newItemA"===n?w(c):"newItemB"===n&&S(c)},G=function(){o||(h(t.question),w(t.itemA),S(t.itemB)),u((function(e){return!e}))};Object(c.useEffect)((function(){x.collection("Answer").where("qid","==",t.id).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(d.a)({id:e.id},e.data())}));E(t),q({pickCountA:t.filter((function(e){return"A"===e.pickCode})).length,pickCountB:t.filter((function(e){return"B"===e.pickCode})).length})}))}),[]);var F=function(){var e=Object(b.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,x.collection("Question").doc(t.id).update({question:p,itemA:g,itemB:A});case 3:G();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(b.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_.find((function(e){return e.uid===n.uid}))){e.next=3;break}return alert("\uc774\ubbf8 \uc120\ud0dd\ud558\uc168\uc2b5\ub2c8\ub2e4."),e.abrupt("return");case 3:return e.next=5,x.collection("Answer").add({qid:t.id,uid:n.uid,pickCode:c,createAt:Date.now()});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:o?Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{onSubmit:F,children:[Object(f.jsx)("input",{name:"newQuestion",onChange:D,value:p,type:"text"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{name:"newItemA",onChange:D,value:g,type:"text"}),Object(f.jsx)("input",{name:"newItemB",onChange:D,value:A,type:"text"})]}),Object(f.jsx)("input",{type:"submit",value:"Edit"}),Object(f.jsx)("button",{onClick:G,children:"Cancel"})]})}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:t.question}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:I.pickCountA}),Object(f.jsx)("button",{onClick:function(){return J("A")},children:t.itemA})]}),Object(f.jsx)("span",{children:" VS "}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:I.pickCountB}),Object(f.jsx)("button",{onClick:function(){return J("B")},children:t.itemB})]})]}),a&&Object(f.jsxs)("div",{className:"edit-buttons",children:[Object(f.jsx)("button",{onClick:P,children:"Delete Question"}),Object(f.jsx)("button",{onClick:G,children:"Edit Question"})]})]})})},v=function(e){var t=e.userObj,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),u=Object(s.a)(o,2),j=u[0],O=u[1],p=Object(c.useState)(""),h=Object(s.a)(p,2),v=h[0],g=h[1],w=Object(c.useState)([]),k=Object(s.a)(w,2),C=k[0],A=k[1];Object(c.useEffect)((function(){x.collection("Question").orderBy("createAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(d.a)(Object(d.a)({id:e.id},e.data()),{},{pickCountA:0,pickCountB:0})}));A(t)}))}),[]);var S=function(e){var t=e.target,n=t.name,c=t.value;"question"===n?i(c):"itemA"===n?O(c):"itemB"===n&&g(c)},y=function(){var e=Object(b.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log(r),e.next=4,x.collection("Question").add({question:r,itemA:j,itemB:v,creator:t.uid,createAt:Date.now()});case 4:i("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsxs)("form",{onSubmit:y,children:[Object(f.jsx)("span",{children:"question"}),Object(f.jsx)("input",{name:"question",placeholder:"\ubb34\uc5c7\uc744 \uc120\ud0dd\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",value:r,onChange:S,type:"text"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"text",name:"itemA",placeholder:"A\uc548",value:j,onChange:S}),Object(f.jsx)("input",{type:"text",name:"itemB",placeholder:"B\uc548",value:v,onChange:S})]}),Object(f.jsx)("input",{type:"submit",value:"question"})]}),Object(f.jsx)("div",{children:C.map((function(e){return Object(f.jsx)(m,{questionObj:e,userObj:t},e.id)}))})]})},g=function(){return Object(f.jsx)("span",{children:"Profile"})},w=function(){return Object(f.jsxs)("nav",{children:[Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(o.b,{to:"/",children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)(o.b,{to:"/profile",children:"Profile"})})]}),Object(f.jsx)("input",{type:"button",value:"Log Out",onClick:function(){h.signOut()}})]})},k=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(s.a)(r,2),o=i[0],u=i[1],j=Object(c.useState)(!1),d=Object(s.a)(j,2),O=d[0],x=d[1],m=Object(c.useState)(""),v=Object(s.a)(m,2),g=v[0],w=v[1],k=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?a(c):"password"===n&&u(c)},C=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.name,e.prev=1,"google"===n?c=new p.GoogleAuthProvider:"github"===n&&(c=new p.GithubAuthProvider),e.next=5,h.signInWithPopup(c);case 5:a=e.sent,console.log(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(b.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!O){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(n,o);case 5:c=e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(n,o);case 10:c=e.sent;case 11:console.log(c),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),w(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"main",children:[Object(f.jsx)("h1",{className:"login-title",children:"LOGIN"}),Object(f.jsxs)("form",{className:"signin-form",onSubmit:A,children:[Object(f.jsx)("input",{type:"text",name:"email",value:n,onChange:k,placeholder:"Email Address *",className:"signin-form__email",required:!0}),Object(f.jsx)("input",{type:"password",name:"password",value:o,onChange:k,placeholder:"Password *",className:"signin-form__password",required:!0}),Object(f.jsx)("input",{type:"submit",value:O?"\ud68c\uc6d0\uac00\uc785":"\ub85c\uadf8\uc778",className:"signin-form__submit"}),Object(f.jsx)("div",{children:g})]}),Object(f.jsxs)("div",{className:"social-login",children:[Object(f.jsx)("button",{className:"social-login__google",name:"google",onClick:C,children:"Continue with Google"}),Object(f.jsx)("button",{className:"social-login__github",name:"github",onClick:C,children:"Continue with Github"})]}),Object(f.jsx)("span",{className:"toggle-account",onClick:function(){return x(!O)},children:O?"Sign In":"Create Account"})]})},C=function(e){var t=e.isLoggedIn,n=e.userObj;return Object(f.jsxs)(o.a,{children:[t?Object(f.jsx)(w,{}):"",Object(f.jsx)(u.d,{children:t?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(u.b,{exact:!0,path:"/",children:Object(f.jsx)(v,{userObj:n})}),Object(f.jsx)(u.b,{exact:!0,path:"/profile",children:Object(f.jsx)(g,{})}),Object(f.jsx)(u.a,{from:"/*",to:"/"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(u.b,{exact:!0,path:"/",children:Object(f.jsx)(k,{})}),Object(f.jsx)(u.a,{from:"/*",to:"/"})]})})]})};var A=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(h.currentUser),i=Object(s.a)(r,2),o=i[0],u=i[1],j=Object(c.useState)(null),l=Object(s.a)(j,2),b=l[0],d=l[1];return Object(c.useEffect)((function(){h.onAuthStateChanged((function(e){console.log(e),e?(u(!0),d(e)):u(!1),a(!0)}))})),Object(f.jsx)(f.Fragment,{children:n?Object(f.jsx)(C,{isLoggedIn:o,userObj:b}):"Loading..."})};n(45);i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.0a0d3739.chunk.js.map