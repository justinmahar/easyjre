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
const React = __importStar(require("react"));
const material_1 = require("@mui/material");
function ModulePathPaper(props) {
    return (React.createElement(material_1.Paper, { style: {
            padding: '2rem',
            marginTop: '1rem',
            marginBottom: '1rem',
        } },
        React.createElement(material_1.Typography, { variant: "h6", style: { marginBottom: '1rem' } }, "Module Path"),
        React.createElement("p", null,
            "The module path is a semicolon-separated list of paths where ",
            React.createElement("code", null, "jlink"),
            " will search for modules. They can be relative or absolute, and can use environment variables."),
        React.createElement("p", null,
            "The standard JDK modules are typically in the JDK directory ",
            React.createElement("code", null, "jmods"),
            ". If you run ",
            React.createElement("code", null, "jlink"),
            ' ',
            "from ",
            React.createElement("code", null, "bin"),
            ", then leaving this as ",
            React.createElement("code", null, "../jmods"),
            " will work just fine. You can optionally add your own module paths after that, separated by a semicolon."),
        React.createElement("div", null,
            React.createElement(material_1.TextField, { variant: "standard", label: "Module Path", type: "text", value: props.modulePath, fullWidth: true, helperText: "Separate paths by semicolons.", placeholder: "Specify a path to your modules", onClick: (e) => {
                    if (!!e.target.select) {
                        e.target.select();
                    }
                }, onChange: (e) => {
                    props.setModulePath(e.target.value);
                }, InputProps: {
                    endAdornment: (React.createElement(material_1.InputAdornment, { position: "end" },
                        React.createElement(material_1.IconButton, { "aria-label": "Clear", onClick: () => {
                                props.setModulePath('');
                            } },
                            React.createElement(material_1.Icon, null, "close")))),
                } }))));
}
exports.default = ModulePathPaper;
