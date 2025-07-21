import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  minimal?: boolean;
}

const LanguageSwitcher = ({ minimal = false }: LanguageSwitcherProps) => {
  const handleLanguageChange = (language: string) => {
    // Language switching logic here
    console.log('Switching to:', language);
  };

  if (minimal) {
    return (
      <button 
        onClick={() => handleLanguageChange('en')}
        className="p-2 rounded-md text-neutral-700 hover:bg-neutral-100 transition-colors"
        aria-label="Switch Language"
      >
        <Globe size={20} />
      </button>
    );
  }

  return (
    <select 
      onChange={(e) => handleLanguageChange(e.target.value)}
      className="bg-transparent border-none text-sm cursor-pointer"
      defaultValue="en"
    >
      <option value="en">EN</option>
      <option value="es">ES</option>
      <option value="pt">PT</option>
    </select>
  );
};

export default LanguageSwitcher;