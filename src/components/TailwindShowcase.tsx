import React from 'react';
import { cn } from '../utils/cn';

const TailwindShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-sand p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gradient mb-4">
            Tailwind CSS Showcase
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Demonstrating the power of Tailwind CSS with custom utilities, animations, and responsive design.
          </p>
        </div>

        {/* Color Palette */}
        <section className="card">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Brand Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-lg mx-auto mb-2"></div>
              <p className="text-sm font-medium">Primary</p>
              <p className="text-xs text-gray-500">#065f46</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary-hover rounded-lg mx-auto mb-2"></div>
              <p className="text-sm font-medium">Primary Hover</p>
              <p className="text-xs text-gray-500">#047857</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary-light rounded-lg mx-auto mb-2"></div>
              <p className="text-sm font-medium">Primary Light</p>
              <p className="text-xs text-gray-500">#10b981</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-sand rounded-lg mx-auto mb-2 border border-gray-300"></div>
              <p className="text-sm font-medium">Sand</p>
              <p className="text-xs text-gray-500">#f5f5dc</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="card">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Button Variants</h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">Primary Button</button>
            <button className="btn-secondary">Secondary Button</button>
            <button className="btn-primary bg-brand-primary-light hover:bg-brand-primary">Custom Primary</button>
            <button className="btn-secondary border-brand-primary-light text-brand-primary-light hover:bg-brand-primary-light hover:text-white">Custom Secondary</button>
          </div>
        </section>

        {/* Animations */}
        <section className="card">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-primary rounded-lg mx-auto mb-4 animate-fade-in"></div>
              <p className="text-sm font-medium">Fade In</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-primary-light rounded-lg mx-auto mb-4 animate-slide-up"></div>
              <p className="text-sm font-medium">Slide Up</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-primary-hover rounded-lg mx-auto mb-4 animate-bounce-gentle"></div>
              <p className="text-sm font-medium">Gentle Bounce</p>
            </div>
          </div>
        </section>

        {/* Shadows */}
        <section className="card">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Custom Shadows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-brand">
              <h3 className="font-semibold mb-2">Brand Shadow</h3>
              <p className="text-gray-600">Custom shadow with brand color</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-brand-lg">
              <h3 className="font-semibold mb-2">Brand Shadow Large</h3>
              <p className="text-gray-600">Larger custom shadow with brand color</p>
            </div>
          </div>
        </section>

        {/* Responsive Grid */}
        <section className="card">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Responsive Grid</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-brand transition-shadow duration-300">
                <div className="w-full h-20 bg-gradient-to-br from-brand-primary to-brand-primary-light rounded mb-2"></div>
                <p className="text-sm font-medium">Item {item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Form Elements */}
        <section className="card">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Form Elements</h2>
          <div className="max-w-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                className="input-field" 
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                className="input-field h-24 resize-none" 
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button className="btn-primary w-full">Submit</button>
          </div>
        </section>

        {/* Utility Classes Demo */}
        <section className="card">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Utility Classes</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-brand-primary to-brand-primary-light rounded-lg text-white">
              <p className="font-semibold">Gradient Background</p>
              <p className="text-sm opacity-90">Using custom gradient utilities</p>
            </div>
            <div className="p-4 border-l-4 border-brand-primary bg-brand-sand-light rounded-r-lg">
              <p className="font-semibold text-brand-primary">Custom Spacing</p>
              <p className="text-sm text-gray-600">Using custom spacing values (18, 88, 128)</p>
            </div>
            <div className="p-4 bg-white rounded-4xl border-2 border-brand-primary">
              <p className="font-semibold text-brand-primary">Custom Border Radius</p>
              <p className="text-sm text-gray-600">Using custom 4xl border radius</p>
            </div>
          </div>
        </section>

        {/* Interactive Elements */}
        <section className="card">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Interactive Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group cursor-pointer">
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 group-hover:shadow-brand-lg group-hover:border-brand-primary transition-all duration-300">
                <h3 className="font-semibold group-hover:text-brand-primary transition-colors">Hover Card</h3>
                <p className="text-gray-600 mt-2">Hover to see the effect</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <div className="p-6 bg-gradient-to-br from-brand-primary to-brand-primary-light text-white transform hover:scale-105 transition-transform duration-300">
                <h3 className="font-semibold">Scale on Hover</h3>
                <p className="text-sm opacity-90 mt-2">Hover to scale up</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TailwindShowcase;
