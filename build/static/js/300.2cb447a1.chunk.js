"use strict";(self.webpackChunklensqr_test=self.webpackChunklensqr_test||[]).push([[300],{300:(s,e,A)=>{A.r(e),A.d(e,{default:()=>h});var a=A(216),i=A(654),r=A(579);const l=s=>{let{children:e,color:A,status:a,userId:l}=s;const t={padding:"0.75rem 1rem",borderRadius:"0.5rem",color:A,border:"1px solid ".concat(A),cursor:"pointer",margin:"0 10px",fontWeight:600,fontSize:"0.875",letterSpacing:"0.05rem"};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("button",{style:t,onClick:async s=>{await(0,i.Wk)(a,l)},children:[e.toUpperCase()," USER"]})})},t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD/SURBVHgBtVPNDYIwFP5KHYCT0XhxBNxAB/BvAuMGOoGO4CYoxrM6gW6gBxOUkwNQaotAWqA96Ze8pnnf+38t8E+Ee/RDH32bTcNGUo4Zp+n1ZLJxYAFHmn1iszEGyErvCnFtbRgDUIpZfieOuQoijyjAkX+zqYQrdK6iupf4e3OEQTpExjCnDnxO4OUGvJqsq3DnRPgUFeR47bAWmhUsEM7L1ggbpRIdkQ9PrO5S55wQDNpDfaWVITK9bx1xVVUJoE5clPeWUseZAxCMM++rGG5PCrINFJwJjwO8VwD+3GFz8/VWpE5y5Uel/QXK4MUM084U23Lw1hiLMMAVv8YH22xKX8apAFkAAAAASUVORK5CYII=",c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEySURBVHgBtZPBTcNQDIa/l1QITvSGOEE36AZkAQTZoBsAE7RMABsAE4Sk4tyMkE4AlZDSlAM5AYe+F/xAkaI0pCqCX4rsZzu2328/+E+kEYN5xHlbjNPmdOFIyferBGnAYSGyKJg9BnQ3TiDlPaO4Kwz3Oy4DNsUi4qbUs4jgp7jO8wP9Lc0ERaINs9JhIKnoYRpyW54dh11V4GmN/2Ww95WKEytZA4nxbEdlrKo65yHXyuF175jLpp8XY86MofduGPV88sYKdu5Ns89CRnYv6vaVKcjocqV5qtstRzRgJYGjOHmDuGw5GzO0uhAdC3H9tQmkhXwbui9ClIYpS6aWtA+xKcVBfak61YMEnoroOi5XS83Fvv99FWE8cV2GdjMlue0ipgl2Cm2PxxKZVRbsT/AJKEB0CF44TtQAAAAASUVORK5CYII=",n=s=>{let{tier:e}=s;switch(e){case 1:return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{src:t,alt:"filledstar"}),(0,r.jsx)("img",{src:c,alt:"unfilledstar"}),(0,r.jsx)("img",{src:c,alt:"unfilledstar"})]})});case 2:return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{src:t,alt:"filledstar"}),(0,r.jsx)("img",{src:t,alt:"filledstar"}),(0,r.jsx)("img",{src:c,alt:"unfilledstar"})]})});case 3:return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{src:t,alt:"filledstar"}),(0,r.jsx)("img",{src:t,alt:"filledstar"}),(0,r.jsx)("img",{src:t,alt:"filledstar"})]})})}};var d=A(43);const o=s=>{let{info:e,user:A}=s;return(0,r.jsxs)("div",{className:"info-box",children:[(0,r.jsx)("h4",{children:e.title}),(0,r.jsx)("div",{className:"info-group-con",children:e.values.map((s=>{let a=s.title.toLocaleUpperCase(),i=s.value;if("Personal Information"===e.title&&("FULL NAME"===s.title&&(i=A.name),"Email Address"===s.title&&(i=A.email),"Gender"===s.title&&(i=A.gender)),"Monthly income"===s.title){const s=i.split("- ");i="\u20a6".concat(s[0]," - \u20a6").concat(s[1])}return"loan repayment"===s.title&&(i="\u20a6".concat(s.value)),"Phone Number"===s.title&&"Personal Information"!==e.title&&(i="+234 ".concat(s.value)),(0,r.jsxs)("div",{className:"info-group",children:[(0,r.jsx)("p",{className:"key",children:a}),(0,r.jsx)("p",{className:"value nowrap",children:i})]},s.title)}))}),(0,r.jsx)("hr",{})]})},x=s=>{let{user:e}=s;return(0,r.jsx)(r.Fragment,{children:e.generalDetails.map((s=>(0,r.jsx)(o,{info:s,user:e},s.title)))})},g=["General Details","Documents","Bank Details","Loans","Savings","App and System"],h=()=>{const s=(0,a.LG)(),e=(0,a.Zp)(),[A,i]=(0,d.useState)(g[0]),t=s=>e=>{i(s)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("article",{className:"user-details",children:[(0,r.jsx)("section",{className:"sect-1",children:(0,r.jsx)("button",{onClick:s=>{e(-1)},children:(0,r.jsxs)("div",{className:"button-con",children:[(0,r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADSSURBVHgB7dMxCsIwFMbxL8buHqGzg+gBBL2Bo2O9hWNLi6seIcVFsIqeQMHFzSLirDeou+2zVgWLdowgvN+UZPmHBw9gjLF/I749dq2+GZMxhIidqRqE0KBUEF0R0Ikh69CkXBA1IcifK09BE1EUDZRnQaMs3LHsikHxLovqFSGBE4zdUTn/B3ocic7QJJEietUyXctOR52koyYzzauZ7/agUW6dfhmX75dDuI5qjfbyvkrptVWtNS/H/WYLDT72eKLskxSlNhH5V2kswBhj7OkGXNxZ5THiXuoAAAAASUVORK5CYII=",alt:"back arrow",width:30,height:30}),(0,r.jsx)("span",{children:"Back To Users"})]})})}),(0,r.jsxs)("section",{className:"sect-2",children:[(0,r.jsx)("h1",{className:"bold",children:"User Details"}),(0,r.jsxs)("div",{className:"button-con",children:[(0,r.jsx)(l,{color:"rgba(228, 3, 59, 1)",status:"Blacklisted",userId:s.id,children:"blacklist"}),(0,r.jsx)(l,{color:"rgba(57, 205, 204, 1)",status:"Active",userId:s.id,children:"activate"})]})]}),(0,r.jsxs)("section",{className:"sect-3",children:[(0,r.jsxs)("div",{className:"user-con",children:[(0,r.jsx)("figure",{className:"fig-1",children:(0,r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANZSURBVHgB7VixbhNBEJ25c6gS8B/knB+IQ4lEdO7ogC9IKKlIiVAgZwiILk5JFecLkj/IoTR0cb6ApaO0CEKg2DvMnH2+dXxn716wQCKv2lnt7L6b3X0zewA3uMHfBcI1EYRbVegt1sGD0ENclj5N9AUIOup09xiuidIEhZinF58R4hab1YJhCgnb2vu2r+JWF0qgFMEgfB4gLZxI09JFEV42VPxegSOcCeaTo3MiiMHTncTUXh3Re8j9wXVJOhGUbUVaOsvIYZew31Tx21b++JebvMV7TLSakbxYc9luDxzg6aWdcXJeo4hcwiZ+0+YxazI25Qz69hY4wDqCQRhx9PTnNBqE8EQI2PluP+JIHg1N/rCLmm0U7SPY74XZVqGyJSdQcSI38dDkORZDW197ggj1tEmkD8ERRHQ+MjSEtn4uZzDIVtMKXJHecGki3rF2g38cLgSzQ41eHVyhvWDUlFRoCXuCxhYh4io4gn02jFU7tn4OEbx1bOhZKNJh6ymCDdkZ5jm+x7a+1gRVHHX59u6nNuvagaS9WX6D1Ah7qU1Ih3PLJOBVWqKBQ4uFe+EsuJ9Ep4CcCPSCpMaRfgJUInBAiWIh4ojok4lCgOhwJD/or+JAN0NjKTVIjZECB5Qst3JJTlumFDlBSR3sdklT07g0U0G6v1+GnMA5givrr7iKpgiKq+giKNLQVKf2OVzgUM0kheoBQF4elUgm7xBDzEUrKecjqEPYe2xbuFoRDMIXdSRfquiqSYpQZKfSLto+Pqt8UXp8k72Nyeq6zyTfzRTsmQQnyY2ItUQbwRIsORFr547RJdV4YxZJnD5psq1jOsa3kb88sk5V4/NF/LH6yIgmk7xcm7bdU2/x8HFkkmuUJScQX5ljXOwrR8nb2pXgyvp2zvujnFRcIZnsQiZRWJ/2TvHzOgc51j9ObX5/PFXx6xj+ELoq/lqtrf/i8/UgochZp1q7+6GrPv28OjY/grqymRlu7w9b8JzyGoyHZrUoirkEzdqNRbkJc4I5NyJt5I2ZICiyAkbtNo/oZah0zDdz7d7uMswiCP2sNOffGR9hjhAdRaB4tJ7/o3F1TM4WY5C1qbSk2EJrIwj+5J2tTPT4fpt0L0jaSYE6Z6TreXKcdttwg/8NvwG204XG6dS4AgAAAABJRU5ErkJggg==",alt:"user avatar",height:40,width:40})}),(0,r.jsxs)("div",{className:"user-display",children:[(0,r.jsx)("h2",{className:"bold",children:"".concat(s.name)}),(0,r.jsx)("p",{children:"".concat(s.guid)})]}),(0,r.jsx)("div",{className:"vert"}),(0,r.jsxs)("div",{className:"user-display",children:[(0,r.jsx)("h4",{className:"bold",children:"User's Tier"}),(0,r.jsx)("div",{className:"tier nowrap",children:(0,r.jsx)(n,{tier:s.tier})})]}),(0,r.jsx)("div",{className:"vert"}),(0,r.jsxs)("div",{className:"user-display",children:[(0,r.jsx)("h2",{className:"bold",children:"\u20a6".concat(s.cash)}),(0,r.jsx)("p",{children:"".concat(s.acctNo,"/Providus Bank")})]})]}),(0,r.jsx)("nav",{children:g.map((s=>(0,r.jsx)("div",{className:"".concat(A===s?"link link-active ":"link"),onClick:t(s),children:(0,r.jsx)("p",{children:s})},s)))})]}),(0,r.jsx)("section",{className:"sect-4",children:A!==g[0]?(0,r.jsx)("h1",{className:"err",children:"Page Under Construction"}):(0,r.jsx)(x,{user:s})})]})})}}}]);
//# sourceMappingURL=300.2cb447a1.chunk.js.map