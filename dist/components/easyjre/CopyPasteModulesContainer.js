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
const notistack_1 = require("notistack");
const platforms_1 = require("../platforms");
const jdk_modules_1 = __importDefault(require("../jdk-modules"));
function CopyPasteModulesContainer(props) {
    const { enqueueSnackbar } = (0, notistack_1.useSnackbar)();
    const [pastedModulesList, setPastedModulesList] = React.useState('');
    const [clipboardErrorOccurred, setClipboardErrorOccurred] = React.useState(false);
    const handleClickCopyListModulesCommand = () => {
        const commandTextarea = document.getElementById('list-modules-command');
        commandTextarea.select();
        document.execCommand('copy');
        enqueueSnackbar('✅ Copied!');
    };
    const navigatorClipboardSupported = !clipboardErrorOccurred && !!navigator.clipboard && !!navigator.clipboard.readText;
    const parsePastedList = (text) => {
        const [jdkVersion, includedModules, excludedModules] = (0, jdk_modules_1.default)(text);
        if (!!jdkVersion) {
            props.setJdkVersion(jdkVersion);
            props.setIncludedJDKModules(includedModules);
            props.setExcludedJDKModules(excludedModules);
            enqueueSnackbar('✅ Added ' + (includedModules.length + excludedModules.length) + ' modules for JDK ' + jdkVersion);
        }
        else {
            enqueueSnackbar('❌️ Not a valid list of JDK modules.');
        }
    };
    const handleClickPaste = () => {
        if (navigatorClipboardSupported) {
            navigator.clipboard
                .readText()
                .then((text) => {
                parsePastedList(text);
            })
                .catch((err) => {
                // This can happen if the user denies clipboard permissions:
                console.error('Could not copy text: ', err);
                setClipboardErrorOccurred(true);
                enqueueSnackbar('❌️ Something went wrong. Paste into the text input.');
            });
        }
        else {
            alert("Sorry, your browser doesn't support pasting.\nSpecifically, there is no navigator.clipboard support.\n\nTry using Safari or Google Chrome.");
        }
    };
    const pasteKeystroke = props.platform.name === platforms_1.MAC_OS.name ? '⌘+V' : 'Ctrl+V';
    return (React.createElement(material_1.Container, { maxWidth: props.maxWidth, style: { marginTop: '1rem', marginBottom: '1rem' } },
        React.createElement(material_1.Paper, { style: { padding: '2rem' } },
            React.createElement(material_1.Typography, { variant: "h6" }, "Copy your JDK module list:"),
            React.createElement("p", null, "Copy a list of the available Java modules by running the following command in the JDK bin folder:"),
            React.createElement("div", null,
                React.createElement(material_1.TextField, { variant: "filled", label: props.platform.display + ' command:', type: "text", id: "list-modules-command", value: props.platform.listModulesCommand, fullWidth: true, helperText: "Be sure to run this in the Java JDK bin folder.", onChange: (e) => e.preventDefault(), onClick: (e) => {
                        if (!!e.target.select) {
                            e.target.select();
                        }
                    }, InputProps: {
                        startAdornment: (React.createElement(material_1.InputAdornment, { position: "start" },
                            React.createElement(material_1.Icon, null, props.platform.icon))),
                        endAdornment: (React.createElement(material_1.InputAdornment, { position: "end" },
                            React.createElement(material_1.IconButton, { "aria-label": "Toggle password visibility", onClick: () => {
                                    handleClickCopyListModulesCommand();
                                } },
                                React.createElement(material_1.Icon, null, "assignment")))),
                    } })),
            React.createElement(material_1.Typography, { variant: "h6", style: { marginTop: '1.5rem' } }, "Paste your JDK module list:"),
            React.createElement("p", { style: { marginTop: '1rem', marginBottom: '1rem' } }, "After running the above command, paste the list of Java modules below:"),
            React.createElement(material_1.Box, { style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '0.3rem',
                } },
                !props.jdkVersion && (React.createElement(React.Fragment, null,
                    navigatorClipboardSupported && (React.createElement(material_1.Button, { variant: "contained", color: "primary", onClick: () => handleClickPaste() }, "Paste")),
                    !navigatorClipboardSupported && (React.createElement(material_1.Box, { style: { display: 'flex', alignItems: 'center' } },
                        React.createElement(material_1.TextField, { variant: "filled", label: "JDK Modules List", type: "text", multiline: true, rows: 1, id: "list-modules-pasted", value: pastedModulesList, 
                            //fullWidth
                            helperText: `Paste your modules here using ${pasteKeystroke}.`, onChange: (e) => {
                                if (e.target.value.length === 1) {
                                    setPastedModulesList('');
                                    enqueueSnackbar(`❌️ Paste your modules here using ${pasteKeystroke}.`);
                                }
                                else {
                                    parsePastedList(e.target.value);
                                }
                            } }))),
                    React.createElement(material_1.Chip, { icon: React.createElement(material_1.Icon, null, "not_interested"), label: "No JDK Modules" }))),
                props.jdkVersion && (React.createElement(React.Fragment, null,
                    React.createElement(material_1.Chip, { icon: React.createElement(material_1.Icon, null, "check"), label: 'JDK ' + props.jdkVersion, onDelete: () => {
                            props.setJdkVersion(null);
                            props.setIncludedJDKModules([]);
                            props.setExcludedJDKModules([]);
                        }, color: "primary" }),
                    React.createElement(material_1.Chip, { icon: React.createElement(material_1.Icon, null, "playlist_add_check"), label: props.includedJDKModules.length + props.excludedJDKModules.length + ' JDK Modules', color: "secondary", style: { marginRight: '.5rem' } })))))));
}
exports.default = CopyPasteModulesContainer;
