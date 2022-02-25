/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={31:function(t,e){var i;!function(s,n){"use strict";i=function(){var t=function(){var t=function(){},e=8,i=46,s=37,n=39,a={additionalTagClasses:"",allowDuplicates:!1,saveOnBlur:!1,clearOnBlur:!0,duplicateTagClass:"",containerFocusClass:"active",focusInputOnContainerClick:!0,hiddenInputName:"taggles[]",tags:[],delimeter:",",delimiter:"",attachTagId:!1,allowedTags:[],disallowedTags:[],trimTags:!0,maxTags:null,tabIndex:1,placeholder:"Enter tags...",submitKeys:[188,9,13],preserveCase:!1,inputFormatter:t,tagFormatter:t,onBeforeTagAdd:t,onTagAdd:t,onBeforeTagRemove:function(){return!0},onTagRemove:t};function r(){for(var t=arguments[0],e=1,i=arguments.length;e<i;e++){var s=arguments[e];for(var n in s)s.hasOwnProperty(n)&&(t[n]=s[n])}return t}function o(t,e,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent?t.attachEvent("on"+e,i):t["on"+e]=i}function h(t,e,i){t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent?t.detachEvent("on"+e,i):t["on"+e]=null}function l(t){return t.replace(/^\s+|\s+$/g,"")}function u(t,e){window.attachEvent&&!window.addEventListener?t.innerText=e:t.textContent=e}function c(t,e,i){return Math.min(Math.max(t,e),i)}var p=function(t,e){this.settings=r({},a,e),this.measurements={container:{rect:null,style:null,padding:null}},this.container=t,this.tag={values:[],elements:[]},this.list=document.createElement("ul"),this.inputLi=document.createElement("li"),this.input=document.createElement("input"),this.sizer=document.createElement("div"),this.pasting=!1,this.placeholder=null,this.data=null,this.settings.placeholder&&(this.placeholder=document.createElement("span")),"string"==typeof t&&(this.container=document.getElementById(t)),this._id=0,this._backspacePressed=!1,this._inputPosition=0,this._closeEvents=[],this._closeButtons=[],this._setMeasurements(),this._setupTextarea(),this._attachEvents()};return p.prototype._setMeasurements=function(){this.measurements.container.rect=this.container.getBoundingClientRect(),this.measurements.container.style=window.getComputedStyle(this.container);var t=this.measurements.container.style,e=parseInt(t["padding-left"]||t.paddingLeft,10),i=parseInt(t["padding-right"]||t.paddingRight,10),s=parseInt(t["border-left-width"]||t.borderLeftWidth,10),n=parseInt(t["border-right-width"]||t.borderRightWidth,10);this.measurements.container.padding=e+i+s+n},p.prototype._setupTextarea=function(){var t;if(this.list.className="taggle_list",this.input.type="text",this.input.style.paddingLeft=0,this.input.style.paddingRight=0,this.input.className="taggle_input",this.input.tabIndex=this.settings.tabIndex,this.sizer.className="taggle_sizer",this.settings.tags.length)for(var e=0,i=this.settings.tags.length;e<i;e++){var s=this._createTag(this.settings.tags[e],this.tag.values.length);this.list.appendChild(s)}this.placeholder&&(this._hidePlaceholder(),this.placeholder.classList.add("taggle_placeholder"),this.container.appendChild(this.placeholder),u(this.placeholder,this.settings.placeholder),this.settings.tags.length||this._showPlaceholder());var n=this.settings.inputFormatter(this.input);n&&(this.input=n),this.inputLi.appendChild(this.input),this.list.appendChild(this.inputLi),this.container.appendChild(this.list),this.container.appendChild(this.sizer),t=window.getComputedStyle(this.input).fontSize,this.sizer.style.fontSize=t},p.prototype._attachEvents=function(){var t=this;if(this._eventsAttached)return!1;return this._eventsAttached=!0,this.settings.focusInputOnContainerClick&&(this._handleContainerClick=function(){t.input.focus()}.bind(this),o(this.container,"click",this._handleContainerClick)),this._handleFocus=this._setFocusStateForContainer.bind(this),this._handleBlur=this._blurEvent.bind(this),this._handleKeydown=this._keydownEvents.bind(this),this._handleKeyup=this._keyupEvents.bind(this),o(this.input,"focus",this._handleFocus),o(this.input,"blur",this._handleBlur),o(this.input,"keydown",this._handleKeydown),o(this.input,"keyup",this._handleKeyup),!0},p.prototype._detachEvents=function(){if(!this._eventsAttached)return!1;var t=this;return this._eventsAttached=!1,h(this.container,"click",this._handleContainerClick),h(this.input,"focus",this._handleFocus),h(this.input,"blur",this._handleBlur),h(this.input,"keydown",this._handleKeydown),h(this.input,"keyup",this._handleKeyup),this._closeButtons.forEach((function(e,i){h(e,"click",t._closeEvents[i])})),!0},p.prototype._fixInputWidth=function(){this._setMeasurements(),this._setInputWidth()},p.prototype._canAdd=function(t,e){if(!e)return!1;var i=this.settings.maxTags;if(null!==i&&i<=this.getTagValues().length)return!1;if(!1===this.settings.onBeforeTagAdd(t,e))return!1;if(!this.settings.allowDuplicates&&this._hasDupes(e))return!1;var s=this.settings.preserveCase,n=this.settings.allowedTags;if(n.length&&!this._tagIsInArray(e,n,s))return!1;var a=this.settings.disallowedTags;return!a.length||!this._tagIsInArray(e,a,s)},p.prototype._tagIsInArray=function(t,e,i){return i?-1!==e.indexOf(t):-1!==[].slice.apply(e).map((function(t){return t.toLowerCase()})).indexOf(t)},p.prototype._add=function(t,e,i){var s=this,n=e||"",a=this.settings.delimiter||this.settings.delimeter;"string"!=typeof e&&(n=this.input.value,this.settings.trimTags&&(n[0]===a&&(n=n.replace(a,"")),n=l(n))),n.split(a).map((function(t){return s.settings.trimTags&&(t=l(t)),s._formatTag(t)})).forEach((function(e){if(s._canAdd(t,e)){var n=s.tag.values.length,a=c(i||n,0,n),r=s._createTag(e,a),o=s.list.children[a];s.list.insertBefore(r,o),e=s.tag.values[a],s.settings.onTagAdd(t,e),s.input.value="",s._fixInputWidth(),s._setFocusStateForContainer()}}))},p.prototype._checkPrevOrNextTag=function(t){t=t||window.event;var s=this.container.querySelectorAll(".taggle"),n=c(this._inputPosition-1,0,s.length-1),a=c(this._inputPosition,0,s.length-1),r=n;t.keyCode===i&&(r=a);var o=s[r],h="taggle_hot",l=-1!==[e,i].indexOf(t.keyCode);""===this.input.value&&l&&!this._backspacePressed?o.classList.contains(h)?(this._backspacePressed=!0,this._remove(o,t),this._fixInputWidth(),this._setFocusStateForContainer()):o.classList.add(h):o.classList.contains(h)&&o.classList.remove(h)},p.prototype._setInputWidth=function(){var t=this.sizer.getBoundingClientRect().width,e=this.measurements.container.rect.width-this.measurements.container.padding,i=parseInt(this.sizer.style.fontSize,10),s=Math.round(c(t+1.5*i,10,e));this.input.style.width=s+"px"},p.prototype._hasDupes=function(t){var e,i=this.tag.values.indexOf(t),s=this.container.querySelector(".taggle_list");if(this.settings.duplicateTagClass)for(var n=0,a=(e=s.querySelectorAll("."+this.settings.duplicateTagClass)).length;n<a;n++)e[n].classList.remove(this.settings.duplicateTagClass);return i>-1&&(this.settings.duplicateTagClass&&s.childNodes[i].classList.add(this.settings.duplicateTagClass),!0)},p.prototype._isConfirmKey=function(t){var e=!1;return this.settings.submitKeys.indexOf(t)>-1&&(e=!0),e},p.prototype._setFocusStateForContainer=function(){this._fixInputWidth(),this.container.classList.contains(this.settings.containerFocusClass)||this.container.classList.add(this.settings.containerFocusClass),this._hidePlaceholder()},p.prototype._blurEvent=function(t){if(this.container.classList.contains(this.settings.containerFocusClass)&&this.container.classList.remove(this.settings.containerFocusClass),this.settings.saveOnBlur){if(t=t||window.event,this._setInputWidth(),""!==this.input.value)return void this._confirmValidTagEvent(t);this.tag.values.length&&this._checkPrevOrNextTag(t)}else this.settings.clearOnBlur&&(this.input.value="",this._setInputWidth());this.tag.values.length||this.input.value||this._showPlaceholder()},p.prototype._keydownEvents=function(t){var e=(t=t||window.event).keyCode;this.pasting=!1,this._setInputWidth(),86===e&&t.metaKey&&(this.pasting=!0),this._isConfirmKey(e)&&""!==this.input.value?this._confirmValidTagEvent(t):this.tag.values.length&&this._checkPrevOrNextTag(t)},p.prototype._keyupEvents=function(t){t=t||window.event,this._backspacePressed=!1,-1===[s,n].indexOf(t.keyCode)?(u(this.sizer,this.input.value),this.input.value||this._setInputWidth(),this.pasting&&""!==this.input.value&&(this._add(t),this.pasting=!1)):this._moveInput(t.keyCode)},p.prototype._moveInput=function(t){var e=this._inputPosition;switch(t){case s:var i=c(this._inputPosition-1,0,this.tag.values.length),a=e!==i;this._inputPosition=i,a&&(this.list.insertBefore(this.inputLi,this.list.childNodes[i]||null),this.input.focus());break;case n:var r=c(this._inputPosition+1,0,this.tag.values.length),o=e!==r;this._inputPosition=r,o&&(this.list.insertBefore(this.inputLi,this.list.childNodes[r+1]||null),this.input.focus())}},p.prototype._confirmValidTagEvent=function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1,this._add(t,null,this._inputPosition)},p.prototype._createTag=function(t,e){var i=document.createElement("li"),s=document.createElement("button"),n=document.createElement("input"),a=document.createElement("span");t=this._formatTag(t),u(s,"×"),s.className="close",s.setAttribute("type","button");var r=this._remove.bind(this,s);o(s,"click",r),u(a,t),a.className="taggle_text",i.className="taggle "+this.settings.additionalTagClasses,n.type="hidden",n.value=t,n.name=this.settings.hiddenInputName,i.appendChild(a),i.appendChild(s),i.appendChild(n);var h=this.settings.tagFormatter(i);if(void 0!==h&&(i=h),!(i instanceof HTMLElement)||"li"!==i.localName&&"LI"!==i.tagName)throw new Error("tagFormatter must return an li element");return this.settings.attachTagId&&(this._id+=1,t={text:t,id:this._id}),this.tag.values.splice(e,0,t),this.tag.elements.splice(e,0,i),this._closeEvents.splice(e,0,r),this._closeButtons.splice(e,0,s),this._inputPosition=c(this._inputPosition+1,0,this.tag.values.length),i},p.prototype._showPlaceholder=function(){this.placeholder&&(this.placeholder.style.opacity=1,this.placeholder.setAttribute("aria-hidden","false"))},p.prototype._hidePlaceholder=function(){this.placeholder&&(this.placeholder.style.opacity=0,this.placeholder.setAttribute("aria-hidden","true"))},p.prototype._remove=function(t,e){var i,s,n,a=this;function r(s){if(!s){var r=a._closeEvents[n];h(a._closeButtons[n],"click",r),t.parentNode.removeChild(t),a.tag.elements.splice(n,1),a.tag.values.splice(n,1),a._closeEvents.splice(n,1),a._closeButtons.splice(n,1),a.settings.onTagRemove(e,i),n<a._inputPosition&&(a._inputPosition=c(a._inputPosition-1,0,a.tag.values.length)),a._setFocusStateForContainer()}}"li"!==t.tagName.toLowerCase()&&(t=t.parentNode),s="a"===t.tagName.toLowerCase()?t.parentNode:t,n=this.tag.elements.indexOf(s),i=this.tag.values[n],this.settings.onBeforeTagRemove(e,i,r)&&r()},p.prototype._formatTag=function(t){return this.settings.preserveCase?t:t.toLowerCase()},p.prototype._isIndexInRange=function(t){return t>=0&&t<=this.tag.values.length-1},p.prototype.getTags=function(){return{elements:this.getTagElements(),values:this.getTagValues()}},p.prototype.getTagElements=function(){return[].slice.apply(this.tag.elements)},p.prototype.getTagValues=function(){return[].slice.apply(this.tag.values)},p.prototype.getInput=function(){return this.input},p.prototype.getContainer=function(){return this.container},p.prototype.add=function(t,e){if(a=t,Array.isArray?Array.isArray(a):"[object Array]"===Object.prototype.toString.call(a))for(var i=e,s=0,n=t.length;s<n;s++)"string"==typeof t[s]&&(this._add(null,t[s],i),isNaN(i)||(i+=1));else this._add(null,t,e);var a;return this},p.prototype.edit=function(t,e){if("string"!=typeof t)throw new Error("First edit argument must be of type string");if("number"!=typeof e)throw new Error("Second edit argument must be a number");if(!this._isIndexInRange(e))throw new Error("Edit index should be between 0 and "+this.tag.values.length-1);return"string"==typeof this.tag.values[e]?this.tag.values[e]=t:this.tag.values[e].text=t,u(this.tag.elements[e],t),this},p.prototype.move=function(t,e){if("number"!=typeof t||"number"!=typeof e)throw new Error("Both arguments must be numbers");if(!this._isIndexInRange(t))throw new Error("First index should be between 0 and "+this.tag.values.length-1);if(!this._isIndexInRange(e))throw new Error("Second index should be between 0 and "+this.tag.values.length-1);if(t===e)return this;var i=this.tag.values[t],s=this.tag.elements[t],n=this.tag.elements[e],a=this._closeEvents[t],r=this._closeButtons[t];return this.tag.values.splice(t,1),this.tag.elements.splice(t,1),this._closeEvents.splice(t,1),this._closeButtons.splice(t,1),this.tag.values.splice(e,0,i),this.tag.elements.splice(e,0,s),this._closeEvents.splice(t,0,a),this._closeButtons.splice(t,0,r),this.list.insertBefore(s,n.nextSibling),this},p.prototype.remove=function(t,e){for(var i=this.tag.values.length-1,s=!1;i>-1;){var n=this.tag.values[i];if(this.settings.attachTagId&&(n=n.text),n===t&&(s=!0,this._remove(this.tag.elements[i])),s&&!e)break;i--}return this},p.prototype.removeAll=function(){for(var t=this.tag.values.length-1;t>=0;t--)this._remove(this.tag.elements[t]);return this._showPlaceholder(),this},p.prototype.setOptions=function(t){return this.settings=r({},this.settings,t||{}),this},p.prototype.enable=function(){var t=[].slice.call(this.container.querySelectorAll("button")),e=[].slice.call(this.container.querySelectorAll("input"));return t.concat(e).forEach((function(t){t.removeAttribute("disabled")})),this},p.prototype.disable=function(){var t=[].slice.call(this.container.querySelectorAll("button")),e=[].slice.call(this.container.querySelectorAll("input"));return t.concat(e).forEach((function(t){t.setAttribute("disabled","")})),this},p.prototype.setData=function(t){return this.data=t,this},p.prototype.getData=function(){return this.data},p.prototype.attachEvents=function(){var t=this;return this._attachEvents()&&this._closeButtons.forEach((function(e,i){o(e,"click",t._closeEvents[i])})),this},p.prototype.removeEvents=function(){return this._detachEvents(),this},p}();return s.Taggle=t,t}.apply(e,[]),void 0===i||(t.exports=i)}(this)}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var a=e[s]={exports:{}};return t[s].call(a.exports,a,a.exports,i),a.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=i(31),e=i.n(t);document.body.appendChild(function(){const t=document.createElement("div");return t.innerHTML=e().join(["Hello","webpack"]," "),t}())})()})();