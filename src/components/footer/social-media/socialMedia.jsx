import { Link } from "react-router-dom";

const SocialMedia = ({ icons, link }) => {
  return (
    <section className="transition text-white hover:text-gray-300 cursor-pointer hover:scale-125">
      <Link to={link} target="_blank" className="text-4xl">
        {icons}
      </Link>
    </section>
  );
};

export default SocialMedia;
