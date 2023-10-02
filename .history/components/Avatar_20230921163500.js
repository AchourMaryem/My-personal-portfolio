import Image from 'next/image';
const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
    <Image src={'/a'} />
  </div>;
};

export default Avatar;
