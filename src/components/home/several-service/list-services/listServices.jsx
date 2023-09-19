const ListServices = ({ number, text }) => {
  return (
    <section className="bg-white p-3 rounded-md shadow-md">
      <div className="flex space-x-4 items-center ">
        <p className="p-3 bg-blue-400 text-white rounded-full font-semibold lg:w-[68px] lg:h-[68px] lg:text-3xl flex justify-center items-center">
          {number}
        </p>

        <h1 className="font-semibold lg:text-3xl">{text}</h1>
      </div>
    </section>
  );
};

export default ListServices;
