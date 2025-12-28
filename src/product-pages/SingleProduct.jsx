import React from "react";
import {
  FaStar,
  FaPlus,
  FaMinus,
  FaShoppingBag,
  FaArrowRight,
} from "react-icons/fa";
import useCartContext from "../cart-context/CartContext";

function SingleProduct({ product, addToCart, cartInc, cartDec }) {
  const { title, description, images, price, rating, category } = product;
  const { cart } = useCartContext();
  const findProd = cart.find((p) => p.id === product.id);
  const cartCount = findProd?.cart || 0;

  return (
    <div className="group bg-white border border-zinc-200 rounded-3xl overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-zinc-200/50 hover:-translate-y-1 transition-all duration-500">
      {/* Image Container */}
      <div className="relative aspect-4/5 bg-zinc-50 overflow-hidden">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
        />

        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-zinc-500 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm border border-zinc-100">
            {category}
          </span>
        </div>

        {/* Floating Rating Badge */}
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded-lg flex items-center gap-1 shadow-lg shadow-orange-500/30">
          <FaStar size={10} />
          <span className="text-xs font-bold">{rating}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <h1 className="text-lg font-bold text-zinc-900 line-clamp-1 group-hover:text-orange-500 transition-colors">
            {title}
          </h1>
          <p className="text-sm text-zinc-500 line-clamp-2 mt-2 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-auto">
          <div className="flex items-baseline justify-between mb-6">
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                Price
              </span>
              <span className="text-2xl font-black text-zinc-900">
                ₹{Math.trunc(price) * 90}
              </span>
            </div>
            <div className="text-right">
              <span className="block text-[10px] text-green-600 font-bold uppercase tracking-wider">
                In Stock
              </span>
              <span className="text-[10px] text-zinc-400">Ready to ship</span>
            </div>
          </div>

          {/* Dynamic Action Area */}
          <div className="flex flex-col gap-3">
            {cartCount > 0 ? (
              <div className="flex items-center bg-zinc-900 rounded-2xl h-12 p-1 shadow-lg shadow-zinc-900/20">
                <button
                  onClick={() => cartDec(product.id)}
                  className="flex-1 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  <FaMinus size={12} />
                </button>
                <span className="flex-1 text-center text-white font-black text-lg">
                  {cartCount}
                </span>
                <button
                  onClick={() => cartInc(product.id)}
                  className="flex-1 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  <FaPlus size={12} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => addToCart(product)}
                className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-orange-500/20 active:scale-95"
              >
                <FaShoppingBag size={14} />
                Add to Cart
              </button>
            )}

            <button className="w-full h-12 bg-white border-2 border-zinc-100 hover:border-zinc-900 text-zinc-900 font-bold rounded-2xl transition-all flex items-center justify-center gap-2 text-sm group/btn">
              Quick Details
              <FaArrowRight
                size={10}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
