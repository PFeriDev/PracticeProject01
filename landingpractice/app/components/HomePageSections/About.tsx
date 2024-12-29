"use client";
import { CircleUser, Gift, Mail, MapPinCheckInside, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import React from "react";
import Button from "../Button";
import Link from "next/link";

const about = () => {
  return (
    <>
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
              <Link href="#contact">
                <Button title1="Work Together!" title2="Hire me!" />
              </Link>

              <hr className="border-maingraytext w-[4rem]" />
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100090204220416"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Facebook size={20} className="hover:text-maingreen hover:scale-150 transition-all cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/ferencpemmer/" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} className="hover:text-maingreen hover:scale-150 transition-all cursor-pointer" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Twitter size={20} className="hover:text-maingreen hover:scale-150 transition-all cursor-pointer" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ferenc-pemmer-1bb20a207/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Linkedin size={20} className="hover:text-maingreen hover:scale-150 transition-all cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
