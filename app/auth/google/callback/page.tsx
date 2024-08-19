'use client';
import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';

const Callback = () => {
  useEffect(() => {
    const getAuthToken = async (code: string) => {
      try {
        const response = await fetch('http://localhost:8000/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        });

        const data = await response.json();

        if (data.status === true) {
          localStorage.setItem('access_token', data.data.access_token);
          localStorage.setItem('refresh_token', data.data.refresh_token);
          
          // Perform client-side redirect
          window.location.href = '/article';
        } else {
          console.error('Error:', data.message);
          window.location.href = '/'; // Redirect to sign-in on error
        }
      } catch (error) {
        console.error('Error during token exchange:', error);
        window.location.href = '/'; // Redirect to sign-in on exception
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      getAuthToken(code);
    } else {
      window.location.href = '/'; // Redirect to sign-in if no code is found
    }
  }, []);

  return <div>Loading...</div>;
};

export default Callback;
