import { Home, Service, AboutUs } from "./pages/index";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const handleId = () => {
    i18n.changeLanguage("id");
    localStorage.setItem("lang", "id");
  };
  const handleEn = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("lang", "en");
  };

  return (
    <div className="overflow-hidden ">
      <Router>
        <Navbar id={handleId} en={handleEn} t={t} />
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/service" element={<Service t={t} />} />
          <Route path="/about-us" element={<AboutUs t={t} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
