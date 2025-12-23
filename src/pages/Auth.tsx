import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import logo from "@/assets/logo.png";

const Auth = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  
  const { login, signup, isLoading, isAuthenticated } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Redirect if already authenticated
  if (isAuthenticated) {
    navigate("/");
    return null;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(loginEmail, loginPassword);
    if (success) {
      navigate("/");
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await signup(signupName, signupEmail, signupPhone, signupPassword);
    if (success) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-24 md:pb-8 bg-gradient-to-br from-primary/5 to-success/5">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto space-y-8">
          {/* Logo and Title */}
          <div className="text-center space-y-4">
            <img src={logo} alt="Ethio Agri Logo" className="w-24 h-24 mx-auto" />
            <h1 className="text-3xl font-bold ethiopic">{t("welcome")}</h1>
            <p className="text-muted-foreground ethiopic">
              {t("authSubtitle")}
            </p>
          </div>

          {/* Auth Tabs */}
          <Card className="p-6 shadow-medium">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login" className="ethiopic">{t("login")}</TabsTrigger>
                <TabsTrigger value="signup" className="ethiopic">{t("signup")}</TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login" className="space-y-4 mt-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email" className="ethiopic">{t("email")}</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="example@email.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                      className="h-12"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password" className="ethiopic">{t("password")}</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                      className="h-12"
                      disabled={isLoading}
                    />
                  </div>
                  <Button type="submit" className="w-full ethiopic" size="lg" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        {t("loading")}
                      </>
                    ) : (
                      t("login")
                    )}
                  </Button>
                  <button
                    type="button"
                    className="text-sm text-primary hover:underline w-full text-center ethiopic"
                  >
                    {t("forgotPassword")}
                  </button>
                </form>
              </TabsContent>

              {/* Signup Tab */}
              <TabsContent value="signup" className="space-y-4 mt-6">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name" className="ethiopic">{t("fullName")}</Label>
                    <Input
                      id="signup-name"
                      type="text"
                      placeholder={t("fullName")}
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      required
                      className="h-12"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-phone" className="ethiopic">{t("phone")}</Label>
                    <Input
                      id="signup-phone"
                      type="tel"
                      placeholder="+251 9xx xxx xxx"
                      value={signupPhone}
                      onChange={(e) => setSignupPhone(e.target.value)}
                      required
                      className="h-12"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="ethiopic">{t("email")}</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="example@email.com"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      required
                      className="h-12"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="ethiopic">{t("password")}</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="••••••••"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      required
                      className="h-12"
                      disabled={isLoading}
                    />
                  </div>
                  <Button type="submit" className="w-full ethiopic" size="lg" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        {t("loading")}
                      </>
                    ) : (
                      t("signup")
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </Card>

          {/* Guest Mode */}
          <Card className="p-4 bg-accent/10 border-accent/20">
            <div className="text-center space-y-2">
              <p className="text-sm ethiopic">{t("continueAsGuest")}</p>
              <Button variant="outline" className="ethiopic" onClick={() => navigate("/")}>
                {t("guestButton")}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auth;
