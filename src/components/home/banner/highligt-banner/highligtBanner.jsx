const HighligtBanner = ({ t, className }) => {
  return (
    <section
      className={`px-5 py-7 bg-blue-500 text-white rounded-lg ${className}`}>
      <p className="font-clash-display text-xl font-medium md:text-2xl lg:text-5xl md:col-span-2 lg:hidden text-center">
        {t("Home.banner.highlight-banner")}
      </p>

      <div className="flex flex-col md:flex-row md:space-x-4 md:col-span-3 lg:space-x-7 justify-between items-center mt-10 lg:mt-0">
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
