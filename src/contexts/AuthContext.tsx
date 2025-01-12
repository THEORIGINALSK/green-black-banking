import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface AuthContextType {
  isAuthenticated: boolean;
  hasSociety: boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasSociety, setHasSociety] = useState(false); // New state for society access
  const navigate = useNavigate();
  const { toast } = useToast();

  // In a real app, this would be stored in a database
  const [users, setUsers] = useState<Array<{ username: string; password: string }>>(
    JSON.parse(localStorage.getItem("users") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const register = async (username: string, password: string) => {
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      throw new Error("Username already exists");
    }

    setUsers([...users, { username, password }]);
    await login(username, password);
  };

  const login = async (username: string, password: string) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    
    if (user) {
      setIsAuthenticated(true);
      // For demo purposes, we'll set hasSociety to false by default
      // In a real app, this would come from your backend
      setHasSociety(false);
      navigate("/");
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setHasSociety(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, hasSociety, login, register, logout }}>
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