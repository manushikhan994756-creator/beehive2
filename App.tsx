
import React, { useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Resort from './pages/Resort';
import Nearby from './pages/Nearby';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import Tariff from './pages/Tariff';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Fix: Using React.PropsWithChildren to resolve the "children property missing" error in certain TypeScript/React environments
const SmoothScrollProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Router>
      <SmoothScrollProvider>
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resort" element={<Resort />} />
            <Route path="/nearby" element={<Nearby />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/tariff" element={<Tariff />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </SmoothScrollProvider>
    </Router>
  );
};

export default App;
