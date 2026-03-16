export default function Achievements(){

return(

<section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-6">

<h2 className="text-3xl md:text-4xl font-bold mb-4">
Achievements
</h2>

<p className="text-gray-400 mb-12 md:mb-14 max-w-xl text-sm md:text-base">
Highlights from my academic and coding journey so far.
</p>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

<div className="bg-[#1a1a28] border border-purple-500/20 rounded-xl p-6 md:p-8 text-center hover:-translate-y-2 transition">

<div className="text-3xl md:text-4xl mb-4">
🏅
</div>

<h3 className="font-semibold text-lg mb-2">
200+ Coding Problems
</h3>

<p className="text-gray-400 text-sm leading-relaxed">
Solved 200+ Data Structures & Algorithms problems on
LeetCode and HackerRank, improving consistency and
problem-solving skills.
</p>

</div>


<div className="bg-[#1a1a28] border border-purple-500/20 rounded-xl p-6 md:p-8 text-center hover:-translate-y-2 transition">

<div className="text-3xl md:text-4xl mb-4">
🥇
</div>

<h3 className="font-semibold text-lg mb-2">
Code-A-Haunt Hackathon
</h3>

<p className="text-gray-400 text-sm leading-relaxed">
Qualified Round 2 of the Code-A-Haunt 24-hour Hackathon
organized by CodingBlocks, competing with developers
nationwide.
</p>

</div>


<div className="bg-[#1a1a28] border border-purple-500/20 rounded-xl p-6 md:p-8 text-center hover:-translate-y-2 transition">

<div className="text-3xl md:text-4xl mb-4">
🎓
</div>

<h3 className="font-semibold text-lg mb-2">
Oracle AI Certified
</h3>

<p className="text-gray-400 text-sm leading-relaxed">
Earned Oracle's Generative AI Professional certification,
demonstrating expertise in modern AI technologies
and applications.
</p>

</div>

</div>

</section>

)

}