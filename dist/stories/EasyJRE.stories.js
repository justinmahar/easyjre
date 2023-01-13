"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasyJREStory = void 0;
/*
 * More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 * More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * More on args: https://storybook.js.org/docs/react/writing-stories/args
 * More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 */
const react_1 = __importDefault(require("react"));
const EasyJRE_1 = require("../components/EasyJRE");
exports.default = {
    title: 'Tools',
    component: EasyJRE_1.EasyJRE,
};
const Template = (args) => react_1.default.createElement(EasyJRE_1.EasyJRE, Object.assign({}, args));
exports.EasyJREStory = Template.bind({});
exports.EasyJREStory.args = {};
exports.EasyJREStory.story = {
    name: 'EasyJRE',
};
