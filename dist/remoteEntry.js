const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/App-DhaiWVDP.css"])))=>i.map(i=>d[i]);
import { t as __vitePreload } from "./assets/vite-preload-helper-DETvjeQE.js";
import { t as init$1 } from "./assets/dist-Ck7iKM_T.js";
import { t as share } from "./assets/helpers-3EccTNgN.js";
//#region virtual:mf-exposes:__mfe_internal__robot-vs__remoteEntry_js
var cssAssetMap = {};
var injectedCssHrefs = /* @__PURE__ */ new Set();
var exposeLoadPromises = /* @__PURE__ */ new Map();
function loadExposedModule(exposeKey, loader) {
	let load = exposeLoadPromises.get(exposeKey);
	if (!load) {
		load = Promise.resolve().then(loader).catch((error) => {
			exposeLoadPromises.delete(exposeKey);
			throw error;
		});
		exposeLoadPromises.set(exposeKey, load);
	}
	return load;
}
async function injectCssAssets(exposeKey) {
	if (typeof document === "undefined") return;
	const cssAssets = cssAssetMap[exposeKey] || [];
	await Promise.all(cssAssets.map((cssAsset) => {
		const href = new URL(cssAsset, import.meta.url).href;
		if (injectedCssHrefs.has(href)) return Promise.resolve();
		injectedCssHrefs.add(href);
		if (document.querySelector(`link[rel="stylesheet"][href="${href}"]`)) return Promise.resolve();
		return new Promise((resolve, reject) => {
			const link = document.createElement("link");
			link.rel = "stylesheet";
			link.href = href;
			link.onload = () => resolve();
			link.onerror = () => reject(/* @__PURE__ */ new Error(`[Module Federation] Failed to load CSS asset: ${href}`));
			document.head.appendChild(link);
		});
	}));
}
var virtual_mf_exposes___mfe_internal__robot_vs__remoteEntry_js_default = { "./App": async () => {
	await injectCssAssets("./App");
	await Promise.all([]);
	const importModule = await loadExposedModule("./App", () => __vitePreload(() => import("./assets/App-BqCf6ayp.js"), __vite__mapDeps([0])));
	const dependencyPending = importModule && importModule.__mf_remote_dependency_pending;
	if (dependencyPending && typeof dependencyPending.then === "function") await dependencyPending;
	const exportModule = {};
	Object.assign(exportModule, importModule);
	Object.defineProperty(exportModule, "__esModule", {
		value: true,
		enumerable: false
	});
	return exportModule;
} };
//#endregion
//#region virtual:mf-REMOTE_ENTRY_ID:__mfe_internal__robot-vs__remoteEntry_js
if (typeof __VUE_HMR_RUNTIME__ === "undefined") globalThis.__VUE_HMR_RUNTIME__ = {
	createRecord() {},
	rerender() {},
	reload() {}
};
var __mfResolveGlobalKey = "__mf_init__virtual:mf:__mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__mf_v__runtimeInit__mf_v__.js__";
var __mfResolveState = globalThis[__mfResolveGlobalKey];
if (!__mfResolveState) {
	let initResolve, initReject;
	const initPromise = new Promise((re, rj) => {
		initResolve = re;
		initReject = rj;
	});
	__mfResolveState = globalThis[__mfResolveGlobalKey] = {
		initPromise,
		initResolve,
		initReject
	};
}
var initResolve = __mfResolveState.initResolve;
var { initReject } = __mfResolveState;
var __mfRejectInit = (err) => {
	initReject(err);
	throw err;
};
var __mfCacheGlobalKey = "__mf_module_cache__";
globalThis[__mfCacheGlobalKey] ||= {
	share: {},
	remote: {}
};
globalThis[__mfCacheGlobalKey].share ||= {};
globalThis[__mfCacheGlobalKey].remote ||= {};
var __mfModuleCache = globalThis[__mfCacheGlobalKey];
for (const __mfShareKey of Object.keys(__mfModuleCache.share)) if (__mfShareKey.startsWith("default:")) {
	const __mfLegacyShareKey = __mfShareKey.slice(8);
	if (__mfModuleCache.share[__mfLegacyShareKey] === void 0) __mfModuleCache.share[__mfLegacyShareKey] = __mfModuleCache.share[__mfShareKey];
} else if (!__mfShareKey.includes(":")) {
	const __mfDefaultShareKey = "default:" + __mfShareKey;
	if (__mfModuleCache.share[__mfDefaultShareKey] === void 0) __mfModuleCache.share[__mfDefaultShareKey] = __mfModuleCache.share[__mfShareKey];
}
var initTokens = {};
var shareScopeNames = Array.isArray("default") ? "default" : ["default"];
var shareScopeName = "default";
var mfName = "robot-vs";
var __mfMaterializedShareBatches = [
	["react"],
	["react/jsx-runtime", "react-dom"],
	["react-dom/client"]
];
var localSharedImportMapPromise;
var __mfLateBridgeShared;
async function retrySharedInit(fn) {
	for (let attempt = 0;; attempt++) try {
		return await fn();
	} catch (e) {
		throw e;
	}
}
var __mfOriginalProviderKey = Symbol("mf.originalSharedProvider");
var __mfResolveShareHook = { emit: (params) => params };
var __mfGetShareScopeNames = (share) => Array.isArray(share.scope) ? share.scope : [share.scope || "default"];
var __mfCreateProviderSelectionVersions = (versions, strategy) => {
	if (strategy !== "version-first") return versions;
	const selectionVersions = {};
	for (const [version, provider] of Object.entries(versions)) selectionVersions[version] = Object.assign({}, provider, { [__mfOriginalProviderKey]: provider });
	return selectionVersions;
};
var __mfFindSharedProviderEntry = (versions, provider) => {
	if (!provider) return void 0;
	const entries = Object.entries(versions || {});
	const registeredEntry = entries.find(([, candidate]) => candidate === provider);
	if (registeredEntry) return {
		version: registeredEntry[0],
		provider,
		registered: true
	};
	if (typeof provider.version === "string" && provider.version) return {
		version: provider.version,
		provider,
		registered: false
	};
	const provenanceEntries = entries.filter(([, candidate]) => candidate === provider || Boolean(provider.from && candidate?.from === provider.from));
	if (provenanceEntries.length !== 1) return void 0;
	return {
		version: provenanceEntries[0][0],
		provider,
		registered: false
	};
};
var __mfSelectSharedProvider = (versions, pkg, share$1, strategy) => {
	if (!versions || !share$1) return void 0;
	const candidates = Object.fromEntries(Object.entries(versions).filter(([, provider]) => provider?.shareConfig?.import !== false));
	if (Object.keys(candidates).length === 0) return void 0;
	const scopes = __mfGetShareScopeNames(share$1);
	const selectionVersions = __mfCreateProviderSelectionVersions(candidates, strategy);
	const shareScopeMap = {};
	for (const scope of scopes) shareScopeMap[scope || "default"] = { [pkg]: selectionVersions };
	const selected = share.getRegisteredShare(shareScopeMap, pkg, {
		...share$1,
		scope: scopes,
		strategy
	}, __mfResolveShareHook)?.shared;
	return selected?.[__mfOriginalProviderKey] || selected;
};
var __mfSelectExternalSharedProvider = (versions, pkg, localShare, strategy) => {
	const isLocalProvider = (provider) => __mfMatchesSharedProvider(provider, localShare);
	const candidates = Object.fromEntries(Object.entries(versions || {}).filter(([, provider]) => !isLocalProvider(provider) && provider?.shareConfig?.import !== false));
	if (localShare?.version && localShare.shareConfig?.import !== false) {
		if (!candidates[localShare.version]) candidates[localShare.version] = localShare;
	}
	const provider = __mfSelectSharedProvider(candidates, pkg, localShare, strategy);
	return isLocalProvider(provider) ? void 0 : provider;
};
var __mfMatchesSharedProvider = (provider, expected) => provider === expected || Boolean(expected?.from && provider?.from === expected.from);
var __mfGetScopeRootProvider = (instances, scopeRoot, shared, scopeName, pkg, version, provider, passedProvider, strategy) => {
	if (strategy !== "version-first" || !passedProvider) return void 0;
	const scopeRootProviders = scopeRoot?.options?.shared?.[pkg];
	const configuredScopeRootProvider = Array.isArray(scopeRootProviders) ? scopeRootProviders.find((candidate) => candidate?.version === version) : void 0;
	const scopeRootProvider = (passedProvider?.from === scopeRoot?.options?.name ? passedProvider : void 0) || (__mfMatchesSharedProvider(configuredScopeRootProvider, passedProvider) ? configuredScopeRootProvider : scopeRoot ? void 0 : passedProvider);
	if (!scopeRootProvider) return void 0;
	return instances.some((instance) => instance !== scopeRoot && instance?.options?.name === provider?.from && instance?.shareScopeMap?.[scopeName] === shared) ? scopeRootProvider : void 0;
};
var __mfResolveExternalSharedProvider = (instances, scopeRoot, shared, scopeName, pkg, providerEntry, selectedExternalProvider, passedProvider, strategy) => {
	const scopeRootProvider = providerEntry.registered ? __mfGetScopeRootProvider(instances, scopeRoot, shared, scopeName, pkg, providerEntry.version, providerEntry.provider, passedProvider, strategy) : void 0;
	const provider = scopeRootProvider || selectedExternalProvider;
	if (!provider) return void 0;
	if (providerEntry.registered && !__mfMatchesSharedProvider(provider, passedProvider)) return void 0;
	return {
		provider,
		scopeRootProvider
	};
};
async function getLocalSharedImportMap() {
	if (!localSharedImportMapPromise) localSharedImportMapPromise = retrySharedInit(() => __vitePreload(() => import("./assets/_virtual_mf-localSharedImportMap___mfe_internal__robot_mf_2_vs__mf_owner__1-DZEWI2-R.js"), [])).catch((e) => {
		localSharedImportMapPromise = void 0;
		throw e;
	});
	return localSharedImportMapPromise;
}
async function getExposesMap() {
	return virtual_mf_exposes___mfe_internal__robot_vs__remoteEntry_js_default;
}
async function init(shared = {}, initScope = [], remoteEntryInitOptions = {}) {
	const __mfGetSharedCacheDescriptor = (pkg, singleton, version, scope) => {
		const scopeName = (Array.isArray(scope) ? scope[0] : scope) || "default";
		const id = singleton || !version ? pkg : pkg + "@" + version;
		const descriptor = { canonical: scopeName + ":" + id };
		if (scopeName === "default") descriptor.aliases = [id];
		return descriptor;
	};
	const __mfReadSharedCache = (cache, descriptor) => {
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
	const __mfSharedCacheListenersKey = Symbol.for("module-federation.shared-cache-listeners");
	const __mfSharedCacheOwnersKey = Symbol.for("module-federation.shared-cache-owners");
	const __mfGetSharedCacheOwners = (cache) => {
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
	const __mfReadSharedCacheOwner = (cache, descriptor) => cache[__mfSharedCacheOwnersKey]?.[descriptor.canonical];
	const __mfGetSharedModuleIdentity = (value) => {
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
	const __mfIsSameSharedModule = (current, next) => {
		if (current === next) return true;
		const currentIdentity = __mfGetSharedModuleIdentity(current);
		const nextIdentity = __mfGetSharedModuleIdentity(next);
		if (!currentIdentity || !nextIdentity) return false;
		const currentInternals = currentIdentity.internals;
		const nextInternals = nextIdentity.internals;
		if (currentInternals !== void 0 || nextInternals !== void 0) return currentInternals !== void 0 && currentInternals === nextInternals;
		return typeof currentIdentity.hook === "function" && currentIdentity.hook === nextIdentity.hook;
	};
	const __mfWriteSharedCache = (cache, descriptor, value, owner) => {
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
	const __mfTreeShakingSharedCacheKey = Symbol.for("module-federation.tree-shaking-shared-cache");
	const __mfGetTreeShakingSharedCache = (cache) => {
		let metadata = cache[__mfTreeShakingSharedCacheKey];
		if (metadata === void 0) {
			metadata = Object.create(null);
			Object.defineProperty(cache, __mfTreeShakingSharedCacheKey, {
				value: metadata,
				enumerable: false,
				configurable: false,
				writable: false
			});
		}
		return metadata;
	};
	const __mfWriteTreeShakingSharedCache = (cache, descriptor, providedExports, value) => {
		if (!Array.isArray(providedExports)) return value;
		const normalizedExports = [...new Set(providedExports)].sort();
		const metadata = __mfGetTreeShakingSharedCache(cache);
		const entries = metadata[descriptor.canonical] ||= [];
		const existing = entries.find((entry) => entry.providedExports.length === normalizedExports.length && entry.providedExports.every((name, index) => name === normalizedExports[index]));
		if (existing) existing.value = value;
		else entries.push({
			providedExports: normalizedExports,
			value
		});
		return value;
	};
	const __mfTreeShakingSelectionCacheKey = Symbol.for("module-federation.tree-shaking-shared-selection-cache");
	const __mfGetTreeShakingSelectionCache = (cache) => {
		let selections = cache[__mfTreeShakingSelectionCacheKey];
		if (selections === void 0) {
			selections = Object.create(null);
			Object.defineProperty(cache, __mfTreeShakingSelectionCacheKey, {
				value: selections,
				enumerable: false,
				configurable: false,
				writable: false
			});
		}
		return selections;
	};
	const __mfReadTreeShakingSharedSelection = (cache, descriptor, consumer) => {
		const fullModule = __mfReadSharedCache(cache, descriptor);
		if (fullModule !== void 0) return fullModule;
		return cache[__mfTreeShakingSelectionCacheKey]?.[descriptor.canonical]?.[consumer];
	};
	const __mfWriteTreeShakingSharedSelection = (cache, descriptor, consumer, value) => {
		const selections = __mfGetTreeShakingSelectionCache(cache);
		const byConsumer = selections[descriptor.canonical] ||= Object.create(null);
		byConsumer[consumer] = value;
		return value;
	};
	const federationInstances = globalThis.__FEDERATION__?.__INSTANCES__ || [];
	const initRootName = initScope.find((token) => token?.from)?.from;
	const scopeRoot = federationInstances.find((instance) => instance?.options?.name === initRootName && instance?.shareScopeMap?.["default"] === shared) || federationInstances.find((instance) => instance?.options?.name !== mfName && instance?.shareScopeMap?.["default"] === shared);
	const __mfRuntimeShareScopes = Object.create(null);
	const __mfCloneShareScope = (hostScope) => {
		const runtimeScope = Object.create(null);
		for (const [pkg, versions] of Object.entries(hostScope || {})) runtimeScope[pkg] = Object.assign(Object.create(null), versions);
		return runtimeScope;
	};
	const __mfKeepRegisteredShares = (scopeName, scope) => {
		for (const [pkg, versions] of Object.entries(initRes.shareScopeMap?.[scopeName] || {})) for (const [version, provider] of Object.entries(versions || {})) {
			if (!provider || provider.get === usedShared[pkg]?.get) continue;
			const target = scope[pkg] ||= {};
			if (target[version] === void 0) target[version] = provider;
		}
	};
	const __mfGetRuntimeShareScope = (scopeName, hostScope) => {
		__mfKeepRegisteredShares(scopeName, hostScope);
		const isWebpackScope = !scopeRoot && Object.values(hostScope || {}).some((versions) => Object.values(versions || {}).some(isWebpackProvider));
		const runtimeScope = isWebpackScope ? __mfCloneShareScope(hostScope) : hostScope;
		__mfRuntimeShareScopes[scopeName] = {
			host: hostScope,
			runtime: runtimeScope,
			isWebpackScope
		};
		return runtimeScope;
	};
	const __mfRestoreForeignSharedProviders = () => {
		const webpackScopes = Object.values(__mfRuntimeShareScopes).filter(({ isWebpackScope }) => isWebpackScope);
		if (webpackScopes.length === 0) return;
		for (const { host, runtime } of webpackScopes) for (const [pkg, versions] of Object.entries(host || {})) {
			const runtimeVersions = runtime[pkg] ||= Object.create(null);
			for (const [version, provider] of Object.entries(versions || {})) runtimeVersions[version] = provider;
		}
	};
	const initialShared = Object.create(null);
	for (const [pkg, versions] of Object.entries(shared)) {
		const initialVersions = initialShared[pkg] = Object.create(null);
		for (const [version, provider] of Object.entries(versions)) initialVersions[version] = Object.assign({}, provider);
	}
	const { usedShared, usedRemotes } = await getLocalSharedImportMap();
	function isWebpackProvider(provider) {
		if (typeof provider?.get !== "function") return false;
		const source = Function.prototype.toString.call(provider.get);
		return source.includes("__webpack_require__") || /\.\s*e\s*\([^)]*\)\s*\.then\s*\(/.test(source);
	}
	const __mfUsesWebpackShareScope = Object.values(initialShared).some((versions) => Object.values(versions || {}).some(isWebpackProvider));
	const __mfGetSharePackageName = (pkg) => {
		const parts = pkg.split("/");
		return pkg.startsWith("@") ? parts.slice(0, 2).join("/") : parts[0];
	};
	const __mfGetExternalSharedProvider = (pkg, share, versionMap, includePackage) => {
		if (typeof __mfSelectExternalSharedProvider !== "function") return void 0;
		const packageName = __mfGetSharePackageName(pkg);
		const candidates = !includePackage || packageName === pkg ? [[pkg, share]] : [[pkg, share], [packageName, usedShared[packageName]]];
		for (const [candidatePkg, candidateShare] of candidates) {
			if (!candidateShare) continue;
			const provider = __mfSelectExternalSharedProvider(versionMap ? candidatePkg === pkg ? versionMap : initialShared[candidatePkg] : initialShared[candidatePkg] ?? shared[candidatePkg], candidatePkg, candidateShare, "version-first");
			if (provider) return provider;
		}
	};
	const __mfGetPendingExternalSharedProvider = (pkg, share, versionMap) => {
		const provider = __mfGetExternalSharedProvider(pkg, share, versionMap, true);
		return provider && isWebpackProvider(provider) && !provider.lib && !provider.loaded ? provider : void 0;
	};
	var initToken = initTokens[shareScopeName];
	if (!initToken) initToken = initTokens[shareScopeName] = { from: mfName };
	if (initScope.indexOf(initToken) >= 0) return;
	initScope.push(initToken);
	const __mfNormalizeRuntimeShare = (mod) => {
		let current = mod;
		for (let i = 0; i < 5; i++) {
			const defaultExport = current?.default;
			if (!defaultExport || typeof defaultExport !== "object" || Object.keys(defaultExport).length === 0) break;
			const proto = Object.getPrototypeOf(defaultExport);
			if (proto !== null && proto !== Object.prototype) break;
			const namedValues = Object.keys(current).filter((key) => key !== "default").map((key) => current[key]);
			if (namedValues.length > 0 && namedValues.some((value) => value !== void 0)) break;
			current = defaultExport;
		}
		return current;
	};
	const __browserPlugins = [];
	const __ssrPlugins = typeof globalThis.window === "undefined" ? await Promise.all([]) : [];
	const __mfRuntimeShareLoadIdKey = "__mf_vite_runtime_share_load_id__";
	let __mfRuntimeShareLoadId = 0;
	const __mfRuntimeShareSelections = /* @__PURE__ */ new Map();
	const __mfRuntimeShareLifecycles = /* @__PURE__ */ new Map();
	const initRes = init$1({
		name: mfName,
		remotes: usedRemotes,
		shared: usedShared,
		plugins: [
			__mfSharePinLifecyclePlugin(),
			__mfRealNameSnapshotPlugin(),
			...__browserPlugins,
			...__ssrPlugins
		],
		shareStrategy: "version-first"
	});
	initRes.initShareScopeMap("default", __mfGetRuntimeShareScope("default", shared));
	function __mfSharePinLifecyclePlugin() {
		return {
			name: "vite-share-pin-lifecycle-plugin",
			resolveShare(args) {
				const loadId = args.shareInfo?.[__mfRuntimeShareLoadIdKey];
				const lifecycle = loadId === void 0 ? void 0 : __mfRuntimeShareLifecycles.get(loadId);
				if (!lifecycle) return args;
				const defaultResolver = args.resolver;
				args.resolver = (...resolverArgs) => {
					lifecycle.pinned.reapply();
					return defaultResolver(...resolverArgs);
				};
				lifecycle.pinned.reveal();
				return args;
			}
		};
	}
	function __mfRealNameSnapshotPlugin() {
		return {
			name: "vite-real-name-snapshot-plugin",
			afterLoadSnapshot(args) {
				const snapshot = args && args.remoteSnapshot;
				const globalName = snapshot && snapshot.globalName;
				const version = snapshot && snapshot.version;
				if (!globalName || !version || !snapshot.remoteEntry) return args;
				const moduleInfo = globalThis.__FEDERATION__ && globalThis.__FEDERATION__.moduleInfo;
				const realNameKey = globalName + ":" + version;
				if (moduleInfo && !moduleInfo[realNameKey]) moduleInfo[realNameKey] = snapshot;
				return args;
			}
		};
	}
	const runtimeResolveShareHook = initRes.sharedHandler.hooks.lifecycle.resolveShare;
	if (!initRes.__mfKeepAdoptedProviders) {
		initRes.__mfKeepAdoptedProviders = true;
		initRes.sharedHandler?.hooks?.lifecycle?.afterRegisterShare?.on?.((args) => {
			const { shared, previousShared, registeredShared } = args || {};
			const versions = initRes.shareScopeMap?.[args.scope]?.[args.pkgName];
			if (!shared || !versions) return;
			if (shared.shareConfig?.import !== false) {
				if (registeredShared !== shared && registeredShared?.shareConfig?.import === false && !registeredShared.loaded && versions[shared.version] === registeredShared) versions[shared.version] = shared;
				return;
			}
			if (registeredShared !== shared || !previousShared || previousShared.shareConfig?.import === false) return;
			if (versions[shared.version] === shared) versions[shared.version] = previousShared;
		});
	}
	const __mfRuntimeProviderOrigins = /* @__PURE__ */ new WeakMap();
	runtimeResolveShareHook.on((args) => {
		const loadId = args.shareInfo?.[__mfRuntimeShareLoadIdKey];
		const resolver = args.resolver;
		if (typeof resolver !== "function") return args;
		const instrumentedResolver = (...resolverArgs) => {
			let resolved = resolver(...resolverArgs);
			if (resolved?.shared?.shareConfig?.import === false && typeof __mfSelectSharedProvider === "function" && usedShared[args.pkgName]) {
				const provider = __mfSelectSharedProvider(args.shareScopeMap?.[args.scope]?.[args.pkgName], args.pkgName, usedShared[args.pkgName], "version-first");
				if (provider && provider.shareConfig?.import !== false) resolved = {
					shared: provider,
					useTreesShaking: resolved.useTreesShaking
				};
			}
			const selectedProvider = resolved?.shared;
			if (selectedProvider && (typeof selectedProvider === "object" || typeof selectedProvider === "function") && !__mfRuntimeProviderOrigins.has(selectedProvider)) __mfRuntimeProviderOrigins.set(selectedProvider, { from: selectedProvider.from });
			if (loadId !== void 0 && selectedProvider) __mfRuntimeShareSelections.set(loadId, selectedProvider);
			return resolved;
		};
		args.resolver = instrumentedResolver;
		return args;
	});
	const __mfPinSharedProvider = (versionMap, version, currentProvider, provider) => {
		if (!versionMap || versionMap[version] !== currentProvider) return void 0;
		const pinnedProvider = Object.assign({}, provider, {
			version: provider.version ?? version,
			scope: provider.scope ?? currentProvider?.scope ?? ["default"],
			strategy: "loaded-first"
		});
		const providerFrom = provider.from;
		versionMap[version] = pinnedProvider;
		const isCurrentProviderActive = () => currentProvider === void 0 ? versionMap[version] === void 0 : versionMap[version] === currentProvider;
		return {
			provider: pinnedProvider,
			reveal() {
				if (versionMap[version] !== pinnedProvider) return false;
				if (currentProvider === void 0) delete versionMap[version];
				else versionMap[version] = currentProvider;
				return true;
			},
			reapply() {
				if (!isCurrentProviderActive()) return false;
				versionMap[version] = pinnedProvider;
				return true;
			},
			release(loaded, selected = true) {
				provider.from = providerFrom;
				if (versionMap[version] !== pinnedProvider) return !selected && isCurrentProviderActive();
				if (!selected) {
					if (currentProvider === void 0) delete versionMap[version];
					else versionMap[version] = currentProvider;
					return true;
				}
				if (!loaded) {
					if (currentProvider === void 0) delete versionMap[version];
					else versionMap[version] = currentProvider;
					return false;
				}
				pinnedProvider.from = providerFrom;
				if (loaded && pinnedProvider.lib) pinnedProvider.loaded = true;
				if (provider.strategy === void 0) delete pinnedProvider.strategy;
				else pinnedProvider.strategy = provider.strategy;
				return true;
			}
		};
	};
	const __mfSnapshotSharedProviders = (versionMap) => Object.entries(versionMap || {}).map(([version, provider]) => ({
		provider,
		version,
		from: provider.from,
		registered: true
	}));
	const __mfMatchLoadedSharedProvider = (providerSelections, factory) => {
		if (factory === void 0) return void 0;
		let match;
		for (const selection of providerSelections) {
			const provider = selection.provider;
			const directProvider = provider.treeShaking || provider;
			if (selection.loadedFactory !== factory && provider.lib !== factory && directProvider.lib !== factory) continue;
			if (match) return void 0;
			match = selection;
		}
		return match;
	};
	const __mfLoadRuntimeShare = async (pkg, shareConfig, pinned) => {
		const loadId = ++__mfRuntimeShareLoadId;
		__mfRuntimeShareLifecycles.set(loadId, { pinned });
		try {
			const factory = await initRes.loadShare(pkg, { customShareInfo: {
				shareConfig,
				[__mfRuntimeShareLoadIdKey]: loadId
			} });
			return {
				factory: factory === false ? void 0 : factory,
				selectedProvider: __mfRuntimeShareSelections.get(loadId)
			};
		} finally {
			__mfRuntimeShareSelections.delete(loadId);
			__mfRuntimeShareLifecycles.delete(loadId);
		}
	};
	const __mfLoadPinnedRuntimeShare = async (pkg, shareConfig, versionMap, version, currentProvider, provider, providerRegistered = true) => {
		const providerFrom = provider.from;
		const pinned = __mfPinSharedProvider(versionMap, version, currentProvider, provider);
		if (!pinned) return void 0;
		let runtimeLoad;
		try {
			runtimeLoad = await __mfLoadRuntimeShare(pkg, shareConfig, pinned);
		} catch (error) {
			pinned.release(false);
			throw error;
		}
		const factory = runtimeLoad?.factory;
		if (factory === void 0) {
			pinned.release(false);
			return;
		}
		const providerSelections = __mfSnapshotSharedProviders(versionMap);
		const directPinnedProvider = pinned.provider.treeShaking || pinned.provider;
		const pinnedMatchesFactory = pinned.provider.lib === factory || directPinnedProvider.lib === factory;
		if (!providerRegistered && pinnedMatchesFactory) {
			const pinnedSelectionIndex = providerSelections.findIndex((selection) => selection.provider === pinned.provider);
			if (pinnedSelectionIndex !== -1) providerSelections.splice(pinnedSelectionIndex, 1);
		}
		if (!providerRegistered && !providerSelections.some((selection) => selection.provider === provider)) providerSelections.push({
			provider,
			version,
			from: providerFrom,
			registered: false,
			loadedFactory: pinnedMatchesFactory ? factory : void 0
		});
		const runtimeSelectedProvider = !providerRegistered && runtimeLoad.selectedProvider === pinned.provider && pinnedMatchesFactory ? provider : runtimeLoad.selectedProvider;
		if (runtimeSelectedProvider && !providerSelections.some((selection) => selection.provider === runtimeSelectedProvider)) {
			const runtimeProviderOrigin = __mfRuntimeProviderOrigins.get(runtimeSelectedProvider);
			const selectedVersion = typeof runtimeSelectedProvider.version === "string" && runtimeSelectedProvider.version ? runtimeSelectedProvider.version : version;
			providerSelections.push({
				provider: runtimeSelectedProvider,
				version: selectedVersion,
				from: runtimeProviderOrigin ? runtimeProviderOrigin.from : runtimeSelectedProvider.from,
				registered: versionMap?.[selectedVersion] === runtimeSelectedProvider,
				loadedFactory: factory
			});
		}
		const selection = providerSelections.find((candidate) => candidate.provider === runtimeSelectedProvider) ?? __mfMatchLoadedSharedProvider(providerSelections, factory);
		if (!pinned.release(true, selection?.provider === pinned.provider) || !selection) return void 0;
		const runtimeProviderOrigin = __mfRuntimeProviderOrigins.get(selection.provider);
		selection.from = selection.provider === provider ? providerFrom : runtimeProviderOrigin ? runtimeProviderOrigin.from : selection.provider.from;
		if (runtimeProviderOrigin) selection.provider.from = runtimeProviderOrigin.from;
		const mod = typeof factory === "function" ? factory() : factory;
		const resolved = await Promise.resolve(mod);
		if (selection.registered && versionMap?.[selection.version] !== selection.provider) return void 0;
		return {
			provider: selection.provider,
			selection,
			resolved
		};
	};
	const bridgedProviders = /* @__PURE__ */ new Set();
	const bridgeSelections = /* @__PURE__ */ new Map();
	const __mfBridgeMaterializedProvider = async (pkg, usedShare, versionMap) => {
		const singleton = Boolean(usedShare.shareConfig?.singleton);
		if (singleton && true) return;
		if (usedShare.canLiveRebind === false) return;
		try {
			const provider = __mfSelectExternalSharedProvider(versionMap, pkg, usedShare, "version-first");
			const providerEntry = __mfFindSharedProviderEntry(versionMap, provider);
			if (!providerEntry) return;
			if (usedShare.shareConfig?.import === false && __mfMatchesSharedProvider(provider, usedShare)) return;
			if (provider?.shareConfig?.import === false) return;
			const { version } = providerEntry;
			if (!singleton && version !== usedShare.version) return;
			if (!provider.lib && !provider.loading && !(provider.loaded && typeof provider.get === "function")) return;
			const usedCacheDescriptor = __mfGetSharedCacheDescriptor(pkg, singleton, usedShare.version, usedShare.scope);
			if (__mfReadSharedCache(__mfModuleCache.share, usedCacheDescriptor) !== void 0) return;
			const liveVersionMap = shared[pkg];
			const liveProvider = liveVersionMap?.[version];
			if (providerEntry.registered && !__mfMatchesSharedProvider(liveProvider, provider)) return;
			let loadedShare;
			let directFactory = provider.lib;
			if (!directFactory && isWebpackProvider(provider)) return;
			if (!directFactory && provider.loading) directFactory = await provider.loading;
			if (!directFactory && provider.loaded && typeof provider.get === "function") directFactory = await provider.get();
			if (!directFactory) return;
			const directModule = typeof directFactory === "function" ? directFactory() : directFactory;
			const directResolved = await Promise.resolve(directModule);
			const directProvider = providerEntry.registered ? liveProvider : provider;
			loadedShare = {
				provider: directProvider,
				selection: {
					provider: directProvider,
					version,
					from: provider.from,
					registered: providerEntry.registered
				},
				resolved: directResolved
			};
			const actualProvider = loadedShare?.provider;
			const actualSelection = loadedShare?.selection;
			if (!actualSelection) return;
			const resolved = loadedShare?.resolved;
			if (resolved === void 0) return;
			if (__mfReadSharedCache(__mfModuleCache.share, usedCacheDescriptor) !== void 0) return;
			if (actualSelection.registered && liveVersionMap?.[actualSelection.version] !== actualProvider) return;
			__mfWriteSharedCache(__mfModuleCache.share, usedCacheDescriptor, __mfNormalizeRuntimeShare(resolved), actualSelection.from);
			bridgedProviders.add(actualProvider);
		} catch (e) {
			console.error("[Module Federation] Failed to bridge materialized shared module \"" + pkg + "\"", e);
		}
	};
	const __mfBridgeExternalSharedProvider = async (pkg, usedShare, versionMap, passedVersionMap, expectedSelection) => {
		try {
			const usedCacheDescriptor = __mfGetSharedCacheDescriptor(pkg, usedShare.shareConfig?.singleton, usedShare.version, usedShare.scope);
			const cachedShare = __mfReadSharedCache(__mfModuleCache.share, usedCacheDescriptor);
			const cachedShareOwner = __mfReadSharedCacheOwner(__mfModuleCache.share, usedCacheDescriptor);
			const selectedExternalProvider = __mfSelectExternalSharedProvider(versionMap, pkg, usedShare, "version-first");
			const selectedRuntimeProvider = selectedExternalProvider || __mfSelectSharedProvider(versionMap, pkg, usedShare, "version-first") || usedShare;
			const providerEntry = __mfFindSharedProviderEntry(versionMap, selectedRuntimeProvider);
			if (!providerEntry) return;
			const selectedLocalProvider = __mfMatchesSharedProvider(selectedRuntimeProvider, usedShare);
			const { version } = providerEntry;
			if (!usedShare.shareConfig?.singleton && version !== usedShare.version) return;
			const passedProvider = passedVersionMap?.[version];
			const resolvedExternalProvider = __mfResolveExternalSharedProvider(federationInstances, scopeRoot, shared, "default", pkg, providerEntry, selectedExternalProvider, passedProvider, "version-first");
			if (!resolvedExternalProvider && !selectedLocalProvider) return;
			const { provider, scopeRootProvider } = resolvedExternalProvider || {
				provider: selectedRuntimeProvider,
				scopeRootProvider: void 0
			};
			if (usedShare.canLiveRebind === false) return;
			if (usedShare.shareConfig?.import === false && __mfMatchesSharedProvider(provider, usedShare)) return;
			if (provider?.shareConfig?.import === false) return;
			if (cachedShare !== void 0 && cachedShareOwner !== mfName) return;
			const liveVersionMap = shared[pkg];
			const liveProvider = liveVersionMap?.[version];
			if (providerEntry.registered && !scopeRootProvider && !__mfMatchesSharedProvider(liveProvider, provider)) return;
			const loadedShare = await __mfLoadPinnedRuntimeShare(pkg, usedShare.shareConfig, liveVersionMap, version, liveProvider, provider, providerEntry.registered && !selectedLocalProvider);
			const actualProvider = loadedShare?.provider;
			const actualSelection = loadedShare?.selection;
			if (!actualSelection) return;
			if (__mfMatchesSharedProvider(actualProvider, usedShare)) return;
			if (expectedSelection) {
				if (expectedSelection.version !== actualSelection.version || !__mfMatchesSharedProvider({ from: actualSelection.from }, expectedSelection.provider)) return;
			}
			if (bridgedProviders.has(actualProvider)) return;
			const resolved = loadedShare?.resolved;
			if (resolved === void 0) return;
			const latestCachedShare = __mfReadSharedCache(__mfModuleCache.share, usedCacheDescriptor);
			const latestCachedShareOwner = __mfReadSharedCacheOwner(__mfModuleCache.share, usedCacheDescriptor);
			if (latestCachedShare !== void 0 && latestCachedShareOwner !== mfName) return;
			if (actualSelection.registered && liveVersionMap?.[actualSelection.version] !== actualProvider) return;
			if (!expectedSelection) bridgeSelections.set(pkg, {
				version: actualSelection.version,
				provider: { from: actualSelection.from }
			});
			bridgedProviders.add(actualProvider);
			const normalized = __mfNormalizeRuntimeShare(resolved);
			__mfWriteSharedCache(__mfModuleCache.share, usedCacheDescriptor, normalized, actualSelection.from);
		} catch (e) {
			console.error("[Module Federation] Failed to bridge external shared module \"" + pkg + "\"", e);
		}
	};
	for (const batch of __mfMaterializedShareBatches) await Promise.all(batch.map(async (pkg) => {
		const usedShare = usedShared[pkg];
		if (!usedShare || usedShare.materialize === false || usedShare.treeShaking) return;
		await __mfBridgeMaterializedProvider(pkg, usedShare, initialShared[pkg]);
	}));
	for (const [pkg, share] of Object.entries(usedShared)) {
		if (share.treeShaking) continue;
		const cacheDescriptor = __mfGetSharedCacheDescriptor(pkg, share.shareConfig?.singleton, share.version, share.scope);
		if (__mfReadSharedCache(__mfModuleCache.share, cacheDescriptor) !== void 0) continue;
		const singletonCacheDescriptor = __mfGetSharedCacheDescriptor(pkg, true, share.version, share.scope);
		const singletonModule = __mfReadSharedCache(__mfModuleCache.share, singletonCacheDescriptor);
		if (singletonModule !== void 0) __mfWriteSharedCache(__mfModuleCache.share, cacheDescriptor, singletonModule, __mfReadSharedCacheOwner(__mfModuleCache.share, singletonCacheDescriptor));
	}
	const __mfSeedOrder = [
		"react",
		"react/jsx-runtime",
		"react-dom",
		"react-dom/client"
	];
	const __mfSeedBatches = [
		["react"],
		["react/jsx-runtime", "react-dom"],
		["react-dom/client"]
	];
	const __mfSeedIndex = new Map(__mfSeedOrder.map((pkg, index) => [pkg, index]));
	const __mfSeedPrerequisites = {
		"1": [0],
		"2": [0],
		"3": [0, 2]
	};
	const __mfSeedKeys = __mfSeedOrder.filter((pkg) => usedShared[pkg] && (usedShared[pkg].materialize !== false || usedShared[pkg].shareConfig?.import === false && !usedShared[pkg].lazy));
	__mfModuleCache.providerInit ||= /* @__PURE__ */ new Map();
	const __mfInitializeProviderOnce = (key, initialize) => {
		const existing = __mfModuleCache.providerInit.get(key);
		if (existing) return existing;
		const pending = Promise.resolve().then(initialize);
		__mfModuleCache.providerInit.set(key, pending);
		pending.catch(() => __mfModuleCache.providerInit.delete(key));
		return pending;
	};
	var __mfSeedLocalShared = async (seedKeys) => {
		const requested = new Set(seedKeys);
		for (const batch of __mfSeedBatches) await Promise.all(batch.filter((pkg) => requested.has(pkg)).map(async (pkg) => {
			const share = usedShared[pkg];
			const cacheDescriptor = __mfGetSharedCacheDescriptor(pkg, share.shareConfig?.singleton, share.version, share.scope);
			if (share.shareConfig?.import === false || Boolean(share.treeShaking) || __mfReadSharedCache(__mfModuleCache.share, cacheDescriptor) !== void 0) return;
			const singletonCacheDescriptor = __mfGetSharedCacheDescriptor(pkg, true, share.version, share.scope);
			const singletonModule = __mfReadSharedCache(__mfModuleCache.share, singletonCacheDescriptor);
			if (singletonModule !== void 0) {
				__mfWriteSharedCache(__mfModuleCache.share, cacheDescriptor, singletonModule, __mfReadSharedCacheOwner(__mfModuleCache.share, singletonCacheDescriptor));
				return;
			}
			const externalProvider = typeof __mfGetExternalSharedProvider === "function" ? __mfGetExternalSharedProvider(pkg, share) : void 0;
			if (externalProvider) {
				let externalFactory = externalProvider.lib;
				if (!externalFactory && externalProvider.loading) externalFactory = await externalProvider.loading;
				if (!externalFactory && externalProvider.loaded && typeof externalProvider.get === "function") externalFactory = await externalProvider.get();
				if (externalFactory) {
					const externalModule = typeof externalFactory === "function" ? externalFactory() : externalFactory;
					const externalResolved = await Promise.resolve(externalModule);
					const __mfNormalizeRuntimeShare = (mod) => {
						let current = mod;
						for (let i = 0; i < 5; i++) {
							const defaultExport = current?.default;
							if (!defaultExport || typeof defaultExport !== "object" || Object.keys(defaultExport).length === 0) break;
							const proto = Object.getPrototypeOf(defaultExport);
							if (proto !== null && proto !== Object.prototype) break;
							const namedValues = Object.keys(current).filter((key) => key !== "default").map((key) => current[key]);
							if (namedValues.length > 0 && namedValues.some((value) => value !== void 0)) break;
							current = defaultExport;
						}
						return current;
					};
					__mfWriteSharedCache(__mfModuleCache.share, cacheDescriptor, __mfNormalizeRuntimeShare(externalResolved), externalProvider.from);
					return;
				}
				if (typeof isWebpackProvider === "function" && isWebpackProvider(externalProvider) && (share.shareConfig?.singleton || __mfFindSharedProviderEntry(initialShared[pkg], externalProvider)?.version === share.version)) return;
			}
			const providerKey = cacheDescriptor.canonical;
			const resolved = await __mfInitializeProviderOnce(providerKey, async () => {
				const factory = await share.get();
				const mod = typeof factory === "function" ? factory() : factory;
				return Promise.resolve(mod);
			});
			for (const provider of initRes.options.shared?.[pkg] || []) if (provider.get === share.get) provider.eager = true;
			const __mfNormalizeRuntimeShare = (mod) => {
				let current = mod;
				for (let i = 0; i < 5; i++) {
					const defaultExport = current?.default;
					if (!defaultExport || typeof defaultExport !== "object" || Object.keys(defaultExport).length === 0) break;
					const proto = Object.getPrototypeOf(defaultExport);
					if (proto !== null && proto !== Object.prototype) break;
					const namedValues = Object.keys(current).filter((key) => key !== "default").map((key) => current[key]);
					if (namedValues.length > 0 && namedValues.some((value) => value !== void 0)) break;
					current = defaultExport;
				}
				return current;
			};
			const normalizedModule = __mfNormalizeRuntimeShare(resolved);
			const exportModule = normalizedModule === resolved ? { ...resolved } : normalizedModule;
			if (exportModule.__esModule !== true) Object.defineProperty(exportModule, "__esModule", {
				value: true,
				enumerable: false
			});
			__mfWriteSharedCache(__mfModuleCache.share, cacheDescriptor, exportModule, mfName);
		}));
	};
	const __mfIsRuntimeOnlySharePending = (pkg) => {
		const share = usedShared[pkg];
		if (!share.treeShaking && share.shareConfig?.import !== false) return false;
		const cacheDescriptor = __mfGetSharedCacheDescriptor(pkg, share.shareConfig?.singleton, share.version, share.scope);
		return share.treeShaking ? __mfReadTreeShakingSharedSelection(__mfModuleCache.share, cacheDescriptor, mfName) === void 0 && __mfReadSharedCache(__mfModuleCache.share, cacheDescriptor) === void 0 : __mfReadSharedCache(__mfModuleCache.share, cacheDescriptor) === void 0;
	};
	const __mfNeedsPreInitSeedBarrier = (pkg) => {
		const share = usedShared[pkg];
		const cacheDescriptor = __mfGetSharedCacheDescriptor(pkg, share.shareConfig?.singleton, share.version, share.scope);
		if ((share.treeShaking ? __mfReadTreeShakingSharedSelection(__mfModuleCache.share, cacheDescriptor, mfName) ?? __mfReadSharedCache(__mfModuleCache.share, cacheDescriptor) : __mfReadSharedCache(__mfModuleCache.share, cacheDescriptor)) !== void 0) return false;
		if (share.treeShaking || share.shareConfig?.import === false) return true;
		if (typeof __mfSelectExternalSharedProvider !== "function") return false;
		return Boolean(__mfSelectExternalSharedProvider(initialShared[pkg], pkg, share, "version-first"));
	};
	const __mfExpandBlockedSeedKeys = (blocked) => {
		let changed = true;
		while (changed) {
			changed = false;
			for (const pkg of __mfSeedKeys) {
				const seedIndex = __mfSeedIndex.get(pkg);
				if (blocked.has(seedIndex)) continue;
				if ((__mfSeedPrerequisites[seedIndex] || []).some((dependency) => blocked.has(dependency))) {
					blocked.add(seedIndex);
					changed = true;
				}
			}
		}
		return blocked;
	};
	const __mfPreInitBlockedSeedKeys = __mfExpandBlockedSeedKeys(new Set(__mfSeedKeys.filter(__mfNeedsPreInitSeedBarrier).map((pkg) => __mfSeedIndex.get(pkg))));
	const __mfImmediateSeedKeys = __mfSeedKeys.filter((pkg) => !__mfPreInitBlockedSeedKeys.has(__mfSeedIndex.get(pkg)));
	var __mfDeferredSeedKeys = __mfSeedKeys.filter((pkg) => __mfPreInitBlockedSeedKeys.has(__mfSeedIndex.get(pkg)));
	await __mfSeedLocalShared(__mfImmediateSeedKeys).catch(__mfRejectInit);
	try {
		await retrySharedInit(async () => {
			await Promise.all(await initRes.initializeSharing("default", {
				strategy: "version-first",
				from: "build",
				initScope
			}));
		});
	} catch (e) {
		console.error("[Module Federation]", e);
	}
	__mfRestoreForeignSharedProviders();
	const __mfBridgeSharedProviders = async () => {
		for (const batch of __mfMaterializedShareBatches) await Promise.all(batch.map(async (pkg) => {
			const usedShare = usedShared[pkg];
			if (!usedShare || usedShare.materialize === false || usedShare.treeShaking) return;
			await __mfBridgeExternalSharedProvider(pkg, usedShare, shared[pkg], initialShared[pkg], void 0);
		}));
	};
	if (__mfUsesWebpackShareScope) __mfLateBridgeShared = __mfBridgeSharedProviders;
	else await __mfBridgeSharedProviders();
	try {
		const allInstances = globalThis.__FEDERATION__?.__SHARE__;
		const globalVersionsByPackage = Object.create(null);
		if (allInstances) for (const [, scopes] of Object.entries(allInstances)) for (const scopeName of shareScopeNames) {
			const scopeShare = scopes?.[scopeName];
			if (!scopeShare) continue;
			for (const [pkg, versionMap] of Object.entries(scopeShare)) {
				const usedShare = usedShared?.[pkg];
				const passedVersions = initialShared[pkg];
				const bridgeSelection = bridgeSelections.get(pkg);
				if (!usedShare) continue;
				if (!passedVersions) continue;
				if (!bridgeSelection) continue;
				if (usedShare.treeShaking) continue;
				const globalVersions = globalVersionsByPackage[pkg] || (globalVersionsByPackage[pkg] = Object.create(null));
				for (const [version, provider] of Object.entries(versionMap)) {
					if (!provider.lib) continue;
					if (bridgeSelection.version !== version) continue;
					if (!__mfMatchesSharedProvider(provider, bridgeSelection.provider)) continue;
					const passedProvider = passedVersions[version];
					if (!(provider === passedProvider || passedProvider?.from && provider.from === passedProvider.from)) continue;
					if (provider === usedShare || usedShare.from && provider.from === usedShare.from) continue;
					if (globalVersions[version] === void 0) globalVersions[version] = provider;
				}
			}
		}
		for (const batch of __mfMaterializedShareBatches) await Promise.all(batch.map(async (pkg) => {
			const versionMap = globalVersionsByPackage[pkg];
			if (!versionMap) return;
			await __mfBridgeExternalSharedProvider(pkg, usedShared[pkg], versionMap, initialShared[pkg], bridgeSelections.get(pkg));
		}));
	} catch (e) {
		console.error("[Module Federation] Failed to bridge external shared modules", e);
	}
	const __mfResolveTreeShakingShared = async () => {};
	const __mfResolveImportFalseShared = async (pkg, share) => {
		const cacheDescriptor = __mfGetSharedCacheDescriptor(pkg, share.shareConfig?.singleton, share.version, share.scope);
		const cachedShare = share.treeShaking ? __mfReadTreeShakingSharedSelection(__mfModuleCache.share, cacheDescriptor, mfName) : __mfReadSharedCache(__mfModuleCache.share, cacheDescriptor);
		if (share.shareConfig?.import !== false || cachedShare !== void 0) return;
		if (__mfGetPendingExternalSharedProvider(pkg, share, initialShared[pkg])) return;
		const __mfNormalizeRuntimeShare = (mod) => {
			let current = mod;
			for (let i = 0; i < 5; i++) {
				const defaultExport = current?.default;
				if (!defaultExport || typeof defaultExport !== "object" || Object.keys(defaultExport).length === 0) break;
				const proto = Object.getPrototypeOf(defaultExport);
				if (proto !== null && proto !== Object.prototype) break;
				const namedValues = Object.keys(current).filter((key) => key !== "default").map((key) => current[key]);
				if (namedValues.length > 0 && namedValues.some((value) => value !== void 0)) break;
				current = defaultExport;
			}
			return current;
		};
		const versionMap = shared?.[pkg];
		const provider = __mfSelectSharedProvider(versionMap, pkg, share, "version-first") || share;
		const providerEntry = __mfFindSharedProviderEntry(versionMap, provider);
		if (!providerEntry) return;
		const __mfIsOwnStub = (candidate) => candidate === share || candidate?.shareConfig?.import === false;
		if (__mfIsOwnStub(provider)) return;
		const { version } = providerEntry;
		const currentProvider = versionMap?.[version];
		const loadedShare = await __mfLoadPinnedRuntimeShare(pkg, share.shareConfig, versionMap, version, currentProvider, provider, providerEntry.registered);
		const providerSelection = loadedShare?.selection;
		const actualProvider = loadedShare?.provider;
		const resolved = loadedShare?.resolved;
		if (!providerSelection) return;
		if (__mfIsOwnStub(actualProvider)) return;
		if (resolved === void 0) return;
		if ((share.treeShaking ? __mfReadTreeShakingSharedSelection(__mfModuleCache.share, cacheDescriptor, mfName) : __mfReadSharedCache(__mfModuleCache.share, cacheDescriptor)) !== void 0) return;
		if (providerSelection.registered && versionMap?.[providerSelection.version] !== actualProvider) return;
		const normalizedShared = __mfNormalizeRuntimeShare(resolved);
		if (share.treeShaking) {
			const providedExports = share.treeShaking.providedExports ?? share.treeShaking.usedExports ?? [];
			__mfWriteTreeShakingSharedCache(__mfModuleCache.share, cacheDescriptor, providedExports, normalizedShared);
			__mfWriteTreeShakingSharedSelection(__mfModuleCache.share, cacheDescriptor, mfName, normalizedShared);
		} else __mfWriteSharedCache(__mfModuleCache.share, cacheDescriptor, normalizedShared, providerSelection.from);
	};
	const __mfReadyDeferredSeedKeys = [];
	const __mfBlockedSeedKeys = /* @__PURE__ */ new Set();
	for (const pkg of __mfDeferredSeedKeys) {
		const share = usedShared[pkg];
		const seedIndex = __mfSeedIndex.get(pkg);
		if (__mfIsRuntimeOnlySharePending(pkg)) try {
			if (share.treeShaking) await __mfResolveTreeShakingShared(pkg, share);
			else if (share.shareConfig?.import === false) await __mfResolveImportFalseShared(pkg, share);
		} catch (err) {
			console.error(`[Module Federation] Failed to resolve runtime-only shared module "${pkg}"`, err);
		}
		if (__mfIsRuntimeOnlySharePending(pkg)) __mfBlockedSeedKeys.add(seedIndex);
	}
	__mfExpandBlockedSeedKeys(__mfBlockedSeedKeys);
	__mfReadyDeferredSeedKeys.push(...__mfDeferredSeedKeys.filter((pkg) => !__mfBlockedSeedKeys.has(__mfSeedIndex.get(pkg))));
	await __mfSeedLocalShared(__mfReadyDeferredSeedKeys).catch(__mfRejectInit);
	const __mfLazyShareLoads = /* @__PURE__ */ new Map();
	__mfResolveState.loadLazyShares = async (names) => {
		const requested = new Set(names);
		for (const batch of __mfMaterializedShareBatches) await Promise.all(batch.filter((pkg) => requested.has(pkg)).map((pkg) => {
			const share = usedShared[pkg];
			if (!share || !share.lazy || !__mfIsRuntimeOnlySharePending(pkg)) return;
			let load = __mfLazyShareLoads.get(pkg);
			if (!load) {
				load = __mfBridgeExternalSharedProvider(pkg, share, shared[pkg], initialShared[pkg], void 0).then(() => __mfIsRuntimeOnlySharePending(pkg) ? __mfResolveImportFalseShared(pkg, share) : void 0);
				load.catch(() => __mfLazyShareLoads.delete(pkg));
				__mfLazyShareLoads.set(pkg, load);
			}
			return load;
		}));
	};
	initResolve(initRes);
	return initRes;
}
async function getExposes(moduleName) {
	const exposesMap = await getExposesMap();
	if (!(moduleName in exposesMap)) throw new Error(`[Module Federation] Module ${moduleName} does not exist in container.`);
	if (__mfLateBridgeShared) await __mfLateBridgeShared();
	if (__mfModuleCache.pendingShareLoads) await Promise.all(__mfModuleCache.pendingShareLoads);
	return exposesMap[moduleName]().then((res) => () => res);
}
//#endregion
export { getExposes as get, init };

if (typeof document !== 'undefined' && document.head) {
  try {
    for (const __mfWarmupPath of ["assets/_virtual_mf-localSharedImportMap___mfe_internal__robot_mf_2_vs__mf_owner__1-DZEWI2-R.js","assets/vite-preload-helper-DETvjeQE.js","assets/dist-Ck7iKM_T.js","assets/utils-CjGoR2nh.js"]) {
      const __mfWarmupLink = document.createElement('link');
      __mfWarmupLink.rel = 'modulepreload';
      __mfWarmupLink.crossOrigin = '';
      __mfWarmupLink.href = new URL(__mfWarmupPath, import.meta.url).href;
      document.head.appendChild(__mfWarmupLink);
    }
  } catch (__mfWarmupError) {}
}
