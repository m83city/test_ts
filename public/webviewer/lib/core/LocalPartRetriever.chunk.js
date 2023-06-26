/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[7],{517:function(wa,sa,h){h.r(sa);var pa=h(0),na=h(3),ma=h(176);wa=h(112);var ja=h(290);h=h(436);var ia=window;wa=function(ea){function x(y,f,e){f=ea.call(this,y,f,e)||this;if(y.name&&"xod"!==y.name.toLowerCase().split(".").pop())throw Error("Not an XOD file");if(!ia.FileReader||!ia.File||!ia.Blob)throw Error("File API is not supported in this browser");f.file=y;f.oE=[];f.$L=0;return f}Object(pa.c)(x,ea);x.prototype.nP=function(y,
f,e){var a=this,b=new FileReader;b.onloadend=function(n){if(0<a.oE.length){var r=a.oE.shift();r.Fsa.readAsBinaryString(r.file)}else a.$L--;if(b.error){n=b.error;if(n.code===n.ABORT_ERR){Object(na.j)("Request for chunk "+f.start+"-"+f.stop+" was aborted");return}return e(n)}if(n=b.content||n.target.result)return e(!1,n);Object(na.j)("No data was returned from FileReader.")};f&&(y=(y.slice||y.webkitSlice||y.mozSlice||y.wBa).call(y,f.start,f.stop));0===a.oE.length&&50>a.$L?(b.readAsBinaryString(y),a.$L++):
a.oE.push({Fsa:b,file:y});return function(){b.abort()}};x.prototype.xv=function(y){var f=this;f.kE=!0;var e=ma.a;f.nP(f.file,{start:-e,stop:f.file.size},function(a,b){if(a)return Object(na.j)("Error loading end header: %s "+a),y(a);if(b.length!==e)throw Error("Zip end header data is wrong size!");f.Wd=new ja.a(b);var n=f.Wd.a_();f.nP(f.file,n,function(r,aa){if(r)return Object(na.j)("Error loading central directory: %s "+r),y(r);if(aa.length!==n.stop-n.start)throw Error("Zip central directory data is wrong size!");
f.Wd.X3(aa);f.HL=!0;f.kE=!1;return y(!1)})})};x.prototype.oQ=function(y,f){var e=this,a=e.Zh[y];if(e.Wd.OX(y)){var b=e.Wd.bz(y),n=e.nP(e.file,b,function(r,aa){delete e.Zh[y];if(r)return Object(na.j)('Error loading part "%s": %s, '+y+", "+r),f(r);if(aa.length!==b.stop-b.start)throw Error("Part data is wrong size!");f(!1,y,aa,e.Wd.P0(y))});a.C6=!0;a.cancel=n}else f(Error('File not found: "'+y+'"'),y)};return x}(wa.a);Object(h.a)(wa);Object(h.b)(wa);sa["default"]=wa}}]);}).call(this || window)
