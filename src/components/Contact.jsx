import React from 'react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';




const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    //  for loading
    const [loading, setLoading] = useState(false);
    // handlechange logic
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }
    // handleSubmit logic
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // create account on Emailjs
        // 2EvkkQDlfZxcj7PN- : Public Key
        //template_xenw8cz  : template Id
        //service_hcc53ci : service Id (gmail)

        emailjs.send('service_hcc53ci',
            'template_xenw8cz',
            {
                from_name: form.name,
                to_name: 'Zoya Qureshi',
                from_email: form.email,
                to_email: 'zoyaqureshi1905@gmail.com',
                message: form.message,
            },
            '2EvkkQDlfZxcj7PN-'
        )
            .then(() => {
                setLoading(false);
                alert("Thank you. I will get back to you as soon as possible.")

                setForm({
                    name: '',
                    email: '',
                    message: '',
                })

            }, (error) => {
                setLoading(false);

                console.log(error);

                alert("Something went wrong.")
            })

    }



    return (
        <div
            className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
        >
            <motion.div variants={slideIn('left', "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'>

                    <lable className="flex flex-col">
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name ?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'></input>

                    </lable>
                    <lable className="flex flex-col">
                        <span className='text-white font-medium mb-4'>Your Email</span>
                        <input type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email ?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'></input>

                    </lable>
                    <lable className="flex flex-col">
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea rows="7"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What's do you want to say ?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'></textarea>

                    </lable>
                    <button type="submit"
                        className='bg-tertiary py-3 px-8 outlined-none w-fit text-white font-regular shadow-md shadow-primary rounded-xl'>
                        {loading ? 'sending...' : 'send'}
                    </button>
                </form>

            </motion.div>
            <motion.div variants={slideIn('right', "tween", 0.2, 1)} classNmae="xl:flex-1 xl:h-auto ,d:h-[550px] h-[350px]" >

                <EarthCanvas />
            </motion.div>

        </div>
    )
}

export default SectionWrapper(Contact, "contact")
