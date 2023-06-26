/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[0],{515:function(wa,sa,h){h.r(sa);h.d(sa,"ByteRangeRequest",function(){return aa});var pa=h(0),na=h(1);h.n(na);var ma=h(3),ja=h(176);wa=h(112);var ia=h(290),ea=h(87),x=h(82),y=h(289),f=h(193);h=h(436);var e=[],a=[],b=window,n=function(){return function(){this.Nn=1}}(),r;(function(ba){ba[ba.UNSENT=0]="UNSENT";ba[ba.DONE=4]="DONE"})(r||(r={}));var aa=function(){function ba(fa,z,ca,ha){var oa=this;this.url=fa;this.range=z;this.Rf=ca;
this.withCredentials=ha;this.T$=r;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);b.Uint8Array&&(this.request.responseType="arraybuffer");ha&&(this.request.withCredentials=ha);w.DISABLE_RANGE_HEADER||(Object(na.isUndefined)(z.stop)?this.request.setRequestHeader("Range","bytes="+z.start):this.request.setRequestHeader("Range",["bytes=",z.start,"-",z.stop-1].join("")));ca&&Object.keys(ca).forEach(function(la){oa.request.setRequestHeader(la,ca[la])});this.request.overrideMimeType?
this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=y.a.NOT_STARTED}ba.prototype.start=function(fa){var z=this,ca=this.request;ca.onreadystatechange=function(){if(z.aborted)return z.status=y.a.ABORTED,fa({code:y.a.ABORTED});if(this.readyState===z.T$.DONE){z.LF();var ha=0===window.document.URL.indexOf("file:///");200===ca.status||206===ca.status||ha&&0===ca.status?(ha=b.E_(this),z.aS(ha,fa)):(z.status=y.a.ERROR,
fa({code:z.status,status:z.status}))}};this.request.send(null);this.status=y.a.STARTED};ba.prototype.aS=function(fa,z){this.status=y.a.SUCCESS;if(z)return z(!1,fa)};ba.prototype.abort=function(){this.LF();this.aborted=!0;this.request.abort()};ba.prototype.LF=function(){var fa=Object(f.c)(this.url,this.range,a);-1!==fa&&a.splice(fa,1);if(0<e.length){fa=e.shift();var z=new ba(fa.url,fa.range,this.Rf,this.withCredentials);fa.request=z;a.push(fa);z.start(Object(f.d)(fa))}};ba.prototype.extend=function(fa){var z=
Object.assign({},this,fa.prototype);z.constructor=fa;return z};return ba}(),w=function(ba){function fa(z,ca,ha,oa,la){ha=ba.call(this,z,ha,oa)||this;ha.$j={};ha.cE=ca;ha.url=z;ha.DISABLE_RANGE_HEADER=!1;ha.MA=aa;ha.jT=3;ha.Rf=la||{};return ha}Object(pa.c)(fa,ba);fa.prototype.ky=function(z,ca,ha){var oa=-1===z.indexOf("?")?"?":"&";switch(ha){case !1:case x.a.NEVER_CACHE:z=z+oa+"_="+Object(na.uniqueId)();break;case !0:case x.a.CACHE:z=z+oa+"_="+ca.start+","+(Object(na.isUndefined)(ca.stop)?"":ca.stop)}return z};
fa.prototype.$X=function(z,ca,ha,oa){void 0===ha&&(ha={});return new this.MA(z,ca,ha,oa)};fa.prototype.Pia=function(z,ca,ha,oa,la){for(var ka=0;ka<e.length;ka++)if(Object(na.isEqual)(e[ka].range,ca)&&Object(na.isEqual)(e[ka].url,z))return e[ka].Dh.push(oa),e[ka].eH++,null;for(ka=0;ka<a.length;ka++)if(Object(na.isEqual)(a[ka].range,ca)&&Object(na.isEqual)(a[ka].url,z))return a[ka].Dh.push(oa),a[ka].eH++,null;ha={url:z,range:ca,cE:ha,Dh:[oa],eH:1};if(0===e.length&&a.length<this.jT)return a.push(ha),
ha.request=this.$X(z,ca,la,this.withCredentials),ha;e.push(ha);return null};fa.prototype.Mp=function(z,ca,ha){var oa=this.ky(z,ca,this.cE);(z=this.Pia(oa,ca,this.cE,ha,this.Rf))&&z.request.start(Object(f.d)(z));return function(){var la=Object(f.c)(oa,ca,a);if(-1!==la){var ka=--a[la].eH;0===ka&&a[la].request&&a[la].request.abort()}else la=Object(f.c)(oa,ca,e),-1!==la&&(ka=--e[la].eH,0===ka&&e.splice(la,1))}};fa.prototype.c_=function(){return{start:-ja.a}};fa.prototype.ana=function(){var z=-(ja.a+ja.e);
return{start:z-ja.d,end:z}};fa.prototype.xv=function(z){var ca=this;this.kE=!0;var ha=ja.a;this.Mp(this.url,this.c_(),function(oa,la,ka){function qa(){var ra=ca.Wd.a_();ca.Mp(ca.url,ra,function(ta,va){if(ta)return Object(ma.j)("Error loading central directory: "+ta),z(ta);va=Object(ea.a)(va);if(va.length!==ra.stop-ra.start)return z("Invalid XOD file: Zip central directory data is wrong size! Should be "+(ra.stop-ra.start)+" but is "+va.length);ca.Wd.X3(va);ca.HL=!0;ca.kE=!1;return z(!1)})}if(oa)return Object(ma.j)("Error loading end header: "+
oa),z(oa,la,ka);la=Object(ea.a)(la);if(la.length!==ha)return z("Invalid XOD file: Zip end header data is wrong size!");try{ca.Wd=new ia.a(la)}catch(ra){return z(ra)}ca.Wd.Xoa?ca.Mp(ca.url,ca.ana(),function(ra,ta){if(ra)return Object(ma.j)("Error loading zip64 header: "+ra),z(ra);ta=Object(ea.a)(ta);ca.Wd.vpa(ta);qa()}):qa()})};fa.prototype.A_=function(z){z(Object.keys(this.Wd.lp))};fa.prototype.oQ=function(z,ca){var ha=this;if(this.Wd.OX(z)){var oa=this.Wd.az(z);if(oa in this.$j){var la=this.Zh[z];
la.iu=this.$j[oa];la.iu.Nn++;la.cancel=la.iu.cancel}else{var ka=this.Wd.hla(z),qa=this.Mp(this.url,ka,function(ta,va){ta?(Object(ma.j)('Error loading part "'+z+'": '+ta),ha.Mp(ha.url,ka,function(xa,Na){if(xa)return ca(xa,z);ha.b4(Na,ka,oa,z,ca)})):ha.b4(va,ka,oa,z,ca)}),ra=this.Zh[z];ra&&(ra.C6=!0,ra.cancel=function(){ra.iu.Nn--;0===ra.iu.Nn&&(qa(),delete ha.$j[oa])},this.$j[oa]=new n(oa),ra.iu=this.$j[oa],ra.iu.cancel=ra.cancel)}}else delete this.Zh[z],ca(Error('File not found: "'+z+'"'),z)};fa.prototype.b4=
function(z,ca,ha,oa,la){if(z.length!==ca.stop-ca.start)la(Error("Part data is wrong size!"),oa);else{do{if(!this.$j[ha])return;oa=this.$j[ha].Nn;for(var ka=ca.As.length,qa=0;qa<ka;++qa){var ra=ca.As[qa];la(!1,ra.ws,z["string"===typeof z?"substring":"subarray"](ra.start,ra.stop),this.Wd.P0(ra.ws));ra.ws in this.Zh&&delete this.Zh[ra.ws]}}while(oa!==this.$j[ha].Nn);delete this.$j[ha]}};fa.DISABLE_RANGE_HEADER=!1;fa.jT=3;return fa}(wa.a);(function(ba){function fa(z,ca,ha){var oa=ba.call(this)||this,
la;for(la in z)oa[la]=z[la];oa.yCa=z;oa.startOffset=ca;oa.endOffset=ha;oa.$X=function(ka,qa,ra,ta){Object(na.isUndefined)(qa.stop)?(qa.start+=oa.endOffset,qa.stop=oa.endOffset):(qa.start+=oa.startOffset,qa.stop+=oa.startOffset);ka=oa.ky(oa.url,qa,oa.cE);return new z.MA(ka,qa,ra,ta)};return oa}Object(pa.c)(fa,ba);return fa})(w);Object(h.a)(w);Object(h.b)(w);sa["default"]=w}}]);}).call(this || window)
