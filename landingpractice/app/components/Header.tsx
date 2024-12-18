import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className="sticky top-0 z-10 w-3/5 bg-maingraytext mx-auto p-4 items-center rounded-xl border-2 border-mainwhite border-opacity-15 bg-opacity-15 flex justify-between">
        <div>
          <Image src={logo} alt="Logo" width={100} height={100} />
        </div>
        <div className="font-Poppins font-medium text-md">
          <ul className="flex justify-between gap-10 text-maingraytext ">
            <li className="hover:text-mainwhite transition-all">
              <Link href="#">Home</Link>
            </li>
            <li className="hover:text-mainwhite transition-all">
              <Link href="#">About</Link>
            </li>
            <li className="hover:text-mainwhite transition-all">
              <Link href="#">Skills</Link>
            </li>
            <li className="hover:text-mainwhite transition-all">
              <Link href="#">Projects</Link>
            </li>
            <li className="hover:text-mainwhite transition-all">
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-maingraybg hover:bg-mainwhite transition-all py-1 px-5 rounded-xl text-mainblack font-Inter font-semibold">
            Catch me!
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
