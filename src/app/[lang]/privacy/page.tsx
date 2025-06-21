import Navbar from "../../../components/Navbar";
import { getDictionary } from "../dictionaries";

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function PrivacyPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "se" | "it" | "jp");

  return (
    <div className="relative min-h-screen bg-black opacity-100 text-gray-300 flex flex-col items-center justify-start p-4 sm:p-6 md:p-4 py-16 sm:py-14 md:py-20">
      <Navbar position="top" translations={dict.navbar} />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
        {dict.privacy.title}
      </h1>
      <div className="w-full max-w-sm sm:max-w-lg md:max-w-3xl text-left">
        <p className="mb-1 sm:mb-2 md:mb-3 text-sm sm:text-base md:text-base">
          {dict.privacy.last_updated}
        </p>
        <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-base">
          {dict.privacy.intro}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3">
          {dict.privacy.collect.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-base">
          {dict.privacy.collect.description}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3">
          {dict.privacy.use.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-base">
          {dict.privacy.use.description}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3">
          {dict.privacy.sharing.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-base">
          {dict.privacy.sharing.description}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3">
          {dict.privacy.rights.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-base">
          {dict.privacy.rights.description}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3">
          {dict.privacy.security.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-base">
          {dict.privacy.security.description}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3">
          {dict.privacy.cookies.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-base">
          {dict.privacy.cookies.description}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3">
          {dict.privacy.changes.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-base">
          {dict.privacy.changes.description}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3">
          {dict.privacy.contact.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-base">
          {dict.privacy.contact.description}
        </p>
      </div>
      <Navbar position="bottom" translations={dict.navbar} />
    </div>
  );
}

export async function generateStaticParams() {
  return ["en", "se", "it", "jp"].map((lang) => ({ lang }));
}