'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { type Locale, translations, type Translations } from './i18n';

interface LanguageContextType {
    locale: Locale;
    t: Translations;
    dir: 'rtl' | 'ltr';
    toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState<Locale>('he');

    const toggleLocale = useCallback(() => {
        setLocale((prev) => (prev === 'he' ? 'en' : 'he'));
    }, []);

    const dir = locale === 'he' ? 'rtl' : 'ltr';
    const t = translations[locale];

    useEffect(() => {
        document.documentElement.setAttribute('dir', dir);
        document.documentElement.setAttribute('lang', locale);
    }, [dir, locale]);

    return (
        <LanguageContext.Provider value={{ locale, t, dir, toggleLocale }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
