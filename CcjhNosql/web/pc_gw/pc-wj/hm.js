(function(){var h={},mt={},c={id:"db484258a22f8698922afbef652026df",dm:["weixin.gycode.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,conv:0,med:0,cvcc:'',cvcf:[],apps:''};var r=void 0,s=!0,t=null,w=!1;mt.h={};mt.h.wa=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.h.ua=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:r;mt.h.cookieEnabled=navigator.cookieEnabled;mt.h.javaEnabled=navigator.javaEnabled();mt.h.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.h.ya=(window.screen.width||0)+"x"+(window.screen.height||0);mt.h.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,b,f){var d;f.F&&(d=new Date,d.setTime(d.getTime()+f.F));document.cookie=a+"="+b+(f.domain?"; domain="+f.domain:"")+(f.path?"; path="+f.path:"")+(d?"; expires="+d.toGMTString():"")+(f.Ra?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:t};mt.o={};mt.o.ha=function(a){return document.getElementById(a)};mt.o.Ka=function(a,b){for(b=b.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return t};
(mt.o.U=function(){function a(){if(!a.w){a.w=s;for(var b=0,f=d.length;b<f;b++)d[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,1);return}a()}var f=w,d=[],g;document.addEventListener?g=function(){document.removeEventListener("DOMContentLoaded",g,w);a()}:document.attachEvent&&(g=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",g),a())});(function(){if(!f)if(f=s,"complete"===document.readyState)a.w=s;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
g,w),window.addEventListener("load",a,w);else if(document.attachEvent){document.attachEvent("onreadystatechange",g);window.attachEvent("onload",a);var d=w;try{d=window.frameElement==t}catch(n){}document.documentElement.doScroll&&d&&b()}})();return function(b){a.w?b():d.push(b)}}()).w=w;mt.event={};mt.event.c=function(a,b,f){a.attachEvent?a.attachEvent("on"+b,function(b){f.call(a,b)}):a.addEventListener&&a.addEventListener(b,f,w)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=w};mt.j={};mt.j.parse=function(){return(new Function('return (" + source + ")'))()};
mt.j.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=f[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var f={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);case "boolean":return String(d);
default:if(d===t)return"null";if(d instanceof Array){var f=["["],k=d.length,n,e,l;for(e=0;e<k;e++)switch(l=d[e],typeof l){case "undefined":case "function":case "unknown":break;default:n&&f.push(","),f.push(mt.j.stringify(l)),n=1}f.push("]");return f.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+b(d.getMonth()+1)+"-"+b(d.getDate())+"T"+b(d.getHours())+":"+b(d.getMinutes())+":"+b(d.getSeconds())+'"';n=["{"];e=mt.j.stringify;for(k in d)if(Object.prototype.hasOwnProperty.call(d,k))switch(l=
d[k],typeof l){case "undefined":case "unknown":case "function":break;default:f&&n.push(","),f=1,n.push(e(k)+":"+e(l))}n.push("}");return n.join("")}}}();mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.Oa=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.Qa=function(a){return mt.lang.d(a,"String")};mt.localStorage={};
mt.localStorage.A=function(){if(!mt.localStorage.f)try{mt.localStorage.f=document.createElement("input"),mt.localStorage.f.type="hidden",mt.localStorage.f.style.display="none",mt.localStorage.f.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.f)}catch(a){return w}return s};
mt.localStorage.set=function(a,b,f){var d=new Date;d.setTime(d.getTime()+f||31536E6);try{window.localStorage?(b=d.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.A()&&(mt.localStorage.f.expires=d.toUTCString(),mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.setAttribute(a,b),mt.localStorage.f.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),f=a.substring(0,b)-0;if(f&&f>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.A())try{return mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.getAttribute(a)}catch(d){}return t};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.A())try{mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.removeAttribute(a),mt.localStorage.f.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){if(window.sessionStorage)try{window.sessionStorage.setItem(a,b)}catch(f){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):t};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.V={};mt.V.log=function(a,b){var f=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=f;f.onload=f.onerror=f.onabort=function(){f.onload=f.onerror=f.onabort=t;f=window[d]=t;b&&b(a)};f.src=a};mt.N={};
mt.N.na=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(f){}return a};
mt.N.Ja=function(a,b,f,d,g){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+f+'" height="'+d+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(g||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+f+'" height="'+d+'" src="'+b+'" flashvars="'+(g||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.i=function(a,b){var f=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return f?f[3]:t};mt.url.Ma=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:t};mt.url.ka=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):t};mt.url.P=function(a){return(a=mt.url.ka(a))?a.replace(/:\d+$/,""):a};mt.url.La=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):t};
(function(){function a(){for(var a=w,f=document.getElementsByTagName("script"),d=f.length,d=100<d?100:d,g=0;g<d;g++){var k=f[g].src;if(k&&0===k.indexOf("https://hm.baidu.com/h")){a=s;break}}return a}return h.ga=a})();var A=h.ga;
h.B={Na:"http://tongji.baidu.com/hm-web/welcome/ico",T:"hm.baidu.com/hm.gif",Z:"baidu.com",ra:"hmmd",sa:"hmpl",qa:"hmkw",oa:"hmci",ta:"hmsr",pa:"hmcu",m:0,k:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",J:A()||"https:"===document.location.protocol?"https:":"http:",Pa:0,Ga:6E5,Ha:10,Ia:1024,Fa:1,K:2147483647,W:"cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api u tt".split(" ")};
(function(){var a={l:{},c:function(a,f){this.l[a]=this.l[a]||[];this.l[a].push(f)},r:function(a,f){this.l[a]=this.l[a]||[];for(var d=this.l[a].length,g=0;g<d;g++)this.l[a][g](f)}};return h.D=a})();
(function(){function a(a,d){var g=document.createElement("script");g.charset="utf-8";b.d(d,"Function")&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=t,d()}:g.onload=function(){d()});g.src=a;var k=document.getElementsByTagName("script")[0];k.parentNode.insertBefore(g,k)}var b=mt.lang;return h.load=a})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.C.la()+","+h.C.ia();h.b.g()}}function b(){clearTimeout(y);var a;x&&(a="visible"==document[x]);z&&(a=!document[z]);e="undefined"==typeof a?s:a;if((!n||!l)&&e&&m)u=s,p=+new Date;else if(n&&l&&(!e||!m))u=w,q+=+new Date-p;n=e;l=m;y=setTimeout(b,100)}function f(a){var p=document,l="";if(a in p)l=a;else for(var b=["webkit","ms","moz","o"],q=0;q<b.length;q++){var m=b[q]+a.charAt(0).toUpperCase()+a.slice(1);if(m in p){l=
m;break}}return l}function d(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))m="focus"==a.type||"focusin"==a.type?s:w,b()}var g=mt.event,k=h.D,n=s,e=s,l=s,m=s,v=+new Date,p=v,q=0,u=s,x=f("visibilityState"),z=f("hidden"),y;b();(function(){var a=x.replace(/[vV]isibilityState/,"visibilitychange");g.c(document,a,b);g.c(window,"pageshow",b);g.c(window,"pagehide",b);"object"==typeof document.onfocusin?(g.c(document,"focusin",d),g.c(document,"focusout",d)):(g.c(window,"focus",d),
g.c(window,"blur",d))})();h.C={la:function(){return+new Date-v},ia:function(){return u?+new Date-p+q:q}};k.c("pv-b",function(){g.c(window,"unload",a())});return h.C})();
(function(){var a=mt.lang,b=h.B,f=h.load,d={va:function(d){if((window._dxt===r||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var k=h.b.G();f([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(k)].join(""),d)}},Ea:function(b){if(a.d(b,"String")||a.d(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.ba=d})();
(function(){function a(l){for(var b in l)if({}.hasOwnProperty.call(l,b)){var d=l[b];f.d(d,"Object")||f.d(d,"Array")?a(d):l[b]=String(d)}}function b(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var f=mt.lang,d=mt.j,g=h.B,k=h.D,n=h.ba,e={p:[],z:0,R:w,init:function(){e.e=0;k.c("pv-b",function(){e.ca();e.ea()});k.c("pv-d",e.fa);k.c("stag-b",function(){h.b.a.api=e.e||e.z?e.e+"_"+e.z:""});k.c("stag-d",function(){h.b.a.api=0;e.e=0;e.z=0})},ca:function(){var a=window._hmt||
[];if(!a||f.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,l=0;l<arguments.length;l++){var p=arguments[l];f.d(p,"Array")&&(a.cmd[a.id].push(p),"_setAccount"===p[0]&&(1<p.length&&/^[0-9a-f]{32}$/.test(p[1]))&&(p=p[1],a.id=p,a.cmd[p]=a.cmd[p]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},ea:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],d=/^_track(Event|MobConv|Order|RTEvent)$/,p=0,q=b.length;p<q;p++){var f=b[p];
d.test(f[0])?e.p.push(f):e.L(f)}a.cmd[c.id]={push:e.L}},fa:function(){if(0<e.p.length)for(var a=0,b=e.p.length;a<b;a++)e.L(e.p[a]);e.p=t},L:function(a){var b=a[0];if(e.hasOwnProperty(b)&&f.d(e[b],"Function"))e[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(e.e|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],w===a||s===a))e.e|=2,h.b.Q=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){e.e|=4;h.b.a.et=0;h.b.a.ep="";h.b.H?(h.b.a.nv=0,h.b.a.st=
4):h.b.H=s;var b=h.b.a.u,d=h.b.a.su;h.b.a.u=g.protocol+"//"+document.location.host+a[1];e.R||(h.b.a.su=document.location.href);h.b.g();h.b.a.u=b;h.b.a.su=d}},_trackEvent:function(a){2<a.length&&(e.e|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=b(a[1])+"*"+b(a[2])+(a[3]?"*"+b(a[3]):"")+(a[4]?"*"+b(a[4]):""),h.b.g())},_setCustomVar:function(a){if(!(4>a.length)){var d=a[1],f=a[4]||3;if(0<d&&6>d&&0<f&&4>f){e.z++;for(var p=(h.b.a.cv||"*").split("!"),q=p.length;q<d-1;q++)p.push("*");p[d-1]=f+"*"+b(a[2])+
"*"+b(a[3]);h.b.a.cv=p.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.xa("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"===a[1].charAt(0)?g.protocol+"//"+window.location.host+a[1]:a[1],e.R=s)},_trackOrder:function(b){b=b[1];f.d(b,"Object")&&(a(b),e.e|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=d.stringify(b),h.b.g())},_trackMobConv:function(a){if(a={webim:1,
tel:2,map:3,sms:4,callback:5,share:6}[a[1]])e.e|=32,h.b.a.et=93,h.b.a.ep=a,h.b.g()},_trackRTPageview:function(b){b=b[1];f.d(b,"Object")&&(a(b),b=d.stringify(b),512>=encodeURIComponent(b).length&&(e.e|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(f.d(b,"Object")){a(b);b=encodeURIComponent(d.stringify(b));var m=function(a){var b=h.b.a.rt;e.e|=128;h.b.a.et=90;h.b.a.rt=a;h.b.g();h.b.a.rt=b},k=b.length;if(900>=k)m.call(this,b);else for(var k=Math.ceil(k/900),p="block|"+Math.round(Math.random()*
g.K).toString(16)+"|"+k+"|",q=[],u=0;u<k;u++)q.push(u),q.push(b.substring(900*u,900*u+900)),m.call(this,p+q.join("|")),q=[]}},_setUserId:function(a){a=a[1];n.va();n.Ea(a)}};e.init();h.$=e;return h.$})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=s,this.a={},this.Q=s,this.H=w,this.init())}var b=mt.url,f=mt.V,d=mt.N,g=mt.lang,k=mt.cookie,n=mt.h,e=mt.localStorage,l=mt.sessionStorage,m=h.B,v=h.D;a.prototype={I:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},S:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},s:function(a){for(var d=0;d<c.dm.length;d++)if(-1<
c.dm[d].indexOf("/")){if(this.S(a,c.dm[d]))return s}else{var f=b.P(a);if(f&&this.I(f,c.dm[d]))return s}return w},G:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.I(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},O:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.S(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},ma:function(){if(!document.referrer)return m.k-m.m>c.vdur?1:4;var a=
w;this.s(document.referrer)&&this.s(document.location.href)?a=s:(a=b.P(document.referrer),a=this.I(a||"",document.location.hostname));return a?m.k-m.m>c.vdur?1:4:3},getData:function(a){try{return k.get(a)||l.get(a)||e.get(a)}catch(b){}},setData:function(a,b,d){try{k.set(a,b,{domain:this.G(),path:this.O(),F:d}),d?e.set(a,b,d):l.set(a,b)}catch(f){}},xa:function(a){try{k.set(a,"",{domain:this.G(),path:this.O(),F:-1}),l.remove(a),e.remove(a)}catch(b){}},Ca:function(){var a,b,d,f,e;m.m=this.getData("Hm_lpvt_"+
c.id)||0;13===m.m.length&&(m.m=Math.round(m.m/1E3));b=this.ma();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){f=d.split(",");for(e=f.length-1;0<=e;e--)13===f[e].length&&(f[e]=""+Math.round(f[e]/1E3));for(;2592E3<m.k-f[0];)f.shift();e=4>f.length?2:3;for(1===a&&f.push(m.k);4<f.length;)f.shift();d=f.join(",");f=f[f.length-1]}else d=m.k,f="",e=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,m.k);d=m.k===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.s(document.location.href)&&
(""===document.referrer||this.s(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=f;this.a.lv=e},Ba:function(){for(var a=[],b=this.a.et,d=0,f=m.W.length;d<f;d++){var e=m.W[d],g=this.a[e];"undefined"!==typeof g&&""!==g&&("tt"!==e||"tt"===e&&0===b)&&a.push(e+"="+encodeURIComponent(g))}this.a.rt&&(0===b?a.push("rt="+encodeURIComponent(this.a.rt)):90===b&&a.push("rt="+this.a.rt));return a.join("&")},Da:function(){this.Ca();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=n.ya;
this.a.cl=n.colorDepth+"-bit";this.a.ln=n.language;this.a.ja=n.javaEnabled?1:0;this.a.ck=n.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=d.na();this.a.v="1.1.31";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";var a=document.location.href;this.a.cm=b.i(a,m.ra)||"";this.a.cp=b.i(a,m.sa)||"";this.a.cw=b.i(a,m.qa)||"";this.a.ci=b.i(a,m.oa)||"";this.a.cf=b.i(a,m.ta)||"";this.a.cu=b.i(a,m.pa)||""},init:function(){try{this.Da(),0===this.a.nv?
this.Aa():this.M(".*"),h.b=this,this.aa(),v.r("pv-b"),this.za()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));f.log(m.J+"//"+m.T+"?"+b.join("&"))}},za:function(){function a(){v.r("pv-d")}this.Q?(this.H=s,this.a.et=0,this.a.ep="",this.g(a)):a()},g:function(a){var b=this;b.a.rnd=Math.round(Math.random()*m.K);v.r("stag-b");var d=m.J+"//"+m.T+"?"+b.Ba();v.r("stag-d");b.Y(d);f.log(d,
function(d){b.M(d);g.d(a,"Function")&&a.call(b)})},aa:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),f=-1<document.referrer.indexOf(m.Z),e=b.i(a,"jn"),g=/^heatlink$|^select$/.test(e);a&&(d.test(a)&&f&&g)&&(this.a.rnd=Math.round(Math.random()*m.K),a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",m.protocol+"//"+c.js+e+".js?"+this.a.rnd),e=document.getElementsByTagName("script")[0],e.parentNode.insertBefore(a,
e))},Y:function(a){var b=l.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");l.set("Hm_unsent_"+c.id,b)},M:function(a){var b=l.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,""))?l.set("Hm_unsent_"+c.id,b):l.remove("Hm_unsent_"+c.id))},Aa:function(){var a=this,b=
l.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),d=function(b){f.log(m.J+"//"+decodeURIComponent(b),function(b){a.M(b)})},e=0,g=b.length;e<g;e++)d(b[e])}};return new a})();
(function(){var a=mt.o,b=mt.event,f=mt.url,d=mt.j;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var g=+new Date,k=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},n=t;a.U(function(){n=+new Date});var e=function(){var a,b,e;e=k("navigation");b=k("request");e={netAll:b.start-e.start,netDns:k("domainLookup").value,netTcp:k("connect").value,srv:k("response").start-b.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:k("loadEvent").end-e.start};a=document.referrer;var l=a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[],u=t;b=t;if("www.baidu.com"===l[2]||"m.baidu.com"===l[2])u=f.i(a,"qid"),b=f.i(a,"click_t");a=u;e.qid=a!=t?a:"";b!=t?(e.bdDom=n?n-b:0,e.bdRun=g-b,e.bdDef=k("navigation").start-b):(e.bdDom=0,e.bdRun=0,e.bdDef=0);h.b.a.et=87;h.b.a.ep=d.stringify(e);h.b.g()};b.c(window,"load",function(){setTimeout(e,500)})}}catch(l){}})();
(function(){var a=mt.h,b=mt.lang,f=mt.event,d=mt.j;if("undefined"!==typeof h.b&&(c.med||(!a.wa||7<a.ua)&&c.cvcc)){var g,k,n,e,l=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},m=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===w)return w},v=function(a,f){var e={};e.n=g;e.t="clk";e.v=a;if(f){var k=f.getAttribute("href"),l=f.getAttribute("onclick")?""+f.getAttribute("onclick"):t,m=f.getAttribute("id")||"";n.test(k)?(e.sn="mediate",
e.snv=k):b.d(l,"String")&&n.test(l)&&(e.sn="wrap",e.snv=l);e.id=m}h.b.a.et=86;h.b.a.ep=d.stringify(e);h.b.g();for(e=+new Date;400>=+new Date-e;);};if(c.med)k="/zoosnet",g="swt",n=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,e={click:function(){for(var a=[],b=l(document.getElementsByTagName("a")),b=[].concat.apply(b,l(document.getElementsByTagName("area"))),b=[].concat.apply(b,l(document.getElementsByTagName("img"))),d,f,e=0,g=b.length;e<g;e++)d=b[e],f=d.getAttribute("onclick"),
d=d.getAttribute("href"),(n.test(f)||n.test(d))&&a.push(b[e]);return a}};else if(c.cvcc){k="/other-comm";g="other";n=c.cvcc.q||r;var p=c.cvcc.id||r;e={click:function(){for(var a=[],b=l(document.getElementsByTagName("a")),b=[].concat.apply(b,l(document.getElementsByTagName("area"))),b=[].concat.apply(b,l(document.getElementsByTagName("img"))),d,e,f,g=0,k=b.length;g<k;g++)d=b[g],n!==r?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),p?(d=d.getAttribute("id"),(n.test(e)||n.test(f)||p.test(d))&&
a.push(b[g])):(n.test(e)||n.test(f))&&a.push(b[g])):p!==r&&(d=d.getAttribute("id"),p.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof e&&"undefined"!==typeof n){var q;k+=/\/$/.test(k)?"":"/";var u=function(a,d){if(q===d)return v(k+a,d),w;if(b.d(d,"Array")||b.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(q===d[e])return v(k+a+"/"+(e+1),d[e]),w};f.c(document,"mousedown",function(a){a=a||window.event;q=a.target||a.srcElement;var d={};for(m(e,function(a,e){d[a]=b.d(e,"Function")?e():document.getElementById(e)});q&&
q!==document&&m(d,u)!==w;)q=q.parentNode})}}})();(function(){var a=mt.o,b=mt.lang,f=mt.event,d=mt.j;if("undefined"!==typeof h.b&&b.d(c.cvcf,"Array")&&0<c.cvcf.length){var g={X:function(){for(var b=c.cvcf.length,d,e=0;e<b;e++)(d=a.ha(decodeURIComponent(c.cvcf[e])))&&f.c(d,"click",g.da())},da:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=d.stringify(a);h.b.g()}}};a.U(function(){g.X()})}})();
(function(){var a=mt.event,b=mt.j;if(c.med&&"undefined"!==typeof h.b){var f=+new Date,d={n:"anti",sb:0,kb:0,clk:0},g=function(){h.b.a.et=86;h.b.a.ep=b.stringify(d);h.b.g()};a.c(document,"click",function(){d.clk++});a.c(document,"keyup",function(){d.kb=1});a.c(window,"scroll",function(){d.sb++});a.c(window,"unload",function(){d.t=+new Date-f;g()});a.c(window,"load",function(){setTimeout(g,5E3)})}})();})();
