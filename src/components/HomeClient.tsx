"use client";

import Navbar from "./Navbar";
import Video from "./Video";
import { useState } from "react";
import Image from "next/image";
import VideoModal from "./VideoModal";

interface Retreat {
  title: string;
  location: string;
  time: string;
  playbackId: string;
  description: string;
}

interface Dictionary {
  homepage: {
    section1: { description: string };
    section2: { title: string; description: string };
    section3: { title: string; description: string };
    section4: { title: string; description: string };
    section5: { image_alt: string };
    section6: {
      title_label: string;
      location_label: string;
      time_label: string;
      retreats: Retreat[];
      form: {
        placeholder: string;
        button: string;
        submitting: string;
        success: string;
        error: string;
        invalid_response: string;
      };
    };
    section7: { description: string };
    section8: { image_alt: string };
    section9: { description: string };
  };
}

interface NavbarTranslations {
  retreats: string;
  enquire: string;
  contact: string;
  faq: string;
  terms: string;
  privacy: string;
}

interface HomeClientProps {
  retreats: Retreat[];
  dict: Dictionary;
  navbarTranslations: NavbarTranslations;
}

export default function HomeClient({ retreats, dict, navbarTranslations }: HomeClientProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlaybackId, setSelectedPlaybackId] = useState("");
  const [selectedVideoTitle, setSelectedVideoTitle] = useState("");
  const [selectedVideoDescription, setSelectedVideoDescription] = useState("");
  const [isLoading] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      let data;
      try {
        const text = await response.text();
        data = JSON.parse(text);
      } catch (jsonError) {
        console.error("Error parsing JSON:", jsonError);
        setError(dict.homepage.section6.form.invalid_response);
        return;
      }

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        setError(data.error || dict.homepage.section6.form.error);
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setError(dict.homepage.section6.form.error);
    }
  };

  const openModal = (playbackId: string, title: string, description: string) => {
    setSelectedPlaybackId(playbackId);
    setSelectedVideoTitle(title);
    setSelectedVideoDescription(description);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlaybackId("");
    setSelectedVideoTitle("");
    setSelectedVideoDescription("");
  };

  return (
    <div className="flex flex-col">
      {/* Section 1: Hero with Background Video */}
      <section
        id="section-1"
        className="relative min-h-[90vh] sm:min-h-screen md:min-h-screen flex items-center justify-center text-white bg-black"
      >
        <Navbar position="top" translations={navbarTranslations} />
        <Video playbackId="RfB9GYZ9KDVAZGx2mKY9IUyBOeDilKj6rWLSjqgYJoA" />
        <div className="absolute inset-0 bg-black opacity-10" />
        <div className="relative z-10 text-left w-full max-w-sm sm:max-w-md md:max-w-6xl px-4 sm:px-6">
          <p className="text-base sm:text-3xl md:text-5xl leading-relaxed md:ml-14 md:leading-relaxed text-white">
            {dict.homepage.section1.description}
          </p>
        </div>
        <Navbar position="bottom" translations={navbarTranslations} />
      </section>

      {/* Section 2: Locations */}
      <section
        id="section-2"
        className="relative min-h-[90vh] sm:min-h-screen md:min-h-screen flex items-center justify-center text-white bg-black"
      >
        <Navbar position="top" translations={navbarTranslations} />
        <Video playbackId="8UqsYaz56iC02EQj7UX902RnZKgd478fBjSXg00FtAvWao" />
        <div className="absolute inset-0 bg-black opacity-10" />
        <div className="relative z-10 text-left w-full max-w-sm sm:max-w-md md:max-w-6xl px-4 sm:px-6">
          <h1 className="text-base sm:text-3xl md:text-5xl md:ml-14 mb-2 sm:mb-3 md:mb-4 text-white">
            {dict.homepage.section2.title}
          </h1>
          <p className="text-base sm:text-3xl md:text-5xl leading-relaxed md:leading-relaxed md:ml-14 text-white">
            {dict.homepage.section2.description}
          </p>
        </div>
        <Navbar position="bottom" translations={navbarTranslations} />
      </section>

      {/* Section 3: Sound */}
      <section
        id="section-3"
        className="relative min-h-[90vh] sm:min-h-screen md:min-h-screen flex items-center justify-center text-white bg-black"
      >
        <Navbar position="top" translations={navbarTranslations} />
        <Video playbackId="lbePbk00zcnpS3FEvRYwhWGcWf5mif61aqz5k01u45gAA" />
        <div className="absolute inset-0 bg-black opacity-10" />
        <div className="relative z-10 text-left w-full max-w-sm sm:max-w-md md:max-w-6xl px-4 sm:px-6">
          <h2 className="text-base sm:text-3xl md:text-5xl mb-2 sm:mb-3 md:mb-4 md:ml-14 text-white">
            {dict.homepage.section3.title}
          </h2>
          <p className="text-base sm:text-3xl md:text-5xl leading-relaxed md:leading-relaxed md:ml-14 text-white">
            {dict.homepage.section3.description}
          </p>
        </div>
        <Navbar position="bottom" translations={navbarTranslations} />
      </section>

      {/* Section 4: Gastronomy */}
      <section
        id="section-4"
        className="relative min-h-[90vh] sm:min-h-screen md:min-h-screen flex items-center justify-center text-white bg-black"
      >
        <Navbar position="top" translations={navbarTranslations} />
        <Video playbackId="UPKkxrQH02vRcP1KhtvGpTRFxsfvFzW02DnZfycZScSbc" />
        <div className="absolute inset-0 bg-black opacity-10" />
        <div className="relative z-10 text-left w-full max-w-sm sm:max-w-md md:max-w-6xl px-4 sm:px-6">
          <h2 className="text-base sm:text-3xl md:text-5xl md:ml-14 mb-2 sm:mb-3 md:mb-4 text-white">
            {dict.homepage.section4.title}
          </h2>
          <p className="text-base sm:text-3xl md:text-5xl leading-relaxed md:leading-relaxed md:ml-14 text-white">
            {dict.homepage.section4.description}
          </p>
        </div>
        <Navbar position="bottom" translations={navbarTranslations} />
      </section>

      {/* Section 5: Collage of Images */}
      <section id="section-5" className="relative min-h-[90vh] sm:min-h-screen md:min-h-screen bg-black">
        <Navbar position="top" translations={navbarTranslations} />
        <Image
          src="/images/collage.png"
          alt={dict.homepage.section5.image_alt}
          fill
          className="object-contain sm:object-contain md:object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-5" />
        <div className="relative z-10 text-center text-white flex items-center justify-center h-full"></div>
        <Navbar position="bottom" translations={navbarTranslations} />
      </section>

      {/* Section 6: Retreats List and Form */}
      <section id="section-6" className="relative min-h-screen bg-black flex items-center justify-center">
        <Navbar position="top" translations={navbarTranslations} />
        <div className="relative z-10 text-left w-full max-w-sm sm:max-w-md md:max-w-6xl px-4 sm:px-6">
          <div className="text-white">
            <div className="grid grid-cols-3 gap-x-4 sm:gap-x-8 md:gap-x-12 text-xs sm:text-sm md:text-base font-bold mb-2 sm:mb-3 md:mb-4">
              <span>{dict.homepage.section6.title_label}</span>
              <span>{dict.homepage.section6.location_label}</span>
              <span className="text-left">{dict.homepage.section6.time_label}</span>
            </div>
            <div className="space-y-2 sm:space-y-3 md:space-y-4 text-gray-500 text-xs sm:text-sm md:text-base">
              {retreats.map((retreat, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-x-4 sm:gap-x-8 md:gap-x-12 border-b border-gray-500 pb-1 sm:pb-2"
                >
                  <button
                    onClick={() => openModal(retreat.playbackId, retreat.title, retreat.description)}
                    className="text-left text-gray-500 hover:text-gray-400"
                  >
                    {retreat.title}
                  </button>
                  <span>{retreat.location}</span>
                  <span className="text-left">{retreat.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 sm:mt-6 md:mt-8">
              {submitted ? (
                <p className="text-yellow-600 text-xs sm:text-sm md:text-base">
                  {dict.homepage.section6.form.success}
                </p>
              ) : (
                <form
                  onSubmit={handleEmailSubmit}
                  className="flex flex-col gap-2 sm:gap-3 md:gap-4 items-center"
                >
                  {error && <p className="text-red-500 text-xs sm:text-sm md:text-base">{error}</p>}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={dict.homepage.section6.form.placeholder}
                    className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 border rounded w-full max-w-xs sm:max-w-sm md:max-w-md bg-black text-white border-gray-500 text-xs sm:text-sm md:text-base"
                    required
                  />
                  <button
                    type="submit"
                    className="text-gray-500 text-xs sm:text-sm md:text-base underline"
                    disabled={isLoading}
                  >
                    {isLoading
                      ? dict.homepage.section6.form.submitting
                      : dict.homepage.section6.form.button}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <Navbar position="bottom" translations={navbarTranslations} />
      </section>

      {/* Section 7: Full-Page Section */}
      <section
        id="section-7"
        className="relative min-h-[90vh] sm:min-h-screen md:min-h-screen flex items-center justify-center text-white bg-black"
      >
        <Navbar position="top" translations={navbarTranslations} />
        <div className="relative z-10 text-left w-full max-w-sm sm:max-w-md md:max-w-6xl px-4 sm:px-6">
          <p className="text-base sm:text-3xl md:text-5xl leading-relaxed md:leading-relaxed md:ml-14 mb-4 sm:mb-6 md:mb-8 text-white">
            {dict.homepage.section7.description}
          </p>
        </div>
        <Navbar position="bottom" translations={navbarTranslations} />
      </section>

      {/* Section 8: Collage of Images */}
      <section id="section-8" className="relative min-h-[90vh] sm:min-h-screen md:min-h-screen bg-black">
        <Navbar position="top" translations={navbarTranslations} />
        <Image
          src="/images/collage_bis.jpeg"
          alt={dict.homepage.section8.image_alt}
          fill
          className="object-contain sm:object-contain md:object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-5" />
        <div className="relative z-10 text-center text-white flex items-center justify-center h-full"></div>
        <Navbar position="bottom" translations={navbarTranslations} />
      </section>

      {/* Section 9: Full-Page Section */}
      <section
        id="section-9"
        className="relative min-h-[90vh] sm:min-h-screen md:min-h-screen flex items-center justify-center text-white bg-black"
      >
        <Navbar position="top" translations={navbarTranslations} />
        <div className="relative z-10 text-left w-full max-w-sm sm:max-w-md md:max-w-6xl px-4 sm:px-6">
          <p className="text-base sm:text-3xl md:text-5xl leading-relaxed md:leading-relaxed md:ml-14 text-white">
            {dict.homepage.section9.description}
          </p>
        </div>
        <Navbar position="bottom" translations={navbarTranslations} />
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        playbackId={selectedPlaybackId}
        videoTitle={selectedVideoTitle}
        videoDescription={selectedVideoDescription}
      />
    </div>
  );
}