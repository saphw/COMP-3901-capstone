import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "Assets/static/lungify-logo.png";
const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const NavRoutes = [
    {
      path: "/",
      title: "Upload",
    },

    {
      path: "/archive",
      title: "Archive",
      disabled: true,
    },
    {
      path: "/archive",
      title: "Blog",
      disabled: true,
    },
    {
      path: "/account",
      title: "Account",
      disabled: true,
    },
  ];

  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-white">
      <div className="container flex flex-wrap justify-between items-center mx-auto py-2 lg:px-24 md:px-8">
        <a href="https://flowbite.com" className="flex items-center">
          <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Lungify Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Lungify
          </span>
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-primary-500 rounded-lg lg:hidden hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-200 "
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {NavRoutes.map((route, rdx) => (
              <NavLink
                key={`page-${rdx}`}
                to={route.path}
                className={`group hover:bg-primary-200 py-1 px-3 rounded-md transition-all ease-linear duration-75 ${
                  pathname === route.path
                    ? " text-secondary"
                    : "text-black"
                }`}
              >
                <div className="tracking-wide text-sm font-semibold md:text-sm lg:text-sm group-hover:text-secondary transition-all ease-linear duration-75">
                  {route.title}
                </div>
              </NavLink>
            ))}
            <NavLink
              to={"/logout"}
              className={`lg:hidden md:hidden group hover:bg-primary/20 py-1 px-3 rounded-md transition-all ease-linear duration-75 ${
                pathname === "/" ? " text-secondary" : "text-black"
              }`}
            >
              <div className="tracking-wide text-sm font-semibold md:text-sm lg:text-sm group-hover:text-secondary transition-all ease-linear duration-75">
                Logout
              </div>
            </NavLink>
          </ul>
        </div>
        <button className="xs:hidden hidden lg:inline bg-primary text-light font-semibold py-1 px-5 rounded-md">
          Log out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
