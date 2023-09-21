import { logoFooter } from "../../assets/img/index";
import { RiFacebookLine } from "../../../node_modules/react-icons/ri";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "../../../node_modules/react-icons/ai";
import SocialMedia from "./social-media/socialMedia";
import NewsLetter from "./newsletter/NewsLetter";
import { Link } from "react-router-dom";

const Footer = () => {
  const link = {
    instagram: "https://instagram.com/hisocial.digital?igshid=MmU2YjMzNjRlOQ==",
    linkedIn: "https://www.linkedin.com/",
    fb: "https://www.facebook.com/",
    wa: "https://wa.me/628189008786",
    email: "mailto: hidigital.info@gmail.com",
    maps: "https://www.google.com/maps/place/Jl.+Ring+Road+Utara+No.34,+Jenengan,+Maguwoharjo,+Kec.+Depok,+Kabupaten+Sleman,+Daerah+Istimewa+Yogyakarta+55283/@-7.7635557,110.4186218,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a5988bf08e72f:0x3d6b8f2631a429f8!8m2!3d-7.7635557!4d110.4211967!16s%2Fg%2F11f3tgd2xp?entry=ttu",
  };

  const COMPANYLINK = [
    { display: "About", href: "/" },
    { display: "Features", href: "/" },
    { display: "Works", href: "/" },
    { display: "Career", href: "/" },
  ];

  const HELPLINK = [
    { display: "Customer Support", href: "/" },
    { display: "Delivery Details", href: "/" },
    { display: "Terms & Conditions", href: "/" },
    { display: "Privacy Policy", href: "/" },
  ];

  const RESOURCESLINK = [
    { display: "Free eBooks", href: "/" },
    { display: "Development Tutorial", href: "/" },
    { display: "How to - Blog", href: "/" },
    { display: "Youtube Playlist", href: "/" },
  ];

  return (
    <section className="mt-20 AppContainer mb-[198px]">
      <NewsLetter />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <article>
          <div className="flex space-x-2 md:gap-2 items-center">
            <img src={logoFooter} className="h-14 md:h-14 lg:h-18" />
            <p className="font-extrabold md:text-lg ">
              HiSocial <br />
              Digital
            </p>
          </div>

          <p className="text-sm text-gray-600 mt-10">
            HiSocial Digital gives you ease in learning and improving your
            skills to become a professional.
          </p>

          <div className="flex gap-3 mt-12">
            <SocialMedia
              icons={
                <AiOutlineTwitter className="text-4xl text-black border-[2px] rounded-full p-1 font-bold" />
              }
              link={link.instagram}
            />
            <SocialMedia
              icons={
                <RiFacebookLine className="text-4xl bg-blue-600 text-white rounded-full p-2 font-bold" />
              }
              link={link.instagram}
            />
            <SocialMedia
              icons={
                <AiOutlineInstagram className="text-4xl text-black border-[2px] rounded-full p-1 font-bold" />
              }
              link={link.fb}
            />
            <SocialMedia
              icons={
                <AiOutlineGithub className="text-4xl text-black border-[2px] rounded-full p-1 font-bold" />
              }
              link={link.linkedIn}
            />
          </div>
        </article>
        <article className=" md:max-w-max md:mx-auto">
          <h3 className="mb-[8px] font-semibold text-blue-500">COMPANY</h3>
          <div className="flex flex-col text-gray-600 gap-3 text-sm">
            {COMPANYLINK.map((item, i) => (
              <Link key={i} to={item.href}>
                {item.display}
              </Link>
            ))}
          </div>
        </article>
        <article className=" md:max-w-max md:mx-auto">
          <h3 className="mb-[8px] font-semibold text-blue-500">HELP</h3>
          <div className="flex flex-col text-gray-600 gap-3 text-sm">
            {HELPLINK.map((item, i) => (
              <Link key={i} to={item.href}>
                {item.display}
              </Link>
            ))}
          </div>
        </article>
        <article className=" lg:max-w-max lg:mx-auto">
          <h3 className="mb-[8px] font-semibold text-blue-500">Resources</h3>
          <div className="flex flex-col text-gray-600 gap-3 text-sm">
            {RESOURCESLINK.map((item, i) => (
              <Link key={i} to={item.href}>
                {item.display}
              </Link>
            ))}
          </div>
        </article>
      </div>
      <hr className="mt-[84px]" />
      <p className="p-2 text-gray-600 text-xs text-center md:text-sm mt-[35px]">
        © 2022 HISOCIAL DIGITAL ALL RIGHTS RESERVEDOWNED BY PT TALENTA SINERGI
        GROUP
      </p>
    </section>
  );
};

export default Footer;
