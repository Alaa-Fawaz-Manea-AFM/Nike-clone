import { star } from "@/public/assets/icons";
import { IProducts } from "@/types";
import Image from "next/image";

const PopularProduct = ({ imgURL, name, price, rating }: IProducts) => (
  <div className="flex flex-1 flex-col w-full max-sm:w-full">
    <Image src={imgURL} alt={name} width={280} height={280} />

    <div className="mt-8 flex justify-start gap-2.5">
      <Image src={star} alt="rating" width={24} height={24} />
      <p className="font-montserrat text-xl leading-normal text-slate-gray">
        ({rating})
      </p>
    </div>
    <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
      {name}
    </h3>
    <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
      {price}
    </p>
  </div>
);
export default PopularProduct;
