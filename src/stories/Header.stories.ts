import type { Meta, StoryObj } from '@storybook/react';
import '../App.css'
import Header from "../shared/ui/organisms/header/header";
import '../shared/ui/organisms/header/header.css'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Static:Story = {
  args:{
    position: 'static',
    background:'#000'
  }
}
export const Sticky:Story = {
  args:{
    position:'sticky',
    background:'red'
  }
}