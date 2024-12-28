"use client";
import React, { useState } from "react";
import FullScreenModal from "../components/FullScreenModal";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
            "https://images.unsplash.com/photo-1695654397056-9de11d81d282?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          AltTitle={"Development"}
          Title={"Online Food Delivery webapp."}
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
                <h1 className="font-Poppins font-black text-3xl mb-1">NFT Dashboard Application Development.</h1>
                <p className="font-Inter font-normal text-maingraytext text-lg mb-5">
                  Through a wide variety of mobile applications, we have developed a unique visual system.
                </p>
                <ul className="grid grid-cols-2 gap-4 font-Inter font-normal text-sm">
                  <li>
                    <b>Client:</b> George Wallace
                  </li>
                  <li>
                    <b>Date:</b> 15 June 2022
                  </li>
                  <li>
                    <b>Service:</b> Web Application
                  </li>
                  <li>
                    <b>Difficulity:</b> Medium
                  </li>
                </ul>
                <div className="mt-10 lg:block flex justify-center">
                  <Button title1={"Project in Live"} title2={"Project in Live"} />
                </div>
              </div>
            </div>
            <div>
              <p></p>
            </div>
            <hr className="border-maingraytext mt-10 hidden lg:block" />
            <div>
              <p className=" mt-10 mb-10 font-Inter font-normal text-maingraytext text-lg">
                There are always some stocks, which illusively scale lofty heights in a given time period. However, the
                good show doesn't last for these overblown toxic stocks as their current price is not justified by their
                fundamental strength.
              </p>
              <div className="lg:flex justify-between text-mainwhite grid gap-5">
                <div>
                  <h1 className="font-Poppins font-black text-xl mb-2 uppercase">Strategy</h1>
                  <p className="font-Inter font-normal text-maingraytext text-lg">
                    A strategy is a general plan to achieve one or more long-term. labore et dolore magna aliqua.
                  </p>
                </div>
                <div>
                  <h1 className="font-Poppins font-black text-xl mb-2 uppercase">Chellenges</h1>
                  <p className="font-Inter font-normal text-maingraytext text-lg">
                    UI/UX Design, Art Direction, A design is a plan or specification for art. which illusively scale
                    lofty heights.
                  </p>
                </div>
                <div>
                  <h1 className="font-Poppins font-black text-xl mb-2 uppercase">Focus</h1>
                  <p className="font-Inter font-normal text-maingraytext text-lg">
                    User experience (UX) design is the process design teams use to create products that provide.
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
                However, if you can precisely spot such toxic stocks, you may gain by resorting to an investing strategy
                called short selling. This strategy allows one to sell a stock first and then buy it when the price
                falls. <br /> <br /> While short selling excels in bear markets, it typically loses money in bull
                markets. So, just like identifying stocks with growth potential, pinpointing toxic stocks and offloading
                them at the right time is crucial to guard one's portfolio from big losses or make profits by short
                selling them. <br />
                <br /> Heska Corporation HSKA, Tandem Diabetes Care, Inc. TNDM, Credit Suisse Group CS,Zalando SE ZLNDY
                and Las Vegas Sands LVS are a few such toxic stocks.Screening Criteria Here is a winning strategy that
                will help you to identify overhyped toxic stocks: Most recent Debt/Equity Ratio greater than the median
                industry average: High debt/equity ratio implies high leverage. <br />
                <br /> High leverage indicates a huge level of repayment that the company has to make in connection with
                the debt amount.
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
