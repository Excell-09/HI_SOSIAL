const HighligtBanner = ({ t, className }) => {
  return (
    <section className={`p-5 bg-blue-500 text-white rounded-lg ${className}`}>
      <p className="font-clash-display text-xl font-medium md:text-2xl lg:text-5xl md:col-span-2 lg:hidden text-center">
        {t("Home.banner.highlight-banner")}
      </p>

      <div className="mt-5 lg:mt-0 grid">
        <div className="mx-auto lg:mx-0 flex flex-col md:flex-row md:space-x-4 md:col-span-3 lg:space-x-7 justify-between items-start">
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
      </div>
    </section>
  );
};

export default HighligtBanner;
