'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { LanguageSwitcher } from './LanguageSwitcher';

const Brand = () => (
  <div className="relative flex items-center justify-between md:block">
    <div
      className="absolute pointer-events-none inset-0 m-auto max-w-xs h-[400px] blur-[118px] sm:max-w-md md:max-w-lg"
      style={{
        background:
          'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
      }}
    />
    <a
      href="https://involves.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white relative z-10 pl-4"
    >
      <Image alt="logo" src="/logo-involves-light.png" width={120} height={50} />
    </a>
  </div>
);

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/involves',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/ainvolves',
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17" cy="7" r="1" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@InvolvesOficial',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/involves',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const SocialLinks = () => (
  <div className="flex items-center gap-4">
    {socialLinks.map((link) => (
      <motion.a
        key={link.name}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/60 hover:text-white transition-colors"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      >
        {link.icon}
      </motion.a>
    ))}
    <div className="mx-2 border h-10 border-slate-700" />
    <motion.div
      className="text-white/60 hover:text-white transition-colors -mt-1"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      <LanguageSwitcher />
    </motion.div>
  </div>
);

export const TopBar = () => {
  return (
    <header className="w-full">
      <nav className="w-full">
        <div className="flex justify-center">
          <div className="h-24 w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
            <Brand />
            <div className="flex gap-4 items-center">
              <Button asChild variant="ghostInverse" className="!px-5 !py-2 rounded-lg">
                <a
                  href="https://help.involves.com/hc/pt-br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Central de Ajuda
                </a>
              </Button>
              <div className="mx-2 border h-10 border-slate-700" />
              <SocialLinks />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
