import React, { useMemo } from 'react'
import Hero from '../layouts/Hero'
import OurExpertise from '../components/OurExpertise'
import Corporate from '../assets/Corporate.jpg'
import About from '../assets/About.jpg'
import { useState } from 'react';
import { IoArrowUpOutline } from 'react-icons/io5';
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import ContactSection from '../layouts/ContactSection'
import projects from '../assets/portfolioProjects_full.json'

const Home = () => {

  const whyChooseUs = [
    {
      title: "Custom-Tailored Solutions",
      description:
        "We don’t believe in one-size-fits-all. Every project is uniquely crafted to match your goals, brand, and audience.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 90" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 H40 V40 Q0,40 0,0 Z" fill="#60A5FA" />
          <path d="M0,50 H40 V90 Q0,90 0,50 Z" fill="#60A5FA" />
        </svg>
      )
    },
    {
      title: "Creative Meets Tech",
      description:
        "Our team blends artistic creativity with cutting-edge technology to deliver visually stunning and functionally powerful digital experiences.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="10" fill="#60A5FA" />
          <circle cx="30" cy="10" r="10" fill="#60A5FA" />
          <circle cx="10" cy="30" r="10" fill="#60A5FA" />
          <circle cx="30" cy="30" r="10" fill="#60A5FA" />
        </svg>
      )
    },
    {
      title: "Results-Driven Strategy",
      description:
        "We focus on measurable outcomes—more traffic, better engagement, and higher conversions—to ensure your business grows online.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="20" height="20" rx="5" fill="#60A5FA" />
          <rect x="30" y="0" width="20" height="20" rx="5" fill="#60A5FA" />
          <rect x="0" y="30" width="20" height="20" rx="5" fill="#60A5FA" />
          <rect x="30" y="30" width="20" height="20" rx="5" fill="#60A5FA" />
        </svg>
      )
    },
    {
      title: "Dedicated Partnership",
      description:
        "Think of us as an extension of your team. We communicate openly, work transparently, and stay committed from start to finish.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 90" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 H40 V40 Q0,40 0,0 Z" fill="#60A5FA" />
          <path d="M0,50 H40 V90 Q0,90 0,50 Z" fill="#60A5FA" />
        </svg>
      )
    }
  ];

  // Helper to get unique categories
  const getCategories = (projects) => {
    const cats = projects.map(p => p.platform);
    return [...Array.from(new Set(cats))];
  };

  // Organize projects by category (including "All")
  const groupProjectsByCategory = (projects) => {
    const grouped = projects.reduce((acc, project) => {
      if (!acc[project.platform]) acc[project.platform] = [];
      acc[project.platform].push(project);
      return acc;
    }, {});
    grouped["WordPress"] = projects; // For showing all projects
    return grouped;
  };

  const categories = useMemo(() => getCategories(projects), [projects]);
  const portfolioProjects = useMemo(() => groupProjectsByCategory(projects), [projects]);

  const [activeCategory, setActiveCategory] = useState("WordPress");

  return (
    <>
      <Hero />

      <section id='about' className='h-max p-8 md:p-16 xl:p-20 grid xl:grid-cols-3 gap-5'>

        <div className='bg-white p-10 rounded-xl w-full h-full flex flex-col gap-5'>

          <h3>
            About Us
          </h3>

          <p>
            Creative Studio delivers innovative digital solutions in design, development, and marketing to elevate brands and accelerate business growth.
          </p>

        </div>

        <div className=' w-full h-full flex flex-col gap-5'>

          <div className='bg-black text-white p-10 rounded-xl w-full h-full flex flex-col gap-5'>

            <h3 className='text-white'>
              Mission
            </h3>

            <p className='text-gray-300'>
              To blend creativity and technology, delivering exceptional digital experiences.
            </p>

          </div>

          <div className='bg-white p-10 rounded-xl w-full h-full flex flex-col gap-5'>

            <h3>
              Vision
            </h3>

            <p>
              To be a leading digital solutions provider, fostering business growth through innovation.
            </p>

          </div>

        </div>

        <div className="bg-slate-200 rounded-xl w-full h-full overflow-hidden">
          <img
            src={About}
            alt="Corporate Image"
            className="w-full h-full object-cover"
          />

        </div>

      </section>

      <section className='h-max p-8 md:p-16 xl:p-20 bg-black flex flex-col md:flex-row gap-10'>

        <div className='text-white md:w-[60%] flex flex-col gap-5 text-5xl'>
          Why our clients love us?
        </div>

        <div className='grid md:grid-cols-2 gap-8'>

          {
            whyChooseUs.map((item, index) => (
              <div key={index} className='rounded-lg flex flex-col gap-3 items-start'>
                <div className='text-blue-400'>
                  {item.icon}
                </div>
                <div className='mb-10'>
                  <h4 className='font-semibold text-white text-3xl'>{item.title}</h4>
                  <p className='md:w-[80%] text-white/80 text-sm '>{item.description}</p>
                </div>
              </div>
            ))
          }

        </div>

      </section>

      <section className='h-max p-8 md:p-16 xl:p-20 flex flex-col gap-10 mt-10'>

        <div className='flex flex-col w-full justify-between'>

          <h3 className='md:w-1/3 flex flex-col gap-5 text-4xl font-medium'>
            Get to Know Us a Little More
          </h3>

          <p className='md:w-[50%] text-gray-600'>
            We’re a passionate team of creatives and strategists who love helping brands grow. With a blend of design, tech, and strategy, we craft solutions that are as unique as your vision. Friendly, focused, and always collaborative—consider us an extension of your team.
          </p>

        </div>

        <div className='flex flex-col md:flex-row gap-10'>

          <div className="bg-slate-200 rounded-xl w-full h-[300px] overflow-hidden">
            <img
              src={Corporate}
              alt="Corporate Image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className='bg-white p-10 rounded-xl gap-5 flex items-center justify-center'>

            <p className='text-2xl'>
              "United by purpose. Driven by results.<br /> <span className='text-5xl font-medium'>#1Team</span>."
            </p>

          </div>

        </div>

      </section>

      <section id='portfolio' className="h-max p-8 md:p-16 xl:p-20 flex flex-col gap-12 bg-[#f9f9f9]">
        <h3 className="text-center text-4xl font-medium">
          Incredible projects we have worked on
        </h3>

        {/* Filter Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${activeCategory === cat
                ? "bg-black text-white"
                : "bg-white text-black border border-black"
                }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects[activeCategory].slice(0, 3).map((project, index) => (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group transition duration-300 flex flex-col gap-4 hover:scale-[1.02]"
            >
              <div className="h-48 w-full bg-slate-200 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={project.screenshot || "/placeholder.png"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="text-xl font-semibold text-black">{project.title}</h4>
                <p className="text-gray-600 text-sm">
                  {project.platform} • {project.category}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Explore More Button */}
        {/* <div className="flex justify-center mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-400 text-black p-2 pl-6 rounded-full mt-8 text-xl font-medium flex gap-2 items-center hover:bg-blue-500 transition-colors duration-300"
          >
            Explore More
            <motion.div
              className="bg-black text-white rounded-full text-3xl p-1"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <IoArrowUpOutline className="rotate-45" />
            </motion.div>
          </motion.button>
        </div> */}

        

      </section>

      <OurExpertise />

      <ContactSection />

    </>
  )
}

export default Home