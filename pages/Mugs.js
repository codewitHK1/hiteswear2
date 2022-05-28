/* eslint-disable react/no-unknown-property */
import Link from "next/link";
import React from "react";
import Product from "../models/Product";
import mongoose from "mongoose";

const Mugs = ({ products }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((item) => {
            return (
              <Link
                passHref={true}
                key={item._id}
                href={`/product/${item.slug}`}
              >
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="m-auto md:mx-0 h-[30vh] md:h[36vh] block"
                      src={item.image}
                    />
                  </a>
                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      jackets
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {item.title}
                    </h2>
                    <p className="mt-1 font-bold">₹399.00</p>
                    <p className="mt-1">S,M,L,XL</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  if (mongoose.connections[0].readyState) {
  }
  await mongoose.connect(process.env.MONGO_URI);
  let products = await Product.find({ category: "jewelery" });
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}

export default Mugs;
