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
  background: '#0a0a0a',
  card: '#1a1a1a',
  primary: '#50fa7b',
  accent: '#bd93f9',
  text: '#ffffff'
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colors, setColors] = useState<ThemeColors>(() => {
    const savedColors = localStorage.getItem('theme-colors');
    return savedColors ? JSON.parse(savedColors) : defaultColors;
  });

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('theme-colors', JSON.stringify(colors));
    
    // Update CSS custom properties
    const root = document.documentElement;
    root.style.setProperty('--bank-background', colors.background);
    root.style.setProperty('--bank-card', colors.card);
    root.style.setProperty('--bank-green', colors.primary);
    root.style.setProperty('--bank-purple', colors.accent);

    // Force a re-render of components using these colors
    document.body.style.backgroundColor = colors.background;
  }, [colors]);

  const updateColors = (newColors: Partial<ThemeColors>) => {
    setColors(prev => {
      const updated = { ...prev, ...newColors };
      return updated;
    });
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