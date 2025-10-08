import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

type IconName = 'twitter' | 'facebook' | 'linkedin' | 'youtube' | 'tiktok';

const iconPaths: Record<IconName, string> = {
  twitter:
    'M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.37 8.44 8.44 0 0 1-2.7 1.04 4.22 4.22 0 0 0-7.2 3.85A12 12 0 0 1 3.16 4.9a4.22 4.22 0 0 0 1.31 5.62 4.19 4.19 0 0 1-1.91-.53v.05a4.23 4.23 0 0 0 3.39 4.14 4.24 4.24 0 0 1-1.9.07 4.23 4.23 0 0 0 3.95 2.94A8.48 8.48 0 0 1 2 19.54a11.94 11.94 0 0 0 6.48 1.9c7.78 0 12.04-6.45 12.04-12.04 0-.18 0-.35-.01-.53A8.6 8.6 0 0 0 22.46 6Z',
  facebook:
    'M13.5 22v-7h2.37l.36-2.81H13.5V10.1c0-.81.23-1.36 1.42-1.36h1.51V6.23A20.53 20.53 0 0 0 14.16 6c-2.17 0-3.66 1.32-3.66 3.75v2.44H8v2.81h2.5V22Z',
  linkedin:
    'M4.98 3.5a2.5 2.5 0 1 1-2.5 2.5 2.5 2.5 0 0 1 2.5-2.5ZM4 9h2v11H4Zm6.5 0h-2V20h2v-5.52c0-1.47.81-2.41 2.1-2.41 1 0 1.9.66 1.9 2.32V20h2v-6c0-2.86-1.53-4.19-3.57-4.19a3.3 3.3 0 0 0-2.43 1.14Z',
  youtube:
    'M21.6 7.2a2.44 2.44 0 0 0-1.7-1.73C18.4 5 12 5 12 5s-6.4 0-7.9.47A2.44 2.44 0 0 0 2.4 7.2 25.68 25.68 0 0 0 2 12a25.68 25.68 0 0 0 .4 4.8 2.44 2.44 0 0 0 1.7 1.73C5.6 19 12 19 12 19s6.4 0 7.9-.47a2.44 2.44 0 0 0 1.7-1.73A25.68 25.68 0 0 0 22 12a25.68 25.68 0 0 0-.4-4.8ZM10 15.27V8.73L15.5 12Z',
  tiktok:
    'M17.5 4.5c-.67-.5-1.21-1.18-1.5-1.96h-2.07v11.03a2.72 2.72 0 1 1-2.72-2.72 2.77 2.77 0 0 1 .72.1V8.84a5.51 5.51 0 1 0 5.51 5.51V9.87a7.5 7.5 0 0 0 4.06 1.2V8.99a4.55 4.55 0 0 1-4-4.49Z',
};

const SocialIcon: React.FC<{ name: IconName; href: string; label: string }> = ({ name, href, label }) => (
  <a
    href={href}
    aria-label={label}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary text-brand-primary transition-colors duration-200 hover:bg-brand-primary hover:text-white"
  >
    <svg aria-hidden="true" focusable="false" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d={iconPaths[name]} />
    </svg>
  </a>
);

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-brand-primary/10 bg-gradient-to-b from-white to-brand-sand/50 text-brand-primary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Mobile-first single column layout */}
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info - Full width on mobile, spans 2 columns on medium screens */}
          <div className="flex flex-col gap-4 text-sm md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-2">
              <Logo size="md" />
              <h3 className="text-xl font-bold text-brand-primary">Ahianova</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base">Secure trade options</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base">Fast fulfilment</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base">Wide commodity access</span>
              </li>
            </ul>
          </div>

          {/* Explore Links */}
          <div className="flex flex-col gap-4 text-sm">
            <h3 className="text-lg font-bold text-brand-primary mb-2">Explore</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-600 hover:text-brand-primary transition-colors duration-200 text-sm sm:text-base">
                Home
              </Link>
              <Link to="/login" className="block text-gray-600 hover:text-brand-primary transition-colors duration-200 text-sm sm:text-base">
                Buyer Login
              </Link>
              <Link to="/signup" className="block text-gray-600 hover:text-brand-primary transition-colors duration-200 text-sm sm:text-base">
                Create Account
              </Link>
              <Link to="/our-products" className="block text-gray-600 hover:text-brand-primary transition-colors duration-200 text-sm sm:text-base">
                Our Products
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 text-sm">
            <h3 className="text-lg font-bold text-brand-primary mb-2">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:info@atafrica4us.com" className="block text-gray-600 hover:text-brand-primary transition-colors duration-200 text-sm sm:text-base break-all">
                info@atafrica4us.com
              </a>
              <span className="block text-gray-600 text-sm sm:text-base">+234 904 934 88 87</span>
              <span className="block text-gray-600 text-sm sm:text-base">City, Africa</span>
            </div>
          </div>

          {/* Social Media - Full width on mobile, spans 2 columns on medium screens */}
          <div className="flex flex-col gap-4 text-sm md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold text-brand-primary mb-2">Follow Us</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">Stay connected with us on social media</p>
            <div className="flex flex-wrap gap-3">
              <SocialIcon name="twitter" href="https://twitter.com/ahianova" label="Ahianova on Twitter" />
              <SocialIcon name="facebook" href="https://facebook.com/ahianova" label="Ahianova on Facebook" />
              <SocialIcon name="linkedin" href="https://linkedin.com/company/ahianova" label="Ahianova on LinkedIn" />
              <SocialIcon name="youtube" href="https://youtube.com/@ahianova" label="Ahianova on YouTube" />
              <SocialIcon name="tiktok" href="https://tiktok.com/@ahianova" label="Ahianova on TikTok" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-4 text-center text-xs text-gray-500">
        © {year} Ahianova. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
