'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Language = {
  code: string;
  label: string;
  flag: string;
};

const LANGUAGES: Language[] = [
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

export default function Navigation() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(LANGUAGES[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageSelect = (lang: Language) => {
    setSelectedLanguage(lang);
    setIsDropdownOpen(false);
    // TODO: atualizar rota com idioma selecionado
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-2 backdrop-blur-sm bg-black/30"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* 🔷 Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-involves-light.png"
            alt="Logo Involves Stage"
            width={120}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* 🧭 Navegação direita */}
        <div className="flex items-center gap-6">
          {/* 🌍 Idioma + Ajuda */}
          <div className="flex items-center gap-3 text-sm text-white/80">
            {/* 🌐 Dropdown de idioma */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen((open) => !open)}
                className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-white/10 transition"
                aria-label="Selecionar idioma"
              >
                <span className="text-lg">{selectedLanguage.flag}</span>
                <span>{selectedLanguage.code.toUpperCase()}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 glass rounded-lg overflow-hidden"
                >
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang)}
                      className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/10 transition-colors text-left"
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-white/80">{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Separador visual */}
            <span className="text-white/40">|</span>

            {/* 🆘 Central de Ajuda */}
            <motion.a
              href="/help"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-white transition-all"
            >
              Central de Ajuda
            </motion.a>
          </div>

          {/* 🔗 Redes sociais */}
          <div className="ml-4"></div>
        </div>
      </div>
    </motion.nav>
  );
}
