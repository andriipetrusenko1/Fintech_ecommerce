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
          console.log('Found stored user:', parsedUser.email);
          
          // Ensure the user object has the isLoggedIn property set to true
          if (!parsedUser.isLoggedIn) {
            parsedUser.isLoggedIn = true;
          }
          
          setUser(parsedUser);
        } catch (error) {
          console.error('Error parsing stored user:', error);
          // Clear invalid storage
          localStorage.removeItem('user');
          sessionStorage.removeItem('user');
        }
      } else {
        console.log('No stored user found');
      }
      
      // Set loading to false after a short delay to ensure state updates
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    };
    
    checkUserSession();
  }, []);

  // Redirect unauthenticated users away from protected routes
  // useEffect(() => {
  //   if (!isLoading) {
  //     const protectedRoutes = ['/dashboard', '/account', '/settings'];
  //     const authRoutes = ['/login', '/register', '/forgot-password'];
      
  //     if (protectedRoutes.some(route => pathname?.startsWith(route)) && !user) {
  //       // Redirect to login if trying to access protected route while not logged in
  //       router.push('/login');
  //     } else if (authRoutes.includes(pathname || '') && user) {
  //       // Redirect to dashboard if trying to access auth routes while logged in
  //       router.push('/dashboard');
  //     }
  //   }
  // }, [user, isLoading, pathname, router]);
  useEffect(() => {
    if (isLoading) return;
    
    // Store the current path to avoid issues with pathname changing during the effect
    const currentPath = pathname || '';
    const protectedRoutes = ['/dashboard', '/account', '/settings'];
    const authRoutes = ['/login', '/register', '/forgot-password'];
    
    // Create a flag to track if we've already redirected to prevent loops
    let hasRedirected = false;
    
    // Only redirect if we haven't already redirected in this effect
    if (!user && protectedRoutes.some(route => currentPath.startsWith(route)) && !hasRedirected) {
      hasRedirected = true;
      console.log('Redirecting to login: Protected route accessed without authentication');
      router.push('/login');
    } else if (user && authRoutes.includes(currentPath) && !hasRedirected) {
      hasRedirected = true;
      console.log('Redirecting to dashboard: Auth route accessed while authenticated');
      router.push('/dashboard');
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
      
      // First update the user state
      setUser(newUser);
      
      // Wait a moment to ensure state is updated before navigation
      setTimeout(() => {
        // Then redirect to dashboard
        console.log('Login successful, redirecting to dashboard');
        router.push('/dashboard');
        setIsLoading(false);
      }, 100);
      
    } catch (error) {
      console.error('Login error:', error);
      setIsLoading(false);
      throw new Error('Invalid email or password');
    }
  };

  // Logout function
  const logout = () => {
    console.log('Logging out user');
    
    // Clear storage
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    
    // Update state
    setUser(null);
    
    // Redirect to home after a short delay to ensure state is updated
    setTimeout(() => {
      console.log('Redirecting to home after logout');
      router.push('/');
    }, 100);
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