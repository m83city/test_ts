/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[19],{531:function(wa){(function(){wa.exports={I3:function(){function sa(b,n){this.scrollLeft=b;this.scrollTop=n}function h(b){if(null===b||"object"!==typeof b||void 0===b.behavior||"auto"===b.behavior||"instant"===b.behavior)return!0;if("object"===typeof b&&"smooth"===b.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+b.behavior+" is not a valid value for enumeration ScrollBehavior.");}function pa(b,n){if("Y"===
n)return b.clientHeight+a<b.scrollHeight;if("X"===n)return b.clientWidth+a<b.scrollWidth}function na(b,n){b=ea.getComputedStyle(b,null)["overflow"+n];return"auto"===b||"scroll"===b}function ma(b){var n=pa(b,"Y")&&na(b,"Y");b=pa(b,"X")&&na(b,"X");return n||b}function ja(b){var n=(e()-b.startTime)/468;var r=.5*(1-Math.cos(Math.PI*(1<n?1:n)));n=b.uB+(b.x-b.uB)*r;r=b.vB+(b.y-b.vB)*r;b.method.call(b.cI,n,r);n===b.x&&r===b.y||ea.requestAnimationFrame(ja.bind(ea,b))}function ia(b,n,r){var aa=e();if(b===
x.body){var w=ea;var ba=ea.scrollX||ea.pageXOffset;b=ea.scrollY||ea.pageYOffset;var fa=f.scroll}else w=b,ba=b.scrollLeft,b=b.scrollTop,fa=sa;ja({cI:w,method:fa,startTime:aa,uB:ba,vB:b,x:n,y:r})}var ea=window,x=document;if(!("scrollBehavior"in x.documentElement.style&&!0!==ea.jAa)){var y=ea.HTMLElement||ea.Element,f={scroll:ea.scroll||ea.scrollTo,scrollBy:ea.scrollBy,NY:y.prototype.scroll||sa,scrollIntoView:y.prototype.scrollIntoView},e=ea.performance&&ea.performance.now?ea.performance.now.bind(ea.performance):
Date.now,a=RegExp("MSIE |Trident/|Edge/").test(ea.navigator.userAgent)?1:0;ea.scroll=ea.scrollTo=function(b,n){void 0!==b&&(!0===h(b)?f.scroll.call(ea,void 0!==b.left?b.left:"object"!==typeof b?b:ea.scrollX||ea.pageXOffset,void 0!==b.top?b.top:void 0!==n?n:ea.scrollY||ea.pageYOffset):ia.call(ea,x.body,void 0!==b.left?~~b.left:ea.scrollX||ea.pageXOffset,void 0!==b.top?~~b.top:ea.scrollY||ea.pageYOffset))};ea.scrollBy=function(b,n){void 0!==b&&(h(b)?f.scrollBy.call(ea,void 0!==b.left?b.left:"object"!==
typeof b?b:0,void 0!==b.top?b.top:void 0!==n?n:0):ia.call(ea,x.body,~~b.left+(ea.scrollX||ea.pageXOffset),~~b.top+(ea.scrollY||ea.pageYOffset)))};y.prototype.scroll=y.prototype.scrollTo=function(b,n){if(void 0!==b)if(!0===h(b)){if("number"===typeof b&&void 0===n)throw new SyntaxError("Value could not be converted");f.NY.call(this,void 0!==b.left?~~b.left:"object"!==typeof b?~~b:this.scrollLeft,void 0!==b.top?~~b.top:void 0!==n?~~n:this.scrollTop)}else n=b.left,b=b.top,ia.call(this,this,"undefined"===
typeof n?this.scrollLeft:~~n,"undefined"===typeof b?this.scrollTop:~~b)};y.prototype.scrollBy=function(b,n){void 0!==b&&(!0===h(b)?f.NY.call(this,void 0!==b.left?~~b.left+this.scrollLeft:~~b+this.scrollLeft,void 0!==b.top?~~b.top+this.scrollTop:~~n+this.scrollTop):this.scroll({left:~~b.left+this.scrollLeft,top:~~b.top+this.scrollTop,behavior:b.behavior}))};y.prototype.scrollIntoView=function(b){if(!0===h(b))f.scrollIntoView.call(this,void 0===b?!0:b);else{for(b=this;b!==x.body&&!1===ma(b);)b=b.parentNode||
b.host;var n=b.getBoundingClientRect(),r=this.getBoundingClientRect();b!==x.body?(ia.call(this,b,b.scrollLeft+r.left-n.left,b.scrollTop+r.top-n.top),"fixed"!==ea.getComputedStyle(b).position&&ea.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):ea.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}}}}}})()}}]);}).call(this || window)
