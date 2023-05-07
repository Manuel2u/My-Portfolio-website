import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { CiMenuFries } from "react-icons/ci";
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleMobileMenu = () => setClick(true);

  return (
    <>
      <nav className="bg-black relative text-cyan-50 drop-shadow-lg pt-12 w-screen h-[80px] z-10">
        <div className="px-2 flex justify-between  items-center w-full h-full">
          <div className="flex items-center pl-7">
            <h1 className="font-bold text-4xl font-dodoo hidden md:flex mr-4">
              Manuel_Dev
            </h1>

            <ul className="hidden mx-10 md:flex">
              <li>
                <a
                  className="text-white hover:text-primary visited:text-white"
                  href="#home"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-primary visited:text-white"
                  href="#about"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-primary visited:text-white"
                  href="#skills"
                >
                  SKILLS
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-primary visited:text-white"
                  href="#projects"
                >
                  PROJECTS
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-primary visited:text-white"
                  href="#contact"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          <div className="mx-10 hidden ml-10 md:flex pr-4">
            <a
              href="https://github.com/Manuel2u"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-6 py-3 text-[16px] font-sans font-bold">
                Github Profile
              </button>
            </a>
          </div>

          <div className="md:hidden pr-5">
            <CiMenuFries size={40} onClick={handleMobileMenu} className="w-5" />
          </div>
        </div>
      </nav>

      <div
        className={
          !click
            ? "-translate-x-full ease-in-out duration-700  md:hidden fixed inset-y-0 z-50 shadow w-[60%]"
            : "-translate-x-0 ease-in-out duration-700 md:hidden fixed inset-y-0 z-50 shadow w-[60%]"
        }
      >
        <div className={"md:hidden bg-white text-left  h-screen"}>
          <CloseIcon
            onClick={handleClick}
            className="text-black absolute right-4 top-5 w-5}"
          />
          <ul className="pt-16 pl-3">
            <li className="text-black">
              <a className="hover:text-primary visited:text-black" href="#home">
                HOME
              </a>
            </li>
            <li className="text-black">
              <a
                className="hover:text-primary visited:text-black"
                href="#about"
              >
                ABOUT
              </a>
            </li>
            <li className="">
              <a
                className="hover:text-primary visited:text-black"
                href="#skills"
              >
                SKILLS
              </a>
            </li>
            <li className="">
              <a
                className="hover:text-primary visited:text-black"
                href="#projects"
              >
                PROJECTS
              </a>
            </li>
            <li className="">
              <a
                className="hover:text-primary visited:text-black"
                href="#contact"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
