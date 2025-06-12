'use client';
import React from 'react';

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const languages = [
    { code: 'pt', label: 'Português (Brasil)' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
  ];

  const getCurrentLanguage = () => {
    if (typeof window !== 'undefined') {
      const match = window.location.pathname.match(/\/(pt|en|es|fr)\//);
      return match ? match[1] : 'pt';
    }
    return 'pt';
  };

  const currentLang = languages.find((l) => l.code === getCurrentLanguage()) || languages[0];

  const switchLanguage = (lang: string) => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const newPath = path.match(/\/(pt|en|es|fr)\//)
        ? path.replace(/\/(pt|en|es|fr)\//, `/${lang}/`)
        : path.replace('/docs/', `/docs/${lang}/`);
      window.location.href = newPath;
    }
    setIsOpen(false);
  };

  React.useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.language-selector')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', closeDropdown);
    }

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [isOpen]);

  return (
    <div className="relative language-selector ml-4 flex items-center border-l border-border pl-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span className="hidden sm:inline">{currentLang.code.toUpperCase()}</span>
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 min-w-[12rem] py-1 bg-popover border border-border rounded-lg shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors ${
                lang.code === currentLang.code
                  ? 'text-primary font-medium'
                  : 'text-popover-foreground'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
