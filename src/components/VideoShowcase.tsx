'use client';

import { useState, useCallback } from 'react';
import { Instagram, Play, ExternalLink, Youtube, Music2, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const videos = [
    { id: 'S4wL_opv7RA', title: 'MUZAIKA Performance' },
    { id: 'O2JnH2HtIMM', title: 'MUZAIKA Performance 2' },
];

export default function VideoShowcase() {
    const { t, locale } = useLanguage();
    const [currentVideo, setCurrentVideo] = useState(0);
    const isRTL = locale === 'he';

    const goToNext = useCallback(() => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, []);

    const goToPrev = useCallback(() => {
        setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    }, []);

    return (
        <section id="video" className="relative py-24 sm:py-32 bg-[#1a1209]">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="h-px w-12 bg-amber-400/50" />
                        <Play className="w-5 h-5 text-amber-400" />
                        <span className="h-px w-12 bg-amber-400/50" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-amber-50 mb-4">
                        {t.videoTitle}
                    </h2>
                    <p className="text-amber-200/70 text-lg max-w-2xl mx-auto">
                        {t.videoSubtitle}
                    </p>
                </div>

                {/* YouTube Video Carousel */}
                <div className="relative mb-8 group">
                    {/* Video */}
                    <div className="relative rounded-2xl overflow-hidden border border-amber-400/20 shadow-2xl shadow-amber-900/30">
                        <div className="aspect-video">
                            <iframe
                                key={videos[currentVideo].id}
                                src={`https://www.youtube.com/embed/${videos[currentVideo].id}?autoplay=1&mute=1&loop=1&playlist=${videos[currentVideo].id}`}
                                title={videos[currentVideo].title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    {videos.length > 1 && (
                        <>
                            <button
                                onClick={isRTL ? goToNext : goToPrev}
                                className="absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-amber-500/90 hover:bg-amber-400 border-2 border-amber-300/50 hover:border-amber-300 flex items-center justify-center text-amber-950 transition-all duration-300 shadow-lg shadow-amber-900/40 hover:scale-110 z-10"
                                aria-label="Previous video"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={isRTL ? goToPrev : goToNext}
                                className="absolute -right-5 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-amber-500/90 hover:bg-amber-400 border-2 border-amber-300/50 hover:border-amber-300 flex items-center justify-center text-amber-950 transition-all duration-300 shadow-lg shadow-amber-900/40 hover:scale-110 z-10"
                                aria-label="Next video"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </>
                    )}

                    {/* Dot Indicators */}
                    {videos.length > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-4">
                            {videos.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentVideo(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentVideo
                                        ? 'bg-amber-400 w-6'
                                        : 'bg-amber-400/30 hover:bg-amber-400/50'
                                        }`}
                                    aria-label={`Go to video ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* MUZAIKA Card */}
                <div className="relative rounded-2xl overflow-hidden border border-amber-400/20 shadow-2xl shadow-amber-900/30 bg-gradient-to-br from-[#1f1508] to-[#0f0a04]">
                    <div className="p-8 sm:p-10">
                        {/* MUZAIKA header */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center">
                                <Users className="w-6 h-6 text-amber-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-amber-50">{t.muzaikaTitle}</h3>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-amber-200/70 text-lg leading-relaxed mb-6 max-w-3xl">
                            {t.muzaikaDesc}
                        </p>

                        {/* Members */}
                        <div className="flex items-start gap-2 mb-8 p-4 rounded-xl bg-amber-400/5 border border-amber-400/10">
                            <Music2 className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                            <p className="text-amber-300/80 text-sm leading-relaxed">
                                {t.muzaikaMembers}
                            </p>
                        </div>

                        {/* CTA buttons */}
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="https://muzaika.co.il/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:scale-105"
                            >
                                <ExternalLink className="w-5 h-5" />
                                {t.muzaikaCta}
                            </a>
                            <a
                                href="https://www.youtube.com/@Muzaika.ensemble"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 font-bold rounded-full border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 hover:scale-105"
                            >
                                <Youtube className="w-5 h-5" />
                                {t.muzaikaYoutubeCta}
                            </a>
                            <a
                                href="https://www.instagram.com/muzaika_band/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 font-bold rounded-full border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 hover:scale-105"
                            >
                                <Instagram className="w-5 h-5" />
                                {t.videoFollowCta}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
