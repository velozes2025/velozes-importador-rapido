import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const ListingDetailPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Listing Details</h1>
        <p>Listing detail page for ID: {id}</p>
      </div>
    </div>
  );
};

export default ListingDetailPage;