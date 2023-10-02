import Link from "next/link";
import {
  RiLinkedinLine,
  RiGithubLine,
  RiInstagramLine,
  RiFacebookLine} from 'react-icons/ri'
const Socials = () => {
  return <div>
    <Link href={''} className="hover:text-accent transition-all ">
      <RiLinkedinLine />
    </Link>
  </div>;
};

export default Socials;
