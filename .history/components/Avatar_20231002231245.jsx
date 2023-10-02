import React from 'react';
import Image from 'next/image';

const Avatar = ({ width, height }) => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src="https://res.cloudinary.com/dlchthnxq/image/upload/v1696281891/image_yuyjo0.png"
        width={width} // Ajoutez la propriété width ici
        height={height}
        alt=""
        className='translate-z-0 w-full h-full'
      />
    </div>
  );
};

export default Avatar;
