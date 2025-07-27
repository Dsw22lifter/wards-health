import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-teal-400">Wards Health</h1>
        <h2 className="text-xl font-light mb-10 text-gray-300">
          Personalized Health Insights. Powered by <span className="text-teal-500">SynAI</span>.
        </h2>
        <p className="text-lg text-gray-400 mb-10">
          A private family dashboard designed to visualize your health data — steps, sleep, heart rate,
          stress and more — securely and intelligently.
        </p>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg inline-block">
          <p className="text-teal-300 font-medium">Coming Soon</p>
          <p className="text-gray-400 text-sm">Launching in 2025 • In partnership with Garmin & SynAI</p>
        </div>
        <footer className="mt-20 text-sm text-gray-600">
          Contact: <a href="mailto:dsw22lifter@gmail.com" className="text-teal-500">dsw22lifter@gmail.com</a><br />
          <Link href="/privacy" className="underline text-gray-400 hover:text-teal-400">Privacy Policy</Link>
        </footer>
      </div>
    </main>
  );
}
