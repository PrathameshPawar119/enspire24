"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link href={link.url}>
      <div className="relative inline-block overflow-hidden rounded p-1 transition-colors duration-300">
        <span className="block">{link.title}</span>
        <span
          className={`absolute inset-0 bg-gradient-to-r from-transparent to-gray-200 opacity-0 transition-opacity duration-300 ${
            pathName === link.url ? 'opacity-100' : ''
          }`}
        />
      </div>
    </Link>
  );
};

export default NavLink;
