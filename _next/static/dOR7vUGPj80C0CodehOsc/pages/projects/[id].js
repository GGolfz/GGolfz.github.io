(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"2gdh":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),o=n("nOHt"),i=n("MbLX"),s=a.a.createElement;e.default=function(){var t=Object(o.useRouter)().query.id;return s("div",null,s(i.a,null),t)}},MbLX:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("MX0m"),a=n.n(r),o=n("q1tI"),i=n.n(o),s=n("nOHt"),l=n("YFqc"),c=n.n(l),p=i.a.createElement;function u(){var t=Object(s.useRouter)(),e="/";e=t.query.id?"/"+t.route.split("/")[1]:t.pathname;var n=Object(o.useState)(!1),r=n[0],i=n[1],l=function(t){return{color:e===t?"#4FC3F7 !important":"#FFFFFF"}},u=function(t){return{background:"#4FC3F7",height:"2px",border:"none",margin:"3px 0px",display:e===t?"block":"none"}},f=function(){var t=["home","about","education","projects","awards"],e=[];for(var n in t)e.push(d(n,t[n]));return p(o.Fragment,null,e)},d=function(t,e){var n="/"+e;return"home"===e&&(n="/"),p(o.Fragment,{key:t},p("a",{href:n,className:"jsx-4152249901"},p("div",{style:l(n),className:"jsx-4152249901 nav-item"},e[0].toUpperCase()+e.substring(1),p("hr",{style:u(n),className:"jsx-4152249901"}))),p(a.a,{id:"4152249901"},["@media (max-width:768px){.nav-item.jsx-4152249901{color:#000000 !important;}hr.jsx-4152249901{display:none !important;}}","a.jsx-4152249901{-webkit-text-decoration:none;text-decoration:none;}",".nav-item.jsx-4152249901{cursor:pointer;font-size:1.2em !important;margin-right:10px;padding:20px 20px 15px 20px;text-align:center;}"]))};return p("nav",{className:"jsx-262574617 nav"},p("title",{className:"jsx-262574617"},"GGolfz.com"),p(c.a,{href:"/"},p("h2",{className:"jsx-262574617 nav-title"},"GGolfz.com")),p("div",{className:"jsx-262574617 nav-items"},f()),p("div",{onClick:function(){i(!r),document.getElementById("overlay").style.display=r?"none":"block",document.getElementById("hamburgerList").style.width=r?"0":"25vh"},className:"jsx-262574617 hamburger"},p(o.Fragment,null,p("div",{className:"jsx-4029627746 "+((r?"change1 bar1":"bar1")||"")}),p("div",{className:"jsx-4029627746 "+((r?"change2 bar2":"bar2")||"")}),p("div",{className:"jsx-4029627746 "+((r?"change3 bar3":"bar3")||"")}),p(a.a,{id:"4029627746"},[".bar1.jsx-4029627746,.bar2.jsx-4029627746,.bar3.jsx-4029627746{width:35px;height:5px;background-color:#FFFFFF;margin:6px 0;-webkit-transition:0.4s;transition:0.4s;}",".change1.jsx-4029627746{-webkit-transform:rotate(-45deg) translate(-9px,6px);-webkit-transform:rotate(-45deg) translate(-9px,6px);-ms-transform:rotate(-45deg) translate(-9px,6px);transform:rotate(-45deg) translate(-9px,6px);}",".change2.jsx-4029627746{opacity:0;}",".change3.jsx-4029627746{-webkit-transform:rotate(45deg) translate(-8px,-8px);-webkit-transform:rotate(45deg) translate(-8px,-8px);-ms-transform:rotate(45deg) translate(-8px,-8px);transform:rotate(45deg) translate(-8px,-8px);}"]))),p("div",{id:"overlay",onClick:function(){i(!r),document.getElementById("overlay").style.display=r?"none":"block",document.getElementById("hamburgerList").style.width=r?"0":"25vh"},className:"jsx-262574617"}),p("div",{id:"hamburgerList",className:"jsx-262574617"},f()),p(a.a,{id:"2717345525"},["@media (min-width:769px){.hamburger.jsx-262574617{display:none !important;}.nav-items.jsx-262574617{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;}#hamburgerList.jsx-262574617{display:none !important;}#overlay.jsx-262574617{display:none !important;}}","@media (max-width:768px){#hamburgerList.jsx-262574617{display:block !important;}.hamburger.jsx-262574617{display:block !important;}.nav-items.jsx-262574617{display:none !important;}.nav.jsx-262574617{padding:0% 4% !important;}}","#hamburgerList.jsx-262574617{background:#FFFFFF;position:fixed;right:0;top:0;height:100vh;width:0;overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;z-index:3;}","#overlay.jsx-262574617{position:fixed;width:100vw;height:100vh;display:none;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:2;cursor:pointer;}",".hamburger.jsx-262574617{cursor:pointer;margin-left:auto;margin-top:20px;margin-bottom:15px;}",".nav.jsx-262574617{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0% 2%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#1a237e;color:white;}",".nav-title.jsx-262574617{margin-block-start:0;margin-block-end:0;cursor:pointer;}",".nav-items.jsx-262574617{margin-left:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]),p(a.a,{id:"2122205605"},['@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap");','body{margin:0px;padding:0px;font-family:"Nunito",sans-serif;}']))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),o=n("7W2i"),i=n("a1gu"),s=n("Nsbk");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}var c=n("TqRt"),p=n("284h");e.__esModule=!0,e.default=void 0;var u,f=p(n("q1tI")),d=n("QmWs"),h=n("g/15"),m=c(n("nOHt")),x=n("elyg");function g(t){return t&&"object"===typeof t?(0,h.formatWithValidation)(t):t}var v=new Map,b=window.IntersectionObserver,y={};function w(){return u||(b?u=new b((function(t){t.forEach((function(t){if(v.has(t.target)){var e=v.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(u.unobserve(t.target),v.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var j=function(t){o(n,t);var e=l(n);function n(t){var a;return r(this,n),(a=e.call(this,t)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(t){var e=null,n=null,r=null;return function(a,o){if(r&&a===e&&o===n)return r;var i=t(a,o);return e=a,n=o,r=i,i}}((function(t,e){return{href:(0,x.addBasePath)(g(t)),as:e?(0,x.addBasePath)(g(e)):e}})),a.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=a.formatUrls(a.props.href,a.props.as),i=o.href,s=o.as;if(function(t){var e=(0,d.parse)(t,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(i)){var l=window.location.pathname;i=(0,d.resolve)(l,i),s=s?(0,d.resolve)(l,s):i,t.preventDefault();var c=a.props.scroll;null==c&&(c=s.indexOf("#")<0),m.default[a.props.replace?"replace":"push"](i,s,{shallow:a.props.shallow}).then((function(t){t&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==t.prefetch,a}return a(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,a=(0,d.resolve)(t,n);return[a,r?(0,d.resolve)(t,r):a]}},{key:"handleRef",value:function(t){var e=this;this.p&&b&&t&&t.tagName&&(this.cleanUpListeners(),y[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=w();return n?(n.observe(t),v.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}v.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();m.default.prefetch(e[0],e[1],t).catch((function(t){0})),y[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof e&&(e=f.default.createElement("a",null,e));var o=f.Children.only(e),i={ref:function(e){t.handleRef(e),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(e):"object"===typeof o.ref&&(o.ref.current=e))},onMouseEnter:function(e){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),f.default.cloneElement(o,i)}}]),n}(f.Component);e.default=j},w845:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[id]",function(){return n("2gdh")}])}},[["w845",0,1,2,3]]]);