import { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from "../assets/Logo.svg";
import Sun from "../assets/Sun.svg";
import Moon from "../assets/Moon.svg";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [expand, setExpand]: any = useState(false);

  return (
    <section className=" py-2 min-w-full flex justify-between sm:px-6 px-2 mb-8">
      <div className="flex flex-col sm:basis-[200px] basis-[130px]">
        <Logo width={56} height={56} />
        <h1 className="self-end font-bold sm:text-3xl text-xl uppercase">
          TrueDrop
        </h1>
      </div>
      <div className="hidden w-[80%] md:flex justify-end items-center ">
        <ul className="sm:w-[40%]  flex justify-between  text-[18px] font-semibold md:mr-20">
          <Link href="/">
            <li className="cursor-pointer hover:border-b-2 hover:scale-110 transition-all ">
              Home
            </li>
          </Link>
          <Link href="/About">
            <li className="cursor-pointer hover:border-b-2  hover:scale-110 transition-all">
              About
            </li>
          </Link>
          <Link href="/About">
            <li className="cursor-pointer hover:border-b-2  hover:scale-110 transition-all">
              How to Use
            </li>
          </Link>
        </ul>
        <div className="flex items-center justify-between ">
          <span className="bg-skin-secondary p-2 rounded-full  hover:scale-110 transition-all cursor-pointer">
            <Sun width={30} height={30} />
          </span>
          {/* Moon for darkMode */}
          {/* <span className="bg-white p-0.5 rounded-full hover:scale-110 transition-all cursor-pointer">
          <Moon width={30} height={30} />
        </span> */}
          <button className="px-4 py-2 bg-skin-base font-semibold text-[18px] rounded-full text-white ml-8">
            ConnectWallet
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {!expand ? (
        <a
          href="#"
          className="self-center ml-2 md:hidden"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <BiMenu className="text-4xl" />
        </a>
      ) : (
        <a
          href="#"
          className="self-center text-center md:hidden z-50 fixed left-[85%] rounded-full bg-white mt-10"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <MdClose className="text-3xl text-black" />
        </a>
      )}
      <Transition
        show={expand}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 scale-0 "
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-500 transfrom"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-0"
        className="md:hidden w-screen h-screen fixed overflow-y left-0 top-0 z-10"
      >
        <div className="lg:hidden flex flex-col items-start w-full px-4 bg-skin-secondary py-10 md:px-8 ">
          <div className="flex flex-col mb-10">
            <Logo width={56} height={56} />
            <h1 className="ml-6 font-bold text-3xl uppercase text-white ">
              TrueDrop
            </h1>
          </div>

          <div className=" items-center w-full">
            <ul className="justify-between text-2xl font-semibold  text-white ">
              <Link href="/">
                <li className="">Home</li>
              </Link>
              <hr className="w-full my-4 border-gray-700" />
              <Link href="/About">
                <li className="">About</li>
              </Link>
              <hr className="w-full my-4 border-gray-700" />
              <Link href="/About">
                <li className="">How to Use</li>
              </Link>
              <hr className="w-full my-4 border-gray-700" />
            </ul>
            <div className=" ">
              <span className="bg-skin-secondary p-0.5 rounded-full block ">
                <Sun width={30} height={30} />
              </span>
              <hr className="w-full my-4 border-gray-700" />
              {/* Moon for darkMode */}
              {/* <span className="bg-white p-0.5 rounded-full">
          <Moon width={30} height={30} />
        </span> */}
              <button className="px-4 py-2 bg-skin-base font-semibold text-[18px] rounded-full text-white mt-3">
                ConnectWallet
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </section>
  );
};

export default Navbar;
