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
function HeroContainer(props) {
    return (React.createElement("div", { className: "easyjre-header", style: { marginBottom: '1rem' } },
        React.createElement(material_1.Container, { maxWidth: props.maxWidth, style: {
                textAlign: 'center',
                marginTop: '1rem',
            } },
            React.createElement(material_1.Typography, { component: "h1", variant: "h2", align: "center", color: "textPrimary", gutterBottom: true }, "EasyJRE"),
            React.createElement(material_1.Typography, { variant: "h6", align: "center", color: "textSecondary", paragraph: true },
                "Use EasyJRE to create an OpenJDK JRE easily with ",
                React.createElement("code", null, "jlink"),
                "!",
                ' ',
                React.createElement("span", { style: { color: '#000000' } }, "\uD83D\uDD25")))));
}
exports.default = HeroContainer;
