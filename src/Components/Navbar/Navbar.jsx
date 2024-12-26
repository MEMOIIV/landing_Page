import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className=" shadow-sm ">
      <nav className="flex rounded-md justify-between z-50 p-2 items-center  lg:w-full sm:w-[99%] bg-white mx-auto text-gray-500 fixed top-0 left-0 right-0 ">
        {/* Logo */}
        <div className="">
          <a href="#"><img className="ml-12 cursor-pointer" src="/src/images/logo.svg" alt="logo" /></a>
        </div>

        {/* Navigation Links */}

        <div
          className={`${
            isMenuOpen
              ? "top-[150%]  lg:ml-[35%]  block shadow-sm p-8 z-30  xs:w-[90%] xs:ml-[50%] xs:translate-x-[-50%]  "
              : "md:block hidden "
          } md:static absolute bg-white md:min-h-fit min-h-[50vh] left-0    md:w-auto  w-full rounded-lg  md:p-4`}
        >
          <ul className="flex md:flex-row flex-col items-center gap-8">
            <li>
              <a href="#" className="hover:text-gray-400 lg:active">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 lg:active">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 lg:active">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 lg:active">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 lg:active">
                Careers
              </a>
            </li>
            <button className="lg:hidden md:hidden sm:block w-full text-white  xs:block btn bg-gradient-to-r from-green-500 to-cyan-500 hover:text-black duration-300 transition-all rounded-full p-2 px-6 ">
              Request Invite
            </button>
          </ul>
        </div>

        {/* Button and menu */}
        <div className="text-white flex items-center gap-3 mr-12">
          <button className="lg:block md:block sm:hidden   xs:hidden 
          btn bg-gradient-to-r from-green-500 to-cyan-500 hover:text-black duration-300 transition-all  
          rounded-full p-2 lg:px-6 md:text-sm lg:text-[16px]  ">
            Request Invite
          </button>
          <div className="md:hidden">
            <i
              onClick={toggleMenu}
              className={`fa-solid ${
                isMenuOpen ? "fa-xmark" : "fa-bars"
              } cursor-pointer text-black fa-2x `}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
