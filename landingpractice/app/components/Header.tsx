"use client";

import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import Button from "./Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <>
      <nav className=" fixed left-1/2 transform -translate-x-1/2 top-0 z-30 w-full lg:w-3/5 bg-mainblack mx-auto p-4 items-center rounded-xl border-2 border-mainwhite border-opacity-15 bg-opacity-85 flex justify-between">
        <div className="mr-2">
          <Link href="#">
            <Image src={logo} alt="Logo" width={100} height={100} className="cursor-pointer" />
          </Link>
        </div>

        <div className="lg:block font-Poppins font-medium text-md hidden">
          <ul className="flex justify-between gap-10 text-maingraytext ">
            <li className="hover:text-mainwhite transition-all">
              <Link href="#Home">Home</Link>
            </li>
            <li className="hover:text-mainwhite transition-all">
              <Link href="#about">About</Link>
            </li>
            <li className="hover:text-mainwhite transition-all">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="hover:text-mainwhite transition-all">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="hover:text-mainwhite transition-all">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <Link href={"#contact"}>
            <Button title1="Hire me!" title2="Work together!" />
          </Link>
        </div>
        <div className="lg:hidden text-mainwhite ml-3">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu size={30} color="white" className="mr-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <ul className="flex flex-col  text-maingraytext ">
                  <li className="hover:text-mainwhite transition-all">
                    <Link href="#Home">Home</Link>
                  </li>
                  <li className="hover:text-mainwhite transition-all">
                    <Link href="#about">About</Link>
                  </li>
                  <li className="hover:text-mainwhite transition-all">
                    <Link href="#skills">Skills</Link>
                  </li>
                  <li className="hover:text-mainwhite transition-all">
                    <Link href="#projects">Projects</Link>
                  </li>
                  <li className="hover:text-mainwhite transition-all">
                    <Link href="#contact">Contact</Link>
                  </li>
                </ul>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
};

export default Header;
