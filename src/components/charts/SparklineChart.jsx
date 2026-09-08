export const SparklineChart = ({ yieldScore, className = "" }) => {
  // Extrae el valor numérico (ej: "+18.4%" -> 18.4)
  const numericValue =
    typeof yieldScore === "number"
      ? yieldScore
      : parseFloat(String(yieldScore).replace(/[^0-9.-]/g, "")) || 10;

  // Mapea la altura final entre 8 y 28 según el porcentaje (rango de altura SVG: 36)
  // Cuanto mayor sea el yieldScore, más alto termina el trazo
  const normalizedY = Math.max(6, Math.min(30, 32 - numericValue * 0.8));

  // Puntos clave de la curva de trading: inicio, caídas intermedias y subida final
  const pathD = `M 0,28 Q 20,${normalizedY + 8} 35,22 T 70,${normalizedY + 4} T 100,${normalizedY}`;
  const areaD = `${pathD} L 100,36 L 0,36 Z`;

  // ID único para evitar colisiones de gradientes en el DOM
  const gradientId = `grad-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className={`w-full h-10 overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 100 36"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Relleno translúcido debajo de la curva */}
        <path d={areaD} fill={`url(#${gradientId})`} />

        {/* Línea de tendencia ascendente */}
        <path
          d={pathD}
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
};

export default SparklineChart;
