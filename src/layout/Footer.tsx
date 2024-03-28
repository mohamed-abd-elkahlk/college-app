"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathname = usePathname();
  const path = /dashboard(.*)/;

  if (path.test(pathname)) {
    return;
  }
  return (
    <footer className="flex justify-between bg-gray-950 px-6 py-12 z-10">
      <div className="flex flex-col gap-6">
        <Link href={"/"}>
          <h2 className="text-5xl text-red-200 font-bold">Matrix</h2>
        </Link>
        <p className="text-white">
          Copyright © 2024 Matrix. All rights reserved.{" "}
        </p>
      </div>
      <div></div>
    </footer>
  );
};
// TODO: add another contact info
export default Footer;
