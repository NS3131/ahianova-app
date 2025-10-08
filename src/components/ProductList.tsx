import React, { useState, useEffect } from 'react';
import { Product, ProductFilters } from '../types';
import { productService } from '../services/productService';
import ProductCard from './ProductCard';
import { cn } from '../utils/cn';

interface ProductListProps {
  filters?: ProductFilters;
  className?: string;
  onProductSelect?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  showFilters?: boolean;
}

const ProductList: React.FC<ProductListProps> = ({
  filters = {},
  className,
  onProductSelect,
  onAddToCart,
  showFilters = true
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [localFilters, setLocalFilters] = useState<ProductFilters>(filters);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Fetch products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await productService.getAllProducts();
      setProducts(data);
    } catch (err) {
      setError('Failed to load products. Please try again.');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products based on local filters
  const filteredProducts = products.filter(product => {
    if (localFilters.search && !product.name.toLowerCase().includes(localFilters.search.toLowerCase())) {
      return false;
    }
    if (localFilters.category && product.category !== localFilters.category) {
      return false;
    }
    if (localFilters.availability && product.availability !== localFilters.availability) {
      return false;
    }
    if (localFilters.origin && product.origin !== localFilters.origin) {
      return false;
    }
    return true;
  });

  const handleFilterChange = (key: keyof ProductFilters, value: string) => {
    setLocalFilters(prev => ({
      ...prev,
      [key]: value || undefined
    }));
  };

  const clearFilters = () => {
    setLocalFilters({});
  };

  const categories = [...new Set(products.map(p => p.category))];
  const origins = [...new Set(products.map(p => p.origin))];
  const availabilities = ['In Stock', 'Seasonal', 'Out of Stock'];

  if (loading) {
    return (
      <div className={cn('flex items-center justify-center py-12', className)}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn('text-center py-12', className)}>
        <div className="text-red-600 mb-4">
          <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p className="text-lg font-medium">{error}</p>
        </div>
        <button
          onClick={fetchProducts}
          className="btn-primary"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className={cn('space-y-6', className)}>
      {/* Filters and Controls */}
      {showFilters && (
        <div className="card">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search products..."
                value={localFilters.search || ''}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="input-field"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <select
                value={localFilters.category || ''}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="input-field min-w-[120px]"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={localFilters.availability || ''}
                onChange={(e) => handleFilterChange('availability', e.target.value)}
                className="input-field min-w-[120px]"
              >
                <option value="">All Status</option>
                {availabilities.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>

              <select
                value={localFilters.origin || ''}
                onChange={(e) => handleFilterChange('origin', e.target.value)}
                className="input-field min-w-[120px]"
              >
                <option value="">All Origins</option>
                {origins.map(origin => (
                  <option key={origin} value={origin}>{origin}</option>
                ))}
              </select>

              <button
                onClick={clearFilters}
                className="btn-secondary text-sm"
              >
                Clear
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={cn(
                  'px-3 py-2 text-sm transition-colors',
                  viewMode === 'grid' 
                    ? 'bg-brand-primary text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                )}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={cn(
                  'px-3 py-2 text-sm transition-colors',
                  viewMode === 'list' 
                    ? 'bg-brand-primary text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                )}
              >
                List
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>

      {/* Products Grid/List */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your filters or search terms.</p>
          <button
            onClick={clearFilters}
            className="btn-primary"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className={cn(
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-4'
        )}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onViewDetails={onProductSelect}
              onAddToCart={onAddToCart}
              className={viewMode === 'list' ? 'flex flex-row' : ''}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
