import Footer from "./components/Footer";
import Header from "./components/Header";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import CTA from "./pages/CTA";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import WhyChooseUs from "./pages/WhyChooseUs";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col space-y-0 bg-[#140d19] ">
        <Hero />
        <WhyChooseUs />
        <Services />
        <CaseStudies />
        <Testimonials />
        <CTA />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
