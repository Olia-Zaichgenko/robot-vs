import { a as setGlobalFederationConstructor, i as getGlobalFederationConstructor, o as setGlobalFederationInstance, r as ModuleFederation, t as getGlobalFederationInstance } from "./utils-CjGoR2nh.js";
//#region node_modules/@module-federation/runtime/dist/index.js
function createInstance(options) {
	const instance = new ((getGlobalFederationConstructor()) || ModuleFederation)({
		id: `${options.name}@${options.version || Date.now()}`,
		...options
	});
	setGlobalFederationInstance(instance);
	return instance;
}
var FederationInstance = null;
function init(options) {
	const instance = getGlobalFederationInstance(options.name, options.version);
	const normalizedOptions = {
		...options,
		id: options.id || ""
	};
	if (!instance) {
		FederationInstance = createInstance(normalizedOptions);
		return FederationInstance;
	} else {
		instance.initOptions(normalizedOptions);
		if (!FederationInstance) FederationInstance = instance;
		return instance;
	}
}
setGlobalFederationConstructor(ModuleFederation);
//#endregion
export { init as t };
