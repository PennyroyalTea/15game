(this["webpackJsonpgame-fifteen"]=this["webpackJsonpgame-fifteen"]||[]).push([[0],{81:function(e,n,t){},88:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),i=t(15),r=t.n(i),s=t(61),l=(t(80),t(91)),j=t(72),u=t(93),d=t(94),b=t(92),f=t(62),o=(t(81),t(13)),x=function(e){var n="tile";return 0===e.value&&(n+=" empty"),Object(o.jsx)("div",{className:n,onClick:e.clickHandler,children:Object(o.jsx)("span",{className:"content",children:e.value})})},O=function(e){var n=e.field.map((function(n){return Object(o.jsx)(x,{value:n,clickHandler:function(){return e.handleTileClick(n)}},n)}));return Object(o.jsx)("div",{className:"field",children:n})},h=l.a.Title,v=function(e){var n=e%4;return{x:n,y:(e-n)/4}},m=function(){var e=Object(c.useState)(Object(f.a)([1,2,3,4,5,6,7,8,9,10,11,12,13,14,0,15])),n=Object(s.a)(e,2),t=n[0],a=n[1],i=Object(c.useState)(0),r=Object(s.a)(i,2),l=r[0],x=r[1],m=function(){a(t.sortBy(Math.random)),x(0)};return t.every((function(e,n){return e===(n+1)%16}))&&(j.b.success("\u0412\u044b \u0441\u043f\u0440\u0430\u0432\u0438\u043b\u0438\u0441\u044c \u0437\u0430 ".concat(l," \u043a\u043b\u0438\u043a\u043e\u0432!")),m()),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(u.a,{children:[Object(o.jsx)(d.a,{span:4,children:Object(o.jsxs)(h,{level:4,children:["\u041a\u043b\u0438\u043a\u043e\u0432 \u0441\u0434\u0435\u043b\u0430\u043d\u043e: ",l," "]})}),Object(o.jsx)(d.a,{span:4,children:Object(o.jsx)(b.a,{onClick:m,children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0441\u043d\u0430\u0447\u0430\u043b\u0430"})})]}),Object(o.jsx)(u.a,{children:Object(o.jsx)(d.a,{span:24,children:Object(o.jsx)(O,{field:t,handleTileClick:function(e){if(0!==e){var n,c,i=v(t.indexOf(e)),r=v(t.indexOf(0));c=r,((n=i).x===c.x&&1===Math.abs(n.y-c.y)||n.y===c.y&&1===Math.abs(n.x-c.x))&&(a(function(e,n,t){var c=e.get(n);return e.set(n,e.get(t)).set(t,c)}(t,t.indexOf(e),t.indexOf(0))),x(l+1))}}})})})]})},p=function(){return Object(o.jsx)(m,{})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.540bf1cd.chunk.js.map