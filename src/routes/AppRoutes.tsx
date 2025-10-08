// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import BuyerLogin from '../pages/BuyerLogin';
// import SignUp from '../pages/SignUp';
// import Welcome from '../pages/Welcome';
// import UserDashboard from '../pages/UserDashboard';
// import HowItWorks from '../pages/HowItWorks';
// import OurProducts from '../pages/OurProducts';
// import OurFarmers from '../pages/OurFarmers';

// const AppRoutes: React.FC = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Welcome />} />
//       <Route path="/dashboard" element={<UserDashboard />} />
//       <Route path="/login" element={<BuyerLogin />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/welcome" element={<Welcome />} />
//       <Route path="/dashboard" element={<UserDashboard />} />
//       <Route path="*" element={<Navigate to="/" replace />} />
   
//     </Routes>
//   );
// };

// export default AppRoutes;
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import UserDashboard from '../pages/UserDashboard';
import BuyerLogin from '../pages/BuyerLogin';
import SignUp from '../pages/SignUp';
// Added imports for dashboard navigation pages to support navbar links
import HowItWorks from '../pages/HowItWorks';
import OurProducts from '../pages/OurProducts';
import OurFarmers from '../pages/OurFarmers';
import TailwindShowcase from '../components/TailwindShowcase';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Main application routes */}
      <Route path="/" element={<Welcome />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/login" element={<BuyerLogin />} />
      <Route path="/signup" element={<SignUp />} />
      
      {/* Dashboard navigation routes - Added to support navbar links */}
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/our-products" element={
        <ProtectedRoute>
          <OurProducts />
        </ProtectedRoute>
      } />
      <Route path="/our-farmers" element={
        <ProtectedRoute>
          <OurFarmers />
        </ProtectedRoute>
      } />
      
      {/* Design showcase route */}
      <Route path="/tailwind-showcase" element={<TailwindShowcase />} />
      
      {/* Catch-all route for 404 handling */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;

