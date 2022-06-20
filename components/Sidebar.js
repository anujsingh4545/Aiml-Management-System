import React, { useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { FaRegAddressCard } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";

import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { CheckAuthentication } from "../atom/CheckAuthentication";

function Sidebar() {
  const [on, seton] = useState(false);
  const [auth, setAuth] = useRecoilState(CheckAuthentication);

  // console.log(auth);

  const router = useRouter();

  const handleResize = () => {
    if (window.innerWidth < 766) {
      seton(false);
    } else {
      seton(true);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className=" w-[100%] h-[100%]  md:py-5 md:pr-5  ">
      {/*  */}
      <div className=" md:hidden fixed top-0 z-40 left-0 w-[100%] flex  items-center justify-between px-10 bg-gradient-to-r from-[#4450d4] to-violet-800 h-[10%]  shadow-md ">
        <p className=" dosis  text-[3rem] font-extrabold text-white tracking-wide ">SideLine</p>
        <HiMenuAlt1
          className=" text-slate-100  h-[100%] w-[3rem] cursor-pointer  "
          onClick={() => {
            seton(!on);
          }}
        />
      </div>

      <section className={on ? " w-[100%] h-[90%] md:h-[100%] flex fixed md:relative left-0 bottom-0  z-20  " : " w-[0%] h-[90vh] md:h-[100%] flex fixed md:relative left-0 bottom-0  fast  "}>
        {/*  */}

        <div className={on ? " slow w-[65%]  sm:w-[50%] md:w-[100%] h-[90vh] md:h-[100%]   box-border bottom-0   md:rounded-xl bg-gradient-to-r from-[#4450d4] to-violet-800 m md:from-[#4d5bf9a3] md:to-[#4d5bf9a3]  md:py-2  " : " bg-gradient-to-r from-[#4450d4] to-violet-800 md:bg-[#4d5bf9a3] box-border bottom-0  h-[100vh] w-[0%] overflow-x-hidden fast "}>
          {/*  */}

          <section className=" hidden  md:flex   justify-between items-center px-10 ">
            <p className=" dosis  text-[3rem] font-extrabold text-white tracking-wide ">SideLine</p>
            <HiMenuAlt1 className=" text-slate-100  h-[100%] w-[2.5rem] " />
          </section>

          <ul className="  md:mt-16 navigation  py-4 md:py-0   ">
            <li className={router.pathname == "/" ? "active not_tab list " : " not_tab list "}>
              <Link href="/">
                <div
                  className=" flex items-center w-[100%] cursor-pointer pl-3 py-4 "
                  onClick={() => {
                    if (window.innerWidth < 766) {
                      seton(false);
                    }
                  }}
                >
                  <IoHomeOutline className=" text-[1.8rem]   font-bold  " />
                  <p className="   dosis  text-[1.7rem] font-medium  ml-6 tracking-wider truncate  ">Home</p>
                </div>
              </Link>
            </li>

            <li className={router.pathname == "/manageuser" ? "active not_tab list " : " not_tab list "}>
              <Link href="/manageuser">
                <div
                  className=" flex items-center w-[100%] cursor-pointer pl-3 py-4  "
                  onClick={() => {
                    if (window.innerWidth < 766) {
                      seton(false);
                    }
                  }}
                >
                  <HiOutlineUser className=" text-[1.8rem]   font-bold  " />
                  <p className="   dosis  text-[1.7rem] font-medium  ml-6 tracking-wider truncate  ">Manage User</p>
                </div>
              </Link>
            </li>

            <li className={router.pathname == "/manageskills" ? "active not_tab list " : " not_tab list "}>
              <Link href="/manageskills">
                <div
                  className=" flex items-center w-[100%] cursor-pointer pl-3 py-4  "
                  onClick={() => {
                    if (window.innerWidth < 766) {
                      seton(false);
                    }
                  }}
                >
                  <FaRegAddressCard className=" text-[1.8rem]   font-bold  " />
                  <p className="   dosis  text-[1.7rem] font-medium  ml-6 tracking-wider  truncate ">Manage Skill</p>
                </div>
              </Link>
            </li>

            <li className={router.pathname == "/settings" ? "active not_tab list " : " not_tab list "}>
              <Link href="/settings">
                <div
                  className=" flex items-center w-[100%] cursor-pointer pl-3 py-4 "
                  onClick={() => {
                    if (window.innerWidth < 766) {
                      seton(false);
                    }
                  }}
                >
                  <IoSettingsOutline className=" text-[1.8rem]   font-bold  " />
                  <p className="   dosis  text-[1.7rem] font-medium  ml-6 tracking-wider truncate  ">Settings</p>
                </div>
              </Link>
            </li>

            <li className={router.pathname == "/about" ? "active not_tab list " : " not_tab list "}>
              <Link href="/about">
                <div
                  className=" flex items-center w-[100%] cursor-pointer pl-3 py-4 "
                  onClick={() => {
                    if (window.innerWidth < 766) {
                      seton(false);
                    }
                  }}
                >
                  <CgWebsite className=" text-[1.8rem]   font-bold  " />
                  <p className="   dosis  text-[1.7rem] font-medium  ml-6 tracking-wider truncate  ">About Us</p>
                </div>
              </Link>
            </li>

            <li className={router.pathname == "/contact" ? "active not_tab list " : " not_tab list "}>
              <Link href="/contact">
                <div
                  className=" flex items-center w-[100%] cursor-pointer pl-3 py-4 "
                  onClick={() => {
                    if (window.innerWidth < 766) {
                      seton(false);
                    }
                  }}
                >
                  <HiOutlineUserGroup className=" text-[1.8rem]   font-bold  " />
                  <p className="   dosis  text-[1.7rem] font-medium  ml-6 tracking-wider  truncate ">Contact Us</p>
                </div>
              </Link>
            </li>

            <li
              className=" flex items-center   ml-7  my-2  rounded-tl-3xl rounded-bl-3xl "
              onClick={() => {
                localStorage.setItem("login", JSON.stringify(0));
                console.log("hello");
              }}
            >
              <div
                className=" flex items-center w-[100%] cursor-pointer pl-3 py-4 "
                onClick={() => {
                  if (window.innerWidth < 766) {
                    seton(false);
                  }
                }}
              >
                <IoIosLogOut className=" text-[1.8rem]   font-bold  " />
                <p className="   dosis  text-[1.7rem] font-medium  ml-6 tracking-wider  truncate ">Sign Out</p>
              </div>
            </li>
          </ul>

          {/*  */}
        </div>

        <div
          className={on ? " w-[35%] sm:w-[50%] h-[90vh]  bg-transparent md:hidden box-border bottom-0  " : " h-[90vh]  w-[0%] z-20 md:hidden  border-0  "}
          onClick={() => {
            seton(false);
          }}
        ></div>

        {/*  */}
      </section>

      {/*  */}
    </div>
  );
}

export default Sidebar;
