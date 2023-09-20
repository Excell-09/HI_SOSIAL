import * as React from "react";

const CardPricing = ({ price, type, description, list, t }) => {
  return (
    <article className="flex flex-col items-center w-80 space-y-5 h-full rounded-3xl lg:w-full">
      <div className="bg-white w-full py-10 px-6 shadow-[0_0_20px_0_rgba(0,0,0,0.3)] rounded-2xl md:w-auto md:px-5 2xl:px-8  ">
        <div className=" space-y-5">
          <div>
            <h1 className="text-lg font-medium font-clash-display lg:text-2xl">
              {type}
            </h1>
            <p className="text-gray-500 text-sm mt-3">{description}</p>
          </div>

          <h1 className="text-xl font-medium lg:text-3xl flex items-center gap-1">
            {price}
            <span className="text-sm text-gray-500">/ Month</span>
          </h1>

          <button className="border-2 border-sky-500 text-sky-500 w-full rounded-full p-2 hover:bg-slate-100">
            Get Started Now
          </button>
        </div>

        <div className="text-sm space-y-4 lg:space-y-5 mt-10">
          <ul className="space-y-5 list-inside">
            {list?.map((index, i) => (
              <li className="flex items-center gap-3" key={i}>
                <img src="/Hi-Social/Frame-74.svg" alt="" />
                {index}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default CardPricing;
