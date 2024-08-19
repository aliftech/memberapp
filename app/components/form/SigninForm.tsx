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
  if (access_token) redirect('/article');

  const handleGoogleLogin = () => {
    const clientId = "793737065816-po2uc6sn5b4jevobif3spvae752uuska.apps.googleusercontent.com"; // Replace with your actual client ID
    const redirectUri = 'http://localhost:3000/auth/google/callback';
    const scope = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
    const responseType = 'code';
    
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&scope=${encodeURIComponent(scope)}&response_type=${responseType}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    
    window.location.href = googleAuthUrl;
  };

  const handleFacebookLogin = () => {
      const clientId = "EAAMVsyfPYC4BO3ZAZBr1qELvLWEmAgZA0ZBt9IwMZCGM0mUzm55E8ZBrkLcArkWCdZCCHygxpgVWminS2QB7bLxrmQvLOCXZASPYQGIEvCfPni5WZBjBXmD6WvC6slMdMRWHKH3GJubyYLlq1wKcCshG5uu3pWsXHAsRH00P9SkJOKB8vSL45sUA1uRitVkmZAmeyVlVgoJEy0IxAmf05ZBdZAlmOCevCeYpXsc4XCzb19pJjbXfbc8ZAAzNuMZCTP8eudxQZDZD"; // Replace with your actual Facebook App ID
      const redirectUri = 'http://localhost:3000/auth/facebook/callback';
      const scope = 'email public_profile'; // Request email and public profile permissions
      const responseType = 'code';

      const facebookAuthUrl = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${clientId}&scope=${encodeURIComponent(scope)}&response_type=${responseType}&redirect_uri=${encodeURIComponent(redirectUri)}`;

      window.location.href = facebookAuthUrl;
  };

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

        <div className="mt-8 text-sm text-gray-400">
            Didn't have account ?
            <a href={"/signup"} className="font-medium text-gray-500"> Signup </a> here.
        </div>

        <div className="flex items-center space-x-4">
            <hr className="w-full border border-gray-300" />
            <div className="font-semibold text-gray-400">OR</div>
            <hr className="w-full border border-gray-300" />
        </div>

        <footer>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={handleFacebookLogin} className="flex items-center justify-center rounded-2xl border-b-2 border-b-gray-300 bg-white px-4 py-2.5 font-bold text-blue-700 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200 text-sm sm:text-base md:text-lg">
                FACEBOOK
              </button>
              <button onClick={handleGoogleLogin} className="flex items-center justify-center rounded-2xl border-b-2 border-b-gray-300 bg-white px-4 py-2.5 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200 text-sm sm:text-base md:text-lg">
                GOOGLE
              </button>
            </div>

            <div className="mt-8 text-sm text-gray-400">
                By signing in to Memberapp, you agree to our
                <a href="#" className="font-medium text-gray-500"> Terms</a> and 
                <a href="#" className="font-medium text-gray-500"> Privacy Policy</a>.
            </div>
        </footer>
    </div>
  );
};

export default SigninForm;