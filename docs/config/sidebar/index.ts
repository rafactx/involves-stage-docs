import en from './en';
import es from './es';
import fr from './fr';
import pt from './pt';

const sidebars = { pt, en, es, fr };

export const generateSidebarForLanguage = (lang: string) => {
  return sidebars[lang] || sidebars.pt;
};
