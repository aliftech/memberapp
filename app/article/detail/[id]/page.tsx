'use client';
import { useParams, useRouter } from 'next/navigation'; // Import useParams from next/navigation
import React, { useEffect, useState, useCallback } from 'react';
import ToastError from '../../../components/toast/ToastError';
import Navbar from '@/app/components/navbar/Navbar';

interface ArticleInterface {
    id: number;
    title: string;
    content: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}

interface ApiResponse {
    data: ArticleInterface;
    status: boolean;
    message: string;
}

const ArticleDetail: React.FC = () => {
    const { id } = useParams(); // Use useParams to get the route parameters
    const router = useRouter();

    const [article, setArticle] = useState<ArticleInterface | null>(null);
    const [showError, setShowError] = useState(false);
    const [message, setMessage] = useState('');

    const fetchArticle = useCallback(async () => {
        try {
            const access_token = localStorage.getItem('access_token');
            if (!access_token) {
                router.push('/'); // Redirect to home if no access token
                return;
            }

            const response = await fetch(`http://localhost:8000/article/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`,
                },
            });

            const result: ApiResponse = await response.json();
            
            if (result.status) {
                setArticle(result.data);
            } else {
                if (response.status === 403) {
                    fetchRefreshToken();
                } else {
                    setShowError(true);
                    setMessage(result.message);
                }
            }
        } catch (error) {
            console.error('Failed to fetch article:', error);
            setShowError(true);
            setMessage('Failed to fetch article details.');
        }
    }, [id, router]);

    const fetchRefreshToken = async () => {
        const response = await fetch('http://localhost:8000/refresh_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                refresh_token: localStorage.getItem('refresh_token'),
            }),
        });

        const result = await response.json();
        if (result.status) {
            const access_token = result.data.access_token;
            localStorage.setItem('access_token', access_token);
            fetchArticle(); // Call fetchArticle after refreshing token
        } else {
            setShowError(true);
            setMessage(result.message);
        }
    };

    useEffect(() => {
        if (id) {
            fetchArticle(); // Fetch article details when ID is available
        }
    }, [id, fetchArticle]);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="bg-gray-100">
                {showError && <ToastError value={message} />}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <h1 className="mt-6 text-3xl font-bold text-gray-900">{article.title}</h1>
                        <p className="mt-4 text-gray-700">{article.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetail;
