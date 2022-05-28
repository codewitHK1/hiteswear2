import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"></a>
            <Link href={"/"}>
              <a>
                <Image src="/logo.jpg" alt="logo" width={300} height={80} />
              </a>
            </Link>
            <p className=" text-base font-semibold font-serif text-gray-500 text-center">
              wear Hits only
            </p>
            <p className="m-2 text-base font-serif text-gray-500 text-cente">
              Premium T-shirt ,Jackets ,Stickers and much more...
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium cursor-pointer hover:text-blue-600 text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={"/Tshirt"}>
                    <a className="text-gray-600  hover:text-blue-500">
                      T-shirt
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/Hoodies"}>
                    <a className="text-gray-600 hover:text-blue-500">Hoodies</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/Mugs"}>
                    <a className="text-gray-600 hover:text-blue-500">Mugs</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/Stick"}>
                    <a className="text-gray-600 hover:text-blue-500">
                      Stickers
                    </a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium cursor-pointer hover:text-blue-600 text-gray-900 tracking-widest text-sm mb-3">
                LINKS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600  hover:text-gray-800">POLICY</a>
                </li>
                <li>
                  <a className="text-gray-800 hover:text-gray-800">ABOUT</a>
                </li>
                <li>
                  <a className="text-gray-800 hover:text-gray-800">
                    COSTMER SUPPORT
                  </a>
                </li>
                <li>
                  <a className="text-gray-800 hover:text-gray-800">CAREER</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium cursor-pointer hover:text-blue-600 text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600  hover:text-gray-800">T-shirt</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Hoodies</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Mugs</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Stickers</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium cursor-pointer hover:text-blue-600 text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600  hover:text-gray-800">T-shirt</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Hoodies</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Mugs</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Stickers</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-700 font-bold text-sm text-center sm:text-left">
              © 2022 Hitswear.com —All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
