import React from 'react'
import Login from './pages/Login'

function App() {
    return (
        <Login />
    )
}
export default App

// src/components/organisms/Header/Header.tsx
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-lg font-semibold">Brand</div>
                <nav className="space-x-4">
                    <a className="text-sm text-slate-600 hover:text-slate-900">Home</a>
                    <a className="text-sm text-slate-600 hover:text-slate-900">Docs</a>
                    <a className="text-sm text-slate-600 hover:text-slate-900">Contact</a>
                </nav>
            </div>
        </header>
    );
};

// src/components/organisms/Footer/Footer.tsx
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-50 border-t p-4">
            <div className="max-w-7xl mx-auto text-center text-sm text-slate-500">
                © {new Date().getFullYear()} Company. All rights reserved.
            </div>
        </footer>
    );
};

// src/components/layouts/MainLayout.tsx
import React from 'react';
import { Header } from '../organisms/Header/Header';
import { Footer } from '../organisms/Footer/Footer';

type Props = {
    children: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            <Header />
            <main className="px-4 py-6">
                <div className="max-w-7xl mx-auto">{children}</div>
            </main>
            <Footer />
        </div>
    );
};

// src/pages/Login.tsx
import React from 'react';

const Login: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" required className="block w-full p-2 border rounded-md focus:ring focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" required className="block w-full p-2 border rounded-md focus:ring focus:ring-opacity-50" />
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300">
                            Login
                        </button>
                    </div>
                </form>
                <div className="text-sm text-center">
                    <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
