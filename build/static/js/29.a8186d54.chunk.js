(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[29,32],{108:function(t,e,r){"use strict";var n=r(2),i=r(88),c=i.a?n.useLayoutEffect:n.useEffect,a={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};e.a=i.a&&"undefined"!==typeof window.ResizeObserver?function(){var t=Object(n.useState)(null),e=t[0],r=t[1],i=Object(n.useState)(a),o=i[0],u=i[1],s=Object(n.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var e=t[0].contentRect,r=e.x,n=e.y,i=e.width,c=e.height,a=e.top,o=e.left,s=e.bottom,f=e.right;u({x:r,y:n,width:i,height:c,top:a,left:o,bottom:s,right:f})}}))}),[]);return c((function(){if(e)return s.observe(e),function(){s.disconnect()}}),[e]),[r,o]}:function(){return[i.b,a]}},193:function(t,e,r){"use strict";r.r(e);var n=r(86),i=r(5),c=r(22),a=r(90),o=r.n(a),u=r(198),s=r(119),f=r(265),l=r(142),d=r(244),b=r(166),h=r(246),j=(r(101),r(63)),O=r(77),p=r(87),y=r.n(p),g=r(2),v=r(108),m=r(18),k=10,w=10,x=2,M=10;function R(t){var e=t.timeseries,r=t.date,a=Object(g.useRef)([]),p=r||Object(c.g)(),y=Object(v.a)(),R=Object(n.a)(y,2),S=R[0],A=R[1].width;A=Math.min(A,120);var E=Object(g.useMemo)((function(){var t=Object.keys(e||{}).filter((function(t){return t<=p})),r=t[t.length-1],n=Object(j.a)(Object(O.a)(Object(c.k)(r),i.o),{representation:"date"});return t.filter((function(t){return t>=n}))}),[p,e]);return Object(g.useEffect)((function(){if(A){var t=E.length,r=A-w,n=75-x,o=Object(f.a)().clamp(!0).domain([Object(c.k)(E[0]||p),Object(c.k)(E[t-1])||p]).range([M,r]);a.current.forEach((function(r,a){var f,j=Object(d.a)(r),O=i.r[a],p=i.w[O].color,y=Object(u.a)(E,(function(t){return Math.abs(Object(c.h)(e[t],"delta",O))})),g=Object(l.a)().clamp(!0).domain([-y,y]).range([n,k]),v=Object(b.a)().curve(h.a).x((function(t){return o(Object(c.k)(t))})).y((function(t){return g(Object(c.h)(e[t],"delta",O))}));j.selectAll("path").data(t?[E]:[]).join((function(t){return t.append("path").attr("fill","none").attr("stroke",p+"99").attr("stroke-width",2.5).attr("d",v).attr("stroke-dasharray",(function(){return f=this.getTotalLength()})).call((function(t){return t.attr("stroke-dashoffset",f).transition().delay(100).duration(2500).attr("stroke-dashoffset",0)}))}),(function(t){return t.attr("stroke-dasharray",null).transition().duration(500).attrTween("d",(function(t){var e=Object(d.a)(this).attr("d"),r=v(t);return Object(s.interpolatePath)(e,r)})).selection()})),j.selectAll("circle").data(t?[E[t-1]]:[]).join((function(t){return t.append("circle").attr("fill",p).attr("r",2.5).attr("cx",(function(t){return o(Object(c.k)(t))})).attr("cy",(function(t){return g(Object(c.h)(e[t],"delta",O))})).style("opacity",0).call((function(t){return t.transition().delay(2100).duration(500).style("opacity",1).attr("cx",(function(t){return o(Object(c.k)(t))})).attr("cy",(function(t){return g(Object(c.h)(e[t],"delta",O))}))}))}),(function(t){return t.transition().duration(500).attr("cx",(function(t){return o(Object(c.k)(t))})).attr("cy",(function(t){return g(Object(c.h)(e[t],"delta",O))})).style("opacity",1).selection()}))}))}}),[p,E,e,A]),Object(m.jsx)("div",{className:"Minigraph",children:i.r.map((function(t,e){return Object(m.jsx)("div",{className:o()("svg-parent"),ref:0===e?S:null,children:Object(m.jsx)("svg",{ref:function(t){a.current[e]=t},preserveAspectRatio:"xMidYMid meet",width:A,height:75})},t)}))})}var S=function(t,e){return!e.forceRender&&(!(e.timeseries||!t.timeseries)||!(e.timeseries&&!t.timeseries)&&(!!y()(e.stateCode,t.stateCode)&&!!y()(e.date,t.date)))};e.default=Object(g.memo)(R,S)},87:function(t,e,r){"use strict";t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,i,c;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(i=n;0!==i--;)if(!t(e[i],r[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(c=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(i=n;0!==i--;)if(!Object.prototype.hasOwnProperty.call(r,c[i]))return!1;for(i=n;0!==i--;){var a=c[i];if(!t(e[a],r[a]))return!1}return!0}return e!==e&&r!==r}}}]);
//# sourceMappingURL=29.a8186d54.chunk.js.map