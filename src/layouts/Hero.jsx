import React, { useRef, useEffect } from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { IoArrowUpOutline } from 'react-icons/io5';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { calendlyLink } from '../services/Helpers';
import HeroVideo from '../assets/hero.mp4';

const Hero = () => {
  const subtitleRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(subtitleRef, { once: true });

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }
  }, [isInView, controls]);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden" id='home'>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 blur-sm"
          aria-hidden="true"
        >
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Hero Content */}
        <section className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-center">
          {/* Headline */}
          <motion.div
            className="flex flex-col text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-snug"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <span>Empowering Your</span>
            <span className="flex justify-center gap-2 items-center">
              Digital Transformation
              <FaArrowTrendUp className="text-3xl sm:text-4xl md:text-5xl" />
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            ref={subtitleRef}
            className="text-sm sm:text-base md:text-lg mt-4 max-w-2xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
          >
            Innovative solutions in design, development, and marketing to elevate your brand.
          </motion.div>

          {/* Call-to-Action Button */}
          <motion.a
            href={calendlyLink}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-400 text-black px-6 py-2 rounded-full mt-6 sm:mt-8 text-base sm:text-lg md:text-xl font-medium flex gap-2 items-center hover:bg-blue-500 transition-colors duration-300"
          >
            Book a Call
            <motion.div
              className="bg-black text-white rounded-full text-2xl sm:text-3xl p-1"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <IoArrowUpOutline className="rotate-45" />
            </motion.div>
          </motion.a>
        </section>
      </div>

      {/* Marquee Section */}
      <section className="overflow-hidden whitespace-nowrap bg-gray-900 py-3 sm:py-4">
        <motion.div
          className="inline-block text-white text-sm sm:text-base font-semibold px-4"
          style={{ x }}
        >
          Empowering brands with bold ideas — Designing digital experiences that convert —
          Trusted by 150+ businesses worldwide — Your vision, our innovation — Let's build something remarkable together
        </motion.div>
      </section>
    </>
  );
};

export default Hero;