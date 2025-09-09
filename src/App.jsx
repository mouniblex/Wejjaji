import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    
<div className="min-h-screen bg-gradient-to-b from-black to-[#0d112f] text-white">
        <Navbar />
        <Hero />
        <Portfolio />
        <Process />
        <Testimonials />
        <Pricing />
        <Footer />
    </div>
  );
}

export default App;
