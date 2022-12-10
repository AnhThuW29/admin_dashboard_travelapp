import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import image from "../src/imgs/orangeLogo.png";
import axios from "axios";

export default function Test(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      await axios.post
        ("http://localhost:9000/v1/nguoidung/dangnhap", {
          Email: "duong@gmail.com",
          MatKhau: "abc123456",
        })
        .then((response) => {
          if (response.data !== "") {
            localStorage.setItem("userData", JSON.stringify(response.data));
            console.log("userData", response.data);
            props.setToken(response.data);
            window.location.replace("/");
          } else {
            console.log("login failed");
          }
        })
        .catch((err) => {
          console.log("abc: ", err);
        });
      console.log("::", email + " + " + password);
    } else console.log("email pass null");

    return false;
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-48 h-auto"
              src={image}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Đăng nhập tài khoản của bạn
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                  // value="giao@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Mật khẩu
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  // value="abc123456"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Ghi nhớ tài khoản
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-red-400 hover:text-red-600"
                >
                  Quên mật khẩu?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-400 py-2 px-4 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-amber-200 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
