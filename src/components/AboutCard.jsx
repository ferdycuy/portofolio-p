import React from 'react';

/**
 * AboutCard — panel "About ME" dengan teks deskripsi singkat
 */
const AboutCard = () => (
  <div id="about-card" className="border border-[#2D60B3]/40 bg-white/30 rounded-3xl p-8 h-full flex flex-col justify-center">
    <h2 className="font-hand text-3xl italic text-primary mb-4 pb-1 inline-block">
      About ME
    </h2>
    <div className="font-inter text-xs text-[#1C4E90] leading-relaxed space-y-3 text-justify">
      <p>
        I am a graphic designer and illustrator. I create playful visuals using
        bright, cheerful colors and strong design principles.
      </p>
      <p>
        I enjoy bringing ideas and characters to life through simple, engaging
        illustrations, and I&apos;m excited to contribute my creativity to
        innovative projects.
      </p>
    </div>
  </div>
);

export default AboutCard;
