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
function JdkBinPathPaper(props) {
    return (React.createElement(material_1.Paper, { style: {
            padding: '2rem',
            marginTop: '1rem',
            marginBottom: '1rem',
        } },
        React.createElement(material_1.Typography, { variant: "h6", style: { marginBottom: '1rem' } }, "JDK Bin Path"),
        React.createElement("p", null,
            "Specify the path to the ",
            React.createElement("code", null, "bin"),
            " folder of your JDK. You can use an environment variable here, but it's safer to execute ",
            React.createElement("code", null, "jlink"),
            " directly from the JDK ",
            React.createElement("code", null, "bin"),
            " to prevent using an incorrect JDK that might be on your ",
            React.createElement("code", null, "PATH"),
            "."),
        React.createElement("p", null,
            "The safest way is to leave this as ",
            React.createElement("code", null, "."),
            ", navigate to the ",
            React.createElement("code", null, "bin"),
            " directory, and run the",
            ' ',
            React.createElement("code", null, "jlink"),
            " command copied from below. If you change this, be sure to also change the Module Path above."),
        React.createElement("div", null,
            React.createElement(material_1.TextField, { variant: "standard", label: "JDK Bin Path", type: "text", value: props.jdkBinPath, fullWidth: true, helperText: "Can be relative or absolute.", onClick: (e) => {
                    if (!!e.target.select) {
                        e.target.select();
                    }
                }, onChange: (e) => {
                    props.setJdkBinPath(e.target.value);
                }, placeholder: "Enter the path to the bin folder", InputProps: {
                    endAdornment: (React.createElement(material_1.InputAdornment, { position: "end" },
                        React.createElement(material_1.IconButton, { "aria-label": "Clear", onClick: () => {
                                props.setJdkBinPath('');
                            } },
                            React.createElement(material_1.Icon, null, "close")))),
                } }))));
}
exports.default = JdkBinPathPaper;
