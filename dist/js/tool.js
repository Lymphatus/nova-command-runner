(()=>{var e={757:(e,t,n)=>{e.exports=n(666)},132:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".content-start{align-content:start}.btn-success{background-color:#28a745;border-color:#28a745;color:#fff}.btn-success:hover{background-color:#218838;border-color:#1e7e34;color:#fff}.btn-success.focus,.btn-success:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{background-color:#28a745;border-color:#28a745;color:#fff}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{background-color:#1e7e34;border-color:#1c7430;color:#fff}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-info{background-color:#17a2b8;border-color:#17a2b8;color:#fff}.btn-info:hover{background-color:#138496;border-color:#117a8b;color:#fff}.btn-info.focus,.btn-info:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{background-color:#17a2b8;border-color:#17a2b8;color:#fff}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{background-color:#117a8b;border-color:#10707f;color:#fff}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning{background-color:#ffc107;border-color:#ffc107;color:#212529}.btn-warning:hover{background-color:#e0a800;border-color:#d39e00;color:#212529}.btn-warning.focus,.btn-warning:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled,.btn-warning:disabled{background-color:#ffc107;border-color:#ffc107;color:#212529}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{background-color:#d39e00;border-color:#c69500;color:#212529}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.badge-success{background-color:#28a745;color:#fff}.badge-error{background-color:#dc3545;color:#fff}.badge-pending{background-color:#ffc107;color:#212529}",""]);const a=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},666:e=>{var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof h?t:h,a=Object.create(o.prototype),i=new _(r||[]);return a._invoke=function(e,t,n){var r=u;return function(o,a){if(r===f)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw a;return O()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var l=d(e,t,n);if("normal"===l.type){if(r=n.done?m:p,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=m,n.method="throw",n.arg=l.arg)}}}(e,n,i),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var u="suspendedStart",p="suspendedYield",f="executing",m="completed",g={};function h(){}function y(){}function b(){}var v={};l(v,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(L([])));x&&x!==n&&r.call(x,a)&&(v=x);var k=b.prototype=h.prototype=Object.create(v);function C(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){function n(o,a,i,c){var l=d(e[o],e,a);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(u).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=d(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function B(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function V(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(B,this),this.reset(!0)}function L(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:O}}function O(){return{value:t,done:!0}}return y.prototype=b,l(k,"constructor",b),l(b,"constructor",y),y.displayName=l(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},C(N.prototype),l(N.prototype,i,(function(){return this})),e.AsyncIterator=N,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new N(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},C(k),l(k,c,"Generator"),l(k,a,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(V),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),V(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;V(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:L(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},379:(e,t,n)=>{"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],s=n[l]||0,d="".concat(l," ").concat(s);n[l]=s+1;var u=c(d),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:h(p,t),references:1}),r.push(d)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,g=0;function h(e,t){var n,r,o;if(t.singleton){var a=g++;n=m||(m=s(t)),r=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=s(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=l(e,t),s=0;s<n.length;s++){var d=c(n[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=a}}}},744:(e,t)=>{"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";const e=Vue;var t={class:"mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"},r={class:"p-6 grid gap-6"},o={key:0},a={class:"inline-block text-80 mb-2 leading-tight w-full capitalize"},i=["type","onUpdate:modelValue","placeholder"],c={key:1},l={class:"flex items-center ml-auto"},s={key:1,class:"flex flex-col md:flex-row mb-3"},d={class:"w-full md:w-3/5 md:px-3 mb-2 md:mb-0"},u=(0,e.createTextVNode)(" Run "),p={class:"md:col-span-3 grid gap-2 content-start"},f={class:"flex flex-col md:flex-row justify-between mt-6 mb-6"},m=(0,e.createTextVNode)("History"),g={class:"md:ml-2 inline-flex items-center shadow rounded-lg bg-white dark:bg-gray-800 px-2 h-8"},h={key:0,class:"w-full table-default"},y=(0,e.createElementVNode)("thead",null,[(0,e.createElementVNode)("tr",null,[(0,e.createElementVNode)("th",{class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"}," Command "),(0,e.createElementVNode)("th",{class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"}," Type "),(0,e.createElementVNode)("th",{class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"}," Run By "),(0,e.createElementVNode)("th",{class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"}," Status "),(0,e.createElementVNode)("th",{class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"}," Result "),(0,e.createElementVNode)("th",{class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"}," Duration "),(0,e.createElementVNode)("th",{class:"text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2"}," Happened ")])],-1),b={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},v={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},w={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},x={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},k={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},C=["innerHTML"],N={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},E={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},B={key:1,class:"flex flex-col justify-center items-center px-6 py-8"},V={class:"text-base font-normal mt-3"};var _=n(757),L=n.n(_),O={type:"button",class:"inline-flex relative items-center justify-center w-8 h-8 focus:outline-none focus:ring rounded-lg"},S={key:0,class:"absolute",style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}};const D={props:{type:{type:String,required:!1},loading:{type:Boolean,default:!1},processing:{type:Boolean,default:!1}}};var T=n(744);function j(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}const M={components:{ToolbarButton:(0,T.Z)(D,[["render",function(t,n,r,o,a,i){var c=(0,e.resolveComponent)("Icon"),l=(0,e.resolveComponent)("Loader");return(0,e.openBlock)(),(0,e.createElementBlock)("button",O,[(0,e.createElementVNode)("span",{class:(0,e.normalizeClass)({invisible:r.processing||r.loading})},[(0,e.renderSlot)(t.$slots,"default"),r.type?((0,e.openBlock)(),(0,e.createBlock)(c,{key:0,solid:"",type:r.type},null,8,["type"])):(0,e.createCommentVNode)("",!0)],2),r.processing||r.loading?((0,e.openBlock)(),(0,e.createElementBlock)("span",S,[(0,e.createVNode)(l,{class:"text-gray-500",width:"32"})])):(0,e.createCommentVNode)("",!0)])}]])},data:function(){return{modalOpen:!1,running:!1,loading:!1,playing:!1,groups:[],commands:{},customCommand:{label:"Custom Command",type:"primary",help:"are you sure you want to run this command?",command_type:"artisan",command:"",variables:[],flags:[]},history:{},runningCommand:{},help:"",heading:"",customCommands:{},pollingTime:1e3}},created:function(){var e,t=this;return(e=L().mark((function e(){return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData();case 2:t.setupInterval();case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){j(a,r,o,i,c,"next",e)}function c(e){j(a,r,o,i,c,"throw",e)}i(void 0)}))})()},methods:{clearHistory:function(){this.openModal({label:"Clear Command Run History",type:"primary",help:"are you sure you want to clear the command run history?",command_type:"artisan",command:"cache:forget nova-command-runner-history",variables:[],flags:[]})},getSelectedOption:function(e){var t=this.getOptions(e);return t&&t[0]&&t[0].hasOwnProperty("value")?t[0].value:""},getOptions:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=[];for(var r in t&&n.push({value:"",label:"-"}),e)n.push({value:r,label:e[r]});return n},runCustomCommand:function(){this.customCommand.command?this.openModal(this.customCommand):Nova.error("Please enter a command")},getData:function(){var e=this;if(!this.loading)return this.loading=!0,Nova.request().get("/nova-vendor/stepanenko3/nova-command-runner").then((function(t){e.groups=[],t.data.commands.forEach((function(t){var n=t.group;e.groups.indexOf(n)<0&&e.groups.push(n)})),e.commands=t.data.commands,e.history=t.data.history,e.help=t.data.help,e.heading=t.data.heading,e.customCommands=t.data.custom_commands,e.pollingTime=t.data.polling_time,e.customCommands&&(e.customCommand.command_type=Object.keys(e.customCommands)[0])})).finally((function(){return e.loading=!1}))},runCommand:function(){var e=this,t=!0;this.runningCommand.variables&&Object.keys(this.runningCommand.variables).forEach((function(n){e.runningCommand.variables[n].value||(t=!1,Nova.error(e.runningCommand.variables[n].label+" is required"))})),t&&(this.running=!0,Nova.request().post("/nova-vendor/stepanenko3/nova-command-runner/run",{command:this.runningCommand}).then((function(t){t.data.status&&"success"===t.data.status?Nova.success(t.data.result):Nova.error(t.data.result),e.running=!1,e.history=t.data.history,e.closeModal()})).catch((function(t){e.running=!1})))},openModal:function(e){this.runningCommand=e,this.modalOpen=!0},closeModal:function(){this.modalOpen=!1,this.runningCommand={}},setupInterval:function(){var e=this;this.interval=setInterval((function(){!e.loading&&(e.playing||e.history.filter((function(e){return"pending"===e.status})).length>0)&&e.getData()}),this.pollingTime)}}};var F=n(379),I=n.n(F),H=n(132),P={insert:"head",singleton:!1};I()(H.Z,P);H.Z.locals;const R=(0,T.Z)(M,[["render",function(n,_,L,O,S,D){var T=(0,e.resolveComponent)("ModalHeader"),j=(0,e.resolveComponent)("SelectControl"),M=(0,e.resolveComponent)("CheckboxWithLabel"),F=(0,e.resolveComponent)("CancelButton"),I=(0,e.resolveComponent)("LoadingButton"),H=(0,e.resolveComponent)("ModalFooter"),P=(0,e.resolveComponent)("Modal"),R=(0,e.resolveComponent)("Heading"),z=(0,e.resolveComponent)("Card"),A=(0,e.resolveComponent)("Template"),G=(0,e.resolveComponent)("DefaultButton"),U=(0,e.resolveComponent)("heading"),Z=(0,e.resolveComponent)("ToolbarButton"),q=(0,e.resolveComponent)("Badge"),Y=(0,e.resolveComponent)("Icon"),J=(0,e.resolveComponent)("card"),W=(0,e.resolveDirective)("tooltip");return(0,e.openBlock)(),(0,e.createElementBlock)("div",null,[(0,e.createVNode)(P,{show:S.modalOpen,tabindex:"-1","data-testid":"command-runner-modal",role:"dialog"},{default:(0,e.withCtx)((function(){return[(0,e.createElementVNode)("div",t,[(0,e.createVNode)(T,{textContent:(0,e.toDisplayString)(S.runningCommand.label)},null,8,["textContent"]),(0,e.createElementVNode)("div",r,[S.runningCommand.help?((0,e.openBlock)(),(0,e.createElementBlock)("p",o,(0,e.toDisplayString)(S.runningCommand.help),1)):(0,e.createCommentVNode)("",!0),((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(S.runningCommand.variables,(function(t,n){return(0,e.openBlock)(),(0,e.createElementBlock)("div",null,[(0,e.createElementVNode)("label",a,(0,e.toDisplayString)(t.label),1),"select"===t.field?((0,e.openBlock)(),(0,e.createBlock)(j,{key:0,size:"lg",dusk:t.label,options:D.getOptions(t.options),selected:D.getSelectedOption(t.options),onChange:function(e){return t.value=e}},null,8,["dusk","options","selected","onChange"])):(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("input",{key:1,type:t.field,class:"w-full form-control form-input form-input-bordered w-full","onUpdate:modelValue":function(e){return t.value=e},placeholder:t.placeholder},null,8,i)),[[e.vModelDynamic,t.value]])])})),256)),S.runningCommand.flags.length?((0,e.openBlock)(),(0,e.createElementBlock)("div",c,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(S.runningCommand.flags,(function(t,n){return(0,e.openBlock)(),(0,e.createBlock)(M,{key:"flag-"+n,onInput:function(e){return S.runningCommand.flags[n].selected=e.target.checked}},{default:(0,e.withCtx)((function(){return[(0,e.createTextVNode)((0,e.toDisplayString)(t.label),1)]})),_:2},1032,["onInput"])})),128))])):(0,e.createCommentVNode)("",!0)]),(0,e.createVNode)(H,null,{default:(0,e.withCtx)((function(){return[(0,e.createElementVNode)("div",l,[(0,e.createVNode)(F,{component:"button",type:"button",dusk:"cancel-action-button",class:"ml-auto mr-3",onClick:(0,e.withModifiers)(D.closeModal,["prevent"])},null,8,["onClick"]),(0,e.createVNode)(I,{type:"submit",ref:"runButton",dusk:"confirm-run-button",disabled:S.running,loading:S.running,onClick:_[0]||(_[0]=function(e){return D.runCommand()}),component:S.runningCommand.type&&-1===["primary","danger"].indexOf(S.runningCommand.type)?n.BasicButton:"danger"===S.runningCommand.type?"DangerButton":"DefaultButton",class:(0,e.normalizeClass)(S.runningCommand.type&&-1===["primary","danger"].indexOf(S.runningCommand.type)?"btn-"+S.runningCommand.type:"")},{default:(0,e.withCtx)((function(){return[(0,e.createTextVNode)((0,e.toDisplayString)(S.runningCommand.label),1)]})),_:1},8,["disabled","loading","component","class"])])]})),_:1})])]})),_:1},8,["show"]),(0,e.createVNode)(R,{class:"mb-6"},{default:(0,e.withCtx)((function(){return[(0,e.createTextVNode)((0,e.toDisplayString)(S.heading),1)]})),_:1}),S.help?((0,e.openBlock)(),(0,e.createBlock)(A,{key:0},{default:(0,e.withCtx)((function(){return[(0,e.createVNode)(z,{class:"p-3"},{default:(0,e.withCtx)((function(){return[(0,e.createTextVNode)((0,e.toDisplayString)(S.help),1)]})),_:1})]})),_:1})):(0,e.createCommentVNode)("",!0),Array.isArray(S.customCommands)?(0,e.createCommentVNode)("",!0):((0,e.openBlock)(),(0,e.createElementBlock)("div",s,[(0,e.createVNode)(j,{class:"md:w-1/5 mb-2 md:mb-0",options:D.getOptions(S.customCommands,!1),selected:S.customCommand.command_type,dusk:"command-runner-type",size:"lg",onChange:_[1]||(_[1]=function(e){return S.customCommand.command_type=e})},null,8,["options","selected"]),(0,e.createElementVNode)("div",d,[(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":_[2]||(_[2]=function(e){return S.customCommand.command=e}),placeholder:"Enter a Command...",class:"w-full form-control form-input form-input-bordered"},null,512),[[e.vModelText,S.customCommand.command]])]),(0,e.createVNode)(G,{size:"lg",onClick:D.runCustomCommand,class:"w-full md:w-1/3"},{default:(0,e.withCtx)((function(){return[u]})),_:1},8,["onClick"])])),(0,e.createVNode)(z,{class:"grid md:grid-cols-12 gap-6 p-6"},{default:(0,e.withCtx)((function(){return[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(S.groups,(function(t){return(0,e.openBlock)(),(0,e.createElementBlock)("div",p,[(0,e.createVNode)(R,{level:"2"},{default:(0,e.withCtx)((function(){return[(0,e.createTextVNode)((0,e.toDisplayString)(t||"Unnamed group"),1)]})),_:2},1024),((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(S.commands,(function(r,o){return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[r.group==t?((0,e.openBlock)(),(0,e.createBlock)(I,{key:0,size:"lg",ref_for:!0,ref:"button",class:(0,e.normalizeClass)(["shadow relative w-full mt-2",r.type&&-1===["primary","danger"].indexOf(r.type)?"btn-"+r.type:""]),disabled:S.running,onClick:function(e){return D.openModal(r)},component:r.type&&-1===["primary","danger"].indexOf(r.type)?n.BasicButton:"danger"===r.type?"DangerButton":"DefaultButton"},{default:(0,e.withCtx)((function(){return[(0,e.createTextVNode)((0,e.toDisplayString)(r.label),1)]})),_:2},1032,["disabled","onClick","component","class"])):(0,e.createCommentVNode)("",!0)],64)})),256))])})),256))]})),_:1}),(0,e.createElementVNode)("div",f,[(0,e.createVNode)(U,null,{default:(0,e.withCtx)((function(){return[m]})),_:1}),(0,e.createElementVNode)("div",g,[(0,e.withDirectives)((0,e.createVNode)(Z,{onClick:(0,e.withModifiers)(D.getData,["prevent"]),loading:S.loading,type:"refresh"},null,8,["onClick","loading"]),[[W,n.__("Refresh")]]),(0,e.withDirectives)((0,e.createVNode)(Z,{onClick:_[3]||(_[3]=(0,e.withModifiers)((function(e){return S.playing=!S.playing}),["prevent"])),class:(0,e.normalizeClass)([{"text-green-500":S.playing,"text-gray-500":!S.playing},"w-8 h-8"]),type:"clock"},null,8,["class"]),[[W,S.playing?n.__("Stop polling"):n.__("Start polling")]]),(0,e.withDirectives)((0,e.createVNode)(Z,{onClick:(0,e.withModifiers)(D.clearHistory,["prevent"]),type:"trash",class:"text-red-500"},null,8,["onClick"]),[[W,n.__("Clear History")]])])]),(0,e.createVNode)(J,{class:"mb-6 overflow-hidden overflow-x-auto relative"},{default:(0,e.withCtx)((function(){return[S.history&&Object.keys(S.history).length>0?((0,e.openBlock)(),(0,e.createElementBlock)("table",h,[y,(0,e.createElementVNode)("tbody",null,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(S.history,(function(t){return(0,e.openBlock)(),(0,e.createElementBlock)("tr",null,[(0,e.createElementVNode)("td",b,(0,e.toDisplayString)(t.run),1),(0,e.createElementVNode)("td",v,(0,e.toDisplayString)(t.type),1),(0,e.createElementVNode)("td",w,(0,e.toDisplayString)(t.run_by),1),(0,e.createElementVNode)("td",x,[(0,e.createVNode)(q,{label:t.status,extraClasses:"badge-"+t.status},null,8,["label","extraClasses"])]),(0,e.createElementVNode)("td",k,[(0,e.createElementVNode)("pre",{innerHTML:t.result},null,8,C)]),(0,e.createElementVNode)("td",N,(0,e.toDisplayString)(t.duration?t.duration+" sec.":""),1),(0,e.createElementVNode)("td",E,(0,e.toDisplayString)(t.time),1)])})),256))])])):((0,e.openBlock)(),(0,e.createElementBlock)("div",B,[(0,e.createVNode)(Y,{type:"search",class:"mb-3 text-gray-300 dark:text-gray-500",width:"50",height:"50"}),(0,e.createElementVNode)("h3",V,(0,e.toDisplayString)(n.__("No Logs.")),1)]))]})),_:1})])}]]);Nova.booting((function(e,t){Nova.inertia("NovaCommandRunner",R)}))})()})();
