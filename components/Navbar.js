import React from "react";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { useRef, useState, useEffect } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiOutlineMinusSquare,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useRouter } from "next/router";

const Navbar = ({
  user,
  logout,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  const [dropDown, setDropDown] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const router = useRouter();

  useEffect(() => {
    Object.keys(cart).length !== 0 && setSidebar(true);
    let exemted = ["/Checkout", "/Order", "/orders"];
    if (exemted.includes(router.pathname)) {
      setSidebar(false);
    }
  }, []);

  const toggleCart = () => {
    setSidebar(!sidebar);
    // if (ref.current.classList.contains("translate-x-full")) {
    //   ref.current.classList.remove("translate-x-full");
    //   ref.current.classList.add("translate-x-0");
    // } else if (!ref.current.classList.contains("translate-x-full")) {
    //   ref.current.classList.remove("translate-x-0");
    //   ref.current.classList.add("translate-x-full");
    // }
  };
  const ref = useRef();
  return (
    <div
      className="flex flex-col  md:flex-row justify-center
    top-0 sticky z-40 bg-white shadow-md  md:justify-start items-center"
    >
      <div className="logo mr-auto md:mx-3 ">
        <Link href={"/"}>
          <a>
            <Image src="/logo.png" alt="logo" width={100} height={80} />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-7  mx-3 mb-2 font-semibold md:text-lg">
          <Link href={"/Tshirt"}>
            <a>
              <li className="hover:text-blue-500">T-Shirts</li>
            </a>
          </Link>
          <Link href={"/Hoodies"}>
            <a>
              <li className="hover:text-blue-500">Hoodies</li>
            </a>
          </Link>
          <Link href={"/Mugs"}>
            <a>
              <li className="hover:text-blue-500">Mugs</li>
            </a>
          </Link>
          <Link href={"/Stickers"}>
            <a>
              <li className="hover:text-blue-500">Stickers</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="cart absolute items-center right-2 top-5 mx-5 cursor-pointer text-blue-600 flex">
        <span
          onMouseOver={() => {
            setDropDown(true);
          }}
          onMouseLeave={() => {
            setDropDown(false);
          }}
        >
          {dropDown && (
            <div className="absolute right-8 bg-white top-5 shadow-lg rounded-md px-6 w-36 py-4 ">
              <ul>
                <Link href={"/myaccount"}>
                  <a>
                    <li className="font-semibold hover:text-gray-700">
                      My Account
                    </li>
                  </a>
                </Link>
                <Link href={"/orders"}>
                  <a>
                    <li className="font-semibold hover:text-gray-700">
                      Orders
                    </li>
                  </a>
                </Link>

                <li onClick={logout} className="font-bold hover:text-gray-700">
                  Logout
                </li>
              </ul>
            </div>
          )}
          {user.value && <MdAccountCircle className="text-2xl mx-2" />}
        </span>
        {!user.value && (
          <Link href={"/Login"}>
            <button className="bg-blue-500 px-2 py-1 rounded-md text-white mx-2">
              Log In
            </button>
          </Link>
        )}
        <AiOutlineShoppingCart
          onClick={toggleCart}
          className="md:text-2xl text-xl"
        />
      </div>

      <div
        ref={ref}
        className={`w-72 h-[100vh] sideCart overflow-y-scroll z-20 absolute 
        top-0 bg-blue-200 py-10  px-8  transition-all
       ${sidebar ? " right-0" : "-right-96"}`}
      >
        <h2 className="font-bold text-xl">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-2 right-2 cursor-pointer text-2xl text-blue-600 "
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal">
          {Object.keys(cart).length == 0 && (
            <div className="my-5">no items in the cart</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="items flex my-5">
                  <div className="w-2/3 font-semibold">{cart[k].name}</div>
                  <div className="w-1/3 flex items-center justify-center text-2xl text-blue-600">
                    <AiOutlineMinusSquare
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].varient
                        );
                      }}
                      className="cursor-pointer"
                    />
                    <span className="mx-3">{cart[k].qty}</span>
                    <AiOutlinePlusSquare
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].varient
                        );
                      }}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="font-bold mb-2">SubTotal:₹{subTotal}</div>

        <div className="flex">
          <Link href={"/Checkout"}>
            <a>
              <button
                className="flex mr-1 text-white  bg-blue-600 border-0 
          py-2 px-2 focus:outline-none hover:bg-blue-800 rounded text-sm"
              >
                <BsFillBagCheckFill className="m-1" /> Checkout
              </button>
            </a>
          </Link>
          <button
            onClick={clearCart}
            className="flex mr-2 text-white  bg-blue-600 border-0 
          py-2 px-2 focus:outline-none hover:bg-blue-800 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
