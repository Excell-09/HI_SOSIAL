import {
  Banner,
  OurWork,
  SeveralService,
  OurProject,
  Testi,
  Pricing,
  OtherService,
  OurPatner,
} from "../../components/home/index";

const Home = ({ t }) => {
  return (
    <section className="pt-28 md:pt-30 lg:pt-20 flex flex-col items-center">
      <div className="space-y-16 md:space-y-24 lg:space-y-[140px]">
        <Banner t={t} />
        <OurWork t={t} />
        <SeveralService t={t} />
        <OtherService t={t} />
        <OurProject t={t} />
        <Testi t={t} />
        <Pricing t={t} />
        <OurPatner t={t} />
      </div>
    </section>
  );
};

export default Home;
