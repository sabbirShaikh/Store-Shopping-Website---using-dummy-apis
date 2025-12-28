import React from "react";
import { FaDatabase, FaBolt, FaLayerGroup, FaMobileAlt } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs">
            Our Platform
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-zinc-900 mt-4 mb-8 leading-[1.1]">
            Powered by Data. <br /> Built for{" "}
            <span className="text-zinc-400 italic">Speed.</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed">
            Our marketplace is a high-performance React application that
            leverages real-time API integration to bring you a diverse catalog
            of products from around the world.
          </p>
        </div>

        {/* Technical Stats/Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            {
              icon: <FaDatabase className="text-blue-500" />,
              title: "DummyJSON API",
              desc: "Seamless integration with a robust backend for real-time product data.",
            },
            {
              icon: <FaBolt className="text-orange-500" />,
              title: "React 18+",
              desc: "Built using modern React hooks and context for lightning-fast state management.",
            },
            {
              icon: <FaLayerGroup className="text-purple-500" />,
              title: "Context API",
              desc: "Centralized cart management providing a smooth shopping experience.",
            },
            {
              icon: <FaMobileAlt className="text-green-500" />,
              title: "Tailwind UI",
              desc: "Fully responsive design that looks stunning on every single device.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors"
            >
              <div className="text-2xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-zinc-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-100 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
                alt="Development"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-zinc-900 text-white p-8 rounded-3xl hidden md:block">
              <p className="text-3xl font-black">100%</p>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold">
                Dynamic Content
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-black text-zinc-900">
              The Catalog Experience
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Unlike traditional static stores, our platform is built to handle
              dynamic inventory. Whether you are searching for the latest
              smartphone, high-end skincare, or gourmet groceries, our interface
              filters through hundreds of API endpoints to deliver instant
              results.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed">
              We focus on clean architecture and intuitive user interfaces.
              Every interaction—from filtering by category to adjusting your
              cart—is optimized for the best possible digital shopping journey.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-4 py-3 border-b border-zinc-100">
                <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                <span className="font-bold text-zinc-800 uppercase tracking-tighter">
                  Real-time Inventory tracking
                </span>
              </div>
              <div className="flex items-center gap-4 py-3 border-b border-zinc-100">
                <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                <span className="font-bold text-zinc-800 uppercase tracking-tighter">
                  Instant Search & Filtering
                </span>
              </div>
              <div className="flex items-center gap-4 py-3 border-b border-zinc-100">
                <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                <span className="font-bold text-zinc-800 uppercase tracking-tighter">
                  Optimized image delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
