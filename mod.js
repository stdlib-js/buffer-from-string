// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,s=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,h,c,l;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((h="value"in e)&&(a.call(t,r)||s.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),c="get"in e,l="set"in e,h&&(c||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return c&&u&&u.call(t,r,e.get),l&&f&&f.call(t,r,e.set),t};var h=e;function c(t,r,e){h(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function l(t){return"boolean"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return p&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var d,v="function"==typeof Symbol?Symbol.toStringTag:"";d=g()?function(t){var r,e,n,o,i;if(null==t)return y.call(t);e=t[v],i=v,r=null!=(o=t)&&w.call(o,i);try{t[v]=void 0}catch(r){return y.call(t)}return n=y.call(t),r?t[v]=e:delete t[v],n}:function(t){return y.call(t)};var b=d,E=Boolean.prototype.toString;var _=g();function m(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return E.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===b(t)))}function A(t){return l(t)||m(t)}function R(){return new Function("return this;")()}c(A,"isPrimitive",l),c(A,"isObject",m);var P="object"==typeof self?self:null,T="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},B="object"==typeof S?S:null;var U=function(t){if(arguments.length){if(!l(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return R()}if(P)return P;if(T)return T;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}(),O=U.document&&U.document.childNodes,Y=Int8Array;function I(){return/^\s*function\s*([^(]*)/i}var j,C=/^\s*function\s*([^(]*)/i;c(I,"REGEXP",C),j=Array.isArray?Array.isArray:function(t){return"[object Array]"===b(t)};var L=j;function M(t){return null!==t&&"object"==typeof t}var D=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!L(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(M);function x(t){return M(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))}function k(t){var r,e,n;if(("Object"===(e=b(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=C.exec(n.toString()))return r[1]}return x(t)?"Buffer":e}c(M,"isObjectLikeArray",D);var N="function"==typeof t||"object"==typeof Y||"function"==typeof O?function(t){return k(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?k(t).toLowerCase():r};var F=[],z=[],V="undefined"!=typeof Uint8Array?Uint8Array:Array,G=!1;function X(){G=!0;for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0,e=t.length;r<e;++r)F[r]=t[r],z[t.charCodeAt(r)]=r;z["-".charCodeAt(0)]=62,z["_".charCodeAt(0)]=63}function q(t,r,e){for(var n,o,i=[],u=r;u<e;u+=3)n=(t[u]<<16)+(t[u+1]<<8)+t[u+2],i.push(F[(o=n)>>18&63]+F[o>>12&63]+F[o>>6&63]+F[63&o]);return i.join("")}function J(t){var r;G||X();for(var e=t.length,n=e%3,o="",i=[],u=16383,f=0,a=e-n;f<a;f+=u)i.push(q(t,f,f+u>a?a:f+u));return 1===n?(r=t[e-1],o+=F[r>>2],o+=F[r<<4&63],o+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],o+=F[r>>10],o+=F[r>>4&63],o+=F[r<<2&63],o+="="),i.push(o),i.join("")}function Z(t,r,e,n,o){var i,u,f=8*o-n-1,a=(1<<f)-1,s=a>>1,h=-7,c=e?o-1:0,l=e?-1:1,p=t[r+c];for(c+=l,i=p&(1<<-h)-1,p>>=-h,h+=f;h>0;i=256*i+t[r+c],c+=l,h-=8);for(u=i&(1<<-h)-1,i>>=-h,h+=n;h>0;u=256*u+t[r+c],c+=l,h-=8);if(0===i)i=1-s;else{if(i===a)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),i-=s}return(p?-1:1)*u*Math.pow(2,i-n)}function H(t,r,e,n,o,i){var u,f,a,s=8*i-o-1,h=(1<<s)-1,c=h>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,g=n?1:-1,y=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(f=isNaN(r)?1:0,u=h):(u=Math.floor(Math.log(r)/Math.LN2),r*(a=Math.pow(2,-u))<1&&(u--,a*=2),(r+=u+c>=1?l/a:l*Math.pow(2,1-c))*a>=2&&(u++,a/=2),u+c>=h?(f=0,u=h):u+c>=1?(f=(r*a-1)*Math.pow(2,o),u+=c):(f=r*Math.pow(2,c-1)*Math.pow(2,o),u=0));o>=8;t[e+p]=255&f,p+=g,f/=256,o-=8);for(u=u<<o|f,s+=o;s>0;t[e+p]=255&u,p+=g,u/=256,s-=8);t[e+p-g]|=128*y}var K={}.toString,Q=Array.isArray||function(t){return"[object Array]"==K.call(t)};rt.TYPED_ARRAY_SUPPORT=void 0===S.TYPED_ARRAY_SUPPORT||S.TYPED_ARRAY_SUPPORT;var W=$();function $(){return rt.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function tt(t,r){if($()<r)throw new RangeError("Invalid typed array length");return rt.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=rt.prototype:(null===t&&(t=new rt(r)),t.length=r),t}function rt(t,r,e){if(!(rt.TYPED_ARRAY_SUPPORT||this instanceof rt))return new rt(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return ot(this,t)}return et(this,t,r,e)}function et(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);rt.TYPED_ARRAY_SUPPORT?(t=r).__proto__=rt.prototype:t=it(t,r);return t}(t,r,e,n):"string"==typeof r?function(t,r,e){"string"==typeof e&&""!==e||(e="utf8");if(!rt.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|at(r,e),o=(t=tt(t,n)).write(r,e);o!==n&&(t=t.slice(0,o));return t}(t,r,e):function(t,r){if(ft(r)){var e=0|ut(r.length);return 0===(t=tt(t,e)).length||r.copy(t,0,0,e),t}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?tt(t,0):it(t,r);if("Buffer"===r.type&&Q(r.data))return it(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function nt(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function ot(t,r){if(nt(r),t=tt(t,r<0?0:0|ut(r)),!rt.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function it(t,r){var e=r.length<0?0:0|ut(r.length);t=tt(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function ut(t){if(t>=$())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+$().toString(16)+" bytes");return 0|t}function ft(t){return!(null==t||!t._isBuffer)}function at(t,r){if(ft(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return Ct(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return Lt(t).length;default:if(n)return Ct(t).length;r=(""+r).toLowerCase(),n=!0}}function st(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return At(this,r,e);case"utf8":case"utf-8":return Et(this,r,e);case"ascii":return _t(this,r,e);case"latin1":case"binary":return mt(this,r,e);case"base64":return bt(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Rt(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function ht(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function ct(t,r,e,n,o){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=o?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(o)return-1;e=t.length-1}else if(e<0){if(!o)return-1;e=0}if("string"==typeof r&&(r=rt.from(r,n)),ft(r))return 0===r.length?-1:lt(t,r,e,n,o);if("number"==typeof r)return r&=255,rt.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):lt(t,[r],e,n,o);throw new TypeError("val must be string, number or Buffer")}function lt(t,r,e,n,o){var i,u=1,f=t.length,a=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;u=2,f/=2,a/=2,e/=2}function s(t,r){return 1===u?t[r]:t.readUInt16BE(r*u)}if(o){var h=-1;for(i=e;i<f;i++)if(s(t,i)===s(r,-1===h?0:i-h)){if(-1===h&&(h=i),i-h+1===a)return h*u}else-1!==h&&(i-=i-h),h=-1}else for(e+a>f&&(e=f-a),i=e;i>=0;i--){for(var c=!0,l=0;l<a;l++)if(s(t,i+l)!==s(r,l)){c=!1;break}if(c)return i}return-1}function pt(t,r,e,n){e=Number(e)||0;var o=t.length-e;n?(n=Number(n))>o&&(n=o):n=o;var i=r.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var u=0;u<n;++u){var f=parseInt(r.substr(2*u,2),16);if(isNaN(f))return u;t[e+u]=f}return u}function gt(t,r,e,n){return Mt(Ct(r,t.length-e),t,e,n)}function yt(t,r,e,n){return Mt(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function wt(t,r,e,n){return yt(t,r,e,n)}function dt(t,r,e,n){return Mt(Lt(r),t,e,n)}function vt(t,r,e,n){return Mt(function(t,r){for(var e,n,o,i=[],u=0;u<t.length&&!((r-=2)<0);++u)n=(e=t.charCodeAt(u))>>8,o=e%256,i.push(o),i.push(n);return i}(r,t.length-e),t,e,n)}function bt(t,r,e){return 0===r&&e===t.length?J(t):J(t.slice(r,e))}function Et(t,r,e){e=Math.min(t.length,e);for(var n=[],o=r;o<e;){var i,u,f,a,s=t[o],h=null,c=s>239?4:s>223?3:s>191?2:1;if(o+c<=e)switch(c){case 1:s<128&&(h=s);break;case 2:128==(192&(i=t[o+1]))&&(a=(31&s)<<6|63&i)>127&&(h=a);break;case 3:i=t[o+1],u=t[o+2],128==(192&i)&&128==(192&u)&&(a=(15&s)<<12|(63&i)<<6|63&u)>2047&&(a<55296||a>57343)&&(h=a);break;case 4:i=t[o+1],u=t[o+2],f=t[o+3],128==(192&i)&&128==(192&u)&&128==(192&f)&&(a=(15&s)<<18|(63&i)<<12|(63&u)<<6|63&f)>65535&&a<1114112&&(h=a)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),o+=c}return function(t){var r=t.length;if(r<=4096)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return e}(n)}rt.poolSize=8192,rt._augment=function(t){return t.__proto__=rt.prototype,t},rt.from=function(t,r,e){return et(null,t,r,e)},rt.TYPED_ARRAY_SUPPORT&&(rt.prototype.__proto__=Uint8Array.prototype,rt.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&rt[Symbol.species]),rt.alloc=function(t,r,e){return function(t,r,e,n){return nt(r),r<=0?tt(t,r):void 0!==e?"string"==typeof n?tt(t,r).fill(e,n):tt(t,r).fill(e):tt(t,r)}(null,t,r,e)},rt.allocUnsafe=function(t){return ot(null,t)},rt.allocUnsafeSlow=function(t){return ot(null,t)},rt.isBuffer=Dt,rt.compare=function(t,r){if(!ft(t)||!ft(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,o=0,i=Math.min(e,n);o<i;++o)if(t[o]!==r[o]){e=t[o],n=r[o];break}return e<n?-1:n<e?1:0},rt.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},rt.concat=function(t,r){if(!Q(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return rt.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=rt.allocUnsafe(r),o=0;for(e=0;e<t.length;++e){var i=t[e];if(!ft(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(n,o),o+=i.length}return n},rt.byteLength=at,rt.prototype._isBuffer=!0,rt.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)ht(this,r,r+1);return this},rt.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)ht(this,r,r+3),ht(this,r+1,r+2);return this},rt.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)ht(this,r,r+7),ht(this,r+1,r+6),ht(this,r+2,r+5),ht(this,r+3,r+4);return this},rt.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?Et(this,0,t):st.apply(this,arguments)},rt.prototype.equals=function(t){if(!ft(t))throw new TypeError("Argument must be a Buffer");return this===t||0===rt.compare(this,t)},rt.prototype.inspect=function(){var t="";return this.length>0&&(t=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(t+=" ... ")),"<Buffer "+t+">"},rt.prototype.compare=function(t,r,e,n,o){if(!ft(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),r<0||e>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&r>=e)return 0;if(n>=o)return-1;if(r>=e)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(n>>>=0),u=(e>>>=0)-(r>>>=0),f=Math.min(i,u),a=this.slice(n,o),s=t.slice(r,e),h=0;h<f;++h)if(a[h]!==s[h]){i=a[h],u=s[h];break}return i<u?-1:u<i?1:0},rt.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},rt.prototype.indexOf=function(t,r,e){return ct(this,t,r,e,!0)},rt.prototype.lastIndexOf=function(t,r,e){return ct(this,t,r,e,!1)},rt.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var o=this.length-r;if((void 0===e||e>o)&&(e=o),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return pt(this,t,r,e);case"utf8":case"utf-8":return gt(this,t,r,e);case"ascii":return yt(this,t,r,e);case"latin1":case"binary":return wt(this,t,r,e);case"base64":return dt(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return vt(this,t,r,e);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},rt.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function _t(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(127&t[o]);return n}function mt(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]);return n}function At(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var o="",i=r;i<e;++i)o+=jt(t[i]);return o}function Rt(t,r,e){for(var n=t.slice(r,e),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function Pt(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function Tt(t,r,e,n,o,i){if(!ft(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<i)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function St(t,r,e,n){r<0&&(r=65535+r+1);for(var o=0,i=Math.min(t.length-e,2);o<i;++o)t[e+o]=(r&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function Bt(t,r,e,n){r<0&&(r=4294967295+r+1);for(var o=0,i=Math.min(t.length-e,4);o<i;++o)t[e+o]=r>>>8*(n?o:3-o)&255}function Ut(t,r,e,n,o,i){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function Ot(t,r,e,n,o){return o||Ut(t,0,e,4),H(t,r,e,n,23,4),e+4}function Yt(t,r,e,n,o){return o||Ut(t,0,e,8),H(t,r,e,n,52,8),e+8}rt.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),rt.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=rt.prototype;else{var o=r-t;e=new rt(o,void 0);for(var i=0;i<o;++i)e[i]=this[i+t]}return e},rt.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||Pt(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n},rt.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||Pt(t,r,this.length);for(var n=this[t+--r],o=1;r>0&&(o*=256);)n+=this[t+--r]*o;return n},rt.prototype.readUInt8=function(t,r){return r||Pt(t,1,this.length),this[t]},rt.prototype.readUInt16LE=function(t,r){return r||Pt(t,2,this.length),this[t]|this[t+1]<<8},rt.prototype.readUInt16BE=function(t,r){return r||Pt(t,2,this.length),this[t]<<8|this[t+1]},rt.prototype.readUInt32LE=function(t,r){return r||Pt(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},rt.prototype.readUInt32BE=function(t,r){return r||Pt(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},rt.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||Pt(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*r)),n},rt.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||Pt(t,r,this.length);for(var n=r,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*r)),i},rt.prototype.readInt8=function(t,r){return r||Pt(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},rt.prototype.readInt16LE=function(t,r){r||Pt(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},rt.prototype.readInt16BE=function(t,r){r||Pt(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},rt.prototype.readInt32LE=function(t,r){return r||Pt(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},rt.prototype.readInt32BE=function(t,r){return r||Pt(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},rt.prototype.readFloatLE=function(t,r){return r||Pt(t,4,this.length),Z(this,t,!0,23,4)},rt.prototype.readFloatBE=function(t,r){return r||Pt(t,4,this.length),Z(this,t,!1,23,4)},rt.prototype.readDoubleLE=function(t,r){return r||Pt(t,8,this.length),Z(this,t,!0,52,8)},rt.prototype.readDoubleBE=function(t,r){return r||Pt(t,8,this.length),Z(this,t,!1,52,8)},rt.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||Tt(this,t,r,e,Math.pow(2,8*e)-1,0);var o=1,i=0;for(this[r]=255&t;++i<e&&(o*=256);)this[r+i]=t/o&255;return r+e},rt.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||Tt(this,t,r,e,Math.pow(2,8*e)-1,0);var o=e-1,i=1;for(this[r+o]=255&t;--o>=0&&(i*=256);)this[r+o]=t/i&255;return r+e},rt.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||Tt(this,t,r,1,255,0),rt.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},rt.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||Tt(this,t,r,2,65535,0),rt.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):St(this,t,r,!0),r+2},rt.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||Tt(this,t,r,2,65535,0),rt.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):St(this,t,r,!1),r+2},rt.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||Tt(this,t,r,4,4294967295,0),rt.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):Bt(this,t,r,!0),r+4},rt.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||Tt(this,t,r,4,4294967295,0),rt.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):Bt(this,t,r,!1),r+4},rt.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var o=Math.pow(2,8*e-1);Tt(this,t,r,e,o-1,-o)}var i=0,u=1,f=0;for(this[r]=255&t;++i<e&&(u*=256);)t<0&&0===f&&0!==this[r+i-1]&&(f=1),this[r+i]=(t/u>>0)-f&255;return r+e},rt.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var o=Math.pow(2,8*e-1);Tt(this,t,r,e,o-1,-o)}var i=e-1,u=1,f=0;for(this[r+i]=255&t;--i>=0&&(u*=256);)t<0&&0===f&&0!==this[r+i+1]&&(f=1),this[r+i]=(t/u>>0)-f&255;return r+e},rt.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||Tt(this,t,r,1,127,-128),rt.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},rt.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||Tt(this,t,r,2,32767,-32768),rt.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):St(this,t,r,!0),r+2},rt.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||Tt(this,t,r,2,32767,-32768),rt.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):St(this,t,r,!1),r+2},rt.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||Tt(this,t,r,4,2147483647,-2147483648),rt.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):Bt(this,t,r,!0),r+4},rt.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||Tt(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),rt.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):Bt(this,t,r,!1),r+4},rt.prototype.writeFloatLE=function(t,r,e){return Ot(this,t,r,!0,e)},rt.prototype.writeFloatBE=function(t,r,e){return Ot(this,t,r,!1,e)},rt.prototype.writeDoubleLE=function(t,r,e){return Yt(this,t,r,!0,e)},rt.prototype.writeDoubleBE=function(t,r,e){return Yt(this,t,r,!1,e)},rt.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var o,i=n-e;if(this===t&&e<r&&r<n)for(o=i-1;o>=0;--o)t[o+r]=this[o+e];else if(i<1e3||!rt.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+r]=this[o+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+i),r);return i},rt.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!rt.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var i;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(i=r;i<e;++i)this[i]=t;else{var u=ft(t)?t:Ct(new rt(t,n).toString()),f=u.length;for(i=0;i<e-r;++i)this[i+r]=u[i%f]}return this};var It=/[^+\/0-9A-Za-z-_]/g;function jt(t){return t<16?"0"+t.toString(16):t.toString(16)}function Ct(t,r){var e;r=r||1/0;for(var n=t.length,o=null,i=[],u=0;u<n;++u){if((e=t.charCodeAt(u))>55295&&e<57344){if(!o){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}if(u+1===n){(r-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),o=e;continue}e=65536+(o-55296<<10|e-56320)}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return i}function Lt(t){return function(t){var r,e,n,o,i,u;G||X();var f=t.length;if(f%4>0)throw new Error("Invalid string. Length must be a multiple of 4");i="="===t[f-2]?2:"="===t[f-1]?1:0,u=new V(3*f/4-i),n=i>0?f-4:f;var a=0;for(r=0,e=0;r<n;r+=4,e+=3)o=z[t.charCodeAt(r)]<<18|z[t.charCodeAt(r+1)]<<12|z[t.charCodeAt(r+2)]<<6|z[t.charCodeAt(r+3)],u[a++]=o>>16&255,u[a++]=o>>8&255,u[a++]=255&o;return 2===i?(o=z[t.charCodeAt(r)]<<2|z[t.charCodeAt(r+1)]>>4,u[a++]=255&o):1===i&&(o=z[t.charCodeAt(r)]<<10|z[t.charCodeAt(r+1)]<<4|z[t.charCodeAt(r+2)]>>2,u[a++]=o>>8&255,u[a++]=255&o),u}(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(It,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Mt(t,r,e,n){for(var o=0;o<n&&!(o+e>=r.length||o>=t.length);++o)r[o+e]=t[o];return o}function Dt(t){return null!=t&&(!!t._isBuffer||xt(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&xt(t.slice(0,0))}(t))}function xt(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var kt=Object.freeze({__proto__:null,Buffer:rt,INSPECT_MAX_BYTES:50,SlowBuffer:function(t){return+t!=t&&(t=0),rt.alloc(+t)},isBuffer:Dt,kMaxLength:W}),Nt=rt;function Ft(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var zt,Vt=Ft(kt).Buffer;zt=function(){var t,r;if("function"!=typeof Nt)return!1;try{t=x(r="function"==typeof Nt.from?Nt.from([1,2,3,4]):new Nt([1,2,3,4]))&&1===r[0]&&2===r[1]&&3===r[2]&&4===r[3]}catch(r){t=!1}return t}()?Vt:function(){throw new Error("not implemented")};var Gt,Xt=zt,qt=(Gt=Xt.from,"function"===N(Gt));function Jt(t){return"string"==typeof t}var Zt=String.prototype.valueOf;var Ht=g();function Kt(t){return"object"==typeof t&&(t instanceof String||(Ht?function(t){try{return Zt.call(t),!0}catch(t){return!1}}(t):"[object String]"===b(t)))}function Qt(t){return Jt(t)||Kt(t)}function Wt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}c(Qt,"isPrimitive",Jt),c(Qt,"isObject",Kt);var $t=qt?function(t,r){if(!Jt(t))throw new TypeError(Wt("08B3R",t));if(arguments.length>1){if(!Jt(r))throw new TypeError(Wt("08B3L",r));return Xt.from(t,r)}return Xt.from(t,"utf8")}:function(t,r){if(!Jt(t))throw new TypeError(Wt("08B3R",t));if(arguments.length>1){if(!Jt(r))throw new TypeError(Wt("08B3L",r));return new Xt(t,r)}return new Xt(t,"utf8")};export{$t as default};
//# sourceMappingURL=mod.js.map
