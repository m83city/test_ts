/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[8],{518:function(wa,sa,h){h.r(sa);var pa=h(0);wa=h(49);var na=h(436),ma=h(243),ja=h(23),ia=window;h=function(){function ea(x){var y=this;this.uoa=function(f){return f&&("image"===f.type.split("/")[0].toLowerCase()||f.name&&!!f.name.match(/.(jpg|jpeg|png|gif)$/i))};this.file=x;this.Joa=new Promise(function(f){return Object(pa.b)(y,void 0,void 0,function(){var e;return Object(pa.d)(this,function(a){switch(a.label){case 0:return this.uoa(this.file)?
[4,Object(ma.b)(x)]:[3,2];case 1:e=a.ba(),this.file=ja.q?new Blob([e],{type:x.type}):new File([e],null===x||void 0===x?void 0:x.name,{type:x.type}),a.label=2;case 2:return f(!0),[2]}})})})}ea.prototype.getFileData=function(x){var y=this,f=new FileReader;f.onload=function(e){y.trigger(ea.Events.DOCUMENT_LOADING_PROGRESS,[e.loaded,e.loaded]);x(new Uint8Array(e.target.result))};f.onprogress=function(e){e.lengthComputable&&y.trigger(ea.Events.DOCUMENT_LOADING_PROGRESS,[e.loaded,0<e.total?e.total:0])};
f.readAsArrayBuffer(this.file)};ea.prototype.getFile=function(){return Object(pa.b)(this,void 0,Promise,function(){return Object(pa.d)(this,function(x){switch(x.label){case 0:return[4,this.Joa];case 1:return x.ba(),ia.da.isJSWorker?[2,this.file.path]:[2,this.file]}})})};ea.Events={DOCUMENT_LOADING_PROGRESS:"documentLoadingProgress"};return ea}();Object(wa.a)(h);Object(na.a)(h);Object(na.b)(h);sa["default"]=h}}]);}).call(this || window)
