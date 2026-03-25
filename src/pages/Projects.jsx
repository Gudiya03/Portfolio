import ProjectCard from "../components/ProjectCard";

const careerConnectImg = "/images/careerconnect.png";
const finTrackImg = "/images/fintrack.png";
const artConnectImg = "/images/artconnect.png";

export default function Projects() {
  return (
    <section className="px-4 py-16 mx-auto max-w-7xl md:py-24 md:px-6">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">Projects</h2>

      <p className="max-w-xl mb-10 text-sm text-gray-400 md:mb-12 md:text-base">
        Real-world applications built with modern technologies and best
        practices.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">

        <ProjectCard
          title="CareerConnect"
          date="Jan 2026 – Feb 2026"
          icon="💼"
          image={careerConnectImg}
          desc="A full-stack job portal platform connecting job seekers and recruiters with JWT authentication, role-based access control, and scalable REST APIs for job posting, applications, and search."
          live="https://career-connect-vert-kappa.vercel.app/login"
          github="https://github.com/Gudiya03"
          tech={["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"]}
        />

        <ProjectCard
          title="FinTrack Pro"
          date="Oct 2025 – Dec 2025"
          icon="💰"
          image={finTrackImg}
          desc="A smart expense management system to track income, expenses, and budgets with category-based organization, interactive dashboard, data visualization, and advanced filtering."
          live=""
          github="https://github.com/Gudiya03"
          tech={["PHP", "MySQL", "Tailwind CSS", "JavaScript", "REST API"]}
        />

        <ProjectCard
          title="ArtConnect"
          date="Nov 2024 – Dec 2024"
          icon="🎨"
          image={artConnectImg}
          desc="A front-end social media platform inspired by Instagram, enabling users to share and explore visual content with dynamic post creation, feed rendering, and user interaction."
          live=""
          github="https://github.com/Gudiya03"
          tech={["HTML", "CSS", "JavaScript"]}
        />

      </div>
    </section>
  );
}