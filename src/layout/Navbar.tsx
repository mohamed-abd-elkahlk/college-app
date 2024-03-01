import { navBarLinks } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul className="flex gap-6">
        {navBarLinks.map((link) => (
          <Link href={link.href} key={link.id}>
            {link.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
