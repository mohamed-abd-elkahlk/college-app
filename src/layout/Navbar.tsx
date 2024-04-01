"use client";
import ProfileButton from "@/components/shared/ProfileButton";
import { Button } from "@/components/ui/button";
import { navBarLinks } from "@/constants";
import { useUserContext } from "@/context/AuhtProvider";
import { MenuSquareIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const { user } = useUserContext();
  const pathname = usePathname();
  const path = /dashboard(.*)/;

  if (path.test(pathname)) {
    return;
  }
  return (
    <div
      className={`flex-center justify-around fixed top-0 left-0 w-full z-10 bg-white shadow-md px-4 py-2 ${
        isScrolled ? "hidden" : ""
      }`}
    >
      {/* computer nav */}
      <div className="hidden md:flex-center  md:justify-around w-full">
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
          {user._id !== "" ? (
            <ProfileButton user={user} />
          ) : (
            <Link href={"/portal/auth"}>
              <Button>Portal</Button>
            </Link>
          )}
        </div>
      </div>

      {/* mobile nav */}

      <div className="relative flex-center justify-between flex-row md:hidden items-center w-full ">
        <div>
          <Link href={"/"}>
            <h2 className="text-5xl text-red-200 font-bold">Matrix</h2>
          </Link>
        </div>

        <MenuSquareIcon
          onClick={() => {
            setShow((prev) => !prev);
          }}
          className="md:hidden cursor-pointer"
        />

        {show && (
          <div className="rounded-lg absolute flex-center flex-col gap-6 right-0 top-12 bg-slate-800 text-white">
            <ul className="flex-center flex-col gap-6 px-3 py-6 ">
              {navBarLinks.map((link) => (
                <Link
                  href={link.href}
                  onClick={() => setShow((prev) => !prev)}
                  className="p-2 border rounded-md w-full text-center"
                  key={link.id}
                >
                  {link.title}
                </Link>
              ))}
            </ul>
            <div className="px-3 grid place-items-center mb-6">
              {user._id !== "" ? (
                <ProfileButton user={user} />
              ) : (
                <Link href={"/portal/auth"}>
                  <Button>Portal</Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
