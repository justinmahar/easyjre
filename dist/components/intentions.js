"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALL_OPTIONS = exports.MANUAL_MODULES = exports.CHOOSE_JDK_MODULES = exports.STANDARD_JAVA_SE = void 0;
exports.STANDARD_JAVA_SE = {
    name: 'standard-java-se',
    display: 'I just want a lightweight (~40-60 MB) standard Java SE JRE for a particular JDK. Quick and painless.',
};
exports.CHOOSE_JDK_MODULES = {
    name: 'choose-jdk-modules',
    display: 'Let me pick and choose from a list which JDK modules are included in my JRE.',
};
exports.MANUAL_MODULES = {
    name: 'manual-modules',
    display: "I know exactly which modules I need to include in my JRE. I don't need to see a list.",
};
exports.ALL_OPTIONS = {
    name: 'all-options',
    display: 'I want total control. Show me all the options!',
};
const INTENTIONS = [exports.STANDARD_JAVA_SE, exports.CHOOSE_JDK_MODULES, exports.MANUAL_MODULES, exports.ALL_OPTIONS];
exports.default = INTENTIONS;
