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
const intentions_1 = __importDefault(require("../intentions"));
function IntentionContainer(props) {
    const handleListItemClick = (_event, index) => {
        props.setIntention(intentions_1.default[index]);
    };
    const listItems = intentions_1.default.map((intention, index) => {
        return (React.createElement(material_1.ListItem, { key: index, role: undefined, dense: true, button: true, onClick: (event) => handleListItemClick(event, index) },
            React.createElement(material_1.ListItemIcon, null,
                React.createElement(material_1.Radio, { edge: "start", checked: props.intention.name === intention.name, tabIndex: -1, disableRipple: true })),
            React.createElement(material_1.ListItemText, { primary: intention.display })));
    });
    return (React.createElement(material_1.Container, { maxWidth: props.maxWidth, style: { marginTop: '1rem', marginBottom: '1rem' } },
        React.createElement(material_1.Paper, { style: { padding: '2rem' } },
            React.createElement(material_1.Typography, { variant: "h4", style: { marginBottom: '1rem' } }, "What do you need?"),
            React.createElement(material_1.List, null, listItems))));
}
exports.default = IntentionContainer;
