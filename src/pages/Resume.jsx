import { useState } from "react";
import { FaDownload, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const tabs = ["Education", "Skills", "Projects", "Training", "Certifications", "Achievements"];

const content = {
  Education: [
    {
      type: "UNIVERSITY",
      title: "Bachelor of Technology — CSE",
      org: "Lovely Professional University, Phagwara, Punjab",
      date: "Aug 2023 – Present",
      points: [
        "CGPA: 7.92 | Computer Science & Engineering",
        "Focused on full-stack development, DSA, and system design.",
        "Actively building real-world projects and strengthening problem-solving skills.",
      ],
    },
    {
      type: "INTERMEDIATE",
      title: "PCM — Science Stream",
      org: "T.P. Verma College, Patna, Bihar",
      date: "Apr 2022 – Mar 2023",
      points: ["Percentage: 72%"],
    },
    {
      type: "MATRICULATION",
      title: "High School",
      org: "G Intnl Sch Bhikanpura Ramdayalu, Patna, Bihar",
      date: "Apr 2020 – Mar 2021",
      points: ["Percentage: 79.2%"],
    },
  ],
  Skills: [
    {
      type: "LANGUAGES",
      title: "Programming Languages",
      org: "",
      date: "",
      points: ["C++", "JavaScript", "C", "Java"],
    },
    {
      type: "FRAMEWORKS",
      title: "Frameworks & Libraries",
      org: "",
      date: "",
      points: ["React", "Node.js", "Express", "Laravel", "Bootstrap", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      type: "TOOLS",
      title: "Tools & Platforms",
      org: "",
      date: "",
      points: ["MongoDB", "MySQL", "Git", "GitHub", "Postman"],
    },
    {
      type: "SOFT SKILLS",
      title: "Soft Skills",
      org: "",
      date: "",
      points: ["Critical Thinking", "Team Work", "Adaptability", "Leadership"],
    },
  ],
  Projects: [
    {
      type: "MERN STACK · LIVE",
      title: "CareerConnect",
      org: "React · Node.js · Express · MongoDB",
      date: "Jan 2026 – Feb 2026",
      points: [
        "Built a full-stack job portal platform connecting job seekers and recruiters, successfully deployed for real-world use.",
        "Implemented secure JWT authentication and role-based access control with scalable REST APIs for job posting, applications, and search.",
        "Strengthened expertise in full-stack development, CRUD operations, responsive UI/UX design, and backend–database integration.",
      ],
    },
    {
      type: "FULL STACK",
      title: "FinTrack Pro",
      org: "PHP · MySQL · Tailwind CSS · JavaScript",
      date: "Oct 2025 – Dec 2025",
      points: [
        "Developed a full-stack smart expense management system to track income, expenses, and budgets with category-based organization.",
        "Designed and implemented secure authentication and RESTful APIs enabling expense CRUD operations and efficient data handling.",
        "Engineered an interactive dashboard with data visualization, advanced filtering, and responsive UI/UX.",
      ],
    },
    {
      type: "FRONTEND",
      title: "ArtConnect",
      org: "HTML · CSS · JavaScript",
      date: "Nov 2024 – Dec 2024",
      points: [
        "Conceptualized a front-end social media platform inspired by Instagram for sharing and exploring visual content.",
        "Executed dynamic features for post creation, feed rendering, and user interaction.",
        "Refined skills in responsive UI/UX design, DOM manipulation, and interactive front-end development.",
      ],
    },
  ],
  Training: [
    {
      type: "TRAINING",
      title: "C++ Programming: OOPs / DSA",
      org: "CSE Pathshala",
      date: "Jun 2025 – Jul 2025",
      points: [
        "Mastered Object-Oriented Programming (OOP) and Data Structures & Algorithms (DSA) by solving diverse problem sets in C++.",
        "Implemented fundamental data structures including Arrays, Linked Lists, Stacks, Queues, and Trees.",
        "Optimized problem-solving through advanced topics like Sorting Algorithms, Recursion, and Dynamic Programming (DP).",
      ],
    },
  ],
  Certifications: [
    {
      type: "ORACLE",
      title: "Generative AI Professional",
      org: "Oracle Certified Professional",
      date: "Oct 2025",
      points: ["Industry-recognized certification in Generative AI principles and applications."],
    },
    {
      type: "CSE PATHSHALA",
      title: "C++ Programming: OOPs and DSA",
      org: "CSE Pathshala",
      date: "Jul 2025",
      points: ["Certified in OOP and DSA through rigorous problem-solving and implementation in C++."],
    },
    {
      type: "FREECODECAMP",
      title: "Responsive Web Design",
      org: "freeCodeCamp",
      date: "Jan 2025",
      points: ["Certified in building responsive, accessible web layouts using modern HTML & CSS techniques."],
    },
    {
      type: "CSE PATHSHALA",
      title: "Basic Python towards ML/AI",
      org: "CSE Pathshala",
      date: "Mar 2024",
      points: ["Foundational Python programming with an introduction to machine learning and AI concepts."],
    },
  ],
  Achievements: [
    {
      type: "COMPETITIVE",
      title: "200+ DSA Problems Solved",
      org: "LeetCode & HackerRank",
      date: "",
      points: ["Consistently practiced algorithms and data structures across platforms, improving problem-solving skills."],
    },
    {
      type: "NPTEL",
      title: "Elite — NPTEL Cloud Computing",
      org: "NPTEL",
      date: "",
      points: ["Achieved Elite badge in NPTEL Cloud Computing with coding badges, showcasing strong technical proficiency."],
    },
  ],
};

export default function Resume() {
  const [activeTab, setActiveTab] = useState("Education");

  return (
    <section
      id="resume"
      className="min-h-screen bg-[#0a0a0f] text-white pt-24 md:pt-28 pb-20 relative overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-700/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-700/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl px-4 mx-auto md:px-6">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <p className="text-purple-400 font-mono text-xs tracking-[0.3em] uppercase mb-2"></p>
          <h1 className="text-4xl font-bold md:text-5xl">
            My{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Resume
            </span>
          </h1>
          <div className="w-20 h-px mt-3 bg-gradient-to-r from-purple-500 to-transparent" />
        </div>

        {/* Resume Card */}
        <div className="bg-[#0e0e1a] border border-purple-500/15 rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20">

          {/* Contact Bar */}
          <div className="px-6 md:px-10 py-4 border-b border-purple-500/10 bg-[#11111f] flex flex-wrap items-center gap-3 md:gap-6">
            <span className="text-base font-bold tracking-tight text-white md:text-lg">Gudiya Kumari</span>
            <div className="flex flex-wrap gap-3 ml-auto text-[11px] text-gray-400">
              <a href="mailto:kumarigudiyaa03@gmail.com" className="flex items-center gap-1.5 hover:text-purple-400 transition">
                <FaEnvelope className="text-purple-400" /> kumarigudiyaa03@gmail.com
              </a>
              <a href="tel:+919905961088" className="flex items-center gap-1.5 hover:text-purple-400 transition">
                <FaPhone className="text-purple-400" /> +91 9905961088
              </a>
              <a href="https://www.linkedin.com/in/gudiya-kumari-a06b18291/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-purple-400 transition">
                <FaLinkedin className="text-purple-400" /> LinkedIn
              </a>
              <a href="https://github.com/Gudiya03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-purple-400 transition">
                <FaGithub className="text-purple-400" /> GitHub
              </a>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-1 px-6 pt-5 border-b md:px-10 md:gap-2 border-purple-500/10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-t-lg text-xs md:text-sm font-medium transition-all duration-200 border-b-2 -mb-px ${
                  activeTab === tab
                    ? "border-purple-500 text-white bg-purple-500/10"
                    : "border-transparent text-gray-500 hover:text-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="px-6 md:px-10 py-8 space-y-4 min-h-[380px]">
            {content[activeTab].map((item, i) => (
              <div
                key={i}
                className="border border-purple-500/10 rounded-xl p-5 md:p-6 bg-white/[0.02] hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex flex-col gap-1 mb-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 tracking-widest uppercase">
                      {item.type}
                    </span>
                    <h3 className="text-white font-semibold text-sm md:text-base mt-0.5">
                      {item.title}
                    </h3>
                    {item.org && (
                      <p className="text-gray-500 text-xs mt-0.5">{item.org}</p>
                    )}
                  </div>
                  {item.date && (
                    <span className="mt-1 font-mono text-xs text-gray-500 shrink-0">{item.date}</span>
                  )}
                </div>
                <ul className="space-y-1.5">
                  {item.points.map((pt, j) => (
                    <li key={j} className="flex gap-2 text-xs text-gray-400 md:text-sm">
                      <span className="text-purple-500 mt-[3px] shrink-0">▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer — Resume image preview + download */}
          <div className="px-6 md:px-10 py-8 border-t border-purple-500/10 bg-[#11111f]">
            <div className="flex flex-col items-center gap-8 md:flex-row">

              {/* Mini resume preview */}
              <div className="relative group shrink-0">
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-purple-500/40 to-pink-500/20 blur-[2px] opacity-70 group-hover:opacity-100 transition duration-500" />
                <div className="relative bg-[#0a0a0f] rounded-xl overflow-hidden border border-purple-500/10 w-[140px] md:w-[160px]">
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-[#14141f] border-b border-purple-500/10">
                    <span className="w-2 h-2 rounded-full bg-red-500/60" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <span className="w-2 h-2 rounded-full bg-green-500/60" />
                  </div>
                  <img
                    src="/resume.jpg"
                    alt="Gudiya Kumari Resume"
                    className="object-cover w-full"
                  />
                </div>
              </div>

              {/* Text + button */}
              <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
                <div>
                  <p className="text-base font-semibold text-white">Want the full picture?</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Download my resume to see the complete details of my experience, projects, and skills.
                  </p>
                </div>
                <a
                  href="/GudiyaKumariResume.pdf"
                  download
                  className="flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 hover:shadow-[0_0_28px_rgba(168,85,247,0.4)] transition-all duration-300 font-semibold text-sm"
                >
                  <FaDownload className="text-xs" />
                  Download Resume
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}