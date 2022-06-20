import React from "react";

function WhatProvide() {
  return (
    <div className=" w-[100%] mt-3 md:mt-24 max-w-[1400px]  m-auto">
      {/*  */}

      <div className=" w-[100%]  md:w-[80%] m-auto flex items-center justify-center border-0 border-black flex-col px-[1rem]  md:px-0 ">
        <p className=" text-[3.5rem] sm:text-[4.5rem] font-bold tracking-normal dosis ">
          <span className=" text-[#7b68ee]"> What We</span> Provide
        </p>

        <p className=" text-center  mt-4 text-[1.3rem] sm:text-[1.5rem] text_font tracking-wide font-normal text-[#777777] px-2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis atque aperiam provident dolores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, voluptatibus.</p>
      </div>

      <div className=" w-[100%]  px-[1.2rem] md:px-[2rem]  mt-20 mb-10 flex  items-center justify-between flex-wrap  ">
        {/*  */}

        <section className=" w-[100%] sm:w-[48%] lg:w-[32%] rounded-xl bg-white  py-8 px-8 box mb-7 hover_box ">
          <img src="/web.webp" alt="" className=" w-[6rem] " />

          <div className=" mt-10">
            <p className="dosis font-bold text-[2rem] tracking-wide text-[#171822] ">Web Developer</p>

            <p className=" my-3 text-[1.3rem] text-[#6f6e6e] ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam amet exercitationem alias inventore voluptatibus assumenda unde et ipsam veniam at.</p>
          </div>
        </section>

        <section className=" w-[100%] sm:w-[48%] lg:w-[32%] rounded-xl bg-white  py-8 px-8 box mb-7 hover_box  ">
          <img src="/ai.png" alt="" className=" w-[6rem] " />

          <div className=" mt-10">
            <p className="dosis font-bold text-[2rem] tracking-wide text-[#171822] ">AI Developer</p>

            <p className=" my-3 text-[1.3rem] text-[#6f6e6e] ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam amet exercitationem alias inventore voluptatibus assumenda unde et ipsam veniam at.</p>
          </div>
        </section>

        <section className=" w-[100%] sm:w-[48%] lg:w-[32%] rounded-xl bg-white  py-8 px-8 box  mb-7 hover_box">
          <img src="/app.png" alt="" className=" w-[6rem] " />

          <div className=" mt-10">
            <p className="dosis font-bold text-[2rem] tracking-wide text-[#171822] ">App Developer</p>

            <p className=" my-3 text-[1.3rem] text-[#6f6e6e] ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam amet exercitationem alias inventore voluptatibus assumenda unde et ipsam veniam at.</p>
          </div>
        </section>
        <section className="w-[100%] sm:w-[48%] lg:w-[32%] rounded-xl bg-white  py-8 px-8 box mb-7 hover_box ">
          <img src="/Cloud.png" alt="" className=" w-[6rem] " />

          <div className=" mt-10">
            <p className="dosis font-bold text-[2rem] tracking-wide text-[#171822] ">Cloud Developer</p>

            <p className=" my-3 text-[1.3rem] text-[#6f6e6e] ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam amet exercitationem alias inventore voluptatibus assumenda unde et ipsam veniam at.</p>
          </div>
        </section>

        <section className=" w-[100%] sm:w-[48%] lg:w-[32%] rounded-xl bg-white  py-8 px-8 mb-7 box hover_box ">
          <img src="/da.png" alt="" className=" w-[6rem] " />

          <div className=" mt-10">
            <p className="dosis font-bold text-[2rem] tracking-wide text-[#171822] ">Data Analyst</p>

            <p className=" my-3 text-[1.3rem] text-[#6f6e6e] ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam amet exercitationem alias inventore voluptatibus assumenda unde et ipsam veniam at.</p>
          </div>
        </section>
        <section className=" w-[100%] sm:w-[48%] lg:w-[32%] rounded-xl bg-white  py-8 px-8 mb-7 box hover_box ">
          <img src="/ml.webp" alt="" className=" w-[6rem] rotate " />

          <div className=" mt-10">
            <p className="dosis font-bold text-[2rem] tracking-wide text-[#171822] ">ML Engineer</p>

            <p className=" my-3 text-[1.3rem] text-[#6f6e6e] ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam amet exercitationem alias inventore voluptatibus assumenda unde et ipsam veniam at.</p>
          </div>
        </section>

        {/*  */}
      </div>

      {/*  */}
    </div>
  );
}

export default WhatProvide;
