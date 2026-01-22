import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Armored & Air armored vehicle rental services. Learn how we protect your data and maintain confidentiality.",
};

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PrivacyContent />;
}

function PrivacyContent() {
  const t = useTranslations("privacy");

  const sections = [
    "informationCollected",
    "howWeUse",
    "dataProtection",
    "informationSharing",
    "cookies",
    "yourRights",
    "retention",
    "contact",
  ] as const;

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
              {(sectionKey === "informationCollected" ||
                sectionKey === "howWeUse" ||
                sectionKey === "informationSharing" ||
                sectionKey === "yourRights") && (
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
