import { IonApp, IonContent } from '@ionic/react';
import { Navbar } from './components/layout/Navbar';
import { HeroCarousel } from './components/hero/HeroCarousel';
import FooterBboyLinkinStyle from './components/layout/Footer';

function App() {
  return (
    <IonApp>
      <IonContent className="bg-slate-950">
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
          
          {/* Header/Navbar */}
          <Navbar />
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