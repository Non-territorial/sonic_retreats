import Navbar from "../../../components/Navbar";
import { getDictionary } from "../dictionaries";

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function TermsPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "se" | "it" | "jp");

  return (
    <div className="relative min-h-screen bg-black opacity-100 text-gray-300 flex flex-col items-center justify-start p-4 sm:p-6 md:p-4 py-16 sm:py-14 md:py-20">
      <Navbar position="top" translations={dict.navbar} />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6">
        {dict.terms.title}
      </h1>
      <div className="w-full max-w-sm sm:max-w-lg md:max-w-3xl text-left">
        <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-base">
          {dict.terms.intro}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3">
          {dict.terms.purpose.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-base">
          {dict.terms.purpose.description}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3">
          {dict.terms.eligibility.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-base">
          {dict.terms.eligibility.description}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3">
          {dict.terms.use.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-base">
          {dict.terms.use.description}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3">
          {dict.terms.email_privacy.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-base">
          {dict.terms.email_privacy.description}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3">
          {dict.terms.intellectual_property.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-base">
          {dict.terms.intellectual_property.description}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3">
          {dict.terms.governing_law.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-base">
          {dict.terms.governing_law.description}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3">
          {dict.terms.contact.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-base">
          {dict.terms.contact.description}
        </p>
      </div>
      <Navbar position="bottom" translations={dict.navbar} />
    </div>
  );
}

export async function generateStaticParams() {
  return ["en", "se", "it", "jp"].map((lang) => ({ lang }));
}