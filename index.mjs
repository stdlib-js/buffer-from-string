// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-ctor@v0.2.2-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";var n=r(t.from)?function(r,n){if(!e(r))throw new TypeError(s("0GP3F",r));if(arguments.length>1){if(!e(n))throw new TypeError(s("0GP39",n));return t.from(r,n)}return t.from(r,"utf8")}:function(r,n){if(!e(r))throw new TypeError(s("0GP3F",r));if(arguments.length>1){if(!e(n))throw new TypeError(s("0GP39",n));return new t(r,n)}return new t(r,"utf8")};export{n as default};
//# sourceMappingURL=index.mjs.map
