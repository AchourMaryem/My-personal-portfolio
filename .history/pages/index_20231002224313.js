import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ParticlesContainer from '../components/ParticlesContainer';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => {
  // Ajoutez un état pour suivre la largeur de l'écran
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Mettez à jour la largeur de l'écran lorsqu'il est redimensionné
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attachez et détachez l'écouteur de redimensionnement
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Condition pour afficher le titre et l'image uniquement si la largeur de l'écran est supérieure à 768 pixels
  const shouldDisplayTitleAndImage = windowWidth > 768;

  return (
    <div className="bg-primary/60 h-full">
      {/* Conteneur de particules en arrière-plan */}
      <ParticlesContainer />

      {/* Conteneur principal */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        {/* Contenu centré */}
        <div className="text-center flex flex-col justify-center xl:pt-50 xl:text-left h-full container mx-auto">
          {/* Condition pour afficher le titre et l'image */}
          {shouldDisplayTitleAndImage && (
            <>
              {/* Titre animé */}
              <motion.h1
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h1"
              >
                Hi, I am <br />{' '}
                <span className="text-accent">Achour Mariem</span>
                <br />
                FullStack Web Developer
              </motion.h1>

              {/* Avatar (image de profil) */}
              <motion.div
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[3%]"
              >
                <Avatar width={350} height={350} />
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
