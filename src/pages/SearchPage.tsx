import React from 'react';
import { useTranslation } from 'react-i18next';

const SearchPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">{t('nav.search')}</h1>
        <p>Search page content coming soon...</p>
      </div>
    </div>
  );
};

export default SearchPage;