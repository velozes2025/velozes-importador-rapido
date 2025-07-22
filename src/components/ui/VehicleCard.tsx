import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Star, MapPin, Users, ImageIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

// Skeleton component
const CardSkeleton = () => (
  <div className="card animate-pulse">
    <div className="h-48 bg-muted rounded-t-xl"></div>
    <div className="p-4 space-y-3">
      <div className="h-4 bg-muted rounded w-3/4"></div>
      <div className="h-3 bg-muted rounded w-1/2"></div>
      <div className="flex justify-between">
        <div className="h-3 bg-muted rounded w-1/4"></div>
        <div className="h-4 bg-muted rounded w-1/3"></div>
      </div>
    </div>
  </div>
);

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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    navigate(`/listings/${vehicle.id}`);
  };

  const getVehicleIcon = (category: string) => {
    const iconProps = { className: "w-5 h-5", fill: "currentColor" };
    
    switch (category.toLowerCase()) {
      case 'car':
      case 'sedan':
        return <img src="/public/icons/car-compact.svg" alt="" className="w-5 h-5" />;
      case 'suv':
        return <img src="/public/icons/car-side.svg" alt="" className="w-5 h-5" />;
      case 'sport':
      case 'luxury':
        return <img src="/public/icons/car-sport.svg" alt="" className="w-5 h-5" />;
      case 'truck':
        return <img src="/public/icons/truck.svg" alt="" className="w-5 h-5" />;
      default:
        return <img src="/public/icons/car-default.svg" alt="" className="w-5 h-5" />;
    }
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
      <div className="relative overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        )}
        
        {imageError ? (
          <div className="h-48 flex items-center justify-center bg-muted text-muted-foreground">
            <div className="text-center">
              <ImageIcon className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm">Image not available</p>
            </div>
          </div>
        ) : (
          <img 
            src={vehicle.imageUrl} 
            alt={vehicle.title}
            className={cn(
              "h-48 w-full object-cover object-center rounded-t-xl transition-opacity duration-300",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}
        
        {vehicle.featured && imageLoaded && !imageError && (
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground py-1 px-3 rounded-full font-medium text-xs">
            {t('home.featured')}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-1">
            {vehicle.title}
          </h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="ml-1 text-sm font-medium">{vehicle.rating}</span>
            <span className="text-xs text-muted-foreground ml-1">({vehicle.reviewCount})</span>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="line-clamp-1">{vehicle.location}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center px-2 py-1 bg-muted rounded-md text-xs">
              {getVehicleIcon(vehicle.category)}
              <span className="ml-1">{t(`vehicle.${vehicle.category.toLowerCase()}`) || vehicle.category}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="w-3 h-3 mr-1" />
              <span>{vehicle.seats}</span>
            </div>
          </div>
          <div className="font-bold text-lg">
            {`${vehicle.currency}${vehicle.price}`} <span className="text-sm font-normal text-muted-foreground">/{t('listing.day')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;