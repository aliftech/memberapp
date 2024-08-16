'use client';
import React from 'react';

interface ToastSuccessProps {
  value: string;
}

const ToastSuccess: React.FC<ToastSuccessProps> = ({value}) => {
  return (
    <div className="fixed top-4 right-4 w-full md:w-1/3 bg-green-100 text-green-600 p-4 rounded-lg shadow-lg flex items-center z-50">
        <svg
            className="w-6 h-6 mr-2 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
            />
        </svg>
        <p className="leading-normal">{value}</p>
    </div>
  )
}

export default ToastSuccess