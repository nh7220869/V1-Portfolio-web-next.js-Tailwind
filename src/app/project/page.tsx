// src/app/project/page.tsx
import Link from 'next/link';
import Image from 'next/image';

const Project = () => {
  return (
    <div className="px-10 py-12  min-h-screen bg-[#FCFAEE]">
      <div className="text-center font-bold text-4xl mb-12">
        <h1 className='bg-[#384B70] text-[#FCFAEE] animate-fadeInRight'>My Projects</h1>
      </div>

      {/* Project containers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fadeInRight">
        
        {/* Project 1: Number Game */}
        <div className="bg-white text-gray-700 text-center shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold py-4 text-[#B8001F]">Number Game</h2>
          <img src="/game.png" alt="Number Game" className="w-full h-64 object-cover" />
          <div className="p-6">
            <a href="https://updatednumbergame.vercel.app/" target="_blank" rel="noopener noreferrer" className=" text-[#B8001F] font-semibold hover:underline hover:text-yellow-500">
              View Project
            </a>
          </div>
        </div>

        {/* Project 2: Word Counter */}
        <div className="bg-white text-gray-700 text-center shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold py-4  text-[#B8001F]">Word Counter</h2>
          <img src="/wordcounter.png" alt="Word Counter" className="w-full h-64 object-cover" />
          <div className="p-6">
            <a href="https://counterword.vercel.app/" target="_blank" rel="noopener noreferrer" className=" text-[#B8001F] font-semibold hover:underline hover:text-yellow-500">
              View Project
            </a>
          </div>
        </div>

        {/* Project 3: Quiz */}
        <div className="bg-white text-gray-700 text-center shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold py-4  text-[#B8001F]">Quiz</h2>
          <img src="/quize.png" alt="Quiz" className="w-full h-64 object-cover" />
          <div className="p-6">
            <a href="https://updated-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className=" text-[#B8001F] font-semibold hover:underline hover:text-yellow-500">
              View Project
            </a>
          </div>
        </div>

        {/* Project 4: Calculator */}
        <div className="bg-white text-gray-700 text-center shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold py-4  text-[#B8001F]">Calculator</h2>
          <img src="/calcu.png" alt="Calculator" className="w-full h-64 object-cover" />
          <div className="p-6">
            <a href="https://calculator-lyart-eta.vercel.app/" target="_blank" rel="noopener noreferrer" className=" text-[#B8001F] font-semibold hover:underline hover:text-yellow-500">
              View Project
            </a>
          </div>
        </div>

        {/* Project 5: Currency Converter */}
        <div className="bg-white text-gray-700 text-center shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold py-4  text-[#B8001F] ">Currency Converter</h2>
          <img src="/currency.png" alt="Currency Converter" className="w-full h-64 object-cover" />
          <div className="p-6">
            <a href="https://currencyconverter-teal.vercel.app/" target="_blank" rel="noopener noreferrer" className=" text-[#B8001F] font-semibold hover:underline hover:text-yellow-500">
              View Project
            </a>
          </div>
        </div>

        {/* Project 6: ATM Machine */}
        <div className="bg-white text-gray-700 text-center shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold py-4  text-[#B8001F]">ATM Machine</h2>
          <img src="/ATM.png" alt="ATM Machine" className="w-full h-64 object-cover" />
          <div className="p-6">
            <a href="https://atmmeachain.vercel.app/" target="_blank" rel="noopener noreferrer" className=" text-[#B8001F] font-semibold hover:underline hover:text-yellow-500">
              View Project
            </a>
          </div>
        </div>

        {/* Project 7: My Bank */}
        <div className="bg-white text-gray-700 text-center shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold py-4  text-[#B8001F]">MY BANK</h2>
          <img src="/bank.png" alt="My Bank" className="w-full h-64 object-cover" />
          <div className="p-6">
            <a href="https://mybank-three.vercel.app/" target="_blank" rel="noopener noreferrer" className=" text-[#B8001F] font-semibold hover:underline hover:text-yellow-500">
              View Project
            </a>
          </div>
        </div>

        {/* Project 8: To-Do List */}
        <div className="bg-white text-gray-700 text-center shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold py-4  text-[#B8001F]">To-Do List</h2>
          <img src="/todo.png" alt="To-Do List" className="w-full h-64 object-cover" />
          <div className="p-6">
            <a href="https://todo-list-alpha-one-82.vercel.app/" target="_blank" rel="noopener noreferrer" className=" text-[#B8001F] font-semibold hover:underline hover:text-yellow-500">
              View Project
            </a>
          </div>
        </div>

        {/* Project 9: Student Management */}
        <div className="bg-white text-gray-700 text-center shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold py-4  text-[#B8001F]">Student Management</h2>
          <img src="/mng.png" alt="Student Management" className="w-full h-64 object-cover" />
          <div className="p-6">
            <a href="https://studentma.vercel.app/" target="_blank" rel="noopener noreferrer" className=" text-[#B8001F] font-semibold hover:underline hover:text-yellow-500">
              View Project
            </a>
          </div>
        </div>

        {/* Project 10: Countdown Timer */}
        <div className="bg-white text-gray-700 text-center shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold py-4  text-[#B8001F]">Countdown Timer</h2>
          <img src="/count.png" alt="Countdown Timer" className="w-full h-64 object-cover" />
          <div className="p-6">
            <a href="https://countdowntimer-taupe.vercel.app/" target="_blank" rel="noopener noreferrer" className=" text-[#B8001F] font-semibold hover:underline hover:text-yellow-500">
              View Project
            </a>
          </div>
        </div>

        {/* Project 11: Resume Builder */}
        <div className="bg-white text-gray-700 text-center shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold py-4  text-[#B8001F]">Resume Builder</h2>
          <img src="/pdfresume.png" alt="Resume Builder" className="w-full h-64 object-cover" />
          <div className="p-6">
            <a href="https://pdf-downloader-resume.vercel.app/" target="_blank" rel="noopener noreferrer" className=" text-[#B8001F] font-semibold hover:underline hover:text-yellow-500">
              View Project
            </a>
          </div>
        </div>

        {/* Project 12: My Resume */}
        <div className="bg-white text-gray-700 text-center shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold py-4  text-[#B8001F]">My Resume</h2>
          <img src="/resume.png" alt="My Resume" className="w-full h-64 object-cover" />
          <div className="p-6">
            <a href="https://resume-six-rose.vercel.app/" target="_blank" rel="noopener noreferrer" className=" text-[#B8001F] font-semibold hover:underline hover:text-yellow-500">
              View Project
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Project;
