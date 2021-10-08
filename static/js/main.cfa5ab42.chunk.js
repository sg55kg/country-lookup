(this["webpackJsonpgeonames-app"]=this["webpackJsonpgeonames-app"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(17),a=n.n(c),o=n(8),s=n(14),u=n.n(s),i=n(18),j=n(11),l=n(3),b=(n(26),n(1)),h=function(){return Object(b.jsx)("div",{className:"header",children:Object(b.jsx)("h1",{children:"Country Lookup"})})},d=function(e){return e.data.map((function(e,t){return Object(b.jsxs)("div",{className:"country-info-display",children:[Object(b.jsx)("h2",{children:e.countryName}),Object(b.jsx)("h4",{children:"Population:"}),Object(b.jsxs)("p",{children:[parseInt(e.population).toLocaleString()," people"]}),Object(b.jsx)("h4",{children:"Capital:"}),Object(b.jsx)("p",{children:e.capital}),Object(b.jsx)("h4",{children:"Currency:"}),Object(b.jsx)("p",{children:e.currency}),Object(b.jsx)("h4",{children:"Continent:"}),Object(b.jsx)("p",{children:e.continentName}),Object(b.jsx)("h4",{children:"Area in square kilometers:"}),Object(b.jsx)("p",{children:"".concat(e.areaInSqKm," km")})]},t)}))},p=(n(28),function(e){var t=e.data;return Object(b.jsx)("div",{className:"body",children:Object(b.jsx)(d,{data:t})})}),O=function(e){var t=e.setCountry;return Object(b.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(e.target.elements.country.value)},children:[Object(b.jsx)("h4",{children:"Enter a country (US, UK, CA, etc):"}),Object(b.jsx)("input",{type:"text",name:"country"}),Object(b.jsx)("button",{type:"submit",children:"Search Countries"})]})},x=function(){return Object(b.jsx)("div",{className:"footer"})},m=function(e){var t=e.error;return(0,e.setError)(!1),Object(b.jsxs)("div",{className:"error",children:[Object(b.jsx)("h2",{children:"There was an error retrieving this information."}),Object(b.jsx)("h5",{children:"Make sure to use the country ISO code and not the full name in the search! (US instead of United States)"}),Object(b.jsx)("p",{children:t?t.message:""}),Object(b.jsx)(j.b,{to:"/country-lookup",className:"return-button",children:"Return"})]})},f=n(20),y=n.n(f),v=function(){var e=Object(r.useState)("US"),t=Object(o.a)(e,2),n=t[0],c=t[1],a=function(e){var t=Object(r.useState)(!0),n=Object(o.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(null),j=Object(o.a)(s,2),l=j[0],b=j[1],h=Object(r.useState)(),d=Object(o.a)(h,2),p=d[0],O=d[1],x=function(e){return"".concat("https://secure.geonames.org/countryInfoJSON?","country=").concat(e).concat("&username=sg55kg")}(e);return Object(r.useEffect)((function(){var e=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x);case 2:if(t=e.sent,e.prev=3,t.ok){e.next=6;break}throw new Error("".concat(t.status));case 6:return e.next=8,t.json();case 8:(n=e.sent).geonames.length<1&&b("Error: No country by that name"),r=n.geonames.map((function(e){return{areaInSqKm:e.areaInSqKm,capital:e.capital,continentName:e.continentName,countryName:e.countryName,currency:e.currencyCode,population:e.population}})),console.log(n),O(r),a(!1),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(3),b(e.t0),a(!1),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]),{data:p,loading:c,error:l,setError:b}}(n),s=a.data,d=a.loading,f=a.error,v=a.setError;return Object(b.jsx)(j.a,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(h,{}),Object(b.jsxs)(l.b,{path:"/country-lookup",children:[!f&&Object(b.jsx)(O,{setCountry:c}),d&&!f&&Object(b.jsx)(y.a,{className:"loader",loading:d}),!d&&!f&&Object(b.jsx)(p,{data:s})]}),f&&Object(b.jsx)(l.a,{to:"/country-lookup/error"}),Object(b.jsx)(l.b,{path:"/country-lookup/error",children:Object(b.jsx)(m,{error:f,setError:v})}),Object(b.jsx)(x,{})]})})};n(39);a.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.cfa5ab42.chunk.js.map