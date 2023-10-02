import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials';
const Header = () => {
  return (
<header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
  <div className="container mx-auto">
    <div>
      <a href="/">
        <a src="/votre-image.png" alt="Achour Mariem" width={220} height={48} />
      </a>
    </div>
  </div>
</header>

  );
};

export default Header;
