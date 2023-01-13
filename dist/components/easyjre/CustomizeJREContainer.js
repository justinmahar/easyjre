"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const React = __importStar(require("react"));
const intentions_1 = require("../intentions");
const JDKBinDirectoryPaper_1 = __importDefault(require("./JDKBinDirectoryPaper"));
const MiscOptionsPaper_1 = __importDefault(require("./MiscOptionsPaper"));
const ManuallySpecifiedModulesPaper_1 = __importDefault(require("./ManuallySpecifiedModulesPaper"));
const ModulePathPaper_1 = __importDefault(require("./ModulePathPaper"));
const TransferModulesPaper_1 = __importDefault(require("./TransferModulesPaper"));
function CustomizeJREContainer(props) {
    return (React.createElement(material_1.Container, { maxWidth: props.maxWidth, style: { marginTop: '1rem', marginBottom: '1rem' } },
        React.createElement(material_1.Typography, { component: "h2", variant: "h4", align: "center", color: "textPrimary", gutterBottom: true, style: { marginTop: '2rem' } }, "Customize Your JRE"),
        props.intention !== intentions_1.MANUAL_MODULES && (React.createElement(TransferModulesPaper_1.default, { intention: props.intention, right: props.includedJDKModules, setRight: props.setIncludedJDKModules, left: props.excludedJDKModules, setLeft: props.setExcludedJDKModules })),
        props.intention !== intentions_1.CHOOSE_JDK_MODULES && (React.createElement(React.Fragment, null,
            React.createElement(ModulePathPaper_1.default, { modulePath: props.modulePath, setModulePath: props.setModulePath }),
            React.createElement(ManuallySpecifiedModulesPaper_1.default, { manuallySpecifiedModules: props.manuallySpecifiedModules, setManuallySpecifiedModules: props.setManuallySpecifiedModules }))),
        props.intention !== intentions_1.CHOOSE_JDK_MODULES && props.intention !== intentions_1.MANUAL_MODULES && (React.createElement(React.Fragment, null,
            React.createElement(JDKBinDirectoryPaper_1.default, { jdkBinPath: props.jdkBinPath, setJdkBinPath: props.setJdkBinPath }),
            React.createElement(MiscOptionsPaper_1.default, { compressionLevel: props.compressionLevel, setCompressionLevel: props.setCompressionLevel, headerFilesExcluded: props.headerFilesExcluded, setHeaderFilesExcluded: props.setHeaderFilesExcluded, manPagesExcluded: props.manPagesExcluded, setManPagesExcluded: props.setManPagesExcluded, bindServicesEnabled: props.bindServicesEnabled, setBindServicesEnabled: props.setBindServicesEnabled })))));
}
exports.default = CustomizeJREContainer;
