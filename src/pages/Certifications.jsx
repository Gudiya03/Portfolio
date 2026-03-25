import React from "react";

const certs = [
  {
    img: "/certificates/p6.jpg", // Oracle certificate
    title: "Oracle Cloud Infrastructure 2025 Generative AI Professional",
    issuer: "Oracle University",
    issuerIcon: "🟥",
    date: "Oct 10, 2025",
    credential: null,
  },
  {
    img: "/certificates/p4.jpg",
    title: "C++ Programming & DSA",
    issuer: "CSE Pathshala",
    issuerIcon: "💻",
    date: "Aug 2025",
    credential: null,
  },
  {
    img: "/certificates/p9.jpeg", // Binary Blitz
    title: "Binary Blitz Hackathon Participation",
    issuer: "Binary Blitz",
    issuerIcon: "⚡",
    date: "2025",
    credential: null,
  },
  {
    img: "/certificates/p3.jpg",
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    issuer: "Infosys Springboard",
    issuerIcon: "🏢",
    date: "Aug 13, 2025",
    credential: "https://verify.onwingspan.com",
  },
  

  // 🔥 NEW CERTIFICATES YOU UPLOADED

  
  
  {
    img: "/certificates/p8.png", // CipherSchools
    title: "C Programming Language Training",
    issuer: "CipherSchools",
    issuerIcon: "🎓",
    date: "Jan 2024 – May 2024",
    credential: null,
  },

  {
    img: "/certificates/p7.jpg",
    title: "Python for ML/AI",
    issuer: "CSE Pathshala",
    issuerIcon: "🐍",
    date: "Mar 2024",
    credential: null,
  },
  
  
];

export default function Certifications() {
  return (
    <section className="bg-[#020617] text-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <h2 className="mb-3 text-4xl font-bold">Certifications</h2>
        <p className="max-w-xl mb-12 text-gray-400">
          Verified achievements from industry platforms and institutions.
        </p>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="bg-[#0f172a] border border-gray-700 rounded-xl overflow-hidden hover:scale-105 transition duration-300 flex flex-col"
            >
              
              {/* Image */}
              <div className="bg-white">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="object-contain w-full"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                
                {/* Issuer */}
                <div className="flex items-center gap-2 mb-3">
                  <span>{cert.issuerIcon}</span>
                  <span className="text-xs text-purple-400 uppercase">
                    {cert.issuer}
                  </span>
                </div>

                {/* Title */}
                <h3 className="flex-1 mb-4 text-sm font-semibold">
                  {cert.title}
                </h3>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 text-xs border-t border-gray-700">
                  <span className="text-gray-400">{cert.date}</span>

                  {cert.credential ? (
                    <a
                      href={cert.credential}
                      target="_blank"
                      rel="noreferrer"
                      className="text-purple-400 hover:text-purple-300"
                    >
                      Verify →
                    </a>
                  ) : (
                    <span className="text-gray-500">Internal</span>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}