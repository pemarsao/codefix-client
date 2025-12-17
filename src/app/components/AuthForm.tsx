'use client';

import { InputField } from "./InputField";

type AuthFormProps = {
    formType: 'login' | 'register';
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const AuthForm: React.FC<AuthFormProps> = ({ formType, onSubmit }) => {
    return (
        <form className="flex w-full max-w-md rounded flex-col space-y-4 bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg" onSubmit={onSubmit}>
            <div className="flex flex-col items-center space-y-4">
                <h1 className="text-3xl font-bold">
                    {formType === 'login' ? 'Login' : 'Register'}
                </h1>
                <p className="text-sm text-gray-500">
                    {formType === 'login' ? 'New to the app: ' : 'Already have account: '}
                    <a href="#" className="text-red-500 hover:underline">
                        {formType === 'login' ? 'Register' : 'Login'}
                    </a>
                </p>
            </div>
            <div className="mt-8 flex flex-col space-y-4">
                <InputField
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="Enter your email" />
                <InputField
                    id="password"
                    type="password"
                    label="Password"
                    placeholder="Enter your password" />
                {formType === 'register' && (
                    <InputField
                        id="confirm-password"
                        type="password"
                        label="Confirm Password"
                        placeholder="Confirm your password" />
                )}
            </div>
            <div className="flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <button type="submit"
                    className="flex flex-full items-center rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600 text-sm font-semibold sm:w-auto sm:px-8 justify-center">
                    {formType === 'login' ? 'Login' : 'Register'}
                </button>
            </div>
        </form>
    );
};