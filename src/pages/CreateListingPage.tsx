import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { 
  Upload, 
  Calendar, 
  DollarSign, 
  MapPin, 
  Car, 
  AlertCircle, 
  Check,
  ChevronRight,
  ChevronLeft,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/stores/authStore';

interface FormData {
  title: string;
  description: string;
  category: string;
  make: string;
  model: string;
  year: string;
  price: string;
  location: string;
  features: string[];
  photos: File[];
}

const FEATURES = [
  'Bluetooth',
  'Navigation',
  'Backup Camera',
  'Sunroof',
  'Leather Seats',
  'Heated Seats',
  'Apple CarPlay',
  'Android Auto',
  'Cruise Control',
  'Keyless Entry'
];

const CreateListingPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuthStore();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    category: '',
    make: '',
    model: '',
    year: '',
    price: '',
    location: '',
    features: [],
    photos: []
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [photoURLs, setPhotoURLs] = useState<string[]>([]);
  
  const STEPS = [
    t('listing.create.step.basicInfo'),
    t('listing.create.step.vehicleDetails'),
    t('listing.create.step.locationAvailability'),
    t('listing.create.step.pricing'),
    t('listing.create.step.photos'),
    t('listing.create.step.review')
  ];

  const CATEGORIES = [
    { key: 'car', label: t('listing.create.category.car') },
    { key: 'suv', label: t('listing.create.category.suv') },
    { key: 'truck', label: t('listing.create.category.truck') },
    { key: 'van', label: t('listing.create.category.van') },
    { key: 'luxury', label: t('listing.create.category.luxury') },
    { key: 'convertible', label: t('listing.create.category.convertible') },
    { key: 'exotic', label: t('listing.create.category.exotic') }
  ];
  
  // Redirect if not authenticated
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }
  
  // Check if user is verified
  if (!user?.isVerified) {
    return (
      <div className="pt-20 min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-card rounded-xl shadow-md p-8 text-center">
          <AlertCircle className="w-16 h-16 text-warning mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-foreground">{t('auth.verificationNeeded')}</h2>
          <p className="text-muted-foreground mb-6">
            You need to verify your identity before creating a listing. This helps ensure the safety and trust of our community.
          </p>
          <button 
            onClick={() => navigate('/profile')}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
          >
            Go to Profile to Verify
          </button>
        </div>
      </div>
    );
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormData];
        return newErrors;
      });
    }
  };
  
  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => {
      const features = [...prev.features];
      
      if (features.includes(feature)) {
        return { ...prev, features: features.filter(f => f !== feature) };
      } else {
        return { ...prev, features: [...features, feature] };
      }
    });
  };
  
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newPhotos = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        photos: [...prev.photos, ...newPhotos]
      }));
      
      // Create URL previews
      const newURLs = newPhotos.map(file => URL.createObjectURL(file));
      setPhotoURLs(prev => [...prev, ...newURLs]);
    }
  };
  
  const removePhoto = (index: number) => {
    setFormData(prev => {
      const photos = [...prev.photos];
      photos.splice(index, 1);
      return { ...prev, photos };
    });
    
    // Also remove from preview URLs
    setPhotoURLs(prev => {
      const urls = [...prev];
      URL.revokeObjectURL(urls[index]); // Clean up URL object
      urls.splice(index, 1);
      return urls;
    });
  };
  
  const validateCurrentStep = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    
    switch (currentStep) {
      case 0: // Basic Info
        if (!formData.title) {
          newErrors.title = t('validation.titleRequired');
        }
        if (!formData.description) {
          newErrors.description = t('validation.descriptionRequired');
        }
        break;
      case 1: // Vehicle Details
        if (!formData.make) {
          newErrors.make = t('validation.makeRequired');
        }
        if (!formData.model) {
          newErrors.model = t('validation.modelRequired');
        }
        if (!formData.year) {
          newErrors.year = t('validation.yearRequired');
        }
        if (!formData.category) {
          newErrors.category = t('validation.categoryRequired');
        }
        break;
      case 2: // Location & Availability
        if (!formData.location) {
          newErrors.location = t('validation.locationRequired');
        }
        break;
      case 3: // Pricing
        if (!formData.price) {
          newErrors.price = t('validation.priceRequired');
        } else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
          newErrors.price = t('validation.priceInvalid');
        }
        break;
      case 4: // Photos
        if (formData.photos.length === 0) {
          newErrors.photos = t('validation.photosRequired');
        }
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const goToNextStep = () => {
    if (validateCurrentStep()) {
      if (currentStep === STEPS.length - 1) {
        // Submit form
        handleSubmit();
      } else {
        setCurrentStep(prev => prev + 1);
      }
    }
  };
  
  const goToPreviousStep = () => {
    setCurrentStep(prev => Math.max(0, prev - 1));
  };
  
  const handleSubmit = () => {
    // In a real app, this would send data to the backend
    console.log('Form submitted:', formData);
    
    // Navigate to the profile page
    navigate('/profile');
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Basic Info
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="title">
                {t('listing.create.title.label')} <span className="text-destructive">*</span>
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder={t('listing.create.title.placeholder')}
                value={formData.title}
                onChange={handleInputChange}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-destructive">{errors.title}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="description">
                {t('listing.create.description.label')} <span className="text-destructive">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder={t('listing.create.description.placeholder')}
                value={formData.description}
                onChange={handleInputChange}
              />
              {errors.description && (
                <p className="mt-1 text-sm text-destructive">{errors.description}</p>
              )}
            </div>
          </div>
        );
      
      case 1: // Vehicle Details
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="make">
                  {t('listing.create.make.label')} <span className="text-destructive">*</span>
                </label>
                <input
                  id="make"
                  name="make"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder={t('listing.create.make.placeholder')}
                  value={formData.make}
                  onChange={handleInputChange}
                />
                {errors.make && (
                  <p className="mt-1 text-sm text-destructive">{errors.make}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="model">
                  {t('listing.create.model.label')} <span className="text-destructive">*</span>
                </label>
                <input
                  id="model"
                  name="model"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder={t('listing.create.model.placeholder')}
                  value={formData.model}
                  onChange={handleInputChange}
                />
                {errors.model && (
                  <p className="mt-1 text-sm text-destructive">{errors.model}</p>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="year">
                  {t('listing.create.year.label')} <span className="text-destructive">*</span>
                </label>
                <input
                  id="year"
                  name="year"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder={t('listing.create.year.placeholder')}
                  value={formData.year}
                  onChange={handleInputChange}
                />
                {errors.year && (
                  <p className="mt-1 text-sm text-destructive">{errors.year}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="category">
                  {t('listing.create.category.label')} <span className="text-destructive">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="">{t('listing.create.category.placeholder')}</option>
                  {CATEGORIES.map(category => (
                    <option key={category.key} value={category.key}>{category.label}</option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-destructive">{errors.category}</p>
                )}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                {t('listing.create.features.label')}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {FEATURES.map(feature => (
                  <label 
                    key={feature}
                    className={cn(
                      "flex items-center p-3 border rounded-lg cursor-pointer transition-colors",
                      formData.features.includes(feature)
                        ? "bg-primary/10 border-primary"
                        : "bg-card border-input hover:bg-accent"
                    )}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={formData.features.includes(feature)}
                      onChange={() => handleFeatureToggle(feature)}
                    />
                    <span 
                      className={cn(
                        "w-5 h-5 rounded-full border flex items-center justify-center mr-2",
                        formData.features.includes(feature)
                          ? "bg-primary border-primary text-primary-foreground"
                          : "border-input"
                      )}
                    >
                      {formData.features.includes(feature) && <Check size={12} />}
                    </span>
                    <span className="text-foreground">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 2: // Location & Availability
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="location">
                {t('listing.create.location.label')} <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-muted-foreground" size={18} />
                <input
                  id="location"
                  name="location"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10"
                  placeholder={t('listing.create.location.placeholder')}
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </div>
              {errors.location && (
                <p className="mt-1 text-sm text-destructive">{errors.location}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                {t('listing.create.availability.label')}
              </label>
              <div className="bg-muted p-6 rounded-lg border border-border text-center">
                <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <h3 className="text-lg font-medium mb-2 text-foreground">{t('listing.create.availability.comingSoon')}</h3>
                <p className="text-muted-foreground">
                  {t('listing.create.availability.description')}
                </p>
              </div>
            </div>
          </div>
        );
      
      case 3: // Pricing
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="price">
                {t('listing.create.price.label')} <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 text-muted-foreground" size={18} />
                <input
                  id="price"
                  name="price"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10"
                  placeholder={t('listing.create.price.placeholder')}
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </div>
              {errors.price && (
                <p className="mt-1 text-sm text-destructive">{errors.price}</p>
              )}
            </div>
            
            <div className="bg-muted p-6 rounded-lg border border-border">
              <h3 className="text-lg font-medium mb-3 text-foreground">{t('listing.create.priceBreakdown')}</h3>
              
              {formData.price && !isNaN(Number(formData.price)) ? (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">{t('listing.create.dailyPrice')}</span>
                    <span className="font-medium text-foreground">${formData.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">{t('listing.create.serviceFee')}</span>
                    <span className="font-medium text-foreground">-${(Number(formData.price) * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="pt-2 border-t border-border flex justify-between items-center">
                    <span className="font-medium text-foreground">{t('listing.create.youEarn')}</span>
                    <span className="font-bold text-foreground">${(Number(formData.price) * 0.9).toFixed(2)}</span>
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground">
                  {t('listing.create.enterValidPrice')}
                </p>
              )}
            </div>
          </div>
        );
      
      case 4: // Photos
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                {t('listing.create.photos.label')} <span className="text-destructive">*</span>
              </label>
              <div className={cn(
                "border-2 border-dashed rounded-lg p-6 text-center",
                errors.photos ? "border-destructive" : "border-input hover:border-primary"
              )}>
                <input
                  type="file"
                  id="photos"
                  className="hidden"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoUpload}
                />
                <label htmlFor="photos" className="cursor-pointer">
                  <div className="flex flex-col items-center">
                    <Upload className="w-12 h-12 text-muted-foreground mb-2" />
                    <span className="font-medium text-foreground">{t('listing.create.photos.upload')}</span>
                    <span className="text-sm text-muted-foreground mt-1">
                      {t('listing.create.photos.format')}
                    </span>
                  </div>
                </label>
              </div>
              {errors.photos && (
                <p className="mt-1 text-sm text-destructive">{errors.photos}</p>
              )}
            </div>
            
            {photoURLs.length > 0 && (
              <div>
                <h3 className="text-sm font-medium mb-3 text-foreground">{t('listing.create.photos.uploaded')}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {photoURLs.map((url, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={url} 
                        alt={`Vehicle photo ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        className="absolute top-2 right-2 bg-background rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removePhoto(index)}
                      >
                        <X size={16} className="text-destructive" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      
      case 5: // Review
        return (
          <div className="space-y-6">
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="bg-muted px-6 py-4 border-b border-border">
                <h3 className="font-medium text-foreground">{t('listing.create.basicInformation')}</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">{t('listing.create.title.label')}</div>
                    <div className="font-medium text-foreground">{formData.title}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground">{t('listing.create.category.label')}</div>
                    <div className="font-medium text-foreground">
                      {CATEGORIES.find(c => c.key === formData.category)?.label || formData.category}
                    </div>
                  </div>
                  
                  <div className="col-span-2">
                    <div className="text-sm text-muted-foreground">{t('listing.create.description.label')}</div>
                    <div className="font-medium text-foreground">{formData.description}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="bg-muted px-6 py-4 border-b border-border">
                <h3 className="font-medium text-foreground">{t('listing.create.vehicleDetails')}</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">{t('listing.create.make.label')}</div>
                    <div className="font-medium text-foreground">{formData.make}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground">{t('listing.create.model.label')}</div>
                    <div className="font-medium text-foreground">{formData.model}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground">{t('listing.create.year.label')}</div>
                    <div className="font-medium text-foreground">{formData.year}</div>
                  </div>
                  
                  <div className="col-span-full">
                    <div className="text-sm text-muted-foreground">{t('listing.create.features.label')}</div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {formData.features.length > 0 ? (
                        formData.features.map(feature => (
                          <span key={feature} className="px-2 py-1 bg-muted rounded-full text-sm text-foreground">
                            {feature}
                          </span>
                        ))
                      ) : (
                        <span className="text-muted-foreground">{t('listing.create.noFeatures')}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="bg-muted px-6 py-4 border-b border-border">
                <h3 className="font-medium text-foreground">{t('listing.create.locationPricing')}</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">{t('listing.create.location.label')}</div>
                    <div className="font-medium text-foreground">{formData.location}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground">{t('listing.create.price.label')}</div>
                    <div className="font-medium text-foreground">${formData.price}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="bg-muted px-6 py-4 border-b border-border">
                <h3 className="font-medium text-foreground">{t('listing.create.photos.label')}</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {photoURLs.map((url, index) => (
                    <img 
                      key={index} 
                      src={url} 
                      alt={`Vehicle photo ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6 text-foreground">{t('listing.create.title')}</h1>
        
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {STEPS.map((step, index) => (
              <div 
                key={index}
                className={cn(
                  "relative flex flex-col items-center",
                  "md:flex-1"
                )}
              >
                <div 
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-white font-medium mb-2",
                    index < currentStep 
                      ? "bg-green-500" 
                      : index === currentStep 
                        ? "bg-primary" 
                        : "bg-muted-foreground"
                  )}
                >
                  {index < currentStep ? (
                    <Check size={20} />
                  ) : (
                    index + 1
                  )}
                </div>
                <div className="text-sm text-center hidden md:block text-foreground">
                  {step}
                </div>
                
                {/* Connector line */}
                {index < STEPS.length - 1 && (
                  <div 
                    className={cn(
                      "hidden md:block absolute h-0.5 top-5 w-full left-1/2",
                      index < currentStep 
                        ? "bg-green-500" 
                        : "bg-muted-foreground"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile step indicator */}
          <div className="flex justify-center mt-4 md:hidden">
            <span className="font-medium text-foreground">
              {t('listing.create.step')} {currentStep + 1}: {STEPS[currentStep]}
            </span>
          </div>
        </div>
        
        {/* Form Content */}
        <div className="bg-card rounded-xl shadow-md">
          <div className="p-6">
            {renderStepContent()}
          </div>
          
          {/* Navigation Buttons */}
          <div className="px-6 py-4 border-t border-border flex justify-between">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              onClick={goToPreviousStep}
              disabled={currentStep === 0}
            >
              <ChevronLeft size={18} className="mr-2" />
              {t('listing.create.back')}
            </button>
            
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              onClick={goToNextStep}
            >
              {currentStep === STEPS.length - 1 ? (
                t('listing.create.submit')
              ) : (
                <>
                  {t('listing.create.next')}
                  <ChevronRight size={18} className="ml-2" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateListingPage;