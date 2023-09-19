const ListExperience = ({ title, text, img }) => {
  return (
    <div className="flex items-center md:space-x-5">
      <img
        className="hidden h-full w-full md:block object-contain"
        src={img}
      />
      <div>
        <div className="flex items-center space-x-4 mb-4 md:space-x-0 ">
          <img className="block w-16 md:hidden" src={img} />
          <h1 className="font-clash-display font-medium text-lg lg:text-3xl">
            {title}
          </h1>
        </div>
        <p className=" text-justify lg:text-lg">{text}</p>
      </div>
    </div>
  );
};

export default ListExperience;
