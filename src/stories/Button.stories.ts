import type { Meta, StoryObj } from '@storybook/react';
import '../App.css'
import '../shared/ui/atoms/button.css'
import Button from '../shared/ui/atoms/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary:Story = {
  args:{
    children: 'Primary Button',
    variant: 'primary',
  }
}
export const Secondary:Story = {
  args:{
    children: 'Secondary Button',
    variant: 'secondary',
  }
}

export const Outlined:Story = {
  args:{
    children: 'Outlined Button',
    variant: 'primary',
    outline: true,
  }
}