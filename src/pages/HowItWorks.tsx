import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Sign Up & Create Profile',
      description: 'Join our platform as either a farmer or buyer. Create your detailed profile with verification documents.',
      details: [
        'Complete registration with business details',
        'Upload verification documents',
        'Set up payment preferences',
        'Choose your product categories'
      ]
    },
    {
      number: '02',
      title: 'Browse & Connect',
      description: 'Farmers list their products, buyers browse and connect with verified suppliers.',
      details: [
        'Farmers list available products with quality specs',
        'Buyers search and filter products',
        'Direct messaging between parties',
        'Negotiate terms and pricing'
      ]
    },
    {
      number: '03',
      title: 'Secure Transaction',
      description: 'Complete transactions through our secure payment system with quality guarantees.',
      details: [
        'Escrow payment protection',
        'Quality inspection before shipping',
        'Secure payment processing',
        'Transaction tracking and updates'
      ]
    },
    {
      number: '04',
      title: 'Delivery & Feedback',
      description: 'Products are delivered and both parties can rate their experience.',
      details: [
        'Tracked shipping and delivery',
        'Quality verification on arrival',
        'Release of payment to farmer',
        'Rating and review system'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-sand">
      {/* Hero Section */}
      <div className="bg-brand-primary">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-brand-primary sm:text-6xl">
              How Ahianova Works
            </h1>
            <p className="mt-6 text-lg leading-8 text-black">
              A simple, secure process that connects farmers directly with buyers worldwide, 
              ensuring fair trade and quality products.
            </p>
          </div>
        </div>
      </div>

      {/* Process Overview Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl mb-4">
              Our Simple 4-Step Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From registration to delivery, we've streamlined the agricultural trading process 
              to make it simple, secure, and efficient for everyone involved.
            </p>
          </div>
          
          {/* Process Flow Visual */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                1
              </div>
              <div className="w-16 h-1 bg-brand-primary mx-2"></div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                2
              </div>
              <div className="w-16 h-1 bg-brand-primary mx-2"></div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                3
              </div>
              <div className="w-16 h-1 bg-brand-primary mx-2"></div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                4
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">24/7</div>
              <div className="text-sm text-gray-600">Platform Access</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">100%</div>
              <div className="text-sm text-gray-600">Secure Payments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">Global</div>
              <div className="text-sm text-gray-600">Reach</div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {steps.map((step, index) => (
                <div key={index} className="card border-2 border-brand-primary p-8 hover:shadow-brand-lg hover:scale-105 hover:border-brand-primary-hover transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-x-4 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-brand-primary text-brand-primary font-bold text-2xl shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-brand-primary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-4">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="h-5 w-5 rounded-full bg-brand-primary-dark mt-1 shadow-lg flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                          </div>
                        </div>
                        <span className="ml-4 text-base font-semibold text-black leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">
              Why Our Process Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Built on trust, transparency, and technology to ensure successful transactions.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              <div className="card border-2 border-brand-primary p-6 hover:shadow-brand-lg hover:scale-105 hover:border-brand-primary-hover transition-all duration-300 cursor-pointer">
                <dt className="flex items-center gap-x-3 text-lg font-bold leading-7 text-brand-primary mb-4">
                  <div className="h-6 w-6 flex-none rounded-full bg-brand-primary"></div>
                  Verified Partners
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-700">
                  <p className="flex-auto">
                    All farmers and buyers go through rigorous verification to ensure authenticity and reliability.
                  </p>
                </dd>
              </div>
              
              <div className="card border-2 border-brand-primary p-6 hover:shadow-brand-lg hover:scale-105 hover:border-brand-primary-hover transition-all duration-300 cursor-pointer">
                <dt className="flex items-center gap-x-3 text-lg font-bold leading-7 text-brand-primary mb-4">
                  <div className="h-6 w-6 flex-none rounded-full bg-brand-primary"></div>
                  Quality Guarantee
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-700">
                  <p className="flex-auto">
                    Every product undergoes quality inspection before shipping to ensure you receive exactly what you ordered.
                  </p>
                </dd>
              </div>
              
              <div className="card border-2 border-brand-primary p-6 hover:shadow-brand-lg hover:scale-105 hover:border-brand-primary-hover transition-all duration-300 cursor-pointer">
                <dt className="flex items-center gap-x-3 text-lg font-bold leading-7 text-brand-primary mb-4">
                  <div className="h-6 w-6 flex-none rounded-full bg-brand-primary"></div>
                  Secure Payments
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-700">
                  <p className="flex-auto">
                    Escrow payment system protects both parties until delivery is confirmed and quality is verified.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-primary">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black">
              Join our platform today and experience the future of agricultural trade.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/signup"
                className="btn-primary"
              >
                Sign Up Now
              </Link>
              <Link to="/our-products" className="text-sm font-semibold leading-6 text-brand-primary hover:text-brand-primary-hover transition-colors duration-200">
                Browse Products <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
