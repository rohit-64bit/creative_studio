import React from 'react';
import projects from '../assets/portfolioProjects_full.json';
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";

const Portfolio = () => {
  return (
    <section id="portfolio" className="h-max px-8 xl:px-20 xl:py-24 flex flex-col gap-12 bg-black text-white">
      <motion.div
                    className="flex flex-col md:flex-row justify-between items-start mb-12 mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div>
                        <h2 className="text-4xl font-semibold text-blue-400 leading-tight">
                            Incredible projects we <br /> have worked on
                        </h2>
                    </div>
                    <p className="text-white text-light max-w-xl mt-6 md:mt-0 text-base">
                        At our studio, every project is a reflection of creativity, strategy, and technical precision. Our portfolio showcases a diverse range of work across platforms — from sleek WordPress websites to custom-developed solutions tailored to client needs.


                    </p>
                </motion.div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {projects.map((project, index) => (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="group transition duration-300 flex flex-col gap-4 hover:scale-[1.02]"
          >
            
            <div className=" h-48 w-full bg-slate-200 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={project.screenshot || '/placeholder.png'}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="text-xl text-blue-400">{project.title}</h4>
              <div className='flex gap-2 justify-start flex-wrap mt-4'>
              <p className="px-5 py-2 rounded-full text-sm border-[1px] border-white">
              {project.platform} 
              </p>
              <p className="px-5 py-2 rounded-full text-sm border-[1px] border-white">
              {project.category}
              </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
