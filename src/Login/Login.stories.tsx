import type { Meta, StoryObj } from '@storybook/react';
import { Login } from './Login';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Login> = {
    title: 'Forms/Login',
    component: Login,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    decorators: [
        (Story) => (
            <BrowserRouter>
                <div className="w-full">
                    <Story />
                </div>
            </BrowserRouter>
        )
    ],
    argTypes: {
        layout: {
            options: ['default', 'compact'],
            control: 'select',
            description: 'Layout variant'
        },
        registerLink: {
            control: 'text',
            description: 'URL para registro'
        },
        forgotPasswordLink: {
            control: 'text',
            description: 'URL para recuperar contraseña'
        }
    }
};

export default meta;
type Story = StoryObj<typeof Login>;

export const Default: Story = {
    args: {
        layout: 'default',
        registerLink: '/register',
        forgotPasswordLink: '/forgot-password',
        onSubmit: (email: string, password: string) => {
            console.log('Login submitted:', { email, password });
        }
    }
};
