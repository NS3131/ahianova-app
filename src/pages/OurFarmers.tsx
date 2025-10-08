import React from 'react';
import { Link } from 'react-router-dom';

const OurFarmers: React.FC = () => {
  const farmers = [
    {
      id: 1,
      name: 'Aisha Mwangi',
      location: 'Nairobi, Kenya',
      specialty: 'Organic Vegetables',
      experience: '15 years',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha&backgroundColor=b6e3f4&clothingColor=262e33&hairColor=724133&skinColor=edb98a&mouthType=serious&eyeType=normal',
      description: 'Aisha specializes in growing organic vegetables using sustainable farming methods. She has been farming for over 15 years and is passionate about environmental conservation.',
      products: ['Spinach', 'Kale', 'Lettuce', 'Tomatoes'],
      rating: 4.9,
      verified: true
    },
    {
      id: 2,
      name: 'Mohamed Hassan',
      location: 'Cairo, Egypt',
      specialty: 'Premium Rice',
      experience: '20 years',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mohamed&backgroundColor=b6e3f4&clothingColor=262e33&hairColor=724133&skinColor=edb98a&mouthType=serious&eyeType=normal',
      description: 'Mohamed is a third-generation rice farmer with extensive knowledge of traditional and modern rice cultivation techniques. His rice is known for its exceptional quality.',
      products: ['Basmati Rice', 'Jasmine Rice', 'Brown Rice'],
      rating: 4.8,
      verified: true
    },
    {
      id: 3,
      name: 'Fatima Al-Zahra',
      location: 'Marrakech, Morocco',
      specialty: 'Olive Oil & Nuts',
      experience: '12 years',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima&backgroundColor=b6e3f4&clothingColor=262e33&hairColor=724133&skinColor=edb98a&mouthType=serious&eyeType=normal',
      description: 'Fatima runs a family-owned olive grove and nut farm. She focuses on sustainable practices and produces some of the finest olive oil in the region.',
      products: ['Extra Virgin Olive Oil', 'Almonds', 'Walnuts', 'Hazelnuts'],
      rating: 4.9,
      verified: true
    },
    {
      id: 4,
      name: 'Kwame Asante',
      location: 'Kumasi, Ghana',
      specialty: 'Cocoa & Coffee',
      experience: '18 years',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kwame&backgroundColor=b6e3f4&clothingColor=262e33&hairColor=724133&skinColor=edb98a&mouthType=serious&eyeType=normal',
      description: 'Kwame is a certified organic cocoa and coffee farmer. He works with cooperatives to ensure fair trade practices and sustainable farming methods.',
      products: ['Cocoa Beans', 'Arabica Coffee', 'Robusta Coffee'],
      rating: 4.7,
      verified: true
    },
    {
      id: 5,
      name: 'Zara Ibrahim',
      location: 'Lagos, Nigeria',
      specialty: 'Spices & Herbs',
      experience: '10 years',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zara&backgroundColor=b6e3f4&clothingColor=262e33&hairColor=724133&skinColor=edb98a&mouthType=serious&eyeType=normal',
      description: 'Zara grows a wide variety of spices and herbs using traditional methods passed down through generations. Her products are highly sought after by local and international buyers.',
      products: ['Turmeric', 'Ginger', 'Cardamom', 'Cinnamon'],
      rating: 4.8,
      verified: true
    },
    {
      id: 6,
      name: 'Ahmed Ben Ali',
      location: 'Tunis, Tunisia',
      specialty: 'Dates & Dried Fruits',
      experience: '25 years',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed&backgroundColor=b6e3f4&clothingColor=262e33&hairColor=724133&skinColor=edb98a&mouthType=serious&eyeType=normal',
      description: 'Ahmed is a master date farmer with over 25 years of experience. His dates are known for their sweetness and quality, and he exports to markets worldwide.',
      products: ['Medjool Dates', 'Deglet Nour Dates', 'Dried Apricots', 'Dried Figs'],
      rating: 4.9,
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-brand-sand">
      {/* Hero Section */}
      <div className="bg-brand-primary">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-brand-primary sm:text-6xl">
              Meet Our Farmers
            </h1>
            <p className="mt-6 text-lg leading-8 text-black">
              Connect with verified farmers from around the world who are committed to 
              sustainable agriculture and quality products.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {/* 500+ Verified Farmers */}
            <div className="card text-center border-2 border-brand-primary">
              <div className="text-4xl font-bold text-brand-primary mb-2">500+</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Verified Farmers</div>
              <div className="text-sm text-gray-600">Trusted and verified agricultural partners</div>
            </div>

            {/* 15+ Years Average Experience */}
            <div className="card text-center border-2 border-brand-primary">
              <div className="text-4xl font-bold text-brand-primary mb-2">15+</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Years Average Experience</div>
              <div className="text-sm text-gray-600">Decades of farming expertise and knowledge</div>
            </div>

            {/* 100% Quality Verified */}
            <div className="card text-center border-2 border-brand-primary">
              <div className="text-4xl font-bold text-brand-primary mb-2">100%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Quality Verified</div>
              <div className="text-sm text-gray-600">Every product meets our quality standards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Farmers Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-2 xl:grid-cols-3">
            {farmers.map((farmer) => (
              <div key={farmer.id} className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-h-3 aspect-w-4 overflow-hidden">
                  <img
                    src={farmer.image}
                    alt={farmer.name}
                    className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-brand-primary">
                      {farmer.name}
                    </h3>
                    {farmer.verified && (
                      <span className="flex items-center text-green-600 text-sm">
                        <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2">📍 {farmer.location}</p>
                  <p className="text-sm text-gray-600 mb-2">🌱 {farmer.specialty}</p>
                  <p className="text-sm text-gray-600 mb-3">⏰ {farmer.experience} experience</p>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(farmer.rating) ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{farmer.rating}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {farmer.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Products:</h4>
                    <div className="flex flex-wrap gap-1">
                      {farmer.products.map((product, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-brand-primary/10 text-brand-primary"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-brand-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-primary/90 transition-colors">
                    Contact Farmer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">
              Our Farmer Community
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join a growing community of verified farmers committed to sustainable agriculture.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col card border-2 border-brand-primary">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-brand-primary">
                  <div className="h-5 w-5 flex-none rounded-full bg-brand-primary"></div>
                  500+ Verified Farmers
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Our network includes verified farmers from over 20 countries, 
                    all committed to sustainable and ethical farming practices.
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col card border-2 border-brand-primary">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-brand-primary">
                  <div className="h-5 w-5 flex-none rounded-full bg-brand-primary"></div>
                  15+ Years Average Experience
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Our farmers bring decades of experience and traditional knowledge 
                    combined with modern sustainable farming techniques.
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col card border-2 border-brand-primary">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-brand-primary">
                  <div className="h-5 w-5 flex-none rounded-full bg-brand-primary"></div>
                  100% Quality Verified
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Every farmer undergoes rigorous verification and their products 
                    are quality-tested to ensure the highest standards.
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
              Ready to Connect with Farmers?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black">
              Join our platform to connect directly with verified farmers and start 
              building lasting relationships in the agricultural community.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/signup"
                className="btn-primary"
              >
                Join Now
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

export default OurFarmers;
