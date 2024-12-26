import { React, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm, } from 'react-hook-form';
import Navbar from '../Components/Navbar';
import { Link } from "react-router-dom";
import { auth } from "../config/firebaseconfig"
import { createUserWithEmailAndPassword } from "firebase/auth";

function Registration() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm()
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true)
    const userData = await createUserWithEmailAndPassword(auth, data.email, data.password).then(() => {
      reset()
      toast.success("User Registered Successfully")
    }).catch((error) => {
      reset()
      toast.error(error.message)
      toast.error(error.code)
    })



  }

  return (
    <>
      <div id="page" className="h-screen w-screen bg-gray-950 overflow-hidden text-white">
        <Navbar />
        <div id="form" className="flex justify-center items-center h-full">
          <div className="relative flex flex-col rounded-xl bg-white p-10">
            <h4 className="block text-xl font-medium text-slate-800">
              Join the Waitlist
            </h4>
            <p className="text-slate-700 font-light">
              Nice to meet you! Register for Waitlist.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <div className="w-full max-w-sm min-w-[200px]">
                  <label className="block mb-2 text-sm text-slate-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Your Name"
                    {...register("name", {
                      required: true,
                      minLength: { value: 4, message: "Name should be at least 4 characters" },
                      maxLength: { value: 20, message: "Name should be at most 20 characters" },
                    })}
                    />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                </div>
                <div className="w-full max-w-sm min-w-[200px]">
                  <label className="block mb-2 text-sm text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Your Email"
                    {...register("email", {
                      required: true,
                      minLength: { value: 7, message: "Email should be at least 7 characters" },
                      maxLength: { value: 80, message: "Email should be at most 80 characters" },
                    })}
                    />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>
                <div className="w-full max-w-sm min-w-[200px]">
                  <label className="block mb-2 text-sm text-slate-700">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Your Password"
                    {...register("password", {
                      required: true,
                      minLength: { value: 8, message: "Password should be at least 8 characters" },
                      maxLength: { value: 16, message: "Password should be at most 16 characters" },
                    })}
                    />
                  {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                </div>
              </div>
              <div className="inline-flex items-center mt-2">
                <label className="flex items-center cursor-pointer relative" htmlFor="check-2">
                  <input
                    type="checkbox"
                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-purple-500"
                    id="check-2"
                    />
                  <span className="absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                  </span>
                </label>
                <label className="cursor-pointer ml-2 text-slate-700 text-sm" htmlFor="check-2">
                  Remember Me
                </label>
              </div>
              {isSubmitting && <p className='text-red-700 text-sm'> For submitting please wait...</p>}
              <button
                className="mt-4 w-full rounded-md py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-purple-500 focus:shadow-none active:bg-purple-500 hover:bg-purple-500 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: "linear-gradient(90deg, rgba(148,0,252,1) 0%, rgba(0,142,247,1) 100%, rgba(31,31,31,1) 100%)",
                }}
                >
Join Waitlist
              </button>
                <ToastContainer/>
              <p className="flex justify-center mt-6 text-sm text-slate-700">
                Already have an account?
                <Link to="/login" className="ml-1 text-sm font-semibold text-slate-700 underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

    </>
  )

}

export default Registration;