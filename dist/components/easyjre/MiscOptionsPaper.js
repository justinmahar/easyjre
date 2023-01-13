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
const React = __importStar(require("react"));
function MiscOptionsPaper(props) {
    return (React.createElement(material_1.Paper, { style: {
            padding: '2rem',
            marginTop: '1rem',
            marginBottom: '1rem',
        } },
        React.createElement(material_1.Typography, { variant: "h6", style: { marginBottom: '1rem' } }, "Other Options"),
        React.createElement(material_1.Typography, { variant: "subtitle2" }, "Compression"),
        React.createElement("p", null, "Choose the level of compression. ZIP compression offers a significant reduction in size with a small hit to class loading performance."),
        React.createElement("div", null,
            React.createElement(material_1.FormControl, { fullWidth: true },
                React.createElement(material_1.InputLabel, { htmlFor: "age-simple", style: { paddingLeft: 2, paddingRight: 2, background: 'white' } }, "Compression Level"),
                React.createElement(material_1.Select, { value: props.compressionLevel, onChange: (e) => props.setCompressionLevel(parseInt(e.target.value + '')), inputProps: {
                        name: 'age',
                        id: 'age-simple',
                    } },
                    React.createElement(material_1.MenuItem, { value: 0 }, "No compression"),
                    React.createElement(material_1.MenuItem, { value: 1 }, "Constant string sharing"),
                    React.createElement(material_1.MenuItem, { value: 2 }, "ZIP")))),
        React.createElement(material_1.Divider, { style: { marginTop: '2rem', marginBottom: '1rem' } }),
        React.createElement(material_1.Typography, { variant: "subtitle2", style: { marginTop: '1.5rem' } }, "Header Files"),
        React.createElement("p", null, "Whether or not to exclude header files from the JRE."),
        React.createElement("div", null,
            React.createElement(material_1.FormControlLabel, { control: React.createElement(material_1.Checkbox, { checked: props.headerFilesExcluded, onChange: (e) => props.setHeaderFilesExcluded(e.target.checked) }), label: "Exclude Header Files" })),
        React.createElement(material_1.Divider, { style: { marginTop: '1rem', marginBottom: '1rem' } }),
        React.createElement(material_1.Typography, { variant: "subtitle2", style: { marginTop: '1.5rem' } }, "Man Pages"),
        React.createElement("p", null, "Whether or not to exclude man pages from the JRE."),
        React.createElement("div", null,
            React.createElement(material_1.FormControlLabel, { control: React.createElement(material_1.Checkbox, { checked: props.manPagesExcluded, onChange: (e) => props.setManPagesExcluded(e.target.checked) }), label: "Exclude Man Pages" })),
        React.createElement(material_1.Divider, { style: { marginTop: '1rem', marginBottom: '1rem' } }),
        React.createElement(material_1.Typography, { variant: "subtitle2", style: { marginTop: '1.5rem' } }, "Bind Services"),
        React.createElement("p", null, "Whether or not to link service provider modules and their dependencies."),
        React.createElement("div", null,
            React.createElement(material_1.FormControlLabel, { control: React.createElement(material_1.Checkbox, { checked: props.bindServicesEnabled, onChange: (e) => props.setBindServicesEnabled(e.target.checked) }), label: "Bind Services" }))));
}
exports.default = MiscOptionsPaper;
