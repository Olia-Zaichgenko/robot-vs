import { t as __vitePreload } from "./vite-preload-helper-DETvjeQE.js";
import "./dist-Ck7iKM_T.js";
//#region \0virtual:mf-localSharedImportMap:__mfe_internal__robot_mf_2_vs__mf_owner__1
var __mfNormalizeRuntimeShare = (mod) => {
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
var __mfGetCachedReactFamily = (keys, reactKeys, localVersion, requiredExport) => {
	const cache = globalThis.__mf_module_cache__?.share;
	const react = reactKeys.map((key) => cache?.[key]).find((value) => value !== void 0);
	const isOlder = (version) => {
		const actual = String(version || "").split(/[^0-9]+/).map(Number);
		const expected = String(localVersion || "").split(/[^0-9]+/).map(Number);
		for (let index = 0; index < Math.max(actual.length, expected.length); index++) {
			if ((actual[index] || 0) < (expected[index] || 0)) return true;
			if ((actual[index] || 0) > (expected[index] || 0)) return false;
		}
		return false;
	};
	if (isOlder(react?.version ?? react?.default?.version)) return void 0;
	for (const key of keys) {
		const cached = cache?.[key];
		if (cached === void 0) continue;
		const cachedVersion = cached?.version ?? cached?.default?.version;
		if (cachedVersion !== void 0 && isOlder(cachedVersion)) continue;
		if (!requiredExport || typeof cached?.[requiredExport] === "function" || typeof cached?.default?.[requiredExport] === "function") {
			const dom = typeof cached?.[requiredExport] === "function" ? cached : cached?.default;
			const internals = dom?.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
			if (!requiredExport || key.endsWith("/client") || !internals) return cached;
			const client = {};
			for (const name of ["createRoot", "hydrateRoot"]) client[name] = (...args) => {
				internals.usingClientEntryPoint = true;
				try {
					return dom[name](...args);
				} finally {
					internals.usingClientEntryPoint = false;
				}
			};
			return {
				...client,
				default: client
			};
		}
	}
};
var importMap = {
	"react": async () => {
		return await __vitePreload(() => import("./_virtual_mf___mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__prebuild__react__prebuild__-Dq_5qiv3.js"), []);
	},
	"react/jsx-runtime": async () => {
		return await __vitePreload(() => import("./_virtual_mf___mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__prebuild__react_mf_1_jsx_mf_2_runtime__prebuild__-SNamXbDq.js"), []);
	},
	"react-dom": async () => {
		return await __vitePreload(() => import("./_virtual_mf___mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__prebuild__react_mf_2_dom__prebuild__-CqjDhuRN.js"), []);
	},
	"react-dom/client": async () => {
		return await __vitePreload(() => import("./_virtual_mf___mfe_internal__robot_mf_2_vs__mf_owner__101785116250416__prebuild__react_mf_2_dom_mf_1_client__prebuild__-BAZd9imy.js"), []);
	}
};
var usedShared = {
	"react": {
		name: "react",
		version: "19.3.0",
		scope: ["default"],
		loaded: false,
		materialize: true,
		eager: false,
		from: "robot-vs",
		canLiveRebind: true,
		get() {
			const share = usedShared["react"];
			if (share.lib) return share.lib;
			if (share.loading) return share.loading;
			share.loading = (async () => {
				try {
					const { "react": pkgDynamicImport } = importMap;
					const exportModule = __mfNormalizeRuntimeShare({ ...await pkgDynamicImport() });
					if (exportModule.__esModule !== true) Object.defineProperty(exportModule, "__esModule", {
						value: true,
						enumerable: false
					});
					share.lib = function() {
						return exportModule;
					};
					share.loaded = true;
					return share.lib;
				} finally {
					share.loading = void 0;
				}
			})();
			return share.loading;
		},
		shareConfig: {
			singleton: true,
			requiredVersion: "^19.1.1",
			strictVersion: false,
			eager: false
		}
	},
	"react/jsx-runtime": {
		name: "react/jsx-runtime",
		version: "19.3.0",
		scope: ["default"],
		loaded: false,
		materialize: true,
		eager: false,
		from: "robot-vs",
		canLiveRebind: true,
		get() {
			const share = usedShared["react/jsx-runtime"];
			if (share.lib) return share.lib;
			if (share.loading) return share.loading;
			const cachedSingleton = __mfGetCachedReactFamily(["default:react/jsx-runtime", "react/jsx-runtime"], ["default:react", "react"], "19.3.0", void 0);
			if (cachedSingleton !== void 0) {
				share.lib = function() {
					return cachedSingleton;
				};
				share.loaded = true;
				return share.lib;
			}
			share.loading = (async () => {
				try {
					const { "react/jsx-runtime": pkgDynamicImport } = importMap;
					const exportModule = __mfNormalizeRuntimeShare({ ...await pkgDynamicImport() });
					if (exportModule.__esModule !== true) Object.defineProperty(exportModule, "__esModule", {
						value: true,
						enumerable: false
					});
					share.lib = function() {
						return exportModule;
					};
					share.loaded = true;
					return share.lib;
				} finally {
					share.loading = void 0;
				}
			})();
			return share.loading;
		},
		shareConfig: {
			singleton: true,
			requiredVersion: "^19.1.1",
			strictVersion: false,
			eager: false
		}
	},
	"react-dom": {
		name: "react-dom",
		version: "19.3.0",
		scope: ["default"],
		loaded: false,
		materialize: true,
		eager: false,
		from: "robot-vs",
		canLiveRebind: true,
		get() {
			const share = usedShared["react-dom"];
			if (share.lib) return share.lib;
			if (share.loading) return share.loading;
			share.loading = (async () => {
				try {
					const { "react-dom": pkgDynamicImport } = importMap;
					const exportModule = __mfNormalizeRuntimeShare({ ...await pkgDynamicImport() });
					if (exportModule.__esModule !== true) Object.defineProperty(exportModule, "__esModule", {
						value: true,
						enumerable: false
					});
					share.lib = function() {
						return exportModule;
					};
					share.loaded = true;
					return share.lib;
				} finally {
					share.loading = void 0;
				}
			})();
			return share.loading;
		},
		shareConfig: {
			singleton: true,
			requiredVersion: "^19.1.1",
			strictVersion: false,
			eager: false
		}
	},
	"react-dom/client": {
		name: "react-dom/client",
		version: "19.3.0",
		scope: ["default"],
		loaded: false,
		materialize: true,
		eager: false,
		from: "robot-vs",
		canLiveRebind: true,
		get() {
			const share = usedShared["react-dom/client"];
			if (share.lib) return share.lib;
			if (share.loading) return share.loading;
			const cachedSingleton = __mfGetCachedReactFamily([
				"default:react-dom/client",
				"react-dom/client",
				"default:react-dom",
				"react-dom"
			], ["default:react", "react"], "19.3.0", "createRoot");
			if (cachedSingleton !== void 0) {
				share.lib = function() {
					return cachedSingleton;
				};
				share.loaded = true;
				return share.lib;
			}
			share.loading = (async () => {
				try {
					const { "react-dom/client": pkgDynamicImport } = importMap;
					const exportModule = __mfNormalizeRuntimeShare({ ...await pkgDynamicImport() });
					if (exportModule.__esModule !== true) Object.defineProperty(exportModule, "__esModule", {
						value: true,
						enumerable: false
					});
					share.lib = function() {
						return exportModule;
					};
					share.loaded = true;
					return share.lib;
				} finally {
					share.loading = void 0;
				}
			})();
			return share.loading;
		},
		shareConfig: {
			singleton: true,
			requiredVersion: "^19.1.1",
			strictVersion: false,
			eager: false
		}
	}
};
var usedRemotes = [];
//#endregion
export { usedRemotes, usedShared };
