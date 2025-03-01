import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from './Stack';
import { ComponentProps } from 'react';

interface ExampleComponentProps extends ComponentProps<typeof Stack> {
    childrenQuantity?: number
}

const meta: Meta<ExampleComponentProps> = {
    title: 'Components/Stack',
    component: Stack,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        spacing: {
            control: 'number',
            defaultValue: 4
        },
        childrenQuantity: {
            control: 'number'
        }
    }
}

export default meta;
type Story = StoryObj<ExampleComponentProps>;

const ExampleComponent: Story = {
    render: ({ childrenQuantity, ... props }) => (
        <Stack {... props}>
            {[... Array(childrenQuantity).keys()].map(n => (
                <div className='flex items-center justify-center text-3xl w-32 h-32 bg-indigo-600 text-white font-bold'>{n + 1}</div>
            ))}
        </Stack>
    )
}

export const Default: Story = {
    ... ExampleComponent,
    args: {
      childrenQuantity: 2,
      spacing: 4,
      col: false
    },
};