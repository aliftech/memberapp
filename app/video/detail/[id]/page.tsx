'use client';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState, useCallback } from 'react';
import ToastError from '../../../components/toast/ToastError';
import Navbar from '@/app/components/navbar/Navbar';

interface VideoDetail {
    id: number;
    title: string;
    source: string;
    thumbnail: string;
}

interface ApiResponse {
    data: VideoDetail;
    status: boolean;
    message: string;
}

const VideoDetailPage: React.FC = () => {
    const { id } = useParams(); // Use useParams to get the route parameters
    const router = useRouter();

    const [video, setVideo] = useState<VideoDetail | null>(null);
    const [showError, setShowError] = useState(false);
    const [message, setMessage] = useState('');

    const fetchVideo = useCallback(async () => {
        try {
            const access_token = localStorage.getItem('access_token');
            if (!access_token) {
                router.push('/'); // Redirect to home if no access token
                return;
            }

            const response = await fetch(`http://localhost:8000/video/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`,
                },
            });

            const result: ApiResponse = await response.json();
            
            if (result.status) {
                setVideo(result.data);
            } else {
                if (response.status === 403) {
                    fetchRefreshToken();
                } else {
                    setShowError(true);
                    setMessage(result.message);
                }
            }
        } catch (error) {
            console.error('Failed to fetch video:', error);
            setShowError(true);
            setMessage('Failed to fetch video details.');
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
            fetchVideo(); // Call fetchVideo after refreshing token
        } else {
            setShowError(true);
            setMessage(result.message);
        }
    };

    useEffect(() => {
        if (id) {
            fetchVideo(); // Fetch video details when ID is available
        }
    }, [id, fetchVideo]);

    if (!video) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="bg-gray-100">
                {showError && <ToastError value={message} />}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">{video.title}</h1>
                        <div className="relative aspect-w-16 aspect-h-9 mb-6">
                            <iframe
                                src={video.source}
                                className="w-full aspect-video rounded-lg"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={video.title}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoDetailPage;
