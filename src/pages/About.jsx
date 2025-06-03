import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import AboutVideo from '../assets/About.mp4';
import AboutImg from '../assets/About_.png';
import { FaLightbulb, FaPencilRuler, FaCode, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const About = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

    useEffect(() => {
        if (isInView) {
            controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
        }
    }, [isInView, controls]);

    return (
        <div className="flex flex-col">

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

            <section className="h-screen bg-white px-8 py-24 md:px-40 grid md:grid-cols-2 gap-24 items-center">
                <motion.div
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl font-semibold text-black">About Us</h2>
                    <h4 className="text-blue-400 text-lg font-semibold">Where Innovation Meets Impact</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                        At our core, we are innovators, creators, and problem solvers. We specialize in delivering cutting-edge digital solutions that not only meet the needs of our clients but exceed their expectations. Our approach is collaborative, forward-thinking, and always centered on delivering measurable results.
                    </p>
                </motion.div>
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={AboutImg}
                        alt="About"
                        className="w-[90%] h-[90%] "
                    />
                </motion.div>
            </section>

            {/* What We Do Section */}
            <section className="bg-gray-100 px-8 py-32 md:px-40 text-center">
                <motion.h2
                    className="text-4xl font-semibold text-black mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    What We Do
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaLightbulb size={40} className="text-blue-400 mb-4" />,
                            title: 'Strategy',
                            desc: 'We help businesses build a solid foundation with a strategic approach tailored to their goals.'
                        },
                        {
                            icon: <FaPencilRuler size={40} className="text-blue-400 mb-4" />,
                            title: 'Design',
                            desc: 'From UX to UI, our design solutions are crafted to captivate and convert.'
                        },
                        {
                            icon: <FaCode size={40} className="text-blue-400 mb-4" />,
                            title: 'Development',
                            desc: 'We build fast, scalable, and reliable digital products using the latest technologies.'
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                        >
                            <div className="flex flex-col items-center">
                                {item.icon}
                                <h4 className="text-xl font-semibold text-black mb-2">{item.title}</h4>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Meet Our CEO Section */}
            <section className="bg-white px-8 py-24 md:px-40 items-start">
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-start mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div>
                        <h2 className="text-4xl font-bold text-black leading-tight">
                            Meet Our Visionary <br /> CEO & Founder
                        </h2>
                    </div>
                    <p className="text-gray-600 max-w-xl mt-6 md:mt-0 text-base">
                        Meet our inspiring CEO, Raj — the driving force behind our mission. With a passion for innovation and a dedication to excellence, he leads our team with experience, integrity, and vision.
                    </p>
                </motion.div>

                <motion.div
                    className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center max-w-md mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="https://via.placeholder.com/300x300"
                        alt="Saurav Sinha"
                        className="rounded-lg w-full h-80 object-cover mb-4"
                    />
                    <h4 className="text-lg font-bold text-blue-700">Raj</h4>
                    <p className="text-sm font-semibold text-gray-600">CEO</p>
                    <div className="flex gap-4 mt-4 text-blue-500 text-xl">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>
                </motion.div>
            </section>

        </div>
    );
};

export default About;
