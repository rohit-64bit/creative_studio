import React from 'react'
import { motion } from 'framer-motion';
import { calendlyLink } from '../services/Helpers';
import { IoArrowUpOutline } from 'react-icons/io5';

const ContactSection = () => {
    return (
        <section className='bg-black text-white p-20 flex flex-col gap-10'>

            <h1 className='text-4xl xl:text-6xl text-center text-white'>Let's make something<br /> amazing together</h1>
            <p className='text-sm text-center max-w-2xl mx-auto'>
                We would love to hear from you! Whether you have a question about our services, need assistance, or just want to say hello, feel free to reach out.
            </p>

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

export default ContactSection