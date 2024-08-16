'use client';
import React, { useState } from 'react';
import ToastError from '../toast/ToastError';
import ToastSuccess from '../toast/ToastSuccess';
import { redirect } from 'next/navigation';

interface SigninStatus {
    status: boolean;
    success: boolean;
    error?: boolean;
    message: string;
    data?: {
        access_token: string;
        refresh_token: string;
    };
}

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const access_token = localStorage.getItem('access_token');
  if (access_token) redirect('/dashboard');

  const SigninProcess = async (): Promise<SigninStatus> => {
    const response = await fetch('http://localhost:8000/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: SigninStatus = await response.json();
    return data;
  };

  const HandleSignin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const response = await SigninProcess();

    if (response.status == false) {
      setShowError(true);
      setShowSuccess(false);
      setMessage(response.message);
      setEmail('');
      setPassword('');
      setTimeout(() => {
        setShowError(false);
        setMessage('');
      }, 3000);
    } else {
      setShowError(false);
      setShowSuccess(true);
      setMessage(response.message);
      localStorage.setItem('access_token', response.data?.access_token || '');
      localStorage.setItem('refresh_token', response.data?.refresh_token || '');
      setEmail('');
      setPassword('');
      setTimeout(() => {
        setMessage('');
        setShowSuccess(false);
        redirect('/dashboard'); // Redirect to dashboard or any desired route
      }, 3000);
    }
  };

  return (
    <div>
        <form className="space-y-4">
            <div>
                <label className="mb-2  dark:text-gray-400 text-lg">Email</label>
                <input
                    className="border p-3 dark:bg-gray-200 dark:text-gray-800  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
                    
            <div>
                <label className="mb-2 dark:text-gray-400 text-lg">Password</label>
                <input
                    id="password"
                    className="border p-3 shadow-md dark:bg-gray-200 dark:text-gray-800  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            
            <a
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                href="#"
            >
                <span
                    className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                    Forget your password?
                </span>
            </a>
            
            <button
                className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                onClick={HandleSignin}
            >
                Signin
            </button>
        </form>      
        {showError && <ToastError value={message} />}
        {showSuccess && <ToastSuccess value={message} />}
    </div>
  );
};

export default SigninForm;