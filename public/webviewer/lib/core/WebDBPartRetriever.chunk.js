/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[12],{527:function(wa,sa,h){h.r(sa);var pa=h(0),na=h(1);h.n(na);wa=h(112);h=h(436);wa=function(ma){function ja(ia,ea,x){ea=ma.call(this,ia,ea,x)||this;ea.db=ia;return ea}Object(pa.c)(ja,ma);ja.prototype.request=function(ia){var ea=this;Object(na.each)(ia,function(x){ea.db.get(x,function(y,f,e){return y?ea.trigger("partReady.partRetriever",{ob:x,error:y}):ea.trigger("partReady.partRetriever",{ob:x,data:f,uj:!1,Og:!1,error:null,Dd:e})})})};
ja.prototype.xv=function(ia){ia()};return ja}(wa.a);Object(h.a)(wa);Object(h.b)(wa);sa["default"]=wa}}]);}).call(this || window)
