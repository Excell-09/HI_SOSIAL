import { eduwork, elvron, sisko, upscale } from "../../../assets/patner/index";
import OurPatnerCard from "./our-patner-card/ourPatnerCard";
const OurPatner = ({ t }) => {
  return (
    <section className="flex flex-col items-center justify-center md:flex-row md:justify-between space-y-5 md:space-x-2 container">
      <div className="space-y-3">
        <div className="w-full text-sky-500">
          <h1 className="font-clash-display font-medium text-2xl md:text-4xl lg:text-5xl">
            {t("Home.our-patner.title")}
          </h1>
        </div>
        <p className="md:text-xl lg:text-2xl md:w-80 lg:w-[500px] 2xl:w-[601px] text-gray-500">
          {t("Home.our-patner.text")}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-7 2xl:gap-x-14">
        <OurPatnerCard img={eduwork} />
        <OurPatnerCard img={elvron} />
        <OurPatnerCard img={upscale} />
        <OurPatnerCard img={sisko} />
      </div>
    </section>
  );
};

export default OurPatner;
