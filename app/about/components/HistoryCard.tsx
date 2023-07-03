"use client";
import Box from "@/components/Box";
import Image from "next/image";
import React from "react";

interface HistoryModalProps {
  imglocation: string;
}

const HistoryModal: React.FC<HistoryModalProps> = ({ imglocation }) => {
  return (
    <div className="group col-span relative h-[12vw]">
      <Image
        src={imglocation}
        alt="MayPicture"
        className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-00 w-full h-[12vw]"
        width={100}
        height={64}
      />
      <Box className="opacity-0 absolute transition duration-200 z-10 invisible sm:visible delay-300 w-[960px] h-[540px] scale-0 group-hover:scale-110 group-hover:opacity-100 -translate-x-10 -translate-y-20">
        <Image
          src={imglocation}
          alt="MayPicture"
          fill
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md"
        />
      </Box>
    </div>
  );
};

export default HistoryModal;
