import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Key } from 'lucide-react';
import {
  FaCar,
  FaTruckMonster,
  FaShip,
  FaWater,
  FaGem,
  FaCarSide,
  FaCarAlt
} from 'react-icons/fa';
import VehicleCard from '../components/ui/VehicleCard';
import { mockFeaturedVehicles } from '../data/mockData';

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [location, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?location=${encodeURIComponent(location)}`);
  };

  const CATEGORIES = [
    { Icon: FaCar, label: 'Car', value: 'Car' },
    { Icon: FaTruckMonster, label: 'SUV', value: 'SUV' },
    { Icon: FaShip, label: 'Boat', value: 'Boat' },
    { Icon: FaWater, label: 'Jet Ski', value: 'Jet Ski' },
    { Icon: FaGem, label: 'Luxury', value: 'Luxury' },
    { Icon: FaCarSide, label: 'Convertible', value: 'Convertible' },
    { Icon: FaCarAlt, label: 'Exotic', value: 'Exotic' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-neutral-900 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.6)',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-2xl">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t('home.title')}
            </h1>
            <p className="text-neutral-200 text-xl mb-8">
              {t('home.subtitle')}
            </p>
            
            <form 
              onSubmit={handleSearch}
              className="bg-white p-4 rounded-xl shadow-lg flex flex-col md:flex-row"
            >
              <div className="flex-grow relative mb-4 md:mb-0 md:mr-4">
                <MapPin className="absolute left-3 top-3 text-neutral-500" size={20} />
                <input
                  type="text"
                  className="input pl-10 py-3"
                  placeholder={t('home.searchPlaceholder')}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn-primary py-3 px-6 whitespace-nowrap flex items-center justify-center">
                <Search size={18} className="mr-2" />
                {t('home.searchButton')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">{t('home.featured')}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockFeaturedVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">Browse by Category</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {CATEGORIES.map(({ Icon, label, value }) => (
              <button
                key={value}
                onClick={() => navigate(`/search?category=${value}`)}
                className="flex flex-col items-center p-6 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-colors group"
              >
                <Icon size={32} className="text-primary-500 mb-4" />
                <span className="text-white font-medium">{t(`vehicle.${label.toLowerCase()}`)}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">{t('home.howItWorks')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary-500 flex items-center justify-center mb-6">
                <Search className="w-10 h-10 text-neutral-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{t('home.step1')}</h3>
              <p className="text-neutral-400">{t('home.step1Desc')}</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary-500 flex items-center justify-center mb-6">
                <Calendar className="w-10 h-10 text-neutral-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{t('home.step2')}</h3>
              <p className="text-neutral-400">{t('home.step2Desc')}</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary-500 flex items-center justify-center mb-6">
                <Key className="w-10 h-10 text-neutral-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{t('home.step3')}</h3>
              <p className="text-neutral-400">{t('home.step3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Host CTA */}
      <section className="py-16 bg-primary-500 text-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{t('home.becomeHost')}</h2>
            <p className="text-xl mb-8">{t('home.becomeHostDesc')}</p>
            <button 
              onClick={() => navigate('/create-listing')}
              className="btn bg-neutral-900 text-white hover:bg-neutral-800 px-8 py-3 text-lg"
            >
              {t('home.listCar')}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;