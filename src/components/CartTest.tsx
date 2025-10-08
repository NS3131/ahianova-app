import React from 'react';
import { useCart } from '../contexts/CartContext';

const CartTest: React.FC = () => {
  const { state, addToCart, getTotalItems, getTotalPrice } = useCart();

  const testProduct = {
    _id: 'test-1',
    name: 'Test Product',
    description: 'A test product for cart functionality',
    image: '/placeholder-product.jpg',
    category: 'Test',
    price: '10.00',
    quantity: '1 kg',
    availability: 'In Stock' as const,
    origin: 'Test Country',
    certifications: ['Test'],
    farmerName: 'Test Farmer',
    harvestDate: '2024-01-01',
    rating: 5,
    features: ['Test Feature'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  };

  const handleTestAdd = () => {
    console.log('Adding test product to cart...');
    addToCart(testProduct);
    console.log('Cart state after add:', state);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200 z-50">
      <h3 className="font-semibold text-brand-primary mb-2">Cart Test</h3>
      <p className="text-sm text-gray-600 mb-2">
        Items: {getTotalItems()} | Total: ${getTotalPrice().toFixed(2)}
      </p>
      <button
        onClick={handleTestAdd}
        className="btn-primary text-sm"
      >
        Add Test Product
      </button>
      <div className="mt-2 text-xs text-gray-500">
        Cart Open: {state.isOpen ? 'Yes' : 'No'}
      </div>
    </div>
  );
};

export default CartTest;
