import Link from "next/link";
import {
  RiLinkedinLine,
  RiGithubLine,
  RiInstagramLine,
  RiFacebookLine} from 'react-icons/ri'
const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://www.linkedin.com/in/mariem-achour-915469235/'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiGithubLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiFacebookLine />
    </Link>
  </div>
  );
};

export default Socials;