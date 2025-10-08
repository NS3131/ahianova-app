import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DashboardNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
    }
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/dashboard" className="text-2xl font-bold text-brand-primary">
          Ahianova
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link to="/how-it-works" className="hover:text-brand-primary transition">
            How It Works
          </Link>
          <Link to="/our-products" className="hover:text-brand-primary transition">
            Our Products
          </Link>
          <Link to="/our-farmers" className="hover:text-brand-primary transition">
            Our Farmers
          </Link>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="hidden md:inline-flex rounded bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          Logout
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger Icon */}
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4 space-y-3">
          <Link
            to="/how-it-works"
            className="block text-gray-700 hover:text-brand-primary"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </Link>
          <Link
            to="/our-products"
            className="block text-gray-700 hover:text-brand-primary"
            onClick={() => setIsOpen(false)}
          >
            Our Products
          </Link>
          <Link
            to="/our-farmers"
            className="block text-gray-700 hover:text-brand-primary"
            onClick={() => setIsOpen(false)}
          >
            Our Farmers
          </Link>
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              handleLogout();
            }}
            className="w-full rounded bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default DashboardNavbar;
