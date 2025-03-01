import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from './Stack';
import { ComponentProps } from 'react';

interface ExampleComponentProps extends ComponentProps<typeof Stack> {
    childrenQuantity?: number
}

const meta: Meta<ExampleComponentProps> = {
    title: 'Layout/Stack',
    component: Stack,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    },
    decorators: [
        (Story) => (
            <div className="w-full p-4">
                <Story />
            </div>
        )
    ],
    argTypes: {
        spacing: {
            control: 'number',
            defaultValue: 4
        },
        childrenQuantity: {
            control: 'number'
        },
        justify: {
            type: 'string',
            options: ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch', 'baseline', 'normal'],
            control: 'select',
            description: 'justify-content'
        },
        contentAlign: {
            type: 'string',
            options: ['start', 'end', 'center', 'baseline', 'stretch'],
            control: 'select',
            description: 'content-items'
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
      childrenQuantity: 4,
      spacing: 4,
      col: false,
      justify: 'between',
      contentAlign: 'center'
    },
};