"use client";
import Image from "next/image";
import LoginImage from "../../../public/loginImage.svg";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
const LoginPage = ({ router }: any) => {
  //   const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  console.log(user);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      console.log(alert("Login successful, Move on"));
      router.push("/dashboard");
    } catch (error: any) {
      console.log("Login failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-base-100 min-h-screen flex items-center justify-center">
      <div className="bg-customColor-bg flex py-5 px-6">
        <div className="flex flex-1 justify-center items-center border-r-[1px] pr-5">
          <div className="">
            <h1 className="text-4xl font-bold text-center mb-5">
              Welcome to <br /> Combination of Power
            </h1>
            <form onSubmit={onLogin} action="" className="flex flex-col">
              <label htmlFor="email" className="font-bold mb-1">
                Login with your email
              </label>
              <input
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="p-2 mb-4 rounded w-full border border-black/25 placeholder-black/50 outline-none hover:border-blue-500"
                type="email"
                name="email"
                placeholder="Type Your Email"
                required
              />
              <label htmlFor="email" className="font-bold mb-1">
                Password
              </label>
              <input
                value={user?.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="p-2 rounded w-full border border-black/25 placeholder-black/50 focus:ring-blue-500 focus:border-blue-500 active:border-blue-500 outline-none mb-0.5 hover:border-blue-500"
                type="password"
                name="password"
                placeholder="Type Password"
                required
              />
              <button
                type="submit"
                className="mt-10 bg-[#4C5870] py-2 font-bold text-neutral-50 rounded-lg"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        {/* //Image */}
        <div className="flex-1">
          <Image src={LoginImage} height={700} width={500} alt="login Image" />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
//
