import React, { useState } from 'react';

const categories = [
  { id: 'illustration', label: 'Illustation' },
  { id: 'graphic',      label: 'Grafic Design' },
];

const useOptions = [
  { id: 'personal',   label: 'Personal Use' },
  { id: 'commercial', label: 'Commercial Use' },
];

/**
 * CommissionForm — halaman formulir pemesanan karya
 */
const CommissionForm = () => {
  const [selectedCategory, setSelectedCategory] = useState('illustration');
  const [selectedUse, setSelectedUse] = useState('personal');

  return (
    <div id="commission-form" className="w-full max-w-4xl mx-auto px-4 py-2">

      <form className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6 font-mono text-sm text-slate-800">

        {/* ── Kolom Kiri ── */}
        <div className="space-y-6">
          {[
            { label: 'Name :', id: 'name',  type: 'text'  },
            { label: 'Email :', id: 'email', type: 'email' },
          ].map(({ label, id, type }) => (
            <div key={id} className="space-y-1.5">
              <label htmlFor={id} className="font-mono text-sm block text-[#2D60B3] tracking-widest font-semibold">
                {label}
              </label>
              <input id={id} type={type} className="glass-input" />
            </div>
          ))}

          {/* Kategori */}
          <div className="space-y-2">
            <label className="font-mono text-sm block text-[#2D60B3] tracking-widest font-semibold">
              Categories
            </label>
            <div className="flex gap-4">
              {categories.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  id={`cat-${id}`}
                  onClick={() => setSelectedCategory(id)}
                  className={`px-8 py-3 border-2 rounded-2xl text-sm font-mono tracking-widest font-bold transition-all shadow-[0_5px_15px_rgba(28,78,144,0.12)] cursor-pointer ${
                    selectedCategory === id
                      ? 'bg-[#2D60B3] text-white border-[#2D60B3]'
                      : 'bg-white/55 border-[#2D60B3]/50 text-[#2D60B3] hover:bg-white/80'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Penggunaan */}
          <div className="space-y-2">
            <label className="font-mono text-sm block text-[#2D60B3] tracking-widest font-semibold">
              Use
            </label>
            <div className="flex flex-col gap-3 items-start">
              {useOptions.map(({ id, label }) => (
                <div key={id} className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="radio"
                    id={id}
                    name="use_type"
                    checked={selectedUse === id}
                    onChange={() => setSelectedUse(id)}
                    className="accent-[#2D60B3] w-5 h-5 cursor-pointer"
                  />
                  <label htmlFor={id} className="text-sm font-mono tracking-wider font-semibold text-[#2D60B3] cursor-pointer">
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Kolom Kanan ── */}
        <div className="flex flex-col gap-6">
          <div className="space-y-1.5 flex-1 flex flex-col">
            <label htmlFor="description" className="font-mono text-sm block text-[#2D60B3] tracking-widest font-semibold">
              Description
            </label>
            <textarea
              id="description"
              className="glass-input resize-none flex-1 min-h-[160px]"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="upload" className="font-mono text-sm block text-[#2D60B3] tracking-widest font-semibold">
              Upload Visual Reference
            </label>
            <input
              type="file"
              id="upload"
              className="glass-input !p-2 text-xs border-dashed border-2 cursor-pointer"
            />
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              id="btn-submit-form"
              className="bg-[#2D60B3] text-white font-mono tracking-widest font-bold px-10 py-3 rounded-full shadow-[0_5px_15px_rgba(28,78,144,0.2)] hover:bg-[#234F99] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Send Request
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommissionForm;
