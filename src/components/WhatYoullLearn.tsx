'use client';

import { Guitar, Music2, Mic, PenTool } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function WhatYoullLearn() {
    const { t } = useLanguage();

    const cards = [
        { icon: Guitar, title: t.learnTechniqueTitle, desc: t.learnTechniqueDesc, gradient: 'from-amber-500/20 to-orange-500/20' },
        { icon: Music2, title: t.learnMaqamTitle, desc: t.learnMaqamDesc, gradient: 'from-orange-500/20 to-red-500/20' },
        { icon: Mic, title: t.learnImprovTitle, desc: t.learnImprovDesc, gradient: 'from-red-500/20 to-rose-500/20' },
        { icon: PenTool, title: t.learnComposeTitle, desc: t.learnComposeDesc, gradient: 'from-rose-500/20 to-amber-500/20' },
    ];

    return (
        <section id="learn" className="relative py-24 sm:py-32 bg-[#151009]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="h-px w-12 bg-amber-400/50" />
                        <span className="text-amber-400 text-sm tracking-[0.2em] uppercase font-light">Curriculum</span>
                        <span className="h-px w-12 bg-amber-400/50" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-amber-50">
                        {t.learnTitle}
                    </h2>
                </div>

                {/* Cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map(({ icon: Icon, title, desc, gradient }, i) => (
                        <div
                            key={i}
                            className={`group relative p-6 rounded-2xl bg-gradient-to-br ${gradient} border border-amber-400/10 hover:border-amber-400/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-900/20`}
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-amber-400/10 mb-5 group-hover:bg-amber-400/20 transition-colors group-hover:scale-110 duration-300">
                                <Icon className="w-7 h-7 text-amber-400" />
                            </div>

                            {/* Text */}
                            <h3 className="text-xl font-bold text-amber-50 mb-3">{title}</h3>
                            <p className="text-amber-200/70 text-sm leading-relaxed">{desc}</p>

                            {/* Hover glow */}
                            <div className="absolute inset-0 rounded-2xl bg-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
