import Hero          from '../components/Hero';
import Marquee       from '../components/Marquee';
import ProductSection from '../components/ProductSection';
import SignatureBand  from '../components/SignatureBand';
import WhyUs         from '../components/WhyUs';
import Ingredients   from '../components/Ingredients';
import Outlets       from '../components/Outlets';
import Testimonials  from '../components/Testimonials';
import FranchiseCTA  from '../components/FranchiseCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ProductSection />
      <SignatureBand />
      <WhyUs />
      <Ingredients />
      <Outlets />
      <Testimonials />
      <FranchiseCTA />
    </>
  );
}