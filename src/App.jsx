import { useState } from "react";
import FooterBboyLinkinStyle from "./components/layout/Footer";
import NavBarComponent from "./components/layout/ComponentNavBar";
import Aboutme from "./components/pages/AboutMe";
import Projects from "./components/pages/Projects";
import { Route } from "react-router-dom";
import BannerContactoWpp from "./components/pages/WhatsappContact";
import MyInspirations from "./components/pages/MyInspirations";
import { AboutCard } from "./components/layout/AboutCard";
import { TechTradingChart } from "./components/charts/TechTradingChart";

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      className={`app-wrapper ${isDark ? "dark-theme" : "light-theme"} `}
    >
      <div>
        {/* Botón flotante para alternar modo claro / oscuro */}
        <button
          className="theme-toggle-btn"
          onClick={() => setIsDark(!isDark)}
          title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>
      <NavBarComponent />

      <Route exact path={"/aboutme"}>
        <Aboutme />
      </Route>
      <Route exact path={"/projects"}>
        <Projects />
      </Route>
      <Route exact path={"/my-inspirations"}>
        <MyInspirations />
      </Route>
      <Route exact path={"/"}>
        <AboutCard></AboutCard>
        <TechTradingChart></TechTradingChart>
      </Route>
      <main className="max-w-7xl mx-auto w-full p-6 flex-1 flex flex-col justify-center items-center"></main>
      <BannerContactoWpp></BannerContactoWpp>
      <FooterBboyLinkinStyle></FooterBboyLinkinStyle>
    </div>
  );
}

export default App;
