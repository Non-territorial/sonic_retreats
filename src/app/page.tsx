"use client";

import Navbar from "../components/Navbar";
import Video from "../components/Video";
import { useState } from "react";
import Image from "next/image";
import VideoModal from "../components/VideoModal";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlaybackId, setSelectedPlaybackId] = useState("");
  const [selectedVideoTitle, setSelectedVideoTitle] = useState("");
  const [isLoading] = useState(false);

  const retreats = [
    {
      title: "(UN)DISCLOSED",
      location: "Salina, Aeolian Islands, ITALY",
      time: "Spring/Fall 2026",
      playbackId: "wfF7RDwo3YXBUYhY178nsOLa01r9iZgsRLA029MaReZeY", // Replace with actual playback ID
    },
    {
      title: "MAGIC MOUNTAIN",
      location: "Argentario, Tuscany, ITALY",
      time: "Spring 2027",
      playbackId: "FIdVmVeoBG3kNww01V6ngSB02LTDnWsMlnhOdXirIEpMk", // Replace with actual playback ID
    },
    {
      title: "MONASTERO",
      location: "Pantelleria Island, ITALY",
      time: "Spring 2027",
      playbackId: "uSs6IpKwYW3xl881vP8xHxo7osGbKRAWJPamLPDCkhQ", // Replace with actual playback ID
    },
    {
      title: "SILENCE VENTURES",
      location: "Edsåsdalen, SWEDEN",
      time: "Summer 2026",
      playbackId: "yjz87DkI00uYCuCpRlgUIN01JQeWPh5sPM3Q6WhpSzy2s", // Replace with actual playback ID
    },
    {
      title: "UPCOMING",
      location: "JAPAN",
      time: "Fall 2027",
      playbackId: "uau2HW8LOHyQuc23BGYp64mECwykcIBsPX00ghlpQn9U", // Replace with actual playback ID
    },
  ];

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
  
      console.log("Response status:", response.status); // Debug log
      console.log("Response headers:", response.headers.get("Content-Type")); // Debug log
  
      let data;
      try {
        const text = await response.text(); // Get raw response body
        console.log("Raw response body:", text); // Debug log
        data = JSON.parse(text); // Manually parse JSON
      } catch (jsonError) {
        console.error("Error parsing JSON:", jsonError);
        setError("Invalid response from server");
        return;
      }
  
      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        setError(data.error || "Failed to submit email");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setError("Error submitting email. Please try again.");
    }
  };

  const openModal = (playbackId: string, title: string) => {
    setSelectedPlaybackId(playbackId);
    setSelectedVideoTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlaybackId("");
    setSelectedVideoTitle("");
  };

  return (
    <div className="flex flex-col">
      {/* Section 1: Hero with Background Video */}
      <section id="section-1" className="relative min-h-[90vh] sm:min-h-screen md:min-h-screen flex items-center justify-center text-white bg-black">
  <Navbar position="top" />
  <Video playbackId="RfB9GYZ9KDVAZGx2mKY9IUyBOeDilKj6rWLSjqgYJoA" />
  <div className="absolute inset-0 bg-black opacity-10" />
  <div className="relative z-10 text-left w-full max-w-sm sm:max-w-md md:max-w-6xl px-4 sm:px-6">
    <p className="text-base sm:text-3xl md:text-5xl leading-relaxed md:ml-14 md:leading-relaxed text-white">
    SONIC reTREATS are dedicated to the experience of sound in various architecturally and acoustically interesting locations, contextually accompanied by curated gastronomy.
    </p>
  </div>
  <Navbar position="bottom" />
</section>

      {/* Section 2: Locations */}
      <section id="section-2" className="relative min-h-[90vh] sm:min-h-screen md:min-h-screen flex items-center justify-center text-white bg-black">
  <Navbar position="top" />
  <Video playbackId="8UqsYaz56iC02EQj7UX902RnZKgd478fBjSXg00FtAvWao" />
  <div className="absolute inset-0 bg-black opacity-10" />
  <div className="relative z-10 text-left w-full max-w-sm sm:max-w-md md:max-w-6xl px-4 sm:px-6">
    <h1 className="text-base sm:text-3xl md:text-5xl md:ml-14 mb-2 sm:mb-3 md:mb-4 text-white">LOCATION</h1>
    <p className="text-base sm:text-3xl md:text-5xl leading-relaxed md:leading-relaxed md:ml-14 text-white">
      A four-day stay amongst strangers or friends, but definitely sharing interest in culture, the aesthetics of sound, deep listening, gastronomic experiences and unfamiliar settings.
    </p>
  </div>
  <Navbar position="bottom" />
</section>

      {/* Section 3: Sound */}
      <section id="section-3" className="relative min-h-[90vh] sm:min-h-screen md:min-h-screen flex items-center justify-center text-white bg-black">
  <Navbar position="top" />
  <Video playbackId="lbePbk00zcnpS3FEvRYwhWGcWf5mif61aqz5k01u45gAA" />
  <div className="absolute inset-0 bg-black opacity-10" />
  <div className="relative z-10 text-left w-full max-w-sm sm:max-w-md md:max-w-6xl px-4 sm:px-6">
    <h2 className="text-base sm:text-3xl md:text-5xl mb-2 sm:mb-3 md:mb-4 md:ml-14 text-white">SOUND</h2>
    <p className="text-base sm:text-3xl md:text-5xl leading-relaxed md:leading-relaxed md:ml-14 text-white">
      We collaborate with emerging and established composers and artists, creating a special library and settings sensitive to the location, context, place, and time of year.
    </p>
  </div>
  <Navbar position="bottom" />
</section>

      {/* Section 4: Gastronomy and Locations */}
      <section id="section-4" className="relative min-h-[90vh] sm:min-h-screen md:min-h-screen flex items-center justify-center text-white bg-black">
  <Navbar position="top" />
  <Video playbackId="UPKkxrQH02vRcP1KhtvGpTRFxsfvFzW02DnZfycZScSbc" />
  <div className="absolute inset-0 bg-black opacity-10" />
  <div className="relative z-10 text-left w-full max-w-sm sm:max-w-md md:max-w-6xl px-4 sm:px-6">
    <h2 className="text-base sm:text-3xl md:text-5xl md:ml-14 mb-2 sm:mb-3 md:mb-4 text-white">GASTRONOMY</h2>
    <p className="text-base sm:text-3xl md:text-5xl leading-relaxed md:leading-relaxed md:ml-14 text-white">
      SONIC reTREATS is a growing library of locations and sonic works, with gastronomy involving equal artistic mastery, and the intention of finding the best ingredients, trying not to destroy them.
    </p>
  </div>
  <Navbar position="bottom" />
</section>

      {/* Section 5: Collage of Images */}
      <section id="section-5" className="relative min-h-[90vh] sm:min-h-screen md:min-h-screen bg-black">
  <Navbar position="top" />
  <Image
    src="/images/collage.png"
    alt="SONIC reTREATS Locations Collage"
    fill
    className="object-contain sm:object-contain md:object-cover"
    priority
  />
  <div className="absolute inset-0 bg-black opacity-5" />
  <div className="relative z-10 text-center text-white flex items-center justify-center h-full">
  </div>
  <Navbar position="bottom" />
</section>

<section
  id="section-6"
  className="relative min-h-screen bg-black flex items-center justify-center"
>
  <Navbar position="top" />
  <div className="relative z-10 text-left w-full max-w-sm sm:max-w-md md:max-w-6xl px-4 sm:px-6">
    <div className="text-white">
      <div className="grid grid-cols-3 gap-x-4 sm:gap-x-8 md:gap-x-12 text-xs sm:text-sm md:text-base font-bold mb-2 sm:mb-3 md:mb-4">
        <span>TITLE</span>
        <span>LOCATION</span>
        <span className="text-left">TIME</span>
      </div>
      <div className="space-y-2 sm:space-y-3 md:space-y-4 text-gray-500 text-xs sm:text-sm md:text-base">
        {retreats.map((retreat, index) => (
          <div
            key={index}
            className="grid grid-cols-3 gap-x-4 sm:gap-x-8 md:gap-x-12 border-b border-gray-500 pb-1 sm:pb-2"
          >
            <button
              onClick={() => openModal(retreat.playbackId, retreat.title)}
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
            Thank you! We’ll send the catalog to your email.
          </p>
        ) : (
          <form onSubmit={handleEmailSubmit} className="flex flex-col gap-2 sm:gap-3 md:gap-4 items-center">
            {error && <p className="text-red-500 text-xs sm:text-sm md:text-base">{error}</p>}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR EMAIL"
              className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 border rounded w-full max-w-xs sm:max-w-sm md:max-w-md bg-black text-white border-gray-500 text-xs sm:text-sm md:text-base"
              required
            />
            <button
              type="submit"
              className="text-gray-500 text-xs sm:text-sm md:text-base underline"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Request SONIC reTREATS Catalog"}
            </button>
          </form>
        )}
      </div>
    </div>
  </div>
  <Navbar position="bottom" />
</section>

      {/* Section 7: Full-Page Section */}
      <section id="section-7" className="relative min-h-[90vh] sm:min-h-screen md:min-h-screen flex items-center justify-center text-white bg-black">
  <Navbar position="top" />
  <div className="relative z-10 text-left w-full max-w-sm sm:max-w-md md:max-w-6xl px-4 sm:px-6">
    <p className="text-base sm:text-3xl md:text-5xl leading-relaxed md:leading-relaxed md:ml-14 mb-4 sm:mb-6 md:mb-8 text-white">
      The focus is on creating an intimate, subtle, and high-quality auditory experience, enhanced by carefully curated aesthetics. This approach encourages deep listening and sensory immersion, elevating the sound into an exhibition.
    </p>
  </div>
  <Navbar position="bottom" />
</section>

       {/* Section 8: Collage of Images */}
       <section id="section-8" className="relative min-h-[90vh] sm:min-h-screen md:min-h-screen bg-black">
  <Navbar position="top" />
  <Image
    src="/images/collage_bis.jpeg"
    alt="SONIC reTREATS Locations Collage"
    fill
    className="object-contain sm:object-contain md:object-cover"
    priority
  />
  <div className="absolute inset-0 bg-black opacity-5" />
  <div className="relative z-10 text-center text-white flex items-center justify-center h-full">
  </div>
  <Navbar position="bottom" />
</section>

      {/* Section 9: Full-Page Section */}
      <section id="section-8" className="relative min-h-[90vh] sm:min-h-screen md:min-h-screen flex items-center justify-center text-white bg-black">
  <Navbar position="top" />
  <div className="relative z-10 text-left w-full max-w-sm sm:max-w-md md:max-w-6xl px-4 sm:px-6">
    <p className="text-base sm:text-3xl md:text-5xl leading-relaxed md:leading-relaxed md:ml-14 text-white">
      SONIC reTREATS is a cultural hospitality concept, operated by Brave Hills
    </p>
  </div>
  <Navbar position="bottom" />
</section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        playbackId={selectedPlaybackId}
        videoTitle={selectedVideoTitle}
      />
    </div>
  );
}