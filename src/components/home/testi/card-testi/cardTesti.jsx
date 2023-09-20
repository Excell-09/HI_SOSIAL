import { FaQuoteLeft } from "../../../../../node_modules/react-icons/fa";
import ProfileTesti from "./ProfileTesti";

const CardTesti = ({ t }) => {
  return (
    <article className="p-2 bg-white rounded-2xl md:space-x-5 md:justify-center md:flex md:items-center lg:justify-between 2xl:justify-around shadow-lg max-w-[538px]">
      <div className="flex ">
        <ProfileTesti
          jobtitle={t("Home.testi.job")}
          userImage={"/Hi-Social/userimage.png"}
          username={"Chen Lee Alexander"}
        />
        <div className="flex-1 px-5">
          <FaQuoteLeft className="text-gray-400 text-3xl mb-5 lg:text-2xl rotate-180" />
          <p className="text-justify text-sm text-gray-500">{t("Home.testi.testi-text")}</p>
        </div>
      </div>
    </article>
  );
};

export default CardTesti;
