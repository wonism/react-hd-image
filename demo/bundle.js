!function(n,e,t){"use strict";var r="default"in n?n.default:n,o=function(n,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)};
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */var i=function(){return(i=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)};function a(n,e){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(n,a)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}function l(n,e){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var r,o,i=t.call(n),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(n){o={error:n}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a}var c,s,p,u=function(){var n;return null!=window.matchMedia&&(window.matchMedia("only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)").matches||window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)").matches||(null!=(n=window.devicePixelRatio)?n:0)>=2)},d=function(){var n;return null!=window.matchMedia&&(window.matchMedia("only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)").matches||window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)").matches||(null!=(n=window.devicePixelRatio)?n:0)>1.3)},f={},m=function(n){function e(e){var t=n.call(this,e)||this;return t.state={ratio:1},t}return function(n,e){function t(){this.constructor=n}o(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}(e,n),e.prototype.componentDidMount=function(){this.checkDisplayType()},e.prototype.componentDidUpdate=function(n,e){return t=this,r=void 0,i=function(){return a(this,(function(t){switch(t.label){case 0:return o=n.src,i=this.props.src,(Array.isArray(o)&&Array.isArray(i)?o.join()===i.join():o===i)?[3,1]:(this.checkDisplayType(),[3,3]);case 1:return e.ratio===this.state.ratio?[3,3]:[4,(r=this.source,new Promise((function(n){if(r in f)n(f[r]);else{var e=new Image;e.onload=function(){f[r]=!0,n(!0)},e.onerror=function(){f[r]=!1,n(!1)},e.src=r}})))];case 2:t.sent()||this.setState({ratio:1}),t.label=3;case 3:return[2]}var r,o,i}))},new((o=void 0)||(o=Promise))((function(n,e){function a(n){try{c(i.next(n))}catch(n){e(n)}}function l(n){try{c(i.throw(n))}catch(n){e(n)}}function c(e){e.done?n(e.value):new o((function(n){n(e.value)})).then(a,l)}c((i=i.apply(t,r||[])).next())}));var t,r,o,i},Object.defineProperty(e.prototype,"source",{get:function(){var n,e,t=this.state.ratio,r=this.props.src;if(Array.isArray(r))return null!=(e=null!=(n=r[t-1])?n:r[t-2])?e:r[0];if(1===t)return r;var o="@"+t+"x",i=r.match(/(.+)(\.[^.]+)$/);if(null==i)return r+o;var a=l(i,3);return a[1]+o+a[2]},enumerable:!0,configurable:!0}),e.prototype.checkDisplayType=function(){this.props.skipCheck||(u()?this.setState({ratio:3}):d()&&this.setState({ratio:2}))},e.prototype.render=function(){var n=this.props,e=(n.src,function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t}(n,["src"]));return r.createElement("img",i({src:this.source},e))},e}(n.PureComponent),h=document.getElementById("root"),b=t.createGlobalStyle(p||(c=['\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  body {\n    color: #fff;\n    background-color: #100317;\n    font-family: Sans-serif;\n    -webkit-font-smoothing: antialiased;\n    text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  main {\n    margin: auto;\n    max-width: 720px;\n  }\n\n  img {\n    width: 720px;\n    max-width: 100%;\n  }\n\n  hr {\n    margin: 2em 0;\n  }\n\n  figure {\n    margin: 0;\n  }\n\n  figcaption {\n    margin: 1.6em 0;\n    font-size: 1.5em;\n  }\n\n  pre {\n    display: block;\n    position: relative;\n    padding: 20px 0px 0px;\n    background: rgb(38, 50, 56);\n    border-radius: 5px;\n\n    &::before {\n      display: inline-block;\n      position: absolute;\n      top: 15px;\n      left: 20px;\n      width: 10px;\n      height: 10px;\n      background-color: #ff5f56;\n      content: "";\n      border-radius: 50%;\n    }\n\n    &::after {\n      display: inline-block;\n      position: absolute;\n      top: 15px;\n      left: 40px;\n      width: 10px;\n      height: 10px;\n      background-color: #ffdb2e;\n      border-radius: 50%;\n      content: "";\n    }\n  }\n\n  code {\n    display: inline-block;\n    padding: 1.6em;\n    color: #dcdcdc;\n    background: none;\n    border: 0;\n    font-family: Inconsolata, monospace;\n    overflow-wrap: normal;\n\n    &::before {\n      display: inline-block;\n      position: absolute;\n      top: 15px;\n      left: 60px;\n      width: 10px;\n      height: 10px;\n      background-color: #27c93f;\n      content: "";\n      border-radius: 50%;\n    }\n  }\n'],s=['\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  body {\n    color: #fff;\n    background-color: #100317;\n    font-family: Sans-serif;\n    -webkit-font-smoothing: antialiased;\n    text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  main {\n    margin: auto;\n    max-width: 720px;\n  }\n\n  img {\n    width: 720px;\n    max-width: 100%;\n  }\n\n  hr {\n    margin: 2em 0;\n  }\n\n  figure {\n    margin: 0;\n  }\n\n  figcaption {\n    margin: 1.6em 0;\n    font-size: 1.5em;\n  }\n\n  pre {\n    display: block;\n    position: relative;\n    padding: 20px 0px 0px;\n    background: rgb(38, 50, 56);\n    border-radius: 5px;\n\n    &::before {\n      display: inline-block;\n      position: absolute;\n      top: 15px;\n      left: 20px;\n      width: 10px;\n      height: 10px;\n      background-color: #ff5f56;\n      content: "";\n      border-radius: 50%;\n    }\n\n    &::after {\n      display: inline-block;\n      position: absolute;\n      top: 15px;\n      left: 40px;\n      width: 10px;\n      height: 10px;\n      background-color: #ffdb2e;\n      border-radius: 50%;\n      content: "";\n    }\n  }\n\n  code {\n    display: inline-block;\n    padding: 1.6em;\n    color: #dcdcdc;\n    background: none;\n    border: 0;\n    font-family: Inconsolata, monospace;\n    overflow-wrap: normal;\n\n    &::before {\n      display: inline-block;\n      position: absolute;\n      top: 15px;\n      left: 60px;\n      width: 10px;\n      height: 10px;\n      background-color: #27c93f;\n      content: "";\n      border-radius: 50%;\n    }\n  }\n'],Object.defineProperty?Object.defineProperty(c,"raw",{value:s}):c.raw=s,p=c));e.render(r.createElement((function(){var e=l(n.useState(-1),2),t=e[0],o=e[1];return n.useEffect((function(){u()?o(3):d()?o(2):o(1)}),[]),r.createElement(r.Fragment,null,r.createElement(b,null),r.createElement("h1",null,"React HD Image example page. (Your display renders @"+t+"x image.)"),r.createElement("div",null,r.createElement("figure",null,r.createElement(m,{src:"./ironman.jpg",alt:"Iron Man"}),r.createElement("figcaption",null,t>1?"High resolution image will be loaded":"Medium resolution image will be loaded")),r.createElement("pre",null,r.createElement("code",null,'<HDImage\n  src="./ironman.jpg"\n  alt="Iron Man"\n/>'))),r.createElement("hr",null),r.createElement("div",null,r.createElement("figure",null,r.createElement(m,{src:["./winterscape.jpg","./winterscape-retina-version.jpg","./winterscape-hd-version.jpg"],alt:"House"}),r.createElement("figcaption",null,"If the suffix of diffent resolution images is not predictable, You can pass an array of several resolution images. (You can omit the third one.)")),r.createElement("pre",null,r.createElement("code",null,"<HDImage\n  src={[\n    './winterscape.jpg',\n    './winterscape-retina-version.jpg',\n    './winterscape-hd-version.jpg',\n  ]}\n  alt=\"House\"\n/>"))),r.createElement("hr",null),r.createElement("div",null,r.createElement("figure",null,r.createElement(m,{src:"./moon.jpg",alt:"Moon"}),r.createElement("figcaption",null,"This image does not have high resolution version.")),r.createElement("pre",null,r.createElement("code",null,'<HDImage\n  src="./moon.jpg"\n  alt="Moon"\n/>'))),r.createElement("hr",null),r.createElement("div",null,r.createElement("figure",null,r.createElement(m,{src:"./ironman.jpg",alt:"Iron Man",skipCheck:!0}),r.createElement("figcaption",null,"If you set skipCheck to true, high resolution image won't be rendered.")),r.createElement("pre",null,r.createElement("code",null,'<HDImage\n  src="./ironman.jpg"\n  alt="Iron Man"\n  skipCheck\n/>'))))}),null),h)}(React,ReactDOM,styled);
