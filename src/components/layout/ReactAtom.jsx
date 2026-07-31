import React from 'react';
import '../../ReactAtom.css';

export const ReactAtom = () => {
  return (
    <div className="atom-container">
      {/* Centro del Átomo: Tu GIF/Video o Imagen en movimiento */}
      <div className="atom-nucleus">
        <video  autoPlay muted loop playsInline className='nucleus-media'><source src="/bboyLinkinCoding.mp4" type="video/mp4"></source></video>
      </div>

      {/* Órbita 1: Ángulo 0deg - Icono HTML */}
      <div className="orbit orbit-1">
        <div className="electron-wrapper">
          <div className="electron">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
          </div>
        </div>
      </div>

      {/* Órbita 2: Ángulo 60deg - Icono CSS */}
      <div className="orbit orbit-2">
        <div className="electron-wrapper">
          <div className="electron">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
          </div>
        </div>
      </div>

      {/* Órbita 3: Ángulo 120deg - Icono JavaScript */}
      <div className="orbit orbit-3">
        <div className="electron-wrapper">
          <div className="electron">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" />
          </div>
        </div>
      </div>

      {/* Órbita Extra: Horizontal - Icono React */}
      <div className="orbit orbit-4">
        <div className="electron-wrapper">
          <div className="electron">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
          </div>
        </div>
      </div>
    </div>
  );
};