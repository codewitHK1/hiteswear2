import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import Link from "next/link";

const Checkout = ({ cart, clearCart, subTotal, addToCart, removeFromCart }) => {
  return (
    <div className="container px-3  sm:m-auto">
      <h1 className="font-bold text-3xl text-center my-7"> Checkout</h1>
      <h2 className="font-bold text-xl ">1. Delivery Details</h2>
      <div className="mx-auto flex my-2">
        <div className="p-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50
             rounded border border-gray-300 focus:border-indigo-500 focus:bg-white
              focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
               px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100
             bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 
             focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none
              text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="p-2 w-full">
        <div className=" mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <textarea
            type="text"
            id="address"
            name="address"
            cols="30"
            rows="2"
            className="w-full bg-gray-100
             bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 
             focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none
              text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="p-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              phone
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="w-full bg-gray-100 bg-opacity-50
             rounded border border-gray-300 focus:border-indigo-500 focus:bg-white
              focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
               px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              city
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full bg-gray-100
             bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 
             focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none
              text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="p-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              state
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full bg-gray-100 bg-opacity-50
             rounded border border-gray-300 focus:border-indigo-500 focus:bg-white
              focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
               px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Pincode
            </label>
            <input
              type="number"
              required={true}
              id="pincode"
              name="pincode"
              className="w-full bg-gray-100
             bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 
             focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none
              text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>

      <h2 className="font-bold text-xl">2.Review Cart Items</h2>
      <div className="  sideCart bg-blue-200 py-10  px-8 mx-2 ">
        <ol className="list-decimal">
          {Object.keys(cart).length == 0 && (
            <div className="my-5">no items in the cart</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="items flex my-5">
                  <div className="font-semibold">{cart[k].name}</div>
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
        <span className="font-bold">SubTotal:₹{subTotal}</span>
      </div>
      <div className="mx-4">
        <Link href={"/Checkout"}>
          <button
            className="flex mr-2 text-white  bg-blue-600 border-0 
          py-2 px-4 focus:outline-none hover:bg-blue-800 rounded text-sm"
          >
            ₹PAY:{subTotal}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
