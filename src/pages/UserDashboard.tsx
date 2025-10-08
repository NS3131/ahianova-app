import React from 'react';
import { Link } from 'react-router-dom';
import DashboardNavbar from '../components/DashboardNavbar';

const UserDashboard: React.FC = () => {
  return (
    <div className="min-h-screen text-brand-primary">
      <DashboardNavbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
        <section className="text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
              🌱 Welcome Back
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-brand-primary sm:text-5xl mb-6">
            Welcome back to Ahianova
          </h1>
          
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
            Track the marketplace, connect with trusted farmers, and manage your sourcing in one
            place. Select an option below to get started with your agricultural journey.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Link
            to="/how-it-works"
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary to-brand-primary-lighter rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative card hover:shadow-brand-xl transition-all duration-500 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-primary/10 to-brand-primary-lighter/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📋</span>
              </div>
              <h2 className="text-xl font-bold text-brand-primary mb-3">How it works</h2>
              <p className="text-gray-600 leading-relaxed">
                Learn about our sourcing workflow, payments, and logistics support.
              </p>
            </div>
          </Link>

          <Link
            to="/our-products"
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary-lighter to-brand-primary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative card hover:shadow-brand-xl transition-all duration-500 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-primary-lighter/10 to-brand-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🌾</span>
              </div>
              <h2 className="text-xl font-bold text-brand-primary mb-3">Browse products</h2>
              <p className="text-gray-600 leading-relaxed">
                Explore verified commodities and secure offers tailored to your needs.
              </p>
            </div>
          </Link>

          <Link
            to="/our-farmers"
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary to-brand-primary-lighter rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative card hover:shadow-brand-xl transition-all duration-500 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-primary/10 to-brand-primary-lighter/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👨‍🌾</span>
              </div>
              <h2 className="text-xl font-bold text-brand-primary mb-3">Meet farmers</h2>
              <p className="text-gray-600 leading-relaxed">
                Connect with growers, review certifications, and build relationships.
              </p>
            </div>
          </Link>

          <Link
            to="/tailwind-showcase"
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary-lighter to-brand-primary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative card hover:shadow-brand-xl transition-all duration-500 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-primary-lighter/10 to-brand-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🎨</span>
              </div>
              <h2 className="text-xl font-bold text-brand-primary mb-3">Design Showcase</h2>
              <p className="text-gray-600 leading-relaxed">
                Explore our Tailwind CSS components and design system.
              </p>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default UserDashboard;




