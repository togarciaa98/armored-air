"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Globe } from 'lucide-react';

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'es' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-2 px-3 py-2 text-sm text-silver hover:text-platinum transition-colors border border-slate/50 hover:border-silver"
      aria-label="Change language"
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase text-xs tracking-wider">{locale === 'en' ? 'ES' : 'EN'}</span>
    </button>
  );
}
