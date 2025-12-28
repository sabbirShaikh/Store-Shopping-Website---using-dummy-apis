import React, { useState } from "react";
import useCartContext from "../cart-context/CartContext";
import {
  FaCreditCard,
  FaMobileAlt,
  FaCheckCircle,
  FaChevronLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function OrderConfirmation() {
  const { cart, setCart } = useCartContext();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const total = cart.reduce((acc, curr) => {
    return acc + Math.trunc(curr.price) * 90 * curr.cart;
  }, 0);

  const handlePlaceOrder = () => {
    if (!paymentMethod) return;
    setStep(2);
    setCart([]);
  };

  if (step === 2) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCheckCircle size={32} />
          </div>
          <h1 className="text-2xl font-bold text-zinc-800 mb-2">
            Order Confirmed
          </h1>
          <p className="text-zinc-500 text-sm mb-8">
            Thank you for shopping with us.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-zinc-900 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-black transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-zinc-50 px-6">
      <div className="max-w-xl mx-auto">
        <button
          onClick={() => navigate("/cart")}
          className="flex items-center gap-2 text-zinc-500 text-sm mb-6 hover:text-zinc-800 transition-colors"
        >
          <FaChevronLeft size={10} /> Return to cart
        </button>

        <div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm">
          <h1 className="text-xl font-bold text-zinc-800 mb-6">
            Payment Method
          </h1>

          <div className="space-y-3 mb-8">
            {/* Card Option */}
            <div
              onClick={() => setPaymentMethod("card")}
              className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                paymentMethod === "card"
                  ? "border-orange-500 bg-orange-50/30"
                  : "border-zinc-200 hover:bg-zinc-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <FaCreditCard
                  className={
                    paymentMethod === "card"
                      ? "text-orange-500"
                      : "text-zinc-400"
                  }
                />
                <span className="text-sm font-medium text-zinc-700">
                  Credit / Debit Card
                </span>
              </div>
              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  paymentMethod === "card"
                    ? "border-orange-500"
                    : "border-zinc-300"
                }`}
              >
                {paymentMethod === "card" && (
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                )}
              </div>
            </div>

            {/* UPI Option */}
            <div
              onClick={() => setPaymentMethod("upi")}
              className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                paymentMethod === "upi"
                  ? "border-orange-500 bg-orange-50/30"
                  : "border-zinc-200 hover:bg-zinc-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <FaMobileAlt
                  className={
                    paymentMethod === "upi"
                      ? "text-orange-500"
                      : "text-zinc-400"
                  }
                />
                <span className="text-sm font-medium text-zinc-700">
                  UPI / Mobile Wallet
                </span>
              </div>
              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  paymentMethod === "upi"
                    ? "border-orange-500"
                    : "border-zinc-300"
                }`}
              >
                {paymentMethod === "upi" && (
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-100 pt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-zinc-500 text-sm">Total Amount</span>
              <span className="text-xl font-bold text-zinc-900">₹{total}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={!paymentMethod || cart.length === 0}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-zinc-200 disabled:cursor-not-allowed text-white py-3.5 rounded-xl text-sm font-bold transition-all"
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
