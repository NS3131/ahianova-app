import React from 'react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import { cn } from '../utils/cn';

interface ProductDetailsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  isOpen,
  onClose
}) => {
  const { addToCart } = useCart();

  if (!product || !isOpen) return null;

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
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
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-brand-primary">Product Details</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder-product.jpg';
                    }}
                  />
                  
                  {/* Availability Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={cn(
                      'px-3 py-1 text-sm font-medium rounded-full border',
                      product.availability === 'In Stock' && 'bg-green-100 text-green-800 border-green-200',
                      product.availability === 'Seasonal' && 'bg-yellow-100 text-yellow-800 border-yellow-200',
                      product.availability === 'Out of Stock' && 'bg-red-100 text-red-800 border-red-200'
                    )}>
                      {product.availability}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                {product.rating > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      {product.rating}/5
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                {/* Basic Info */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-brand-primary bg-brand-primary/10 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{product.origin}</span>
                  </div>
                  
                  <h1 className="text-3xl font-bold text-brand-primary mb-2">
                    {product.name}
                  </h1>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price and Quantity */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-3xl font-bold text-brand-primary">
                      ${product.price}
                    </div>
                    <div className="text-sm text-gray-600">
                      {product.quantity} available
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Harvested:</div>
                    <div className="text-sm font-medium">
                      {new Date(product.harvestDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                {/* Farmer Info */}
                <div className="p-4 bg-brand-primary/5 rounded-lg">
                  <h3 className="font-semibold text-brand-primary mb-2">Farmer Information</h3>
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center text-lg">
                      👨‍🌾
                    </span>
                    <div>
                      <div className="font-medium">{product.farmerName}</div>
                      <div className="text-sm text-gray-600">Verified Farmer</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-brand-primary mb-3">Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <span
                          key={index}
                          className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certifications */}
                {product.certifications && product.certifications.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-brand-primary mb-3">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.certifications.map((cert, index) => (
                        <span
                          key={index}
                          className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full border border-green-200"
                        >
                          ✓ {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Nutritional Info */}
                {product.nutritionalInfo && (
                  <div>
                    <h3 className="font-semibold text-brand-primary mb-2">Nutritional Information</h3>
                    <p className="text-sm text-gray-600">{product.nutritionalInfo}</p>
                  </div>
                )}

                {/* Storage Instructions */}
                {product.storageInstructions && (
                  <div>
                    <h3 className="font-semibold text-brand-primary mb-2">Storage Instructions</h3>
                    <p className="text-sm text-gray-600">{product.storageInstructions}</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={product.availability === 'Out of Stock'}
                    className={cn(
                      'flex-1 btn-primary text-lg py-3',
                      product.availability === 'Out of Stock' && 'opacity-50 cursor-not-allowed'
                    )}
                  >
                    {product.availability === 'Out of Stock' ? 'Out of Stock' : 'Add to Cart'}
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 btn-secondary text-lg py-3"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
