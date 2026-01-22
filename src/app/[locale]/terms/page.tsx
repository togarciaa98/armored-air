import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Armored & Air armored vehicle rental services. Review our service agreement, policies, and client responsibilities.",
};

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TermsContent />;
}

function TermsContent() {
  const t = useTranslations("terms");

  const sections = [
    "acceptance",
    "services",
    "reservations",
    "cancellations",
    "clientResponsibilities",
    "liability",
    "confidentiality",
    "insurance",
    "governingLaw",
    "modifications",
    "contact",
  ] as const;

  const sectionsWithItems = [
    "services",
    "reservations",
    "cancellations",
    "clientResponsibilities",
  ];

  return (
    <div className="pt-20 min-h-screen bg-obsidian">
      {/* Hero */}
      <section className="py-20 border-b border-slate/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <span className="inline-block text-xs tracking-[0.4em] text-champagne uppercase mb-4">
            {t("badge")}
          </span>
          <h1 className="text-4xl md:text-5xl font-light text-platinum mb-6">
            {t("title")}
          </h1>
          <p className="text-lg text-silver leading-relaxed">{t("intro")}</p>
          <p className="text-sm text-silver/60 mt-6">
            {t("lastUpdated")}: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
          {sections.map((sectionKey) => (
            <div key={sectionKey} className="border-b border-slate/20 pb-12">
              <h2 className="text-xl font-medium text-platinum mb-4">
                {t(`sections.${sectionKey}.title`)}
              </h2>
              <p className="text-silver leading-relaxed mb-4">
                {t(`sections.${sectionKey}.content`)}
              </p>
              {sectionsWithItems.includes(sectionKey) && (
                <ul className="list-disc list-inside space-y-2 text-silver/80">
                  {(
                    t.raw(`sections.${sectionKey}.items`) as string[]
                  ).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
