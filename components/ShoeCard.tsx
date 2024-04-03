"use client";
import { thumbnailShoe1 } from "@/public/assets/images";
import { shoes } from "@/constants";
import { useState } from "react";
import Image from "next/image";

const ShoeCard = () => {
  const [imgUrl, setImgUrl] = useState<string>(thumbnailShoe1);

  return (
    <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
      <Image
        src={imgUrl}
        alt="shoe collection"
        width={610}
        height={500}
        className="object-contain relative z-10 h-[500px]"
      />

      <div className="flex absolute z-10 -bottom-14 sm:gap-6 gap-4 sm:left-[10%] max-sm:px-6">
        {shoes.map((shoe) => (
          <div
            key={shoe}
            className={`border-2 rounded-xl ${
              imgUrl == shoe ? "border-coral-red" : "border-transparent"
            } cursor-pointer max-sm:flex-1`}
            onClick={() => setImgUrl(shoe)}
          >
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
              <Image
                src={shoe}
                alt="shoe collection"
                width={127}
                height={103}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoeCard;
