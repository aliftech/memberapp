'use client';
import React from 'react';

interface ToastErrorProps {
  value: string;
}

const ToastError: React.FC<ToastErrorProps> = ({ value }) => {
    return (
        <div className="fixed top-4 right-4 w-full md:w-1/3 bg-red-100 text-red-600 p-4 rounded-lg shadow-lg flex items-center z-50">
            <svg
                className="w-6 h-6 mr-2 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01m-6.938 4h13.856c1.054 0 1.938-.816 1.938-1.826V6.826C20.856 5.816 19.97 5 18.916 5H6.084C5.03 5 4.144 5.816 4.144 6.826v13.348C4.144 20.184 5.03 21 6.084 21z"
                />
            </svg>
            <p className="leading-normal">{value}</p>
        </div>
  );
}

export default ToastError;