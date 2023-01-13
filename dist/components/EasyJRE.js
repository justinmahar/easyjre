"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasyJRE = void 0;
const material_1 = require("@mui/material");
const CssBaseline_1 = __importDefault(require("@mui/material/CssBaseline"));
const notistack_1 = require("notistack");
const react_1 = __importDefault(require("react"));
require("../css/material-icons.css");
require("../css/roboto.css");
require("./EasyJRE.css");
const ChoosePlatformContainer_1 = __importDefault(require("./easyjre/ChoosePlatformContainer"));
const CopyPasteModulesContainer_1 = __importDefault(require("./easyjre/CopyPasteModulesContainer"));
const CreateJREContainer_1 = __importDefault(require("./easyjre/CreateJREContainer"));
const CustomizeJREContainer_1 = __importDefault(require("./easyjre/CustomizeJREContainer"));
const DownloadJDKContainer_1 = __importDefault(require("./easyjre/DownloadJDKContainer"));
const HeroContainer_1 = __importDefault(require("./easyjre/HeroContainer"));
const IntentionContainer_1 = __importDefault(require("./easyjre/IntentionContainer"));
const intentions_1 = require("./intentions");
const platforms_1 = require("./platforms");
const maxWidth = 'md';
const EasyJRE = () => {
    const [intention, setIntention] = react_1.default.useState(intentions_1.STANDARD_JAVA_SE);
    const [platform, setPlatform] = react_1.default.useState(platforms_1.MAC_OS);
    const [jdkVersion, setJdkVersion] = react_1.default.useState(null);
    const [includedJDKModules, setIncludedJDKModules] = react_1.default.useState([]);
    const [excludedJDKModules, setExcludedJDKModules] = react_1.default.useState([]);
    const [modulePath, setModulePath] = react_1.default.useState('../jmods');
    const [manuallySpecifiedModules, setManuallySpecifiedModules] = react_1.default.useState('');
    const [jdkBinPath, setJdkBinPath] = react_1.default.useState('.');
    const [compressionLevel, setCompressionLevel] = react_1.default.useState(2);
    const [headerFilesExcluded, setHeaderFilesExcluded] = react_1.default.useState(true);
    const [manPagesExcluded, setManPagesExcluded] = react_1.default.useState(true);
    const [bindServicesEnabled, setBindServicesEnabled] = react_1.default.useState(false);
    return (react_1.default.createElement(notistack_1.SnackbarProvider, { autoHideDuration: 2000, anchorOrigin: { horizontal: 'center', vertical: 'top' } },
        react_1.default.createElement("div", { style: { flexGrow: 1 } },
            react_1.default.createElement(CssBaseline_1.default, null),
            react_1.default.createElement("main", null,
                react_1.default.createElement(HeroContainer_1.default, { maxWidth: maxWidth }),
                react_1.default.createElement(IntentionContainer_1.default, { maxWidth: maxWidth, intention: intention, setIntention: setIntention }),
                react_1.default.createElement(DownloadJDKContainer_1.default, { maxWidth: maxWidth }),
                react_1.default.createElement(ChoosePlatformContainer_1.default, { maxWidth: maxWidth, platform: platform, setPlatform: setPlatform }),
                intention !== intentions_1.MANUAL_MODULES && (react_1.default.createElement(CopyPasteModulesContainer_1.default, { maxWidth: maxWidth, platform: platform, jdkVersion: jdkVersion, setJdkVersion: setJdkVersion, includedJDKModules: includedJDKModules, setIncludedJDKModules: setIncludedJDKModules, excludedJDKModules: excludedJDKModules, setExcludedJDKModules: setExcludedJDKModules })),
                intention !== intentions_1.STANDARD_JAVA_SE && (react_1.default.createElement(CustomizeJREContainer_1.default, { maxWidth: maxWidth, intention: intention, jdkVersion: jdkVersion, setJdkVersion: setJdkVersion, includedJDKModules: includedJDKModules, setIncludedJDKModules: setIncludedJDKModules, excludedJDKModules: excludedJDKModules, setExcludedJDKModules: setExcludedJDKModules, modulePath: modulePath, setModulePath: setModulePath, manuallySpecifiedModules: manuallySpecifiedModules, setManuallySpecifiedModules: setManuallySpecifiedModules, jdkBinPath: jdkBinPath, setJdkBinPath: setJdkBinPath, compressionLevel: compressionLevel, setCompressionLevel: setCompressionLevel, headerFilesExcluded: headerFilesExcluded, setHeaderFilesExcluded: setHeaderFilesExcluded, manPagesExcluded: manPagesExcluded, setManPagesExcluded: setManPagesExcluded, bindServicesEnabled: bindServicesEnabled, setBindServicesEnabled: setBindServicesEnabled })),
                react_1.default.createElement(CreateJREContainer_1.default, { maxWidth: maxWidth, platform: platform, jdkVersion: jdkVersion, includedJDKModules: includedJDKModules, modulePath: modulePath, manuallySpecifiedModules: manuallySpecifiedModules, jdkBinPath: jdkBinPath, compressionLevel: compressionLevel, headerFilesExcluded: headerFilesExcluded, manPagesExcluded: manPagesExcluded, bindServicesEnabled: bindServicesEnabled }),
                react_1.default.createElement(material_1.Typography, { className: "easyjre-footer", variant: "h6", align: "center", color: "textSecondary", style: { marginTop: '2.5rem' } },
                    "If this project helped you, please",
                    ' ',
                    react_1.default.createElement(material_1.Link, { href: "https://github.com/justinmahar/easyjre" }, "Star it on GitHub"),
                    " so others can find it. :)")))));
};
exports.EasyJRE = EasyJRE;
