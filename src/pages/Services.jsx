import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import AboutVideo from '../assets/About.mp4';

// Sample service data
const servicesData = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description:
      'We build high-performance, responsive, and secure websites and web apps tailored to your business needs. Whether you need a landing page, a custom CMS, or a complex e-commerce platform, our development is future-proof and optimized for speed and scalability.',
    features: [
      'Responsive Web Design',
      'Custom Web Applications',
      'E-commerce Platforms',
      'API Integrations & CMS',
    ],
    image: '', // Leave space for image
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description:
      'Our graphic designers create visual stories that connect with your audience. From logos to flyers and social media posts, our designs are crafted to reflect your brand personality.',
    features: [
      'Logo & Brand Assets',
      'Marketing Collaterals',
      'Infographics & Brochures',
      'Social Media Graphics',
    ],
    image: '',
  },
  {
    id: 'branding',
    title: 'Branding',
    description:
      'A strong brand is your voice in the market. We help you shape that voice with a well-defined visual and emotional identity through comprehensive branding services.',
    features: [
      'Brand Strategy & Research',
      'Tone & Messaging Framework',
      'Logo & Typography Guidelines',
      'Full Brand Kits & Style Guides',
    ],
    image: '',
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description:
      'We deliver integrated marketing strategies to grow your business online. From SEO and content to paid ads and email campaigns, we tailor campaigns to convert and retain customers.',
    features: [
      'Digital Advertising (Google, Meta)',
      'Email Campaigns',
      'SEO & Content Marketing',
      'Analytics & Conversion Tracking',
    ],
    image: '',
  },
];

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
      
        {servicesData.map((service, index) => (
          <motion.section
            key={service.id}
            id={service.id}
            className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Image Placeholder */}
            <div className="h-64 w-full bg-gray-100 rounded-xl shadow-inner flex items-center justify-center text-gray-400 text-center text-sm">
              Image Placeholder for <br /> <strong>{service.title}</strong>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-700">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </motion.section>
        ))}

    </div>
  );
};

export default Services;
