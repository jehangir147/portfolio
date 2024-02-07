import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:h-screen px-4">
      <div className=" w-full max-w-[1240px] m-auto lg:grid grid-cols-3 gap-8">
        <div className=" col-span-2 pb-6 text-gray-600">
          <p className=" tracking-widest text-[#5651e5]">ABOUT</p>
          <h2 className="py-4">Who I Am</h2>
          <p>
            I love developing dynamic and engaging websites, and I've been
            diving headfirst into the world of web development. I always look
            forward to expand my skills to create more interactive and
            user-friendly experiences. The web development experience I gained
            from my projects has fueled my desire to continue learning and
            exploring new technologies in the web development ecosystem.
          </p>
          <p>
            While I may be at the beginning of my web development journey, I
            bring a strong commitment to continuous improvement and a keen eye
            for detail. I'm currently spending my time building projects using
            REACTjs, NEXTjs, TAILWINDcss and learning new technologies. I am
            also open to collaborating with other developers and learning from
            their experiences. I'm eager to contribute my enthusiasm,
            dedication, and fresh perspective to any web development project.
            <p>Checkout some of my projects</p>
          </p>
        </div>
        <div className=" flex justify-center items-center hover:scale-105 ease-in-out duration-300 shadow-md shadow-gray-400 p-4 rounded-xl">
          <Image
            className=" rounded-xl"
            src="/../assets/programming.jpg"
            width={768}
            height={1000}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
