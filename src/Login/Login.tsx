import { FC, forwardRef, HTMLAttributes } from "react";
import { cn } from "../utils/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "react-router-dom";

const loginForm = cva('', {
    variants: {
        layout: {
            default: 'mt-5 md:mt-0 shadow-lg px-5 py-7 rounded-xl bg-white',
            compact: 'mt-5 md:mt-0 shadow-lg px-3 py-5 text-sm rounded-xl bg-white'
        }
    },
    defaultVariants: {
        layout: 'default'
    }
});

export interface LoginFormProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSubmit'>, VariantProps<typeof loginForm> {
    onSubmit: (email: string, password: string) => void;
    registerLink?: string;
    forgotPasswordLink?: string;
}

export const Login: FC<LoginFormProps> = forwardRef<HTMLDivElement, LoginFormProps>(
    ({ onSubmit, className, layout, registerLink = "/register", forgotPasswordLink = "/forgot-password", ...props }, ref) => {
        return (
            <div className={cn(loginForm({ layout, className }))} {...props} ref={ref}>
                <div className='mt-5 md:mt-0 px-5 py-7 rounded-xl bg-white'>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.currentTarget;
                        onSubmit(
                            (form.elements.namedItem('email') as HTMLInputElement).value,
                            (form.elements.namedItem('password') as HTMLInputElement).value
                        );
                    }}>
                        <div className="relative group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="border-0 w-full px-4 pt-6 pb-2 text-sm peer bg-gray-50 rounded-xl outline-none"
                            />
                            <label
                                htmlFor="email"
                                className="text-gray-400 hover:cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-4 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-0 peer-valid:-translate-y-0"
                            >
                                Email
                            </label>
                        </div>

                        <div className="relative group mt-5">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                className="border-0 w-full px-4 pt-5 pb-2 text-sm peer bg-gray-50 rounded-xl outline-none"
                            />
                            <label
                                htmlFor="password"
                                className="text-gray-400 hover:cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-4 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-0 peer-valid:-translate-y-0"
                            >
                                Contraseña
                            </label>
                        </div>

                        <input
                            type="submit"
                            value="Iniciar sesión"
                            className="bg-indigo-600 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-6 hover:cursor-pointer hover:bg-indigo-700 transition-colors md:w-auto"
                        />
                    </form>

                    <nav className="mt-10 text-gray-500 lg:flex lg:justify-between lg:gap-5">
                        <Link
                            to={registerLink}
                            className='block text-center mt-5 md:mt-0'
                        >
                            ¿No tienes una cuenta? Regístrate
                        </Link>
                        <Link
                            to={forgotPasswordLink}
                            className='block text-center mt-3 md:mt-0'
                        >
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </nav>
                </div>
            </div>
        );
    }
);
