import Navbar from "../../components/Navbar";

export default function TermsPage() {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
         <Navbar position="top" />
        <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
        <div className="max-w-3xl text-left">
          <h2 className="text-2xl mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to SONIC reTREATS. By using our website and services, you agree to these Terms & Conditions.
          </p>
          <h2 className="text-2xl mb-4">2. Event Participation</h2>
          <p className="mb-4">
            Participation in our events requires prior registration and adherence to our event guidelines.
          </p>
          {/* Add more T&C sections as needed */}
        </div>
        <Navbar position="bottom" />
      </div>
    );
  }

