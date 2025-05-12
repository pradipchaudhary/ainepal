// components/YoutubeLanding.tsx
import React from "react";

const YoutubeLanding = () => {
    return (
        <section className="bg-white min-h-screen py-20 px-6 text-gray-800">
            <div className="max-w-5xl mx-auto text-center">
                {/* Hero Section */}
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Learn AI & ML in Nepali 🇳🇵
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                    Watch AINepal’s beginner-friendly tutorials on AI, Machine Learning, and Python — all explained in Nepali for our local community.
                </p>
                <a
                    href="https://youtube.com/@ainepalofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
                >
                    🎯 Subscribe on YouTube
                </a>

                {/* YouTube Video Embed */}
                <div className="rounded-xl overflow-hidden shadow-lg aspect-video mt-16">
                    <iframe
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                        title="AINepal Featured Video"
                        className="w-full h-full"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    );
};

export default YoutubeLanding;
