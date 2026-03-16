import ProjectCard from "../components/ProjectCard";

export default function Projects(){

return(

<section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-6">

<h2 className="text-3xl md:text-4xl font-bold mb-4">
Projects
</h2>

<p className="text-gray-400 mb-10 md:mb-12 max-w-xl text-sm md:text-base">
Real-world applications built with modern technologies and best practices.
</p>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

<ProjectCard
title="Eco Vision"
date="Dec 2025"
icon="🌱"
desc="AI powered platform converting waste into business ideas and sustainable products."
live="https://swadeshi-waste-ai-final.vercel.app/"
github="https://github.com/princeraj05"
tech={["React","Node.js","MongoDB","AI","REST API"]}
/>

<ProjectCard
title="MySchool Admin Panel"
date="2026"
icon="🏫"
desc="Full stack school management system with student, teacher and admin dashboards."
live="https://myschool-admin-panel.vercel.app/"
github="https://github.com/princeraj05/myschool-admin-panel"
tech={["React","Node.js","MongoDB","JWT","Dashboard"]}
/>

<ProjectCard
title="Email Dashboard"
date="Mar 2025"
icon="📧"
desc="Responsive email management dashboard with authentication and profile system."
github="https://github.com/princeraj05"
tech={["HTML","Tailwind","JavaScript","PHP","MySQL"]}
/>

</div>

</section>

)

}