import Header from "./components/Header";
import Hero from "./components/HomePageSections/Hero";
import About from "./components/HomePageSections/About";
import Responsive from "./components/HomePageSections/Responsive";
import Technologies from "./components/HomePageSections/Technologies";
import BlogSection from "./components/HomePageSections/BlogSection";
import CTA from "./components/HomePageSections/CTA";
import ProjectSection from "./components/HomePageSections/ProjectSection";
import ContactSection from "./components/HomePageSections/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Responsive />
      <Technologies />
      <BlogSection />
      <CTA />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}
