'use client';

import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { useState, useEffect, useCallback } from 'react';

export default function Testimonials() {
    const { t, dir } = useLanguage();
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const testimonials = t.testimonials;
    const total = testimonials.length;

    const next = useCallback(() => {
        setActive((prev) => (prev + 1) % total);
    }, [total]);

    const prev = useCallback(() => {
        setActive((prev) => (prev - 1 + total) % total);
    }, [total]);

    // Auto-advance
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [isPaused, next]);

    return (
        <section id="testimonials" className="relative py-24 sm:py-32 bg-[#151009]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="h-px w-12 bg-amber-400/50" />
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />
                            ))}
                        </div>
                        <span className="h-px w-12 bg-amber-400/50" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-amber-50 mb-3">
                        {t.testimonialsTitle}
                    </h2>
                    <p className="text-amber-400 font-medium">{t.testimonialsSubtitle}</p>
                </div>

                {/* Carousel */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Testimonial card */}
                    <div className="relative min-h-[200px] flex items-center justify-center px-8 sm:px-16">
                        <Quote className="absolute top-0 start-0 w-12 h-12 text-amber-400/10" />
                        <div className="text-center">
                            <p className="text-amber-200/90 text-lg sm:text-xl leading-relaxed mb-6 max-w-3xl transition-opacity duration-300">
                                &ldquo;{testimonials[active].text}&rdquo;
                            </p>
                            <p className="text-amber-400 font-medium">
                                — {testimonials[active].name}
                            </p>
                        </div>
                    </div>

                    {/* Navigation arrows */}
                    <button
                        onClick={dir === 'rtl' ? next : prev}
                        className="absolute top-1/2 -translate-y-1/2 start-0 p-2 text-amber-400/50 hover:text-amber-400 transition-colors"
                        aria-label="Previous"
                    >
                        <ChevronRight className="w-6 h-6 rtl:rotate-0 ltr:rotate-180" />
                    </button>
                    <button
                        onClick={dir === 'rtl' ? prev : next}
                        className="absolute top-1/2 -translate-y-1/2 end-0 p-2 text-amber-400/50 hover:text-amber-400 transition-colors"
                        aria-label="Next"
                    >
                        <ChevronLeft className="w-6 h-6 rtl:rotate-0 ltr:rotate-180" />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active
                                        ? 'bg-amber-400 w-6'
                                        : 'bg-amber-400/30 hover:bg-amber-400/50'
                                    }`}
                                aria-label={`Testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
