import type { Meta, StoryObj } from '@storybook/react';
import Logo from "../shared/ui/atoms/logo/logo";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Logo',
  component: Logo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Logo1:Story = {
  args:{
    alt:'logo1',
    src:'/images/crewman1.jpg'
  }
}
export const Logo2:Story = {
  args:{
    alt:'logo2',
    src:'/images/crewman2.jpg'
  }
}
