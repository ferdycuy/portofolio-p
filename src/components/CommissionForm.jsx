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
 * CommissionForm — halaman formulir pemesanan karya terintegrasi Formspree (Tanpa File Upload)
 */
const CommissionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('illustration');
  const [selectedUse, setSelectedUse] = useState('personal');
  const [description, setDescription] = useState('');

  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('category', selectedCategory);
    formData.append('use', selectedUse);
    formData.append('description', description);

    try {
      const response = await fetch('https://formspree.io/f/xwvdpbjp', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        // Reset form states
        setName('');
        setEmail('');
        setDescription('');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  // Tampilan ketika berhasil submit
  if (status === 'success') {
    return (
      <div className="w-full max-w-md mx-auto py-12 px-6 bg-white/40 border border-white/50 backdrop-blur-md rounded-3xl text-center space-y-6 shadow-sm animate-fadeIn my-auto">
        <div className="w-20 h-20 bg-[#2D60B3]/10 text-[#2D60B3] rounded-full flex items-center justify-center mx-auto">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="space-y-2">
          <h2 className="font-hand font-bold text-4xl text-[#2D60B3]">Thank You!</h2>
          <p className="font-mono text-sm text-slate-700 leading-relaxed">
            Your commission request has been successfully sent! I will review it and get back to you via email soon. ♥
          </p>
        </div>
        <button
          onClick={() => setStatus('')}
          className="bg-[#2D60B3] text-white font-mono tracking-widest font-bold px-8 py-2.5 rounded-full hover:bg-[#234F99] transition-all hover:scale-105 active:scale-95 cursor-pointer text-xs"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <div id="commission-form" className="w-full max-w-4xl mx-auto px-4 py-2">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6 font-mono text-sm text-slate-800">
        
        {/* ── Kolom Kiri ── */}
        <div className="space-y-6 text-left">
          {/* Name Input */}
          <div className="space-y-1.5">
            <label htmlFor="name" className="font-mono text-sm block text-[#2D60B3] tracking-widest font-semibold">
              Name :
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="glass-input w-full"
              placeholder="Your name"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="font-mono text-sm block text-[#2D60B3] tracking-widest font-semibold">
              Email :
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="glass-input w-full"
              placeholder="yourname@email.com"
            />
          </div>

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
        <div className="flex flex-col gap-6 text-left">
          {/* Deskripsi */}
          <div className="space-y-1.5 flex-1 flex flex-col">
            <label htmlFor="description" className="font-mono text-sm block text-[#2D60B3] tracking-widest font-semibold">
              Description
            </label>
            <textarea
              id="description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="glass-input resize-none flex-1 min-h-[160px] w-full"
              placeholder="Describe your request details, character references, style preference, etc..."
            />
          </div>

          {/* Tombol Kirim & Feedback Status */}
          <div className="flex flex-col items-end gap-2 mt-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              id="btn-submit-form"
              className="bg-[#2D60B3] text-white font-mono tracking-widest font-bold px-10 py-3 rounded-full shadow-[0_5px_15px_rgba(28,78,144,0.2)] hover:bg-[#234F99] transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Request'}
            </button>
            {status === 'error' && (
              <p className="text-red-500 font-mono text-xs mt-1">
                Oops! Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>

      </form>
    </div>
  );
};

export default CommissionForm;
