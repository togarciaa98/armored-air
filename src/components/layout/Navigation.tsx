"use client";

import { useState, useEffect } from "react";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('navigation');

  const navLinks = [
    { label: t('fleet'), href: '/fleet' },
    { label: t('pricing'), href: '/pricing' },
    { label: t('services'), href: '/services' },
    { label: t('worldCup'), href: '/world-cup-2026' },
    { label: t('cities'), href: '/cities' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-obsidian/95 backdrop-blur-md border-b border-slate/30"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-light tracking-[0.3em] text-platinum group-hover:text-champagne transition-colors">
              {SITE_NAME.toUpperCase()}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-light tracking-widest text-silver hover:text-platinum transition-colors uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button & Language Switcher */}
          <div className="hidden lg:flex items-center space-x-4">
            <LocaleSwitcher />
            <Link href="/contact">
              <Button variant="outline" size="sm">
                {t('requestQuote')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-platinum hover:text-champagne transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-20 bg-obsidian/98 backdrop-blur-lg transition-all duration-300 z-40",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-light tracking-[0.2em] text-platinum hover:text-champagne transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-8 border-t border-slate/30 w-48 space-y-4">
            <div className="flex justify-center">
              <LocaleSwitcher />
            </div>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="primary" size="lg" className="w-full">
                {t('requestQuote')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
