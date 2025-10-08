import React from 'react';
import { Product } from '../types';
import { cn } from '../utils/cn';

interface ProductCardProps {
  product: Product;
  className?: string;
  onViewDetails?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  className,
  onViewDetails,
  onAddToCart 
}) => {
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'In Stock':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Seasonal':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Out of Stock':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={cn(
          'text-lg',
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        )}
      >
        ★
      </span>
    ));
  };

  return (
    <div className={cn(
      'card group hover:shadow-brand-xl transition-all duration-500 cursor-pointer',
      'transform hover:-translate-y-2 flex flex-col h-full relative overflow-hidden',
      'bg-white/95 backdrop-blur-sm border border-gray-100',
      className
    )}>
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-xl mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder-product.jpg';
          }}
        />
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Availability Badge */}
        <div className="absolute top-4 right-4">
          <span className={cn(
            'px-3 py-1.5 text-xs font-semibold rounded-full border backdrop-blur-sm',
            getAvailabilityColor(product.availability)
          )}>
            {product.availability}
          </span>
        </div>

        {/* Rating Badge */}
        {product.rating > 0 && (
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-white/20">
            <div className="flex items-center gap-1">
              {renderStars(product.rating)}
              <span className="text-xs font-semibold ml-1 text-gray-700">{product.rating}</span>
            </div>
          </div>
        )}
      </div>

      {/* Product Info - Flex grow to push buttons to bottom */}
      <div className="flex flex-col flex-grow space-y-3">
        {/* Category */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-brand-primary bg-gradient-to-r from-brand-primary/10 to-brand-primary-lighter/10 px-3 py-1.5 rounded-full border border-brand-primary/20">
            {product.category}
          </span>
          <span className="text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-500 font-medium">{product.origin}</span>
        </div>

        {/* Product Name */}
        <h3 className="text-xl font-bold text-brand-primary group-hover:text-brand-primary-hover transition-colors line-clamp-2 leading-tight">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
          {product.description}
        </p>

        {/* Farmer Info */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="w-6 h-6 bg-brand-primary/20 rounded-full flex items-center justify-center text-xs font-medium text-brand-primary">
            👨‍🌾
          </span>
          <span>by {product.farmerName}</span>
        </div>

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
            {product.features.length > 3 && (
              <span className="text-xs text-gray-500">
                +{product.features.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Price and Quantity */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div>
            <div className="text-lg font-bold text-brand-primary">
              ${product.price}
            </div>
            <div className="text-xs text-gray-500">
              {product.quantity} available
            </div>
          </div>
          
          <div className="text-xs text-gray-500">
            Harvested: {new Date(product.harvestDate).toLocaleDateString()}
          </div>
        </div>

        {/* Certifications */}
        {product.certifications && product.certifications.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {product.certifications.map((cert, index) => (
              <span
                key={index}
                className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200"
              >
                ✓ {cert}
              </span>
            ))}
          </div>
        )}

        {/* Spacer to push buttons to bottom */}
        <div className="flex-grow"></div>

        {/* Action Buttons - Always at bottom */}
        <div className="flex gap-3 pt-4 mt-auto">
          <button
            onClick={() => onViewDetails?.(product)}
            className="flex-1 btn-secondary text-sm py-3 font-semibold hover:scale-105 transition-transform duration-200"
          >
            View Details
          </button>
          <button
            onClick={() => onAddToCart?.(product)}
            disabled={product.availability === 'Out of Stock'}
            className={cn(
              'flex-1 btn-primary text-sm py-3 font-semibold hover:scale-105 transition-transform duration-200',
              product.availability === 'Out of Stock' && 'opacity-50 cursor-not-allowed hover:scale-100'
            )}
          >
            {product.availability === 'Out of Stock' ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
