export const locales = ['pt', 'en', 'es', 'fr'] as const;
export const defaultLocale = 'pt';

export type Locale = (typeof locales)[number];
