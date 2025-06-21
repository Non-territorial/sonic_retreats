"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const locales = ["en", "se", "it", "jp"];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  return (
    <div className="flex gap-4">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${pathname.replace(`/${currentLocale}`, "")}`}
          className={`${currentLocale === locale ? "font-bold" : ""} text-blue-600 hover:underline`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}