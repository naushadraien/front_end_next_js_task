"use client";
import SearchBar from "@/components/searchBar";
import { RootState } from "@/lib/redux/store/store";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  return (
    <nav className=" sticky top-0 bg-white z-50">
      <div className=" contain  er max-w-full">
        <div className="hidden lg:flex items-center px-4 md:px-12 py-6 justify-between shadow w-full">
          <Link href="/">
            <h2 className="font-extrabold text-purple-800 text-xl">
              OnlineStore
            </h2>
          </Link>

          <SearchBar />

          <div className="flex items-center space-x-3.5 text-sm">
            <Link href={"/"}>
              <div className="text-purple-800 font-bold text-lg hover:text-purple-600">
                Home
              </div>
            </Link>

            <Link href="/cart">
              <button
                type="button"
                aria-label="View shopping cart"
                className="relative mt-1 p-2 focus:outline-none"
              >
                <span className="sr-only">View shopping cart</span>
                <span
                  aria-hidden="true"
                  className="text-purple-800 text-2xl font-bold hover:text-purple-600"
                >
                  <AiOutlineShoppingCart />
                </span>
                {cartItems && cartItems.length > 0 && (
                  <span className="absolute -mt-8 ml-2 text-xs text-slate-200 bg-orange-500 rounded-full px-[5px] py-[1.5px]">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </div>
        <div className="flex lg:hidden items-center px-4 md:px-12 justify-between w-full py-4">
          <Link href="/">
            <h2 className="text-purple-800 font-extrabold text-xl">
              OnlineStore
            </h2>
          </Link>
          <button
            type="button"
            aria-label="mobile-nav-menu"
            onClick={() => setMenu(!menu)}
          >
            {menu ? (
              <IoMdClose className="text-3xl lg:hidden rotate-90 text-purple-800" />
            ) : (
              <RxHamburgerMenu className="text-3xl lg:hidden text-purple-800" />
            )}
          </button>
        </div>
        {menu && (
          <div className="flex flex-col lg:hidden shadow pb-7 space-y-4 justify-center items-center">
            <div className="mt-4">
              <SearchBar />
            </div>

            <div className="block text-sm">
              <Link href={"/"} className="flex my-2">
                <div className="text-purple-800 font-bold text-lg hover:text-purple-600">
                  Home
                </div>
              </Link>

              <Link href="/cart">
                <button
                  type="button"
                  aria-label="View shopping cart"
                  className="relative mt-1 p-2 focus:outline-none"
                >
                  <span className="sr-only">View shopping cart</span>
                  <span
                    aria-hidden="true"
                    className="text-purple-800 text-2xl font-bold hover:text-purple-600"
                  >
                    <AiOutlineShoppingCart />
                  </span>
                  {cartItems && cartItems.length > 0 && (
                    <span className="absolute -mt-8 ml-2 text-xs text-slate-200 bg-orange-500 rounded-full px-[5px] py-[1.5px]">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
