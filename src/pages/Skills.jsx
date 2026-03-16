export default function Skills(){

const skills = {
languages: ["C++","JavaScript","C","Java","PHP","Python"],
frameworks: ["React.js","Node.js","Express.js","Bootstrap","HTML5","CSS3"],
tools: ["MongoDB","MySQL","GitHub","Postman","REST APIs","JWT Auth"],
soft: ["Problem Solving","Team Work","Adaptability","Leadership","DSA","OOP"]
}

return(

<section className="max-w-6xl mx-auto py-16 md:py-20 px-4 md:px-6">

<h2 className="text-3xl md:text-4xl font-bold mb-4">
Skills & Expertise
</h2>

<p className="text-gray-400 mb-10 md:mb-12 max-w-xl text-sm md:text-base">
A toolkit built through projects, courses, and countless hours of practice.
</p>

<div className="grid sm:grid-cols-2 gap-6 md:gap-8">

{/* Languages */}

<div className="bg-gray-900 p-5 md:p-6 rounded-xl border border-purple-700/30">

<h3 className="text-purple-400 mb-4 font-semibold text-sm md:text-base">
&lt;/&gt; LANGUAGES
</h3>

<div className="flex flex-wrap gap-2 md:gap-3">

{skills.languages.map((skill,index)=>(
<span key={index} className="border border-purple-600 text-purple-400 px-3 py-1 rounded-lg text-xs md:text-sm">
{skill}
</span>
))}

</div>

</div>

{/* Frameworks */}

<div className="bg-gray-900 p-5 md:p-6 rounded-xl border border-blue-700/30">

<h3 className="text-blue-400 mb-4 font-semibold text-sm md:text-base">
FRAMEWORKS & LIBRARIES
</h3>

<div className="flex flex-wrap gap-2 md:gap-3">

{skills.frameworks.map((skill,index)=>(
<span key={index} className="border border-blue-500 text-blue-400 px-3 py-1 rounded-lg text-xs md:text-sm">
{skill}
</span>
))}

</div>

</div>

{/* Tools */}

<div className="bg-gray-900 p-5 md:p-6 rounded-xl border border-pink-700/30">

<h3 className="text-pink-400 mb-4 font-semibold text-sm md:text-base">
TOOLS & PLATFORMS
</h3>

<div className="flex flex-wrap gap-2 md:gap-3">

{skills.tools.map((skill,index)=>(
<span key={index} className="border border-pink-500 text-pink-400 px-3 py-1 rounded-lg text-xs md:text-sm">
{skill}
</span>
))}

</div>

</div>

{/* Soft Skills */}

<div className="bg-gray-900 p-5 md:p-6 rounded-xl border border-green-700/30">

<h3 className="text-green-400 mb-4 font-semibold text-sm md:text-base">
SOFT SKILLS
</h3>

<div className="flex flex-wrap gap-2 md:gap-3">

{skills.soft.map((skill,index)=>(
<span key={index} className="border border-green-500 text-green-400 px-3 py-1 rounded-lg text-xs md:text-sm">
{skill}
</span>
))}

</div>

</div>

</div>

</section>

)

}