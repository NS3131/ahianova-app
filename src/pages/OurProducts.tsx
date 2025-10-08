import React, { useState } from 'react';
import { Product } from '../types';
import ProductList from '../components/ProductList';
import ProductDetailsModal from '../components/ProductDetailsModal';
import CartTest from '../components/CartTest';
import { useCart } from '../contexts/CartContext';

const OurProducts: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product: Product) => {
    console.log('Adding product to cart:', product.name);
    addToCart(product);
    console.log('Product added to cart successfully!');
    // You could show a toast notification here
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-7xl px-4 py-12">
        {/* Header Section */}
        <section className="mb-16 text-center relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent" />
          
          <div className="relative">
            <h1 className="mb-6 text-5xl font-bold text-brand-primary sm:text-6xl">
              Our Premium Products
            </h1>
            
            <p className="mx-auto max-w-4xl text-xl text-gray-600 leading-relaxed">
              Discover our carefully curated selection of high-quality agricultural products 
              sourced directly from trusted farmers around the world. Every product is 
              verified for quality and sustainability.
            </p>
          </div>
        </section>

        {/* Product List */}
        <section>
          <ProductList
            onProductSelect={handleProductSelect}
            onAddToCart={handleAddToCart}
            showFilters={true}
          />
        </section>

        {/* Features Section */}
        <section className="mt-20 py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent" />
          
          <div className="relative mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">
                Why Choose Our Products?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We ensure every product meets the highest standards of quality, sustainability, and freshness.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group text-center relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary to-brand-primary-lighter rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative card hover:shadow-brand-xl transition-all duration-500 h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary/10 to-brand-primary-lighter/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🌾</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">Premium Quality</h3>
                  <p className="text-gray-600 leading-relaxed">All products are carefully selected and verified for quality and freshness by our expert team.</p>
                </div>
              </div>
              
              <div className="group text-center relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary-lighter to-brand-primary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative card hover:shadow-brand-xl transition-all duration-500 h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary-lighter/10 to-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🚚</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">Fast Delivery</h3>
                  <p className="text-gray-600 leading-relaxed">Quick and reliable shipping to ensure your products arrive fresh and in perfect condition.</p>
                </div>
              </div>
              
              <div className="group text-center relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary to-brand-primary-lighter rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative card hover:shadow-brand-xl transition-all duration-500 h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary/10 to-brand-primary-lighter/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">Direct from Farmers</h3>
                  <p className="text-gray-600 leading-relaxed">Support local farmers and get the freshest products directly from the source with fair trade practices.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Product Details Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Cart Test Component - Remove this after testing */}
      <CartTest />
    </div>
  );
};

export default OurProducts;