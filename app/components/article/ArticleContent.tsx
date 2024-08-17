'use client';
import React from 'react';

interface ArticleItemProps {
    title: string;
    image: string;
    id: number;
}

const ArticleContent: React.FC<ArticleItemProps> = ({ id, title, image }) => {
    return (
        <div className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img src={image} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-full object-cover object-center" />
            </div>
            <h3 className="mt-6 text-sm text-gray-900">
                <a href={`/article/detail/${id}`}>
                    <span className="absolute inset-0"></span>
                    <p className="text-base font-semibold text-gray-900">{title}</p>
                </a>
            </h3>
        </div>
    )
}

export default ArticleContent;