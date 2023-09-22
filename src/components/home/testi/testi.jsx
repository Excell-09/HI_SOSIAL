import { useState } from "react";
import CardTesti from "./card-testi/cardTesti";

const Testi = ({ t }) => {
  console.log(t("Home.testi.title"));
  const [selectedTesti, setSeletecedTesti] = useState(0);
  const title = t("Home.testi.title")
    .replace("HiSocial Digital", ",")
    .replace("Mitra Kami", "")
    .split(",");
  const titleSpan = t("Home.testi.title")
    .replace("What's the review from them about the", "")
    .replace("Pengalaman", "")
    .replace("?", "");

  const TESTILIST = [
    <CardTesti t={t} />,
    <CardTesti t={t} />,
    <CardTesti t={t} />,
    <CardTesti t={t} />,
  ];

  const handleTesti = (action) => {
    setSeletecedTesti((value) => {
      if (action === "i") {
        if (value === TESTILIST.length - 1) {
          return 0;
        }
        return ++value;
      } else {
        if (value === 0) {
          return value;
        }
        return --value;
      }
    });
  };

  return (
    <section className="w-screen">
      <h1 className="text-center font-medium text-2xl md:text-3xl lg:text-4xl">
        {title[0]}
        <span className="text-blue-500"> {titleSpan}</span> ?
      </h1>
      <div className="relative AppContainer">
        <img
          onClick={() => handleTesti("d")}
          src="/Hi-Social/arrowtesti.png"
          className="absolute top-1/2 -left-8 z-10 -translate-y-1/2 cursor-pointer"
          alt=""
        />
        <img
          onClick={() => handleTesti("i")}
          src="/Hi-Social/arrowtesti.png"
          className="absolute top-1/2 -right-8 z-10 -translate-y-1/2 rotate-180 cursor-pointer"
          alt=""
        />
        <div className="flex lg:hidden gap-5 pb-10 pt-8 md:pt-12 scroll-smooth">
          {TESTILIST[selectedTesti]}
        </div>

        <div className="hidden lg:flex gap-5 pb-10 pt-8 md:pt-12 scroll-smooth">
          {TESTILIST[selectedTesti]}
          {TESTILIST[(selectedTesti + 1) % TESTILIST.length]}
        </div>
      </div>
    </section>
  );
};

export default Testi;
