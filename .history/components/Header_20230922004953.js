import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';

import Socials from '../components/Socials';
const Header = () => {
  const router = useRouter();

  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div>
          {router.pathname === '/' ? (
            <Link href="/"></Link>
          ) : (
            <Link href="/" className="text-3xl color=" >Achour Mariem</Link>
          )}
        </div>
      </div>
    </header>

  );
};

export default Header;
