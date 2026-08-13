import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Carga dinámica de imágenes de la carpeta public
const rawImages = import.meta.glob('/public/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
});

// Archivos a excluir (de tu segunda captura)
const excludedFiles = [
  'bboylLinkinCoding.mp4',
  'elveinticinco.png',
  'excalidrawfrontend.png',
  'favicon.svg',
  'iahandandme.jpeg',
  'icons.svg',
  'pixelsmoviefrontend.png',
];

// Filtrado de las imágenes del comic
const comicImages = Object.keys(rawImages)
  .map((path) => path.replace('/public/', ''))
  .filter((filename) => !excludedFiles.includes(filename))
  .map((filename) => `/${filename}`);

const MyInspirations = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (comicImages.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % comicImages.length);
    }, 5000); // Velocidad de cambio estilo Marvel (120ms)

    return () => clearInterval(interval);
  }, []);

  if (comicImages.length === 0) {
    return <p className="text-center text-white">No hay imágenes disponibles.</p>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      {/* Contenedor estilo marco de viñeta */}
      <div
        className="position-relative overflow-hidden border border-4 border-warning shadow-lg"
        style={{
          width: '350px',
          height: '500px',
          boxShadow: '0 0 25px rgba(255, 215, 0, 0.4)',
        }}
      >
        <AnimatePresence mode="popLayout">
          <motion.img
            key={comicImages[index]}
            src={comicImages[index]}
            alt={`Comic frame ${index}`}
            initial={{ opacity: 0.3, scale: 1.1, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0.1, scale: 0.95, rotateY: 20 }}
            transition={{ duration: 5.0, ease: 'easeInOut' }}
            className="w-100 h-100 position-absolute top-0 start-0"
            style={{ objectFit: 'cover' }}
          />
        </AnimatePresence>

        {/* Efecto de viñeta / sobreimpresión estilo Marvel */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              'radial-gradient(circle, transparent 60%, rgba(0,0,0,0.8) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
};

export default MyInspirations;