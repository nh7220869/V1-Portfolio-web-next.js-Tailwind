import Image from "next/image";

function Home() {
  return ( <div>
    
    <Image src="/picture.png" alt="image" width={1200} height={1400}  className="  mb-9 animate-fadeIn  hidden md:block "/>
    <h1 className="text-center text-4xl font-bold mt-6  hidden md:block animate-fadeInLeft ">𝗚𝗿𝗲𝗲𝘁𝗶𝗻𝗴𝘀 & 𝗧𝗵𝗮𝗻𝗸𝘆𝗼𝘂 𝗳𝗼𝗿 𝘃𝗶𝘀𝗶𝘁𝗶𝗻𝗴 𝗠𝘆 𝗣𝗼𝗿𝘁𝗳𝗼𝗹𝗶𝗼</h1>
    
    <Image src="/picture.png" alt="image" width={1200} height={1400} className="lg:hidden md:hidden animate-fadeIn" />
    <h1 className="text-center text-lg font-bold mt-6   md:hidden lg:hidden animate-fadeInLeft">𝗚𝗿𝗲𝗲𝘁𝗶𝗻𝗴𝘀 & 𝗧𝗵𝗮𝗻𝗸𝘆𝗼𝘂 𝗳𝗼𝗿 𝘃𝗶𝘀𝗶𝘁𝗶𝗻𝗴 𝗠𝘆 𝗣𝗼𝗿𝘁𝗳𝗼𝗹𝗶𝗼</h1>
    <div className="text-lg text-center  ml-20 mr-20  mt-3 mb-10 animate-fadeInBottom">Hello and welcome! I’m Sehar, a developer and designer who loves creating digital experiences that look beautiful and are easy to use. Every project I take on is a chance to bring creativity and technology together, making ideas come to life in ways that connect and inspire.

Take a look through my portfolio — a place where I showcase my dedication to thoughtful design, smart solutions, and storytelling through code. Let’s create something amazing together!</div>



  </div> );
}

export default Home;