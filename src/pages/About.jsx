import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-purple-400 shrink-0" />,
      label: "Phagwara, Punjab (Originally from Bihar)",
      href: "https://maps.google.com/?q=Phagwara,Punjab",
    },
    {
      icon: <FaEnvelope className="text-purple-400 shrink-0" />,
      label: "kumarigudiyaa03@gmail.com",
      href: "mailto:kumarigudiyaa03@gmail.com",
    },
    {
      icon: <FaPhone className="text-purple-400 shrink-0" />,
      label: "+91 9905961088",
      href: "tel:+919905961088",
    },
    {
      icon: <FaGithub className="text-purple-400 shrink-0" />,
      label: "github.com/Gudiya03",
      href: "https://github.com/Gudiya03",
    },
    {
      icon: <FaLinkedin className="text-purple-400 shrink-0" />,
      label: "linkedin.com/in/gudiya-kumari-a06b18291",
      href: "https://www.linkedin.com/in/gudiya-kumari-a06b18291/",
    },
  ];

  return (
    <section className="grid items-center gap-12 px-4 py-16 mx-auto max-w-7xl md:px-6 md:py-24 md:grid-cols-2">

      {/* LEFT SIDE */}
      <div>
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl md:mb-8">
          About Me
        </h2>

        <p className="mb-6 text-sm text-gray-400 md:text-base">
          Hi! I'm <span className="font-semibold text-purple-400">Gudiya Kumari</span>,
          a B.Tech Computer Science student at
          <span className="font-semibold text-purple-400"> Lovely Professional University</span>.
          I'm passionate about building modern and scalable full-stack web applications.
        </p>

        <p className="mb-6 text-sm text-gray-400 md:text-base">
          I specialize in the <span className="font-semibold text-purple-400">MERN Stack</span>
          (MongoDB, Express, React, Node.js) and enjoy creating elegant user interfaces
          along with efficient backend systems.
        </p>

        <p className="mb-8 text-sm text-gray-400 md:text-base">
          Apart from development, I actively practice
          <span className="font-semibold text-purple-400"> Data Structures & Algorithms</span>
          and have solved <span className="font-semibold text-purple-400">200+ problems</span>
          on platforms like LeetCode and HackerRank to strengthen my problem-solving skills.
        </p>

        {/* CONTACT INFO — all clickable */}
        <div className="space-y-3 text-sm md:text-base">
          {contactInfo.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 text-gray-400 transition-colors duration-200 hover:text-purple-400 group"
            >
              <span className="transition-transform duration-200 group-hover:scale-110">
                {item.icon}
              </span>
              <span className="group-hover:underline underline-offset-2">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE STATS */}
      <div className="grid grid-cols-2 gap-4 md:gap-6">

        <div className="bg-[#14141f] border border-purple-500/20 p-6 md:p-8 rounded-xl text-center hover:border-purple-500 transition">
          <h3 className="text-2xl font-bold text-purple-400 md:text-3xl">3+</h3>
          <p className="text-sm text-gray-400 md:text-base">Projects Built</p>
        </div>

        <div className="bg-[#14141f] border border-purple-500/20 p-6 md:p-8 rounded-xl text-center hover:border-purple-500 transition">
          <h3 className="text-2xl font-bold text-purple-400 md:text-3xl">200+</h3>
          <p className="text-sm text-gray-400 md:text-base">Problems Solved</p>
        </div>

        <div className="bg-[#14141f] border border-purple-500/20 p-6 md:p-8 rounded-xl text-center hover:border-purple-500 transition">
          <h3 className="text-2xl font-bold text-purple-400 md:text-3xl">4+</h3>
          <p className="text-sm text-gray-400 md:text-base">Certifications</p>
        </div>

        <div className="bg-[#14141f] border border-purple-500/20 p-6 md:p-8 rounded-xl text-center hover:border-purple-500 transition">
          <h3 className="text-2xl font-bold text-purple-400 md:text-3xl">7.92</h3>
          <p className="text-sm text-gray-400 md:text-base">CGPA (B.Tech)</p>
        </div>

        {/* RESUME BUTTON */}
        <div className="flex justify-center col-span-2 mt-4">
          <a
            href="#resume"
            className="px-6 py-3 text-sm text-white transition rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 md:px-8 hover:scale-105 md:text-base"
          >
            📄 View Resume
          </a>
        </div>

      </div>
    </section>
  );
}