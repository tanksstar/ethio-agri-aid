import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, phone: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem("ethioagri-user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem("ethioagri-users") || "[]");
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (foundUser) {
      const userData = { id: foundUser.id, name: foundUser.name, email: foundUser.email, phone: foundUser.phone };
      setUser(userData);
      localStorage.setItem("ethioagri-user", JSON.stringify(userData));
      setIsLoading(false);
      toast({
        title: "Welcome back!",
        description: `Logged in as ${foundUser.name}`,
      });
      return true;
    } else {
      setIsLoading(false);
      toast({
        title: "Login failed",
        description: "Invalid email or password",
        variant: "destructive",
      });
      return false;
    }
  };

  const signup = async (name: string, email: string, phone: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("ethioagri-users") || "[]");
    const existingUser = users.find((u: any) => u.email === email);
    
    if (existingUser) {
      setIsLoading(false);
      toast({
        title: "Signup failed",
        description: "An account with this email already exists",
        variant: "destructive",
      });
      return false;
    }
    
    // Create new user
    const newUser = {
      id: crypto.randomUUID(),
      name,
      email,
      phone,
      password, // In production, this should be hashed
    };
    
    users.push(newUser);
    localStorage.setItem("ethioagri-users", JSON.stringify(users));
    
    const userData = { id: newUser.id, name: newUser.name, email: newUser.email, phone: newUser.phone };
    setUser(userData);
    localStorage.setItem("ethioagri-user", JSON.stringify(userData));
    
    setIsLoading(false);
    toast({
      title: "Account created!",
      description: `Welcome, ${name}!`,
    });
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("ethioagri-user");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
