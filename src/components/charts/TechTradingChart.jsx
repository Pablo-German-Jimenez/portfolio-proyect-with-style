import { SparklineChart } from './SparklineChart'; // Ajusta la ruta relativa según tu estructura

const techAssets = [
  { symbol: "REACT", category: "Core Frontend", yieldScore: "+20.4%", status: "Bullish" },
  { symbol: "JAVASCRIPT", category: "Language ES6+", yieldScore: "+24.1%", status: "Bullish" },
  { symbol: "NEXT.JS", category: "SSR Framework", yieldScore: "+14.8%", status: "Bullish" },
  { symbol: "REACT-NATIVE", category: "Mobile Multiplatform", yieldScore: "+15.2%", status: "Stable" },
  { symbol: "MONGODB", category: "NoSQL Database & SQL DB", yieldScore: "+18.5%", status: "Stable" },
  { symbol: "POSTMAN", category: "API Testing & Dev", yieldScore: "+17.0%", status: "Bullish" }
];

export const TechTradingChart = () => {
  return (
    <div className="bg-slate-900 border border-success rounded-2xl p-6 max-w-5xl mx-auto my-6 shadow-xl font-mono">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
        <div>
          <h2 className="text-sm me-5 font-semibold text-slate-400 uppercase tracking-wider border border-success rounded-3">
            Technical Stack Skills Index
          </h2>         
        </div>
        <span className=" mb-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs rounded-full border border-primary">
          Market Status: Active Dev
        </span>
      </div>

      {/* Grid de Activos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {techAssets.map((asset) => (
          <div 
            key={asset.symbol} 
            className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-1">
                <span className="font-bold text-white text-base">{asset.symbol}</span>
                <span className="text-xs text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
                  {asset.yieldScore}
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-3">{asset.category}</p>
            </div>

            {/* Inserción del mini-gráfico de trading */}
            <div className="my-2 py-1 border-t border-b border-slate-800/40">
              <SparklineChart yieldScore={asset.yieldScore} />
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {asset.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTradingChart;