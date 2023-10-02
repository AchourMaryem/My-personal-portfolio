import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return <div className="mx-auto xl:mx-0">
   <Link href={'/work'} className="relative">
    <Image 
    src={'/rounded-text.png'}
     width={141}
     height={148}
     alt=''
     className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
      />
      <HiArrowRight className="absolute text-4xl g" />
   </Link>
    </div>;
};

export default ProjectsBtn;
