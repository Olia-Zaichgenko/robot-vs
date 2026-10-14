import { r as __toESM, t as __commonJSMin } from "./rolldown-runtime-DC62tzP2.js";
//#region node_modules/react/cjs/react-jsx-runtime.production.js
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region \0virtual:mf:__mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__prebuild__react_mf_1_jsx_mf_2_runtime__prebuild__.js
var import_jsx_runtime = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production();
})))());
var __mfPrebuildExports = import_jsx_runtime.default ?? import_jsx_runtime;
var Fragment = __mfPrebuildExports.Fragment;
var jsx = __mfPrebuildExports.jsx;
var jsxs = __mfPrebuildExports.jsxs;
//#endregion
export { Fragment, __mfPrebuildExports as default, jsx, jsxs };
