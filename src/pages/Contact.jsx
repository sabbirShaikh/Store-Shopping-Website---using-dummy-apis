import React from "react";

function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-black text-zinc-900 mb-6">
            Get in touch.
          </h1>
          <p className="text-xl text-zinc-600 mb-12">
            Have a question about a product or an order? Our team is here to
            help you 24/7.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Email Us
              </h3>
              <p className="text-xl font-medium text-zinc-800">
                support@store.com
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Visit Us
              </h3>
              <p className="text-xl font-medium text-zinc-800">
                123 Tech Avenue, Bengaluru, India
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Follow Us
              </h3>
              <div className="flex gap-6 mt-2">
                {["Instagram", "Twitter", "LinkedIn"].map((social) => (
                  <button
                    key={social}
                    className="text-zinc-600 hover:text-orange-500 font-bold transition-colors"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-zinc-200">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-zinc-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-zinc-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-700">Subject</label>
              <input
                type="text"
                className="w-full bg-zinc-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-orange-500/20 transition-all"
                placeholder="Order Inquiry"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-700">Message</label>
              <textarea
                rows="5"
                className="w-full bg-zinc-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-orange-500/20 transition-all"
                placeholder="How can we help?"
              ></textarea>
            </div>
            <button className="w-full bg-zinc-900 hover:bg-black text-white font-bold py-4 rounded-xl transition-all shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
