import { hiBronze, hiSilver, hiGold } from "../../../assets/shape/index";
import CardPricing from "./card-pricing/cardPricing";
const Pricing = ({ t }) => {
  const listServicePricing = [
    t("Home.pricing.list-service-pricing.list-1"),
    t("Home.pricing.list-service-pricing.list-2"),
    t("Home.pricing.list-service-pricing.list-3"),
    t("Home.pricing.list-service-pricing.list-4"),
    t("Home.pricing.list-service-pricing.list-5"),
    t("Home.pricing.list-service-pricing.list-6"),
    t("Home.pricing.list-service-pricing.list-7"),
  ];
  const additionalBronze = [
    t("Home.pricing.hiBronze.additional.additional-1"),
    t("Home.pricing.hiBronze.additional.additional-2"),
  ];

  const additionalSilver = [
    t("Home.pricing.hiSilver.additional.additional-1"),
    t("Home.pricing.hiSilver.additional.additional-2"),
    t("Home.pricing.hiSilver.additional.additional-3"),
  ];

  const additionalGold = [
    t("Home.pricing.hiGold.additional.additional-3"),
    t("Home.pricing.hiGold.additional.additional-4"),
    t("Home.pricing.hiGold.additional.additional-1"),
    t("Home.pricing.hiGold.additional.additional-2"),
    t("Home.pricing.hiGold.additional.additional-5"),
  ];

  return (
    <section className="bg-red-500 py-10 w-full">
      <div className="">
        <h1 className="font-medium font-clash-display text-2xl mb-4 md:text-4xl lg:text-5xl text-center text-sky-500">
          {t("Home.pricing.title")}
        </h1>
        <div className="md:flex md:justify-between">
          <p className="mb-2 md:text-lg lg:text-xl lg:w-[652px] text-center mx-auto">
            {t("Home.pricing.descript")}
          </p>
        </div>

        <div className="mt-10 md:mt-14 justify-items-center lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0">
          <CardPricing
            t={t}
            imgPricing={hiBronze}
            price="IDR 1.500.000"
            type="HiBronze"
            description={t("Home.pricing.hiBronze.text")}
            list={listServicePricing}
            additional={additionalBronze}
          />
          <CardPricing
            t={t}
            imgPricing={hiSilver}
            price="IDR 2.500.000"
            type="HiSilver"
            description={t("Home.pricing.hiSilver.text")}
            list={listServicePricing}
            additional={additionalSilver}
          />
          <CardPricing
            t={t}
            imgPricing={hiGold}
            price="IDR 3.500.000"
            type="HiGold"
            description={t("Home.pricing.hiGold.text")}
            list={listServicePricing}
            additional={additionalGold}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
