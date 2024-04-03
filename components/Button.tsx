import { IButton } from "@/types";
import Image from "next/image";

const Button = ({
  label,
  iconURL,
  fullWidth,
  textColor,
  borderColor,
  backgroundColor,
}: IButton) => (
  <button
    className={`flex justify-center items-center gap-2 px-7 py-4 border
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} `
          : "text-white bg-coral-red border-coral-red"
      }
        font-montserrat text-lg leading-none  rounded-full ${
          fullWidth ? "w-full":''
        } hover:opacity-90`}
  >
    {label}
    {iconURL && (
      <Image src={iconURL} alt={label} className="ml-2 rounded-full w-5 h-5" />
    )}
  </button>
);

export default Button;
