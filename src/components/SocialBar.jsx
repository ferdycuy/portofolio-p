import React from 'react';
import { InstagramIcon, DiscordIcon, EmailIcon, LinkedInIcon } from './icons/Icons';

// Data sosial media — ubah href sesuai akun Puty
const socialLinks = [
  { id: 'instagram', icon: InstagramIcon, href: 'https://www.instagram.com/mowmeee?igsh=NmsxZTFsc2ZjOHZp', label: 'Instagram' },
  { id: 'discord',   icon: DiscordIcon,   href: 'https://discord.gg/gSSgKATM',   label: 'Discord'   },
  { id: 'email',     icon: EmailIcon,     href: 'mailto:mowmeee0@gmail.com',  label: 'Email'     },
  { id: 'linkedin',  icon: LinkedInIcon,  href: 'https://www.linkedin.com/in/puput-yuniarsih',  label: 'LinkedIn'  },
];

const SocialBar = () => (
  <footer
    id="social-bar"
    className="w-full flex justify-center gap-4"
  >
    {socialLinks.map(({ id, icon: Icon, href, label }) => (
      <a
        key={id}
        id={`social-${id}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-primary border border-primary/20 text-white transition-all duration-200 hover:bg-primary/90 hover:scale-110 hover:shadow-md"
      >
        <Icon size={18} />
      </a>
    ))}
  </footer>
);

export default SocialBar;
