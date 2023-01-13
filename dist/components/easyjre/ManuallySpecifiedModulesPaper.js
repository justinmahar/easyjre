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
function ManuallySpecifiedModulesPaper(props) {
    return (React.createElement(material_1.Paper, { style: {
            padding: '2rem',
            marginTop: '1rem',
            marginBottom: '1rem',
        } },
        React.createElement(material_1.Typography, { variant: "h6", style: { marginBottom: '1rem' } }, "Manually Specifed Modules"),
        React.createElement("p", null, "Specify any modules you'd like added here, such as your custom ones. Comma-separate the values and don't use spaces."),
        React.createElement("p", null,
            "You can specify JDK modules (such as ",
            React.createElement("code", null, "java.se"),
            ") here manually if you'd like, too."),
        React.createElement("div", null,
            React.createElement(material_1.TextField, { variant: "standard", label: "Manually Specified Modules", type: "text", fullWidth: true, value: props.manuallySpecifiedModules, helperText: "Separate modules by commas. They should be found in one or more of your module paths (see previous section)", onClick: (e) => {
                    if (!!e.target.select) {
                        e.target.select();
                    }
                }, onChange: (e) => {
                    props.setManuallySpecifiedModules(e.target.value);
                }, placeholder: "my.mod,other.mod,etc", InputProps: {
                    endAdornment: (React.createElement(material_1.InputAdornment, { position: "end" },
                        React.createElement(material_1.IconButton, { "aria-label": "Clear", onClick: () => {
                                props.setManuallySpecifiedModules('');
                            } },
                            React.createElement(material_1.Icon, null, "close")))),
                } }))));
}
exports.default = ManuallySpecifiedModulesPaper;
