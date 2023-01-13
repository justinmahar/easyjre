"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const STARTS_WITH_EXCLUSION = 'jdk.';
function parseJDKModules(modulesList) {
    const modules = modulesList.split(/\r?\n/);
    const strippedModules = [];
    let jdkVersion = null;
    modules.forEach((value, index) => {
        value = value.trim();
        if (value !== '' && value.indexOf('@') >= 0) {
            jdkVersion = value.slice(value.indexOf('@') + 1);
            value = value.slice(0, value.indexOf('@'));
            strippedModules.push(value);
        }
    });
    const excludedModules = strippedModules.filter((element) => {
        return element.startsWith(STARTS_WITH_EXCLUSION);
    });
    excludedModules.sort();
    const includedModules = strippedModules.filter((element) => {
        return !element.startsWith(STARTS_WITH_EXCLUSION);
    });
    includedModules.sort();
    return [jdkVersion, includedModules, excludedModules];
}
exports.default = parseJDKModules;
