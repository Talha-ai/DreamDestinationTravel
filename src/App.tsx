import React, { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import CustomCursor from './components/CustomCursor';
// import LoadingScreen from "./components/LoadingScreen";

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import ReviewsPage from './pages/ReviewsPage';
import B2BPage from './pages/B2BPage';
import InternationalToursPage from './pages/InternationalToursPage';
import DomesticToursPage from './pages/DomesticToursPage';
import EducationalToursPage from './pages/EducationalToursPage';
import MiceToursPage from './pages/MiceToursPage';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="relative">
            <CustomCursor />
            <AnimatePresence mode="wait">
              {/* {isLoading ? (
                <LoadingScreen key="loading" />
              ) : ( */}
              <>
                <Navbar />
                <main>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route
                      path="/services/international"
                      element={<InternationalToursPage />}
                    />
                    <Route
                      path="/services/domestic"
                      element={<DomesticToursPage />}
                    />
                    <Route
                      path="/services/educational"
                      element={<EducationalToursPage />}
                    />
                    <Route path="/services/mice" element={<MiceToursPage />} />
                    <Route path="/reviews" element={<ReviewsPage />} />
                    {/*  <Route path="/b2b" element={<B2BPage />} />*/}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
                <FloatingButtons />
              </>
              {/* )} */}
            </AnimatePresence>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
