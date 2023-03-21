import React from "react";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Works = () => {
  return (
    <div className="w-screen">
      <div className="w-screen h-[20vh] flex items-center px-4">
        <Link href="/">
          <AiOutlineArrowLeft className="text-2xl text-black" />
        </Link>
      </div>
      <h1 className="font-impact italic text-4xl ml-5">WORKS</h1>

      <div className="w-full h-[50px]" />

      <div className="w-full h-[60vh] flex flex-col justify-around items-center">
        <div className="w-[80%] border-b font-impact border-black">
          <Link href="">2023</Link>
        </div>
        <div className="w-[80%] border-b font-impact border-black">
          <Link href="">2022</Link>
        </div>
        <div className="w-[80%] border-b font-impact border-black">
          <Link href="">2021</Link>
        </div>
        <div className="w-[80%] border-b font-impact border-black">
          <Link href="">2020</Link>
        </div>
        <div className="w-[80%] border-b font-impact border-black">
          <Link href="/2019">2019</Link>
        </div>
      </div>
    </div>
  );
};

export default Works;
