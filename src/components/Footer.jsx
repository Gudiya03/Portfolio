export default function Footer(){

return(

<footer className="bg-[#0a0a0f] border-t border-purple-500/20 py-12 text-center px-4">

<h2 className="mb-4 text-lg font-bold text-transparent md:text-xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
Gudiya Kumari
</h2>

<div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-gray-400 md:gap-6">

<a href="#home" className="hover:text-purple-400">Home</a>
<a href="#about" className="hover:text-purple-400">About</a>
<a href="#projects" className="hover:text-purple-400">Projects</a>
<a href="#contact" className="hover:text-purple-400">Contact</a>

</div>

<div className="flex justify-center gap-4 mb-6">

<a
href="https://www.linkedin.com/in/gudiya-kumari-a06b18291/"
target="_blank"
className="p-3 border rounded-lg border-purple-500/20 hover:text-purple-400"
>
LinkedIn
</a>

<a
href="https://github.com/Gudiya03"
target="_blank"
className="p-3 border rounded-lg border-purple-500/20 hover:text-purple-400"
>
GitHub
</a>

</div>

<p className="text-xs text-gray-500 md:text-sm">
© 2026 Gudiya Kumari • Built with React
</p>

</footer>

)

}