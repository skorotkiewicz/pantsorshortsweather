(this["webpackJsonppants-or-shorts-weather"]=this["webpackJsonppants-or-shorts-weather"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),i=(n(9),n(1)),s=function(e){var t=e.data,n=!1,a=!1,o="",c=t.FeelsLikeC,i=t.windspeedKmph;return t.weatherDesc.map((function(e){"Sunny"===e.value&&(a=!0,o+=e.value)})),n=c>5&&i<1||(c>10&&i<19||(c>20&&i<28||!!(c>12&&i<28&&a))),r.a.createElement("div",{className:"widget"},r.a.createElement("h2",null,a?"Sunny":o),r.a.createElement("h1",{className:"pants"},n?"Is shorts weather":"Is pants weather"),r.a.createElement("div",{className:"fl"},"Feels like: ",c," \xb0C | Windspeed: ",i," Km/h"))},l=function(e){var t=e.city,n=e.setData,a=e.setCity,o=e.setLoading,c=e.setChange,i=e.getWeather;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",placeholder:t,onChange:function(e){return a(e.target.value)}}),r.a.createElement("button",{onClick:function(){i(t,n,a,o),o(!0),c(!1)}},"Change"))},u=function(e,t,n,a){fetch("https://wttr.in/".concat(e,"?format=j1")).then((function(e){return e.json()})).then((function(e){t(e.current_condition[0]),n(e.nearest_area[0].areaName[0].value),a(!1)}))},h=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),h=Object(i.a)(c,2),d=h[0],f=h[1],m=Object(a.useState)(!0),p=Object(i.a)(m,2),g=p[0],w=p[1],v=Object(a.useState)(!1),E=Object(i.a)(v,2),b=E[0],y=E[1];return Object(a.useEffect)((function(){fetch("https://wttr.in/?format=j1").then((function(e){return e.json()})).then((function(e){f(e.current_condition[0]),o(e.nearest_area[0].areaName[0].value),w(!1)}))}),[]),r.a.createElement(r.a.Fragment,null,d&&!g?r.a.createElement(s,{data:d}):r.a.createElement("h2",null,"Please wait..."),r.a.createElement("div",{className:"change"},!b&&!g&&r.a.createElement(r.a.Fragment,null,n," |",r.a.createElement("button",{onClick:function(){y(!0)}},"Change City")),b&&r.a.createElement(l,{city:n,setData:f,setCity:o,setLoading:w,setChange:y,getWeather:u})))},d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"It is pants or shorts weather?")),r.a.createElement(h,null),r.a.createElement("div",{className:"idea"},"App Idea by: Casey Dulson"," ",r.a.createElement("a",{href:"https://twitter.com/Casey_LeighD/status/1380176301261254658",target:"_blank",rel:"noopener noreferrer"},"@Casey_LeighD"),r.a.createElement("br",null),'"I wish there was an app which could tell you if it is pants or shorts weather."'))},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pants-or-shorts",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pants-or-shorts","/service-worker.js");f?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(t,e)}))}}()},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);