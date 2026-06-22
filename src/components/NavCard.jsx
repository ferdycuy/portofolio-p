import React from 'react';
import { ArrowRightIcon } from './icons/Icons';

/**
 * NavCard — kartu navigasi dengan label di kiri dan ikon panah di kanan
 * Props:
 *   label  — teks yang tampil (string)
 *   onClick — fungsi yang dipanggil saat kartu diklik
 */
const NavCard = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="glass-card-nav w-full pl-8 pr-1 py-2 flex items-center justify-between text-left group cursor-pointer"
  >
    <span className="font-mono text-xl font-medium tracking-wider text-[#2F65B6]">
      {label}
    </span>
    <span className="w-12 h-12 rounded-full bg-[#2F65B6] text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#2D60B3] transition-all duration-200 shrink-0">
      <ArrowRightIcon size={24} />
    </span>
  </button>
);

export default NavCard;
