"use client";

import Navbar from "./Navbar";
import Video from "./Video";
import Image from "next/image";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlaybackId, setSelectedPlaybackId] = useState("");
  const [selectedVideoTitle, setSelectedVideoTitle] = useState("");
  const [selectedVideoDescription, setSelectedVideoDescription] = useState("");


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

    </div>
  );
}