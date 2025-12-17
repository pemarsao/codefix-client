'use client';
import { InputField } from "@/app/components/InputField";

export default function ForgotPasswordForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        alert('Forgot Password form submitted');
        e.preventDefault();
    }

    return <form className="flex w-full max-w-md rounded flex-col space-y-4 bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl font-bold">Forgot Password</h1>
            <p className="text-sm text-gray-500">
                Enter your email to reset your password.
            </p>
        </div>
        <div className="mt-8 flex flex-col space-y-4">
            <InputField
                id="email"
                type="email"
                label="Email"
                placeholder="Enter your email" />
        </div>
        <div className="flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <button type="submit"
                className="flex flex-full items-center rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600 text-sm font-semibold sm:w-auto sm:px-8 justify-center">
                Reset Password
            </button>
        </div>
    </form>;
}