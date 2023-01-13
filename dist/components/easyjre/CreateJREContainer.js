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
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const notistack_1 = require("notistack");
const React = __importStar(require("react"));
const platforms_1 = require("../platforms");
function CreateJREContainer(props) {
    const { enqueueSnackbar } = (0, notistack_1.useSnackbar)();
    const includedModulesString = props.includedJDKModules.join(',');
    const optionAdditionalModules = props.manuallySpecifiedModules.trim();
    let moduleString = '';
    if (includedModulesString !== '' || optionAdditionalModules !== '') {
        moduleString = ' --add-modules ';
        if (includedModulesString !== '') {
            moduleString += includedModulesString;
        }
        if (includedModulesString !== '' && optionAdditionalModules !== '') {
            moduleString += ',';
        }
        if (optionAdditionalModules !== '') {
            moduleString += optionAdditionalModules;
        }
    }
    let jreName = 'jre';
    const jdkVersion = props.jdkVersion;
    if (!!jdkVersion) {
        jreName += '-' + jdkVersion;
    }
    const jreFolderName = jreName.toLowerCase().replace(/[^a-z0-9.]/g, '-');
    const outputCommandString = '--output ' + jreFolderName;
    // Options
    const optionCompressionType = props.compressionLevel;
    const optionExcludeHeaderFiles = props.headerFilesExcluded;
    const optionExcludeManPages = props.manPagesExcluded;
    const optionBindServices = props.bindServicesEnabled;
    const optionJdkBinPath = props.jdkBinPath.trim();
    const optionModulePath = props.modulePath.trim();
    const compressionOptionString = ' --compress=' + optionCompressionType;
    let excludeHeaderFilesOptionString = '';
    if (optionExcludeHeaderFiles) {
        excludeHeaderFilesOptionString = ' --no-header-files';
    }
    let excludeManPagesOptionString = '';
    if (optionExcludeManPages) {
        excludeManPagesOptionString = ' --no-man-pages';
    }
    let bindServicesOptionString = '';
    if (optionBindServices) {
        bindServicesOptionString = ' --bind-services';
    }
    let modulePathOptionString = '';
    if (optionModulePath !== '') {
        modulePathOptionString = ' --module-path ' + optionModulePath;
    }
    const slash = props.platform.name === platforms_1.WINDOWS.name ? '\\' : '/';
    const jlinkCommand = optionJdkBinPath +
        (optionJdkBinPath ? slash : '') +
        'jlink ' +
        outputCommandString +
        compressionOptionString +
        excludeHeaderFilesOptionString +
        excludeManPagesOptionString +
        bindServicesOptionString +
        modulePathOptionString +
        moduleString;
    const handleClickCopyJlinkCommand = () => {
        const commandTextarea = document.getElementById('jlink-command');
        commandTextarea.select();
        document.execCommand('copy');
        enqueueSnackbar('✅ Copied!');
    };
    return (React.createElement(material_1.Container, { maxWidth: props.maxWidth, style: { marginTop: '1rem', marginBottom: '1rem' } },
        React.createElement(material_1.Typography, { component: "h2", variant: "h4", align: "center", color: "textPrimary", gutterBottom: true, style: { marginTop: '2rem' } }, "Create Your JRE"),
        React.createElement(material_1.Paper, { style: { padding: '2rem' } },
            React.createElement(material_1.Typography, { variant: "h6", style: { marginBottom: '1rem' } },
                "Run ",
                React.createElement("code", null, "jlink"),
                " To Create Your JRE"),
            !moduleString && (React.createElement(material_1.Box, { style: { display: 'flex', alignItems: 'flex-start' } },
                React.createElement(material_1.Box, { mt: 1.5, mr: 2 },
                    React.createElement(material_1.Icon, { color: "secondary" }, "warning")),
                React.createElement("p", null, "You have no modules. Add some modules using the sections above."))),
            moduleString && (React.createElement(React.Fragment, null,
                React.createElement("p", null,
                    "Copy and run the ",
                    React.createElement("code", null, "jlink"),
                    " command below",
                    props.jdkBinPath === '.' && (React.createElement("span", null,
                        ' ',
                        "in the ",
                        React.createElement("code", null, "bin"),
                        " directory of the JDK")),
                    ":"),
                React.createElement("div", null,
                    React.createElement(material_1.TextField, { variant: "filled", label: props.platform.display + ' command:', type: "text", id: "jlink-command", multiline: true, value: jlinkCommand, fullWidth: true, helperText: (props.jdkBinPath === '.' ? 'Run this in bin. ' : '') +
                            'This creates your ' +
                            jreFolderName +
                            ' directory. Be sure you have the proper write permissions!', onChange: (e) => e.preventDefault(), onClick: (e) => {
                            if (!!e.target.select) {
                                e.target.select();
                            }
                        }, InputProps: {
                            startAdornment: (React.createElement(material_1.InputAdornment, { position: "start" },
                                React.createElement(material_1.Icon, null, props.platform.icon))),
                            endAdornment: (React.createElement(material_1.InputAdornment, { position: "end" },
                                React.createElement(material_1.IconButton, { "aria-label": "Toggle password visibility", onClick: () => {
                                        handleClickCopyJlinkCommand();
                                    } },
                                    React.createElement(material_1.Icon, null, "assignment")))),
                        } })),
                React.createElement(material_1.Box, { style: { display: 'flex', justifyContent: 'flex-end' } },
                    React.createElement(material_1.Button, { variant: "contained", color: "primary", onClick: () => {
                            handleClickCopyJlinkCommand();
                        } }, "Copy")),
                React.createElement(material_1.Typography, { variant: "h5", align: "center", color: "textPrimary", gutterBottom: true, style: { marginTop: '2rem' } },
                    "Your JRE will be created in the ",
                    React.createElement("code", null, jreFolderName),
                    " directory. Enjoy! \uD83D\uDD25"))))));
}
exports.default = CreateJREContainer;
