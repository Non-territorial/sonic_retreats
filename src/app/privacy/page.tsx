import Navbar from "../../components/Navbar";

export default function PrivacyPage() {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <Navbar position="top" />
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <div className="max-w-3xl text-left">
          <h2 className="text-2xl mb-4">1. Data Collection</h2>
          <p className="mb-4">
            We collect your email address when you sign up for our catalog. This information is used solely to send you event updates.
          </p>
          <h2 className="text-2xl mb-4">2. Data Usage</h2>
          <p className="mb-4">
            Your data will not be shared with third parties without your consent, except as required by law.
          </p>
          {/* Add more privacy policy sections as needed */}
        </div>
        <Navbar position="bottom" />
      </div>
    );
  }