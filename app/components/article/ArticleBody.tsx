'use client';
import React, { useEffect, useState, useCallback } from 'react';
import ToastError from '../toast/ToastError';
import { redirect } from 'next/navigation';
import ArticleContent from './ArticleContent';


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
    data: ArticleInterface[];
    status: boolean;
    message: string;
}

interface refreshTokenInterface {
    data: {
        access_token: string;
    };
    status: boolean;
    message: string;
}

const ArticleBody: React.FC = () => {
    const [articles, setArticle] = useState<ArticleInterface[]>([]);
    const [showError, setShowError] = useState(false);
    const [message, setMessage] = useState('');

    const fetchArticles = useCallback(async (token: string) => {
        try {
            const response = await fetch('http://localhost:8000/article', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            const result: ApiResponse = await response.json();

            if (result.status == true) {
                setArticle(result.data);
            } else {
                if (response.status == 403 ) {
                    fetchRefreshToken();
                }
            }
        } catch (error) {
            console.error('Failed to fetch article:', error);
        }
    }, []);

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

        const result: refreshTokenInterface = await response.json();
        if (result.status == true) {
            const access_token = result.data.access_token;
            localStorage.setItem('access_token', access_token);
            fetchArticles(access_token);
        } else {
            setTimeout(() => {
                setShowError(true);
                setMessage(result.message);
            }, 3000);
        }
    }

    useEffect(() => {
        const access_token = localStorage.getItem("access_token");
        if (access_token) {
          fetchArticles(access_token);
        } else {
          redirect('/');
        }
    }, [fetchArticles]);

    return (
        <div className="bg-gray-100">
            {showError && <ToastError value={message} />}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">Articles</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                    {articles.map((article) => (
                        <ArticleContent
                            key={article.id} // Ensure each child has a unique key
                            id={article.id}
                            title={article.title}
                            image={article.image}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleBody;