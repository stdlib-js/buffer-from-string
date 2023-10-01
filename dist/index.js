"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=i(function(T,u){
var p=require('@stdlib/assert-is-function/dist'),h=require('@stdlib/buffer-ctor/dist'),b=p(h.from);u.exports=b
});var o=i(function(V,m){
var n=require('@stdlib/assert-is-string/dist').isPrimitive,s=require('@stdlib/error-tools-fmtprodmsg/dist'),f=require('@stdlib/buffer-ctor/dist');function S(e,r){if(!n(e))throw new TypeError(s('0GP3F',e));if(arguments.length>1){if(!n(r))throw new TypeError(s('0GP39',r));return f.from(e,r)}return f.from(e,"utf8")}m.exports=S
});var w=i(function(B,q){
var v=require('@stdlib/assert-is-string/dist').isPrimitive,g=require('@stdlib/error-tools-fmtprodmsg/dist'),l=require('@stdlib/buffer-ctor/dist');function c(e,r){if(!v(e))throw new TypeError(g('0GP3F',e));if(arguments.length>1){if(!v(r))throw new TypeError(g('0GP39',r));return new l(e,r)}return new l(e,"utf8")}q.exports=c
});var y=a(),x=o(),E=w(),t;y?t=x:t=E;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
