import { Home, Camera, BookOpen, ShoppingBag, Cloud, LayoutDashboard, User, LogIn, LogOut, Globe } from "lucide-react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const { t, language, setLanguage } = useLanguage();
  
  // Public pages (shown when not signed in)
  const publicNavItems = [
    { to: "/", icon: Home, labelKey: "home" },
    { to: "/about", icon: User, labelKey: "about" },
  ];

  // All pages (shown when signed in)
  const authNavItems = [
    { to: "/", icon: Home, labelKey: "home" },
    { to: "/diagnose", icon: Camera, labelKey: "diagnose" },
    { to: "/guides", icon: BookOpen, labelKey: "guides" },
    { to: "/market", icon: ShoppingBag, labelKey: "market" },
    { to: "/weather", icon: Cloud, labelKey: "weather" },
    { to: "/dashboard", icon: LayoutDashboard, labelKey: "dashboard" },
    { to: "/about", icon: User, labelKey: "about" },
  ];

  const navItems = isAuthenticated ? authNavItems : publicNavItems;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-card border-b border-border shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
              <img src={logo} alt="Ethio Agri" className="w-10 h-10" />
              <span className="text-xl font-bold ethiopic">Ethio Agri</span>
            </div>
            
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors hover:bg-muted"
                  activeClassName="bg-primary text-primary-foreground hover:bg-primary"
                >
                  <span className="font-medium">{t(item.labelKey)}</span>
                </NavLink>
              ))}
              
              {/* Language Switcher */}
              <LanguageSwitcher />
              
              {/* Auth Button */}
              {isAuthenticated ? (
                <Button 
                  variant="outline"
                  onClick={handleLogout}
                  className="ml-2"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  {t("logout")}
                </Button>
              ) : (
                <Button 
                  onClick={() => navigate("/auth")}
                  className="ml-2 ethiopic bg-gradient-primary hover:opacity-90"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  {t("getStarted")}
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-medium">
        <div className="flex items-center justify-around h-20 px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-lg transition-colors min-w-[48px]"
              activeClassName="text-primary"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] ethiopic font-medium">{t(item.labelKey)}</span>
            </NavLink>
          ))}
          
          {/* Language Switcher Mobile */}
          <button
            onClick={() => setLanguage(language === "en" ? "am" : "en")}
            className="flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-lg transition-colors min-w-[48px]"
          >
            <Globe className="w-5 h-5" />
            <span className="text-[10px] font-medium">{language === "en" ? "አማ" : "EN"}</span>
          </button>
          
          {/* Auth on Mobile */}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-lg transition-colors min-w-[48px] text-destructive"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-[10px] ethiopic font-medium">{t("logout")}</span>
            </button>
          ) : (
            <button
              onClick={() => navigate("/auth")}
              className="flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-lg transition-colors min-w-[48px] text-primary"
            >
              <LogIn className="w-5 h-5" />
              <span className="text-[10px] ethiopic font-medium">{t("getStarted")}</span>
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
