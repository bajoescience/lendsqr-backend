"use strict";(self.webpackChunklensqr_test=self.webpackChunklensqr_test||[]).push([[818],{818:(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});var n=t(654),A=t(43);var a=t(579);const l=e=>{let{title:s,filterCon:t,setFilterCon:n}=e;return(0,a.jsx)("th",{colSpan:"status"===s?2:1,children:(0,a.jsxs)("div",{className:"con relative",children:[s.toUpperCase(),(0,a.jsx)("img",{onClick:e=>{const A=e.pageX,a=e.pageY,l=document.getElementById("filter");if(t!==s)return l.style.top="".concat((a+20).toString(),"px"),l.style.left="".concat((A-130).toString(),"px"),void n(s);l.style.left="-3000px",n("")},className:"pointer",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACSSURBVHgB1Y/BCcJAEEX/TLYQS7EEQXIzmBa8ih6C3i3BFbwqtmAnlmADzndXMOSQQEIOSd5lHsPMZwYYGkmzbY4eOGpyRg8cyAKTRv6yXO0WmsipzZJ9uLldj4/oruwGo1HaBFS2RkDjyWm2zymcRTeV190ffN1c4zdUrEP+PLoanqH4TgEQFgK7/C4QfWO0fAFPiCHf8x3bwgAAAABJRU5ErkJggg==",alt:"filter",loading:"lazy"})]})})},i=()=>{const[e,s]=(0,A.useState)("");return(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{children:n.nI.map((t=>(0,a.jsx)(l,{title:t,filterCon:e,setFilterCon:s},t)))})})},r=e=>{let{status:s}=e;return(0,a.jsx)("button",{className:"Inactive"===s?"status-button inactive":"Active"===s?"status-button actived":"Blacklisted"===s?"status-button blacklisted":"status-button pending",children:s})},c=e=>{let{user:s,statusOwner:t,setanchor_id:n}=e;return(0,a.jsxs)("tr",{className:"bordered",children:[(0,a.jsx)("td",{children:s.organization}),(0,a.jsxs)("td",{children:[s.username," "]}),(0,a.jsxs)("td",{children:[s.email," "]}),(0,a.jsxs)("td",{children:[s.phone," "]}),(0,a.jsxs)("td",{children:[s.date," "]}),(0,a.jsx)("td",{children:(0,a.jsx)(r,{status:s.status})}),(0,a.jsx)("td",{children:(0,a.jsx)("div",{className:"select-button-con",children:(0,a.jsx)("img",{onClick:e=>{const A=s.id;if(!A)return;const a=e.pageX,l=e.pageY,i=document.getElementById("statusCard");if(t!==A)return i.style.top="".concat((l+7).toString(),"px"),i.style.left="".concat((a-110).toString(),"px"),void n(A);n(null),i.style.left="-3000px"},className:"pointer",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADQSURBVHgB3ZTNDYJAEIVncI0XSSiBTqSEjT8JB43bgRw9YFw7sARK0A60EkqQxCswzhrwyGIg0fAlk32Hl7eTncwCDAIZal+qvd/G69gMq81BiUmRChqnc9adAwkpqDU6MOscyI6kissA6Qp9IJX2TMEvQJtBqsgT5B6NzvF5uiTnrMkvwMKonGq+dldp00DU5LcP5UusHRaO0KMy/2j4S8xgTLXxWt9wsY4lT5lXz30sVRx0DuR1k3y8uyPCbQ+BeKs1IdyhD0Jlvi/twyB4ASNSM3uUCfTQAAAAAElFTkSuQmCC",alt:"select",loading:"lazy"})})})]})},d=e=>{let{users:s,anchor_id:t,setanchor_id:n}=e;return(0,a.jsx)("tbody",{children:null===s||void 0===s?void 0:s.map(((e,s)=>(0,a.jsx)(c,{user:e,statusOwner:t,setanchor_id:n},s)))})},o=(0,A.lazy)((()=>t.e(325).then(t.bind(t,325)))),u=(0,A.lazy)((()=>t.e(233).then(t.bind(t,233)))),g=e=>{let{users:s,setUsers:t}=e;const[l,r]=(0,A.useState)({organization:"",username:"",email:"",phone:"",date:"",status:"",id:""}),[c,g]=(0,A.useState)(null),[p,h]=(0,A.useState)({diff:10,page:1}),[x,m]=(0,A.useState)(null);(0,A.useEffect)((()=>{g((0,n.nl)(s,l))}),[s,l]),(0,A.useEffect)((()=>{c&&h({...p,pageCount:Math.ceil(c.length/p.diff)})}),[c,p.diff]);const j=(0,n.CV)({page:p.page,diff:p.diff,users:c}),f=e=>{const{page:s,pageCount:t}=p;return"prev"===e?e=>{1!==s&&h({...p,page:s-1})}:e=>{s!==t&&h({...p,page:s+1})}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"table-con",children:(0,a.jsxs)("table",{children:[(0,a.jsx)(i,{}),(0,a.jsx)(d,{anchor_id:x,setanchor_id:m,users:(0,n.nl)(j,l)})]})}),(0,a.jsxs)("div",{className:"paginate-con",children:[(0,a.jsxs)("div",{children:["Showing",(0,a.jsx)("span",{className:"select-con",children:(0,a.jsx)("select",{value:p.diff,onChange:e=>{h({...p,page:1,diff:e.target.value})},children:(()=>{if(c){if(c.length<10){const e=c.length;return(0,a.jsx)("option",{value:e,children:e})}return n.zl.map((e=>e>c.length?null:(0,a.jsx)("option",{value:e,children:e},e)))}return(0,a.jsx)("option",{value:0,children:"0"})})()})}),"out of ",c?c.length:0]}),(0,a.jsxs)("nav",{children:[(0,a.jsx)("button",{className:"pag-nav-butt",onClick:f("prev"),children:(0,a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAMCAYAAABfnvydAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAChSURBVHgBdZDBCcJQDIYTH4LH6gKNG+gC5blBV3ALEdGCC3QEV3AC2wlcoU5gwIsXG/MK9iBJDuEP/wf5EwCjKO5XVBxPSaNlooSbykzwNZ/4Jmy7pmb0zfNlXOGZA0BxRyjTu2Wm0gwzVo6Hocf8P3Tgrnlny81Vd5WAUi7yCM9H245AagqxB4Uf6UHGoyoN3etFQoKfNYD56oqoONRJfwEj/05PtVOJ1AAAAABJRU5ErkJggg==",alt:"left nav icon"})}),(()=>{const{pageCount:e,page:s}=p,t=Array.from(Array(e).keys()).map((e=>e+1));return(0,a.jsx)(a.Fragment,{children:t.map((t=>e&&(1===s?t>s+2:t>s+1||t<s-1)&&t<e-1?t===s+3?(0,a.jsx)("span",{children:"..."},t):void 0:(0,a.jsx)("span",{onClick:()=>{h({...p,page:t})},className:t===s?"page-span pag-active":"page-span",children:t},t)))})})(),(0,a.jsx)("button",{className:"pag-nav-butt",onClick:f("next"),children:(0,a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAMCAYAAABfnvydAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACsSURBVHgBfZC9DcIwEIXvxQt4BEcsEFoKy2yQDVgDoQAu6ViBFdggAnrYgCvpsESJiDEQ/iInr7AsvU+n744oROnpUpmxokigzCSDF/vwZ4/rkMsF/wLC8fYkUw0QcpDIZTpYO965D/B4HG/KNki8yTYITSllCguP+cvp0k+agKiSY+0viaT8A3p6NqrgV6F0HknYyDI6ysNzTldZH8pK+Ns5Vn7NdWEDmFEkdwRQVSMywEKBAAAAAElFTkSuQmCC",alt:"right nav icon"})})]})]}),(0,a.jsxs)(A.Suspense,{fallback:(0,a.jsx)("div",{children:"Loading..."}),children:[(0,a.jsx)(o,{filterSchema:l,setFilterSchema:r}),(0,a.jsx)(u,{user:x,setanchor_id:m,updateChangedUser:e=>{s&&t((()=>s.map((s=>s.id!==e.id?s:e))))}})]})]})};var p=t(133);const h=e=>{let{stat:s}=e;(0,A.useRef)(s.count);return(0,a.jsxs)("div",{className:"box",children:[(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:s.icon,alt:"users"})}),(0,a.jsx)("div",{className:"box-name",children:s.name}),(0,a.jsx)("div",{className:"box-count",children:s.count.toLocaleString()})]})},x=e=>{let{users:s}=e;const[t,l]=(0,A.useState)(n.Wo);return(0,A.useEffect)((()=>{const e=t.map((e=>"USERS"===e.name?{...e,count:(null===s||void 0===s?void 0:s.length)||0}:"ACTIVE USERS"===e.name?{...e,count:(null===s||void 0===s?void 0:s.filter((e=>"Active"===e.status)).length)||0}:e));l(e)}),[s]),(0,a.jsx)("div",{className:"box-display",children:t.map((e=>(0,a.jsx)(h,{stat:e},e.name)))})},m=()=>{const[e,s]=(0,A.useState)(null);return(0,A.useEffect)((()=>{(async()=>{try{const e=(await(0,p.lo)()).map(n._h);s(e)}catch(e){s(null)}})()}),[]),(0,a.jsxs)("div",{className:"main",children:[(0,a.jsx)("h2",{children:"Users"}),(0,a.jsx)(x,{users:e}),(0,a.jsx)(g,{users:e,setUsers:s})]})}}}]);
//# sourceMappingURL=818.290f439b.chunk.js.map