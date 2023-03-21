import Link from "next/link";
import React from "react";
import Awards from "../components/Awards";
import Education from "../components/Education";
import Groupshow from "../components/Groupshow";

import { AiOutlineArrowLeft } from "react-icons/ai";

const About = () => {
  return (
    <div className="w-screen">
      <div className="w-screen h-[20vh] flex items-center px-4">
        <Link href="/">
          <AiOutlineArrowLeft className="text-2xl text-black" />
        </Link>
      </div>

      <div className="w-screen h-[25vh] flex flex-col justify-between items-center">
        <div className="w-full">
          <h1 className="font-impact italic text-4xl ml-5 leading-8">
            ELISE <br />
            NGUYEN QUOC
          </h1>
          <p className="mt-3 ml-8">
            (born in France) lives and works in Paris.
          </p>
        </div>

        <div className="w-[70%]">
          <div>
            <Link href="/">ELISENGUYEN@ME.COM</Link>
          </div>
          <div>
            <Link href="/">@elise.nguyenquoc</Link>
          </div>
        </div>
      </div>

      <div className="w-screen h-[80px]" />
      <Groupshow />
      <div className="w-screen h-[80px]" />
      <Awards />
      <div className="w-screen h-[80px]" />
      <Education />
      <div className="w-screen h-[80px]" />
    </div>
  );
};

export default About;
