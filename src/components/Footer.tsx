'use client';

import { Instagram, Music } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-[#0f0a04] border-t border-amber-400/10 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Music className="w-5 h-5 text-amber-400" />
                        <span className="text-amber-200/70 text-sm">{t.footerBuiltWith}</span>
                    </div>

                    {/* Social */}
                    <a
                        href="https://www.instagram.com/tomer_nir/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-200/40 hover:text-amber-400 transition-colors"
                    >
                        <Instagram className="w-5 h-5" />
                    </a>

                    {/* Copyright */}
                    <p className="text-amber-200/40 text-sm">
                        © {new Date().getFullYear()} Tomer Nir. {t.footerRights}.
                    </p>
                </div>
            </div>
        </footer>
    );
}
