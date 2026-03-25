export default function Education() {

    const education = [
        {
            title: "B.Tech – Computer Science & Engineering",
            school: "Lovely Professional University, Phagwara, Punjab",
            year: "Aug 2023 – Present",
            score: "CGPA: 7.92"
        },
        {
            title: "Intermediate (Class XII) – PCM",
            school: "T.P. Verma College, Patna, Bihar",
            year: "Apr 2022 – Mar 2023",
            score: "Percentage: 72%"
        },
        {
            title: "Matriculation (Class X)",
            school: "G Intnl Sch Bhikanpura Ramdayalu, Patna, Bihar",
            year: "Apr 2020 – Mar 2021",
            score: "Percentage: 79.2%"
        }
    ];

    return (

        <section className="max-w-6xl px-4 py-16 mx-auto md:py-20 md:px-6">

            <h2 className="mb-10 text-3xl font-bold md:text-4xl md:mb-12">
                Education
            </h2>

            <div className="relative border-l border-purple-500">

                {education.map((item, index) => (

                    <div key={index} className="mb-10 ml-6">

                        <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-600 rounded-full -left-3"></span>

                        <div className="p-5 transition bg-gray-900 shadow-lg md:p-6 rounded-xl hover:shadow-purple-500/20">

                            <h3 className="text-base font-semibold md:text-lg">
                                {item.title}
                            </h3>

                            <p className="mt-1 text-sm text-purple-400">
                                {item.school}
                            </p>

                            <p className="mt-2 text-sm text-gray-400">
                                {item.year}
                            </p>

                            <p className="mt-1 text-sm text-purple-400">
                                {item.score}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    )

}