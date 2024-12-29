"use client";
import React, { useState } from "react";
import FullScreenModal from "../components/FullScreenModal";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Project03 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div>
        {/* Blog Card */}
        <ProjectCard
          Coverpic={
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          AltTitle={"The Social Network for Fitness Enthusiasts"}
          Title={"FitHub"}
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
                      <img
                        src="https://images.unsplash.com/photo-1644924735973-0ba06d83268e?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="projectpic"
                        className="w-96 h-96 object-cover rounded-xl"
                      />
                    </CarouselItem>
                    <CarouselItem className="w-full flex justify-center items-center">
                      <img
                        src="https://images.unsplash.com/photo-1643941687361-7101751cf89c?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="projectpic"
                        className="w-96 h-96 object-cover rounded-xl"
                      />
                    </CarouselItem>
                    <CarouselItem className="w-full flex justify-center items-center">
                      <img
                        src="https://images.unsplash.com/photo-1661268277249-38f133ba09c9?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="projectpic"
                        className="w-96 h-96 object-cover rounded-xl"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="bg-transparent text-2xl w-10 h-10 text-maingreen border-maingreen duration-300" />
                  <CarouselNext className="bg-transparent text-2xl w-10 h-10 text-maingreen border-maingreen duration-300" />
                </Carousel>
              </div>
              <div className="lg:w-3/5 text-mainwhite lg:ml-[70px]">
                <h1 className="font-Poppins font-black text-3xl mb-1">FitHub</h1>
                <p className="font-Inter font-normal text-maingraytext text-lg mb-5">
                  The Social Network for Fitness Enthusiasts
                </p>
                <ul className="grid grid-cols-2 gap-4 font-Inter font-normal text-sm">
                  <li>
                    <b>Client:</b> ActiveLife Solutions
                  </li>
                  <li>
                    <b>Date:</b> 15 Jan 2025
                  </li>
                  <li>
                    <b>Service:</b> Social Networking Platform Development
                  </li>
                  <li>
                    <b>Difficulity:</b> Hard
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
                FitHub is a dynamic social networking platform tailored for fitness enthusiasts to connect, share
                progress, and achieve their health goals together. By fostering a supportive online community, FitHub
                bridges the gap between personal fitness and social interaction.
              </p>
              <div className="lg:flex justify-between text-mainwhite grid gap-5">
                <div>
                  <h1 className="font-Poppins font-black text-xl mb-2 uppercase">Strategy</h1>
                  <p className="font-Inter font-normal text-maingraytext text-lg">
                    The project focused on creating a vibrant and interactive community hub where users could track
                    workouts, share milestones, and discover fitness resources. The design was inspired by modern social
                    media platforms, ensuring ease of use and engagement.
                  </p>
                </div>
                <div>
                  <h1 className="font-Poppins font-black text-xl mb-2 uppercase">Chellenges</h1>
                  <p className="font-Inter font-normal text-maingraytext text-lg">
                    Incorporating a seamless integration of fitness tracking devices and apps posed a challenge, as did
                    ensuring data synchronization and accuracy. Additionally, building a robust content moderation
                    system to maintain a positive user environment was essential.
                  </p>
                </div>
                <div>
                  <h1 className="font-Poppins font-black text-xl mb-2 uppercase">Focus</h1>
                  <p className="font-Inter font-normal text-maingraytext text-lg">
                    Community engagement was at the forefront, with features like discussion boards, challenge groups,
                    and live workout sessions designed to foster interaction and motivation.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-mainwhite font-Poppins font-black text-2xl mb-5 uppercase ">
                Pictures from the project
              </h1>
              <img
                src="https://images.unsplash.com/photo-1536724609414-5f000e9a2745?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="mockup1"
                className="w-full h-[50rem] object-cover rounded-xl"
              />
              <p className="font-Inter font-normal text-maingraytext text-lg text-center mb-5">Picture description</p>
              <img
                src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=2101&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="mockup1"
                className="w-full h-[50rem] object-cover rounded-xl"
              />
              <p className="font-Inter font-normal text-maingraytext text-lg text-center">Picture description</p>
            </div>
            <div className="mt-10">
              <p className="font-Inter font-normal text-maingraytext text-lg">
                Details: <br />
                <br />
                The platform includes customizable profiles where users can log workouts, set fitness goals, and share
                achievements. A newsfeed allows members to follow friends, join interest-based groups, and participate
                in challenges. FitHub also features a marketplace where fitness professionals can offer virtual classes
                and training plans. <br />
                <br />
                The backend integrates APIs from popular fitness devices, ensuring real-time updates for activity
                tracking. With its launch, FitHub rapidly gained traction, creating a thriving community of fitness
                enthusiasts. <br />
                <br />
                The project demonstrated the power of combining technology and community for personal growth and
                engagement.
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

export default Project03;
