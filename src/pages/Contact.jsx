export default function Contact(){

return(

<section className="px-4 py-16 mx-auto max-w-7xl md:py-24 md:px-6">

<h2 className="mb-4 text-3xl font-bold md:text-4xl">
Contact Me
</h2>

<p className="max-w-xl mb-12 text-sm text-gray-400 md:mb-16 md:text-base">
I'm currently looking for new opportunities. Whether you have a
question or just want to say hi — my inbox is always open!
</p>

<div className="grid gap-10 md:grid-cols-2 md:gap-16">

{/* LEFT SIDE */}

<div className="space-y-8">

<div className="flex items-center gap-4 pb-6 border-b border-purple-500/10">
<div className="flex items-center justify-center w-12 h-12 text-lg text-purple-400 rounded-lg bg-purple-500/10">
<i className="fas fa-envelope"></i>
</div>

<div>
<p className="text-sm text-gray-400">Email</p>
<a href="mailto:kumarigudiyaa03@gmail.com" className="text-purple-400">
kumarigudiyaa03@gmail.com
</a>
</div>
</div>


<div className="flex items-center gap-4 pb-6 border-b border-purple-500/10">
<div className="flex items-center justify-center w-12 h-12 text-lg text-purple-400 rounded-lg bg-purple-500/10">
<i className="fas fa-phone"></i>
</div>

<div>
<p className="text-sm text-gray-400">Phone</p>
<p className="text-purple-400">
+91 9905961088
</p>
</div>
</div>


<div className="flex items-center gap-4 pb-6 border-b border-purple-500/10">
<div className="flex items-center justify-center w-12 h-12 text-lg text-purple-400 rounded-lg bg-purple-500/10">
<i className="fab fa-linkedin-in"></i>
</div>

<div>
<p className="text-sm text-gray-400">LinkedIn</p>

<a
href="https://www.linkedin.com/in/gudiya-kumari-a06b18291/"
target="_blank"
className="text-purple-400"
>

linkedin.com/in/gudiya-kumari-a06b18291

</a>

</div>

</div>


<div className="flex items-center gap-4 pb-6 border-b border-purple-500/10">

<div className="flex items-center justify-center w-12 h-12 text-lg text-purple-400 rounded-lg bg-purple-500/10">
<i className="fab fa-github"></i>
</div>

<div>
<p className="text-sm text-gray-400">GitHub</p>

<a
href="https://github.com/Gudiya03"
target="_blank"
className="text-purple-400"
>

github.com/Gudiya03

</a>

</div>

</div>


<div className="flex items-center gap-4">

<div className="flex items-center justify-center w-12 h-12 text-lg text-purple-400 rounded-lg bg-purple-500/10">
<i className="fas fa-map-marker-alt"></i>
</div>

<div>
<p className="text-sm text-gray-400">Location</p>
<p>Phagwara, Punjab, India (Originally from Bihar)</p>
</div>

</div>

</div>


{/* RIGHT FORM */}

<form className="space-y-6">

<div className="grid gap-4 sm:grid-cols-2">

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
placeholder="Hi Gudiya, I'd love to connect..."
className="w-full bg-[#1a1a28] border border-purple-500/20 rounded-lg p-3 outline-none h-36"
/>


<button
className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 rounded-lg font-semibold hover:scale-[1.02] transition"
>

<i className="mr-2 fas fa-paper-plane"></i>
Send Message

</button>

</form>

</div>

</section>

)

}