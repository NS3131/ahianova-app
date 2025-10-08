import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import { login } from '../services/authService';
import { useAuth } from '../hooks/useAuth';
import type { AuthFormData } from '../types';

const BuyerLogin: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login: authLogin } = useAuth();
  const [error, setError] = useState("");

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setError(""); // Clear previous errors

  const formData = new FormData(e.currentTarget);
  const data: AuthFormData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  try {
    const isValid = await login(data);

    if (isValid) {
      authLogin("mock_token");
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    } else {
      setError("Invalid email or password");
    }
  } catch (err) {
    setError("Connection error. Please try again later.");
    console.error("Login error:", err);
  }
};


  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold text-center text-brand-primary mb-6">
        Login to Ahianova
      </h2>

      {error && (
        <p className="text-red-600 text-center mb-4">{error}</p>
      )}

      <form onSubmit={handleSubmit}>
        <FormInput label="Email" id="email" type="email" />
        <FormInput label="Password" id="password" type="password" />
        <Button text="Login" type="submit" />
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Need an account?{' '}
        <Link to="/signup" className="text-brand-primary hover:underline">
          Sign up here
        </Link>
      </p>
    </AuthLayout>
  );
};

export default BuyerLogin;
