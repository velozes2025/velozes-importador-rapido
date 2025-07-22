import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Lazy loading function for dynamic imports
const loadLocaleMessages = async (locale: string) => {
  try {
    const messages = await import(`./locales/${locale}.ts`);
    return messages.default;
  } catch (error) {
    console.warn(`Failed to load locale ${locale}:`, error);
    // Fallback to English if locale fails to load
    const fallback = await import('./locales/en.ts');
    return fallback.default;
  }
};

// Initialize with base configuration
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Start with empty resources - will be loaded dynamically
    resources: {},
    lng: undefined, // Let i18next detect language
    fallbackLng: 'en',
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    
    interpolation: {
      escapeValue: false // React already escapes values
    },

    // Configure lazy loading
    load: 'languageOnly', // Load only language code (en, not en-US)
    preload: ['en'], // Preload English as fallback
    
    // Performance optimizations
    returnEmptyString: false,
    returnNull: false,
    
    // Namespace configuration
    defaultNS: 'translation',
    fallbackNS: 'translation'
  });

// Load initial language resources
const initializeLocale = async () => {
  const currentLanguage = i18n.language || 'en';
  
  try {
    // Load current language
    const resources = await loadLocaleMessages(currentLanguage);
    i18n.addResourceBundle(currentLanguage, 'translation', resources.translation);
    
    // Preload English as fallback if not already loaded
    if (currentLanguage !== 'en') {
      const enResources = await loadLocaleMessages('en');
      i18n.addResourceBundle('en', 'translation', enResources.translation);
    }
  } catch (error) {
    console.error('Failed to initialize locale:', error);
  }
};

// Handle language change events
i18n.on('languageChanged', async (lng: string) => {
  // Check if resources are already loaded
  if (!i18n.hasResourceBundle(lng, 'translation')) {
    try {
      const resources = await loadLocaleMessages(lng);
      i18n.addResourceBundle(lng, 'translation', resources.translation);
    } catch (error) {
      console.error(`Failed to load language ${lng}:`, error);
    }
  }
});

// Initialize locale on app start
initializeLocale();

export default i18n;