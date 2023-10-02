import Image from 'next/image';

const Avatar = () => {
  return (
  <div className='hidden xl:flex xl:max-w-none'>
<Image 
src={'/imagee.png'} 
width={737} 
height={678}
 alt="" 
className='translate-z-0 w-full h-full'/>
  </div>
);
};

export default Avatar;
import Image from "next/image";
const Avatar = ({ width, height }) => {
	return (
		<div className="max-w-none">
			<Image
				priority
				src={
					"https://res.cloudinary.com/duaagiskm/image/upload/v1692305501/cv%20webp/me4_apbzty_mfexrs.webp"
				}
				alt=""
				width={width}
				height={height}
				className={`border-2 rounded-full w-[200px] h-[200px] xl:w-[350px] xl:h-[350px] bg-black object-cover`}
			/>
		</div>
	);
};

export default Avatar;