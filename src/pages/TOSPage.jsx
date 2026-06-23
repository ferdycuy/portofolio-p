import React from 'react';

const tosSections = [
  {
    no: '1',
    title: 'Ordering Process',
    bullets: [
      'Clients must provide a clear and detailed brief before the project begins.',
      'Pricing is determined based on complexity, level of detail, scope, and intended usage.',
      'Work will begin after the required deposit has been received.'
    ]
  },
  {
    no: '2',
    title: 'Payment',
    bullets: [
      'I may require either full payment upfront or a 50% deposit before starting the commission.',
      'Work will begin only after payment has been received.',
      'Payments are non-refundable unless the commission is canceled by the artist.'
    ]
  },
  {
    no: '3',
    title: 'Turnaround Time',
    bullets: [
      'Artwork completion time varies depending on the complexity of the artwork and my current workload.',
      'Estimated completion times are not guaranteed, but I will communicate any significant delays.',
      'Clients will receive progress updates when necessary.'
    ]
  },
  {
    no: '4',
    title: 'Revisions',
    bullets: [
      'The client is entitled to up to 2–3 minor revisions, depending on the project agreement.',
      'Major revisions or concept changes after approval may incur additional charges.',
      'Any mistakes made by the artist/designer will be corrected at no extra cost.'
    ]
  },
  {
    no: '5',
    title: 'Copyright & Usage',
    bullets: [
      'The artist retains full copyright ownership of the artwork.',
      'The client may use the commissioned artwork for personal, non-commercial purposes.',
      'The client may post the artwork on social media as long as proper credit is given to the artist.',
      'The client may not resell, redistribute, trace, edit, mint as NFTs, or claim the artwork as their own.',
      'Commercial use requires a separate agreement and additional licensing fees.'
    ]
  },
  {
    no: '6',
    title: 'Cancellation Policy',
    bullets: [
      'The client may cancel the commission before work has started. Once work has begun, payments are non-refundable.',
      'The artist reserves the right to cancel a commission and provide a partial or full refund depending on the stage of completion.'
    ]
  },
  {
    no: '7',
    title: 'Delivery',
    bullets: [
      'Final files will be delivered in PNG, JPG, or other agreed-upon formats.',
      'Source files (PSD, AI, Procreate, etc.) are not included unless specifically agreed upon.'
    ]
  }
];

const abilities = [
  'Illustration',
  'Packaging Design',
  'Character Design/Mascot',
  'Social Media Content Design',
  'Posters, Banners, and Promotional Materials',
  'Other visual design services as agreed upon'
];

/**
 * TOSPage — halaman Term of Service dengan desain Figma premium
 */
const TOSPage = () => {
  return (
    <div id="tos-page" className="w-full max-w-3xl mx-auto space-y-6">
      
      {/* 1. Alert Notice */}
      <div className="bg-white/40 border border-white/50 shadow-sm rounded-3xl md:rounded-full py-4 px-6 flex items-start md:items-center gap-4 text-left">
        <svg className="w-6 h-6 text-[#2D60B3] shrink-0 mt-0.5 md:mt-0" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <p className="text-[#2D60B3] font-inter text-sm font-medium leading-relaxed">
          By placing an order, the client acknowledges that they have read, understood, and agreed to the following Terms of Service.
        </p>
      </div>

      {/* 2. Abilities Card */}
      <div className="bg-white/40 border border-white/50 shadow-sm rounded-3xl p-6 text-left space-y-4">
        <h2 className="font-inter font-bold text-2xl text-[#2D60B3] tracking-wide">
          Abilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
          {abilities.map((ability, index) => (
            <div key={index} className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#2D60B3] shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-700 font-inter text-sm font-medium leading-tight">
                {ability}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. TOS Sections */}
      <div className="space-y-6 pt-2">
        {tosSections.map(({ no, title, bullets }) => (
          <div key={no} className="text-left space-y-3">
            {/* Pill Header */}
            <div className="w-full py-2 px-6 bg-white/75 border border-white/80 shadow-sm rounded-full font-hand text-xl text-[#2D60B3] font-semibold italic tracking-wide text-left">
              {no}. {title}
            </div>
            
            {/* Bullet List */}
            <ul className="list-disc pl-6 marker:text-[#2D60B3] text-slate-700 font-inter text-sm font-medium space-y-2 leading-relaxed">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="pl-1">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TOSPage;
