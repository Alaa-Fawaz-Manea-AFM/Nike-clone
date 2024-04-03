import { star } from "@/public/assets/icons";
import { IReviews } from "@/types";
import Image from "next/image";

const ReviewCard = ({ imgURL, customerName, rating, feedback }: IReviews) => (
  <div className="flex justify-center items-center flex-col">
    <Image
      src={imgURL}
      alt="customer"
      width={120}
      height={120}
      className="rounded-full object-cover"
    />
    <p className="mt-6 max-w-sm text-center font-montserrat text-slate-gray text-lg leading-7">
      {feedback}
    </p>
    <div className="flex justify-center items-center gap-2.5 mt-3">
      <Image
        src={star}
        alt="star"
        width={24}
        height={24}
        className="object-contain m-0"
      />
      <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
    </div>
    <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
      {customerName}
    </h3>
  </div>
);

export default ReviewCard;
