/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import mongoose from "mongoose";
import Product from "../../models/Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Post = ({ buyNow, addToCart, product }) => {
  const [pin, setpin] = useState();
  const [service, setservice] = useState();
  const router = useRouter();
  const { slug } = router.query;

  const checkService = async () => {
    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    let pinjson = await pins.json();
    if (pinjson.includes(parseInt(pin))) {
      setservice(true);
      toast.success("your pincode in serviceable", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setservice(false);
      toast.error("Sorry ! your pincode is not serviceable", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const onChangePin = (e) => {
    setpin(e.target.value);
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container px-5 py-16 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto  object-cover object-top px-24 rounded"
            src={product.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              HITSWEAR
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>

            <p className="leading-relaxed">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ₹399.00
              </span>
              <button
                onClick={() => {
                  addToCart(slug, 1, 399, product.title, "L", "White");
                }}
                className="flex ml-5 text-white bg-yellow-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-yellow-800 rounded"
              >
                Buy Now
              </button>
              <button
                onClick={() => {
                  addToCart(slug, 1, 399, product.title, "L", "White");
                }}
                className="flex ml-2 text-white bg-blue-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-blue-600 rounded"
              >
                Add To Cart
              </button>
            </div>
            <div className="pin mt-6 flex space-x-2 text-sm">
              <input
                onChange={onChangePin}
                placeholder="check your delivery Pincode"
                className="px-2 border-2 border-blue-400"
                type="text"
              />
              <button
                onClick={checkService}
                className=" text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
              >
                Check
              </button>
            </div>
            {!service && service != null && (
              <div className="text-red-600 mt-2">
                We do not deliver this pincode yet
              </div>
            )}
            {service && service != null && (
              <div className="text-green-600 mt-2">
                yehhh! this pincode is serviceable
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  if (mongoose.connections[0].readyState) {
  }
  await mongoose.connect(process.env.MONGO_URI);
  let product = await Product.findOne({ slug: context.query.slug });

  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  };
}
export default Post;
