import React from 'react';

const tosItems = [
  {
    no: '01',
    title: 'Brief & Revision',
    body: 'Clients must provide a clear and detailed brief before the project begins. Up to 2 free revisions are included; additional revisions may incur extra charges.',
  },
  {
    no: '02',
    title: 'Pricing & Payment',
    body: 'Pricing is determined based on complexity, level of detail, scope, and intended usage. A 50% down payment is required before work begins.',
  },
  {
    no: '03',
    title: 'Timeline',
    body: 'Estimated delivery time will be communicated during the initial discussion. Rush orders may be accommodated at an extra fee.',
  },
  {
    no: '04',
    title: 'Rights & Usage',
    body: 'Personal-use commissions may not be resold or used commercially without explicit written permission. Commercial licenses are available upon request.',
  },
  {
    no: '05',
    title: 'Refund Policy',
    body: 'Refunds are not available once work has begun. If I am unable to complete the commission, a full refund will be issued.',
  },
];

/**
 * TOSPage — halaman Term of Service
 */
const TOSPage = () => (
  <div id="tos-page" className="w-full max-w-3xl mx-auto space-y-4">
    <p className="font-inter text-xs text-center text-primary/50">
      Please read carefully before placing an order ♥
    </p>

    <div className="space-y-4">
      {tosItems.map(({ no, title, body }) => (
        <div
          key={no}
          className="glass-panel p-5 flex gap-4 items-start"
        >
          <span className="font-hand text-3xl text-primary/30 leading-none shrink-0">
            {no}
          </span>
          <div>
            <h3 className="font-inter font-semibold text-primary mb-1">{title}</h3>
            <p className="font-inter text-sm text-slate-600 leading-relaxed">{body}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TOSPage;
