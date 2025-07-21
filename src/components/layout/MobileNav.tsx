import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Search, Calendar, MessageSquare, User } from 'lucide-react';
import { cn } from '../../utils/cn';

const MobileNav = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-neutral-200 z-40">
      <div className="flex justify-between px-2">
        <Link 
          to="/" 
          className={cn(
            'flex flex-col items-center py-2 px-3',
            isActive('/') ? 'text-primary-600' : 'text-neutral-600'
          )}
        >
          <Home size={24} />
          <span className="text-xs mt-1">{t('nav.home')}</span>
        </Link>

        <Link 
          to="/search" 
          className={cn(
            'flex flex-col items-center py-2 px-3',
            isActive('/search') ? 'text-primary-600' : 'text-neutral-600'
          )}
        >
          <Search size={24} />
          <span className="text-xs mt-1">{t('nav.search')}</span>
        </Link>

        <Link 
          to="/bookings" 
          className={cn(
            'flex flex-col items-center py-2 px-3',
            isActive('/bookings') ? 'text-primary-600' : 'text-neutral-600'
          )}
        >
          <Calendar size={24} />
          <span className="text-xs mt-1">{t('nav.bookings')}</span>
        </Link>

        <Link 
          to="/messages" 
          className={cn(
            'flex flex-col items-center py-2 px-3',
            isActive('/messages') ? 'text-primary-600' : 'text-neutral-600'
          )}
        >
          <MessageSquare size={24} />
          <span className="text-xs mt-1">{t('nav.messages')}</span>
        </Link>

        <Link 
          to="/profile" 
          className={cn(
            'flex flex-col items-center py-2 px-3',
            isActive('/profile') ? 'text-primary-600' : 'text-neutral-600'
          )}
        >
          <User size={24} />
          <span className="text-xs mt-1">{t('nav.profile')}</span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;