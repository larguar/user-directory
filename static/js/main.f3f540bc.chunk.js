(this.webpackJsonppracticeapp=this.webpackJsonppracticeapp||[]).push([[0],{15:function(e,a,t){e.exports=t(39)},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(12),c=t.n(l);var o=function(){return n.a.createElement("header",{className:"container-fluid"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"Employee Directory"),n.a.createElement("p",{className:"lead"},"Sort by name or use the search box to narrow your results.")))},s=t(2),i=t(14),m=n.a.createContext({});var d=function(){var e=Object(r.useContext)(m);return n.a.createElement("form",null,n.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search for an Employee","aria-label":"Search",onChange:function(a){return e.handleSearchChange(a)}}))};var u=function(){var e=Object(r.useContext)(m);return n.a.createElement("main",{className:"container"},n.a.createElement(d,null),n.a.createElement("table",{className:"table table-striped table-responsive-md"},n.a.createElement("thead",null,n.a.createElement("tr",null,e.developerState.headings.map((function(a){var t=a.name;return n.a.createElement("th",{className:t.toLowerCase(),key:t,onClick:function(){e.sort(t.toLowerCase())}},t)})))),n.a.createElement("tbody",null,void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var a=e.login,t=e.name,r=e.picture,l=e.phone,c=e.email,o=e.dob;return n.a.createElement("tr",{key:a.uuid},n.a.createElement("td",{className:"align-middle"},n.a.createElement("img",{src:r.medium,alt:"".concat(t.first," ").concat(t.last)})),n.a.createElement("td",{className:"align-middle"},t.first," ",t.last),n.a.createElement("td",{className:"align-middle"},n.a.createElement("a",{href:"tel:"+l},l)),n.a.createElement("td",{className:"align-middle"},n.a.createElement("a",{href:"mailto:"+c},c)),n.a.createElement("td",{className:"align-middle"},new Date(o.date).toLocaleDateString()))})):n.a.createElement("div",null))))},f=t(13),v=t.n(f),h=function(){return v.a.get("https://randomuser.me/api/?results=100&nat=us")};var E=function(){var e=Object(r.useState)({users:[],order:"ascend",filteredUsers:[],headings:[{name:"Image"},{name:"Name"},{name:"Phone"},{name:"Email"},{name:"DOB"}]}),a=Object(i.a)(e,2),t=a[0],l=a[1];return Object(r.useEffect)((function(){h().then((function(e){l(Object(s.a)(Object(s.a)({},t),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),n.a.createElement(m.Provider,{value:{developerState:t,handleSearchChange:function(e){var a=e.target.value,r=t.users.filter((function(e){return-1!==e.name.first.toLowerCase().indexOf(a.toLowerCase())}));l(Object(s.a)(Object(s.a)({},t),{},{filteredUsers:r}))},sort:function(e){"descend"===t.order?l({order:"ascend"}):l({order:"descend"});var a=t.filteredUsers.sort((function(a,r){return"ascend"===t.order?void 0===a[e]?1:void 0===r[e]?-1:"name"===e?a[e].first.localeCompare(r[e].first):r[e]-a[e]:void 0===a[e]?1:void 0===r[e]?-1:"name"===e?r[e].first.localeCompare(a[e].first):r[e]-a[e]}));l(Object(s.a)(Object(s.a)({},t),{},{filteredUsers:a}))}}},n.a.createElement("div",{className:"data-area"},t.filteredUsers.length>0?n.a.createElement(u,null):n.a.createElement("div",null)))};var p=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(o,null),n.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(37),t(38);c.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.f3f540bc.chunk.js.map