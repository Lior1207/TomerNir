'use client';

import { MapPin, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Pricing() {
    const { t, locale } = useLanguage();

    const locations = locale === 'he'
        ? ['ירושלים', 'עין כרם', 'תל אביב', 'אורה', 'גבעת יערים', 'נטף', 'עמינדב', 'צובה', 'צור הדסה', 'שורש']
        : ['Jerusalem', 'Ein Kerem', 'Tel Aviv', 'Ora', 'Givat Yearim', 'Nataf', 'Aminadav', 'Tzuba', 'Tzur Hadassah', 'Shoresh'];

    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="pricing" className="relative py-24 sm:py-32 bg-[#1a1209]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="h-px w-12 bg-amber-400/50" />
                        <span className="text-amber-400 text-sm tracking-[0.2em] uppercase font-light">₪</span>
                        <span className="h-px w-12 bg-amber-400/50" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-amber-50 mb-3">
                        {t.pricingTitle}
                    </h2>
                    <p className="text-amber-200/70 text-lg">{t.pricingSubtitle}</p>
                </div>

                {/* Pricing cards */}
                <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
                    {/* At teacher's home */}
                    <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-400/20 hover:border-amber-400/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/20">
                        <div className="flex items-center gap-2 text-amber-400 mb-2">
                            <MapPin className="w-5 h-5" />
                            <span className="text-sm font-medium">{t.pricingAtTeacherLocation}</span>
                        </div>
                        <h3 className="text-xl font-bold text-amber-50 mb-4">{t.pricingAtTeacher}</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-5xl font-bold text-amber-400">180</span>
                            <span className="text-amber-200/70">{t.pricingPerHour}</span>
                        </div>
                        <ul className="space-y-2 mb-6">
                            {[
                                locale === 'he' ? 'אווירה ביתית ואינטימית' : 'Intimate home atmosphere',
                                locale === 'he' ? 'סטודיו מאובזר' : 'Fully equipped studio',
                                locale === 'he' ? 'שיעור של שעה' : 'One hour lesson',
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-amber-200/70 text-sm">
                                    <CheckCircle className="w-4 h-4 text-amber-400/70 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={scrollToContact}
                            className="w-full py-3 bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 font-medium rounded-xl border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300"
                        >
                            {t.pricingCta}
                        </button>
                    </div>

                    {/* At student's home */}
                    <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-400/20 hover:border-amber-400/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/20">
                        <div className="flex items-center gap-2 text-amber-400 mb-2">
                            <MapPin className="w-5 h-5" />
                            <span className="text-sm font-medium">{t.pricingAtStudentLocation}</span>
                        </div>
                        <h3 className="text-xl font-bold text-amber-50 mb-4">{t.pricingAtStudent}</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-5xl font-bold text-amber-400">250</span>
                            <span className="text-amber-200/70">{t.pricingPerHour}</span>
                        </div>
                        <ul className="space-y-2 mb-6">
                            {[
                                locale === 'he' ? 'שיעור בנוחות הבית שלכם' : 'Learn in your own home',
                                locale === 'he' ? 'ללא צורך בנסיעה' : 'No travel needed',
                                locale === 'he' ? 'שיעור של שעה' : 'One hour lesson',
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-amber-200/70 text-sm">
                                    <CheckCircle className="w-4 h-4 text-amber-400/70 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={scrollToContact}
                            className="w-full py-3 bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 font-medium rounded-xl border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300"
                        >
                            {t.pricingCta}
                        </button>
                    </div>
                </div>

                {/* Locations */}
                <div className="text-center">
                    <h3 className="text-xl font-bold text-amber-50 mb-6">{t.pricingLocationsTitle}</h3>
                    <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                        {locations.map((loc) => (
                            <span
                                key={loc}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-400/10 text-amber-300/80 rounded-full text-sm border border-amber-400/10"
                            >
                                <MapPin className="w-3 h-3" />
                                {loc}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
