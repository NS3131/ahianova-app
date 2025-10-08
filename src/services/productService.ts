import { Product, ProductFilters } from '../types';
import { sampleProducts } from '../data/sampleProducts';

const API_BASE_URL = 'http://localhost:3001/api';

export const productService = {
  // Get all products
  async getAllProducts(): Promise<Product[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching products from API, using sample data:', error);
      // Return sample data when API is not available
      return sampleProducts;
    }
  },

  // Get a single product by ID
  async getProductById(id: string): Promise<Product> {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching product from API, using sample data:', error);
      // Return sample data when API is not available
      const product = sampleProducts.find(p => p._id === id);
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    }
  },

  // Get products with filters
  async getFilteredProducts(filters: ProductFilters): Promise<Product[]> {
    try {
      const queryParams = new URLSearchParams();
      
      if (filters.category) queryParams.append('category', filters.category);
      if (filters.availability) queryParams.append('availability', filters.availability);
      if (filters.origin) queryParams.append('origin', filters.origin);
      if (filters.minPrice) queryParams.append('minPrice', filters.minPrice.toString());
      if (filters.maxPrice) queryParams.append('maxPrice', filters.maxPrice.toString());
      if (filters.search) queryParams.append('search', filters.search);

      const response = await fetch(`${API_BASE_URL}/products?${queryParams}`);
      if (!response.ok) {
        throw new Error('Failed to fetch filtered products');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching filtered products:', error);
      throw error;
    }
  },

  // Create a new product (for admin use)
  async createProduct(productData: Partial<Product>): Promise<Product> {
    try {
      const response = await fetch(`${API_BASE_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      if (!response.ok) {
        throw new Error('Failed to create product');
      }
      return await response.json();
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  },

  // Update a product (for admin use)
  async updateProduct(id: string, productData: Partial<Product>): Promise<Product> {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      if (!response.ok) {
        throw new Error('Failed to update product');
      }
      return await response.json();
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  },

  // Delete a product (for admin use)
  async deleteProduct(id: string): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  }
};
