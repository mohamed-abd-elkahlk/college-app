"use client";
import { Button } from "@/components/ui/button";
import { navBarLinks } from "@/constants";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div
      // animate={isScrolled ? "hidden" : "visible"}
      className={`flex-center justify-around fixed top-0 left-0 w-full z-10 bg-white shadow-md px-4 py-2 ${
        isScrolled ? "hidden" : ""
      }`}
    >
      <div>
        <Link href={"/"}>
          <h2 className="text-5xl text-red-200 font-bold">Matrix</h2>
        </Link>
      </div>
      <ul className="flex gap-6">
        {navBarLinks.map((link) => (
          <Link href={link.href} key={link.id}>
            {link.title}
          </Link>
        ))}
      </ul>
      <div className="flex gap-6">
        <Link href={"/portal/auth"}>
          <Button>Portal</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
