import React from 'react';
import { useLocation, useInRouterContext } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isInRouter = useInRouterContext();
  const location = isInRouter ? useLocation() : { pathname: '' };
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      {!isAuthPage && <MobileNav />}
      <Footer />
    </div>
  );
};

export default Layout;