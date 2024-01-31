import React from "react";
import Skeleton from "react-loading-skeleton";

interface CardSkeletonProps {
    cards: number;
}

const CardSkeleton: React.FC<CardSkeletonProps> = () => {
    return (
        <div className="w-full h-screen bg-gray-950 grid place-items-center">
            <div className="w-full max-w-md bg-gray-800 mx-auto rounded-lg p-4">
                <div className="flex gap-2">
                    <div className="w-16 h-16 shrink-0 bg-gray-600 rounded-full animate-pulse"></div>
                    <div className="w-full space-y-2">
                        <div className="w-11/12 h-7 bg-gray-600 rounded-2xl animate-pulse"></div>
                        <div className="w-full h-7 bg-gray-600 rounded-2xl animate-pulse"></div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 pt-4">
                    <div className="w-3/5 h-7 bg-gray-600 rounded-2xl animate-pulse animate-bounce delay-200ms" ></div>
                    <div className="w-5/6 h-7 bg-gray-600 rounded-2xl animate-pulse" ></div>
                    <div className="w-3/4 h-7 bg-gray-600 rounded-2xl animate-pulse" ></div>
                    <div className="w-full h-7 bg-gray-600 rounded-2xl animate-pulse" ></div>
                    <div className="w-3/5 h-7 bg-gray-600 rounded-2xl animate-pulse" ></div>
                    <div className="w-3/4 h-7 bg-gray-600 rounded-2xl animate-pulse"></div>
                    <div className="w-full h-7 bg-gray-600 rounded-2xl animate-pulse"></div>
                    <div className="w-11/12 h-7 bg-gray-600 rounded-2xl animate-pulse"></div>
                </div>
            </div>
            <div className="min-h-screen flex justify-center items-center">
        <div className="w-full max-w-screen-lg p-8 bg-gray-800 rounded-lg shadow-lg">
            
            <div className="mb-6 animate-pulse">
                <div className="h-4 bg-gray-700 rounded w-1/4 mb-2"></div>
                <div className="h-8 bg-gray-700 rounded w-3/4"></div>
            </div>
            <div className="space-y-4">
                <div className="h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded"></div>
            </div>
        </div>
    </div>
        </div>
    )

};

export default CardSkeleton;
