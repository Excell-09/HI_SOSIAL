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
    <section className="pt-36 md:pt-30 lg:pt-20 flex flex-col items-center">
      <div className="max-w-[1920px] flex flex-col items-center justify-center space-y-12 md:space-y-24 lg:space-y-32">
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
