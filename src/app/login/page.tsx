"use client";
import Image from "next/image";
import LoginImage from "../../../public/loginImage.svg";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const router = useRouter();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
    axios
      .post("/api/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        // Assuming your API returns some data indicating success
        // You may need to adjust this based on your API response
        if (res.data.success) {
          // Redirect to the dashboard route
          // router.push("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="bg-base-100 min-h-screen flex items-center justify-center">
      <div className="bg-customColor-bg flex py-5 px-6">
        <div className="flex flex-1 justify-center items-center border-r-[1px] pr-5">
          <div className="">
            <h1 className="text-4xl font-bold text-center mb-5">
              Welcome to <br /> Combination of Power
            </h1>
            <form onSubmit={onSubmit} action="" className="flex flex-col">
              <label htmlFor="email" className="font-bold mb-1">
                Login with your email
              </label>
              <input
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
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
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
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

export default Login;
//
