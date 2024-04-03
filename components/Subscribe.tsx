import { Button } from "./index";

const Subscribe = () => (
  <section
    className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    id="contactus"
  >
    <h3 className="text-3xl leading-[68px] lg:max-w-md font-palanquin font-bold">
      Sign Up from
      <span className="text-coral-red"> Update </span>& Newsletter
    </h3>

    <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
      <input
        type="text"
        placeholder="subscribe@nike.com"
        className="sm:flex-1 max-sm:w-full text-base leading-normal text-slate-gray pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-slate-gray max-sm:rounded-full"
      />
      <div className="flex max-sm:justify-end items-center max-sm:w-full">
        <Button label="Sign Up" fullWidth />
      </div>
    </div>
  </section>
);

export default Subscribe;
