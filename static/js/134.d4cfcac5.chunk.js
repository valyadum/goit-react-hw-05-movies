/*! For license information please see 134.d4cfcac5.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{760:function(e,t){var n={filmAPI:function(){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=8817625a99e963f36ab0e1c9bab55397").then((function(e){return e.json()}))},getFilmById:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=8817625a99e963f36ab0e1c9bab55397")).then((function(e){return e.json()}))},getMovieCredits:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=8817625a99e963f36ab0e1c9bab55397")).then((function(e){return e.json()}))},getReviews:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=8817625a99e963f36ab0e1c9bab55397")).then((function(e){return e.json()}))},getMovieToSearch:function(e){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&api_key=8817625a99e963f36ab0e1c9bab55397")).then((function(e){return e.json()}))}};t.Z=n},134:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),o=n(760),i=n(791),c=n(87),a=n(689),u=n(184);function f(){var e=(0,c.lr)(""),t=(0,r.Z)(e,2),n=t[0],f=t[1],s=(0,i.useState)(null),h=(0,r.Z)(s,2),l=h[0],p=h[1],v=(0,i.useState)([]),b=(0,r.Z)(v,2),m=b[0],d=b[1],g=(0,a.TH)(),k=n.get("query1");return(0,i.useEffect)((function(){l&&o.Z.getMovieToSearch(l).then((function(e){d(e.results)})).catch((function(e){return console.error(e)}))}),[l]),console.log(m),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("form",{action:"",onClick:function(e){e.preventDefault(),p(k)},children:[(0,u.jsx)("input",{type:"text",value:null!==k&&void 0!==k?k:"",onChange:function(e){if(""===e.target.value)return f({});f({query1:e.target.value})}}),(0,u.jsx)("button",{type:"submit",children:"Search"})]}),(0,u.jsx)("ul",{children:m&&m.map((function(e){var t=e.title,n=e.id;return(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/movies/".concat(n),state:{from:g},children:t})},n)}))})]})}}}]);
//# sourceMappingURL=134.d4cfcac5.chunk.js.map