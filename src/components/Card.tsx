import React from "react";
import Image from "./Image";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

function Card({ title, description, link }: CardProps) {
  return (
    <div className="bg-white mx-7 relative hover:text-white hover:bg-black w-[383px] h-[256.19px]  p-6 my-10">
      <div className="flex justify-center relative">
        <Image
          height="80px"
          width="80px"
          link={link}
          className="mb-26 absolute top-[-72px]"
        />
      </div>
      <div className="flex flex-col relative top-10 items-center">
        <h3 className="text-2xl font-medium pb-4">{title}</h3>
        <p className="text-darktxt text-center  w-[750]">{description}</p>
      </div>
    </div>
  );
}

export default Card;
