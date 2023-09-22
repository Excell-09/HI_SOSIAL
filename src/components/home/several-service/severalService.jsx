import CardSeveralService from "./card-several-service/cardSeveralService";
import ListServices from "./list-services/listServices";

const SeveralService = ({ t }) => {
  return (
    <section className="AppContainer">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:items-center">
        <div className="w-full">
          <h1 className="max-w-[552px] font-medium font-clash-display text-2xl md:text-4xl lg:text-6xl">
            {t("Home.several-services.title")}
          </h1>
        </div>
        <p className="text-justify text-base lg:text-xl">
          {t("Home.several-services.descript")}
        </p>
      </div>
      <div className="mt-7 grid grid-cols-1 md:mt-9 items-center md:grid-cols-2 lg:mt-12 sm:gap-5 lg:gap-0">
        <CardSeveralService />
        <div className="flex flex-col h-full justify-between gap-3 md:gap-0">
          <ListServices
            number="01."
            text={t("Service.service-program.list-program.list-1")}
          />
          <ListServices
            number="02."
            text={t("Service.service-program.list-program.list-2")}
          />
          <ListServices
            number="03."
            text={t("Service.service-program.list-program.list-3")}
          />
          <ListServices
            number="04."
            text={t("Service.service-program.list-program.list-4")}
          />
          <ListServices
            number="05."
            text={t("Service.service-program.list-program.list-5")}
          />
        </div>
      </div>
    </section>
  );
};

export default SeveralService;
