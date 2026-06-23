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

// Import asset gambar untuk Design Graphic (Posters & Banners)
import iklanFibemini from '../assets/asset/iklan banners/iklan fibemini.svg';
import iklanPantene from '../assets/asset/iklan banners/iklan pantene.svg';
import iklanPringles1 from '../assets/asset/iklan banners/iklan pringles1.svg';
import iklanPringles2 from '../assets/asset/iklan banners/iklan pringles2.svg';
import iklanPringles3 from '../assets/asset/iklan banners/iklan pringles3.svg';
import iceCreamBanner from '../assets/asset/iklan banners/ice cream banner.svg';
import blackmoriesBanner from '../assets/asset/iklan banners/blackmories banner.svg';

// Import asset gambar untuk Design Graphic (Content Design)
import kontenIg1 from '../assets/asset/konten/konten ig1.svg';
import kontenIg2 from '../assets/asset/konten/konten ig2.svg';

// Import asset gambar untuk Design Graphic (Packaging Design)
import desainPackagingNyamnyam from '../assets/asset/desain kemasan/desain packaging nyamnyam.svg';
import desainPackagingSuperstar from '../assets/asset/desain kemasan/desain packaging superstar.svg';
import desainPackagingTematik from '../assets/asset/desain kemasan/desain packaging tematik.svg';

/**
 * GalleryImage Component
 * Komponen pembungkus gambar dengan fitur lazy load & loading skeleton
 */
const GalleryImage = ({ src, alt, aspectClass, className, objectFitClass = 'object-cover' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden transition-all duration-300 ${
        aspectClass || 'w-full'
      } ${className || ''}`}
    >
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div 
          className={`absolute inset-0 bg-[#2D60B3]/10 animate-pulse flex items-center justify-center ${
            !aspectClass ? 'min-h-[250px]' : ''
          }`}
        >
          <div className="w-8 h-8 rounded-full border-4 border-[#2D60B3]/15 border-t-[#2D60B3] animate-spin"></div>
        </div>
      )}
      
      {/* Gambar utama */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full ${objectFitClass} transition-all duration-500 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } ${!aspectClass ? 'h-auto block' : ''}`}
      />
    </div>
  );
};

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
            <GalleryImage 
              src={magangilust1} 
              alt="Magang Ilustrasi 1" 
              aspectClass="aspect-[4/3]" 
              className="hover:scale-[1.02]"
            />
            <GalleryImage 
              src={magangilustProgress} 
              alt="Magang Ilustrasi Progress" 
              aspectClass="aspect-[4/3]" 
              className="hover:scale-[1.02]"
            />

            {/* Baris 2 & 3: Cover Juklak Juknis (kiri, memanjang ke bawah), Cover Si Penyu & Cover KDRT (kanan) */}
            <GalleryImage 
              src={coverJuklakJuknis} 
              alt="Cover Juklak Juknis" 
              className="row-span-2 hover:scale-[1.01]" 
            />
            <GalleryImage 
              src={coverSiPenyu} 
              alt="Cover Si Penyu" 
              aspectClass="aspect-[4/3]" 
              className="hover:scale-[1.02]"
            />
            <GalleryImage 
              src={coverKdrt} 
              alt="Cover KDRT" 
              aspectClass="aspect-[4/3]" 
              className="hover:scale-[1.02]"
            />
          </div>

          {/* Grid Set 2 (Ditampilkan jika isExpanded = true) */}
          {isExpanded && (
            <div className="flex flex-col gap-4 w-full transition-all duration-500 animate-fadeIn">
              {/* 1. Cover The Price (Single di center tengah) */}
              <GalleryImage 
                src={coverThePrice} 
                alt="Cover The Price" 
                aspectClass="max-w-lg mx-auto w-full aspect-[16/9]" 
                className="hover:scale-[1.01]"
              />

              {/* 2. Grid 2 Kolom (The Prince 1-2, 3-4, 5-6, 7-8) */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <GalleryImage 
                  src={thePrince12} 
                  alt="The Prince 1-2" 
                  aspectClass="aspect-[8/3]" 
                  className="hover:scale-[1.02]"
                />
                <GalleryImage 
                  src={thePrince34} 
                  alt="The Prince 3-4" 
                  aspectClass="aspect-[8/3]" 
                  className="hover:scale-[1.02]"
                />
                <GalleryImage 
                  src={thePrince56} 
                  alt="The Prince 5-6" 
                  aspectClass="aspect-[8/3]" 
                  className="hover:scale-[1.02]"
                />
                <GalleryImage 
                  src={thePrince78} 
                  alt="The Prince 7-8" 
                  aspectClass="aspect-[8/3]" 
                  className="hover:scale-[1.02]"
                />
              </div>

              {/* 3. Grid 3 Kolom Potret (Mba Rambut Ijo, Cwe Gweh, Shu Yamino) */}
              <div className="grid grid-cols-3 gap-4 w-full">
                <GalleryImage 
                  src={mbaRambutIjo} 
                  alt="Mba Rambut Ijo" 
                  aspectClass="aspect-[2/3]" 
                  className="hover:scale-[1.02]"
                />
                <GalleryImage 
                  src={cweGweh} 
                  alt="Cwe Gweh" 
                  aspectClass="aspect-[2/3]" 
                  className="hover:scale-[1.02]"
                />
                <GalleryImage 
                  src={shuYamino} 
                  alt="Shu Yamino" 
                  aspectClass="aspect-[2/3]" 
                  className="hover:scale-[1.02]"
                />
              </div>

              {/* 4. Grid 2 Kolom Lebar (Scotl Couple, Cwo Greenflag) */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <GalleryImage 
                  src={scotlCouple} 
                  alt="Scotl Couple" 
                  aspectClass="aspect-[4/3]" 
                  className="hover:scale-[1.02]"
                />
                <GalleryImage 
                  src={cwoGreenflag} 
                  alt="Cwo Greenflag" 
                  aspectClass="aspect-[4/3]" 
                  className="hover:scale-[1.02]"
                />
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
            <GalleryImage 
              src={prodiDesainNoBg1} 
              alt="Prodi Desain" 
              className="w-full hover:scale-[1.01]" 
            />

            {/* 2. Gwe Keren (Full width) */}
            <GalleryImage 
              src={gweKeren} 
              alt="Gwe Keren" 
              className="w-full hover:scale-[1.01]" 
            />

            {/* 3. 2 Kolom (Baddas Gurl & My Oc Unica) */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <GalleryImage 
                src={baddasGurl} 
                alt="Baddas Gurl" 
                className="hover:scale-[1.02]" 
              />
              <GalleryImage 
                src={myOcUnica} 
                alt="My Oc Unica" 
                className="hover:scale-[1.02]" 
              />
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
                <GalleryImage 
                  src={desainKarakterSidapfest} 
                  alt="Sidapfest Karakter" 
                  className="w-full hover:scale-[1.01]" 
                />

                {/* 5. 2 Kolom (My Mine Gwe & Barong Desain) */}
                <div className="grid grid-cols-2 gap-4 w-full">
                  <GalleryImage 
                    src={myMineGwe} 
                    alt="My Mine Gwe" 
                    className="hover:scale-[1.02]" 
                  />
                  <GalleryImage 
                    src={barongDesain} 
                    alt="Barong Desain" 
                    className="hover:scale-[1.02]" 
                  />
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
        <div className="max-w-[720px] mx-auto w-full flex flex-col gap-6">
          {/* Title Box 1: Posters & Banners */}
          <div className="w-fit mx-auto py-1.5 px-12 rounded-xl bg-white/55 border-2 border-[#2D60B3]/50 shadow-[0_5px_15px_rgba(28,78,144,0.12)] font-hand text-3xl text-[#2D60B3] tracking-wider">
            Posters & Banners
          </div>

          <div className="flex flex-col gap-4 w-full">
            {/* 1. 2 Kolom Persegi Panjang Kebawah (Portrait) */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <GalleryImage 
                src={iklanFibemini} 
                alt="Iklan Fibemini" 
                aspectClass="aspect-[3/4]" 
                className="hover:scale-[1.02]" 
              />
              <GalleryImage 
                src={iklanPantene} 
                alt="Iklan Pantene" 
                aspectClass="aspect-[3/4]" 
                className="hover:scale-[1.02]" 
              />
            </div>

            {/* 2. 2 Kolom Landscape Normal */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <GalleryImage 
                src={iklanPringles1} 
                alt="Iklan Pringles 1" 
                aspectClass="aspect-[4/3]" 
                className="hover:scale-[1.02]" 
              />
              <GalleryImage 
                src={iklanPringles2} 
                alt="Iklan Pringles 2" 
                aspectClass="aspect-[4/3]" 
                className="hover:scale-[1.02]" 
              />
            </div>

            {/* 3. 2 Kolom Landscape Normal Kedua */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <GalleryImage 
                src={iklanPringles3} 
                alt="Iklan Pringles 3" 
                aspectClass="aspect-[4/3]" 
                className="hover:scale-[1.02]" 
              />
              <GalleryImage 
                src={iceCreamBanner} 
                alt="Ice Cream Banner" 
                aspectClass="aspect-[4/3]" 
                className="hover:scale-[1.02]" 
              />
            </div>

            {/* 4. Blackmories Banner (Sendirian Full width) */}
            <GalleryImage 
              src={blackmoriesBanner} 
              alt="Blackmories Banner" 
              className="w-full hover:scale-[1.01]" 
            />
          </div>

          {/* Spacer */}
          <div className="my-4 border-t-2 border-dashed border-[#2D60B3]/25 w-full"></div>

          {/* Title Box 2: Content Design */}
          <div className="w-fit mx-auto py-1.5 px-12 rounded-xl bg-white/55 border-2 border-[#2D60B3]/50 shadow-[0_5px_15px_rgba(28,78,144,0.12)] font-hand text-3xl text-[#2D60B3] tracking-wider">
            Content Design
          </div>

          {/* Layout Content Design (Masing-masing 1 full width ke bawah) */}
          <div className="flex flex-col gap-4 w-full">
            <GalleryImage 
              src={kontenIg1} 
              alt="Konten IG 1" 
              className="w-full hover:scale-[1.01]" 
            />
            <GalleryImage 
              src={kontenIg2} 
              alt="Konten IG 2" 
              className="w-full hover:scale-[1.01]" 
            />
          </div>

          {/* Spacer */}
          <div className="my-4 border-t-2 border-dashed border-[#2D60B3]/25 w-full"></div>

          {/* Title Box 3: Packaging Design */}
          <div className="w-fit mx-auto py-1.5 px-12 rounded-xl bg-white/55 border-2 border-[#2D60B3]/50 shadow-[0_5px_15px_rgba(28,78,144,0.12)] font-hand text-3xl text-[#2D60B3] tracking-wider">
            Packaging Design
          </div>

          {/* Layout Packaging Design (Masing-masing 1 full width ke bawah, tidak kepotong) */}
          <div className="flex flex-col gap-4 w-full">
            <GalleryImage 
              src={desainPackagingNyamnyam} 
              alt="Packaging Nyamnyam" 
              className="w-full hover:scale-[1.01]" 
            />
            <GalleryImage 
              src={desainPackagingSuperstar} 
              alt="Packaging Superstar" 
              className="w-full hover:scale-[1.01]" 
            />
            <GalleryImage 
              src={desainPackagingTematik} 
              alt="Packaging Tematik" 
              className="w-full hover:scale-[1.01]" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
