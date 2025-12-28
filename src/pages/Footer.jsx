import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-900 text-zinc-400 py-16 px-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <NavLink
              to="/"
              className="text-3xl text-white font-black tracking-tighter"
            >
              STORE<span className="text-orange-500">.</span>
            </NavLink>
            <p className="text-sm leading-relaxed max-w-xs">
              The world's most versatile marketplace powered by modern
              technology. Bringing global products to your fingertips.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-orange-500 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product"
                  className="hover:text-orange-500 transition-colors"
                >
                  All Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-orange-500 transition-colors"
                >
                  Our Story
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-orange-500 transition-colors"
                >
                  Contact Support
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Categories
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="hover:text-orange-500 cursor-pointer transition-colors">
                Electronics
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">
                Fashion
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">
                Home Decor
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">
                Beauty
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Newsletter
            </h4>
            <p className="text-sm mb-4">
              Get updates on new arrivals and sales.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-zinc-800 border-none rounded-lg p-3 text-sm flex-1 focus:ring-1 focus:ring-orange-500 transition-all"
              />
              <button className="bg-orange-500 text-white px-4 rounded-lg font-bold text-xs hover:bg-orange-600 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium tracking-tight">
            © 2025 STORE. All rights reserved. Built with React & DummyJSON.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-orange-500 transition-colors"
          >
            Back to Top
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
