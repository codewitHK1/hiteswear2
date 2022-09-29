import { useState, React, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/Login");
    }
  }, []);

  const handleChange1 = (e) => {
    setName(e.target.value);
  };
  const handleChange2 = (e) => {
    setEmail(e.target.value);
  };
  const handleChange3 = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, password };

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let responce = await res.json();

    setName("");
    setEmail("");
    setPassword("");
    toast.success("congrats! your account created", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      router.push("/Login");
    }, 1000);
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="/logo.jpg" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign Up for an account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <Link href={"/Login"}>
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Log In here
              </a>
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                value={name}
                onChange={handleChange1}
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full
            px-3 py-2 border border-gray-300 placeholder-gray-500 
            text-gray-900 rounded-t-md focus:outline-none
             focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                value={email}
                onChange={handleChange2}
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full
            px-3 py-2 border border-gray-300 placeholder-gray-500 
            text-gray-900 rounded-t-md focus:outline-none
             focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                value={password}
                onChange={handleChange3}
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border
           border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md 
           focus:outline-none focus:ring-blue-500
            focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
