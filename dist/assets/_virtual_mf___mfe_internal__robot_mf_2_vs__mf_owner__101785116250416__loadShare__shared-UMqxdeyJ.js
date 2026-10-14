const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/react.production-C-yb4fm8.js","assets/react-dom-CTPEnXCr.js"])))=>i.map(i=>d[i]);
import { n as __exportAll } from "./rolldown-runtime-DC62tzP2.js";
import { t as __vitePreload } from "./vite-preload-helper-DETvjeQE.js";
//#region \0virtual:mf:__mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__mf_v__loadShareHelpers__mf_v__.js
var __mfReadSharedCache = (cache, descriptor) => {
	const value = cache[descriptor.canonical];
	if (value !== void 0) return value;
	const aliases = descriptor.aliases || [];
	for (const alias of aliases) {
		if (!Object.prototype.hasOwnProperty.call(cache, alias)) continue;
		const aliasValue = cache[alias];
		if (aliasValue !== void 0) {
			cache[descriptor.canonical] = aliasValue;
			return aliasValue;
		}
	}
};
var __mfSharedCacheListenersKey = Symbol.for("module-federation.shared-cache-listeners");
var __mfGetSharedCacheListeners = (cache) => {
	let listeners = cache[__mfSharedCacheListenersKey];
	if (listeners === void 0) {
		listeners = Object.create(null);
		Object.defineProperty(cache, __mfSharedCacheListenersKey, {
			value: listeners,
			enumerable: false,
			configurable: false,
			writable: false
		});
	}
	return listeners;
};
var __mfSubscribeSharedCache = (cache, descriptor, listener) => {
	const listeners = __mfGetSharedCacheListeners(cache);
	(listeners[descriptor.canonical] ||= /* @__PURE__ */ new Set()).add(listener);
};
var __mfSharedCacheOwnersKey = Symbol.for("module-federation.shared-cache-owners");
var __mfGetSharedCacheOwners = (cache) => {
	let owners = cache[__mfSharedCacheOwnersKey];
	if (owners === void 0) {
		owners = Object.create(null);
		Object.defineProperty(cache, __mfSharedCacheOwnersKey, {
			value: owners,
			enumerable: false,
			configurable: false,
			writable: false
		});
	}
	return owners;
};
var __mfGetSharedModuleIdentity = (value) => {
	const candidates = [value, value?.default];
	for (const candidate of candidates) {
		if (!candidate || typeof candidate !== "object") continue;
		for (const key of [
			"__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE",
			"__TEST_INTERNALS",
			"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"
		]) {
			const internals = candidate[key];
			if (internals && typeof internals === "object") return { internals };
		}
		if (typeof candidate.useState === "function") return { hook: candidate.useState };
	}
};
var __mfIsSameSharedModule = (current, next) => {
	if (current === next) return true;
	const currentIdentity = __mfGetSharedModuleIdentity(current);
	const nextIdentity = __mfGetSharedModuleIdentity(next);
	if (!currentIdentity || !nextIdentity) return false;
	const currentInternals = currentIdentity.internals;
	const nextInternals = nextIdentity.internals;
	if (currentInternals !== void 0 || nextInternals !== void 0) return currentInternals !== void 0 && currentInternals === nextInternals;
	return typeof currentIdentity.hook === "function" && currentIdentity.hook === nextIdentity.hook;
};
var __mfWriteSharedCache = (cache, descriptor, value, owner) => {
	const current = __mfReadSharedCache(cache, descriptor);
	if (current !== void 0 && __mfIsSameSharedModule(current, value)) return value;
	cache[descriptor.canonical] = value;
	const aliases = descriptor.aliases || [];
	for (const alias of aliases) Object.defineProperty(cache, alias, {
		value,
		enumerable: true,
		configurable: true,
		writable: true
	});
	const owners = cache[__mfSharedCacheOwnersKey];
	if (owner === void 0) {
		if (owners) delete owners[descriptor.canonical];
	} else __mfGetSharedCacheOwners(cache)[descriptor.canonical] = owner;
	const listeners = cache[__mfSharedCacheListenersKey]?.[descriptor.canonical];
	if (listeners) for (const listener of listeners) listener(value);
	return value;
};
//#endregion
//#region \0virtual:mf:__mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__loadShare__react__loadShare__.js
var _virtual_mf___mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__loadShare__react__loadShare___exports = /* @__PURE__ */ __exportAll({
	Activity: () => __mf_0$3,
	Children: () => __mf_1$3,
	Component: () => __mf_2$3,
	Fragment: () => __mf_3$1,
	Profiler: () => __mf_4$1,
	PureComponent: () => __mf_5$1,
	StrictMode: () => __mf_6$1,
	Suspense: () => __mf_7$1,
	ViewTransition: () => __mf_8$1,
	__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: () => __mf_9$1,
	__COMPILER_RUNTIME: () => __mf_10$1,
	__moduleExports: () => exportModule$3,
	addTransitionType: () => __mf_11$1,
	cache: () => __mf_12$1,
	cacheSignal: () => __mf_13$1,
	cloneElement: () => __mf_14$1,
	createContext: () => __mf_15,
	createElement: () => __mf_16,
	createRef: () => __mf_17,
	default: () => __mf_default$3,
	forwardRef: () => __mf_18,
	isValidElement: () => __mf_19,
	lazy: () => __mf_20,
	memo: () => __mf_21,
	startTransition: () => __mf_22,
	unstable_useCacheRefresh: () => __mf_23,
	use: () => __mf_24,
	useActionState: () => __mf_25,
	useCallback: () => __mf_26,
	useContext: () => __mf_27,
	useDebugValue: () => __mf_28,
	useDeferredValue: () => __mf_29,
	useEffect: () => __mf_30,
	useEffectEvent: () => __mf_31,
	useId: () => __mf_32,
	useImperativeHandle: () => __mf_33,
	useInsertionEffect: () => __mf_34,
	useLayoutEffect: () => __mf_35,
	useMemo: () => __mf_36,
	useOptimistic: () => __mf_37,
	useReducer: () => __mf_38,
	useRef: () => __mf_39,
	useState: () => __mf_40,
	useSyncExternalStore: () => __mf_41,
	useTransition: () => __mf_42,
	version: () => __mf_43
});
var __mfPromiseGlobalKey$3 = "__mf_init__virtual:mf:__mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__mf_v__runtimeInit__mf_v__.js__";
var __mfPromiseState$3 = globalThis[__mfPromiseGlobalKey$3];
if (!__mfPromiseState$3) {
	let initResolve, initReject;
	const initPromise = new Promise((re, rj) => {
		initResolve = re;
		initReject = rj;
	});
	__mfPromiseState$3 = globalThis[__mfPromiseGlobalKey$3] = {
		initPromise,
		initResolve,
		initReject
	};
}
var initPromise$3 = __mfPromiseState$3.initPromise;
var __mfCacheGlobalKey$3 = "__mf_module_cache__";
globalThis[__mfCacheGlobalKey$3] ||= {
	share: {},
	remote: {}
};
globalThis[__mfCacheGlobalKey$3].share ||= {};
globalThis[__mfCacheGlobalKey$3].remote ||= {};
var __mfModuleCache$3 = globalThis[__mfCacheGlobalKey$3];
var __mfTrackPendingShareLoad$3 = (promise) => {
	const pendingShareLoads = __mfModuleCache$3.pendingShareLoads ||= [];
	pendingShareLoads.push(promise);
	const cleanup = () => {
		const index = pendingShareLoads.indexOf(promise);
		if (index !== -1) pendingShareLoads.splice(index, 1);
	};
	promise.then(cleanup, cleanup);
	return promise;
};
for (const __mfShareKey of Object.keys(__mfModuleCache$3.share)) if (__mfShareKey.startsWith("default:")) {
	const __mfLegacyShareKey = __mfShareKey.slice(8);
	if (__mfModuleCache$3.share[__mfLegacyShareKey] === void 0) __mfModuleCache$3.share[__mfLegacyShareKey] = __mfModuleCache$3.share[__mfShareKey];
} else if (!__mfShareKey.includes(":")) {
	const __mfDefaultShareKey = "default:" + __mfShareKey;
	if (__mfModuleCache$3.share[__mfDefaultShareKey] === void 0) __mfModuleCache$3.share[__mfDefaultShareKey] = __mfModuleCache$3.share[__mfShareKey];
}
var __mfNormalizeShareModule$3 = (mod) => {
	const normalized = (() => {
		let current = mod;
		for (let i = 0; i < 5; i++) {
			const defaultExport = current?.default;
			if (!defaultExport || typeof defaultExport !== "object") break;
			const namedValues = Object.keys(current).filter((key) => key !== "default").map((key) => current[key]);
			if (namedValues.length > 0 && namedValues.some((value) => value !== void 0)) break;
			current = defaultExport;
		}
		return current;
	})();
	return normalized && Object.getPrototypeOf(normalized) === null ? Object.assign({}, normalized) : normalized;
};
var __mf_default$3;
var __mf_0$3;
var __mf_1$3;
var __mf_2$3;
var __mf_3$1;
var __mf_4$1;
var __mf_5$1;
var __mf_6$1;
var __mf_7$1;
var __mf_8$1;
var __mf_9$1;
var __mf_10$1;
var __mf_11$1;
var __mf_12$1;
var __mf_13$1;
var __mf_14$1;
var __mf_15;
var __mf_16;
var __mf_17;
var __mf_18;
var __mf_19;
var __mf_20;
var __mf_21;
var __mf_22;
var __mf_23;
var __mf_24;
var __mf_25;
var __mf_26;
var __mf_27;
var __mf_28;
var __mf_29;
var __mf_30;
var __mf_31;
var __mf_32;
var __mf_33;
var __mf_34;
var __mf_35;
var __mf_36;
var __mf_37;
var __mf_38;
var __mf_39;
var __mf_40;
var __mf_41;
var __mf_42;
var __mf_43;
var __mfApplyLazyShareExports$3 = (mod) => {
	exportModule$3 = mod;
	__mf_0$3 = mod["Activity"];
	__mf_1$3 = mod["Children"];
	__mf_2$3 = mod["Component"];
	__mf_3$1 = mod["Fragment"];
	__mf_4$1 = mod["Profiler"];
	__mf_5$1 = mod["PureComponent"];
	__mf_6$1 = mod["StrictMode"];
	__mf_7$1 = mod["Suspense"];
	__mf_8$1 = mod["ViewTransition"];
	__mf_9$1 = mod["__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE"];
	__mf_10$1 = mod["__COMPILER_RUNTIME"];
	__mf_11$1 = mod["addTransitionType"];
	__mf_12$1 = mod["cache"];
	__mf_13$1 = mod["cacheSignal"];
	__mf_14$1 = mod["cloneElement"];
	__mf_15 = mod["createContext"];
	__mf_16 = mod["createElement"];
	__mf_17 = mod["createRef"];
	__mf_18 = mod["forwardRef"];
	__mf_19 = mod["isValidElement"];
	__mf_20 = mod["lazy"];
	__mf_21 = mod["memo"];
	__mf_22 = mod["startTransition"];
	__mf_23 = mod["unstable_useCacheRefresh"];
	__mf_24 = mod["use"];
	__mf_25 = mod["useActionState"];
	__mf_26 = mod["useCallback"];
	__mf_27 = mod["useContext"];
	__mf_28 = mod["useDebugValue"];
	__mf_29 = mod["useDeferredValue"];
	__mf_30 = mod["useEffect"];
	__mf_31 = mod["useEffectEvent"];
	__mf_32 = mod["useId"];
	__mf_33 = mod["useImperativeHandle"];
	__mf_34 = mod["useInsertionEffect"];
	__mf_35 = mod["useLayoutEffect"];
	__mf_36 = mod["useMemo"];
	__mf_37 = mod["useOptimistic"];
	__mf_38 = mod["useReducer"];
	__mf_39 = mod["useRef"];
	__mf_40 = mod["useState"];
	__mf_41 = mod["useSyncExternalStore"];
	__mf_42 = mod["useTransition"];
	__mf_43 = mod["version"];
	__mf_default$3 = mod.default ?? mod;
};
__mfSubscribeSharedCache(__mfModuleCache$3.share, {
	"canonical": "default:react",
	"aliases": ["react"]
}, __mfApplyLazyShareExports$3);
var exportModule$3 = __mfReadSharedCache(__mfModuleCache$3.share, {
	"canonical": "default:react",
	"aliases": ["react"]
});
if (exportModule$3 === void 0) __mfTrackPendingShareLoad$3(initPromise$3.then(() => {
	exportModule$3 = __mfReadSharedCache(__mfModuleCache$3.share, {
		"canonical": "default:react",
		"aliases": ["react"]
	});
	if (exportModule$3 !== void 0) {
		__mfApplyLazyShareExports$3(exportModule$3);
		return;
	}
	return __vitePreload(() => import("./_virtual_mf___mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__prebuild__react__prebuild__-Dq_5qiv3.js").then((mod) => {
		exportModule$3 = __mfNormalizeShareModule$3(mod);
		__mfWriteSharedCache(__mfModuleCache$3.share, {
			"canonical": "default:react",
			"aliases": ["react"]
		}, exportModule$3, "robot-vs");
	}), __vite__mapDeps([0]));
}));
else __mfApplyLazyShareExports$3(exportModule$3);
//#endregion
//#region \0virtual:mf:__mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__loadShare__react_mf_2_dom_mf_1_client__loadShare__.js
var __mfPromiseGlobalKey$2 = "__mf_init__virtual:mf:__mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__mf_v__runtimeInit__mf_v__.js__";
var __mfPromiseState$2 = globalThis[__mfPromiseGlobalKey$2];
if (!__mfPromiseState$2) {
	let initResolve, initReject;
	const initPromise = new Promise((re, rj) => {
		initResolve = re;
		initReject = rj;
	});
	__mfPromiseState$2 = globalThis[__mfPromiseGlobalKey$2] = {
		initPromise,
		initResolve,
		initReject
	};
}
var initPromise$2 = __mfPromiseState$2.initPromise;
var __mfCacheGlobalKey$2 = "__mf_module_cache__";
globalThis[__mfCacheGlobalKey$2] ||= {
	share: {},
	remote: {}
};
globalThis[__mfCacheGlobalKey$2].share ||= {};
globalThis[__mfCacheGlobalKey$2].remote ||= {};
var __mfModuleCache$2 = globalThis[__mfCacheGlobalKey$2];
var __mfTrackPendingShareLoad$2 = (promise) => {
	const pendingShareLoads = __mfModuleCache$2.pendingShareLoads ||= [];
	pendingShareLoads.push(promise);
	const cleanup = () => {
		const index = pendingShareLoads.indexOf(promise);
		if (index !== -1) pendingShareLoads.splice(index, 1);
	};
	promise.then(cleanup, cleanup);
	return promise;
};
for (const __mfShareKey of Object.keys(__mfModuleCache$2.share)) if (__mfShareKey.startsWith("default:")) {
	const __mfLegacyShareKey = __mfShareKey.slice(8);
	if (__mfModuleCache$2.share[__mfLegacyShareKey] === void 0) __mfModuleCache$2.share[__mfLegacyShareKey] = __mfModuleCache$2.share[__mfShareKey];
} else if (!__mfShareKey.includes(":")) {
	const __mfDefaultShareKey = "default:" + __mfShareKey;
	if (__mfModuleCache$2.share[__mfDefaultShareKey] === void 0) __mfModuleCache$2.share[__mfDefaultShareKey] = __mfModuleCache$2.share[__mfShareKey];
}
var __mfNormalizeShareModule$2 = (mod) => {
	const normalized = (() => {
		let current = mod;
		for (let i = 0; i < 5; i++) {
			const defaultExport = current?.default;
			if (!defaultExport || typeof defaultExport !== "object") break;
			const namedValues = Object.keys(current).filter((key) => key !== "default").map((key) => current[key]);
			if (namedValues.length > 0 && namedValues.some((value) => value !== void 0)) break;
			current = defaultExport;
		}
		return current;
	})();
	return normalized && Object.getPrototypeOf(normalized) === null ? Object.assign({}, normalized) : normalized;
};
var __mf_default$2;
var __mfApplyLazyShareExports$2 = (mod) => {
	exportModule$2 = mod;
	mod["createRoot"];
	mod["hydrateRoot"];
	mod["version"];
	__mf_default$2 = mod.default ?? mod;
};
__mfSubscribeSharedCache(__mfModuleCache$2.share, {
	"canonical": "default:react-dom/client",
	"aliases": ["react-dom/client"]
}, __mfApplyLazyShareExports$2);
var exportModule$2 = __mfReadSharedCache(__mfModuleCache$2.share, {
	"canonical": "default:react-dom/client",
	"aliases": ["react-dom/client"]
});
if (exportModule$2 === void 0) __mfTrackPendingShareLoad$2(initPromise$2.then(() => {
	exportModule$2 = __mfReadSharedCache(__mfModuleCache$2.share, {
		"canonical": "default:react-dom/client",
		"aliases": ["react-dom/client"]
	});
	if (exportModule$2 !== void 0) {
		__mfApplyLazyShareExports$2(exportModule$2);
		return;
	}
	return __vitePreload(() => import("./_virtual_mf___mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__prebuild__react_mf_2_dom_mf_1_client__prebuild__-BAZd9imy.js").then((mod) => {
		exportModule$2 = __mfNormalizeShareModule$2(mod);
		__mfWriteSharedCache(__mfModuleCache$2.share, {
			"canonical": "default:react-dom/client",
			"aliases": ["react-dom/client"]
		}, exportModule$2, "robot-vs");
	}), __vite__mapDeps([1,0]));
}));
else __mfApplyLazyShareExports$2(exportModule$2);
//#endregion
//#region \0virtual:mf:__mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js
var __mfPromiseGlobalKey$1 = "__mf_init__virtual:mf:__mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__mf_v__runtimeInit__mf_v__.js__";
var __mfPromiseState$1 = globalThis[__mfPromiseGlobalKey$1];
if (!__mfPromiseState$1) {
	let initResolve, initReject;
	const initPromise = new Promise((re, rj) => {
		initResolve = re;
		initReject = rj;
	});
	__mfPromiseState$1 = globalThis[__mfPromiseGlobalKey$1] = {
		initPromise,
		initResolve,
		initReject
	};
}
var initPromise$1 = __mfPromiseState$1.initPromise;
var __mfCacheGlobalKey$1 = "__mf_module_cache__";
globalThis[__mfCacheGlobalKey$1] ||= {
	share: {},
	remote: {}
};
globalThis[__mfCacheGlobalKey$1].share ||= {};
globalThis[__mfCacheGlobalKey$1].remote ||= {};
var __mfModuleCache$1 = globalThis[__mfCacheGlobalKey$1];
var __mfTrackPendingShareLoad$1 = (promise) => {
	const pendingShareLoads = __mfModuleCache$1.pendingShareLoads ||= [];
	pendingShareLoads.push(promise);
	const cleanup = () => {
		const index = pendingShareLoads.indexOf(promise);
		if (index !== -1) pendingShareLoads.splice(index, 1);
	};
	promise.then(cleanup, cleanup);
	return promise;
};
for (const __mfShareKey of Object.keys(__mfModuleCache$1.share)) if (__mfShareKey.startsWith("default:")) {
	const __mfLegacyShareKey = __mfShareKey.slice(8);
	if (__mfModuleCache$1.share[__mfLegacyShareKey] === void 0) __mfModuleCache$1.share[__mfLegacyShareKey] = __mfModuleCache$1.share[__mfShareKey];
} else if (!__mfShareKey.includes(":")) {
	const __mfDefaultShareKey = "default:" + __mfShareKey;
	if (__mfModuleCache$1.share[__mfDefaultShareKey] === void 0) __mfModuleCache$1.share[__mfDefaultShareKey] = __mfModuleCache$1.share[__mfShareKey];
}
var __mfNormalizeShareModule$1 = (mod) => {
	const normalized = (() => {
		let current = mod;
		for (let i = 0; i < 5; i++) {
			const defaultExport = current?.default;
			if (!defaultExport || typeof defaultExport !== "object") break;
			const namedValues = Object.keys(current).filter((key) => key !== "default").map((key) => current[key]);
			if (namedValues.length > 0 && namedValues.some((value) => value !== void 0)) break;
			current = defaultExport;
		}
		return current;
	})();
	return normalized && Object.getPrototypeOf(normalized) === null ? Object.assign({}, normalized) : normalized;
};
var __mf_1$1;
var __mf_2$1;
var __mfApplyLazyShareExports$1 = (mod) => {
	exportModule$1 = mod;
	mod["Fragment"];
	__mf_1$1 = mod["jsx"];
	__mf_2$1 = mod["jsxs"];
	mod.default;
};
__mfSubscribeSharedCache(__mfModuleCache$1.share, {
	"canonical": "default:react/jsx-runtime",
	"aliases": ["react/jsx-runtime"]
}, __mfApplyLazyShareExports$1);
var exportModule$1 = __mfReadSharedCache(__mfModuleCache$1.share, {
	"canonical": "default:react/jsx-runtime",
	"aliases": ["react/jsx-runtime"]
});
if (exportModule$1 === void 0) __mfTrackPendingShareLoad$1(initPromise$1.then(() => {
	exportModule$1 = __mfReadSharedCache(__mfModuleCache$1.share, {
		"canonical": "default:react/jsx-runtime",
		"aliases": ["react/jsx-runtime"]
	});
	if (exportModule$1 !== void 0) {
		__mfApplyLazyShareExports$1(exportModule$1);
		return;
	}
	return __vitePreload(() => import("./_virtual_mf___mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__prebuild__react_mf_1_jsx_mf_2_runtime__prebuild__-SNamXbDq.js").then((mod) => {
		exportModule$1 = __mfNormalizeShareModule$1(mod);
		__mfWriteSharedCache(__mfModuleCache$1.share, {
			"canonical": "default:react/jsx-runtime",
			"aliases": ["react/jsx-runtime"]
		}, exportModule$1, "robot-vs");
	}), []);
}));
else __mfApplyLazyShareExports$1(exportModule$1);
//#endregion
//#region \0virtual:mf:__mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__loadShare__react_mf_2_dom__loadShare__.js
var _virtual_mf___mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__loadShare__react_mf_2_dom__loadShare___exports = /* @__PURE__ */ __exportAll({
	__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: () => __mf_0,
	__moduleExports: () => exportModule,
	browser: () => __mf_1,
	createPortal: () => __mf_2,
	default: () => __mf_default,
	flushSync: () => __mf_3,
	preconnect: () => __mf_4,
	prefetchDNS: () => __mf_5,
	preinit: () => __mf_6,
	preinitModule: () => __mf_7,
	preload: () => __mf_8,
	preloadModule: () => __mf_9,
	requestFormReset: () => __mf_10,
	unstable_batchedUpdates: () => __mf_11,
	useFormState: () => __mf_12,
	useFormStatus: () => __mf_13,
	version: () => __mf_14
});
var __mfPromiseGlobalKey = "__mf_init__virtual:mf:__mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__mf_v__runtimeInit__mf_v__.js__";
var __mfPromiseState = globalThis[__mfPromiseGlobalKey];
if (!__mfPromiseState) {
	let initResolve, initReject;
	const initPromise = new Promise((re, rj) => {
		initResolve = re;
		initReject = rj;
	});
	__mfPromiseState = globalThis[__mfPromiseGlobalKey] = {
		initPromise,
		initResolve,
		initReject
	};
}
var initPromise = __mfPromiseState.initPromise;
var __mfCacheGlobalKey = "__mf_module_cache__";
globalThis[__mfCacheGlobalKey] ||= {
	share: {},
	remote: {}
};
globalThis[__mfCacheGlobalKey].share ||= {};
globalThis[__mfCacheGlobalKey].remote ||= {};
var __mfModuleCache = globalThis[__mfCacheGlobalKey];
var __mfTrackPendingShareLoad = (promise) => {
	const pendingShareLoads = __mfModuleCache.pendingShareLoads ||= [];
	pendingShareLoads.push(promise);
	const cleanup = () => {
		const index = pendingShareLoads.indexOf(promise);
		if (index !== -1) pendingShareLoads.splice(index, 1);
	};
	promise.then(cleanup, cleanup);
	return promise;
};
for (const __mfShareKey of Object.keys(__mfModuleCache.share)) if (__mfShareKey.startsWith("default:")) {
	const __mfLegacyShareKey = __mfShareKey.slice(8);
	if (__mfModuleCache.share[__mfLegacyShareKey] === void 0) __mfModuleCache.share[__mfLegacyShareKey] = __mfModuleCache.share[__mfShareKey];
} else if (!__mfShareKey.includes(":")) {
	const __mfDefaultShareKey = "default:" + __mfShareKey;
	if (__mfModuleCache.share[__mfDefaultShareKey] === void 0) __mfModuleCache.share[__mfDefaultShareKey] = __mfModuleCache.share[__mfShareKey];
}
var __mfNormalizeShareModule = (mod) => {
	const normalized = (() => {
		let current = mod;
		for (let i = 0; i < 5; i++) {
			const defaultExport = current?.default;
			if (!defaultExport || typeof defaultExport !== "object") break;
			const namedValues = Object.keys(current).filter((key) => key !== "default").map((key) => current[key]);
			if (namedValues.length > 0 && namedValues.some((value) => value !== void 0)) break;
			current = defaultExport;
		}
		return current;
	})();
	return normalized && Object.getPrototypeOf(normalized) === null ? Object.assign({}, normalized) : normalized;
};
var __mf_default;
var __mf_0;
var __mf_1;
var __mf_2;
var __mf_3;
var __mf_4;
var __mf_5;
var __mf_6;
var __mf_7;
var __mf_8;
var __mf_9;
var __mf_10;
var __mf_11;
var __mf_12;
var __mf_13;
var __mf_14;
var __mfApplyLazyShareExports = (mod) => {
	exportModule = mod;
	__mf_0 = mod["__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE"];
	__mf_1 = mod["browser"];
	__mf_2 = mod["createPortal"];
	__mf_3 = mod["flushSync"];
	__mf_4 = mod["preconnect"];
	__mf_5 = mod["prefetchDNS"];
	__mf_6 = mod["preinit"];
	__mf_7 = mod["preinitModule"];
	__mf_8 = mod["preload"];
	__mf_9 = mod["preloadModule"];
	__mf_10 = mod["requestFormReset"];
	__mf_11 = mod["unstable_batchedUpdates"];
	__mf_12 = mod["useFormState"];
	__mf_13 = mod["useFormStatus"];
	__mf_14 = mod["version"];
	__mf_default = mod.default ?? mod;
};
__mfSubscribeSharedCache(__mfModuleCache.share, {
	"canonical": "default:react-dom",
	"aliases": ["react-dom"]
}, __mfApplyLazyShareExports);
var exportModule = __mfReadSharedCache(__mfModuleCache.share, {
	"canonical": "default:react-dom",
	"aliases": ["react-dom"]
});
if (exportModule === void 0) __mfTrackPendingShareLoad(initPromise.then(() => {
	exportModule = __mfReadSharedCache(__mfModuleCache.share, {
		"canonical": "default:react-dom",
		"aliases": ["react-dom"]
	});
	if (exportModule !== void 0) {
		__mfApplyLazyShareExports(exportModule);
		return;
	}
	return __vitePreload(() => import("./_virtual_mf___mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__prebuild__react_mf_2_dom__prebuild__-CqjDhuRN.js").then((mod) => {
		exportModule = __mfNormalizeShareModule(mod);
		__mfWriteSharedCache(__mfModuleCache.share, {
			"canonical": "default:react-dom",
			"aliases": ["react-dom"]
		}, exportModule, "robot-vs");
	}), __vite__mapDeps([1,0]));
}));
else __mfApplyLazyShareExports(exportModule);
//#endregion
export { __mf_18 as a, __mf_39 as c, _virtual_mf___mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__loadShare__react__loadShare___exports as d, __mf_default$2 as i, __mf_40 as l, __mf_1$1 as n, __mf_30 as o, __mf_2$1 as r, __mf_35 as s, _virtual_mf___mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__loadShare__react_mf_2_dom__loadShare___exports as t, __mf_default$3 as u };
