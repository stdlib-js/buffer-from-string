// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-ctor@v0.1.1-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";var s=r(t.from)?function(r,s){if(!e(r))throw new TypeError(n("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!e(s))throw new TypeError(n("invalid argument. Second argument must be a string. Value: `%s`.",s));return t.from(r,s)}return t.from(r,"utf8")}:function(r,s){if(!e(r))throw new TypeError(n("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!e(s))throw new TypeError(n("invalid argument. Second argument must be a string. Value: `%s`.",s));return new t(r,s)}return new t(r,"utf8")};export{s as default};
//# sourceMappingURL=index.mjs.map
