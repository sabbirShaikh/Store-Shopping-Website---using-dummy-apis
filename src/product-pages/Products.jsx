import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import useCartContext from "../cart-context/CartContext";
import { FaSearch, FaFilter, FaStar, FaTimes } from "react-icons/fa";
import ProductSkeleton from "./ProductSkeleton";

function Products() {
  const [products, setProducts] = useState([]);
  const [filterProd, setFilterProd] = useState([]);
  const [searchInp, setSearchInp] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [loading, setLoading] = useState(true);
  const { cart, setCart } = useCartContext();

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
        setFilterProd(data.products);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const clearAllFilters = () => {
    setSearchInp("");
    setSelectedCategory("all");
    setSelectedRating("all");
    setFilterProd(products);
  };

  function searchProduct() {
    let findProd = products.filter(
      (p) =>
        p.description.toLowerCase().includes(searchInp.toLowerCase()) ||
        p.title.toLowerCase().includes(searchInp.toLowerCase())
    );
    setFilterProd(findProd);
  }

  function filterCategory(e) {
    let cata = e.target.value;
    setSelectedCategory(cata);
    setFilterProd(
      products.filter((p) => (cata == "all" ? p : p.category == cata))
    );
  }

  function filterRating(e) {
    let ratingValue = e.target.value;
    setSelectedRating(ratingValue);
    let rating = ratingValue.split(" ")[0];
    setFilterProd(
      products.filter((p) =>
        rating == "all" ? p : p.rating >= parseFloat(rating)
      )
    );
  }

  function addToCart(prod) {
    setCart([...cart, { ...prod, cart: 1 }]);
  }

  function cartDec(id) {
    setCart(
      cart
        .map((c) => (c.id == id ? { ...c, cart: c.cart - 1 } : c))
        .filter((p) => p.cart > 0)
    );
  }

  function cartInc(id) {
    setCart(cart.map((c) => (c.id == id ? { ...c, cart: c.cart + 1 } : c)));
  }

  return (
    <section className="bg-zinc-50 min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-zinc-900 tracking-tight">
            Explore <span className="text-orange-500">Products</span>
          </h1>
          <p className="text-zinc-500 mt-2">
            Discover quality items from various categories.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-zinc-200 mb-12 flex flex-col lg:flex-row gap-4 items-center">
          <div className="w-full lg:flex-1 flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                onChange={(e) => setSearchInp(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && searchProduct()}
                value={searchInp}
                placeholder="Search products..."
                className="w-full bg-zinc-50 border-none py-3 md:py-4 pl-12 pr-4 rounded-2xl focus:ring-2 focus:ring-orange-500/20 transition-all text-zinc-800 font-medium text-sm md:text-base"
              />
            </div>

            <div className="flex gap-2 h-12 sm:h-auto">
              <button
                onClick={clearAllFilters}
                className="flex-1 sm:flex-none px-4 bg-zinc-100 hover:bg-zinc-200 text-zinc-600 rounded-2xl transition-colors flex items-center justify-center gap-2 font-bold text-xs md:text-sm whitespace-nowrap"
              >
                <FaTimes size={12} />
                <span className="hidden xs:block">Clear Filters</span>
                <span className="xs:hidden">Clear</span>
              </button>

              <button
                className="flex-1 sm:flex-none px-8 bg-zinc-900 hover:bg-black text-white font-bold rounded-2xl transition-colors text-sm"
                onClick={searchProduct}
              >
                Search
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <div className="flex items-center gap-3 bg-zinc-50 px-4 py-2 rounded-2xl border border-zinc-100 w-full sm:flex-1 lg:w-48">
              <FaFilter className="text-zinc-400 text-xs shrink-0" />
              <select
                value={selectedCategory}
                onChange={filterCategory}
                className="bg-transparent border-none text-sm font-bold text-zinc-700 focus:ring-0 cursor-pointer py-2 w-full outline-none"
              >
                <option value={"all"}>All Categories</option>
                {products
                  .reduce((acc, curr) => {
                    if (!acc.includes(curr.category)) acc.push(curr.category);
                    return acc;
                  }, [])
                  .map((p) => (
                    <option key={p} value={p}>
                      {p.charAt(0).toUpperCase() + p.slice(1)}
                    </option>
                  ))}
              </select>
            </div>

            <div className="flex items-center gap-3 bg-zinc-50 px-4 py-2 rounded-2xl border border-zinc-100 w-full sm:flex-1 lg:w-44">
              <FaStar className="text-orange-400 text-xs shrink-0" />
              <select
                value={selectedRating}
                className="bg-transparent border-none text-sm font-bold text-zinc-700 focus:ring-0 cursor-pointer py-2 w-full outline-none"
                onChange={filterRating}
              >
                <option value={"all"}>Any Rating</option>
                <option value="4.5">4.5 & Above</option>
                <option value="4.0">4.0 & Above</option>
                <option value="3.5">3.5 & Above</option>
                <option value="3.0">3.0 & Above</option>
              </select>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        ) : filterProd.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filterProd.map((product) => (
              <SingleProduct
                key={product.id}
                addToCart={addToCart}
                product={product}
                cartInc={cartInc}
                cartDec={cartDec}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-zinc-100 shadow-sm">
            <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mb-4">
              <FaSearch className="text-zinc-300 text-3xl" />
            </div>
            <h2 className="text-xl font-bold text-zinc-800">
              No results found
            </h2>
            <p className="text-zinc-500">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
