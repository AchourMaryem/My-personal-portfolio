import Image from 'next/image';
const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
    <Image src={'/avatar.png'} />
  </div>;
};

export default Avatar;