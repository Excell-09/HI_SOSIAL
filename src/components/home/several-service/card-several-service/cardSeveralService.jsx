import { ourWorkImg } from "../../../../assets/img/index";

const CardSeveralService = () => {
  return (
    <section className="hidden md:block">
      <img
        src={ourWorkImg}
        alt="our work"
        className="h-96 rounded-xl object-cover md:w-[565px] lg:h-[518px] lg:w-11/12"
      />
    </section>
  );
};

export default CardSeveralService;
