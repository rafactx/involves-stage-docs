'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';

// Constantes de configuração
const LOCALES = [
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
] as const;

// Classes reutilizáveis
const CLASSES = {
  trigger:
    'rounded-md p-2 text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20',
  content: 'w-44 text-sm bg-[#6B46C1] text-white shadow-lg border border-white/10 rounded-lg py-1',
  menuItem: {
    base: 'mx-1 px-4 py-2 text-center justify-center transition-all duration-200 rounded cursor-pointer focus:outline-none',
    inactive: 'bg-white/10 text-white/80 border border-white/20 hover:bg-white hover:text-black',
    active: 'bg-white text-black border border-white/20 font-medium',
  },
} as const;

export function LanguageSwitcher() {
  // Estado para controlar se o componente está montado no cliente
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  // Garante que o componente só renderize após montar no cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Extrai as propriedades do router com valores padrão
  const locale = router?.locale || 'en';
  const pathname = router?.pathname || '';
  const asPath = router?.asPath || '';

  // Memoiza a função de mudança de idioma
  const handleLanguageChange = useCallback(
    (code: string) => {
      if (code === locale || !router) return;

      // Move query para dentro do callback para evitar o warning
      const query = router.query || {};
      router.push({ pathname, query }, asPath, { locale: code });
    },
    [pathname, asPath, locale, router],
  );

  // Label do idioma atual
  const currentLanguageLabel = useMemo(
    () => LOCALES.find((l) => l.code === locale)?.label || 'Language',
    [locale],
  );

  // Renderiza apenas o botão durante o SSR para evitar incompatibilidades
  if (!isMounted) {
    return (
      <button aria-label="Selecionar idioma" className={CLASSES.trigger} disabled>
        <Globe size={20} />
      </button>
    );
  }

  // Renderização completa após montar no cliente
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={`Idioma atual: ${currentLanguageLabel}. Clique para alterar`}
        className={CLASSES.trigger}
      >
        <Globe size={20} />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center" className={CLASSES.content} sideOffset={8}>
        {LOCALES.map(({ code, label }) => {
          const isSelected = locale === code;

          return (
            <DropdownMenuItem
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={`
                ${CLASSES.menuItem.base}
                ${isSelected ? CLASSES.menuItem.active : CLASSES.menuItem.inactive}
              `}
              onSelect={(e) => {
                if (isSelected) e.preventDefault();
              }}
            >
              {label}
              {isSelected && <span className="sr-only"> (idioma atual)</span>}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
