"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Shield, Lock, Clock } from "lucide-react";
import { SITE_NAME, CONTACT_INFO } from "@/lib/constants";

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');

  const navLinks = [
    { label: tNav('fleet'), href: '/fleet' },
    { label: tNav('pricing'), href: '/pricing' },
    { label: tNav('services'), href: '/services' },
    { label: tNav('worldCup'), href: '/world-cup-2026' },
    { label: tNav('cities'), href: '/cities' },
  ];

  return (
    <footer className="bg-onyx border-t border-slate/30">
      {/* Trust Bar */}
      <div className="border-b border-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4">
              <Shield className="w-5 h-5 text-champagne" />
              <div>
                <p className="text-sm font-medium text-platinum">{t('certifiedProtection')}</p>
                <p className="text-xs text-silver">{t('certifiedProtectionDesc')}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Lock className="w-5 h-5 text-champagne" />
              <div>
                <p className="text-sm font-medium text-platinum">{t('completeDiscretion')}</p>
                <p className="text-xs text-silver">{t('completeDiscretionDesc')}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="w-5 h-5 text-champagne" />
              <div>
                <p className="text-sm font-medium text-platinum">{t('operations24')}</p>
                <p className="text-xs text-silver">{t('operations24Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-light tracking-[0.3em] text-platinum">
                {SITE_NAME.toUpperCase()}
              </span>
            </Link>
            <p className="mt-4 text-sm text-silver leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] text-champagne uppercase mb-6">
              {t('navigation')}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver hover:text-platinum transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] text-champagne uppercase mb-6">
              {t('hostCities')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/cities/mexico-city"
                  className="text-sm text-silver hover:text-platinum transition-colors"
                >
                  Mexico City
                </Link>
              </li>
              <li>
                <Link
                  href="/cities/guadalajara"
                  className="text-sm text-silver hover:text-platinum transition-colors"
                >
                  Guadalajara
                </Link>
              </li>
              <li>
                <Link
                  href="/cities/monterrey"
                  className="text-sm text-silver hover:text-platinum transition-colors"
                >
                  Monterrey
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] text-champagne uppercase mb-6">
              {t('secureContact')}
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-silver">
                <span className="text-platinum">{t('secureLine')}:</span>
                <br />
                {CONTACT_INFO.phone}
              </li>
              <li className="text-sm text-silver">
                <span className="text-platinum">{t('encryptedEmail')}:</span>
                <br />
                {CONTACT_INFO.email}
              </li>
              <li className="text-sm text-silver">
                <span className="text-platinum">{t('responseTime')}:</span>
                <br />
                {t('within')} {CONTACT_INFO.responseTime}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-silver">
              &copy; {new Date().getFullYear()} {SITE_NAME}. {t('allRightsReserved')}.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-xs text-silver hover:text-platinum transition-colors"
              >
                {t('privacyPolicy')}
              </Link>
              <Link
                href="/terms"
                className="text-xs text-silver hover:text-platinum transition-colors"
              >
                {t('termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
