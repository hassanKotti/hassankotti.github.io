import Navbar from "./Navbar";
import Hero from "../sections/Hero";
import SocialLinks from "../components/SocialLinks";
import DownloadCV from "../components/DownloadCV";

const Header = () => {
  return (
    <header class='relative overflow-hidden min-h-screen'>
      <div class='px-4 sm:px-6 md:px-8 hero_1'>
        <div class='relative pt-4 lg:pt-6  text-gray-700 font-semibold text-sm  leading-6'>
          <Navbar />
          <Hero />
        </div>
      </div>
      
    </header>
  );
};

export default Header;
