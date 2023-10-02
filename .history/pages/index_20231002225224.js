import React, { useState, useEffect } from 'react';
import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Socials from '../components/Socials';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Condition pour afficher le titre et l'image uniquement si la largeur de l'écran est supérieure à 768 pixels
  const shouldDisplayTitleAndImage = windowWidth > 768;

  return (
    <div className='bg-primary/60 h-full'>
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-50 xl:text-left h-full container mx-auto">
          {/* titre */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h1"
          >
            Hi, I am{' '}
            <br></br> <span className="text-accent">Achour Mariem</span>
            <br></br>
            FullStack Web Developer
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-xl'
          >
            I am a final year software engineering student at Polytechnic School of Sousse, I am a motivated and ambitious person with a solid background in development. I am able to work independently or as a team and manage multiple tasks simultaneously while meeting the deadlines.
          </motion.p>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg-image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>

        {/* particles */}
        <ParticlesContainer />

        {/* avatar-image */}
        {windowWidth > 768 && (
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[3%]"
          >
            <Avatar width={350} height={350} />
          </motion.div>
        )}
      </div>
      <Socials />
    </div>
  );
};

export default Home;
