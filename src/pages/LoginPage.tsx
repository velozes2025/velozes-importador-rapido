import React from 'react';
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">{t('nav.login')}</h1>
        <p>Login page content coming soon...</p>
      </div>
    </div>
  );
};

export default LoginPage;