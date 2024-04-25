"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavItems = () => {
  const pathName = usePathname();
  return (
    <ul className="md:flex-between  flex w-full flex-col items-start gap-5 md:flex-row ">
      {headerLinks.map((link: any) => {
        const isActive = pathName === link.route;

        return (
          <li
            key={link.label}
            className={`text-lg ${
              isActive ? "text-blue-500" : "text-black-500"
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
