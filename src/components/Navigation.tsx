import { useState } from "react";
import { Home, Camera, BookOpen, ShoppingBag, History, Cloud, LayoutDashboard, User, LogIn, Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated] = useState(false); // This would come from auth context
  
  // Public pages (shown when not signed in)
  const publicNavItems = [
    { to: "/", icon: Home, labelAm: "መነሻ", labelEn: "Home" },
    { to: "/about", icon: User, labelAm: "ስለ እኛ", labelEn: "About" },
  ];

  // All pages (shown when signed in)
  const authNavItems = [
    { to: "/", icon: Home, labelAm: "መነሻ", labelEn: "Home" },
    { to: "/diagnose", icon: Camera, labelAm: "ምርመራ", labelEn: "Diagnose" },
    { to: "/guides", icon: BookOpen, labelAm: "መመሪያ", labelEn: "Guides" },
    { to: "/market", icon: ShoppingBag, labelAm: "ገበያ", labelEn: "Market" },
    { to: "/weather", icon: Cloud, labelAm: "የአየር ሁኔታ", labelEn: "Weather" },
    { to: "/dashboard", icon: LayoutDashboard, labelAm: "ዳሽቦርድ", labelEn: "Dashboard" },
    { to: "/about", icon: User, labelAm: "ስለ እኛ", labelEn: "About" },
  ];

  const navItems = isAuthenticated ? authNavItems : publicNavItems;
  const isHomePage = location.pathname === "/";

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
                  <span className="font-medium">{item.labelEn}</span>
                </NavLink>
              ))}
              
              {/* Get Started Button */}
              {!isAuthenticated && (
                <Button 
                  onClick={() => navigate("/auth")}
                  className="ml-4 ethiopic bg-gradient-primary hover:opacity-90"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  ይጀምሩ
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
              className="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-colors min-w-[64px]"
              activeClassName="text-primary"
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs ethiopic font-medium">{item.labelAm}</span>
            </NavLink>
          ))}
          
          {/* Get Started on Mobile */}
          {!isAuthenticated && (
            <button
              onClick={() => navigate("/auth")}
              className="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-colors min-w-[64px] text-primary"
            >
              <LogIn className="w-6 h-6" />
              <span className="text-xs ethiopic font-medium">ይጀምሩ</span>
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
