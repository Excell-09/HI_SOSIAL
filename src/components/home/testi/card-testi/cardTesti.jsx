import { FaQuoteLeft } from "../../../../../node_modules/react-icons/fa";
import ProfileTesti from "./ProfileTesti";

const CardTesti = ({ t }) => {
  return (
    <article className="p-5 sm:p-2 bg-white rounded-2xl md:space-x-5 md:justify-center md:flex md:items-center lg:justify-between 2xl:justify-around shadow-lg w-full">
      <div className="flex">
        <div className="sm:block hidden">
          <ProfileTesti
            jobtitle={t("Home.testi.job")}
            userImage={"/Hi-Social/userimage.png"}
            username={"Chen Lee Alexander"}
          />
        </div>
        <div className="flex-1 px-5">
          <div className="flex gap-3 lg:gap-5 justify-between sm:justify-start items-center mb-3 sm:mb-5">
            <div className="rounded-full w-10 h-10 overflow-hidden sm:hidden">
              <ProfileTesti userImage={"/Hi-Social/userimage.png"} />
            </div>
            <div className="sm:hidden flex-1">
              <h6 className="text-lg">Chen Lee Alexander</h6>
              <p className="text-gray-500 text-sm line-clamp-1">{t("Home.testi.job")}</p>
            </div>
            <FaQuoteLeft className="text-gray-400 text-xl sm:text-3xl lg:text-2xl rotate-180 self-start" />
          </div>
          <p className="text-justify text-sm text-gray-500">
            {t("Home.testi.testi-text")}
          </p>
        </div>
      </div>
    </article>
  );
};

export default CardTesti;
