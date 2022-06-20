import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Developer() {
  return (
    <div className="   w-[100%] mt-10 md:mt-24  px-[1.5rem]  md:px-[2rem]   ">
      <div className=" w-[100%]  md:w-[80%] lg:w-[75%] m-auto flex items-center justify-center border-0 border-black flex-col px-[1rem]  md:px-0 ">
        <p className=" text-[3.5rem] sm:text-[4.5rem] font-bold tracking-normal dosis ">
          <span className=" text-[#7b68ee]"> Team</span> Members
        </p>
      </div>

      <section className=" w-[100%] flex items-center justify-around flex-wrap mt-10 mb-14   ">
        <Images image="/team-1.jpg" name="Ishita Phugat Choudhary" profession="Developer" />
        <Images image="/team-2.jpg" name="Anuj Kumar Singh" profession="Web Developer" />
        <Images image="/team-3.jpg" name="Bitan Paul" profession="Developer" />
      </section>
    </div>
  );
}

const Images = ({ image, name, profession }) => (
  <div className=" slow relative  w-[100%] sm:w-[47%] md:w-[30%] rounded-2xl shadow-lg h-fit  shadow-[#000000d9] mt-10  hover:scale-105 duration-100 transition-all delay-150 ease-in-out">
    <img src={image} alt="" className=" w-[100%] rounded-xl  " />

    <section className=" absolute  bottom-0 left-0 w-[100%] rounded-b-xl py-2 px-5  bg-[#000000bc] ">
      <p className=" text-[1.5rem] dosis font-medium text-white tracking-wider ">{name}</p>
      <p className=" text-[1.2rem] font-medium text-pink-500  tracking-wide ">{profession}</p>
    </section>

    <section className="absolute top-0 right-0 flex-col max-w-[12%] px-2 bg-gradient-to-r from-pink-500 to-violet-900  rounded-tr-xl rounded-bl-2xl py-5 ">
      <a href="#">
        <FaInstagram className=" w-[60%] m-auto text-white cursor-pointer my-2 " />
      </a>
      <a href="#">
        <FaGithub className="  w-[60%] m-auto text-white cursor-pointer my-2 " />
      </a>
      <a href="#">
        <FaLinkedinIn className=" w-[60%] m-auto text-white cursor-pointer my-2 " />
      </a>
    </section>
  </div>
);

export default Developer;
