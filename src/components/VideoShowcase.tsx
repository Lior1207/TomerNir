'use client';

import { Instagram, Play } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function VideoShowcase() {
    const { t } = useLanguage();

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
                    <p className="text-amber-200/70 text-lg max-w-xl mx-auto">
                        {t.videoSubtitle}
                    </p>
                </div>

                {/* Video embed area */}
                <div className="relative rounded-2xl overflow-hidden border border-amber-400/20 shadow-2xl shadow-amber-900/30 bg-[#0f0a04]">
                    {/* Instagram embed wrapper */}
                    <div className="aspect-video flex items-center justify-center">
                        <div className="text-center p-8">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/25">
                                <Play className="w-8 h-8 text-amber-950 ms-1" fill="currentColor" />
                            </div>
                            <p className="text-amber-200/70 text-lg mb-6">
                                {t.videoSubtitle}
                            </p>
                            <a
                                href="https://www.instagram.com/tomer_nir/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-amber-950 font-bold rounded-full hover:from-amber-400 hover:to-orange-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:scale-105"
                            >
                                <Instagram className="w-5 h-5" />
                                {t.videoFollowCta}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Instagram grid preview */}
                <div className="mt-8 grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                        <a
                            key={i}
                            href="https://www.instagram.com/tomer_nir/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square rounded-xl overflow-hidden border border-amber-400/10 hover:border-amber-400/30 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-800/40 to-amber-900/60 flex items-center justify-center">
                                <Instagram className="w-8 h-8 text-amber-400/50 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
