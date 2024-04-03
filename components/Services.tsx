import { services } from "@/constants";
import { ServieceCard } from "./index";

const Services = () => (
  <section className="max-container flex justify-center flex-wrap gap-9">
    {services.map((servis) => (
      <ServieceCard key={servis.imgURL} {...servis} />
    ))}
  </section>
);

export default Services;
