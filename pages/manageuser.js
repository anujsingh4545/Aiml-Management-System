import React from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";

function ManageUser() {
  return (
    <div className=" w-[100%] mt-[10vh] md:mt-0  h-fit  md:overflow-y-scroll md:scrollbar-hide   md:h-[100%] md:rounded-xl  right_tab  box-border shadow-lg shadow-[#ffffff14]  text-[3rem] border-[0.1rem] border-slate-700 text-white">
      {/*  */}

      <section className="  top-0 hidden md:flex md:fixed items-center justify-between bg-gradient-to-r from-[#4450d4] to-violet-800 w-[100%] z-30  h-20 md:rounded-t-xl  px-7 shadow-md shadow-[#ffffff1b] ">
        <div className=" flex items-center ">
          <HiOutlineUser className=" text-[2rem]   font-bold  " />
          <p className="   dosis  text-[2rem] font-medium  ml-6 tracking-wider ">Manage User</p>
        </div>

        <RiLogoutCircleRLine className=" text-[2rem]  text-slate-300  font-bold cursor-pointer slow hover:text-white  " />
      </section>

      <section className=" w-[100%] h-full md:overflow-y-scroll md:scrollbar-hide z-50 "></section>

      {/*  */}
    </div>
  );
}

export default ManageUser;
