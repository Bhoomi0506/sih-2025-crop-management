import React from 'react';

const Login: React.FC = () => {
    return (
        <div className="min-h-screen flex bg-slate-50">
            {/* Left column: illustration / marketing (hidden on small screens) */}
            <div className="hidden md:flex w-1/2 bg-gradient-to-br from-green-400 to-blue-500 items-center justify-center p-12">
                <div className="max-w-md text-white">
                    <h2 className="text-4xl font-bold mb-4">Welcome back</h2>
                    <p className="mb-6 opacity-90">Sign in to manage your crops and access personalized recommendations and tools.</p>
                    <img src="/vite.svg" alt="Illustration" className="w-full opacity-80" />
                </div>
            </div>

            {/* Right column: sign-in form */}
            <div className="flex w-full md:w-1/2 items-center justify-center p-8">
                <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                    <h3 className="text-2xl font-semibold mb-4">Sign in to your account</h3>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                            <input id="email" name="email" type="email" required placeholder="you@example.com" className="mt-1 block w-full border border-slate-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
                            <input id="password" name="password" type="password" required placeholder="••••••••" className="mt-1 block w-full border border-slate-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="flex items-center text-sm">
                                <input type="checkbox" className="mr-2" />
                                Remember me
                            </label>
                            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot?</a>
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Sign in</button>
                    </form>
                    <p className="mt-4 text-sm text-center text-slate-500">Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;

