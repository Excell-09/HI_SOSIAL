import { useState } from "react";
import { logo } from "../../assets/img/index";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    open === false ? setOpen(true) : setOpen(false);
  };
  return (
    <div className="flex justify-between py-3 shadow-xl items-center fixed w-full top-0 bg-white z-50 font-plus-jakarta-sans font-semibold">
      <img src={logo} className="cursor-pointer ms-4 lg:ms-16" />
      <div className="me-10 text-2xl border-2 border-black p-1 rounded hover:bg-gray-300 lg:opacity-0 cursor-pointer" onClick={() => handleOpen()}>
        {open === false ? <AiOutlineMenu /> : <GrClose />}
      </div>
      <div
        className={
          !open
            ? "flex flex-col absolute top-20  py-2 ps-4 w-full shadow-lg transition duration-700 opacity-0 lg:flex-row lg:opacity-100 lg:top-0 lg:static lg:w-auto lg:shadow-none"
            : "flex flex-col absolute top-20  py-2 ps-4 w-full shadow-lg transition duration-700 bg-white"
        }
      >
        <ul className="flex flex-col cursor-pointer lg:flex-row lg:w-72 lg:justify-around lg:items-center">
          <li className=" hover:text-gray-400">Home</li>
          <li className=" hover:text-gray-400">Service</li>
          <li className=" hover:text-gray-400">Portofolio</li>
        </ul>
        <button className="w-28 btn-blue-rounded-full text-sm mt-1 lg:text-base lg:mt-auto lg:mx-10 lg:w-auto ">Contact Me</button>
      </div>
    </div>
  );
};

export default Navbar;
// flex flex-col absolute top-24  py-2 ps-4 w-full shadow-lg