import React from "react";
import Link from "next/link";
import Card from "../components/Card";
import CardDropdown from "../components/CardDropdown";
import VerticalCard from "../components/VerticalCard";

import { AiOutlineArrowLeft } from "react-icons/ai";

const Works2019 = () => {
  return (
    <div className="w-screen px-2">
      <div className="w-full h-[20vh] flex items-center px-4">
        <Link href="/">
          <AiOutlineArrowLeft className="text-2xl text-black" />
        </Link>
      </div>

      <VerticalCard
        src="/images/2019/27.jpeg"
        title={`"11"`}
        description="Ball point pen, acrylic on wood, 172x122cm⁣⁣⁣, 2019⁣⁣⁣."
      />
      <CardDropdown
        src="/images/2019/24.jpeg"
        title={`"9"`}
        description="Ball point pen, acrylic, oil on wood⁣, 122x150cm⁣, 2019⁣⁣."
      />
      <Card
        src="/images/2019/23.jpeg"
        title={`"8"`}
        description="Ball point pen, acrylic, oil silkscreen on wood, 122x165cm⁣⁣, 2019⁣⁣."
      />
      <Card
        src="/images/2019/22.jpeg"
        title={`"5"`}
        description="Ball point pen, ink on wood, 20x33x2cm⁣⁣, 2019⁣.⁣"
      />
    </div>
  );
};

export default Works2019;
