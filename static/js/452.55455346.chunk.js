"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[452],{687:function(e,n,t){t.d(n,{ex:function(){return f},VI:function(){return l},X3:function(){return p},wd:function(){return u},GQ:function(){return o}});var r=t(861),a=t(757),c=t.n(a),s="73e9137b2a364bbb6dc0bcf09aa07979",i="https://api.themoviedb.org/3",o=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/trending/movie/day?api_key=").concat(s));case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,r=t.results,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,a=r.results,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/movie/").concat(n,"?api_key=").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,a=r.cast,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,a=r.results,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},452:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(861),a=t(152),c=t(757),s=t.n(c),i=t(791),o=t(523),u=t(271),p=t(687),l=t(138),f=t(184),v=(0,i.lazy)((function(){return t.e(367).then(t.bind(t,367))})),h=(0,i.lazy)((function(){return t.e(754).then(t.bind(t,754))})),d=function(){var e=(0,i.useState)(null),n=(0,a.Z)(e,2),t=n[0],c=n[1],d=(0,u.UO)(),x=(0,u.$B)(),m=(0,u.k6)();return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.X3)(d.movieId);case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[d.movieId]),(0,f.jsxs)("div",{children:[(0,f.jsx)("button",{className:"MovieDetails__btn",onClick:m.goBack,children:"Go back"}),t?(0,f.jsxs)("div",{className:"MovieDetails__div",children:[t.poster_path&&(0,f.jsx)("img",{className:"MovieDetails__img",src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:""}),!t.poster_path&&(0,f.jsx)("img",{className:"MovieDetails__img",src:l,alt:""}),(0,f.jsxs)("div",{className:"MovieDetails__wrapper",children:[(0,f.jsx)("h2",{children:t.title}),(0,f.jsxs)("h3",{children:["User score: ",t.vote_average]}),(0,f.jsx)("p",{children:t.overview}),(0,f.jsx)("p",{children:t.genres.map((function(e){return e.name})).join(", ")})]})]}):"Movie is loading",(0,f.jsx)("p",{className:"MovieDetails__text",children:"Additional Information : "}),(0,f.jsxs)("nav",{children:[(0,f.jsx)("div",{children:(0,f.jsx)(o.OL,{to:"".concat(x.url,"/cast"),className:"",activeClassName:"",children:"Cast"})}),(0,f.jsx)("div",{children:(0,f.jsx)(o.OL,{to:"".concat(x.url,"/reviews"),className:"",activeClassName:"",children:"Reviews"})})]}),(0,f.jsx)(i.Suspense,{fallback:"Loading",children:(0,f.jsxs)(u.rs,{children:[(0,f.jsx)(u.AW,{exact:!0,path:"".concat(x.path,"/cast"),children:(0,f.jsx)(v,{})}),(0,f.jsx)(u.AW,{exact:!0,path:"".concat(x.path,"/reviews"),children:(0,f.jsx)(h,{})}),(0,f.jsx)(u.AW,{render:function(){return(0,f.jsx)(u.l_,{to:x.url})}})]})})]})}},138:function(e,n,t){e.exports=t.p+"static/media/not_found.ab1fa65686d030bafacd.jpg"}}]);
//# sourceMappingURL=452.55455346.chunk.js.map