import { IonApp, IonContent } from '@ionic/react';
import { HeroCarousel } from './components/hero/HeroCarousel';
import FooterBboyLinkinStyle from './components/layout/Footer';
import NavBarComponent from './components/layout/ComponentNavBar';

function App() {
  return (
    <IonApp>
      <IonContent className="bg-slate-950">
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
          
          {/* Header/Navbar */}
          <NavBarComponent />
          <HeroCarousel/>
          <main className="max-w-7xl mx-auto w-full p-6 flex-1 flex flex-col justify-center items-center">
            
            <p className="text-slate-500 font-mono text-sm">
              [ Navbar renderizado con éxito. Listo para el Hero Carousel ]
            </p>
          </main>
        <FooterBboyLinkinStyle></FooterBboyLinkinStyle>
        </div>
      </IonContent>
    </IonApp>
  );
}

export default App;