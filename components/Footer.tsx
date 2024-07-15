"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#131A22] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0">
            <div className="flex flex-col items-center">
            <Image
                src="/Logo1.png"
                alt="Zephyra Logo"
                width={110}
                height={80}
                style={{ width: 'auto', height: 'auto' }}
                className="mr-10 mb-2"
              />
              <p className="text-gray-400 px-5">
                Zephyra is an online store that offers a wide range of products.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Get to Know Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2 hover:text-white">
                <Link href="/">About Us</Link>
              </li>
              <li className="mb-2 hover:text-white">
                <Link href="/">Careers</Link>
              </li>
              <li className="mb-2 hover:text-white">
                <Link href="/">Press Releases</Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Connect with Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2 hover:text-white">
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Link>
              </li>
              <li className="mb-2 hover:text-white">
                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Link>
              </li>
              <li className="mb-2 hover:text-white">
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="text-lg font-bold mb-4">Make Money with Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2 hover:text-white">
                <Link href="/">Sell on Zephyra</Link>
              </li>
              <li className="mb-2 hover:text-white">
                <Link href="/">Become an Affiliate</Link>
              </li>
              <li className="mb-2 hover:text-white">
                <Link href="/">Advertise Your Products</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Zephyra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
