import type { Meta, StoryObj } from '@storybook/react';
import '../App.css'
import '../shared/ui/atoms/button/button.css'
import Price from "../shared/ui/atoms/price/price";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Price',
  component: Price,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Price>;

export default meta;
type Story = StoryObj<typeof meta>;

export const USD:Story = {
  args:{
    value: 100,
    currency: 'USD'
  }
}

export const EUR:Story = {
  args:{
    value: 200,
    currency: 'EUR'
  }
}

export const GBP:Story = {
  args:{
    value: 300,
    currency: 'GBP'
  }
}