import React, { useState, useEffect } from "react";
import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import useCartContext from "../cart-context/CartContext";

function Navbar() {
  const { cart } = useCartContext();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkStyles = ({ isActive }) =>
    `relative transition-colors duration-300 font-medium text-sm uppercase tracking-wide ${
      isActive ? "text-orange-500" : "text-zinc-600 hover:text-orange-500"
    }`;

  const mobileLinkStyles = ({ isActive }) =>
    `block py-5 text-lg font-bold border-b border-zinc-50 ${
      isActive ? "text-orange-500" : "text-zinc-800"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-100 bg-white border-b border-zinc-100">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center relative z-110 bg-white">
        <NavLink
          to="/"
          className="text-2xl text-zinc-800 font-black tracking-tighter"
        >
          STORE<span className="text-orange-500">.</span>
        </NavLink>

        <ul className="hidden md:flex gap-10 items-center">
          <NavLink className={navLinkStyles} to="/">
            Home
          </NavLink>
          <NavLink className={navLinkStyles} to="/about">
            About
          </NavLink>
          <NavLink className={navLinkStyles} to="/product">
            Products
          </NavLink>
          <NavLink className={navLinkStyles} to="/contact">
            Contact
          </NavLink>
          <div className="h-4 w-px bg-zinc-200 mx-2"></div>
          <NavLink to="/cart" className="relative group p-2">
            <BsCart3 className="text-xl text-zinc-700 group-hover:text-orange-500 transition-colors" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                {cart.length}
              </span>
            )}
          </NavLink>
        </ul>

        <div className="flex items-center gap-4 md:hidden">
          <NavLink to="/cart" className="relative p-2">
            <BsCart3 className="text-xl text-zinc-700" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </NavLink>
          <button
            onClick={toggleMenu}
            className="text-2xl text-zinc-700 relative z-130"
          >
            {isOpen ? <RiCloseFill /> : <RiMenuFill />}
          </button>
        </div>

        {/* Backdrop Overlay */}
        <div
          onClick={toggleMenu}
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        />

        {/* Side Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-[70%] max-w-75 bg-white z-120 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col pt-20 px-8">
            <NavLink onClick={toggleMenu} className={mobileLinkStyles} to="/">
              Home
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              className={mobileLinkStyles}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              className={mobileLinkStyles}
              to="/product"
            >
              Products
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              className={mobileLinkStyles}
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
