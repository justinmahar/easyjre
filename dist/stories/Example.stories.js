"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.World = exports.Hello = void 0;
/*
 * More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 * More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * More on args: https://storybook.js.org/docs/react/writing-stories/args
 * More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 */
const react_1 = __importDefault(require("react"));
const Example_1 = require("../components/Example");
exports.default = {
    title: 'Stories/Example',
    component: Example_1.Example,
};
const Template = (args) => react_1.default.createElement(Example_1.Example, Object.assign({}, args));
exports.Hello = Template.bind({});
exports.Hello.args = {
    label: 'Hello',
};
exports.World = Template.bind({});
exports.World.args = {
    label: 'World',
};
