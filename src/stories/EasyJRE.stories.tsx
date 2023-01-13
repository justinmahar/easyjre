/*
 * More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 * More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * More on args: https://storybook.js.org/docs/react/writing-stories/args
 * More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EasyJRE } from '../components/EasyJRE';

export default {
  title: 'Tools',
  component: EasyJRE,
} as ComponentMeta<typeof EasyJRE>;

const Template: ComponentStory<typeof EasyJRE> = (args) => <EasyJRE {...args} />;

export const EasyJREStory = Template.bind({});
EasyJREStory.args = {};
EasyJREStory.story = {
  name: 'EasyJRE',
};
