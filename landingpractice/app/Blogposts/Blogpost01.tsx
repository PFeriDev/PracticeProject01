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
            "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          Title={"How i become a web developer?"}
          Description={
            "Becoming a web developer wasn't a straight path, but every step I took contributed to me eventually finding my place in this amazing and dynamic industry. Although I've always been interested in technological innovations, I never imagined that I would end up working as a programmer. My story is the result of a series of chance encounters and hard work, which pushed me to completely redirect my career."
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
                <p className="font-Inter font-normal text-md text-maingraytext mt-2 mb-2">December 17, 2024</p>
                <h1 className="font-Poppins font-extrabold text-4xl text-mainwhite mb-5">
                  How i become a web developer?
                </h1>
                <p className="font-Inter font-normal text-lg text-maingraytext mt-2 mb-2">
                  Becoming a web developer wasnt a straight path, but every step I took contributed to me eventually
                  finding my place in this amazing and dynamic industry. Although Ive always been interested in
                  technological innovations, I never imagined that I would end up working as a programmer. My story is
                  the result of a series of chance encounters and hard work, which pushed me to completely redirect my
                  career.
                </p>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="webdeveloper"
                className="rounded-xl mx-auto"
                width={1000}
                height={1000}></Image>
              <p></p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">
                The Beginning of My Interest
              </h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                As a child, I loved computers and everything digital. However, I wasnt sure what to do with this
                interest. After finishing school, I started exploring different professions. My interest in IT steered
                me in many directions, but my fascination with web development really started to grow when I tried
                creating a simple website for a friend. <br />
                <br /> I first got acquainted with HTML and CSS coding, and after my first successful attempt, I was
                amazed by the ability to create visually beautiful and functional things with just a few lines of code.
                That was the moment I realized that web development wasnt just interesting, but a real possibility for
                me. <br />
                <br /> The First Steps in Learning <br />
                Since I didnt have formal education in programming, I decided to start learning through online
                resources. YouTube channels, blogs, and free courses were my introduction to the world of web
                development. In the first few months, I focused on HTML and CSS and started building my own projects,
                even though I initially only made simple websites. As time passed, I gradually ventured into JavaScript.
                The first major breakthrough came when I felt confident enough to build a simple dynamic web
                application. During this development process, I didnt just write code, but learned to approach
                problem-solving in a whole new way. Every bug I fixed was a new learning opportunity. <br /> <br />
                The Struggles and Persistence <br /> While learning more, I quickly realized that web development is not
                easy. The first few months were full of frustrating bugs and problems, and it seemed like learning was
                moving at a slow pace. But I didnt let that stop me. Throughout this process, I encountered many
                challenges, but every solved issue made me feel closer to what I wanted to achieve. The most important
                lesson I learned was that persistence and determination are key to progress. Even if things didnt go as
                fast as I wanted, I knew that continuing was the key to success. Gradually, I got deeper into
                development, and at the end of the day, even if the code wasnt perfect, I was satisfied with the
                tangible progress I made. <br />
                <br />
                The Beginning of My Professional Journey <br />
                Once I reached a level where I could create real projects, I decided to embark on a professional path. I
                started freelancing, creating websites for local businesses. It was during this time that I truly
                realized the importance of continuous learning, as every new project presented a new challenge. After
                some time, I began not only creating websites but also developing more complex web applications. The
                business side of things also taught me a lot, such as how to effectively communicate with clients and
                manage projects. The real growth came when I started working in teams and participating in larger
                projects, which took my career to the next level. <br />
                <br />
                Why I Love Being a Web Developer <br />
                Web development is not just a job for me; its a passion. The ability to create something that is useful
                to others is both exciting and motivating. The joy of creation, when a well-written piece of code
                finally works, always inspires me to set new goals. The continuous advancement of technology and the
                diversity of the web development community are what keep me enthusiastic and inspired. <br />
                <br />
                The Future <br />
                Now that I am working as a web developer, the present is exciting, but the future is just as much so. I
                still want to learn new technologies and continue developing my projects, applying my knowledge on a
                wider scale. As a web developer, many challenges still lie ahead, and thats what truly motivates me!
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
