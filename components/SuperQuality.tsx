import { shoe8 } from "@/public/assets/images";
import { Button } from "./index";
import Image from "next/image";

const SuperQuality = () => (
  <section
    id="aboutus"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
  >
    <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
        We Provide You
        <span className="text-coral-red"> Super</span>
        <span className="text-coral-red"> Quality</span> shoes
      </h2>
      <p className="mt-4 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7">
        Ensuring premium comfort and style, our meticulously crafted footwear is
        designed to elevate your experience, providing you with unmatched
        quality, innovation, and a touch of elegance.
      </p>
      <p className="mt-6 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7">
        Our dedication to detail and excellence ensures your satisfaction
      </p>
      <div className="mt-11">
        <Button label="View details" />
      </div>
    </div>

    <div className="flex-1 flex justify-center items-center">
      <Image
        src={shoe8}
        alt="shoe8"
        width={570}
        height={522}
        className="object-contain"
      />
    </div>
  </section>
);

export default SuperQuality;
