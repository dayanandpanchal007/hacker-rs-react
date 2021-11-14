(this["webpackJsonphacker-rs-react"]=this["webpackJsonphacker-rs-react"]||[]).push([[0],{67:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(19),s=a.n(r),l=a(9),o=a(3),i=a(5),j=a.n(i),d=a(11),u=a(2),b=a(12),h=new function e(){var t=this;Object(b.a)(this,e),this.validateUser=function(){var e=localStorage.getItem("hack-token");try{t.authenticated=e&&3===e.split(".").length}catch(a){t.authenticated=!1}},this.login=function(e){t.authenticated=!0,e&&e()},this.logout=function(e){t.authenticated=!1,localStorage.removeItem("hack-token"),localStorage.removeItem("hack-employee"),e&&e()},this.isAuthenticated=function(){return t.authenticated},this.validateUser()},m=a(20),O=a.n(m);O.a.defaults.baseURL="https://hacker-rank-system-node.herokuapp.com/";var x={get:O.a.get,post:O.a.post},p="hack-token",f={setHackToken:function(e){return localStorage.setItem(p,e)},getHackToken:function(){return localStorage.getItem(p)}},v=a(0),g=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(u.a)(r,2),i=s[0],b=s[1],m=Object(c.useState)(!1),O=Object(u.a)(m,2),p=O[0],g=O[1],N=Object(c.useState)(!1),k=Object(u.a)(N,2),S=k[0],w=k[1];Object(c.useEffect)((function(){w(h.isAuthenticated())}),[a,i]);return S?Object(v.jsx)(o.a,{to:"/home"}):Object(v.jsxs)("div",{className:"card bg-dark w-50 mx-auto mt-5",children:[Object(v.jsx)("div",{className:"card-header",children:Object(v.jsx)("h2",{children:"Login | Hacker Net"})}),Object(v.jsxs)("div",{className:"card-body",children:[p?Object(v.jsx)("div",{className:"alert alert-danger",children:"Invalid Credentials! Please try again."}):null,Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h.login(Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.post("/user/login",{email:a,password:i});case 3:t=e.sent,c=t.data,g(!1),f.setHackToken(c.token),window.location.href="/home",e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),g(!0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))))},children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{className:"text-label",htmlFor:"email",children:"Email"}),Object(v.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Email",value:a,onChange:function(e){return n(e.currentTarget.value)},onFocus:function(){return g(!1)}})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{className:"text-label",htmlFor:"password",children:"Password"}),Object(v.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:i,onChange:function(e){return b(e.currentTarget.value)},onFocus:function(){return g(!1)}})]}),Object(v.jsx)("button",{className:"btn btn-dark btn-block",type:"submit",children:"Login"}),Object(v.jsxs)("div",{className:"mt-3 text-center",children:["Don't have an account ",Object(v.jsx)(l.b,{className:"text-link",to:"/register",children:"Register Here"})]})]})]})]})},N=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(u.a)(r,2),o=s[0],i=s[1],b=Object(c.useState)(""),h=Object(u.a)(b,2),m=h[0],O=h[1],p=Object(c.useState)(""),f=Object(u.a)(p,2),g=f[0],N=f[1],k=Object(c.useState)(""),S=Object(u.a)(k,2),w=S[0],y=S[1],C=Object(c.useState)(""),F=Object(u.a)(C,2),T=F[0],E=F[1],H=Object(c.useState)(!1),L=Object(u.a)(H,2),R=L[0],P=L[1],A=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,x.post("/user/register",{firstname:a,lastname:o,email:m,location:g,education:w,password:T});case 4:P(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),P(!1);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"card bg-dark w-50 mx-auto mt-5",children:[Object(v.jsx)("div",{className:"card-header",children:Object(v.jsx)("h2",{children:"Register | Hacker Net"})}),Object(v.jsxs)("div",{className:"card-body",children:[R?Object(v.jsx)("div",{className:"alert alert-success",children:"Registration success!"}):null,Object(v.jsxs)("form",{onSubmit:A,children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{className:"text-label",htmlFor:"firstname",children:"Firstname"}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"firstname",placeholder:"Firstname",value:a,onChange:function(e){return n(e.currentTarget.value)}})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{className:"text-label",htmlFor:"lastname",children:"Lastname"}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"lastname",placeholder:"Lastname",value:o,onChange:function(e){return i(e.currentTarget.value)}})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{className:"text-label",htmlFor:"email",children:"Email"}),Object(v.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Email",value:m,onChange:function(e){return O(e.currentTarget.value)}})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{className:"text-label",htmlFor:"email",children:"Location"}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"location",placeholder:"Location",value:g,onChange:function(e){return N(e.currentTarget.value)}})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{className:"text-label",htmlFor:"email",children:"Education"}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"education",placeholder:"Education",value:w,onChange:function(e){return y(e.currentTarget.value)}})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{className:"text-label",htmlFor:"password",children:"Password"}),Object(v.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:T,onChange:function(e){return E(e.currentTarget.value)}})]}),Object(v.jsx)("button",{className:"btn btn-dark btn-block",type:"submit",children:"Register"}),Object(v.jsxs)("div",{className:"mt-3 text-center",children:["Already have an account ",Object(v.jsx)(l.b,{className:"text-link",to:"/login",children:"Login Here"})]})]})]})]})},k=function(){var e={"x-auth-token":f.getHackToken()},t=Object(c.useState)(null),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(!0),l=Object(u.a)(s,2),o=l[0],i=l[1];return Object(c.useEffect)((function(){(function(){var t=Object(d.a)(j.a.mark((function t(){var a,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.get("/user",{headers:e});case 2:a=t.sent,c=a.data,i(!1),r(c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(v.jsxs)(v.Fragment,{children:[o&&Object(v.jsx)(J,{}),Object(v.jsx)(w,{}),Object(v.jsx)("div",{className:"container mt-3 px-0",children:n&&Object(v.jsx)(F,{user:n})})]})},S=function(){return Object(v.jsx)("h2",{className:"text-center",children:"Page Not Found"})},w=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),a=t[0],n=t[1];Object(c.useEffect)((function(){var e=f.getHackToken().split(".")[1],t=JSON.parse(atob(e));n(t)}),[]);return Object(v.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark nav-bg",children:Object(v.jsxs)("div",{className:"container-fluid",children:[Object(v.jsx)(l.b,{className:"navbar-brand",to:"/home",children:"HACK NET"}),Object(v.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(v.jsx)("span",{className:"navbar-toggler-icon"})}),h.authenticated?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(v.jsxs)("ul",{className:"navbar-nav",children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(l.c,{className:"nav-link",to:"/home",children:"Home"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(l.c,{className:"nav-link",to:"/leaderboard",children:"Leaderboard"})})]})}),Object(v.jsxs)("div",{className:"d-flex",children:[(null===a||void 0===a?void 0:a.firstname)&&Object(v.jsxs)(l.b,{className:"nav-link d-block mr-1",to:"/home",children:[null===a||void 0===a?void 0:a.firstname," ",null===a||void 0===a?void 0:a.lastname]}),Object(v.jsxs)("div",{style:{cursor:"pointer"},className:"nav-link",onClick:function(){h.logout((function(){window.location.href="login"}))},title:"Logout",children:[Object(v.jsx)("i",{className:"bi bi-box-arrow-right mr-1"}),"Logout"]})]})]}):null]})})},y=function(e){var t=e.history,a={"x-auth-token":f.getHackToken()},n=Object(c.useState)([]),r=Object(u.a)(n,2),s=r[0],l=r[1],o=Object(c.useState)(!0),i=Object(u.a)(o,2),b=i[0],h=i[1],m=Object(c.useState)([{id:"1",title:"Name",content:function(e){return"".concat(e.firstname," ").concat(e.lastname)}},{id:"2",title:"Rank",field:"overallRank"},{id:"3",title:"Challenges Solved",field:"challengesSolved"},{id:"4",title:"Solutions Submitted",field:"solutionsSubmitted"},{id:"5",title:"Solutions Accepted",field:"solutionsAccepted"}]),O=Object(u.a)(m,1)[0];Object(c.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/user/allUsers",{headers:a});case 2:t=e.sent,c=t.data,h(!1),l(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(v.jsxs)(v.Fragment,{children:[b&&Object(v.jsx)(J,{}),Object(v.jsx)(w,{}),Object(v.jsxs)("div",{className:"container mt-3 px-0",children:[Object(v.jsx)("h1",{className:"text-center mt-3",children:"Leaderboard"}),Object(v.jsx)(U,{dataSource:s,columns:O,clickable:!0,onRowClick:function(e){return t.push("/showprofile/".concat(e.email))}}),Object(v.jsx)("br",{})]})]})},C=a.p+"static/media/hacker_dp.46da3045.jpeg",F=function(e){var t=e.user;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{style:{borderBottom:"1px solid"},className:"d-flex align-items-center",children:[Object(v.jsx)("div",{className:"w-25",children:Object(v.jsx)("img",{className:"w-100",style:{borderTopLeftRadius:"4px"},src:C,alt:"Hacker default pic"})}),Object(v.jsxs)("div",{className:"w-75 text-center",children:[Object(v.jsxs)("h2",{children:[t.firstname," ",t.lastname]}),Object(v.jsxs)("p",{className:"mb-0",children:["Overall Rank: ",t.overallRank]}),Object(v.jsxs)("p",{className:"mb-0",children:["Followers: ",t.followers]}),Object(v.jsxs)("p",{className:"mb-0",children:["Following: ",t.following]})]})]}),Object(v.jsx)("div",{children:Object(v.jsxs)("table",{className:"table mt-4 w-75 mx-auto",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Particulars"}),Object(v.jsx)("th",{children:"Metrics"})]})}),Object(v.jsxs)("tbody",{children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Education"}),Object(v.jsx)("td",{children:t.education})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Location"}),Object(v.jsx)("td",{children:t.location})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Challenges Solved"}),Object(v.jsx)("td",{children:t.challengesSolved})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Solutions Submitted"}),Object(v.jsx)("td",{children:t.solutionsSubmitted})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Solutions Accepted"}),Object(v.jsx)("td",{children:t.solutionsAccepted})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"No. Of Votes"}),Object(v.jsx)("td",{children:t.noOfVotes})]})]})]})})]})},T=function(e){var t=e.match,a={"x-auth-token":f.getHackToken()},n=Object(c.useState)(null),r=Object(u.a)(n,2),s=r[0],l=r[1],o=Object(c.useState)(!0),i=Object(u.a)(o,2),b=i[0],h=i[1];return Object(c.useEffect)((function(){if(t){var e=t.params.email;(function(){var t=Object(d.a)(j.a.mark((function t(){var c,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.get("/user/byEmail/".concat(e),{headers:a});case 2:c=t.sent,n=c.data,h(!1),l(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}}),[]),Object(v.jsxs)(v.Fragment,{children:[b&&Object(v.jsx)(J,{}),Object(v.jsx)(w,{}),Object(v.jsx)("div",{className:"container mt-3 px-0",children:s&&Object(v.jsx)(F,{user:s})})]})},E=a(14),H=a(16),L=a(15),R=a(21),P=a.n(R),A=a(17),I=function(e){Object(H.a)(a,e);var t=Object(L.a)(a);function a(){var e;Object(b.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).handleSort=function(t){var a=Object(A.a)({},e.props.sortColumn);e.props.sortable&&(a.field===t?a.order="asc"===a.order?"desc":"asc":(a.field=t,a.order="asc"),e.props.onSort(a))},e.renderSortIcon=function(t){var a=e.props,c=a.dataSource,n=a.sortColumn;if(a.sortable&&c&&c.length>0&&t.field===n.field)return"asc"===n.order?Object(v.jsx)("i",{className:"fa fa-long-arrow-up"}):Object(v.jsx)("i",{className:"fa fa-long-arrow-down"})},e}return Object(E.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.columns,c=t.sortable;return Object(v.jsx)("thead",{className:"thead-dark",children:Object(v.jsx)("tr",{children:a.map((function(t){return Object(v.jsxs)("th",{className:c?"clickable":"",style:{width:t.width||"auto"},scope:"col",onClick:function(){return e.handleSort(t.field)},children:[t.title," ",e.renderSortIcon(t)]},t.id)}))})})}}]),a}(c.Component),D=function(e){var t=e.dataSource,a=e.columns,c=e.onRowClick,n=e.clickable;return Object(v.jsx)("tbody",{children:t.length>0?t.map((function(e,t){return Object(v.jsx)("tr",{className:"grid-row",style:{cursor:n?"pointer":"default"},onClick:function(t){return n?c(e,t):null},children:a.map((function(a,c){return Object(v.jsx)("td",{children:a.field?e[a.field]:a.content(e,t)},t+c)}))},t)})):Object(v.jsx)("tr",{children:Object(v.jsx)("td",{colSpan:a.length,children:"No records"})})})},B=function(e){Object(H.a)(a,e);var t=Object(L.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.pages,c=t.currentPage,r=t.pageChange;return Object(v.jsx)("nav",{"aria-label":"pagination",children:Object(v.jsx)("ul",{className:"pagination",children:a.length>1?a.map((function(t){return Object(v.jsx)("li",{className:c===t?"page-item active":"page-item",children:Object(v.jsx)("a",{className:"clickable page-link",onClick:r.bind(e,t),children:t})},t)})):Object(v.jsx)(n.a.Fragment,{})})})}}]),a}(c.Component),U=function(e){Object(H.a)(a,e);var t=Object(L.a)(a);function a(){var e;Object(b.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).paginate=function(e,t,a,c){var n=((a=e?a:1)-1)*(c=e?c:t.length);return P()(t).slice(n).take(c).value()},e.getPages=function(e,t){var a=Math.ceil(e.length/t);return P.a.range(1,a+1)},e.getSortedData=function(){var t=e.props,a=t.dataSource,c=t.sortColumn;return t.sortable?P.a.orderBy(a,[c.field],[c.order]):a},e}return Object(E.a)(a,[{key:"render",value:function(){var e=this.props,t=e.dataSource,a=e.columns,c=e.clickable,r=e.onRowClick,s=e.pagination,l=e.pageChange,o=e.sortable,i=e.sortColumn,j=e.onSort,d=this.props,u=d.skip,b=d.currentPage,h=this.getPages(t,u),m=this.getSortedData(),O=this.paginate(s,m,b,u);return Object(v.jsxs)("div",{className:"grid",children:[Object(v.jsxs)("table",{className:"table table-striped table-hover",children:[Object(v.jsx)(I,{columns:a,dataSource:O,sortable:o,sortColumn:i,onSort:j}),Object(v.jsx)(D,{dataSource:O,columns:a,onRowClick:r,clickable:c})]}),s?Object(v.jsx)(B,{pages:h,currentPage:b,pageChange:l}):Object(v.jsx)(n.a.Fragment,{})]})}}]),a}(c.Component),J=(a(67),function(){return s.a.createPortal(Object(v.jsx)("div",{className:"wrapper",children:Object(v.jsx)("div",{className:"spinner"})}),document.getElementById("root"))}),M=a(37),V=function(e){var t=e.component,a=Object(M.a)(e,["component"]);return Object(v.jsx)(o.b,Object(A.a)(Object(A.a)({},a),{},{render:function(e){return h.isAuthenticated()?Object(v.jsx)(t,Object(A.a)({},e)):Object(v.jsx)(o.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},K=function(){return Object(v.jsx)(l.a,{children:Object(v.jsxs)(o.d,{children:[Object(v.jsx)(o.b,{exact:!0,path:"/login",component:g}),Object(v.jsx)(o.b,{exact:!0,path:"/register",component:N}),Object(v.jsx)(V,{exact:!0,path:"/home",component:k}),Object(v.jsx)(V,{exact:!0,path:"/leaderboard",component:y}),Object(v.jsx)(V,{exact:!0,path:"/showprofile/:email",component:T}),Object(v.jsx)(o.b,{exact:!0,path:"/page-not-found",component:S}),Object(v.jsx)(o.a,{from:"/",to:"/home"}),Object(v.jsx)(o.a,{from:"*",to:"/page-not-found"})]})})},_=function(){return Object(v.jsx)(K,{})};a(68),a(69);s.a.render(Object(v.jsx)(_,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.56d81925.chunk.js.map