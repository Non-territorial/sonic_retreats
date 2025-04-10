"use client";

import Navbar from "../components/Navbar";
import Video from "../components/Video";
import { useState } from "react";
import Image from "next/image";
import VideoModal from "../components/VideoModal";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlaybackId, setSelectedPlaybackId] = useState("");
  const [selectedVideoTitle, setSelectedVideoTitle] = useState("");

  const retreats = [
    {
      title: "(UN)DISCLOSED",
      location: "Salina, Aeolian Islands, ITALY",
      time: "Fall 2025",
      playbackId: "wfF7RDwo3YXBUYhY178nsOLa01r9iZgsRLA029MaReZeY", // Replace with actual playback ID
    },
    {
      title: "100%BACH",
      location: "Tuscany, ITALY",
      time: "Fall 2025",
      playbackId: "your-playback-id-2", // Replace with actual playback ID
    },
    {
      title: "MAGIC MOUNTAIN",
      location: "Argentario, Tuscany, ITALY",
      time: "Spring 2026",
      playbackId: "FIdVmVeoBG3kNww01V6ngSB02LTDnWsMlnhOdXirIEpMk", // Replace with actual playback ID
    },
    {
      title: "MONASTERO",
      location: "Pantelleria Island, ITALY",
      time: "Spring 2026",
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
      time: "Fall 2026",
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
      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        // Check if the response is JSON before parsing
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          console.error("Failed to submit email:", errorData.error || response.statusText);
        } else {
          console.error("Failed to submit email:", response.statusText);
        }
      }
    } catch (error) {
      console.error("Error submitting email:", error);
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
      <section id="section-1" className="relative h-screen flex items-center text-white bg-black">
        <Navbar position="top" />
        <Video playbackId="PuJJKuIuU6DIsNMHzbcLIiJcJMmLTS4027QO9YkTPXIE" />
        <div className="absolute inset-0 bg-black opacity-10" />
        <Navbar position="bottom" />
      </section>

      {/* Section 2: Locations */}
      <section id="section-2" className="relative h-screen flex items-center justify-center text-white bg-black">
        <Navbar position="top" />
        <Video playbackId="8UqsYaz56iC02EQj7UX902RnZKgd478fBjSXg00FtAvWao" />
        <div className="absolute inset-0 bg-black opacity-10" />
        <div className="relative z-10 text-left max-w-6xl">
          <h1 className="text-5xl mb-4 text-white">LOCATION</h1>
          <p className="text-5xl leading-relaxed text-white">
            A four-day stay amongst friends, <br />
            with a shared context in culture, <br />
            the depths of sound, deep listening, <br />
            gastronomic experiences, and <br />
            unfamiliar settings.
          </p>
        </div>
        <Navbar position="bottom" />
      </section>

      {/* Section 3: Sound */}
      <section id="section-3" className="relative h-screen flex items-center justify-center text-white bg-black">
        <Navbar position="top" />
        <Video playbackId="lbePbk00zcnpS3FEvRYwhWGcWf5mif61aqz5k01u45gAA" />
        <div className="absolute inset-0 bg-black opacity-10" />
        <div className="relative z-10 text-left max-w-6xl ml-30">
          <h2 className="text-5xl mb-4 text-white">SOUND</h2>
          <p className="text-5xl leading-relaxed text-white">
            We collaborate with emerging and <br />
            established composers and artists, <br />
            creating a special library and settings <br />
            sensitive to the location, context, <br />
            pace, and time of year.
          </p>
        </div>
        <Navbar position="bottom" />
      </section>

      {/* Section 4: Gastronomy and Locations */}
      <section id="section-4" className="relative h-screen flex items-center justify-center text-white bg-black">
        <Navbar position="top" />
        <Video playbackId="UPKkxrQH02vRcP1KhtvGpTRFxsfvFzW02DnZfycZScSbc" />
        <div className="absolute inset-0 bg-black opacity-10" />
        <div className="relative z-10 text-left max-w-6xl">
          <h2 className="text-5xl mb-4 text-white">GASTRONOMY</h2>
          <p className="text-5xl leading-relaxed text-white">
            SONIC reTREATS is growing a library  <br />
            of locations and sonic works, <br />
            with gastronomy involving <br />
            equal artistic mastery, <br /> 
            and the intention of finding the <br /> 
            best ingredients, trying not <br /> 
            to destroy them.
          </p>
        </div>
        <Navbar position="bottom" />
      </section>

      {/* Section 5: Collage of Images */}
      <section id="section-5" className="relative h-screen bg-black">
        <Navbar position="top" />
        <Image
          src="/images/collage.png"
          alt="SONIC reTREATS Locations Collage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-5" />
        <div className="relative z-10 text-center text-white flex items-center justify-center h-full">
        </div>
        <Navbar position="bottom" />
      </section>

      <section
        id="section-6"
        className="relative h-screen bg-black flex items-center justify-center"
      >
        <Navbar position="top" />
        <div className="relative z-10 text-left max-w-6xl">
          <div className="text-white">
            <div className="grid grid-cols-[1fr_2fr_1fr] gap-x-12 text-base font-bold mb-4">
              <span>TITLE</span>
              <span>LOCATION</span>
              <span className="text-left">TIME</span>
            </div>
            <div className="space-y-4 text-gray-500 text-base">
              {retreats.map((retreat, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1fr_2fr_1fr] gap-x-12 border-b border-gray-500 pb-2"
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
            <div className="mt-8">
              {submitted ? (
                <p className="text-yellow-600">
                  Thank you! We’ll send the catalog to your email.
                </p>
              ) : (
                <form
                  onSubmit={handleEmailSubmit}
                  className="flex flex-col gap-4 items-center"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="YOUR EMAIL"
                    className="px-4 py-2 border rounded w-full max-w-md bg-black text-white border-gray-500 text-base"
                    required
                  />
                  <button
                    type="submit"
                    className="text-gray-500 text-base underline"
                  >
                    Request SONIC reTREATS Catalog
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <Navbar position="bottom" />
      </section>

      {/* Section 7: Full-Page Section */}
      <section id="section-7" className="relative h-screen flex items-center justify-center text-white bg-black">
        <Navbar position="top" />
        <div className="relative z-10 text-left max-w-6xl">
        <p className="text-5xl leading-relaxed mb-8 text-white">
            The focus is on creating an <br />
            intimate, subtle, and high-quality <br />
            auditory experience, <br />
            enhanced by carefully curated <br />
            aesthetics. This approach <br />
            encourages deep listening and <br />
            sensory immersion, elevating the <br />
            sound into an exhibition.
          </p>
        </div>
        <Navbar position="bottom" />
      </section>

       {/* Section 8: Collage of Images */}
       <section id="section-5" className="relative h-screen bg-black">
        <Navbar position="top" />
        <Image
          src="/images/collage_bis.jpeg"
          alt="SONIC reTREATS Locations Collage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-5" />
        <div className="relative z-10 text-center text-white flex items-center justify-center h-full">
        </div>
        <Navbar position="bottom" />
      </section>

      {/* Section 9: Full-Page Section */}
      <section id="section-8" className="relative h-screen flex items-center justify-center text-white bg-black">
        <Navbar position="top" />
        <div className="relative z-10 text-left max-w-6xl">
          <p className="text-5xl leading-relaxed text-white">
            SONIC reTREATS is a cultural <br />
            hospitality concept, operated by <br />
            Brave Hills
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