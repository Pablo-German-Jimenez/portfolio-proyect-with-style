import Carousel from "react-bootstrap/Carousel";

export const HeroCarousel = () => {
  return (
    <div className="w-full max-w-xl ml-auto">
      <Carousel className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
        {/* Slide 1: Tu Vídeo */}
        <Carousel.Item>
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
        </Carousel.Item>

        {/* Slide 2: Imagen o Card 2 */}
        <Carousel.Item>
          <div className="relative h-[300px] bg-slate-800 w-full overflow-hidden text-white font-bold flex items-center justify-center">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/1214508497?h=3040ed10bf?autoplay=1&loop=1&muted=1&background=1"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[170%] h-[100%] min-w-full min-h-full object-cover pointer-events-none"
              width="640"
              height="500"
              frameBorder="0"
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
        </Carousel.Item>

        {/* Slide 3: Imagen o Card 3 */}
        <Carousel.Item>
          <div className="h-[300px] bg-slate-700 flex items-center justify-center text-white font-bold">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/1214512083?h=245ebed5ec&autoplay=1&loop=1&muted=1&background=1"
              width="940"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            ></iframe>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};