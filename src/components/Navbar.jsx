export default function Navbar() {

return(

<nav className="fixed top-0 w-full bg-[#0a0a0f]/80 backdrop-blur border-b border-purple-500/20 z-50">

<div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 h-16">

<div className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
PR.
</div>

<div className="flex gap-4 md:gap-8 text-xs md:text-sm text-gray-400 overflow-x-auto scrollbar-hide">

<a href="#home" className="hover:text-purple-400 whitespace-nowrap">Home</a>
<a href="#about" className="hover:text-purple-400 whitespace-nowrap">About</a>
<a href="#resume" className="hover:text-purple-400 whitespace-nowrap">Resume</a>
<a href="#education" className="hover:text-purple-400 whitespace-nowrap">Education</a>
<a href="#skills" className="hover:text-purple-400 whitespace-nowrap">Skills</a>
<a href="#projects" className="hover:text-purple-400 whitespace-nowrap">Projects</a>
<a href="#certifications" className="hover:text-purple-400 whitespace-nowrap">Certifications</a>
<a href="#achievements" className="hover:text-purple-400 whitespace-nowrap">Achievements</a>
<a href="#contact" className="hover:text-purple-400 whitespace-nowrap">Contact</a>

</div>

</div>

</nav>

)

}