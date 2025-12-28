import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaShoppingBag, FaStar, FaGlobe } from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-zinc-50 overflow-hidden py-16 md:py-28 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 z-10 text-center md:text-left">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Global Marketplace
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 mb-6 leading-tight">
              Everything you <br />
              <span className="text-orange-500">Need</span> & More.
            </h1>
            <p className="text-zinc-500 text-lg mb-8 max-w-lg">
              Explore thousands of products across all categories. From
              electronics to fashion, beauty, and home essentials — all in one
              place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <NavLink
                to="/product"
                className="bg-zinc-900 hover:bg-black text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-xl"
              >
                Browse Catalog
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </NavLink>
              <NavLink
                to="/about"
                className="bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-800 px-8 py-4 rounded-xl font-bold transition-all text-center"
              >
                How it works
              </NavLink>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-zinc-100">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000"
                alt="Marketplace"
                className="rounded-4xl w-full h-full object-cover"
              />
            </div>
            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 hidden lg:block animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <FaStar className="text-green-600" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase leading-none">
                    Rating
                  </p>
                  <p className="text-sm font-black text-zinc-800">4.9 / 5.0</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 hidden lg:block animate-pulse">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <FaShoppingBag className="text-orange-600" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase leading-none">
                    Users
                  </p>
                  <p className="text-sm font-black text-zinc-800">
                    10k+ Orders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Highlight */}
      <section className="py-20 px-6 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-zinc-900">
              Explore our Universe
            </h2>
            <div className="h-1.5 w-20 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Electronics", color: "bg-blue-50 text-blue-600" },
              { label: "Groceries", color: "bg-green-50 text-green-600" },
              { label: "Fragrances", color: "bg-purple-50 text-purple-600" },
              { label: "Skincare", color: "bg-pink-50 text-pink-600" },
            ].map((cat, i) => (
              <div
                key={i}
                className={`${cat.color} p-8 rounded-3xl text-center hover:scale-105 transition-transform cursor-pointer border border-transparent hover:border-current/10`}
              >
                <p className="font-black text-lg">{cat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Trust */}
      <section className="py-24 px-6 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <FaGlobe className="text-zinc-700 text-6xl mx-auto mb-8" />
          <h2 className="text-4xl font-black mb-6">
            Built for Everyone, Everywhere.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            Powered by the DummyJSON API, our platform provides a seamless
            browsing experience through a massive inventory of diverse products
            worldwide.
          </p>
          <div className="flex justify-center gap-12 grayscale opacity-50">
            <span className="text-xl font-bold tracking-widest uppercase">
              Fast
            </span>
            <span className="text-xl font-bold tracking-widest uppercase">
              Reliable
            </span>
            <span className="text-xl font-bold tracking-widest uppercase">
              Secure
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
