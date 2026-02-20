'use client';

import { Instagram, Play, ExternalLink, Youtube, Music2, Users } from 'lucide-react';
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
                    <p className="text-amber-200/70 text-lg max-w-2xl mx-auto">
                        {t.videoSubtitle}
                    </p>
                </div>

                {/* YouTube Video */}
                <div className="relative rounded-2xl overflow-hidden border border-amber-400/20 shadow-2xl shadow-amber-900/30 mb-8">
                    <div className="aspect-video">
                        <iframe
                            src="https://www.youtube.com/embed/S4wL_opv7RA?autoplay=1&mute=1&loop=1&playlist=S4wL_opv7RA"
                            title="MUZAIKA Performance"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
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
