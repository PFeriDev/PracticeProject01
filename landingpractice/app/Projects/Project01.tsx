"use client";
import React, { useState } from "react";
import FullScreenModal from "../components/FullScreenModal";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Project01 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div>
        {/* Blog Card */}
        <ProjectCard
          Coverpic={
            "https://images.unsplash.com/photo-1695654397056-9de11d81d282?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          AltTitle={"Custom E-commerce Web Development"}
          Title={"GreenGro Online"}
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
                <h1 className="font-Poppins font-black text-3xl mb-1">GreenGro Online</h1>
                <p className="font-Inter font-normal text-maingraytext text-lg mb-5">
                  Subtitle: Empowering Local Farmers with a Sustainable E-commerce Platform
                </p>
                <ul className="grid grid-cols-2 gap-4 font-Inter font-normal text-sm">
                  <li>
                    <b>Client:</b> EcoGrow Co.
                  </li>
                  <li>
                    <b>Date:</b> 15 June 2024
                  </li>
                  <li>
                    <b>Service:</b> Custom E-commerce Web Development
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
                GreenGro Online is an innovative web platform connecting local farmers with urban customers who value
                fresh, sustainable, and organic produce. Our mission was to create a user-friendly marketplace that
                seamlessly integrates farm-to-table delivery services while showcasing the stories of local farmers.
              </p>
              <div className="lg:flex justify-between text-mainwhite grid gap-5">
                <div>
                  <h1 className="font-Poppins font-black text-xl mb-2 uppercase">Strategy</h1>
                  <p className="font-Inter font-normal text-maingraytext text-lg">
                    Our approach involved designing a visually appealing interface that highlights fresh produce while
                    simplifying navigation for customers. A robust backend system ensures inventory accuracy and handles
                    logistics, payments, and customer communication efficiently.
                  </p>
                </div>
                <div>
                  <h1 className="font-Poppins font-black text-xl mb-2 uppercase">Chellenges</h1>
                  <p className="font-Inter font-normal text-maingraytext text-lg">
                    Building a platform that accommodates variable stock levels from small-scale farmers required
                    integrating dynamic inventory management. Additionally, ensuring an intuitive user experience for
                    both farmers and customers was critical.
                  </p>
                </div>
                <div>
                  <h1 className="font-Poppins font-black text-xl mb-2 uppercase">Focus</h1>
                  <p className="font-Inter font-normal text-maingraytext text-lg">
                    Sustainability was at the heart of the project. The platform emphasized reducing food waste by
                    enabling farmers to sell surplus produce quickly while offering customers eco-friendly delivery
                    options.
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
                The project began with thorough market research to understand user needs and farmer challenges. Our
                UX/UI designers crafted a responsive design suitable for desktops and mobile devices, ensuring
                accessibility for all users. The platform includes personalized dashboards for farmers to track sales,
                manage inventory, and communicate directly with customers. <br />
                <br /> To support scalability, we implemented a cloud-based architecture capable of handling large
                spikes in traffic during peak seasons. A dedicated blog section highlights sustainable practices and
                shares the journey of farmers, fostering a sense of community. The project was delivered on time,
                exceeding client expectations and gaining widespread adoption.
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

export default Project01;
