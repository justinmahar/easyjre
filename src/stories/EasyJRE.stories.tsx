import type { Meta, StoryObj } from '@storybook/react';
import { EasyJRE } from '../components/EasyJRE';

// === Setup ===
const StoryComponent = EasyJRE; // <-- Set to your component
const meta: Meta<typeof StoryComponent> = {
  title: 'Tools', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const EasyJREStory: Story = {
  name: 'EasyJRE',
};
