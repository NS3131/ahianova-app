import React from 'react';
import { Link } from 'react-router-dom';
import heroAgriculture from '../assets/hero-agriculture.jpg';
import Button from '../components/Button';

const Welcome: React.FC = () => {
  return (
    <main className="min-h-screen font-sans text-brand-primary">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden min-h-screen">
        {/* Background with enhanced overlay */}
        <div className="absolute inset-0">
          <img
            src={heroAgriculture}
            alt="Agricultural fields"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/90 via-brand-primary/80 to-brand-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
        
        {/* Floating elements for visual interest - hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" />
        <div className="hidden sm:block absolute top-40 right-20 w-32 h-32 bg-brand-primary-lighter/20 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}} />
        <div className="hidden sm:block absolute bottom-20 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-float" style={{animationDelay: '4s'}} />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32 lg:px-8 flex items-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
                Welcome to Ahianova
              </h1>
              <p className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight max-w-3xl mb-8 sm:mb-12 lg:mb-16 xl:mb-32">
                Connecting African Agriculture to Global Market
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
                <Link to="/signup" className="group w-full sm:w-auto">
                  <Button text="Start Trading" size="lg" className="group-hover:scale-105 transition-transform duration-300 w-full sm:w-auto" />
                </Link>
                <Link to="/how-it-works" className="group w-full sm:w-auto">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 group-hover:scale-105 shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base">
                    Learn More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </Link>
              </div>

            </div>
            
            {/* Right side - Visual elements or could be kept empty for image focus */}
            <div className="hidden lg:block">
              {/* This space can be used for additional visual elements or kept minimal to focus on the background image */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-3xl text-center mb-48">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-brand-primary/10 text-brand-primary mb-6">
              <span className="text-brand-primary">✨</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-brand-primary sm:text-6xl mb-6">
              Revolutionizing Agricultural Trade
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              We're transforming the agricultural marketplace with cutting-edge technology, 
              complete transparency, and unwavering trust.
            </p>
          </div>
          
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary to-brand-primary-lighter rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative card hover:shadow-brand-xl transition-all duration-500 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-lighter rounded-xl flex items-center justify-center animate-bounce-gentle">
                      <span className="text-2xl" style={{filter: 'hue-rotate(120deg) saturate(1.5)'}}>🤝</span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-primary">Direct Trade</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Connect directly with farmers, eliminating middlemen and ensuring fair prices 
                    for both producers and buyers. Our platform creates transparent, 
                    mutually beneficial relationships.
                  </p>
                  <div className="mt-6 flex items-center text-sm text-brand-primary font-medium">
                    <span>Learn more</span>
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary-lighter to-brand-primary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative card hover:shadow-brand-xl transition-all duration-500 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary-lighter to-brand-primary rounded-xl flex items-center justify-center animate-bounce-gentle" style={{animationDelay: '0.5s'}}>
                      <span className="text-2xl" style={{filter: 'hue-rotate(120deg) saturate(1.5)'}}>🏆</span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-primary">Quality Assurance</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Rigorous quality control and certification processes ensure you receive 
                    only the finest agricultural products. Every item is verified for 
                    authenticity and excellence.
                  </p>
                  <div className="mt-6 flex items-center text-sm text-brand-primary font-medium">
                    <span>Learn more</span>
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary to-brand-primary-lighter rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative card hover:shadow-brand-xl transition-all duration-500 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-lighter rounded-xl flex items-center justify-center animate-bounce-gentle" style={{animationDelay: '1s'}}>
                      <span className="text-2xl" style={{filter: 'hue-rotate(120deg) saturate(1.5)'}}>🌱</span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-primary">Sustainable Practices</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Supporting environmentally friendly farming methods that protect our planet 
                    for future generations. Every purchase contributes to sustainable agriculture.
                  </p>
                  <div className="mt-6 flex items-center text-sm text-brand-primary font-medium">
                    <span>Learn more</span>
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        {/* Background with gradient and patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-primary/5" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/3 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}} />
        
        <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-brand-primary sm:text-6xl mb-8">
              Ready to Transform Agriculture?
            </h2>
            
            <p className="mx-auto max-w-2xl text-xl leading-8 text-black mb-12">
              Join thousands of farmers and buyers who trust Ahianova for their agricultural needs. 
              Start your journey towards sustainable and profitable agricultural trade today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Link to="/signup" className="group">
                <Button text="Start Trading Today" size="lg" className="group-hover:scale-105 transition-transform duration-300" />
              </Link>
              <Link 
                to="/our-products" 
                className="group flex items-center text-lg font-semibold leading-6 text-brand-primary hover:text-brand-primary-hover transition-all duration-300"
              >
                Browse Products 
                <span aria-hidden="true" className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Welcome;
