const HighligtBanner = ({ t, className }) => {
  return (
    // ps-5  bg-blue-500 text-white rounded-3xl w-11/12 h-44 grid grid-cols-1 justify-items-center items-center md:grid-cols-5 md:h-28 md:gap-2 lg:gap-8  lg:w-[1180px] lg:h-[204.742px]
    <section
      className={` px-5 py-7 bg-blue-500 text-white rounded-lg ${className}`}>
      <p className="font-clash-display text-xl font-medium md:text-2xl lg:text-5xl md:col-span-2  lg:hidden">
        {t("Home.banner.highlight-banner")}
      </p>

      <div className="text-center flex flex-col md:flex-row md:space-x-4 md:col-span-3 lg:space-x-7 justify-between">
        <div className="flex gap-5 items-center md:flex-col">
          <p className="text-2xl font-semibold md:text-4xl lg:text-[50px]">
            05+
          </p>
          <p className="text-base lg:text-sm lg:text-center whitespace-nowrap">
            {t("Home.banner.highlight-1")}
          </p>
        </div>
        <div className="flex gap-5 items-center md:flex-col">
          <p className="text-2xl font-semibold md:text-4xl lg:text-[50px]">
            05+
          </p>
          <p className="text-base lg:text-sm whitespace-nowrap">
            {t("Home.banner.highlight-2")}
          </p>
        </div>
        <div className="flex gap-5 items-center md:flex-col">
          <p className="text-2xl font-semibold md:text-4xl lg:text-[50px]">
            02+
          </p>
          <p className="text-base lg:text-sm whitespace-nowrap">
            {t("Home.banner.highlight-3")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HighligtBanner;
