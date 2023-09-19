import { bannerImage } from "../../../assets/img/index";
import { IoIosArrowForward } from "../../../../node_modules/react-icons/io";
import HighligtBanner from "./highligt-banner/highligtBanner";

const Banner = ({ t }) => {
  const a =
    "px-5 grid gap-5 grid-cols-1 md:items-center md:grid-cols-2 lg:justify-items-end lg:items-start lg:grid-cols-7 md:pe-0 lg:gap-16";
  return (
    <section className="lg:mt-[57px]">
      <div className="flex px-5 flex-col lg:flex-row gap-5 lg:-16">
        {/* font-plus-jakarta-sans flex justify-center lg:justify-end lg:col-span-3  */}

        <div className="flex-1 font-plus-jakarta-sans">
          {/* md:w-full lg:w-4/5 lg:space-y-14  */}
          <div className="md:w-full lg:w-4/5 lg:mt-10">
            <h1 className="font-clash-display text-4xl font-medium mb-7 lg:text-5xl">
              {t("Home.banner.title")}
            </h1>
            <div className="text-sm md:text-base font-normal space-y-6 lg:mb-10 mb-10">
              <p>{t("Home.banner.descript1")}</p>
              <p>{t("Home.banner.descript2")}</p>
            </div>
            <button className="btn-blue rounded-full flex  items-center text-xs  md:px-7 md:text-xl lg:py-3">
              {t("Home.banner.started")}{" "}
              <span className="bg-white p-1 text-black rounded-full ms-2 lg:ms-5 text-xs md:text-base">
                <IoIosArrowForward />
              </span>
            </button>
          </div>
        </div>

        {/* lg:col-span-4 */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <img
            src={bannerImage}
            className="md:h-[450px] md:w-full lg:h-[424px] lg:w-[570px] object-cover rounded-lg mb-[10px]"
          />
          <HighligtBanner t={t} className={"md:w-full"}/>
        </div>
      </div>

      {/* <div className="mt-2 md:mt-8 lg:-mt-28 flex flex-col items-center">
        <HighligtBanner t={t} />
      </div> */}
    </section>
  );
};

export default Banner;
