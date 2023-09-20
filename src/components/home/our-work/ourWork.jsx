import { shape1, shape2, shape3 } from "../../../assets/shape/index";

import { experienceImg } from "../../../assets/img/index";
import ListExperience from "./list-experience/listExperience";

const OurWork = ({ t }) => {
  return (
    <section className="md:grid md:grid-cols-2 md:gap-x-10 md:justify-items-end md:items-center lg:gap-x-14 AppContainer">
      <div>
        <h1 className="font-clash-display text-2xl font-medium md:text-3xl lg:text-5xl mb-[56px]">
          {t("Home.our-work.text-one")}
        </h1>

        <div className="flex flex-col lg:gap-10 md:gap-8">
          <ListExperience
            title={t("Home.our-work.title-1")}
            text={t("Home.our-work.descript-1")}
            img={shape1}
          />

          <ListExperience
            title={t("Home.our-work.title-2")}
            text={t("Home.our-work.descript-2")}
            img={shape2}
          />

          <ListExperience
            title={t("Home.our-work.title-3")}
            text={t("Home.our-work.descript-3")}
            img={shape3}
          />
        </div>
      </div>
      <img
        className="hidden md:block  h-full object-cover rounded-2xl"
        src={experienceImg}
      />
    </section>
  );
};

export default OurWork;
