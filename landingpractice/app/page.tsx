import { CircleUser, Facebook, Gift, Instagram, Linkedin, Mail, MapPinCheckInside, Twitter } from "lucide-react";
import Header from "./components/Header";
import Button from "./components/Button";
import Blogpost01 from "./Blogposts/Blogpost01";
import Blogpost02 from "./Blogposts/Blogpost02";
import Blogpost03 from "./Blogposts/Blogpost03";
import Project01 from "./Projects/Project01";
import Project02 from "./Projects/Project02";
import Project03 from "./Projects/Project03";
import ContactForm from "./components/ContactForm";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <section
        id="Home"
        className="hero-section w-full h-screen top-0 flex justify-center text-center items-center relative">
        <video
          className="absolute top-0 left-0 w-full h-[90%] object-cover opacity-10"
          autoPlay
          loop
          muted
          playsInline
          preload="auto">
          <source src="./giphy1080p.mp4" type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>
        <div className="grid grid-cols-1 gap-3 z-10 relative">
          <h1 className="font-Poppins font-semibold text-center text-maingraybg text-5xl">
            Creative Web Development <br /> with the Latest Technologies!
          </h1>
          <h2 className="font-Poppins font-semibold text-center text-maingraybg text-3xl">
            Technological solutions that help you <br /> stand out in the digital world.
          </h2>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-mainblack via-transparent to-transparent opacity-100 backdrop-blur-md z-0"></div>
      </section>

      <section id="about" className="w-full text-mainwhite mt-5 mb-10">
        <h3 className="font-Inter font-semibold text-maingreen text-lg text-center">Get to know me</h3>
        <h1 className="font-Poppins font-black text-4xl text-center mb-[4rem]">About Me</h1>
        <div className="mt-10 grid lg:grid-cols-2 lg:w-4/6 mx-auto my-auto gap-8">
          <div className="lg:flex lg:justify-end items-center">
            <img src="./aboutpic.png" alt="webdev" width={300} className="mx-10" />
          </div>
          <div className="p-5  overflow-hidden">
            <p className="font-Inter font-semibold text-maingreen text-lg">Who am i?</p>
            <h2 className="font-Poppins font-black text-2xl mt-1 mb-4">
              I'm Ferenc Pemmer, a full stack Web Developer
            </h2>
            <p className="font-Inter font-semibold text-maingraytext text-base">
              My goal is to contribute to the development of creative and modern web solutions as a full-stack developer
              while deepening my knowledge of the latest technologies. I aim to continue growing and learning to deliver
              increasingly successful projects in the long term. I am passionate about creating user-friendly and
              innovative digital experiences that have a real impact. Collaboration and continuous improvement drive me
              to excel in every project I undertake.
            </p>
            <hr className="border-maingraytext mt-5" />
            <div>
              <ul className="grid lg:grid-cols-2 gap-4 mb-5 mt-5">
                <li className="flex items-center gap-2 hover:text-maingreen transition-all">
                  <CircleUser size={30} /> <p className="text-sm font-Inter font-light text-mainwhite">Ferenc Pemmer</p>
                </li>
                <li className="flex items-center gap-2 hover:text-maingreen transition-all">
                  <Gift size={30} /> <p className="text-sm font-Inter font-light text-mainwhite">30 years old</p>
                </li>
                <li className="flex items-center gap-2 hover:text-maingreen transition-all">
                  <Mail size={30} />{" "}
                  <p className="text-sm font-Inter font-light text-mainwhite">pemmer.ferenc@gmail.com </p>
                </li>
                <li className="flex items-center gap-2 hover:text-maingreen transition-all">
                  <MapPinCheckInside size={30} />{" "}
                  <p className="text-sm font-Inter font-light text-mainwhite">from Hungary</p>
                </li>
              </ul>
            </div>
            <div className="flex gap-5 items-center mt-8">
              <Button title1="Work Together!" title2="Hire me!" />
              <hr className="border-maingraytext w-[4rem]" />
              <div className="flex gap-4">
                <Facebook size={20} className="hover:text-maingreen hover:scale-150 transition-all cursor-pointer" />
                <Instagram size={20} className="hover:text-maingreen hover:scale-150 transition-all cursor-pointer" />
                <Twitter size={20} className="hover:text-maingreen hover:scale-150 transition-all cursor-pointer" />
                <Linkedin size={20} className="hover:text-maingreen hover:scale-150 transition-all cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-screen flex justify-center mb-[8rem]">
        <div className="lg:w-4/5 lg:flex justify-center items-center grid mx-auto">
          <div className="lg:w-1/2 flex justify-end text-right">
            <h1 className="font-Poppins font-semibold lg:text-right text-center text-maingraybg text-5xl leading-snug lg:w-2/3">
              Responsive Web Designs that Adapt to <span className="text-maingreen">Every Device</span>
            </h1>
          </div>
          <div className="lg:w-1/2 flex justify-start mx-auto">
            <img src="./phone2.png" alt="" width={320} className="transition-all lg:hover:scale-105" />
          </div>
        </div>
      </section>

      <section id="skills" className="w-full mt-10">
        <h3 className="font-Inter font-semibold text-maingreen text-lg text-center">The Skills Behind the Screen</h3>
        <h1 className="font-Poppins font-black text-4xl text-center mb-[4rem] text-mainwhite">Technologies I Use</h1>
        {/* <TechSlider /> */}
      </section>

      <section className="w-full">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:w-3/5 mx-auto">
          <div className="techstack lg:border-r-2 ">
            <img src="./stacklogos/html.png " alt="html" width={130} className="techstackpics" />
          </div>
          <div className="techstack lg:border-r-2 ">
            <img src="./stacklogos/css.png" alt="css" width={130} className="techstackpics" />
          </div>
          <div className="techstack lg:border-r-2 ">
            <img src="./stacklogos/js.png" alt="js" width={130} className="techstackpics" />
          </div>
          <div className="techstack">
            <img src="./stacklogos/react.png" alt="react" width={130} className="techstackpics" />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:w-3/5 mx-auto">
          <div className="techstack lg:border-r-2 p-5 ">
            <img src="./stacklogos/nextjs.png" alt="nextjs" width={130} className="techstackpics" />
          </div>
          <div className="techstack lg:border-r-2 ">
            <img src="./stacklogos/typescript.png" alt="typescript" width={130} className="techstackpics" />
          </div>
          <div className="techstack lg:border-r-2 ">
            <img src="./stacklogos/nodejs.png" alt="nodejs" width={130} className="techstackpics" />
          </div>
          <div className="techstack ">
            <img src="./stacklogos/mysql.png" alt="mysql" width={130} className="techstackpics" />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:w-3/5 mx-auto">
          <div className="techstack lg:border-r-2">
            <img src="./stacklogos/github.png" alt="github" width={130} className="techstackpics" />
          </div>
          <div className="techstack lg:border-r-2 ">
            <img src="./stacklogos/tailwindcss.png" alt="tailwindcss" width={130} className="techstackpics" />
          </div>
          <div className="techstack lg:border-r-2 ">
            <img src="./stacklogos/figma.png" alt="figma" width={130} className="techstackpics" />
          </div>
          <div className="techstack ">
            <img src="./stacklogos/photoshop.png" alt="photoshop" width={130} className="techstackpics" />
          </div>
        </div>
        <p className="font-Inter font-light text-lg text-maingraytext text-center mt-3">
          And i want to learn much more...
        </p>
      </section>

      <section className="w-full mt-10">
        <h3 className="font-Inter font-semibold text-maingreen text-lg text-center">Check out my latest blog posts</h3>
        <h1 className="font-Poppins font-black text-4xl text-center mb-[4rem] text-mainwhite">My Blog</h1>
        <div className="w-4/6 grid lg:grid-cols-3 sm:grid-cols-1 mx-auto gap-7">
          <Blogpost01 />
          <Blogpost02 />
          <Blogpost03 />
        </div>
      </section>

      <section className="relative w-full h-[20rem] overflow-hidden mt-10 ">
        {/* A GIF megjelenítése */}
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExanA1cXg4M3M0cWxpbmEyd3JzbzNld2owemxod3l5M21wNDExZmt5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9ZsHm0z5QwSYpV7g01/giphy.webp"
          alt="Background GIF"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Tartalom a GIF felett */}
        <div className="relative z-10 flex items-center justify-center h-full text-center lg:text-left">
          <div className="lg:w-3/6  ">
            <div>
              <h1 className="font-Poppins font-black text-2xl text-center lg:text-left text-mainwhite">
                Ready to Take Your Online Presence to the Next Level?
              </h1>
              <h3 className="font-Inter font-light text-lg text-mainwhite text-center lg:text-left mt-3">
                Let’s build something amazing together. Whether you need a stunning website, a powerful application, or
                innovative solutions, I’m here to make it happen!
              </h3>
            </div>
            <div className="mt-5">
              <div className="relative inline-flex  group">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-maingraytext via-mainwhite to-maingreen rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <a
                  href="#"
                  title="Get quote now"
                  className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-Poppins font-bold text-white transition-all duration-200 bg-mainblack font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button">
                  Request a Project!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-mainblack/90 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-mainblack via-transparent to-transparent opacity-30 backdrop-blur-md z-0"></div>
      </section>

      <section id="projects" className="w-full mt-10">
        <h3 className="font-Inter font-semibold text-maingreen text-lg text-center">
          Visit my projects and keep your feedback
        </h3>
        <h1 className="font-Poppins font-black text-4xl text-center mb-[4rem] text-mainwhite">My Portfolio</h1>
        <div className="w-4/6 grid lg:grid-cols-3 sm:grid-cols-1 mx-auto gap-7">
          <Project01 />
          <Project02 />
          <Project03 />
        </div>
      </section>
      <section className="w-full mt-10">
        <div>
          <h1 className="font-Poppins font-black text-4xl text-center text-mainwhite">FAQ</h1>
        </div>
        <div className="lg:w-3/6 mx-auto shadow-lg shadow-maingreen/30 p-5 rounded-xl border-2 border-maingreen/30 mt-5">
          <Faq />
        </div>
      </section>

      <section id="Contact" className="w-full mt-10">
        <h3 className="font-Inter font-semibold text-maingreen text-lg text-center">Start your journey with me!</h3>
        <h1 className="font-Poppins font-black text-4xl text-center text-mainwhite">Lets's Connect!</h1>
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}
