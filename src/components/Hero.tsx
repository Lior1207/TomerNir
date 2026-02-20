'use client';

import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';

export default function Hero() {
    const { t } = useLanguage();

    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-bg.png"
                    alt="Oud instrument"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1209]/70 via-[#1a1209]/50 to-[#1a1209]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1209]/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Decorative line */}
                <div className="flex items-center justify-center gap-4 mb-8 animate-fadeIn">
                    <span className="h-px w-12 bg-amber-400/50" />
                    <span className="text-amber-400 text-sm tracking-[0.3em] uppercase font-light">
                        {t.heroSubtitle}
                    </span>
                    <span className="h-px w-12 bg-amber-400/50" />
                </div>

                {/* Name */}
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-amber-50 mb-6 animate-slideUp">
                    {t.heroTitle}
                </h1>

                {/* Tagline */}
                <p className="text-lg sm:text-xl text-amber-200/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-slideUp animation-delay-200">
                    {t.heroTagline}
                </p>

                {/* CTA */}
                <button
                    onClick={scrollToContact}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:scale-105 animate-slideUp animation-delay-400"
                >
                    <span>{t.heroCta}</span>
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-amber-600/30 rounded-full group-hover:bg-amber-600/50 transition-colors">
                        <ChevronDown className="w-4 h-4 rotate-[-90deg] rtl:rotate-90" />
                    </span>
                </button>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 text-amber-400/60" />
            </div>
        </section>
    );
}
