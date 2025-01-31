import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export default function Layout({ children }) {
  return (
    <>
      <header>

      </header>
      {children}
      <footer className=" flex justify-center items-end text-white p-4">
        <small>© 2025 All rights reserved.</small>
      </footer>
    </>
  );
}
