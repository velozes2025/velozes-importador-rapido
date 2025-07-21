import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Star, MapPin, Users } from 'lucide-react';
import { cn } from '../../utils/cn';

interface VehicleCardProps {
  vehicle: {
    id: string;
    title: string;
    imageUrl: string;
    price: number;
    currency: string;
    location: string;
    rating: number;
    reviewCount: number;
    category: string;
    seats: number;
    featured?: boolean;
  };
  className?: string;
}

const VehicleCard = ({ vehicle, className }: VehicleCardProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/listings/${vehicle.id}`);
  };

  return (
    <div 
      className={cn(
        'card group cursor-pointer',
        vehicle.featured ? 'border-2 border-primary-400' : '',
        className
      )}
      onClick={handleClick}
    >
      <div className="relative">
        <img 
          src={vehicle.imageUrl} 
          alt={vehicle.title}
          className="h-48 w-full object-cover object-center rounded-t-xl"
        />
        {vehicle.featured && (
          <div className="absolute top-2 left-2 bg-primary-500 text-neutral-900 py-1 px-3 rounded-full font-medium text-xs">
            {t('home.featured')}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg group-hover:text-primary-600 transition-colors">
            {vehicle.title}
          </h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-primary-500 fill-primary-500" />
            <span className="ml-1 text-sm font-medium">{vehicle.rating}</span>
            <span className="text-xs text-neutral-500 ml-1">({vehicle.reviewCount})</span>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-neutral-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{vehicle.location}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 bg-neutral-100 rounded-md text-xs">{vehicle.category}</span>
            <div className="flex items-center text-sm text-neutral-600">
              <Users className="w-3 h-3 mr-1" />
              <span>{vehicle.seats}</span>
            </div>
          </div>
          <div className="font-bold text-lg">
            {`${vehicle.currency}${vehicle.price}`} <span className="text-sm font-normal text-neutral-600">/{t('listing.day')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;