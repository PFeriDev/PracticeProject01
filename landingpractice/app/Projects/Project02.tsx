"use client";
import React, { useState } from "react";
import FullScreenModal from "../components/FullScreenModal";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const Project02 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div>
        {/* Blog Card */}
        <ProjectCard
          Coverpic={
            "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          AltTitle={"Learning Management System (LMS) Development"}
          Title={"EduTrack"}
          onClick={openModal}
        />

        {/* Fullscreen Modal */}
        <FullScreenModal isOpen={isModalOpen} onClose={closeModal}>
          <section className="w-full p-10">
            <div className="lg:flex justify-center items-center">
              <div className="lg:w-2/5 mb-7">
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 5000,
                    }),
                  ]}
                  className="lg:ml-5 shadow-xl border-2 border-maingreen rounded-xl border-opacity-15 shadow-maingreen/30">
                  <CarouselContent className="flex">
                    <CarouselItem className="w-full flex justify-center items-center">
                      <Image
                        src="https://images.unsplash.com/photo-1644924735973-0ba06d83268e?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="projectpic"
                        className="w-96 h-96 object-cover rounded-xl"
                        width={500}
                        height={500}></Image>
                    </CarouselItem>
                    <CarouselItem className="w-full flex justify-center items-center">
                      <Image
                        src="https://images.unsplash.com/photo-1643941687361-7101751cf89c?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="projectpic"
                        className="w-96 h-96 object-cover rounded-xl"
                        width={500}
                        height={500}></Image>
                    </CarouselItem>
                    <CarouselItem className="w-full flex justify-center items-center">
                      <Image
                        src="https://images.unsplash.com/photo-1661268277249-38f133ba09c9?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="projectpic"
                        className="w-96 h-96 object-cover rounded-xl"
                        width={500}
                        height={500}></Image>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="bg-transparent text-2xl w-10 h-10 text-maingreen border-maingreen duration-300" />
                  <CarouselNext className="bg-transparent text-2xl w-10 h-10 text-maingreen border-maingreen duration-300" />
                </Carousel>
              </div>
              <div className="lg:w-3/5 text-mainwhite lg:ml-[70px]">
                <h1 className="font-Poppins font-black text-3xl mb-1">EduTrack</h1>
                <p className="font-Inter font-normal text-maingraytext text-lg mb-5">
                  Revolutionizing Student Success with Data-Driven Insights
                </p>
                <ul className="grid grid-cols-2 gap-4 font-Inter font-normal text-sm">
                  <li>
                    <b>Client:</b> LearnSmart Institute
                  </li>
                  <li>
                    <b>Date:</b> 20 Sept 2024
                  </li>
                  <li>
                    <b>Service:</b> Learning Management System (LMS) Development
                  </li>
                  <li>
                    <b>Difficulity:</b> Medium
                  </li>
                </ul>
                <div className="mt-10 lg:block flex justify-center">
                  <Button
                    title1={"Project in Live"}
                    title2={"Project in Live"}
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      closeModal();
                    }}
                  />
                </div>
              </div>
            </div>
            <div>
              <p></p>
            </div>
            <hr className="border-maingraytext mt-10 hidden lg:block" />
            <div>
              <p className=" mt-10 mb-10 font-Inter font-normal text-maingraytext text-lg">
                EduTrack is a state-of-the-art platform designed to enhance student performance through personalized
                learning insights. By merging AI technology with user-friendly analytics, EduTrack empowers educators
                and students to track progress, set goals, and achieve academic excellence.
              </p>
              <div className="lg:flex justify-between text-mainwhite grid gap-5">
                <div>
                  <h1 className="font-Poppins font-black text-xl mb-2 uppercase">Strategy</h1>
                  <p className="font-Inter font-normal text-maingraytext text-lg">
                    The key focus was to develop a modular LMS that adapts to different learning styles. The platform
                    integrates interactive dashboards, AI-driven performance analysis, and collaborative tools to
                    support modern education.
                  </p>
                </div>
                <div>
                  <h1 className="font-Poppins font-black text-xl mb-2 uppercase">Chellenges</h1>
                  <p className="font-Inter font-normal text-maingraytext text-lg">
                    Ensuring the platform handled large datasets while maintaining quick response times was a
                    significant challenge. Additionally, we needed to balance the privacy concerns of users with the
                    data-driven functionality of the system.
                  </p>
                </div>
                <div>
                  <h1 className="font-Poppins font-black text-xl mb-2 uppercase">Focus</h1>
                  <p className="font-Inter font-normal text-maingraytext text-lg">
                    Accessibility and inclusivity drove the design process, ensuring students with different abilities
                    could benefit equally from the platform’s features.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-mainwhite font-Poppins font-black text-2xl mb-5 uppercase ">
                Pictures from the project
              </h1>
              <Image
                src="https://images.unsplash.com/photo-1536724609414-5f000e9a2745?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="mockup1"
                className="w-full h-[50rem] object-cover rounded-xl"
                width={500}
                height={500}></Image>
              <p className="font-Inter font-normal text-maingraytext text-lg text-center mb-5">Picture description</p>
              <Image
                src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=2101&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="mockup1"
                className="w-full h-[50rem] object-cover rounded-xl"
                width={500}
                height={500}></Image>
              <p className="font-Inter font-normal text-maingraytext text-lg text-center">Picture description</p>
            </div>
            <div className="mt-10">
              <p className="font-Inter font-normal text-maingraytext text-lg">
                Details: <br />
                <br />
                EduTrack was built with scalability in mind, using a microservices architecture. The platform offers
                integration with existing school systems, making it easy for institutions to adopt. Teachers can upload
                materials, create quizzes, and track student performance in real time. A standout feature is the AI
                assistant, which provides actionable insights for improving student outcomes. <br />
                <br />
                For example, it identifies areas where students struggle and suggests tailored resources. The system
                also features gamification elements to encourage student engagement, such as badges and leaderboards.
                Post-launch feedback was overwhelmingly positive, with educators praising its intuitive design and
                robust analytics.
              </p>
            </div>
            <div className="mt-10 flex justify-center ">
              <Button title1={"Close"} title2={"Cool Project!"} onClick={closeModal} />
            </div>
          </section>
        </FullScreenModal>
      </div>
    </>
  );
};

export default Project02;
