import React from "react";
import { IonContent, IonPage } from "@ionic/react";
// Importar componentes de Swiper React
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Importar estilos de Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const HeroCarousel = () => {
  return (
    <div className="w-full max-w-xl ml-auto">
      {" "}
      {/* 'ml-auto' lo ubica a la derecha */}
      <Swiper
        speed={5000}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
      >
        {/* Slide 1: Tu Vídeo */}
        <SwiperSlide>
          <div className="relative h-[300px] w-full bg-slate-900">
            <iframe
              src="https://player.vimeo.com/video/1163408794?autoplay=1&loop=1&muted=1&background=1"
              className="w-full h-full object-cover pointer-events-none"
              title="vimeo-player"
              frameBorder="0"
              allow="autoplay; fullscreen"
            ></iframe>
            <div className="absolute bottom-4 left-4 text-white z-10 font-bold">
              Proyecto 1: Breakdance & Web Dev
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Imagen o Card 2 */}
        <SwiperSlide>
          <div className="relative h-[300px]  bg-slate-800 w-full overflow-hidden text-white font-bold flex item-center justify-center">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/1214508497?h=3040ed10bf?autoplay=1&loop=1&muted=1&background=1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[170%] h-[100%] min-w-full min-h-full object-cover pointer-events-none"
            width="640"
            height="500"
              frameBorder="0"
              allow="autoplay; fullscreen;" 
              
            ></iframe>
          </div>
        </SwiperSlide>

        {/* Slide 3: Imagen o Card 3 */}
        <SwiperSlide>
          <div className="h-[300px] bg-slate-700 flex items-center justify-center text-white font-bold">
          <iframe title="vimeo-player" src="https://player.vimeo.com/video/1214512083?h=245ebed5ec&autoplay=1&loop=1&muted=1&background=1" width="940" height="360" frameBorder="0"  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"  ></iframe>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
