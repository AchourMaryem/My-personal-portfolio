import Link from "next/link";
import {
  RiLinkedinLine,
  RiGithubLine,
  RiInstagramLine,
  RiFacebookLine} from 'react-icons/ri'
const Socials = () => {
  return <div>
    <Link href={''} className="hover:te">
      <RiLinkedinLine />
    </Link>
  </div>;
};

export default Socials;
