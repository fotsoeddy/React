import Header from '../components/Header';
import Features from '../components/Features';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import BlogStats from '../components/BlogStats';
import BlogFeatures  from '../components/BlogFeatures';
export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CTA />
        <BlogStats />
        <BlogFeatures />
        <Features />
      </main>
      <Footer />
    </div>
  );
}