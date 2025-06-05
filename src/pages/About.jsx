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
                        className="text-white text-4xl lg:text-6xl md:text-4xl leading-tight"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        "Building Experiences<br />
                        <span className="text-blue-400">That Empower & Inspire"</span>
                    </motion.h1>
                </div>
            </section>

            {/* About Us Section */}
            <section className=" bg-white px-8 py-24 md:px-20 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl font-semibold text-black">About Us</h2>
                    <h4 className="text-blue-400 text-lg font-semibold">Where Innovation Meets Impact</h4>
                    <p className="text-gray-700 lg:text-base text-sm leading-relaxed">
                        At our core, we are innovators, creators, and problem solvers—a passionate team dedicated to turning bold ideas into reality. As a Creative Studio Company, we blend design, technology, and storytelling to craft digital experiences that leave a lasting impression.

                        We specialize in delivering cutting-edge digital solutions—from striking visuals and intuitive interfaces to impactful branding and scalable tech. <br /> <br />Every project we undertake is a fusion of creativity and strategy, meticulously crafted to not only meet our clients' goals but to elevate their vision beyond expectations.

                        Our approach is collaborative and forward-thinking. We believe in working hand-in-hand with our clients, diving deep into their challenges, and building solutions that are not only beautiful but measurably effective.
                    </p>
                </motion.div>

                <motion.img
                    src={AboutImg}
                    alt="About"
                    className="w-full max-w-md mx-auto md:mx-0 rounded-xl hidden lg:block"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                />

            </section>

            {/* What We Do Section */}
            <section className="bg-black px-8 py-32 md:px-24 text-center">
                <motion.h2
                    className="text-4xl font-semibold text-blue-400 mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    What We Do
                </motion.h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
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
            <section className="bg-white px-8 py-24 md:px-40">
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
                    className="bg-white rounded-xl flex flex-col md:flex-row items-center gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* CEO Image */}
                    <img
                        src="https://rohit64bit.netlify.app/assets/me-ChN8t8CN.png"
                        alt="Raj"
                        className="rounded-lg object-cover w-64"
                    />

                    {/* Info Block */}
                    <div className="flex flex-col justify-center gap-4">
                        <p className="text-lg font-semibold text-black">
                            Raj, <span className="text-blue-600">CEO & Founder</span>
                        </p>
                        <p className="text-gray-700 max-w-md">
                            “Empowering Innovation, Inspiring Change.” With over a decade in the tech industry, Raj has led transformative projects that have driven business success and digital innovation.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-2 text-blue-600 text-xl">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                            <a href="#"><FaYoutube /></a>
                        </div>
                    </div>
                </motion.div>
            </section>

        </div>
    );
};

export default About;
