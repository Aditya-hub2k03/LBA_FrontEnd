import Header from './components/Header';
import Hero from './components/Hero';
import SportsCarousel from './components/SportsCarousel';
import BookingSteps from './components/BookingSteps';
import HealthBenefits from './components/HealthBenefits';
import Amenities from './components/Amenities';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <SportsCarousel />
      <BookingSteps />
      <HealthBenefits />
      <Amenities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
