"use client"; // Ensure that you have the client component setup correctly
'clientModules'

export default function About() {
    return ( 
        <>
        
            <div className="hidden md:block">
                <div className="border-2 border-orange-50 mr-36 ml-36 p-11 mt-20 animate-fadeInRight">
                    <h1 className="text-4xl text-center font-bold  bg-white text-black">About Me</h1>
                    <p className="text-center text-xl mt-10">
                        I am Noor ul Sehar, a dedicated educator currently pursuing a Bachelor's degree in Education from Federal Urdu University. With a passion for teaching and a commitment to continuous learning, I aim to inspire students to reach their full potential. Alongside my studies, I am actively enhancing my skills in artificial intelligence, reflecting my interest in integrating technology into education.
                    </p>
                    <p className="text-center text-xl mt-5"> 
                        My teaching experience includes working as a Prep Class Teacher at Allied School and providing tutoring services in various subjects. I believe in fostering a supportive and engaging learning environment, where creativity and critical thinking thrive.
                    </p>
                    <p className="text-center text-xl mt-5">
                        In addition to education, I am enthusiastic about exploring new technologies and their applications in the learning process. Through this portfolio, I aim to showcase my projects, share insights, and connect with like-minded individuals who share a passion for education and innovation.
                    </p>
                </div>
            </div>

            <div className="lg:hidden md:hidden border-2 border-orange-50 animate-fadeInRight">
                <h1 className="text-4xl text-center font-bold mt-6  bg-white  text-gray-700">About Me</h1>
                <p className="mr-3 ml-3 text-center text-xl mt-10">
                    I am Noor ul Sehar, a dedicated educator currently pursuing a Bachelor's degree in Education from Federal Urdu University. With a passion for teaching and a commitment to continuous learning, I aim to inspire students to reach their full potential. Alongside my studies, I am actively enhancing my skills in artificial intelligence, reflecting my interest in integrating technology into education.
                </p>
                <p className="mr-3 ml-3 text-center text-xl mt-5"> 
                    My teaching experience includes working as a Prep Class Teacher at Allied School and providing tutoring services in various subjects. I believe in fostering a supportive and engaging learning environment, where creativity and critical thinking thrive.
                </p>
                <p className="mr-3 ml-3 text-center text-xl mt-5 mb-10">
                    In addition to education, I am enthusiastic about exploring new technologies and their applications in the learning process. Through this portfolio, I aim to showcase my projects, share insights, and connect with like-minded individuals who share a passion for education and innovation.
                </p>
            </div>

            {/* Skills  Desktop */}
            <div className="text-center mb-32 border-2 border-orange-50 mr-36 ml-36 p-11 mt-20 hidden md:block animate-fadeInLeft">
                <h2 className="text-4xl font-semibold mb-8 bg-white text-black">Skills</h2>
                <div className="space-y-4 w-1/2 mx-auto mb-8">
                    <SkillBar title="Communication" percentage="85" color="bg-green-500" />
                    <SkillBar title="Teaching" percentage="90" color="bg-blue-500" />
                    <SkillBar title="Basic Computer Knowledge" percentage="75" color="bg-orange-500" />
                    <SkillBar title="Voice Quality" percentage="80" color="bg-purple-500" />
                    <SkillBar title="HTML" percentage="70" color="bg-orange-600" />
                    <SkillBar title="CSS" percentage="65" color="bg-blue-700" />
                    <SkillBar title="TypeScript" percentage="60" color="bg-blue-500" />
                    <SkillBar title="Next.js" percentage="70" color="bg-gray-800" />
                </div>
                <div className="flex flex-col items-center mt-8 ">
    <h3 className="text-xl font-semibold mb-4 border-orange animate-bounce">
        If you want to Hire me Explore my resume as well
    </h3>
    <a 
        href="https://resume-six-rose.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block bg-[#B8001F] text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-200 animate-pulse"
    >
        Download My CV
    </a>
</div>

            </div>

            {/* Skills  Mobile */}
            <div className="text-center mb-32 border-2 border-orange-50 mr-8 ml-8 p-11 mt-20 lg:hidden md:hidden animate-fadeInLeft">
                <h2 className="text-4xl font-semibold mb-8 bg-white text-black">Skills</h2>
                <div className="space-y-4 w-full mx-auto mb-8">
                    <SkillBar title="Communication" percentage="85" color="bg-green-500" />
                    <SkillBar title="Teaching" percentage="90" color="bg-blue-500" />
                    <SkillBar title="Basic Computer Knowledge" percentage="75" color="bg-orange-500" />
                    <SkillBar title="Voice Quality" percentage="80" color="bg-purple-500" />
                    <SkillBar title="HTML" percentage="70" color="bg-orange-600" />
                    <SkillBar title="CSS" percentage="65" color="bg-blue-700" />
                    <SkillBar title="TypeScript" percentage="60" color="bg-blue-500" />
                    <SkillBar title="Next.js" percentage="70" color="bg-gray-800" />
                </div>
                
              

                {/* Download CV Section */}
                <div className="flex flex-col items-center mt-8 animate-pulse">
    <h3 className="text-xl font-semibold mb-4 border-orange">
        If you want to Hire me Explore my resume as well
    </h3>
    <a 
        href="https://resume-six-rose.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block bg-[#B8001F] text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
    >
        Download My CV
    </a>
</div>

                
           



              </div>
    

     

        </>
    );
}

// SkillBar function included within the same file
function SkillBar({ title, percentage, color }: { title: string; percentage: string; color: string }) {
    return (
        <div className="text-center">
            <div className="text-lg font-semibold mb-2">{title}</div>
            <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                <div
                    className={`${color} h-full text-white text-center text-sm font-semibold leading-6 transition-all duration-300`}
                    style={{ width: `${percentage}%` }}
                >
                    {percentage}%
                </div>
            </div> 

        </div>
    );
}
