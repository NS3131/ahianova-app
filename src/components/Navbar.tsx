import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CartButton from './CartButton';
import Logo from './Logo';
import { useAuth } from '../hooks/useAuth';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDashboard = location.pathname.startsWith('/dashboard');

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  if (isDashboard) return null;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3 text-2xl font-bold text-brand-primary hover:text-brand-primary-hover transition-all duration-300"
        >
          <div className="group-hover:scale-110 transition-transform duration-300">
            <Logo size="md" />
          </div>
          <span className="text-brand-primary">Ahianova</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <Link to="/how-it-works" className="nav-link">How It Works</Link>
          <Link to="/our-products" className="nav-link">Our Products</Link>
          <Link to="/our-farmers" className="nav-link">Our Farmers</Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <CartButton />
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="btn-secondary text-sm">Dashboard</Link>
              <button onClick={handleLogout} className="btn-primary text-sm">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-secondary text-sm">Login</Link>
              <Link to="/signup" className="btn-primary text-sm">Sign Up</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-brand-primary hover:bg-gray-100"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <Link to="/how-it-works" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>How It Works</Link>
            <Link to="/our-products" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Our Products</Link>
            <Link to="/our-farmers" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Our Farmers</Link>

            <div className="pt-2 border-t border-gray-200 space-y-2">
              <div className="flex justify-center">
                <CartButton />
              </div>
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="block btn-secondary text-sm w-full text-center">Dashboard</Link>
                  <button onClick={handleLogout} className="block btn-primary text-sm w-full text-center">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block btn-secondary text-sm w-full text-center">Login</Link>
                  <Link to="/signup" className="block btn-primary text-sm w-full text-center">Sign Up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
