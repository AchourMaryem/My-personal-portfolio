import Image from "next/image";
const TopLeftImg = () => {
  return <div className="absolute left">
    <Image src='/top-left-img.png' width={400} height={400}  alt=""/>
  </div>;
};

export default TopLeftImg;
