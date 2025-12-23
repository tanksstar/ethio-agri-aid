import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "am";

interface Translations {
  [key: string]: {
    en: string;
    am: string;
  };
}

export const translations: Translations = {
  // Navigation
  home: { en: "Home", am: "መነሻ" },
  about: { en: "About", am: "ስለ እኛ" },
  diagnose: { en: "Diagnose", am: "ምርመራ" },
  guides: { en: "Guides", am: "መመሪያ" },
  market: { en: "Market", am: "ገበያ" },
  weather: { en: "Weather", am: "የአየር ሁኔታ" },
  dashboard: { en: "Dashboard", am: "ዳሽቦርድ" },
  getStarted: { en: "Get Started", am: "ይጀምሩ" },
  login: { en: "Login", am: "ግባ" },
  signup: { en: "Sign Up", am: "ተመዝገብ" },
  logout: { en: "Logout", am: "ውጣ" },
  
  // Auth page
  welcome: { en: "Welcome", am: "እንኳን ደህና መጡ" },
  authSubtitle: { en: "To Ethio Agri - Your Farm Health Advisor", am: "ወደ Ethio Agri - የእርሻ ጤና አማካሪዎ" },
  email: { en: "Email", am: "ኢሜል" },
  password: { en: "Password", am: "የይለፍ ቃል" },
  fullName: { en: "Full Name", am: "ሙሉ ስም" },
  phone: { en: "Phone Number", am: "ስልክ ቁጥር" },
  forgotPassword: { en: "Forgot your password?", am: "የይለፍ ቃልዎን ረስተዋል?" },
  continueAsGuest: { en: "Want to continue without an account?", am: "መለያ ሳይኖርዎት መቀጠል ይፈልጋሉ?" },
  guestButton: { en: "Continue as Guest", am: "እንደ እንግዳ ይቀጥሉ" },
  
  // Home page
  heroTitle: { en: "Smart Farming Starts Here", am: "ብልህ እርሻ እዚህ ይጀምራል" },
  heroSubtitle: { en: "Diagnose crop diseases, get expert advice, and connect with local markets", am: "የሰብል በሽታዎችን ያስተውሉ፣ የባለሙያ ምክር ያግኙ፣ እና ከአካባቢ ገበያዎች ጋር ይገናኙ" },
  
  // About page
  aboutDeveloper: { en: "About the Developer", am: "ስለ ገንቢው" },
  
  // Common
  call: { en: "Call", am: "ደውል" },
  search: { en: "Search", am: "ፈልግ" },
  loading: { en: "Loading...", am: "በመጫን ላይ..." },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("ethioagri-language");
    return (saved as Language) || "en";
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("ethioagri-language", lang);
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
