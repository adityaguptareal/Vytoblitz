import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Logo from "../assets/Logo.png"
function About() {
  return (

    <div className="bg-slate-950 overflow-hidden  font-Montserrat">
      <Navbar/>
      {/* Hero */}
      <section className="relative py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-Orbitron mb-6">About VytoBlitz 1.0</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto ">
              Learn about our mission, our team, and the impact we're making in the tech community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
        <section className="py-20 flex flex-col gap-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold font-Orbitron mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-4">
               Aims to foster innovation, collaboration, and learning in the tech community. 
              We bring together students, professionals, and industry leaders to create an 
              environment of growth and discovery.
            </p>
            <p className="text-gray-300">
              Since our inception, we've been dedicated to showcasing emerging technologies, 
              supporting young talent, and building bridges between academia and industry.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[200px] md:h-96 rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" 
              alt="Our Mission"
              className="w-full h-full object-cover"
            />
          </motion.div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[200px] md:h-96 rounded-lg overflow-hidden"
          >
            <img 
              src={Logo} 
              alt="Our Mission"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold font-Orbitron mb-6">Organiser</h2>
            <p className="text-gray-300 mb-4">
              VytoBlitz 1.0 is an event organized by VytoFlow, a tech community dedicated to fostering innovation and collaboration. 
              Led by President Ansh Singh, VytoFlow brings together students, professionals, and industry leaders to create an 
              environment of growth and discovery.
            </p>
            <p className="text-gray-300">
              Since our inception, we've been dedicated to showcasing emerging technologies, supporting young talent, and building 
              bridges between academia and industry.
            </p>
          </motion.div>
            </div>
          </div>
        </section>
<Footer/>
        {/* Team */}
   
    </div>
  );
}

export default About