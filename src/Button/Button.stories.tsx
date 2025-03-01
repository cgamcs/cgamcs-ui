import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    children: {
        description: 'Button label'
    },
    variant: {
        type: 'string',
        options: ['default', 'primary', 'success', 'warning', 'danger'],
        control: 'select',
        description: 'Colors Variants'
    },
    outline: {
        type: 'boolean',
        control: 'boolean',
        description: 'Button Outline'
    },
    size: {
        type: 'string',
        options: ['sm', 'md', 'lg', 'full'],
        control: { type: 'radio' },
        description: 'Button Size'
    },
    rounded: {
        type: 'string',
        options: ['basic', 'sm', 'md', 'lg', 'full'],
        control: { type: 'radio' },
        description: 'Button Border Radius'
    }
  },
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    outline: false
  },
};