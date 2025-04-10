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
      className={`fixed ${position === "top" ? "top-0" : "bottom-0"} left-0 right-0 p-4 bg-black opacity-85 flex items-center z-20`}
    >
      {position === "top" ? (
        <div className="relative w-full flex justify-between items-center">
          <div className="flex-1"></div>
          <Link
            href="/"
            className="text-xl font-bold"
            style={{ color: "#ffffff" }}
          >
            SONIC reTREATS
          </Link>
          <div className="flex-1 flex justify-end">
            <div className="flex gap-4">
              <Link
                href="/#section-6"
                className="text-base"
                style={{ color: "#ffffff" }}
              >
                Retreats
              </Link>
              <a
                href="mailto:info@sonicretreats.com"
                className="text-base"
                style={{ color: "#ffffff" }}
              >
                Enquire
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-between items-center">
          <div className="flex-1 flex justify-start">
            <div className="text-sm" style={{ color: "#ffffff" }}>
              ALL RIGHTS RESERVED 2025 BRAVE HILLS
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Link href="/">
              <Image
                src="/images/nav-logo.png"
                alt="Navigation Logo"
                width={80}
                height={60}
                className="object-contain"
              />
            </Link>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="text-base"
                style={{ color: "#ffffff" }}
              >
                CONTACT
              </Link>
              <Link
                href="/faq"
                className="text-base"
                style={{ color: "#ffffff" }}
              >
                FAQ
              </Link>
              <Link
                href="/terms"
                className="text-base"
                style={{ color: "#ffffff" }}
              >
                TERMS & CONDITIONS
              </Link>
              <Link
                href="/privacy"
                className="text-base"
                style={{ color: "#ffffff" }}
              >
                PRIVACY
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;