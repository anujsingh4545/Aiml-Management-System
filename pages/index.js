import React, { useState } from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { useRecoilState } from "recoil";
import { CheckAuthentication } from "../atom/CheckAuthentication";
import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function index({ sessio }) {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="  flex items-center justify-center relative h-[90vh]  mt-[10vh] md:mt-0   md:h-[100%] md:rounded-xl    box-border bg-transparent  "></div>;
  }

  if (status === "unauthenticated") {
    router.push("/auth/signin");
  } else {
    return (
      <div className="  relative w-[100%] pt-[10%] md:mt-0  h-[100%] md:overflow-y-scroll md:scrollbar-hide   md:h-[100%] md:rounded-xl  right_tab  box-border shadow-lg shadow-[#ffffff14]  text-[3rem] border-[0.1rem] border-slate-700 text-white">
        {/*  */}

        <section className="  top-0 hidden md:flex md:fixed items-center justify-between bg-gradient-to-r from-[#4450d4] to-violet-800 w-[100%] z-30  h-20 md:rounded-t-xl  px-7 shadow-md shadow-[#ffffff1b] ">
          <div className=" flex items-center ">
            <IoHomeOutline className=" text-[2rem]   font-bold  " />
            <p className="   dosis  text-[2rem] font-medium  ml-6 tracking-wider  ">Home</p>
          </div>

          <RiLogoutCircleRLine
            className=" text-[2rem]  text-slate-300  font-bold cursor-pointer slow hover:text-white  "
            onClick={() => {
              signOut();
            }}
          />
        </section>

        <section className=" w-[100%] h-full md:overflow-y-scroll md:scrollbar-hide z-50 "></section>

        {/*  */}
      </div>
    );
  }
}

// export async function getServerSideProps({ req, res }) {
//   const session = await getSession(req);

//   console.log(session);

//   if (!session) {
//     res.writeHead(307, { Location: "/auth/signin" });
//     res.end();
//     return { props: {} };
//   }

//   return { props: { session } };
// }
export default index;
