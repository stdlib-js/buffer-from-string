"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(p){throw r=0,p}}};var a=i(function(V,u){"use strict";var h=require("@stdlib/assert-is-function"),b=require("@stdlib/buffer-ctor"),S=h(b.from);u.exports=S});var o=i(function(B,m){"use strict";var n=require("@stdlib/assert-is-string").isPrimitive,s=require("@stdlib/string-format"),f=require("@stdlib/buffer-ctor");function c(e,r){if(!n(e))throw new TypeError(s("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1){if(!n(r))throw new TypeError(s("invalid argument. Second argument must be a string. Value: `%s`.",r));return f.from(e,r)}return f.from(e,"utf8")}m.exports=c});var w=i(function(d,q){"use strict";var v=require("@stdlib/assert-is-string").isPrimitive,g=require("@stdlib/string-format"),l=require("@stdlib/buffer-ctor");function y(e,r){if(!v(e))throw new TypeError(g("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1){if(!v(r))throw new TypeError(g("invalid argument. Second argument must be a string. Value: `%s`.",r));return new l(e,r)}return new l(e,"utf8")}q.exports=y});var x=a(),E=o(),F=w(),t;x?t=E:t=F;module.exports=t;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
