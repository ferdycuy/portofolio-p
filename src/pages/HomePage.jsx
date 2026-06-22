import React from 'react';
import ProfileCard from '../components/ProfileCard';
import AboutCard   from '../components/AboutCard';
import NavCard     from '../components/NavCard';

const navItems = [
  { label: 'Illustration',   target: 'illustration' },
  { label: 'Design Grafic',  target: 'graphic'      },
  { label: 'Term of Service', target: 'tos'         },
];

// Sub-komponen header (zona opacity tebal)
const HomeHeader = ({ setView }) => (
  <ProfileCard onRequest={() => setView('form')} />
);

// Sub-komponen body (zona opacity tipis)
const HomeBody = ({ setView }) => (
  <div id="home-body" className="grid grid-cols-1 md:grid-cols-2 gap-10 flex-1 items-stretch">
    <div className="h-full">
      <AboutCard />
    </div>
    <nav id="nav-cards" className="flex flex-col md:justify-between gap-4 md:h-full py-1">
      {navItems.map(({ label, target }) => (
        <NavCard
          key={target}
          label={label}
          onClick={() => setView(target)}
        />
      ))}
    </nav>
  </div>
);

const HomePage = ({ setView }) => (
  <div id="home-page" className="w-full space-y-6 flex-1 flex flex-col">
    <HomeHeader setView={setView} />
    <HomeBody   setView={setView} />
  </div>
);

HomePage.Header = HomeHeader;
HomePage.Body   = HomeBody;

export default HomePage;
