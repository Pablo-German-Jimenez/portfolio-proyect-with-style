import { IonApp, IonContent } from '@ionic/react';
import { HeroCarousel } from './components/hero/HeroCarousel';
import FooterBboyLinkinStyle from './components/layout/Footer';
import NavBarComponent from './components/layout/ComponentNavBar';
import Aboutme from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <IonApp>
      <IonContent className="bg-slate-950">
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
          
          {/* Header/Navbar */}
          <NavBarComponent />
          
          <Route exact path={"/aboutme"}>
            <Aboutme/>
          </Route>
          <Route exact path={"/projects"}>
            <Projects/>
          </Route>
          <Route exact path={'/'}><HeroCarousel/></Route>
          
          <main className="max-w-7xl mx-auto w-full p-6 flex-1 flex flex-col justify-center items-center">
            
          
          </main>
        <FooterBboyLinkinStyle></FooterBboyLinkinStyle>
        </div>
      </IonContent>
    </IonApp>
  );
}

export default App;