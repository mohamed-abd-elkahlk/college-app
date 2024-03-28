import { sideNavLinks } from "@/constants";
import Link from "next/link";

const SideNav = () => {
  return (
    <section className="absolute top-0 left-0 h-screen  bg-white z-[5] shadow  px-6">
      <h2 className="text-2xl font-bold">Admin Panal</h2>
      <ul className="flex flex-col  gap-6 p-6">
        {sideNavLinks.map((link) => (
          <Link key={link.id} href={link.href}>
            <li className="text-xl font-semibold">{link.title}</li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default SideNav;
