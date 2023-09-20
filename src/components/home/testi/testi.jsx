import CardTesti from "./card-testi/cardTesti";

const Testi = ({ t }) => {
  const title = t("Home.testi.title")
    .replace("HiSocial Digital", ",")
    .split(",");
  const titleSpan = t("Home.testi.title")
    .replace("What's the review from them about the", "")
    .replace("?", "");
  return (
    <section className="w-screen AppContainer relative">
      <div className="">
        <h1 className="text-center font-medium text-2xl md:text-3xl lg:text-4xl mb-10 lg:mb-14">
          {title[0]}
          <span className="text-blue-500">{titleSpan}</span>
          {title[1]}
        </h1>
        <div className="grid grid-cols-2 gap-5 relative">
          <img
            src="/Hi-Social/arrowtesti.png"
            className="absolute top-1/2 -left-10 z-10 -translate-y-1/2 cursor-pointer"
            alt=""
          />
          <img
            src="/Hi-Social/arrowtesti.png"
            className="absolute top-1/2 -right-10 z-10 -translate-y-1/2 rotate-180 cursor-pointer"
            alt=""
          />

          {[1, 2].map((i) => (
            <CardTesti t={t} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testi;
