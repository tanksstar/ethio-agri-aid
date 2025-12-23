import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "am" : "en");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-sm font-medium"
    >
      <Globe className="w-4 h-4" />
      <span>{language === "en" ? "አማ" : "EN"}</span>
    </Button>
  );
};

export default LanguageSwitcher;
