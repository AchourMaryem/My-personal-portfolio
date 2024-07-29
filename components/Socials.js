import Link from "next/link";
import {
  RiLinkedinLine,
  RiGithubLine} from 'react-icons/ri'
const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://www.linkedin.com/in/mariem-achour-915469235/'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
    </Link>
    <Link href={'https://github.com/AchourMaryem?tab=repositories'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiGithubLine />
    </Link>
  </div>
  );
};

export default Socials;
