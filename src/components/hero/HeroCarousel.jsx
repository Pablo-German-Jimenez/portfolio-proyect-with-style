import Carousel from "react-bootstrap/Carousel";

export const HeroCarousel = () => {
  return (
    <div className="w-full max-w-xl ml-auto">
      <Carousel className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
        <Carousel.Item>
          <div className="relative h-[400px] w-full bg-slate-900">
            <iframe
              src="https://player.vimeo.com/video/1163408794?autoplay=1&loop=1&muted=1&background=1"
              className="w-full h-full object-cover pointer-events-none"
              title="vimeo-player"
              frameBorder="0"
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="relative h-[400px]  w-full bg-slate-900">
            <iframe
              title="codingAndbrekinghand"
              src="https://player.vimeo.com/video/1217515914?h=806a99754e?autoplay=1&loop=1&muted=1&background=1"
              frameborder="0"
              className="w-full h-full object-cover"
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="relative h-[400px] w-full bg-slate-900">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/1214508497?h=3040ed10bf?autoplay=1&loop=1&muted=1&background=1"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[170%] h-[100%] min-w-full min-h-full object-cover pointer-events-none"
              
              frameBorder="0"
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div  className="relative h-[400px] w-full bg-slate-900 d-flex justify-center">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/1214512083?h=245ebed5ec&autoplay=1&loop=1&muted=1&background=1"
              width="940"
              height="560"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            ></iframe>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
