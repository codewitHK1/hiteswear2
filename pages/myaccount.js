import { useEffect, React } from "react";
import { useRouter } from "next/router";

const Myaccount = () => {
  const router = useRouter();
  // useEffect(() => {
  //   if (!localStorage.getItem("myuse")) {
  //     router.push("/");
  //   }
  // }, []);

  return (
    <>
      <div className="container mx-auto my-9">
        <h1 className="text-3xl text-center font-bold"> Myaccount </h1>
      </div>
      <div className="container px-3  sm:m-auto">
        <h2 className="font-bold text-xl ">1. Delivery Details</h2>
        <div className="mx-auto flex my-2">
          <div className="p-2 w-1/2">
            <div className=" mb-3">
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
            <div className=" mb-3">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
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

        <div className="mx-auto flex my-2">
          <div className="p-2 w-1/2">
            <div className=" mb-3">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
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
            <div className=" mb-3">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
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
            <div className=" mb-3">
              <label
                htmlFor="state"
                className="leading-7 text-sm text-gray-600"
              >
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
            <div className=" mb-3">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
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
        <button
          className="flex mr-2 text-white mb-3  bg-blue-600 border-0 
          py-2 px-3 focus:outline-none hover:bg-blue-800 rounded text-sm"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Myaccount;
