"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=i(function(T,u){"use strict";var p=require("@stdlib/assert-is-function"),h=require("@stdlib/buffer-ctor"),b=p(h.from);u.exports=b});var o=i(function(V,m){"use strict";var n=require("@stdlib/assert-is-string").isPrimitive,s=require("@stdlib/string-format"),f=require("@stdlib/buffer-ctor");function S(e,r){if(!n(e))throw new TypeError(s("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1){if(!n(r))throw new TypeError(s("invalid argument. Second argument must be a string. Value: `%s`.",r));return f.from(e,r)}return f.from(e,"utf8")}m.exports=S});var w=i(function(B,q){"use strict";var v=require("@stdlib/assert-is-string").isPrimitive,g=require("@stdlib/string-format"),l=require("@stdlib/buffer-ctor");function c(e,r){if(!v(e))throw new TypeError(g("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1){if(!v(r))throw new TypeError(g("invalid argument. Second argument must be a string. Value: `%s`.",r));return new l(e,r)}return new l(e,"utf8")}q.exports=c});var y=a(),x=o(),E=w(),t;y?t=x:t=E;module.exports=t;
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
