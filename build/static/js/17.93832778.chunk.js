(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[17],{108:function(t,n,e){"use strict";var r=e(2),i=e(88),a=i.a?r.useLayoutEffect:r.useEffect,o={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};n.a=i.a&&"undefined"!==typeof window.ResizeObserver?function(){var t=Object(r.useState)(null),n=t[0],e=t[1],i=Object(r.useState)(o),c=i[0],u=i[1],l=Object(r.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var n=t[0].contentRect,e=n.x,r=n.y,i=n.width,a=n.height,o=n.top,c=n.left,l=n.bottom,s=n.right;u({x:e,y:r,width:i,height:a,top:o,left:c,bottom:l,right:s})}}))}),[]);return a((function(){if(n)return l.observe(n),function(){l.disconnect()}}),[n]),[e,c]}:function(){return[i.b,o]}},125:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(95);function i(t,n){var e;if(void 0===n){var i,a=Object(r.a)(t);try{for(a.s();!(i=a.n()).done;){var o=i.value;null!=o&&(e>o||void 0===e&&o>=o)&&(e=o)}}catch(f){a.e(f)}finally{a.f()}}else{var c,u=-1,l=Object(r.a)(t);try{for(l.s();!(c=l.n()).done;){var s=c.value;null!=(s=n(s,++u,t))&&(e>s||void 0===e&&s>=s)&&(e=s)}}catch(f){l.e(f)}finally{l.f()}}return e}},141:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(95),i=e(96),a=Symbol("implicit");function o(){var t=new Map,n=[],e=[],c=a;function u(r){var i=r+"",o=t.get(i);if(!o){if(c!==a)return c;t.set(i,o=n.push(r))}return e[(o-1)%e.length]}return u.domain=function(e){if(!arguments.length)return n.slice();n=[],t=new Map;var i,a=Object(r.a)(e);try{for(a.s();!(i=a.n()).done;){var o=i.value,c=o+"";t.has(c)||t.set(c,n.push(o))}}catch(l){a.e(l)}finally{a.f()}return u},u.range=function(t){return arguments.length?(e=Array.from(t),u):e.slice()},u.unknown=function(t){return arguments.length?(c=t,u):c},u.copy=function(){return o(n,e).unknown(c)},i.b.apply(u,arguments),u}},144:function(t,n,e){"use strict";e.d(n,"b",(function(){return d})),e.d(n,"a",(function(){return h}));var r=Array.prototype.slice,i=function(t){return t},a=1e-6;function o(t){return"translate("+t+",0)"}function c(t){return"translate(0,"+t+")"}function u(t){return function(n){return+t(n)}}function l(t,n){return n=Math.max(0,t.bandwidth()-2*n)/2,t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}function s(){return!this.__axis}function f(t,n){var e=[],f=null,d=null,h=6,v=6,b=3,g="undefined"!==typeof window&&window.devicePixelRatio>1?0:.5,p=1===t||4===t?-1:1,m=4===t||2===t?"x":"y",y=1===t||3===t?o:c;function O(r){var o=null==f?n.ticks?n.ticks.apply(n,e):n.domain():f,c=null==d?n.tickFormat?n.tickFormat.apply(n,e):i:d,O=Math.max(h,0)+b,j=n.range(),x=+j[0]+g,w=+j[j.length-1]+g,M=(n.bandwidth?l:u)(n.copy(),g),k=r.selection?r.selection():r,A=k.selectAll(".domain").data([null]),S=k.selectAll(".tick").data(o,n).order(),R=S.exit(),z=S.enter().append("g").attr("class","tick"),F=S.select("line"),_=S.select("text");A=A.merge(A.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),S=S.merge(z),F=F.merge(z.append("line").attr("stroke","currentColor").attr(m+"2",p*h)),_=_.merge(z.append("text").attr("fill","currentColor").attr(m,p*O).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),r!==k&&(A=A.transition(r),S=S.transition(r),F=F.transition(r),_=_.transition(r),R=R.transition(r).attr("opacity",a).attr("transform",(function(t){return isFinite(t=M(t))?y(t+g):this.getAttribute("transform")})),z.attr("opacity",a).attr("transform",(function(t){var n=this.parentNode.__axis;return y((n&&isFinite(n=n(t))?n:M(t))+g)}))),R.remove(),A.attr("d",4===t||2===t?v?"M"+p*v+","+x+"H"+g+"V"+w+"H"+p*v:"M"+g+","+x+"V"+w:v?"M"+x+","+p*v+"V"+g+"H"+w+"V"+p*v:"M"+x+","+g+"H"+w),S.attr("opacity",1).attr("transform",(function(t){return y(M(t)+g)})),F.attr(m+"2",p*h),_.attr(m,p*O).text(c),k.filter(s).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),k.each((function(){this.__axis=M}))}return O.scale=function(t){return arguments.length?(n=t,O):n},O.ticks=function(){return e=r.call(arguments),O},O.tickArguments=function(t){return arguments.length?(e=null==t?[]:r.call(t),O):e.slice()},O.tickValues=function(t){return arguments.length?(f=null==t?null:r.call(t),O):f&&f.slice()},O.tickFormat=function(t){return arguments.length?(d=t,O):d},O.tickSize=function(t){return arguments.length?(h=v=+t,O):h},O.tickSizeInner=function(t){return arguments.length?(h=+t,O):h},O.tickSizeOuter=function(t){return arguments.length?(v=+t,O):v},O.tickPadding=function(t){return arguments.length?(b=+t,O):b},O.offset=function(t){return arguments.length?(g=+t,O):g},O}function d(t){return f(2,t)}function h(t){return f(3,t)}},206:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(86),i=e(207),a=e(96),o=e(141);function c(){var t,n,e=Object(o.a)().unknown(void 0),u=e.domain,l=e.range,s=0,f=1,d=!1,h=0,v=0,b=.5;function g(){var e=u().length,r=f<s,a=r?f:s,o=r?s:f;t=(o-a)/Math.max(1,e-h+2*v),d&&(t=Math.floor(t)),a+=(o-a-t*(e-h))*b,n=t*(1-h),d&&(a=Math.round(a),n=Math.round(n));var c=Object(i.a)(e).map((function(n){return a+t*n}));return l(r?c.reverse():c)}return delete e.unknown,e.domain=function(t){return arguments.length?(u(t),g()):u()},e.range=function(t){var n,e;return arguments.length?(n=t,e=Object(r.a)(n,2),s=e[0],f=e[1],s=+s,f=+f,g()):[s,f]},e.rangeRound=function(t){var n,e;return n=t,e=Object(r.a)(n,2),s=e[0],f=e[1],s=+s,f=+f,d=!0,g()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(d=!!t,g()):d},e.padding=function(t){return arguments.length?(h=Math.min(1,v=+t),g()):h},e.paddingInner=function(t){return arguments.length?(h=Math.min(1,t),g()):h},e.paddingOuter=function(t){return arguments.length?(v=+t,g()):v},e.align=function(t){return arguments.length?(b=Math.max(0,Math.min(1,t)),g()):b},e.copy=function(){return c(u(),[s,f]).round(d).paddingInner(h).paddingOuter(v).align(b)},a.b.apply(g(),arguments)}},207:function(t,n,e){"use strict";n.a=function(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),a=new Array(i);++r<i;)a[r]=t+r*e;return a}},247:function(t,n,e){"use strict";e.r(n);var r=e(86),i=e(5),a=e(22),o=e(125),c=e(198),u=e(144),l=e(206),s=e(142),f=e(244),d=(e(101),e(87)),h=e.n(d),v=e(2),b=e(108),g=e(18),p=function(t,n){return Object(a.h)(t,"delta",n)},m=50,y=0,O=50,j=0;function x(t){var n=t.timeseries,e=t.statistic,d=t.lookback,h=Object(v.useRef)(),x=Object(b.a)(),w=Object(r.a)(x,2),k=w[0],A=w[1],S=A.width,R=A.height,z=Object.keys(n||{}).filter((function(t){return t<=Object(a.g)()})).slice(-d);return Object(v.useEffect)((function(){if(S){var t=Object(f.a)(h.current),r=S-y,d=R-O,v=Object(l.a)().domain(z).range([j,r]).paddingInner(S/1e3),b=Object(s.a)().domain([Math.min(0,Object(o.a)(z,(function(t){return p(null===n||void 0===n?void 0:n[t],e)}))||0),Math.max(1,Object(c.a)(z,(function(t){return p(null===n||void 0===n?void 0:n[t],e)}))||0)]).range([d,m]),g=Object(u.a)(v).tickSize(0).tickFormat((function(t){return Object(a.c)(t,"dd MMM")})),x=t.transition().duration(i.c);t.select(".x-axis").transition(x).style("transform","translate3d(0, ".concat(b(0),"px, 0)")).call(g).on("start",(function(){return t.select(".domain").remove()})).selectAll("text").attr("y",0).attr("dy",(function(t,r){return p(null===n||void 0===n?void 0:n[t],e)<0?"-1em":"1.5em"})).style("text-anchor","middle").attr("fill",i.w[e].color),t.selectAll(".bar").data(z).join((function(t){return t.append("path").attr("class","bar").attr("d",(function(t){return M(v(t),b(0),v.bandwidth(),0,5)}))})).transition(x).attr("d",(function(t){return M(v(t),b(0),v.bandwidth(),b(0)-b(p(null===n||void 0===n?void 0:n[t],e)),5)})).attr("fill",(function(t,n){return n<z.length-1?i.w[e].color+"90":i.w[e].color}));var w=t.selectAll(".label").data(z).join("text").attr("class","label").attr("x",(function(t){return v(t)+v.bandwidth()/2})).text((function(t){return Object(a.e)(p(null===n||void 0===n?void 0:n[t],e))}));w.transition(x).attr("fill",i.w[e].color).attr("y",(function(t){var r=p(null===n||void 0===n?void 0:n[t],e);return b(r)+(r<0?15:-6)})),w.append("tspan").attr("dy",(function(t){return"".concat(p(null===n||void 0===n?void 0:n[t],e)<0?1.2:-1.2,"em")})).attr("x",(function(t){return v(t)+v.bandwidth()/2})).text((function(t,r){if(0===r)return"";var i=p(null===n||void 0===n?void 0:n[z[r-1]],e);if(!i)return"";var o=p(null===n||void 0===n?void 0:n[t],e)-i;return"".concat(o>0?"+":"").concat(Object(a.e)(100*o/Math.abs(i)),"%")})).transition(x).attr("fill",i.w[e].color+"90")}}),[z,R,e,n,S]),Object(g.jsx)("div",{className:"DeltaBarGraph",ref:k,children:Object(g.jsxs)("svg",{ref:h,width:S,height:250,viewBox:"0 0 ".concat(S," ").concat(R),preserveAspectRatio:"xMidYMid meet",children:[Object(g.jsx)("g",{className:"x-axis"}),Object(g.jsx)("g",{className:"y-axis"})]})})}var w=function(t,n){return!n.forceRender&&(!(n.timeseries||!t.timeseries)||!(n.timeseries&&!t.timeseries)&&(!!h()(t.stateCode,n.stateCode)&&(!!h()(t.lookback,n.lookback)&&!!h()(t.statistic,n.statistic))))};function M(t,n,e,r,i){return i=Math.sign(r)*Math.min(Math.abs(r),i),["M ".concat(t," ").concat(n),"v ".concat(-r+i),"q 0 ".concat(-i," ").concat(Math.abs(i)," ").concat(-i),"h ".concat(e-2*Math.abs(i)),"q ".concat(Math.abs(i)," 0 ").concat(Math.abs(i)," ").concat(i),"v ".concat(r-i),"Z"].join(" ")}n.default=Object(v.memo)(x,w)},87:function(t,n,e){"use strict";t.exports=function t(n,e){if(n===e)return!0;if(n&&e&&"object"==typeof n&&"object"==typeof e){if(n.constructor!==e.constructor)return!1;var r,i,a;if(Array.isArray(n)){if((r=n.length)!=e.length)return!1;for(i=r;0!==i--;)if(!t(n[i],e[i]))return!1;return!0}if(n.constructor===RegExp)return n.source===e.source&&n.flags===e.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===e.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===e.toString();if((r=(a=Object.keys(n)).length)!==Object.keys(e).length)return!1;for(i=r;0!==i--;)if(!Object.prototype.hasOwnProperty.call(e,a[i]))return!1;for(i=r;0!==i--;){var o=a[i];if(!t(n[o],e[o]))return!1}return!0}return n!==n&&e!==e}}}]);
//# sourceMappingURL=17.93832778.chunk.js.map