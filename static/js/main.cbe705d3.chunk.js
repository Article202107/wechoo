(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{45:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(27),a=n.n(i),s=n(6),u=n(20),o=n(5),j=n(10),b=n.n(j),l=n(15),d=n(21),O=n(18);n(34),n(46),n(47);O.a.initializeApp({apiKey:"AIzaSyCzX21--oQ7YQqGcRcZOZk1ntQvr4FYwkY",authDomain:"wechoo-ce4f1.firebaseapp.com",projectId:"wechoo-ce4f1",storageBucket:"wechoo-ce4f1.appspot.com",messagingSenderId:"534329892446",appId:"1:534329892446:web:987c3804d1c8075b66decf",measurementId:"G-56PJZ3JMQJ"});var p=O.a.auth,h=O.a.auth(),x=O.a.firestore(),f=(O.a.storage(),n(1)),m=function(e){var t=e.questionObj,n=e.userObj,r=t.creator===n.uid,i=Object(c.useState)(!1),a=Object(s.a)(i,2),u=a[0],o=a[1],j=Object(c.useState)(""),O=Object(s.a)(j,2),p=O[0],h=O[1],m=Object(c.useState)(""),v=Object(s.a)(m,2),g=v[0],w=v[1],k=Object(c.useState)(""),C=Object(s.a)(k,2),S=C[0],A=C[1],y=Object(c.useState)({}),B=Object(s.a)(y,2),I=B[0],q=B[1],Q=Object(c.useState)([]),E=Object(s.a)(Q,2),P=E[0],D=E[1],F=function(){var e=Object(l.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"),e.t0=n,!e.t0){e.next=5;break}return e.next=5,x.collection("Question").doc(t.id).delete();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(e){var t=e.target,n=t.name,c=t.value;"newQuestion"===n?h(c):"newItemA"===n?w(c):"newItemB"===n&&A(c)},J=function(){u||(h(t.question),w(t.itemA),A(t.itemB)),o((function(e){return!e}))};Object(c.useEffect)((function(){x.collection("Answer").where("qid","==",t.id).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(d.a)({id:e.id},e.data())}));D(t),q({pickCountA:t.filter((function(e){return"A"===e.pickCode})).length,pickCountB:t.filter((function(e){return"B"===e.pickCode})).length})}))}),[]);var L=function(){var e=Object(l.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,x.collection("Question").doc(t.id).update({question:p,itemA:g,itemB:S});case 3:J();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(b.a.mark((function e(c){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!P.find((function(e){return e.uid===n.uid}))){e.next=3;break}return alert("\uc774\ubbf8 \uc120\ud0dd\ud558\uc168\uc2b5\ub2c8\ub2e4."),e.abrupt("return");case 3:return e.next=5,x.collection("Answer").add({qid:t.id,uid:n.uid,pickCode:c,createAt:Date.now()});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:u?Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{onSubmit:L,children:[Object(f.jsx)("input",{name:"newQuestion",onChange:G,value:p,type:"text"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{name:"newItemA",onChange:G,value:g,type:"text"}),Object(f.jsx)("input",{name:"newItemB",onChange:G,value:S,type:"text"})]}),Object(f.jsx)("input",{type:"submit",value:"Edit"}),Object(f.jsx)("button",{onClick:J,children:"Cancel"})]})}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:t.question}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:I.pickCountA}),Object(f.jsx)("button",{onClick:function(){return z("A")},children:t.itemA})]}),Object(f.jsx)("span",{children:" VS "}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:I.pickCountB}),Object(f.jsx)("button",{onClick:function(){return z("B")},children:t.itemB})]})]}),r&&Object(f.jsxs)("div",{className:"edit-buttons",children:[Object(f.jsx)("button",{onClick:F,children:"Delete Question"}),Object(f.jsx)("button",{onClick:J,children:"Edit Question"})]})]})})},v=function(e){var t=e.userObj,n=Object(c.useState)(""),r=Object(s.a)(n,2),i=r[0],a=r[1],u=Object(c.useState)(""),o=Object(s.a)(u,2),j=o[0],O=o[1],p=Object(c.useState)(""),h=Object(s.a)(p,2),v=h[0],g=h[1],w=Object(c.useState)([]),k=Object(s.a)(w,2),C=k[0],S=k[1];Object(c.useEffect)((function(){x.collection("Question").orderBy("createAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(d.a)(Object(d.a)({id:e.id},e.data()),{},{pickCountA:0,pickCountB:0})}));S(t)}))}),[]);var A=function(e){var t=e.target,n=t.name,c=t.value;"question"===n?a(c):"itemA"===n?O(c):"itemB"===n&&g(c)},y=function(){var e=Object(l.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log(i),e.next=4,x.collection("Question").add({question:i,itemA:j,itemB:v,creator:t.uid,createAt:Date.now()});case 4:a("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsxs)("form",{onSubmit:y,children:[Object(f.jsx)("span",{children:"question"}),Object(f.jsx)("input",{name:"question",placeholder:"\ubb34\uc5c7\uc744 \uc120\ud0dd\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",value:i,onChange:A,type:"text"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"text",name:"itemA",placeholder:"A\uc548",value:j,onChange:A}),Object(f.jsx)("input",{type:"text",name:"itemB",placeholder:"B\uc548",value:v,onChange:A})]}),Object(f.jsx)("input",{type:"submit",value:"question"})]}),Object(f.jsx)("div",{children:C.map((function(e){return Object(f.jsx)(m,{questionObj:e,userObj:t},e.id)}))})]})},g=function(){return Object(f.jsx)("span",{children:"Profile"})},w=function(){return Object(f.jsxs)("nav",{children:[Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(u.b,{to:"/",children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)(u.b,{to:"/profile",children:"Profile"})})]}),Object(f.jsx)("input",{type:"button",value:"Log Out",onClick:function(){h.signOut()}})]})},k=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),a=Object(s.a)(i,2),u=a[0],o=a[1],j=Object(c.useState)(!1),d=Object(s.a)(j,2),O=d[0],x=d[1],m=Object(c.useState)(""),v=Object(s.a)(m,2),g=v[0],w=v[1],k=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?r(c):"password"===n&&o(c)},C=function(){var e=Object(l.a)(b.a.mark((function e(t){var n,c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.name,e.prev=1,"google"===n?c=new p.GoogleAuthProvider:"github"===n&&(c=new p.GithubAuthProvider),e.next=5,h.signInWithPopup(c);case 5:r=e.sent,console.log(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!O){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(n,u);case 5:c=e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(n,u);case 10:c=e.sent;case 11:console.log(c),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),w(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsxs)("form",{onSubmit:S,children:[Object(f.jsx)("input",{type:"text",name:"email",value:n,onChange:k,placeholder:"Email",required:!0}),Object(f.jsx)("input",{type:"password",name:"password",value:u,onChange:k,placeholder:"Password",required:!0}),Object(f.jsx)("input",{type:"submit",value:O?"Create Account":"Sign In"}),Object(f.jsx)("div",{children:g})]}),Object(f.jsx)("span",{onClick:function(){return x(!O)},children:O?"Sign In":"Create Account"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{name:"google",onClick:C,children:"Continue with Google"}),Object(f.jsx)("button",{name:"github",onClick:C,children:"Continue with Github"})]})]})},C=function(e){var t=e.isLoggedIn,n=e.userObj;return Object(f.jsxs)(u.a,{children:[t?Object(f.jsx)(w,{}):"",Object(f.jsx)(o.d,{children:t?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(o.b,{exact:!0,path:"/",children:Object(f.jsx)(v,{userObj:n})}),Object(f.jsx)(o.b,{exact:!0,path:"/profile",children:Object(f.jsx)(g,{})}),Object(f.jsx)(o.a,{from:"/*",to:"/"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(o.b,{exact:!0,path:"/",children:Object(f.jsx)(k,{})}),Object(f.jsx)(o.a,{from:"/*",to:"/"})]})})]})};var S=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(h.currentUser),a=Object(s.a)(i,2),u=a[0],o=a[1],j=Object(c.useState)(null),b=Object(s.a)(j,2),l=b[0],d=b[1];return Object(c.useEffect)((function(){h.onAuthStateChanged((function(e){console.log(e),e?(o(!0),d(e)):o(!1),r(!0)}))})),Object(f.jsx)(f.Fragment,{children:n?Object(f.jsx)(C,{isLoggedIn:u,userObj:l}):"Loading..."})};a.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.cbe705d3.chunk.js.map