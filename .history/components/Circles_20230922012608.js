import Image from 'next/image';

const Circles = () => {
  return <div>
    <Image src={'/circles.png'} width={260} height={200} className='w-full h-full' />
  </div>;
};

export default Circles;
