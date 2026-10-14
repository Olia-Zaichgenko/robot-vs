import { t as __vitePreload } from "./vite-preload-helper-DETvjeQE.js";
import { t as share } from "./helpers-3EccTNgN.js";
//#region \0virtual:mf:__mfe_internal__robot_mf_2_vs__mf_owner__1__H_A_I__hostAutoInit__H_A_I__.js
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
var hostInitPromise;
async function initHost() {
	if (!hostInitPromise) hostInitPromise = (async () => {
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
		const runtime = await (await __vitePreload(() => import("../remoteEntry.js"), [])).init();
		const { usedShared } = await __vitePreload(async () => {
			const { usedShared } = await import("./_virtual_mf-localSharedImportMap___mfe_internal__robot_mf_2_vs__mf_owner__1-DZEWI2-R.js");
			return { usedShared };
		}, []);
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
		const __mfHasAlternativeSharedVersion = (pkg, share) => __mfGetShareScopeNames(share).some((scopeName) => Object.keys(runtime.shareScopeMap?.[scopeName]?.[pkg] || {}).some((version) => version !== share.version));
		const __mfHostInitShareBatches = [["react"], ["react-dom"]];
		const __mfOriginalProviderKey = Symbol("mf.originalSharedProvider");
		const __mfResolveShareHook = { emit: (params) => params };
		const __mfGetShareScopeNames = (share) => Array.isArray(share.scope) ? share.scope : [share.scope || "default"];
		const __mfCreateProviderSelectionVersions = (versions, strategy) => {
			if (strategy !== "version-first") return versions;
			const selectionVersions = {};
			for (const [version, provider] of Object.entries(versions)) selectionVersions[version] = Object.assign({}, provider, { [__mfOriginalProviderKey]: provider });
			return selectionVersions;
		};
		const __mfSelectSharedProvider = (versions, pkg, share$1, strategy) => {
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
		const __mfHasUsableProvider = (versions, pkg, share, scopeName) => {
			if (share.shareConfig?.singleton) return Object.values(versions || {}).some((provider) => provider?.shareConfig?.import !== false);
			return Boolean(__mfSelectSharedProvider(versions, pkg, {
				...share,
				scope: [scopeName]
			}, "version-first"));
		};
		for (const __mfHostInitShareBatch of __mfHostInitShareBatches) await Promise.all(__mfHostInitShareBatch.map(async (pkg) => {
			const share = usedShared[pkg];
			if (!share || share.materialize === false && !share.lazy) return;
			if (share.treeShaking) return;
			const cacheDescriptor = __mfGetSharedCacheDescriptor(pkg, share.shareConfig?.singleton, share.version, share.scope);
			if (__mfReadSharedCache(__mfModuleCache.share, cacheDescriptor) !== void 0 && (!share.shareConfig?.singleton && __mfReadSharedCacheOwner(__mfModuleCache.share, cacheDescriptor) === "robot-vs" || share.shareConfig?.singleton && !__mfHasAlternativeSharedVersion(pkg, share))) return;
			if (share.shareConfig?.import === false) {
				const __mfScopeNames = __mfGetShareScopeNames(share);
				const __mfNeedsSiblingProvider = (scopeName) => !__mfHasUsableProvider(runtime.shareScopeMap?.[scopeName]?.[pkg], pkg, share, scopeName);
				if (__mfScopeNames.some(__mfNeedsSiblingProvider)) {
					if (!runtime.__mfKeepAdoptedProviders) {
						runtime.__mfKeepAdoptedProviders = true;
						runtime.sharedHandler?.hooks?.lifecycle?.afterRegisterShare?.on?.((args) => {
							const { shared, previousShared, registeredShared } = args || {};
							const versions = runtime.shareScopeMap?.[args.scope]?.[args.pkgName];
							if (!shared || !versions) return;
							if (shared.shareConfig?.import !== false) {
								if (registeredShared !== shared && registeredShared?.shareConfig?.import === false && !registeredShared.loaded && versions[shared.version] === registeredShared) versions[shared.version] = shared;
								return;
							}
							if (registeredShared !== shared || !previousShared || previousShared.shareConfig?.import === false) return;
							if (versions[shared.version] === shared) versions[shared.version] = previousShared;
						});
					}
					for (const instance of globalThis.__FEDERATION__?.__INSTANCES__ || []) for (const scopeName of __mfScopeNames) {
						const versions = instance?.shareScopeMap?.[scopeName]?.[pkg];
						if (!__mfHasUsableProvider(versions, pkg, share, scopeName)) continue;
						if (!__mfNeedsSiblingProvider(scopeName)) continue;
						const target = (runtime.shareScopeMap[scopeName] ||= {})[pkg] ||= {};
						for (const [version, provider] of Object.entries(versions)) {
							if (provider?.shareConfig?.import === false) continue;
							if (target[version] && target[version].shareConfig?.import !== false) continue;
							target[version] = provider;
						}
					}
				}
				if (__mfScopeNames.every(__mfNeedsSiblingProvider)) return;
			}
			await runtime.loadShare(pkg, { customShareInfo: { shareConfig: share.shareConfig } }).then(async (factory) => {
				if (factory === false) return;
				const mod = typeof factory === "function" ? factory() : factory;
				let resolved = __mfNormalizeRuntimeShare(await Promise.resolve(mod));
				__mfWriteSharedCache(__mfModuleCache.share, cacheDescriptor, resolved, "robot-vs");
			});
		}));
		for (const [pkg, share] of Object.entries(usedShared)) {
			if (!share.lib || share.treeShaking || share.shareConfig?.import === false) continue;
			const cacheDescriptor = __mfGetSharedCacheDescriptor(pkg, share.shareConfig?.singleton, share.version, share.scope);
			if (__mfReadSharedCacheOwner(__mfModuleCache.share, cacheDescriptor) !== "robot-vs") continue;
			for (const scopeName of Array.isArray(share.scope) ? share.scope : [share.scope || "default"]) {
				const versions = runtime.shareScopeMap?.[scopeName]?.[pkg];
				const provider = versions?.[share.version];
				if (!provider || provider.get !== share.get || provider.lib) continue;
				if (Object.values(versions).some((other) => other !== provider && (other?.lib || other?.loaded))) continue;
				provider.lib = share.lib;
				provider.loaded = true;
			}
		}
		return runtime;
	})();
	return hostInitPromise;
}
hostInitPromise = initHost();
//#endregion
export { hostInitPromise, initHost };
