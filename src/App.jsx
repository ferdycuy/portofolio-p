import React, { useState } from 'react';
import HomePage      from './pages/HomePage';
import GalleryPage   from './pages/GalleryPage';
import TOSPage       from './pages/TOSPage';
import CommissionForm from './components/CommissionForm';
import SocialBar     from './components/SocialBar';
import { ArrowRightIcon } from './components/icons/Icons';
import bgBlue from './assets/asset/Baground blue.svg';

// Judul halaman untuk ditampilkan di header zone
const pageTitles = {
  illustration: 'Illustration',
  graphic:      'Design Grafic',
  tos:          'Term of Service',
  form:         'Commission Request Form',
};

// Konten body per halaman
const viewMap = {
  illustration: <GalleryPage label="Illustration" />,
  graphic:      <GalleryPage label="Design Grafic" />,
  tos:          <TOSPage />,
  form:         <CommissionForm />,
};

export default function App() {
  const [activeView, setActiveView] = useState('home');
  const isHome = activeView === 'home';

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 bg-cover bg-center bg-[#c8daf5]"
      style={{ backgroundImage: `url(${bgBlue})` }}
    >
      {/* Card: outer border + rounded + shadow */}
      <main className="w-full max-w-5xl rounded-3xl border border-white/50 shadow-2xl overflow-hidden relative flex flex-col min-h-[560px]">

        {/* ── HEADER: opacity tebal ── */}
        <div className="bg-white/93 px-8 pt-8 pb-6 border-b border-white/60 shadow-[0_4px_8px_rgba(0,0,0,0.12)] relative z-10">
          {isHome
            ? <HomePage.Header setView={setActiveView} />
            : (
              <div className="flex items-center justify-center w-full relative min-h-[40px]">
                <button
                  id="btn-back"
                  onClick={() => setActiveView('home')}
                  aria-label="Kembali ke beranda"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#2D60B3] text-white shadow-md transition-all hover:bg-[#234F99] hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                >
                  <span className="rotate-180 flex">
                    <ArrowRightIcon size={18} />
                  </span>
                </button>
                <h1 className="font-hand italic text-6xl text-[#2D60B3] tracking-wide text-center">
                  {pageTitles[activeView]}
                </h1>
              </div>
            )
          }
        </div>

        {/* ── BODY: opacity tipis ── */}
        <div className="bg-white/55 px-8 py-6 flex-1 flex flex-col">
          {isHome
            ? <HomePage.Body setView={setActiveView} />
            : viewMap[activeView]
          }
        </div>

        {/* ── FOOTER: opacity tebal ── */}
        <div className="bg-white/93 px-8 py-5 border-t border-white/40 shadow-[0_-4px_8px_rgba(0,0,0,0.12)] relative z-10">
          <SocialBar />
        </div>

      </main>
    </div>
  );
}