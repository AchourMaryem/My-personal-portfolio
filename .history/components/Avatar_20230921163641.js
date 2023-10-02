import Image from 'next/image';
const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
<Image src={'/avatar.png'} width={7} height={200} alt="Avatar" />
  </div>;
};

export default Avatar;
