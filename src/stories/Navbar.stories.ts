import type { Meta, StoryObj } from '@storybook/react';
import Navbar from "../shared/ui/molecules/navbar";
import '../shared/ui/molecules/navbar.css'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Navbar',
  component: Navbar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;


const items=[
  {"url": "#catalog", "text": "Catalog"},
  {"url": "#about", "text": "About us"},
  {"url": "#product-selection", "text": "Product selection"},
  {"url": "#our-team", "text": "Our team"},
  {"url": "#shipping-payment", "text": "Shipping and payment"},
  {"url": "#contacts", "text": "Contacts"}
]

export const Horizontal:Story = {
  args:{
    positionVertical: false,
    items:items
  }
}
export const Vertical:Story = {
  args:{
    positionVertical: true,
    items:items
  }
}
