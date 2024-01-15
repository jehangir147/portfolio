"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" fixed w-full h-20 z-[100] shadow-xl">
      <div className=" flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Image
          src="/../assets/navLogo2.png"
          alt="Logo image"
          width="100"
          height="80"
          className=" rounded-full shadow-xl"
        ></Image>
        <div className=" hidden md:block">
          <ul className="flex">
            <Link href="#">
              <li className="ml-10 font-medium hover:border-b">HOME</li>
            </Link>
            <Link href="#">
              <li className="ml-10 font-medium hover:border-b">ABOUT</li>
            </Link>
            <Link href="#">
              <li className="ml-10 font-medium hover:border-b">SKILL</li>
            </Link>
            <Link href="#">
              <li className="ml-10 font-medium hover:border-b">PROJECTS</li>
            </Link>
            <Link href="#">
              <li className="ml-10 font-medium hover:border-b">CONTACT</li>
            </Link>
          </ul>
        </div>
        <div className="md:hidden ">
          <FiMenu size={25} onClick={handleNav} />
        </div>
      </div>
      <div
        className={
          nav ? "" : "md:hidden fixed top-0 left-0 w-full h-full bg-black/60"
        }
      >
        <div
          className={
            nav
              ? " md:hidden fixed top-0 left-[-100%] h-full w-[80%] bg-[#ecf0f3] px-10 pt-2 ease-in duration-500"
              : " md:hidden fixed top-0 left-0 h-full w-[80%] sm:w-[70%] md:w-[60%] bg-[#ecf0f3] px-10 pt-2 ease-in duration-500"
          }
        >
          <div className="flex items-center justify-between">
            <Image
              src="/../assets/navLogo2.png"
              alt="Logo image"
              width="100"
              height="80"
              className=" rounded-full shadow-xl"
            ></Image>
            <div className=" rounded-full p-2 shadow-lg shadow-slate-400 cursor-pointer">
              <IoClose size={28} onClick={handleNav} />
            </div>
          </div>
          <div className=" py-4 ">
            <p className=" text-lg py-4 border-b border-gray-300">
              Lets create something exciting together
            </p>
          </div>
          <div className="py-4">
            <ul className="">
              <Link href="#">
                <li className="py-4 font-medium hover:border-b hover:border-gray-300">
                  HOME
                </li>
              </Link>
              <Link href="#">
                <li className="py-4 font-medium hover:border-b hover:border-gray-300">
                  ABOUT
                </li>
              </Link>
              <Link href="#">
                <li className="py-4 font-medium hover:border-b hover:border-gray-300">
                  SKILL
                </li>
              </Link>
              <Link href="#">
                <li className="py-4 font-medium hover:border-b hover:border-gray-300">
                  PROJECTS
                </li>
              </Link>
              <Link href="#">
                <li className="py-4 font-medium hover:border-b hover:border-gray-300">
                  CONTACT
                </li>
              </Link>
            </ul>
          </div>
          <div className="pt-10">
            <p className=" uppercase tracking-widest text-[#5651e5]">
              Let's connect
            </p>
            <div className=" mt-6 flex justify-between w-full sm:w-[80%]">
              <div className=" p-3 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 duration-300 ease-in ">
                <FaLinkedinIn />
              </div>
              <div className=" p-3 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 duration-300 ease-in ">
                <FaGithub />
              </div>
              <div className=" p-3 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 duration-300 ease-in ">
                <AiOutlineMail />
              </div>
              <div className=" p-3 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 duration-300 ease-in ">
                <BsFillPersonLinesFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
