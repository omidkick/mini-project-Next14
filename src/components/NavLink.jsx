"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ path, children, icon: Icon, className = "", onClick }) {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-secondary-100 transition-all duration-200 text-base
        ${
          isActive
            ? "text-primary-900 font-bold bg-primary-50"
            : "text-secondary-600 hover:text-secondary-900"
        }
        ${className}`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </Link>
  );
}

export default NavLink;
