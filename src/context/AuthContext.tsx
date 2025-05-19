'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

// Define user type
type User = {
  email: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  isLoggedIn: boolean;
} | null;

// Define context type
type AuthContextType = {
  user: User;
  login: (email: string, password: string, rememberMe: boolean) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
};

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Check for existing user session on mount
  useEffect(() => {
    const checkUserSession = () => {
      // Check localStorage first, then sessionStorage
      const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
      
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        } catch (error) {
          console.error('Error parsing stored user:', error);
          // Clear invalid storage
          localStorage.removeItem('user');
          sessionStorage.removeItem('user');
        }
      }
      
      setIsLoading(false);
    };
    
    checkUserSession();
  }, []);

  // Redirect unauthenticated users away from protected routes
  useEffect(() => {
    if (!isLoading) {
      const protectedRoutes = ['/dashboard', '/account', '/settings'];
      const authRoutes = ['/login', '/register', '/forgot-password'];
      
      if (protectedRoutes.some(route => pathname?.startsWith(route)) && !user) {
        // Redirect to login if trying to access protected route while not logged in
        router.push('/login');
      } else if (authRoutes.includes(pathname || '') && user) {
        // Redirect to dashboard if trying to access auth routes while logged in
        router.push('/dashboard');
      }
    }
  }, [user, isLoading, pathname, router]);

  // Login function
  const login = async (email: string, password: string, rememberMe: boolean) => {
    setIsLoading(true);
    
    try {
      // In a real app, you would validate credentials with an API
      // For this demo, we'll simulate a successful login
      
      // Create user object
      const newUser = {
        email,
        name: email.split('@')[0], // Just for demo purposes
        isLoggedIn: true
      };
      
      // Store in appropriate storage
      if (rememberMe) {
        localStorage.setItem('user', JSON.stringify(newUser));
      } else {
        sessionStorage.setItem('user', JSON.stringify(newUser));
      }
      
      // Update state
      setUser(newUser);
      
      // Redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    // Clear storage
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    
    // Update state
    setUser(null);
    
    // Redirect to home
    router.push('/');
  };

  // Context value
  const value = {
    user,
    login,
    logout,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}