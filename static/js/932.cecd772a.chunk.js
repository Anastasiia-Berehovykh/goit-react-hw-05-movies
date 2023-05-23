"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[932],{932:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,a,i,o,s,c,u,p,l,d=t(861),f=t(439),x=t(687),h=t.n(x),v=t(791),g=t(689),m=t(87),b=t(323),Z=t(585),w=t(168),j=t(686),k=j.Z.span(r||(r=(0,w.Z)(["\n  a {\n    position: relative;\n    padding-left: 12px;\n  }\n\n  a::before {\n    content: '';\n    display: block;\n\n    border-color: #ffc700;\n    border-style: solid;\n    border-width: 0 0 2px 2px;\n    height: 6px;\n    left: 0;\n    position: absolute;\n    width: 6px;\n    margin-top: -4px;\n    top: 50%;\n\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n  }\n\n  span {\n    color: #ffc700;\n  }\n\n  :hover,\n  :focus {\n    color: #ffc700;\n    a::before {\n      border-color: white;\n    }\n    span {\n      color: white;\n    }\n  }\n"]))),_=j.Z.div(a||(a=(0,w.Z)(["\n  display: flex;\n  gap: 12px;\n  margin-top: 12px;\n  margin-bottom: 12px;\n"]))),y=j.Z.img(i||(i=(0,w.Z)(["\n  max-width: 182px;\n  background: #424242;\n  border-radius: 15px;\n"]))),U=j.Z.h2(o||(o=(0,w.Z)(["\n  font-size: 26px;\n  margin-bottom: 12px;\n"]))),S=j.Z.h3(s||(s=(0,w.Z)(["\n  font-size: 16px;\n  margin-bottom: 6px;\n"]))),z=j.Z.p(c||(c=(0,w.Z)(["\n  font-size: 16px;\n  color: #888888;\n  margin-bottom: 12px;\n"]))),L=j.Z.ul(u||(u=(0,w.Z)(["\n  font-size: 16px;\n  display: flex;\n  gap: 18px;\n  padding: 0;\n\n  border-radius: 20px;\n  color: #888888;\n  margin-bottom: 12px;\n"]))),O=j.Z.ul(p||(p=(0,w.Z)(["\n  display: flex;\n  gap: 18px;\n  padding: 14px;\n\n  border-radius: 20px;\n"]))),C=j.Z.li(l||(l=(0,w.Z)(["\n  span {\n    color: #ffc700;\n  }\n\n  a:hover,\n  a:focus,\n  a:active {\n    color: #ffc700;\n    span {\n      color: white;\n    }\n  }\n"]))),P=t(184),R=function(){var n,e,t,r=(0,g.UO)().movieId,a=(0,v.useState)(""),i=(0,f.Z)(a,2),o=i[0],s=i[1],c=(0,g.TH)(),u=null!==(n=null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,v.useEffect)((function(){var n=function(){var n=(0,d.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,b.Pg)(r);case 3:e=n.sent,s(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[r]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(k,{children:(0,P.jsxs)(m.rU,{to:u,children:["Go back",(0,P.jsx)("span",{children:"."})]})}),(0,P.jsxs)(_,{children:[(0,P.jsx)(y,{src:"".concat(o.poster_path?Z.f+o.poster_path:Z.l+"?text="+o.original_title),alt:"get"}),(0,P.jsxs)("div",{children:[(0,P.jsx)(U,{children:o.original_title}),(0,P.jsxs)(S,{children:["Rating: ",Math.round(o.vote_average)]}),(0,P.jsx)(S,{children:"Overview"}),(0,P.jsx)(z,{children:o.overview}),(0,P.jsx)(S,{children:"Genres"}),(0,P.jsx)(L,{children:null===(t=o.genres)||void 0===t?void 0:t.map((function(n){return(0,P.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("h2",{children:"Additional information"}),(0,P.jsxs)(O,{children:[(0,P.jsx)(C,{children:(0,P.jsxs)(m.OL,{to:"cast",state:c.state,children:["Cast",(0,P.jsx)("span",{children:"."})]})}),(0,P.jsx)(C,{children:(0,P.jsxs)(m.OL,{to:"reviews",state:c.state,children:["Reviews",(0,P.jsx)("span",{children:"."})]})})]}),(0,P.jsx)(v.Suspense,{fallback:(0,P.jsx)("div",{children:"Loading subpage..."}),children:(0,P.jsx)(g.j3,{})})]})]})}},323:function(n,e,t){t.d(e,{Df:function(){return c},Eb:function(){return l},Hu:function(){return d},Pg:function(){return p},Ph:function(){return u}});var r=t(861),a=t(687),i=t.n(a),o=t(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="3373af60a4ee1fe7510a1a61c11380e1",c=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/week?api_key=".concat(s));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},585:function(n,e,t){t.d(e,{f:function(){return r},l:function(){return a}});var r="https://image.tmdb.org/t/p/w500/",a="https://via.placeholder.com/182x273"}}]);
//# sourceMappingURL=932.cecd772a.chunk.js.map