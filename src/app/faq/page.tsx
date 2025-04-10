import Navbar from "../../components/Navbar";

export default function FAQPage() {
    return (
        
      <div className="min-h-screen bg-black opacity-100 text-white flex flex-col items-center justify-center p-4">
         <Navbar position="top" />
        <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <div className="max-w-3xl text-left">
          <h2 className="text-2xl mb-4">What is SONIC reTREATS?</h2>
          <p className="mb-4">
            SONIC reTREATS is dedicated to the experience of sound in various interesting locations across Italy, combining architectural, acoustical, and gastronomic experiences.
          </p>
          <h2 className="text-2xl mb-4">How can I join an event?</h2>
          <p className="mb-4">
            You can join an event by signing up through our email form on the homepage. We’ll send you a catalog with upcoming events and details.
          </p>
          {/* Add more FAQ items as needed */}
        </div>
        <Navbar position="bottom" />
      </div>
    );
  }