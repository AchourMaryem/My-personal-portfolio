import React from 'react';
import Image from 'next/image';

const Avatar = ({ width, height }) => {
  const defaultWidth = 200; // Définissez la largeur par défaut ici

  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src=""
        width={width || defaultWidth}
        height={height}
        alt=""
        className='translate-z-0 w-full h-full'
      />
    </div>
  );
};

export default Avatar;
