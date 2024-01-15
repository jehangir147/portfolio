import Link from "next/link";
import React from "react";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className=" w-full h-screen text-center">
      <div className=" max-w-[1240] w-full h-full px-4 mx-auto flex justify-center items-center">
        <div>
          <div className=" my-4 tracking-widest text-gray-600">
            <p>LET'S BUILD SOMETHING TOGETHER</p>
          </div>
          <div className="my-3">
            <h2 className=" mb-2">
              Hi, I'm <span className=" text-[#5651e5]">Jehangir</span>
            </h2>
            <h2>A Front-End Web Develper</h2>
          </div>
          <div className="max-w-[70%] mx-auto my-3 text-gray-600">
            <p>
              I'm a passionate web developer. I have a strong foundation in
              HTML, CSS, and JavaScript. I've already worked on a few small
              projects(listed below). Currently polishing my skills in NEXTjs,
              REACTjs and TAILWINDcss. I'm eager to collaborate, learn, and
              contribute to web development projects. Excited to connect with
              fellow developers and industry professionals to grow together in
              building the web!"
            </p>
          </div>

          <div className=" mt-6 flex items-center justify-between w-[70%] m-auto text-[#5651e5]">
            <div className=" p-6 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 duration-300 ease-in ">
              <Link href="#">
                <FaLinkedinIn size={30} />
              </Link>
            </div>
            <div className=" p-6 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 duration-300 ease-in ">
              <Link href="#">
                <FaGithub size={30} />
              </Link>
            </div>
            <div className=" p-6 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 duration-300 ease-in ">
              <Link href="#">
                <AiOutlineMail size={30} />
              </Link>
            </div>
            <div className=" p-6 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 duration-300 ease-in ">
              <Link href="#">
                <BsFillPersonLinesFill size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
