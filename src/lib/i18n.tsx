import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'jp' | 'hi';

const translations: Record<Language, Record<string, string>> = {
  en: {
    dashboard_title: "Core HQ",
    dashboard_subtitle: "Synchronizing your synaptic pathways.",
    daily_reviews: "Daily Reviews",
    neural_sync: "Secure Sync",
    n5_foundation: "N5 Foundation",
    n5_desc: "Master the basics of Japanese grammar and vocabulary.",
    settings: "Settings",
    search: "Search",
    kana: "Kana",
    jlpt_engine: "Mastery Hub",
    hq: "HQ",
    sync_success: "Neural Link Synchronized",
    sync_failure: "Sync Failure"
  },
  jp: {
    dashboard_title: "神経司令部",
    dashboard_subtitle: "シナプス経路を同期中。",
    daily_reviews: "毎日の復習",
    neural_sync: "神経同期",
    n5_foundation: "N5基礎",
    n5_desc: "日本語の文法と言葉の基礎をマスターしましょう。",
    settings: "設定",
    search: "検索",
    kana: "かな",
    jlpt_engine: "習得ハブ",
    hq: "司令部",
    sync_success: "同期完了",
    sync_failure: "同期エラー"
  },
  hi: {
    dashboard_title: "न्यूरल मुख्यालय",
    dashboard_subtitle: "आपके सिनैप्टिक रास्तों को सिंक कर रहा है।",
    daily_reviews: "दैनिक समीक्षा",
    neural_sync: "न्यूरल सिंक",
    n5_foundation: "N5 फाउंडेशन",
    n5_desc: "जापानी व्याकरण और शब्दावली की बुनियादी बातों में महारत हासिल करें।",
    settings: "सेटिंग्स",
    search: "खोजें",
    kana: "काना",
    jlpt_engine: "निपुणता हब",
    hq: "मुख्यालय",
    sync_success: "सिंक सफल",
    sync_failure: "सिंक विफलता"
  }
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => translations[language][key] || key;

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
};
