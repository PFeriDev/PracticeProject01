"use client";

import logo from "../assets/logo.png";
import { CircleArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full mt-10 flex justify-center items-center text-white">
      <div className="w-full flex lg:justify-between items-center p-5">
        <div>
          <Link href="/">
            <Image src={logo} alt="Logo" width={100} height={100} className="cursor-pointer" priority={true} />
          </Link>
        </div>
        <div>
          <h3 className="font-Inter font-medium text-maingraytext text-center">
            It's a practice project by PemmerwebDev
          </h3>
        </div>
        <div>
          <CircleArrowUp
            size={50}
            className="cursor-pointer text-maingreen/50 hover:text-maingreen transition-all duration-300"
            onClick={() => {
              document.getElementById("Home")?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
