import { HeroCarousel } from "./components/hero/HeroCarousel";
import FooterBboyLinkinStyle from "./components/layout/Footer";
import NavBarComponent from "./components/layout/ComponentNavBar";
import Aboutme from "./components/pages/AboutMe";
import Projects from "./components/pages/Projects";
import { Route } from "react-router-dom";
import BannerContactoWpp from "./components/pages/WhatsappContact";
import MyInspirations from './components/pages/MyInspirations';

function App() {
  return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
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
            <HeroCarousel />
          </Route>  
          <main className="max-w-7xl mx-auto w-full p-6 flex-1 flex flex-col justify-center items-center"></main>
          <BannerContactoWpp></BannerContactoWpp>
          <FooterBboyLinkinStyle></FooterBboyLinkinStyle>
        </div>
    );
}

export default App;
