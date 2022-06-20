import { getProviders, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

function signin({ providers }) {
  return (
    <div className=" absolute top-0   w-[100%]  mt-[10vh] md:mt-0 h-[90vh] md:h-full  box-border banner_background ">
      <img src="/home-bottom-shape.png" alt="" className=" w-[100%]  absolute bottom-0 z-0   " />

      <div className=" absolute top-[50%] justify-center items-center flex flex-col left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[100%] h-[50%] border-0 border-black  ">
        <section className="w-[100%]">
          <h1 className=" text-center dosis text-[7rem] sm:text-[8rem] md:text-[10rem] font-bold text-white ">SideLine</h1>
          <p className=" w-[90%] md:w-[80%]  lg:w-[50%] text-center m-auto text-slate-200 text-[1.3rem] "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis autem nesciunt perferendis eaque commodi? Ipsum adipisci porro eveniet cumque. </p>

          {Object.values(providers).map((provider) => (
            <section key={provider.name} className=" w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%]  xl:w-[30%] flex cursor-pointer justify-between box_button rounded-xl  items-center m-auto mt-14" onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
              <div className="  flex items-center px-5 bg-slate-100 py-5 md:py-4 rounded-l-xl  ">
                <FcGoogle className=" text-[2.5rem] " />
              </div>
              <button className=" outline-none flex-1  text-[1.5rem] text-white dosis font-medium  tracking-wider text-center ">Sign in with Google</button>
            </section>
          ))}
        </section>
      </div>

      <img src="/home-bottom-shape.png" alt="" className=" w-[100%]  absolute top-0 z-0 rotate-180 " />
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
