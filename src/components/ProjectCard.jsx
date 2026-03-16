export default function ProjectCard({
title,
desc,
github,
live,
tech,
icon,
date
}) {

return (

<div className="bg-[#1a1a28] border border-purple-500/20 rounded-xl p-6 hover:-translate-y-2 transition duration-300 shadow-lg">

<div className="flex justify-between items-start mb-4">

<div className="text-2xl">{icon}</div>

<div className="flex gap-2">

{live && (
<a
href={live}
target="_blank"
className="border border-purple-500/30 p-2 rounded hover:text-purple-400"
>
<i className="fas fa-external-link-alt"></i>
</a>
)}

{github && (
<a
href={github}
target="_blank"
className="border border-purple-500/30 p-2 rounded hover:text-purple-400"
>
<i className="fab fa-github"></i>
</a>
)}

</div>

</div>


<h3 className="text-lg font-semibold mb-1">
{title}
</h3>

<p className="text-purple-400 text-xs mb-3">
{date}
</p>

<p className="text-gray-400 text-sm mb-4 leading-relaxed">
{desc}
</p>

<div className="flex flex-wrap gap-2">

{tech.map((t,i)=>(
<span
key={i}
className="text-xs bg-purple-500/10 border border-purple-500/20 px-2 py-1 rounded"
>
{t}
</span>
))}

</div>

</div>

);

}