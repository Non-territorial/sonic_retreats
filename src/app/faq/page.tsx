import Navbar from "../../components/Navbar";

export default function FAQPage() {
    return (
        
      <div className="relative min-h-screen bg-black opacity-100 text-gray-300 flex flex-col items-center justify-start p-4 sm:p-6 md:p-4 py-16 sm:py-14 md:py-20">
  <Navbar position="top" />
  <div className="w-full max-w-sm sm:max-w-lg md:max-w-3xl text-left">
    <h2 className="text-lg sm:text-xl md:text-2xl text-left mb-1 sm:mb-2 md:mb-3">What is SONIC reTREATS?</h2>
    <p className="mb-6 sm:mb-7 md:mb-8 text-left text-sm sm:text-base md:text-base">
      SONIC reTREATS are dedicated to the experience of sound in various interesting locations across Italy, combining architectural, acoustical, and gastronomic experiences.
    </p>
    <h2 className="text-lg sm:text-xl md:text-2xl text-left mb-1 sm:mb-2 md:mb-3">Who is this for?</h2>
    <p className="mb-6 sm:mb-7 md:mb-8 text-left text-sm sm:text-base md:text-base">
      For the curious traveler interested in culture, to someone adventurous, and open to new things.
    </p>
    <h2 className="text-lg sm:text-xl md:text-2xl text-left mb-1 sm:mb-2 md:mb-3">What about locations?</h2>
    <p className="mb-6 sm:mb-7 md:mb-8 text-left text-sm sm:text-base md:text-base">
      We curate locations where we can host SONIC reTREAT experiences, mostly remote villas, mountain houses, distributed locations over the Islands, surrounded by nature.

      The qualities of locations that inspire us, are spacious locations that can host from 10 to 30 people. The actual location matters the most. Followed by architecture, acoustics, and the combination of those details.

      Sometimes it’s a humble mountain house, sometimes it’s a contemporary villa on the seaside, ex-monastery, or resort of some kind. What matters, is the character of the place, and its transformative qualities.
    </p>
    <h2 className="text-lg sm:text-xl md:text-2xl text-left mb-1 sm:mb-2 md:mb-3">How can I join an event?</h2>
    <p className="mb-6 sm:mb-7 md:mb-8 text-left text-sm sm:text-base md:text-base">
      You can join an event by signing up through our email form on the homepage. We’ll send you a catalog with upcoming events and details.
    </p>
    <h2 className="text-lg sm:text-xl md:text-2xl text-left mb-1 sm:mb-2 md:mb-3">How much cost to participate?</h2>
    <p className="mb-6 sm:mb-7 md:mb-8 text-left text-sm sm:text-base md:text-base">
      Depending on the location, the range of ticket prices goes from 2,500 to 5,000 EUR pp.
    </p>
    <h2 className="text-lg sm:text-xl md:text-2xl text-left mb-1 sm:mb-2 md:mb-3">What is included?</h2>
    <p className="mb-6 sm:mb-7 md:mb-8 text-left text-sm sm:text-base md:text-base">
      Accommodation
      Sonic Installations
      Listening Sessions
      Coastal Eno-Gastronomy
      Infinite Bar
      Cultural Excursions
    </p>
    <h2 className="text-lg sm:text-xl md:text-2xl text-left mb-1 sm:mb-2 md:mb-3">Can I host a SONIC reTREAT in my own property?</h2>
    <p className="mb-6 sm:mb-7 md:mb-8 text-left text-sm sm:text-base md:text-base">
      Yes, please submit your location for potential collaboration.
    </p>
  </div>
  <Navbar position="bottom" />
</div>
    );
  }