import React, { useState } from 'react';
import { SendRequestIcon } from './icons/Icons';
import profilPuty from '../assets/asset/profil_puty.svg';

const ProfileCard = ({ onRequest }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      id="profile-header"
      className="w-full flex flex-col md:flex-row items-center justify-between gap-6"
    >
      {/* Profil info */}
      <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left w-full md:w-auto">
        {/* Avatar dengan loading skeleton */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 bg-[#2D60B3]/5">
          {!isLoaded && (
            <div className="absolute inset-0 bg-[#2D60B3]/10 animate-pulse flex items-center justify-center">
              <div className="w-5 h-5 rounded-full border-2 border-[#2D60B3]/15 border-t-[#2D60B3] animate-spin"></div>
            </div>
          )}
          <img
            src={profilPuty}
            alt="Puty Avatar"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`} 
          />
        </div>

        {/* Teks identitas */}
        <div>
          <p className="font-hand italic text-3xl leading-none text-primary/80 mb-1">Hello!</p>
          <h1 className="font-hand font-bold text-5xl uppercase tracking-widest text-primary leading-tight">
            I'm PUTY
          </h1>
          <p className="font-mono italic text-sm tracking-wider text-primary/75 mt-1 ">
            A Freelance Illustrator &amp; Design Grafic
          </p>
        </div>
      </div>

      {/* Tombol Send Request */}
      <button
        id="btn-send-request"
        onClick={onRequest}
        className="bg-[#2F65B6] text-white hover:bg-[#2F65B6] transition-all duration-200 shadow-md rounded-3xl px-14 py-1.5 flex items-center justify-between gap-4 font-hand text-base tracking-wide shrink-0 hover:scale-105 active:scale-95 min-w-[220px]"
      >
        <div className="text-left leading-tight mr-auto">
          Send Me<br />Request! &lt;3
        </div>
        <span className="ml-2 shrink-0">
          <SendRequestIcon size={28} />
        </span>
      </button>
    </div>
  );
};

export default ProfileCard;