"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Navbar: React.FC<{ position: "top" | "bottom" }> = ({ position }) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router]);

  return (
    <nav
      className={`fixed ${position === "top" ? "top-0" : "bottom-0"} left-0 right-0 p-2 sm:p-3 md:p-2 bg-black opacity-85 flex items-center z-20`}
    >
      {position === "top" ? (
        <div className="relative w-full flex justify-between items-center">
          <div className="flex-1"></div>
          <Link
            href="/"
            className="text-base sm:text-lg md:text-xl font-bold"
            style={{ color: "#ffffff" }}
          >
            SONIC reTREATS
          </Link>
          <div className="flex-1 flex justify-end">
            <div className="hidden md:flex gap-1 sm:gap-2 md:gap-4">
              <Link
                href="/#section-6"
                className="text-xs sm:text-sm md:text-base"
                style={{ color: "#ffffff" }}
              >
                Retreats
              </Link>
              <a
                href="mailto:info@sonicretreats.net"
                className="text-xs sm:text-sm md:text-base"
                style={{ color: "#ffffff" }}
              >
                Enquire
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex-1 flex justify-start">
            <div className="text-[10px] sm:text-xs md:text-xs" style={{ color: "#ffffff" }}>
              © 2025 BRAVE HILLS
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Link href="/">
              <Image
                src="/images/nav-logo.png"
                alt="Navigation Logo"
                width={50}
                height={38}
                className="object-contain sm:w-[60px] sm:h-[45px] md:w-[60px] md:h-[45px]"
              />
            </Link>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="flex flex-row gap-1 sm:gap-2 md:gap-3">
              <Link
                href="mailto:info@sonicretreats.net"
                className="text-[10px] sm:text-xs md:text-sm"
                style={{ color: "#ffffff" }}
              >
                CONTACT
              </Link>
              <Link
                href="/faq"
                className="text-[10px] sm:text-xs md:text-sm"
                style={{ color: "#ffffff" }}
              >
                FAQ
              </Link>
              <Link
                href="/terms"
                className="text-[10px] sm:text-xs md:text-sm"
                style={{ color: "#ffffff" }}
              >
                T&C
              </Link>
              <Link
                href="/privacy"
                className="text-[10px] sm:text-xs md:text-sm"
                style={{ color: "#ffffff" }}
              >
                PP
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;