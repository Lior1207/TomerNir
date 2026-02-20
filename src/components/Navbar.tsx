'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import OudIcon from './OudIcon';
import { useLanguage } from '@/lib/LanguageContext';

const sections = [
    { key: 'about', href: '#about' },
    { key: 'learn', href: '#learn' },
    { key: 'video', href: '#video' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'pricing', href: '#pricing' },
    { key: 'contact', href: '#contact' },
] as const;

const navLabelMap = {
    about: 'navAbout',
    learn: 'navLearn',
    video: 'navVideo',
    testimonials: 'navTestimonials',
    pricing: 'navPricing',
    contact: 'navContact',
} as const;

export default function Navbar() {
    const { t, toggleLocale, dir } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = (href: string) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-[#1a1209]/95 backdrop-blur-md shadow-lg shadow-amber-900/10'
                : 'bg-transparent'
                }`}
            dir={dir}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 group"
                    >
                        <OudIcon className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />
                        <span className="text-amber-50 font-semibold text-lg tracking-wide">
                            {t.heroTitle}
                        </span>
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {sections.map((s) => (
                            <button
                                key={s.key}
                                onClick={() => handleClick(s.href)}
                                className="px-3 py-2 text-sm text-amber-200/80 hover:text-amber-100 transition-colors rounded-lg hover:bg-amber-400/10"
                            >
                                {t[navLabelMap[s.key]]}
                            </button>
                        ))}
                        <button
                            onClick={toggleLocale}
                            className="ms-3 px-3 py-1.5 text-xs font-bold text-amber-900 bg-amber-400 rounded-full hover:bg-amber-300 transition-colors"
                        >
                            {t.langToggle}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={toggleLocale}
                            className="px-3 py-1.5 text-xs font-bold text-amber-900 bg-amber-400 rounded-full hover:bg-amber-300 transition-colors"
                        >
                            {t.langToggle}
                        </button>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-2 text-amber-200 hover:text-amber-100"
                        >
                            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu panel */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 pb-4 bg-[#1a1209]/95 backdrop-blur-md rounded-b-2xl">
                    {sections.map((s) => (
                        <button
                            key={s.key}
                            onClick={() => handleClick(s.href)}
                            className="w-full text-start px-4 py-3 text-amber-200/90 hover:text-amber-100 hover:bg-amber-400/10 rounded-lg transition-colors"
                        >
                            {t[navLabelMap[s.key]]}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
