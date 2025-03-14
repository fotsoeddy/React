import Header from '../components/Header';
import Features from '../components/Features';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CTA />
        <Features />
      </main>
      <Footer />
    </div>
  );
}