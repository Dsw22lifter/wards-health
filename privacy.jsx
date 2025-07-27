pages/privacy.jsx
import React from "react";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-6">Privacy Policy</h1>
        <p className="text-gray-300 mb-4">
          Wards Health is a private, family-focused health dashboard powered by SynAI. This site is
          intended for personal use only and is not designed for public or commercial distribution.
        </p>
        <p className="text-gray-300 mb-4">
          We collect and display wellness data such as step count, heart rate, stress levels, and
          sleep duration, sourced directly from Garmin devices via the Garmin Health API.
        </p>
        <p className="text-gray-300 mb-4">
          No data is shared, sold, or disclosed to third parties. All data is encrypted, stored securely, and
          used solely for visualization within the Wards Health private dashboard.
        </p>
        <p className="text-gray-300 mb-4">
          If you have any questions or concerns, contact us at{" "}
          <a href="mailto:dsw22lifter@gmail.com" className="text-teal-400 underline">
            dsw22lifter@gmail.com
          </a>.
        </p>
      </div>
    </main>
  );
}
Add privacy policy page
