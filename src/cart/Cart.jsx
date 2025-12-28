import React, { useEffect, useState } from "react";
import useCartContext from "../cart-context/CartContext";
import SingleCart from "./SingleCart";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart } = useCartContext();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => {
        const currPrice = Math.trunc(curr.price) * 90;
        const cTotal = curr.cart * currPrice;
        return acc + cTotal;
      }, 0)
    );
  }, [cart]);

  return (
    <section className="bg-zinc-50 mt-15 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-zinc-800 mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-2/3 flex flex-col gap-y-4">
            {cart.length > 0 ? (
              cart.map((c) => <SingleCart key={c.id} sinCart={c} />)
            ) : (
              <div className="bg-white p-20 rounded-xl border border-zinc-200 text-center">
                <h2 className="text-xl text-zinc-500">Your cart is empty</h2>
              </div>
            )}
          </div>

          <div className="lg:w-1/3 sticky top-20">
            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
              <h2 className="text-xl font-bold text-zinc-800 mb-6 border-b pb-4">
                Order Summary
              </h2>

              <div className="flex justify-between mb-4">
                <span className="text-zinc-600">
                  Subtotal ({cart.length} items)
                </span>
                <span className="text-zinc-800 font-medium">₹{total}</span>
              </div>

              <div className="flex justify-between mb-4">
                <span className="text-zinc-600">Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>

              <hr className="my-4 border-zinc-100" />

              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-zinc-800">Total</h1>
                <h1 className="text-2xl font-bold text-orange-600">₹{total}</h1>
              </div>

              <button
                onClick={() => navigate("/confirm")}
                className="w-full bg-orange-500 py-4 px-6 font-bold rounded-xl text-white hover:bg-orange-600 transition shadow-lg shadow-orange-200"
              >
                Proceed to Checkout
              </button>

              <p className="text-center text-zinc-400 text-sm mt-4">
                Secure SSL Encryption & Safe Checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
