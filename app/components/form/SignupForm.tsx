'use client';
import React, { useState } from 'react';
import ToastError from '../toast/ToastError';
import ToastSuccess from '../toast/ToastSuccess';

interface SignupStatus {
    status: boolean,
    message: string,
}

const SignupForm: React.FC = () => {
    const [step, setStep] = useState(1);

    // Field signup
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [membership, setMembership] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [message, setMessage] = useState('');

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

    const SignupProcess = async (): Promise<SignupStatus> => {
        const response = await fetch('http://localhost:8000/signup', {
            method: 'POST',
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                membership_type: membership,
                password: password,
                confirm_password: confirmPass
            }),
            headers: {
                'Content-type': 'application/json',
            },
        });
      
        const data: SignupStatus = await response.json();
        return data;
    };

    const handleSignup = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const response = await SignupProcess();
    
        if (response.status == false) {
            setShowError(true);
            setShowSuccess(false);
            setMessage(response.message);
            setTimeout(() => {
                setShowError(false);
                setMessage('');
          }, 3000);
        } else {
            setShowError(false);
            setShowSuccess(true);
            setMessage(response.message);
            setFirstname('');
            setLastname('');
            setEmail('');
            setMembership('');
            setPassword('');
            setConfirmPass('');
            setTimeout(() => {
                setShowSuccess(false);
                setMessage('');
          }, 3000);
        }
      };

    const nextStep = () => {
        if (step < 2) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <div>
            <form className="space-y-4">
                <header className="mb-3 text-2xl font-bold">Create your profile</header>

                {step === 1 && (
                    <>
                        <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                            <input
                                type="text"
                                placeholder="Firstname"
                                className="my-3 w-full border-none bg-transparent outline-none focus:outline-none dark:text-gray-800"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                        </div>
                        <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                            <input
                                type="text"
                                placeholder="Lastname"
                                className="my-3 w-full border-none bg-transparent outline-none focus:outline-none dark:text-gray-800"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                            />
                        </div>
                        <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                            <input
                                type="email"
                                placeholder="Email"
                                className="my-3 w-full border-none bg-transparent outline-none focus:outline-none dark:text-gray-800"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </>
                )}

                {step === 2 && (
                    <>
                        <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                            <select
                                className="my-3 w-full border-none bg-transparent outline-none focus:outline-none dark:text-gray-800"
                                value={membership}
                                onChange={(e) => setMembership(e.target.value)}
                            >
                                <option selected disabled>Select Membership</option>
                                <option value="A">Membership A</option>
                                <option value="B">Membership B</option>
                                <option value="C">Membership C</option>
                            </select>
                        </div>
                        <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                            <input
                                type="password"
                                placeholder="Password"
                                className="my-3 w-full border-none bg-transparent outline-none focus:outline-none dark:text-gray-800"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="my-3 w-full border-none bg-transparent outline-none focus:outline-none dark:text-gray-800"
                                value={confirmPass}
                                onChange={(e) => setConfirmPass(e.target.value)}
                            />
                        </div>
                    </>
                )}

                <div className="flex justify-between">
                    {step > 1 && (
                        <button className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400" onClick={handleSignup}>CREATE ACCOUNT</button>
                    )}
                    {step < 2 && (
                        <button onClick={nextStep} className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">NEXT</button>
                    )}
                </div>
            </form>
            {showError && <ToastError value={message} />}
            {showSuccess && <ToastSuccess value={message} />}

            {/* Footer */}
            <div className="mt-8 text-sm text-gray-400">
                Already have an account ?
                <a href={"/"} className="font-medium text-gray-500"> Signin </a> here.
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
                    <a href="#" className="font-medium text-gray-500">Terms</a> and <a href="#" className="font-medium text-gray-500">Privacy Policy</a>.
                </div>
            </footer>
        </div>
    );
}

export default SignupForm;
