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
const Button_1 = __importDefault(require("@mui/material/Button"));
const Card_1 = __importDefault(require("@mui/material/Card"));
const CardHeader_1 = __importDefault(require("@mui/material/CardHeader"));
const Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
const Divider_1 = __importDefault(require("@mui/material/Divider"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const List_1 = __importDefault(require("@mui/material/List"));
const ListItem_1 = __importDefault(require("@mui/material/ListItem"));
const ListItemIcon_1 = __importDefault(require("@mui/material/ListItemIcon"));
const ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
const React = __importStar(require("react"));
const intentions_1 = require("../intentions");
function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
}
function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}
function union(a, b) {
    return [...a, ...not(b, a)];
}
function TransferModulesPaper(props) {
    // const classes = useStyles();
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = [props.left, props.setLeft];
    const [right, setRight] = [props.right, props.setRight];
    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    const numberOfChecked = (items) => intersection(checked, items).length;
    const handleToggleAll = (items) => () => {
        if (numberOfChecked(items) === items.length) {
            setChecked(not(checked, items));
        }
        else {
            setChecked(union(checked, items));
        }
    };
    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked).sort());
        setLeft(not(left, leftChecked).sort());
        setChecked(not(checked, leftChecked));
    };
    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked).sort());
        setRight(not(right, rightChecked).sort());
        setChecked(not(checked, rightChecked));
    };
    const customList = (title, items) => (React.createElement(Card_1.default, null,
        React.createElement(CardHeader_1.default, { sx: { px: 2, py: 1 }, avatar: React.createElement(Checkbox_1.default, { onClick: handleToggleAll(items), checked: numberOfChecked(items) === items.length && items.length !== 0, indeterminate: numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0, disabled: items.length === 0, inputProps: {
                    'aria-label': 'all items selected',
                } }), title: title, subheader: `${numberOfChecked(items)}/${items.length} selected` }),
        React.createElement(Divider_1.default, null),
        React.createElement(List_1.default, { sx: {
                width: 200,
                height: 230,
                bgcolor: 'background.paper',
                overflow: 'auto',
            }, dense: true, component: "div", role: "list" },
            items.map((value) => {
                const labelId = `transfer-list-all-item-${value}-label`;
                return (React.createElement(ListItem_1.default, { key: value, role: "listitem", button: true, onClick: handleToggle(value) },
                    React.createElement(ListItemIcon_1.default, null,
                        React.createElement(Checkbox_1.default, { checked: checked.indexOf(value) !== -1, tabIndex: -1, disableRipple: true, inputProps: {
                                'aria-labelledby': labelId,
                            } })),
                    React.createElement(ListItemText_1.default, { id: labelId, primary: value })));
            }),
            React.createElement(ListItem_1.default, null))));
    const hasModules = props.right.length + props.left.length > 0;
    return (React.createElement(material_1.Paper, { style: {
            padding: '2rem',
            marginTop: '1rem',
            marginBottom: '1rem',
        } },
        React.createElement(material_1.Typography, { variant: "h6", style: { marginBottom: '1rem' } }, "JDK Modules"),
        !hasModules && (React.createElement(material_1.Box, { style: { display: 'flex', alignItems: 'flex-start' } },
            React.createElement(material_1.Box, { mt: 1.5, mr: 2 },
                React.createElement(material_1.Icon, { color: "secondary" }, "warning")),
            React.createElement("p", null,
                "Paste your JDK modules above to customize which modules are included in the JRE.",
                ' ',
                props.intention !== intentions_1.CHOOSE_JDK_MODULES && (React.createElement("span", null, "Ignore this if you'd like to add them manually below."))))),
        hasModules && (React.createElement(React.Fragment, null,
            React.createElement("p", null,
                "The JDK comes with many modules which contain the JDK core classes. Below, all modules that aren't prefixed with ",
                React.createElement("code", null, "jdk."),
                " have been included in the JRE. This will get you up and running quickly without needing to use an entire JDK. From there, you can pick and choose the JDK modules your project depends on."),
            React.createElement("p", null,
                "Feel free to include or exclude any modules you might or might not need. For instance, you can use the",
                ' ',
                React.createElement("code", null, "jdeps"),
                " command on your Java classes to narrow down which modules you actually need to include."),
            props.intention !== intentions_1.CHOOSE_JDK_MODULES && (React.createElement("p", null, "See the Manually Specifed Modules section below for adding additional modules (such as custom ones, or manually specifying JDK ones) to the JRE.")),
            React.createElement(Grid_1.default, { container: true, spacing: 2, justifyContent: "center", alignItems: "center" },
                React.createElement(Grid_1.default, { item: true }, customList('Excluded From JRE', left)),
                React.createElement(Grid_1.default, { item: true },
                    React.createElement(Grid_1.default, { container: true, direction: "column", alignItems: "center" },
                        React.createElement(Button_1.default, { sx: { my: 0.5 }, variant: "outlined", size: "small", onClick: handleCheckedRight, disabled: leftChecked.length === 0, "aria-label": "move selected right" },
                            React.createElement(material_1.Icon, null, "chevron_right")),
                        React.createElement(Button_1.default, { sx: { my: 0.5 }, variant: "outlined", size: "small", onClick: handleCheckedLeft, disabled: rightChecked.length === 0, "aria-label": "move selected left" },
                            React.createElement(material_1.Icon, null, "chevron_left")))),
                React.createElement(Grid_1.default, { item: true }, customList('Included In JRE', right)))))));
}
exports.default = TransferModulesPaper;
