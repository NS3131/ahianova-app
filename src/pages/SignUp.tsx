
// ============================================
// FILE: src/pages/SignUp.tsx
// ============================================
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import { register } from '../services/authService';
import { useAuth } from '../hooks/useAuth';
import type { RegisterFormData } from '../types';

const COUNTRY_OPTIONS = [
  { value: 'algeria', label: 'Algeria' },
  { value: 'canada', label: 'Canada' },
  { value: 'china', label: 'China' },
  { value: 'egypt', label: 'Egypt' },
  { value: 'ethiopia', label: 'Ethiopia' },
  { value: 'france', label: 'France' },
  { value: 'germany', label: 'Germany' },
  { value: 'india', label: 'India' },
  { value: 'japan', label: 'Japan' },
  { value: 'kenya', label: 'Kenya' },
  { value: 'morocco', label: 'Morocco' },
  { value: 'south-africa', label: 'South Africa' },
  { value: 'tanzania', label: 'Tanzania' },
  { value: 'tunisia', label: 'Tunisia' },
  { value: 'nigeria', label: 'Nigeria' },
  { value: 'uganda', label: 'Uganda' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'usa', label: 'United States' },
];

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login: authLogin } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    setError(null);
    setSuccess(null);
    setLoading(true);

    const firstName = (formData.get('firstName') as string | null)?.trim() ?? '';
    const lastName = (formData.get('lastName') as string | null)?.trim() ?? '';
    const companyName = (formData.get('companyName') as string | null)?.trim() ?? '';
    const country = (formData.get('country') as string | null)?.trim() ?? '';
    const phoneNumber = (formData.get('phoneNumber') as string | null)?.trim() ?? '';
    const email = (formData.get('email') as string | null)?.trim() ?? '';
    const password = (formData.get('password') as string | null)?.trim() ?? '';

    if (!firstName || !lastName || !companyName || !country || !phoneNumber || !email || !password) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    const newUser: RegisterFormData = {
      firstName,
      lastName,
      companyName,
      country,
      phoneNumber,
      email,
      password,
    };

    try {
      const result = await register(newUser);

      if (!result.success) {
        setError(result.error ?? 'Unable to complete registration. Please try again.');
        setLoading(false);
        return;
      }

      setSuccess('Registration successful!');

      // Redirect to login page
      setTimeout(() => {
        navigate('/login', { replace: true });
      }, 1500);

    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold text-center text-brand-primary mb-6">
        Sign Up for Ahianova
      </h2>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <FormInput label="First Name" id="firstName" type="text" required />
        <FormInput label="Last Name" id="lastName" type="text" required />
        <FormInput label="Company Name" id="companyName" type="text" required />

        <div className="mb-4">
          <label htmlFor="country" className="block font-medium mb-1">
            Country <span className="text-red-500">*</span>
          </label>
          <select
            id="country"
            name="country"
            required
            defaultValue=""
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            <option value="" disabled>
              Select your country
            </option>
            {COUNTRY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <FormInput
          label="Phone Number"
          id="phoneNumber"
          type="tel"
          placeholder="+ country code"
          required
        />
        <FormInput label="Email" id="email" type="email" required />
        <FormInput label="Password" id="password" type="password" required />
        
        <Button 
          text={loading ? "Signing up..." : "Sign Up"} 
          type="submit" 
          disabled={loading}
        />
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="text-brand-primary hover:underline">
          Login here
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignUp;