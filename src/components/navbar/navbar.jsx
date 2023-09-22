import { useState } from "react";
import { logo } from "../../assets/img/index";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import DropdownLang from "./dropdown-lang/dropdownLang";
import { Link } from "react-router-dom";
import DropdownPorto from "./dropdown-portofolio/dropdownPorto";

const Navbar = ({ id, en }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    open === false ? setOpen(true) : setOpen(false);
  };
  let selecLang = localStorage.getItem("lang") || "id";

  return (
    <div className="shadow-xl fixed w-full top-0 z-[999999] font-plus-jakarta-sans bg-white">
      <div className="font-plus-jakarta-sans flex justify-between lg:justify-between items-center AppContainer bg-white py-3  ">
        <img src={logo} className="cursor-pointer" />
        <div
          className="text-2xl border-2 border-black p-1 rounded hover:bg-gray-300 lg:opacity-0 cursor-pointer"
          onClick={() => handleOpen()}>
          {open === false ? <AiOutlineMenu /> : <GrClose />}
        </div>
        <div
          className={`absolute shadow-xl py-3 md:py-5 px-5 left-0 top-20 w-full transition duration-700 lg:static lg:translate-y-0 bg-white -z-10 ${
            open ? "translate-y-0" : "-translate-y-96"
          }`}>
          <ul className="flex flex-col cursor-pointer lg:flex-row gap-4 lg:items-center lg:me-10">
            <li className="hover:text-gray-400">
              <Link to="/" onClick={() => (window.location.href = "#top")}>
                Home
              </Link>
            </li>
            <li className=" hover:text-gray-400">
              <Link
                to="service"
                onClick={() => (window.location.href = "#top")}>
                Service
              </Link>
            </li>
            <li className=" hover:text-gray-400 group">
              <span className="lg:px-1">Portofolio</span>
              <div className="hidden group-hover:block">
                <DropdownPorto />
              </div>
            </li>
            <li className=" hover:text-gray-400">
              <Link
                to="about-us"
                onClick={() => (window.location.href = "#top")}>
                About Us
              </Link>
            </li>
            <li className="hover:text-gray-400 group">
              <span className="lg:px-1">
                {selecLang === "id" ? "ID" : "ENG"}
              </span>
              <div className="hidden group-hover:block">
                <DropdownLang id={id} en={en} />
              </div>
            </li>
          </ul>
          <button
            type="button"
            className="w-32 btn-blue rounded-lg lg:rounded-full text-sm mt-3 lg:text-base lg:mt-auto lg:mx-10 lg:w-auto lg:hidden">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
