"use client";
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { useRouter } from "next/navigation";
import { getProfile, setAuthToken } from "./api";

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any | null>(null);
  const router = useRouter();

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setAuthToken("");
    setUser(null);
    setIsAuthenticated(false);
    router.push("/auth/login");
  }, [router]);

  const login = useCallback(
    async (token: string) => {
      setAuthToken(token);
      localStorage.setItem("token", token);
      try {
        const userData = await getProfile();
        setUser(userData.user);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Authentication failed:", error);
        logout();
      }
    },
    [logout]
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      login(token);
    }
  }, [login]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
