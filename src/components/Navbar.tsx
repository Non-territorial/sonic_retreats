"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  position: "top" | "bottom";
  translations: {
    retreats: string;
    enquire: string;
    contact: string;
    faq: string;
    terms: string;
    privacy: string;
  };
}

const locales = ["en", "se", "it", "jp"];

const Navbar: React.FC<NavbarProps> = ({ position, translations }) => {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <nav
      className={`fixed ${position === "top" ? "top-0" : "bottom-0"} left-0 right-0 p-2 sm:p-3 md:p-2 bg-black opacity-85 flex items-center z-20`}
    >
      {position === "top" ? (
        <div className="relative w-full flex justify-between items-center">
          <div className="flex-1"></div>
          <Link
            href="/en"
            className="text-base sm:text-lg md:text-xl"
            style={{ color: "#ffffff" }}
          >
            SONIC reTREATS
          </Link>
          <div className="flex-1 flex justify-end">
            <div className="flex flex-row gap-1 sm:gap-2 md:gap-4">
              {locales.map((locale) => (
                <Link
                  key={locale}
                  href={`/${locale}${pathname.replace(`/${currentLocale}`, "")}`}
                  className={`${currentLocale === locale ? "font-bold" : ""} text-blue-600 hover:underline text-[10px] sm:text-sm md:text-base`}
                >
                  {locale.toUpperCase()}
                </Link>
              ))}
              <a
                href="mailto:info@sonicretreats.net"
                className="hidden md:inline text-[10px] sm:text-sm md:text-base"
                style={{ color: "#ffffff" }}
              >
                {translations.enquire}
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex-1 flex justify-start">
            <div className="text-[10px] sm:text-xs md:text-xs" style={{ color: '#ffffff' }}>
              © 2025 SONIC reTREATS AB
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/nav-logo.png"
              alt="Navigation Logo"
              width={50}
              height={38}
              className="object-contain sm:w-[60px] sm:h-[45px] md:w-[60px] md:h-[45px]"
            />
          </div>
          <div className="flex-1 flex justify-end">
            <div className="flex flex-row gap-1 sm:gap-2 md:gap-3">
              <a
                href="mailto:info@sonicretreats.net"
                className="text-[10px] sm:text-xs md:text-sm"
                style={{ color: "#ffffff" }}
              >
                {translations.contact}
              </a>
              <Link
                href={`/${currentLocale}/faq`}
                className="text-[10px] sm:text-xs md:text-sm"
                style={{ color: "#ffffff" }}
              >
                {translations.faq}
              </Link>
              <Link
                href={`/${currentLocale}/terms`}
                className="text-[10px] sm:text-xs md:text-sm"
                style={{ color: "#ffffff" }}
              >
                {translations.terms}
              </Link>
              <Link
                href={`/${currentLocale}/privacy`}
                className="text-[10px] sm:text-xs md:text-sm"
                style={{ color: "#ffffff" }}
              >
                {translations.privacy}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;