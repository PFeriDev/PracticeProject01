"use client";
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
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Állítsd be az időtartamot (ms-ban)
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0, y: 0 }} // Kezdeti állapot
            animate={{ opacity: 1, y: 0 }} // Célállapot
            transition={{ duration: 3 }} // Animáció időtartama
          >
            <Header />
            <Hero />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1 }}>
            <About />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1 }}>
            <Responsive />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1 }}>
            <Technologies />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1 }}>
            <BlogSection />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1 }}>
            <CTA />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1 }}>
            <ProjectSection />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1 }}>
            <ContactSection />
          </motion.div>
          <Footer />
        </>
      )}
    </>
  );
}
