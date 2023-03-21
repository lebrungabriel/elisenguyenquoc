import React from "react";
import Link from "next/link";

function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-around items-center">
      <div className="h-[20%] w-full w-full flex justify-center items-center">
        <h1 className="font-impact text-4xl italic text-center">
          ELISE NGUYEN QUOC
        </h1>
      </div>

      <div className="h-[60%] w-full pl-4 w-full flex flex-col justify-center sm:w-[90%] lg:w-[80%]">
        <div className="flex w-fit group">
          <span>-</span>
          <div className="bg-black px-4 pb-3 relative z-40 group-hover:bg-white ease-in-out duration-200">
            <div className="bg-black absolute left-0 -bottom-4 h-full w-[5px] z-10 group-hover:bg-white ease-in-out duration-200" />
            <div className="bg-black absolute right-0 -bottom-4 h-full w-[15%] z-10 group-hover:bg-white ease-in-out duration-200" />
            <div className="text-white text-7xl font-impact relative z-40 group-hover:text-black ease-in-out duration-200">
              <Link href="/works">WORKS</Link>
            </div>
          </div>
          <span>- - -</span>
        </div>

        <div className="flex w-fit ml-5 mt-3 group">
          <span>- -</span>
          <div className="bg-black group-hover:bg-white ease-in-out duration-200">
            <div className="text-white text-6xl pr-4 pl-1 pt-2 font-impact group-hover:text-black ease-in-out duration-200">
              <Link href="/text">TEXTS</Link>
            </div>
          </div>
          <span>- -</span>
        </div>

        <div className="flex w-fit ml-3 mt-3 group">
          <span>—</span>
          <div className="bg-black pl-6 pb-5 pr-1 group-hover:bg-white ease-in-out duration-200">
            <div className="text-white text-7xl font-impact group-hover:text-black ease-in-out duration-200">
              <Link href="/about">ABOUT</Link>
            </div>
          </div>
          <span>—</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
