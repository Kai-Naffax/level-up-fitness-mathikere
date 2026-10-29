import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { CustomCursor } from './components/CustomCursor';
import { MobileBottomBar } from './components/MobileBottomBar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Facilities } from './pages/Facilities';
import { Membership } from './pages/Membership';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <BrowserRouter>
      {/* Smooth scroll to top on page navigation */}
      <ScrollToTop />

      {/* Glowy bespoke custom cursor (active exclusively on PC / mouse pointer devices) */}
      <CustomCursor />

      <div className="flex flex-col min-h-screen bg-[#0A0A09] text-[#F2F0E9]">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />

        {/* Dedicated Phone-Only Quick Conversion Bar */}
        <MobileBottomBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
