
import Image from "next/image";
const Avatar = ({ width, height }) => {
	return (
		<div className="max-w-none">
			<Image
				priority
        src={'/imagee.png'} 
				alt=""
				width={width}
				height={height}
				className={`border-2 rounded-full w-[200px] h-[200px] xl:w-[350px] xl:h-[350px] bg-black object-cover`}
			/>
		</div>
	);
};

export default Avatar;