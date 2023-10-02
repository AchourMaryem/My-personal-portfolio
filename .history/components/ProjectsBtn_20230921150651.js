import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return <div className="mx-auto xl:mx-0">
   <Link href={'/work'}>
    <Image src={'/rounded-text.png'}
     width={141}
     height={148}
     alt=''
     className="animate-spin-slow" />
   </Link>
    </div>;
};

export default ProjectsBtn;
