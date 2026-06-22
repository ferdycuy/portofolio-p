import React, { useState } from 'react';

// Import asset gambar untuk Illustration (Set 1)
import magangilust1 from '../assets/asset/illustation/magangilust 1.svg';
import magangilustProgress from '../assets/asset/illustation/magangilust progress.svg';
import coverJuklakJuknis from '../assets/asset/illustation/cover juklak juknis.svg';
import coverSiPenyu from '../assets/asset/illustation/cover si penyu.svg';
import coverKdrt from '../assets/asset/illustation/cover kdrt.svg';

// Import asset gambar untuk Illustration (Set 2 - Selengkapnya)
import coverThePrice from '../assets/asset/illustation/cover the price.svg';
import thePrince12 from '../assets/asset/illustation/the prince 1 2.svg';
import thePrince34 from '../assets/asset/illustation/the prince 3 4.svg';
import thePrince56 from '../assets/asset/illustation/the prince 5 6.svg';
import thePrince78 from '../assets/asset/illustation/the prince 7 8.svg';
import mbaRambutIjo from '../assets/asset/illustation/mba rambut ijo.svg';
import cweGweh from '../assets/asset/illustation/cwe gweh.svg';
import shuYamino from '../assets/asset/illustation/shu yamino.svg';
import scotlCouple from '../assets/asset/illustation/scotl couple.svg';
import cwoGreenflag from '../assets/asset/illustation/cwo greenflag.svg';

// Import asset gambar untuk Character Design
import baddasGurl from '../assets/asset/desain karakter/baddas gurl.svg';
import barongDesain from '../assets/asset/desain karakter/barong desain.svg';
import desainKarakterSidapfest from '../assets/asset/desain karakter/desain karakter sidapfest.svg';
import gweKeren from '../assets/asset/desain karakter/gwe keren.svg';
import myMineGwe from '../assets/asset/desain karakter/my mine gwe.svg';
import myOcUnica from '../assets/asset/desain karakter/my oc unica.svg';
import prodiDesainNoBg1 from '../assets/asset/desain karakter/prodi desain no bg 1.svg';

/**
 * GalleryPage — halaman galeri untuk Illustration atau Design Graphic
 * Props:
 *   label — label halaman yang tampil di dalam box (string)
 */
const GalleryPage = ({ label }) => {
  const isIllustration = label === 'Illustration';
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCharExpanded, setIsCharExpanded] = useState(false);

  return (
    <div id="gallery-page" className="w-full max-w-4xl mx-auto text-center space-y-6">
      
      {isIllustration ? (
        /* ────────────────────────────────────────────────────────
           LAYOUT ILLUSTRATION
           ──────────────────────────────────────────────────────── */
        <div className="max-w-[720px] mx-auto w-full flex flex-col gap-6">
          {/* Title Box 1: Illustration */}
          <div className="w-fit mx-auto py-1.5 px-12 rounded-xl bg-white/55 border-2 border-[#2D60B3]/50 shadow-[0_5px_15px_rgba(28,78,144,0.12)] font-hand text-3xl text-[#2D60B3] tracking-wider">
            Illustration
          </div>

          {/* Grid Set 1 */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Baris 1: Magang Ilustrasi 1 & Progress */}
            <div className="aspect-[4/3] overflow-hidden hover:scale-[1.02] transition-all duration-300">
              <img src={magangilust1} alt="Magang Ilustrasi 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] overflow-hidden hover:scale-[1.02] transition-all duration-300">
              <img src={magangilustProgress} alt="Magang Ilustrasi Progress" className="w-full h-full object-cover" />
            </div>

            {/* Baris 2 & 3: Cover Juklak Juknis (kiri, memanjang ke bawah), Cover Si Penyu & Cover KDRT (kanan) */}
            <div className="row-span-2 overflow-hidden hover:scale-[1.01] transition-all duration-300 flex flex-col justify-stretch">
              <img src={coverJuklakJuknis} alt="Cover Juklak Juknis" className="w-full h-full object-cover flex-1" />
            </div>
            <div className="aspect-[4/3] overflow-hidden hover:scale-[1.02] transition-all duration-300">
              <img src={coverSiPenyu} alt="Cover Si Penyu" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] overflow-hidden hover:scale-[1.02] transition-all duration-300">
              <img src={coverKdrt} alt="Cover KDRT" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Grid Set 2 (Ditampilkan jika isExpanded = true) */}
          {isExpanded && (
            <div className="flex flex-col gap-4 w-full transition-all duration-500 animate-fadeIn">
              {/* 1. Cover The Price (Single di center tengah) */}
              <div className="max-w-lg mx-auto w-full aspect-[16/9] overflow-hidden hover:scale-[1.01] transition-all duration-300">
                <img src={coverThePrice} alt="Cover The Price" className="w-full h-full object-cover" />
              </div>

              {/* 2. Grid 2 Kolom (The Prince 1-2, 3-4, 5-6, 7-8) */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="aspect-[8/3] overflow-hidden hover:scale-[1.02] transition-all duration-300">
                  <img src={thePrince12} alt="The Prince 1-2" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[8/3] overflow-hidden hover:scale-[1.02] transition-all duration-300">
                  <img src={thePrince34} alt="The Prince 3-4" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[8/3] overflow-hidden hover:scale-[1.02] transition-all duration-300">
                  <img src={thePrince56} alt="The Prince 5-6" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[8/3] overflow-hidden hover:scale-[1.02] transition-all duration-300">
                  <img src={thePrince78} alt="The Prince 7-8" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* 3. Grid 3 Kolom Potret (Mba Rambut Ijo, Cwe Gweh, Shu Yamino) */}
              <div className="grid grid-cols-3 gap-4 w-full">
                <div className="aspect-[2/3] overflow-hidden hover:scale-[1.02] transition-all duration-300">
                  <img src={mbaRambutIjo} alt="Mba Rambut Ijo" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[2/3] overflow-hidden hover:scale-[1.02] transition-all duration-300">
                  <img src={cweGweh} alt="Cwe Gweh" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[2/3] overflow-hidden hover:scale-[1.02] transition-all duration-300">
                  <img src={shuYamino} alt="Shu Yamino" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* 4. Grid 2 Kolom Lebar (Scotl Couple, Cwo Greenflag) */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="aspect-[4/3] overflow-hidden hover:scale-[1.02] transition-all duration-300">
                  <img src={scotlCouple} alt="Scotl Couple" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] overflow-hidden hover:scale-[1.02] transition-all duration-300">
                  <img src={cwoGreenflag} alt="Cwo Greenflag" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          )}

          {/* Tombol Lihat Selengkapnya / Sembunyikan (Illustration) */}
          <button
            id="btn-view-more"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-3 bg-[#2D60B3] text-white font-mono tracking-widest font-bold shadow-[0_5px_15px_rgba(28,78,144,0.15)] hover:bg-[#234F99] hover:scale-[1.01] active:scale-95 transition-all cursor-pointer text-center"
          >
            {isExpanded ? 'Sembunyikan' : 'Lihat Selengkapnya'}
          </button>

          {/* Spacer */}
          <div className="my-4 border-t-2 border-dashed border-[#2D60B3]/25 w-full"></div>

          {/* Title Box 2: Character Design */}
          <div className="w-fit mx-auto py-1.5 px-12 rounded-xl bg-white/55 border-2 border-[#2D60B3]/50 shadow-[0_5px_15px_rgba(28,78,144,0.12)] font-hand text-3xl text-[#2D60B3] tracking-wider">
            Character Design
          </div>

          {/* Layout Alur Khusus Character Design (Sesuai proporsi gambar asli, polos tanpa border/bg) */}
          <div className="flex flex-col gap-4 w-full">
            {/* 1. Prodi Desain No BG 1 (Full width) */}
            <div className="w-full overflow-hidden hover:scale-[1.01] transition-all duration-300">
              <img src={prodiDesainNoBg1} alt="Prodi Desain" className="w-full h-auto block" />
            </div>

            {/* 2. Gwe Keren (Full width) */}
            <div className="w-full overflow-hidden hover:scale-[1.01] transition-all duration-300">
              <img src={gweKeren} alt="Gwe Keren" className="w-full h-auto block" />
            </div>

            {/* 3. 2 Kolom (Baddas Gurl & My Oc Unica) */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="overflow-hidden hover:scale-[1.02] transition-all duration-300">
                <img src={baddasGurl} alt="Baddas Gurl" className="w-full h-auto block" />
              </div>
              <div className="overflow-hidden hover:scale-[1.02] transition-all duration-300">
                <img src={myOcUnica} alt="My Oc Unica" className="w-full h-auto block" />
              </div>
            </div>

            {/* Tombol Lihat Selengkapnya (Hanya tampil jika BELUM di-expand) */}
            {!isCharExpanded && (
              <button
                id="btn-view-more-char"
                onClick={() => setIsCharExpanded(true)}
                className="w-full py-3 bg-[#2D60B3] text-white font-mono tracking-widest font-bold shadow-[0_5px_15px_rgba(28,78,144,0.15)] hover:bg-[#234F99] hover:scale-[1.01] active:scale-95 transition-all cursor-pointer text-center"
              >
                Lihat Selengkapnya
              </button>
            )}

            {/* Sisa Aset Character Design (Ditampilkan jika isCharExpanded = true) */}
            {isCharExpanded && (
              <div className="flex flex-col gap-4 w-full transition-all duration-500 animate-fadeIn">
                {/* 4. Desain Karakter Sidapfest (Full width) */}
                <div className="w-full overflow-hidden hover:scale-[1.01] transition-all duration-300">
                  <img src={desainKarakterSidapfest} alt="Sidapfest Karakter" className="w-full h-auto block" />
                </div>

                {/* 5. 2 Kolom (My Mine Gwe & Barong Desain) */}
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="overflow-hidden hover:scale-[1.02] transition-all duration-300">
                    <img src={myMineGwe} alt="My Mine Gwe" className="w-full h-auto block" />
                  </div>
                  <div className="overflow-hidden hover:scale-[1.02] transition-all duration-300">
                    <img src={barongDesain} alt="Barong Desain" className="w-full h-auto block" />
                  </div>
                </div>

                {/* Tombol Sembunyikan (Ditampilkan paling bawah setelah konten terbuka) */}
                <button
                  id="btn-hide-char"
                  onClick={() => setIsCharExpanded(false)}
                  className="w-full py-3 bg-[#2D60B3] text-white font-mono tracking-widest font-bold shadow-[0_5px_15px_rgba(28,78,144,0.15)] hover:bg-[#234F99] hover:scale-[1.01] active:scale-95 transition-all cursor-pointer text-center"
                >
                  Sembunyikan
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* ────────────────────────────────────────────────────────
           LAYOUT DESIGN GRAPHIC
           ──────────────────────────────────────────────────────── */
        <div className="max-w-[720px] mx-auto w-full flex flex-col gap-4">
          <div className="w-fit mx-auto py-1.5 px-12 rounded-xl bg-white/55 border-2 border-[#2D60B3]/50 shadow-[0_5px_15px_rgba(28,78,144,0.12)] font-hand text-3xl text-[#2D60B3] tracking-wider">
            Design Grafic
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] overflow-hidden flex items-center justify-center text-primary/30 font-inter text-xs"
              >
                Work {i + 1}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
