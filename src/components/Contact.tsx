'use client';

import { MessageCircle, Phone, Instagram } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#151009] via-[#1a1209] to-[#1a1209]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 rounded-full blur-3xl" />

            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Header */}
                <h2 className="text-4xl sm:text-5xl font-bold text-amber-50 mb-4">
                    {t.contactTitle}
                </h2>
                <p className="text-amber-200/70 text-lg mb-12 max-w-xl mx-auto">
                    {t.contactSubtitle}
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    {/* WhatsApp - primary */}
                    <a
                        href="https://wa.me/972546438305?text=%D7%90%D7%94%D7%9C%D7%9F%20%D7%AA%D7%95%D7%9E%D7%A8%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%A9%D7%99%D7%A2%D7%95%D7%A8%D7%99%20%D7%A2%D7%95%D7%93"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 w-full sm:w-auto justify-center"
                    >
                        <MessageCircle className="w-6 h-6" />
                        {t.contactWhatsapp}
                    </a>

                    {/* Call */}
                    <a
                        href="tel:0546438305"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 font-bold text-lg rounded-full border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
                    >
                        <Phone className="w-5 h-5" />
                        {t.contactCall}
                    </a>
                </div>

                {/* Phone number display */}
                <p className="text-amber-400 text-2xl font-bold tracking-wider mb-8 direction-ltr" dir="ltr">
                    054-643-8305
                </p>

                {/* Instagram */}
                <a
                    href="https://www.instagram.com/tomer_nir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-200/60 hover:text-amber-200 transition-colors"
                >
                    <Instagram className="w-5 h-5" />
                    {t.contactInstagram}
                </a>
            </div>
        </section>
    );
}
