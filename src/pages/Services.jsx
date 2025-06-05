import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import AboutVideo from '../assets/About.mp4';
import { servicesData } from '../services/Constants';
import ContactSection from '../layouts/ContactSection';
import { calendlyLink } from '../services/Helpers';
import { IoArrowUpOutline } from 'react-icons/io5';

const Services = () => {
  const location = useLocation();

  // Scroll to section when hash is present in URL
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-white text-black">
      {/* Video Header Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40 blur-sm"
        >
          <source src={AboutVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
          <motion.h1
            className="text-white text-4xl md:text-6xl leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            "Building Experiences<br />
            <span className="text-blue-400">That Empower & Inspire"</span>
          </motion.h1>
        </div>
      </section>

      <div className='overflow-hidden flex flex-col px-6 md:px-20 py-16'>

        {servicesData.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`flex flex-col md:flex-row items-center py-10 md:py-36 w-full gap-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
          >
            {/* Image Section */}
            <img src={service.image} alt="" className='md:w-1/2 w-full aspect-video md:h-[30rem] rounded-xl bg-slate-200' />

            {/* Text Content */}
            <div className="md:w-1/2 flex flex-col gap-5">
              <h2 className="">{service.title}</h2>
              <p className="text-slate-700">{service.description}</p>
              <ul className="list-inside list-disc">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <motion.a
                href={calendlyLink}
                whileHover={{ scale: 1.05 }}
                className='bg-blue-400 text-black p-2 pl-6 rounded-full mt-8 text-xl font-medium flex gap-2 items-center hover:bg-blue-500 transition-colors duration-300 w-max'
              >
                Book a Call
                <motion.div
                  className='bg-black text-white rounded-full text-3xl p-1 '
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <IoArrowUpOutline className='rotate-45' />
                </motion.div>
              </motion.a>
            </div>
          </div>
        ))}

      </div>

      <ContactSection />

    </div>
  );
};

export default Services;
