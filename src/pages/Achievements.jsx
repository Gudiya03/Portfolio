export default function Achievements() {

  const achievements = [
    {
    icon: "💻",
    title: "LeetCode – 200+ Problems Solved",
    description:
      "Solved 200+ DSA problems on LeetCode and maintained a 50+ day batch, showcasing strong consistency and problem-solving skills.",
    date: "March 2026",
  },
    {
    icon: "🟢",
    title: "GeeksForGeeks – 50+ Day batch",
    description:
      "Maintained a 50+ day problem-solving batch on GeeksForGeeks, improving coding consistency and strengthening DSA fundamentals.",
    date: "March 2026",
  },
  {
    icon: "🤖",
    title: "Oracle Certified Professional",
    description:
      "Earned Oracle Cloud Infrastructure 2025 Generative AI certification, demonstrating expertise in AI and cloud technologies.",
    date: "October 2025",
  },
  
  {
    icon: "⚡",
    title: "Binary Blitz Hackathon",
    description:
      "Participated in Binary Blitz Hackathon, demonstrating teamwork, innovation, and real-time problem-solving abilities.",
    date: "June 2025",
  },
  
];

  return (
    <section className="max-w-5xl px-4 py-16 mx-auto text-white md:py-24 md:px-6">

      {/* TITLE */}
      <h2 className="mb-10 text-4xl font-bold text-center">
        Achievements
        <div className="w-20 h-1 mx-auto mt-2 bg-purple-500 rounded"></div>
      </h2>

      {/* LIST */}
      <div className="flex flex-col gap-6">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-[#1a1a28] border border-purple-500/20 rounded-xl px-6 py-5 hover:scale-[1.02] transition duration-300"
          >
            
            {/* LEFT ICON */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#12121e] rounded-full text-xl">
                {item.icon}
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="max-w-xl mt-1 text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>

            {/* DATE */}
            <div className="text-sm text-purple-400 whitespace-nowrap">
              {item.date}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}