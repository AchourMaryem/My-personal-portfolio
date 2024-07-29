import React from 'react';
import Image from 'next/image';

const Avatar = ({ width, height }) => {
  const defaultWidth = 200; 
  const defaultHeight = 200; 

  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src="/mariem.png"
        width={width || defaultWidth}
        height={height || defaultHeight}
        alt="Avatar de Mariem"
        className='translate-z-0 w-full h-full'
        layout='intrinsic' 
        quality={100}
      />
    </div>
  );
};

export default Avatar;
