'use client';

import { Heart, BookOpen, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';

export default function About() {
    const { t, locale } = useLanguage();

    const highlights = [
        { icon: Heart, he: 'סבלנות ואכפתיות', en: 'Patient & Caring' },
        { icon: BookOpen, he: 'לימוד מותאם אישית', en: 'Personalized Learning' },
        { icon: Sparkles, he: 'ניסיון בהוראה', en: 'Teaching Experience' },
    ];

    return (
        <section id="about" className="relative py-24 sm:py-32 bg-[#1a1209]">
            {/* Subtle dot pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(circle, #d97706 1px, transparent 1px)',
                backgroundSize: '24px 24px',
            }} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image */}
                    <div className="relative group order-2 lg:order-none">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/30">
                            <Image
                                src="/about-tomer.png"
                                alt="Tomer Nir playing oud"
                                width={600}
                                height={600}
                                className="object-cover object-top w-full aspect-[3/4] group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1209]/40 to-transparent" />
                        </div>
                        {/* Decorative frame */}
                        <div className="absolute -inset-3 rounded-2xl border border-amber-400/20 -z-10" />
                        <div className="absolute -inset-6 rounded-2xl border border-amber-400/10 -z-10" />
                    </div>

                    {/* Text */}
                    <div className="order-1 lg:order-none">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-8 bg-amber-400" />
                            <h2 className="text-3xl sm:text-4xl font-bold text-amber-50">
                                {t.aboutTitle}
                            </h2>
                        </div>

                        <p className="text-amber-200/80 text-lg leading-relaxed mb-6">
                            {t.aboutP1}
                        </p>
                        <p className="text-amber-200/80 text-lg leading-relaxed mb-8">
                            {t.aboutP2}
                        </p>

                        {/* Highlight tags */}
                        <div className="flex flex-wrap gap-3">
                            {highlights.map(({ icon: Icon, he, en }) => (
                                <span
                                    key={en}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 text-amber-300 rounded-full text-sm border border-amber-400/20"
                                >
                                    <Icon className="w-4 h-4" />
                                    {locale === 'he' ? he : en}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
