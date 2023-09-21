const OtherServiceCard = ({ image, otherServices, t }) => {
  return (
    <section className="relative flex-grow flex flex-col items-center h-full w-full">
      <div className="gradient-img-otherService rounded-3xl absolute  w-full h-full" />
      <img
        src={image}
        alt="OtherService"
        className="object-cover w-full h-full rounded-3xl "
      />
      <div className="relative font-plus-jakarta-sans z-10 bg-white flex justify-around items-center shadow-md rounded-b-lg px-5 py-3 -mt-7 w-full lg:w-11/12 md:-mt-10 lg:-mt-24 lg:rounded-full">
        <p className="font-semibold text-sm lg:text-xl flex-1 text-gray-600">
          {otherServices}
        </p>
        <button className="btn-blue rounded-full text-xs lg:text-sm w-[120px] lg:w-[138px] shadow-lg">
          {t("Home.other-service.btn-text")}
        </button>
      </div>
    </section>
  );
};

export default OtherServiceCard;
