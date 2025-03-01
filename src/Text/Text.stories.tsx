import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
    title: 'Components/Text',
    component: Text,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
}

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
      as: 'p',
      children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui architecto culpa delectus, consequuntur quod temporibus corporis nobis ab! Dolorem, harum dignissimos in dolore minima reiciendis illum ipsam rerum quibusdam facilis?'
    },
};