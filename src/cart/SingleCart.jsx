import { FaPlus, FaMinus, FaRegTrashAlt } from "react-icons/fa";
import useCartContext from "../cart-context/CartContext";

function SingleCart({ sinCart }) {
  const { id, images, price, title, description } = sinCart;
  const { cart, setCart } = useCartContext();

  function cartInc(id) {
    setCart(cart.map((c) => (c.id === id ? { ...c, cart: c.cart + 1 } : c)));
  }

  function cartDec(id) {
    setCart(
      cart
        .map((c) => (c.id === id ? { ...c, cart: c.cart - 1 } : c))
        .filter((p) => p.cart > 0)
    );
  }

  const unitPrice = Math.trunc(price) * 90;

  return (
    <div className="bg-white flex flex-col sm:flex-row border border-zinc-200 rounded-xl overflow-hidden hover:shadow-md transition">
      {/* Image Container */}
      <div className="sm:w-48 h-48 sm:h-auto bg-zinc-100">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h1 className="text-xl font-bold text-zinc-800 leading-tight">
              {title}
            </h1>
            <button
              onClick={() => setCart(cart.filter((c) => c.id !== id))}
              className="text-zinc-400 hover:text-red-500 transition"
            >
              <FaRegTrashAlt />
            </button>
          </div>
          <p className="text-sm text-zinc-500 mt-2 line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-end justify-between mt-4">
          {/* Price Info */}
          <div>
            <p className="text-xs text-zinc-400 uppercase font-bold tracking-wider">
              Unit Price
            </p>
            <h3 className="text-xl font-semibold text-zinc-800">
              ₹{unitPrice}
            </h3>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center bg-zinc-100 rounded-lg p-1 border border-zinc-200">
            <button
              onClick={() => cartDec(id)}
              className="h-8 w-8 flex items-center justify-center bg-white rounded-md shadow-sm text-zinc-600 hover:bg-zinc-50"
            >
              <FaMinus size={12} />
            </button>
            <span className="w-10 text-center font-bold text-zinc-700">
              {sinCart.cart}
            </span>
            <button
              onClick={() => cartInc(id)}
              className="h-8 w-8 flex items-center justify-center bg-white rounded-md shadow-sm text-zinc-600 hover:bg-zinc-50"
            >
              <FaPlus size={12} />
            </button>
          </div>

          {/* Subtotal */}
          <div className="text-right">
            <p className="text-xs text-zinc-400 uppercase font-bold tracking-wider">
              Subtotal
            </p>
            <h1 className="text-xl font-bold text-zinc-900">
              ₹{unitPrice * sinCart.cart}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCart;
