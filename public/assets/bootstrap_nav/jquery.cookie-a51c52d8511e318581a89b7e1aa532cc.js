/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return e}function n(e){return decodeURIComponent(e.replace(o," "))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return r.json?JSON.parse(e):e}catch(t){}}var o=/\+/g,r=e.cookie=function(o,a,s){if(void 0!==a){if(s=e.extend({},r.defaults,s),"number"==typeof s.expires){var l=s.expires,c=s.expires=new Date;c.setDate(c.getDate()+l)}return a=r.json?JSON.stringify(a):String(a),document.cookie=[r.raw?o:encodeURIComponent(o),"=",r.raw?a:encodeURIComponent(a),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var d=r.raw?t:n,u=document.cookie.split("; "),p=o?void 0:{},f=0,h=u.length;h>f;f++){var m=u[f].split("="),g=d(m.shift()),v=d(m.join("="));if(o&&o===g){p=i(v);break}o||(p[g]=i(v))}return p};r.defaults={},e.removeCookie=function(t,n){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},n,{expires:-1})),!0):!1}});