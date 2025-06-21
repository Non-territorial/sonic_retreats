import Navbar from "../../../components/Navbar";
import { getDictionary } from "../dictionaries";

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function FAQPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "se" | "it" | "jp");

  return (
    <div className="relative min-h-screen bg-black opacity-100 text-gray-300 flex flex-col items-center justify-start p-4 sm:p-6 md:p-4 py-16 sm:py-14 md:py-20">
      <Navbar position="top" translations={dict.navbar} />
      <div className="w-full max-w-sm sm:max-w-lg md:max-w-3xl text-left">
        <h2 className="text-lg sm:text-xl md:text-2xl text-left mb-1 sm:mb-2 md:mb-3">
          {dict.faq.what_is_sonic_retreats.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-left text-sm sm:text-base md:text-base">
          {dict.faq.what_is_sonic_retreats.description}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl text-left mb-1 sm:mb-2 md:mb-3">
          {dict.faq.who_is_for.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-left text-sm sm:text-base md:text-base">
          {dict.faq.who_is_for.description}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl text-left mb-1 sm:mb-2 md:mb-3">
          {dict.faq.locations.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-left text-sm sm:text-base md:text-base">
          {dict.faq.locations.description}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl text-left mb-1 sm:mb-2 md:mb-3">
          {dict.faq.how_to_join.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-left text-sm sm:text-base md:text-base">
          {dict.faq.how_to_join.description}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl text-left mb-1 sm:mb-2 md:mb-3">
          {dict.faq.cost.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-left text-sm sm:text-base md:text-base">
          {dict.faq.cost.description}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl text-left mb-1 sm:mb-2 md:mb-3">
          {dict.faq.included.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-left text-sm sm:text-base md:text-base">
          {dict.faq.included.description}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl text-left mb-1 sm:mb-2 md:mb-3">
          {dict.faq.host_own.title}
        </h2>
        <p className="mb-6 sm:mb-7 md:mb-8 text-left text-sm sm:text-base md:text-base">
          {dict.faq.host_own.description}
        </p>
      </div>
      <Navbar position="bottom" translations={dict.navbar} />
    </div>
  );
}

export async function generateStaticParams() {
  return ["en", "se", "it", "jp"].map((lang) => ({ lang }));
}