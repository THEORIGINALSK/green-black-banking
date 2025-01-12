import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeColors {
  background: string;
  card: string;
  primary: string;
  accent: string;
  text: string;
}

interface ThemeContextType {
  colors: ThemeColors;
  updateColors: (newColors: Partial<ThemeColors>) => void;
  resetColors: () => void;
}

const defaultColors: ThemeColors = {
  background: '#0a0a0a', // Current black
  card: '#1a1a1a',      // Current card background
  primary: '#50fa7b',   // Current green
  accent: '#bd93f9',    // Current purple
  text: '#ffffff'       // White text
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colors, setColors] = useState<ThemeColors>(() => {
    const savedColors = localStorage.getItem('theme-colors');
    return savedColors ? JSON.parse(savedColors) : defaultColors;
  });

  useEffect(() => {
    localStorage.setItem('theme-colors', JSON.stringify(colors));
    
    // Update CSS variables
    document.documentElement.style.setProperty('--bank-background', colors.background);
    document.documentElement.style.setProperty('--bank-card', colors.card);
    document.documentElement.style.setProperty('--bank-green', colors.primary);
    document.documentElement.style.setProperty('--bank-purple', colors.accent);
  }, [colors]);

  const updateColors = (newColors: Partial<ThemeColors>) => {
    setColors(prev => ({ ...prev, ...newColors }));
  };

  const resetColors = () => {
    setColors(defaultColors);
  };

  return (
    <ThemeContext.Provider value={{ colors, updateColors, resetColors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};