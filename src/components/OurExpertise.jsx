import React from 'react'
import { BsGlobe2 } from "react-icons/bs";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineStoreMallDirectory } from "react-icons/md";
import { TbDevicesHeart } from "react-icons/tb";
import { FaHandsHelping } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { IoMdCloudOutline } from "react-icons/io";
import { IoArrowUpOutline } from 'react-icons/io5';
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import portfolioData from '../assets/portfolioProjects_full.json';
import { calendlyLink } from '../services/Helpers';

const OurExpertise = () => {

    const data = [
        {
            icon: BsGlobe2,
            title: 'Web Design & Development',
            desc: 'Build high-performance, user-friendly websites that reflect your brand and drive conversions.'
        },
        {
            icon: HiOutlineDevicePhoneMobile,
            title: 'App Development',
            desc: 'Turn ideas into powerful mobile apps with seamless functionality for iOS and Android platforms.'
        },
        {
            icon: TbDevicesHeart,
            title: 'Digital Marketing',
            desc: 'Maximize online visibility and ROI with data-driven strategies across SEO, PPC, content, and social media.'
        },
        {
            icon: FaHandsHelping,
            title: 'Lead Generation',
            desc: 'Fuel your sales pipeline with targeted campaigns that capture, nurture, and convert high-quality leads.'
        },
        {
            icon: MdOutlineSupportAgent,
            title: 'Software Development',
            desc: 'Develop tailored software solutions that solve complex problems and scale with your business.'
        },
        {
            icon: BsRobot,
            title: 'UI/UX Design',
            desc: 'Create delightful, user-centered interfaces that enhance engagement and streamline user experiences.'
        },
        {
            icon: IoMdCloudOutline,
            title: 'Graphic Design',
            desc: 'Bring your brand to life with compelling visuals for digital and print platforms.'
        },
        {
            icon: MdOutlineStoreMallDirectory,
            title: 'Brand Strategy',
            desc: 'Shape your brand’s identity with strategic storytelling, visual assets, and consistent messaging.'
        }
    ];

    return (
        <section id='services' className='h-max p-8 py-10 xl:p-20'>

            <p className='text-center text-4xl font-semibold leading-[1.3]'>
                Explore Our Expertise
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20'>

                {
                    data.map((item, index) => {
                        return (
                            <div className={`flex flex-col gap-4 w-full p-8 rounded-xl hover:shadow-xl duration-300 ${[0, 2, 5, 7].includes(index) ? 'bg-black text-white' : 'bg-white'}`} key={index}>

                                <item.icon className='text-4xl text-blue-400' />

                                <div>

                                    <div className='font-bold'>
                                        {item.title}
                                    </div>

                                    <div className='text-sm'>
                                        {item.desc}
                                    </div>

                                </div>

                            </div>
                        )
                    })
                }

            </div>

            <div className="flex justify-center mt-4">
                <motion.a
                    href={calendlyLink}
                    whileHover={{ scale: 1.05 }}
                    className='bg-blue-400 text-black p-2 pl-6 rounded-full mt-8 text-xl font-medium flex gap-2 items-center hover:bg-blue-500 transition-colors duration-300'
                >
                    Book a Call
                    <motion.div
                        className='bg-black text-white rounded-full text-3xl p-1'
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                        <IoArrowUpOutline className='rotate-45' />
                    </motion.div>
                </motion.a>
            </div>

        </section>
    )
}

export default OurExpertise