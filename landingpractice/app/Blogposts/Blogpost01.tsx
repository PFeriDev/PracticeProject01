"use client";
import React, { useState } from "react";
import FullScreenModal from "../components/FullScreenModal";
import BlogPostCard from "../components/BlogPostCard";

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
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered  alteration in some form, by injected humour, or randomised words which don’t look even slightly   believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn’t anything    embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks."
          }
          onClick={openModal}
        />

        {/* Fullscreen Modal */}
        <FullScreenModal isOpen={isModalOpen} onClose={closeModal}>
          <section className="w-full p-5">
            <div className="w-full h-[15rem]">
              <img src="./blogpost1pic.png" alt="webdevelop" className="w-full rounded-xl" />
              <div>
                <p className="font-Inter font-normal text-md text-maingraytext mt-2 mb-2">August 17, 2022</p>
                <h1 className="font-Poppins font-extrabold text-4xl text-mainwhite mb-5">
                  How i become a web developer?
                </h1>
                <p className="font-Inter font-normal text-lg text-maingraytext mt-2 mb-2">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words which don’t look even slightly
                  believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn’t anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend
                  toitrrepeat predefined chunks.
                </p>
              </div>

              <img
                src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="webdeveloper"
                className="rounded-xl"
              />
              <p></p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">
                First, solve the problem. Then write the code.
              </h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don’t look even slightly
                believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn’t anything
                embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend
                toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet. It re
                are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                some form, by injectedeed eedhumour, or randomised words which don’t look even slightly believable.
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don’t look even slightly
                believable. If you are going to use a passage of Lorem Ipsum. <br /> <br /> You need to be sure there
                isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet. It
                re are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injectedeed eedhumour, or randomised words which don’t look even slightly believable.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo . <br /> <br />
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don’t look even slightly
                believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn’t anything
                embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend
                toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet. It re
                are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                some form, by injectedeed eedhumour, or randomised words which don’t look even slightly believable.
                Necessary, making this the first true generator on the Internet. <br />
                <br /> It re are many variations of passages of Lo rem Ipsum available, but the majority have suffered
                alteration in some form, by injectedeed eedhumour, or randomised words which don’t look even slightly
                believable.
              </p>
            </div>
          </section>
        </FullScreenModal>
      </div>
    </>
  );
};

export default Blogpost01;
