"use client";
import React, { useState } from "react";
import FullScreenModal from "../components/FullScreenModal";
import BlogPostCard from "../components/BlogPostCard";
import Button from "../components/Button";
import Image from "next/image";

const Blogpost01 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div>
        {/* Blog Card */}
        <BlogPostCard
          Coverpic={
            "https://media.istockphoto.com/id/1249324925/hu/fot%C3%B3/%C3%BAj-%C3%B6tletek-%C3%A9s-k%C3%A9pzelet-kreativit%C3%A1s-%C3%A9s-inspir%C3%A1ci%C3%B3-technol%C3%B3giai-innov%C3%A1ci%C3%B3.jpg?s=1024x1024&w=is&k=20&c=uYPus5eeG8jmQuOo4F21ZaW9z73EVbZhWRKJJ4mJBLg="
          }
          Title={"From Idea to Website: A Beginner's Guide to Web Development"}
          Description={
            "Turning your idea into a fully functioning website can seem overwhelming, especially if you’re new to web development. However, with the right approach and tools, anyone can learn how to build a website from scratch. This guide will take you through the key steps of the web development process, so you can start creating your own projects today."
          }
          onClick={openModal}
        />

        {/* Fullscreen Modal */}
        <FullScreenModal isOpen={isModalOpen} onClose={closeModal}>
          <section className="w-full p-10">
            <div className="w-full h-[15rem]">
              <Image
                src="/blogpost1pic.png"
                alt="webdevelop"
                className="w-full rounded-xl"
                width={500}
                height={500}></Image>
              <div>
                <p className="font-Inter font-normal text-md text-maingraytext mt-2 mb-2">Septemnber 17, 2024</p>
                <h1 className="font-Poppins font-extrabold text-4xl text-mainwhite mb-5">
                  From Idea to Website: A Beginners Guide to Web Development
                </h1>
                <p className="font-Inter font-normal text-lg text-maingraytext mt-2 mb-2">
                  Turning your idea into a fully functioning website can seem overwhelming, especially if youre new to
                  web development. However, with the right approach and tools, anyone can learn how to build a website
                  from scratch. This guide will take you through the key steps of the web development process, so you
                  can start creating your own projects today.
                </p>
              </div>
              <Image
                src="https://media.istockphoto.com/id/1249324925/hu/fot%C3%B3/%C3%BAj-%C3%B6tletek-%C3%A9s-k%C3%A9pzelet-kreativit%C3%A1s-%C3%A9s-inspir%C3%A1ci%C3%B3-technol%C3%B3giai-innov%C3%A1ci%C3%B3.jpg?s=1024x1024&w=is&k=20&c=uYPus5eeG8jmQuOo4F21ZaW9z73EVbZhWRKJJ4mJBLg="
                alt="webdeveloper"
                className="rounded-xl mx-auto"
                width={1000}
                height={1000}></Image>
              <p></p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">
                1. Planning and Research
              </h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                The first step in web development is understanding what you want your website to do. Are you building a
                personal portfolio, a blog, or an e-commerce site? Take time to research similar websites, jot down
                ideas, and map out the user experience. Planning helps ensure your website will be both functional and
                user-friendly.
              </p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">
                2. Choosing the Right Tools
              </h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                Once you have a plan, youll need the right tools to bring your idea to life. At the core of web
                development are three main technologies: HTML: The structure of your website. CSS: The styling to make
                your website look good. JavaScript: Adds interactivity and dynamic features. In addition, you might want
                to use a code editor like VS Code to write your code and a version control system like Git to track
                changes.
              </p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">
                3. Building the Structure
              </h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                Start by creating the basic structure of your website using HTML. Think of this like the skeleton of
                your site. Define the layout, navigation, and the different sections of your website.
              </p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">4. Styling with CSS</h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                After laying out your websites structure, use CSS to style it. Adjust fonts, colors, and spacing to make
                your site visually appealing. If youre new to CSS, you can use frameworks like Bootstrap or Tailwind CSS
                to speed up the design process.
              </p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">
                5. Making It Interactive with JavaScript
              </h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                JavaScript is what makes your website come to life. You can use it to add interactive elements like
                buttons, forms, and dynamic content. If youre building something more advanced, consider learning
                frameworks like React to build interactive user interfaces.
              </p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">
                6. Testing and Launching
              </h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                Once your website is built, its time to test it. Make sure everything works across different devices and
                browsers. Tools like Chrome DevTools can help identify any issues. Once youre satisfied with the sites
                performance, its time to deploy it. Platforms like Netlify or GitHub Pages allow you to host your
                website for free.
              </p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">Conclusion</h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                Building a website from scratch can be a rewarding experience, and with the right tools and mindset, its
                something anyone can learn. Start with planning your site, then learn the essential web development
                technologies like HTML, CSS, and JavaScript. As you build your site, remember to test it and make sure
                its functional across different devices. With practice, youll be able to turn any idea into a fully
                working website.
              </p>
              <div className="flex justify-center mt-5 pb-10">
                <Button title1={"Close"} title2={"Close"} onClick={closeModal} />
              </div>
            </div>
          </section>
        </FullScreenModal>
      </div>
    </>
  );
};

export default Blogpost01;
