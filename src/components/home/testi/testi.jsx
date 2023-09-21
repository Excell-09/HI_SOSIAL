import CardTesti from "./card-testi/cardTesti";

const Testi = ({ t }) => {
  const title = t("Home.testi.title")
    .replace("HiSocial Digital", ",")
    .split(",");
  const titleSpan = t("Home.testi.title")
    .replace("What's the review from them about the", "")
    .replace("?", "");

  return (
    <section className="w-screen">
      <h1 className="text-center font-medium text-2xl md:text-3xl lg:text-4xl">
        {title[0]}
        <span className="text-blue-500">{titleSpan}</span>
        {title[1]}
      </h1>
      <div className="relative AppContainer">
        <img
          src="/Hi-Social/arrowtesti.png"
          className="absolute top-1/2 -left-8 z-10 -translate-y-1/2 cursor-pointer"
          alt=""
        />
        <img
          src="/Hi-Social/arrowtesti.png"
          className="absolute top-1/2 -right-8 z-10 -translate-y-1/2 rotate-180 cursor-pointer"
          alt=""
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 flex-nowrap overflow-x-auto gap-5 pb-10 pt-8 lg:pt-12">
          {[1, 2].map((i) => (
            <CardTesti t={t} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testi;
