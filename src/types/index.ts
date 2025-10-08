// types/index.ts

export interface AuthFormData {
  email: string;
  password: string;
}

export interface RegisterFormData extends AuthFormData {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  phoneNumber: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price: string;
  quantity: string;
  availability: 'In Stock' | 'Seasonal' | 'Out of Stock';
  origin: string;
  nutritionalInfo?: string;
  storageInstructions?: string;
  certifications: string[];
  farmerName: string;
  harvestDate: string;
  rating: number;
  features: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductFilters {
  category?: string;
  availability?: string;
  origin?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}
