import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

interface LanguageSwitcherProps {
  minimal?: boolean;
}

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];

const LanguageSwitcher = ({ minimal = false }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  if (minimal) {
    return (
      <div ref={dropdownRef} className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md text-foreground hover:bg-accent transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label={`Current language: ${currentLanguage.name}. Click to change language.`}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <Globe size={20} />
        </button>
        
        {isOpen && (
          <div className="absolute right-0 top-full mt-2 bg-popover border border-border rounded-lg shadow-lg py-1 z-50 min-w-[160px]" role="menu">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={cn(
                  'w-full px-3 py-2 text-left hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-between text-sm focus:outline-none focus:bg-accent',
                  currentLanguage.code === lang.code ? 'bg-accent/50 text-primary font-medium' : 'text-popover-foreground'
                )}
                role="menuitem"
                aria-label={`Switch to ${lang.name}`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-base" role="img" aria-label={`${lang.name} flag`}>{lang.flag}</span>
                  <span>{lang.name}</span>
                </div>
                {currentLanguage.code === lang.code && (
                  <span className="text-primary">✓</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-1 rounded-md hover:bg-accent transition-colors text-sm text-foreground hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label={`Current language: ${currentLanguage.name}. Click to change language.`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-base" role="img" aria-label={`${currentLanguage.name} flag`}>{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <span className="sm:hidden">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown size={16} className={cn('transition-transform', isOpen ? 'rotate-180' : '')} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-popover border border-border rounded-lg shadow-lg py-1 z-50 min-w-[160px]" role="menu">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={cn(
                'w-full px-3 py-2 text-left hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-between text-sm focus:outline-none focus:bg-accent',
                currentLanguage.code === lang.code ? 'bg-accent/50 text-primary font-medium' : 'text-popover-foreground'
              )}
              role="menuitem"
              aria-label={`Switch to ${lang.name}`}
            >
              <div className="flex items-center space-x-2">
                <span className="text-base" role="img" aria-label={`${lang.name} flag`}>{lang.flag}</span>
                <span>{lang.name}</span>
              </div>
              {currentLanguage.code === lang.code && (
                <span className="text-primary">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;