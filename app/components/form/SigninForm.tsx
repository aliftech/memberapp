'use client';
import React, { useState } from 'react';
import ToastError from '../toast/ToastError';
import ToastSuccess from '../toast/ToastSuccess';
import { redirect } from 'next/navigation';

interface SigninStatus {
    status: boolean;
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
          <header className="mb-3 text-2xl font-bold">Signin</header>
          <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
            <input type="email" placeholder="Email or username" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none dark:text-gray-800" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="flex w-full items-center space-x-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
            <input type="password" placeholder="Password" className="my-3 w-full border-none bg-transparent outline-none dark:text-gray-800" value={password} onChange={(e) => setPassword(e.target.value)} />
            <a href="#" className="font-medium text-gray-400 hover:text-gray-500">FORGOT?</a>
          </div>
          <button className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400" onClick={HandleSignin}>SIGNIN</button>
        </form>    
        {showError && <ToastError value={message} />}
        {showSuccess && <ToastSuccess value={message} />}
    </div>
  );
};

export default SigninForm;