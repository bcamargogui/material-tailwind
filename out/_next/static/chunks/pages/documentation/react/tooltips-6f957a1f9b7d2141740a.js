(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[336],{20640:function(e,r,t){"use strict";var o=t(11742),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,r){var t,l,a,i,c,u,p=!1;r||(r={}),t=r.debug||!1;try{if(a=o(),i=document.createRange(),c=document.getSelection(),(u=document.createElement("span")).textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(o){if(o.stopPropagation(),r.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var l=n[r.format]||n.default;window.clipboardData.setData(l,e)}else o.clipboardData.clearData(),o.clipboardData.setData(r.format,e);r.onCopy&&(o.preventDefault(),r.onCopy(o.clipboardData))})),document.body.appendChild(u),i.selectNodeContents(u),c.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(g){t&&console.error("unable to copy using execCommand: ",g),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(r.format||"text",e),r.onCopy&&r.onCopy(window.clipboardData),p=!0}catch(g){t&&console.error("unable to copy using clipboardData: ",g),t&&console.error("falling back to prompt"),l=function(e){var r=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,r)}("message"in r?r.message:"Copy to clipboard: #{key}, Enter"),window.prompt(l,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(i):c.removeAllRanges()),u&&document.body.removeChild(u),a()}return p}},46445:function(e,r,t){"use strict";var o=t(26265),n=t(85893),l=t(59999),a=t(38347),i=t(67294),c=t(39931),u=t.n(c);function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var b={blueGray:"bg-blue-gray-500",gray:"bg-gray-500",brown:"bg-brown-500",deepOrange:"bg-deep-orange-500",orange:"bg-orange-500",amber:"bg-amber-500",yellow:"bg-yellow-600",lime:"bg-lime-500",lightGreen:"bg-light-green-500",green:"bg-green-500",teal:"bg-teal-500",cyan:"bg-cyan-500",lightBlue:"bg-light-blue-500",blue:"bg-blue-500",indigo:"bg-indigo-500",deepPurple:"bg-deep-purple-500",purple:"bg-purple-500",pink:"bg-pink-500",red:"bg-red-500"},s={blueGray:"hover:bg-blue-gray-700",gray:"hover:bg-gray-700",brown:"hover:bg-brown-700",deepOrange:"hover:bg-deep-orange-700",orange:"hover:bg-orange-700",amber:"hover:bg-amber-700",yellow:"hover:bg-yellow-700",lime:"hover:bg-lime-700",lightGreen:"hover:bg-light-green-700",green:"hover:bg-green-700",teal:"hover:bg-teal-700",cyan:"hover:bg-cyan-700",lightBlue:"hover:bg-light-blue-700",blue:"hover:bg-blue-700",indigo:"hover:bg-indigo-700",deepPurple:"hover:bg-deep-purple-700",purple:"hover:bg-purple-700",pink:"hover:bg-pink-700",red:"hover:bg-red-700"},d={blueGray:"focus:bg-blue-gray-400",gray:"focus:bg-gray-400",brown:"focus:bg-brown-400",deepOrange:"focus:bg-deep-orange-400",orange:"focus:bg-orange-400",amber:"focus:bg-amber-400",yellow:"focus:bg-yellow-500",lime:"focus:bg-lime-400",lightGreen:"focus:bg-light-green-400",green:"focus:bg-green-400",teal:"focus:bg-teal-400",cyan:"focus:bg-cyan-400",lightBlue:"focus:bg-light-blue-400",blue:"focus:bg-blue-400",indigo:"focus:bg-indigo-400",deepPurple:"focus:bg-deep-purple-400",purple:"focus:bg-purple-400",pink:"focus:bg-pink-400",red:"focus:bg-red-400"},f={blueGray:"active:bg-blue-gray-800",gray:"active:bg-gray-800",brown:"active:bg-brown-800",deepOrange:"active:bg-deep-orange-800",orange:"active:bg-orange-800",amber:"active:bg-amber-800",yellow:"active:bg-yellow-800",lime:"active:bg-lime-800",lightGreen:"active:bg-light-green-800",green:"active:bg-green-800",teal:"active:bg-teal-800",cyan:"active:bg-cyan-800",lightBlue:"active:bg-light-blue-800",blue:"active:bg-blue-800",indigo:"active:bg-indigo-800",deepPurple:"active:bg-deep-purple-800",purple:"active:bg-purple-800",pink:"active:bg-pink-800",red:"active:bg-red-800"},h={blueGray:"text-blue-gray-500",gray:"text-gray-500",brown:"text-brown-500",deepOrange:"text-deep-orange-500",orange:"text-orange-500",amber:"text-amber-500",yellow:"text-yellow-600",lime:"text-lime-500",lightGreen:"text-light-green-500",green:"text-green-500",teal:"text-teal-500",cyan:"text-cyan-500",lightBlue:"text-light-blue-500",blue:"text-blue-500",indigo:"text-indigo-500",deepPurple:"text-deep-purple-500",purple:"text-purple-500",pink:"text-pink-500",red:"text-red-500"},y={blueGray:"border-blue-gray-500",gray:"border-gray-500",brown:"border-brown-500",deepOrange:"border-deep-orange-500",orange:"border-orange-500",amber:"border-amber-500",yellow:"border-yellow-600",lime:"border-lime-500",lightGreen:"border-light-green-500",green:"border-green-500",teal:"border-teal-500",cyan:"border-cyan-500",lightBlue:"border-light-blue-500",blue:"border-blue-500",indigo:"border-indigo-500",deepPurple:"border-deep-purple-500",purple:"border-purple-500",pink:"border-pink-500",red:"border-red-500"},v={blueGray:"hover:bg-blue-gray-50",gray:"hover:bg-gray-50",brown:"hover:bg-brown-50",deepOrange:"hover:bg-deep-orange-50",orange:"hover:bg-orange-50",amber:"hover:bg-amber-50",yellow:"hover:bg-yellow-50",lime:"hover:bg-lime-50",lightGreen:"hover:bg-light-green-50",green:"hover:bg-green-50",teal:"hover:bg-teal-50",cyan:"hover:bg-cyan-50",lightBlue:"hover:bg-light-blue-50",blue:"hover:bg-blue-50",indigo:"hover:bg-indigo-50",deepPurple:"hover:bg-deep-purple-50",purple:"hover:bg-purple-50",pink:"hover:bg-pink-50",red:"hover:bg-red-50"},m={blueGray:"hover:border-blue-gray-700",gray:"hover:border-gray-700",brown:"hover:border-brown-700",deepOrange:"hover:border-deep-orange-700",orange:"hover:border-orange-700",amber:"hover:border-amber-700",yellow:"hover:border-yellow-700",lime:"hover:border-lime-700",lightGreen:"hover:border-light-green-700",green:"hover:border-green-700",teal:"hover:border-teal-700",cyan:"hover:border-cyan-700",lightBlue:"hover:border-light-blue-700",blue:"hover:border-blue-700",indigo:"hover:border-indigo-700",deepPurple:"hover:border-deep-purple-700",purple:"hover:border-purple-700",pink:"hover:border-pink-700",red:"hover:border-red-700"},x={blueGray:"hover:text-blue-gray-700",gray:"hover:text-gray-700",brown:"hover:text-brown-700",deepOrange:"hover:text-deep-orange-700",orange:"hover:text-orange-700",amber:"hover:text-amber-700",yellow:"hover:text-yellow-700",lime:"hover:text-lime-700",lightGreen:"hover:text-light-green-700",green:"hover:text-green-700",teal:"hover:text-teal-700",cyan:"hover:text-cyan-700",lightBlue:"hover:text-light-blue-700",blue:"hover:text-blue-700",indigo:"hover:text-indigo-700",deepPurple:"hover:text-deep-purple-700",purple:"hover:text-purple-700",pink:"hover:text-pink-700",red:"hover:text-red-700"},w={blueGray:"active:bg-blue-gray-100",gray:"active:bg-gray-100",brown:"active:bg-brown-100",deepOrange:"active:bg-deep-orange-100",orange:"active:bg-orange-100",amber:"active:bg-amber-100",yellow:"active:bg-yellow-100",lime:"active:bg-lime-100",lightGreen:"active:bg-light-green-100",green:"active:bg-green-100",teal:"active:bg-teal-100",cyan:"active:bg-cyan-100",lightBlue:"active:bg-light-blue-100",blue:"active:bg-blue-100",indigo:"active:bg-indigo-100",deepPurple:"active:bg-deep-purple-100",purple:"active:bg-purple-100",pink:"active:bg-pink-100",red:"active:bg-red-100"},j=(0,i.forwardRef)((function(e,r){var t,o,i=e.children,c=e.color,p=e.buttonType,j=e.size,C=void 0===j?"regular":j,O=e.rounded,k=e.iconOnly,T=e.ripple,P=(0,a.Z)(e,["children","color","buttonType","size","rounded","iconOnly","ripple"]),N=new(u()),S=[],Z=["flex","items-center","gap-1","font-bold","outline-none","uppercase","tracking-wider","focus:outline-none","focus:shadow-none","transition-all","duration-300",O=O?"rounded-full":"rounded-lg"],D=[b[c],s[c],d[c],f[c],"text-white","shadow-md","hover:shadow-xl"],E=["bg-transparent","border","border-solid","shadow-none",h[c],y[c],v[c],m[c],x[c],v[c],w[c]],_=["bg-transparent",h[c],v[c],x[c],v[c],w[c]],R=[].concat(Z,[k?"w-8 h-8 p-0 grid place-items-center":"py-1.5 px-4","text-xs","leading-normal"]),G=[].concat(Z,[k?"w-10 h-10 p-0 grid place-items-center":"py-2.5 px-6","text-xs","leading-normal"]),B=[].concat(Z,[k?"w-12 h-12 p-0 grid place-items-center":"py-3 px-7","text-sm","leading-relaxed"]);if("sm"===C)(t=S).push.apply(t,(0,l.Z)(R));else if("lg"===C){var M;(M=S).push.apply(M,(0,l.Z)(B))}else{var A;(A=S).push.apply(A,(0,l.Z)(G))}if("outline"===p)(o=S).push.apply(o,E);else if("link"===p){var F;(F=S).push.apply(F,_)}else{var U;(U=S).push.apply(U,D)}return S=S.join(" "),(0,n.jsx)("button",g(g({},P),{},{className:S,ref:r,onMouseUp:function(e){"dark"===T&&N.create(e,"dark"),"light"===T&&N.create(e,"light")},children:i}))}));r.Z=j},53085:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var o=t(85893),n=(t(67294),t(20921)),l=t(84283),a=t(74855),i=["blue-gray","gray","brown","deep-orange","orange","amber","yellow","lime","light-green","green","teal","cyan","light-blue","blue","indigo","deep-purple","purple","pink","red"],c=["blueGray","gray","brown","deepOrange","orange","amber","yellow","lime","lightGreen","green","teal","cyan","lightBlue","blue","indigo","deepPurple","purple","pink","red"];function u(e){var r=e.children,t=e.activeColor,u=(e.activeFramework,e.onColorClick),p=(e.onFrameworkClick,e.onCopy),g=e.codeToShow,b=e.copyText;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"border border-solid border-gray-200 rounded my-4 p-4 relative",children:[t?(0,o.jsx)("div",{id:"colors",className:"flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",style:{width:"100%",bottom:"-14px"},children:(0,o.jsx)("div",{className:"flex flew-wrap justify-center items-center bg-white px-2",children:i.map((function(e,r){return(0,o.jsx)("span",{className:"cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-".concat(e).concat(t===c[r]?"".concat("yellow"===e?"-600":"-500"," shadow-md"):"-200"),onClick:function(){u(c[r]),p(!1)}},r)}))})}):null,r,(0,o.jsxs)("div",{className:"relative mt-4",children:[(0,o.jsx)(a.CopyToClipboard,{text:g,onCopy:function(){return p(!0)},children:(0,o.jsx)("button",{className:"text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",type:"button",children:b})}),(0,o.jsx)(n.Z,{language:"jsx",style:l.Vg,children:g})]})]})})}},49777:function(e,r,t){"use strict";function o(e,r,t){switch(e){case"react":case"angular":case"html":case"vue":case"javascript":break;default:r(!0),t(e)}}t.d(r,{Z:function(){return o}})},81957:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var o=t(85893);t(67294);function n(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{className:"font-serif font-medium text-xl mb-2 text-gray-900",children:e.title}),(0,o.jsx)("p",{className:"text-gray-700 mb-4 font-light",children:e.description})]})}},31744:function(e,r,t){"use strict";var o=t(85893),n=t(67294),l=t(31736),a=t(13861),i=(t(21026),t(28559),(0,n.forwardRef)((function(e,r){var t=e.children,n=e.placement;return(0,o.jsx)(l.ZP,{content:t,placement:n,reference:r,animation:"shift-away",arrow:a.ki,className:"arrow-dark",interactive:!0})})));r.Z=i},85106:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var o=t(85893);t(67294);function n(e){var r=e.children;return(0,o.jsx)("div",{className:"px-2.5 py-1.5 bg-black bg-opacity-80 text-white text-sm rounded",children:r})}},78615:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return h}});var o=t(85893),n=t(67294),l=t(29041),a=t(82830),i=t(68286),c=t(5981),u=t(81957),p=t(53085),g=t(49777),b=t(46445),s=t(31744),d=t(85106);function f(e){var r=e.copyText,t=e.onCopy,l=e.placement,a=(0,n.useState)("lightBlue"),i=a[0],c=a[1],u=(0,n.useState)("react")[0],f=(0,n.useState)(!1),h=f[0],y=f[1],v=(0,n.useState)(),m=v[0],x=v[1],w=(0,n.useRef)(),j=(0,g.Z)(u,y,x),C='import React, { useRef } from "react";\nimport Button from "@material-tailwind/react/Button";\nimport Tooltips from "@material-tailwind/react/Tooltips";\nimport TooltipsContent from "@material-tailwind/react/TooltipsContent";\n\nexport default function Tooltips() {\n  const buttonRef = useRef();\n\n  return (\n    <>\n      <Button color="'.concat(i,'" ref={buttonRef} ripple="light">\n        Tooltip ').concat(l,'\n      </Button>\n\n      <Tooltips placement="').concat(l,'" ref={buttonRef}>\n        <TooltipContents>Tooltip ').concat(l,"</TooltipContents>\n      </Tooltips>\n    </>\n  );\n}");return(0,o.jsxs)(o.Fragment,{children:[h?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",onClick:function(){return y(!1)},children:(0,o.jsx)("div",{className:"relative w-auto my-6 mx-auto max-w-sm",children:(0,o.jsxs)("div",{className:"border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[(0,o.jsxs)("div",{className:"flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",children:[(0,o.jsx)("h5",{className:"text-2xl font-normal mt-0 mb-0 ",children:"Component not supported"}),(0,o.jsx)("button",{className:"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:function(){return y(!1)},children:(0,o.jsx)("span",{className:"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",children:"\xd7"})})]}),(0,o.jsx)("div",{className:"relative p-6 flex-auto",children:(0,o.jsxs)("p",{className:"text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4",children:["At the moment we do not support the choosen framework (",m,") for this component."]})})]})})}),(0,o.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null,(0,o.jsx)(p.Z,{copyText:r,onCopy:t,activeColor:i,activeFramework:u,codeToShow:C,onColorClick:function(e){return c(e)},onFrameworkClick:j,children:(0,o.jsxs)("div",{className:"flex justify-center",children:[(0,o.jsxs)(b.Z,{color:i,ref:w,ripple:"light",children:["Tooltip ",l]}),(0,o.jsx)(s.Z,{placement:l,ref:w,children:(0,o.jsxs)(d.Z,{children:["Tooltip ",l]})})]})})]})}function h(){var e=(0,n.useState)(null),r=e[0],t=e[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{title:"React Tooltips"}),(0,o.jsx)(i.Z,{}),(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(c.Z,{title:"React Tooltips",description:"Material Tailwind tooltip plugin is a small pop-up element that appears while the user moves the mouse pointer over an element."}),(0,o.jsx)(u.Z,{title:"Tooltip Left"}),(0,o.jsx)(f,{copyText:"Modal"===r?"Copied":"Copy",onCopy:function(e){return t(e?"Modal":"")},placement:"left"}),(0,o.jsx)("div",{className:"h-20",children:"\xa0"}),(0,o.jsx)(u.Z,{title:"Tooltip Right"}),(0,o.jsx)(f,{copyText:"Modal"===r?"Copied":"Copy",onCopy:function(e){return t(e?"Modal":"")},placement:"right"}),(0,o.jsx)("div",{className:"h-20",children:"\xa0"}),(0,o.jsx)(u.Z,{title:"Tooltip Top"}),(0,o.jsx)(f,{copyText:"Modal"===r?"Copied":"Copy",onCopy:function(e){return t(e?"Modal":"")},placement:"top"}),(0,o.jsx)("div",{className:"h-20",children:"\xa0"}),(0,o.jsx)(u.Z,{title:"Tooltip Bottom"}),(0,o.jsx)(f,{copyText:"Modal"===r?"Copied":"Copy",onCopy:function(e){return t(e?"Modal":"")},placement:"bottom"})]})]})}},29168:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/react/tooltips",function(){return t(78615)}])},28559:function(){},21026:function(){},74300:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.CopyToClipboard=void 0;var o=l(t(67294)),n=l(t(20640));function l(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function u(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function p(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,r){return!r||"object"!==a(r)&&"function"!==typeof r?s(e):r}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,r){return(d=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var h=function(e){function r(){var e,t;u(this,r);for(var l=arguments.length,a=new Array(l),i=0;i<l;i++)a[i]=arguments[i];return f(s(t=g(this,(e=b(r)).call.apply(e,[this].concat(a)))),"onClick",(function(e){var r=t.props,l=r.text,a=r.onCopy,i=r.children,c=r.options,u=o.default.Children.only(i),p=(0,n.default)(l,c);a&&a(l,p),u&&u.props&&"function"===typeof u.props.onClick&&u.props.onClick(e)})),t}var t,l,a;return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&d(e,r)}(r,e),t=r,(l=[{key:"render",value:function(){var e=this.props,r=(e.text,e.onCopy,e.options,e.children),t=c(e,["text","onCopy","options","children"]),n=o.default.Children.only(r);return o.default.cloneElement(n,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(t,!0).forEach((function(r){f(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(t).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},t,{onClick:this.onClick}))}}])&&p(t.prototype,l),a&&p(t,a),r}(o.default.PureComponent);r.CopyToClipboard=h,f(h,"defaultProps",{onCopy:void 0,options:void 0})},74855:function(e,r,t){"use strict";var o=t(74300).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var r=document.activeElement,t=[],o=0;o<e.rangeCount;o++)t.push(e.getRangeAt(o));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||t.forEach((function(r){e.addRange(r)})),r&&r.focus()}}}},function(e){e.O(0,[9774,4597,4170,1149,6132],(function(){return r=29168,e(e.s=r);var r}));var r=e.O();_N_E=r}]);