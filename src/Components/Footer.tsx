import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-black">
      <div className="container mx-auto xl:px-20 lg:px-12 sm:px-6 px-4 py-8 md:py-12">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="text-white font-mono text-2xl md:text-4xl font-normal tracking-wide">
            MASKCRAFT
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-6 sm:gap-10 items-center justify-center mt-6 md:mt-8">
            <p className="hover:text-gray-500 text-sm md:text-base cursor-pointer leading-4 text-white">
              About
            </p>
            <p className="hover:text-gray-500 text-sm md:text-base cursor-pointer leading-4 text-white">
              Contact Us
            </p>
            <p className="hover:text-gray-500 text-sm md:text-base cursor-pointer leading-4 text-white">
              Terms of Service
            </p>
            <p className="hover:text-gray-500 text-sm md:text-base cursor-pointer leading-4 text-white">
              Privacy Policy
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-x-6 md:gap-x-8 mt-6">
            <div className="cursor-pointer">
              <FaXTwitter className="text-white text-xl md:text-2xl" />
            </div>
            <div className="cursor-pointer">
              <FaInstagram className="text-white text-xl md:text-2xl" />
            </div>
            <div className="cursor-pointer">
              <BsFacebook className="text-white text-xl md:text-2xl" />
            </div>
          </div>

          {/* Footer Text */}
          <div className="flex flex-wrap items-center justify-center mt-6 md:mt-8">
            <p className="text-sm md:text-base leading-4 text-white">
              © 2024 <span className="font-semibold">MASKCRAFT</span>
            </p>
            <div className="border-l border-white pl-2 ml-2">
              <p className="text-sm md:text-base leading-4 text-white">
                Inc. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
