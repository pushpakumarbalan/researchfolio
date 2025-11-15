"use client";

import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../lib/config";
import { usePathname } from "next/navigation";

const navItems = {
  "/": { name: "about" },
  "/publications": { name: "publications" },
  "/blog": { name: "blog" },
  "/projects": { name: "projects" },
};

export function Navbar() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/";

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#111010] py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
        <div>
          {!isAboutPage && (
            <Link href="/" className="font-bold text-lg text-gray-900 dark:text-white">
              Your R. Name!
            </Link>
          )}
        </div>
        <div className="flex items-center space-x-8">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
