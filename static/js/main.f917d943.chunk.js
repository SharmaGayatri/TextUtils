(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(9),a(1));a(10);function m(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),l.a.createElement("form",{className:"d-flex"},l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable dark mode"))))))}function s(e){var t=Object(n.useState)(" "),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label"},l.a.createElement("h1",null,e.heading)),l.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",value:r,onChange:function(e){o(e.target.value)},rows:"8",style:{backgroundColor:"dark"===e.mode?"#144f89":"white",color:"dark"===e.mode?"white":"black"}}),l.a.createElement("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label"},l.a.createElement("h3",null,"OR")),l.a.createElement("div",null,l.a.createElement("input",{type:"file",className:"btn btn-primary my-1",accept:"text/plain",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onload=function(e){o(e.target.result)},a.readAsText(t)}}))),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var e=r.toUpperCase();o(e)}},"Convert to uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var e=r.toLowerCase();o(e)}},"Convert to LowerCase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){o("")}},"Clear "),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var e=new SpeechSynthesisUtterance;e.text=r,window.speechSynthesis.speak(e)}},"Speech"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){navigator.clipboard.writeText(r),e.showAlert("Text Copied","success")}},"Copy text"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){for(var e=r.split(". "),t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);var a=e.join(". ");o(a)}},"Capitalize word after full stop"),l.a.createElement("div",null)),l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h2",null," Your Text Summary"),l.a.createElement("p",null,"words"),l.a.createElement("p",null,""===r?"0":r.trim().split(/\s+/).length,"words and ",r.length,"characters "),l.a.createElement("p",null,.08*r.split(" ").length,"Minutes to read"),l.a.createElement("h2",null,"Preview Here"),l.a.createElement("p",null,r.length>0?r:"Enter something in the above textbox to preview here")))}m.defaultProps={title:"TextUtils",aboutText:"About"};var i=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null," ",function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg,l.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"}))};var u=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),u=Object(c.a)(o,2),b=u[0],d=u[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#041939"):(r("light"),document.body.style.backgroundColor="white")}}),l.a.createElement(i,{alert:b}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(s,{showAlert:function(e,t){d({msg:e,type:t}),setTimeout(function(){d(null)},1500)},heading:"Enter your text below",mode:a})))},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),document.getElementById("root")),b()}],[[4,1,2]]]);
//# sourceMappingURL=main.f917d943.chunk.js.map