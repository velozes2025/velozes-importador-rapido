import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Car, Menu, X, User, Search, Bell } from 'lucide-react';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { cn } from '../../utils/cn';
import { useAuthStore } from '../../stores/authStore';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close menu when location changes
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full transition-all duration-300 z-50',
        isScrolled || isMenuOpen || location.pathname !== '/' 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Car className="text-primary-500 w-8 h-8" />
          <span className="ml-2 text-2xl font-bold text-neutral-900">
            {t('app.title')}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/search" 
            className={cn(
              'font-medium transition-colors',
              location.pathname === '/search' 
                ? 'text-primary-600' 
                : 'text-neutral-700 hover:text-primary-500'
            )}
          >
            {t('nav.search')}
          </Link>
          {isAuthenticated ? (
            <>
              <Link 
                to="/bookings" 
                className={cn(
                  'font-medium transition-colors',
                  location.pathname === '/bookings' 
                    ? 'text-primary-600' 
                    : 'text-neutral-700 hover:text-primary-500'
                )}
              >
                {t('nav.bookings')}
              </Link>
              <Link 
                to="/messages" 
                className={cn(
                  'font-medium transition-colors',
                  location.pathname === '/messages' 
                    ? 'text-primary-600' 
                    : 'text-neutral-700 hover:text-primary-500'
                )}
              >
                {t('nav.messages')}
              </Link>
              <Link 
                to="/profile" 
                className="ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors"
              >
                <User size={20} />
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <Link 
                to="/login" 
                className="font-medium text-neutral-700 hover:text-primary-600 transition-colors"
              >
                {t('nav.login')}
              </Link>
              <Link 
                to="/register" 
                className="btn-primary"
              >
                {t('nav.register')}
              </Link>
            </div>
          )}
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-4">
          <LanguageSwitcher minimal />
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-md text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 transform pt-16',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col h-full">
          <nav className="flex flex-col space-y-6 text-lg">
            <Link 
              to="/" 
              className={cn(
                'font-medium flex items-center',
                location.pathname === '/' 
                  ? 'text-primary-600' 
                  : 'text-neutral-700'
              )}
            >
              <Car size={20} className="mr-3" />
              {t('nav.home')}
            </Link>
            <Link 
              to="/search" 
              className={cn(
                'font-medium flex items-center',
                location.pathname === '/search' 
                  ? 'text-primary-600' 
                  : 'text-neutral-700'
              )}
            >
              <Search size={20} className="mr-3" />
              {t('nav.search')}
            </Link>

            {isAuthenticated ? (
              <>
                <Link 
                  to="/bookings" 
                  className={cn(
                    'font-medium flex items-center',
                    location.pathname === '/bookings' 
                      ? 'text-primary-600' 
                      : 'text-neutral-700'
                  )}
                >
                  <Bell size={20} className="mr-3" />
                  {t('nav.bookings')}
                </Link>
                <Link 
                  to="/messages" 
                  className={cn(
                    'font-medium flex items-center',
                    location.pathname === '/messages' 
                      ? 'text-primary-600' 
                      : 'text-neutral-700'
                  )}
                >
                  <Bell size={20} className="mr-3" />
                  {t('nav.messages')}
                </Link>
                <Link 
                  to="/profile" 
                  className={cn(
                    'font-medium flex items-center',
                    location.pathname === '/profile' 
                      ? 'text-primary-600' 
                      : 'text-neutral-700'
                  )}
                >
                  <User size={20} className="mr-3" />
                  {t('nav.profile')}
                </Link>
                <button 
                  onClick={() => {
                    // Logout logic here
                    navigate('/');
                  }}
                  className="font-medium text-neutral-700 flex items-center"
                >
                  {t('nav.logout')}
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-4 mt-6">
                <Link 
                  to="/login" 
                  className="btn-outline text-center"
                >
                  {t('nav.login')}
                </Link>
                <Link 
                  to="/register" 
                  className="btn-primary text-center"
                >
                  {t('nav.register')}
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;