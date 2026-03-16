export default function Contact(){

return(

<section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-6">

<h2 className="text-3xl md:text-4xl font-bold mb-4">
Contact Me
</h2>

<p className="text-gray-400 max-w-xl mb-12 md:mb-16 text-sm md:text-base">
I'm currently looking for new opportunities. Whether you have a
question or just want to say hi — my inbox is always open!
</p>

<div className="grid md:grid-cols-2 gap-10 md:gap-16">

{/* LEFT SIDE */}

<div className="space-y-8">

<div className="flex items-center gap-4 border-b border-purple-500/10 pb-6">
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 text-lg">
<i className="fas fa-envelope"></i>
</div>

<div>
<p className="text-gray-400 text-sm">Email</p>
<a href="mailto:princerajmne@gmail.com" className="text-purple-400">
princerajmne@gmail.com
</a>
</div>
</div>


<div className="flex items-center gap-4 border-b border-purple-500/10 pb-6">
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 text-lg">
<i className="fas fa-phone"></i>
</div>

<div>
<p className="text-gray-400 text-sm">Phone</p>
<p className="text-purple-400">
+91 7479845306
</p>
</div>
</div>


<div className="flex items-center gap-4 border-b border-purple-500/10 pb-6">
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 text-lg">
<i className="fab fa-linkedin-in"></i>
</div>

<div>
<p className="text-gray-400 text-sm">LinkedIn</p>

<a
href="https://www.linkedin.com/in/princeraj7479/"
target="_blank"
className="text-purple-400"
>

linkedin.com/in/princeraj7479/

</a>

</div>

</div>


<div className="flex items-center gap-4 border-b border-purple-500/10 pb-6">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 text-lg">
<i className="fab fa-github"></i>
</div>

<div>
<p className="text-gray-400 text-sm">GitHub</p>

<a
href="https://github.com/princeraj05"
target="_blank"
className="text-purple-400"
>

github.com/princeraj05

</a>

</div>

</div>


<div className="flex items-center gap-4">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 text-lg">
<i className="fas fa-map-marker-alt"></i>
</div>

<div>
<p className="text-gray-400 text-sm">Location</p>
<p>Phagwara, Punjab, India</p>
</div>

</div>

</div>


{/* RIGHT FORM */}

<form className="space-y-6">

<div className="grid sm:grid-cols-2 gap-4">

<input
type="text"
placeholder="Your Name"
className="bg-[#1a1a28] border border-purple-500/20 rounded-lg p-3 outline-none w-full"
/>

<input
type="email"
placeholder="xyz@gmail.com"
className="bg-[#1a1a28] border border-purple-500/20 rounded-lg p-3 outline-none w-full"
/>

</div>

<input
type="text"
placeholder="Job Opportunity / Collaboration"
className="w-full bg-[#1a1a28] border border-purple-500/20 rounded-lg p-3 outline-none"
/>


<textarea
placeholder="Hi Prince, I'd love to connect..."
className="w-full bg-[#1a1a28] border border-purple-500/20 rounded-lg p-3 outline-none h-36"
/>


<button
className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 rounded-lg font-semibold hover:scale-[1.02] transition"
>

<i className="fas fa-paper-plane mr-2"></i>
Send Message

</button>

</form>

</div>

</section>

)

}