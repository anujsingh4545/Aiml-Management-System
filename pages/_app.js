import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <div className="max-w-[1400px] w-[100%] m-auto flex  md:px-5  box-border bg-[url('https://img.freepik.com/free-vector/seamless-gold-rhombus-grid-pattern-black-background_53876-97589.jpg?t=st=1655520442~exp=1655521042~hmac=99062d77fb0517907feea90cd2739a0e0d2d1ab902a034bac9d5bd66755b692f&w=1060')] bg-no-repeat bg-cover  ">
          {/*  */}

          <div className=" w-[100%] fixed top-0 md:relative md:w-[35%]  lg:w-[25%] z-10 flex ">
            <Sidebar />
          </div>

          <div className=" w-[100%] md:w-[65%] lg:w-[75%] md:h-[100vh]  md:py-5 relative box-border   ">
            <Component {...pageProps} />
          </div>

          {/*  */}
        </div>
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
