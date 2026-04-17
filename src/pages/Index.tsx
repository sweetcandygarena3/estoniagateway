import React, { useState, useEffect } from 'react';
import { Home, Calculator, Globe, Download, Info, ChevronDown } from 'lucide-react';

const EstoniaGateway = () => {
  // --- PROMPT 9: Calculator Logic (No "Force Zero" Bug) ---
  const [monthlyCost, setMonthlyCost] = useState<string>("400");
  const [travelMode, setTravelMode] = useState<'flight' | 'bus'>('flight');

  // --- PROMPT 1: PDF State ---
  const [showPdfMenu, setShowPdfMenu] = useState(false);

  return (
    <div className="min-h-screen bg-[#050A18] text-white font-sans selection:bg-blue-500/30">
      
      {/* --- PROMPT 3: PC Navigation (Top) --- */}
      <nav className="hidden md:flex fixed top-0 w-full z-50 bg-[#050A18]/80 backdrop-blur-xl border-b border-white/10 px-8 py-4 justify-between items-center">
        <div className="font-bold text-xl tracking-tighter text-blue-400">ESTONIA GATEWAY</div>
        <div className="flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Overview</a>
          <a href="#" className="hover:text-white transition-colors">Finance</a>
          <a href="#" className="hover:text-white transition-colors">Discover</a>
        </div>
        {/* PDF Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setShowPdfMenu(!showPdfMenu)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full text-sm font-bold transition-all"
          >
            <Download size={16} /> Download Guide <ChevronDown size={14} />
          </button>
          {showPdfMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-[#101827] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
              <button className="w-full text-left px-4 py-3 hover:bg-blue-600/20 text-sm">English Version</button>
              <button className="w-full text-left px-4 py-3 hover:bg-blue-600/20 text-sm font-bn">বাংলা সংস্করণ (Bengali)</button>
            </div>
          )}
        </div>
      </nav>

      {/* --- PROMPT 7: Hero Section (Performance Optimized) --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590059393040-0255c27636e0?auto=format&fit=crop&q=80" 
            alt="Tallinn" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
            loading="eager" // Prompt 2: Priority loading for LCP
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050A18]/50 to-[#050A18]" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Your Strategic Gateway to Europe
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            A complete guide for Bangladeshi students targeting BSc in Cybersecurity & AI in Estonia.
          </p>
        </div>
      </section>

      {/* --- PROMPT 9 & 10: Advanced Calculator Section --- */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="text-blue-400" />
            <h2 className="text-2xl font-bold">Cost & Expense Calculator</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm text-gray-400">Monthly Living Expense (€)</span>
                <input 
                  type="text"
                  inputMode="numeric"
                  value={monthlyCost}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === "" || /^\d+$/.test(val)) setMonthlyCost(val);
                  }}
                  className="w-full mt-2 bg-black/40 border border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="e.g. 400"
                />
              </label>

              <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                <span className="text-xs font-bold text-blue-400 uppercase">India Visa Trip Mode</span>
                <div className="flex gap-2 mt-3">
                  {['flight', 'bus'].map((mode) => (
                    <button 
                      key={mode}
                      onClick={() => setTravelMode(mode as any)}
                      className={`flex-1 py-2 rounded-lg text-sm capitalize transition-all ${travelMode === mode ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400'}`}
                    >
                      {mode === 'flight' ? 'Flight (৳50k)' : 'Bus/Train (৳20k)'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center p-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl border border-white/10 text-center">
              <span className="text-gray-400 text-sm mb-2">Total Yearly Estimate</span>
              <span className="text-4xl font-black text-white">
                €{ (Number(monthlyCost) * 12).toLocaleString() }
              </span>
              <p className="text-[10px] text-gray-500 mt-4 uppercase tracking-widest">Calculated for 1GB RAM Optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROMPT 3: Mobile Bottom Navigation --- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-[#0A0F1D]/90 backdrop-blur-2xl border-t border-white/10 flex items-center justify-around px-6 z-50">
        <MobileNavItem icon={<Home size={22}/>} label="Home" active />
        <MobileNavItem icon={<Calculator size={22}/>} label="Finance" />
        <MobileNavItem icon={<Globe size={22}/>} label="Discover" />
        <MobileNavItem icon={<Download size={22}/>} label="PDF" />
      </nav>

    </div>
  );
};

const MobileNavItem = ({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <div className={`flex flex-col items-center gap-1 ${active ? 'text-blue-400' : 'text-gray-500'}`}>
    {icon}
    <span className="text-[10px] font-bold uppercase tracking-tighter">{label}</span>
  </div>
);

export default EstoniaGateway;
