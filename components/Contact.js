import React from "react";

function Contact() {
  return (
    <div className=" w-[100%] my-20 max-w-[1400px]   m-auto">
      <div className=" w-[100%]  md:w-[80%] lg:w-[75%] m-auto flex items-center justify-center border-0 border-black flex-col px-[1rem]  md:px-0 ">
        <p className=" text-[3.5rem] sm:text-[4.5rem] font-bold tracking-normal dosis ">
          <span className=" text-[#7b68ee]"> Get in</span> Touch
        </p>

        <p className=" text-center  mt-4 text-[1.3rem] sm:text-[1.5rem] text_font tracking-wide font-normal text-[#777777] px-2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis atque aperiam provident dolores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, voluptatibus.</p>
      </div>

      <div className="w-[100%] px-[1rem]  md:px-0 md:w-[80%] lg:w-[75%] mt-16 m-auto ">
        <section className=" w-[100%] flex flex-col md:flex-row items-center justify-between ">
          <input type="text" placeholder="Your Name" className=" placeholder-gray-600 placeholder-opacity-80 bg-white text-black text-[1.2rem] sm:text-[1.4rem] font-normal  px-5 py-4 w-[100%] md:w-[48%] rounded-full border-[0.05rem] border-gray-400 outline-none  tracking-wider  " />
          <input type="email" placeholder="Email" className="  placeholder-gray-600 placeholder-opacity-80 text-black text-[1.2rem] sm:text-[1.4rem] font-normal mt-6 md:mt-0  px-5 py-4 w-[100%] md:w-[48%] rounded-full border-[0.05rem] border-gray-400 outline-none  tracking-wide " />
        </section>

        <section className="w-[100%]">
          <input type="text" placeholder="Subject" className="  placeholder-gray-600 placeholder-opacity-80 text-black text-[1.2rem] sm:text-[1.4rem] font-normal  px-5 py-4 w-[100%]  rounded-full border-[0.05rem] border-gray-400 outline-none   tracking-wide mt-6 " />
          <textarea name="" id="" cols="30" placeholder="Message" className=" placeholder-gray-600 placeholder-opacity-80  text-black text-[1.2rem] sm:text-[1.4rem] font-normal  px-5 py-4 w-[100%]  rounded-3xl border-[0.05rem] border-gray-400 outline-none   tracking-wide mt-5 " rows="8"></textarea>
        </section>

        <button className=" w-[100%] rounded-full py-5 text-center bg-gradient-to-r from-[#3a26ae] to-[#8273d9] text-white  mt-4  text-[1.4rem] font-medium sm:text-[1.6rem] dosis  tracking-wider hover:from-[#35229d] hover:to-[#715fd6] duration-150 delay-150  ">Send Message</button>
      </div>
    </div>
  );
}

export default Contact;
