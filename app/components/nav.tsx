import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../lib/config";

const navItems = {
  "/": { name: "about" },
  "/blog": { name: "blog" },
  "/projects": { name: "projects" },

};

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#111010] py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-end space-x-8">
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
    </nav>
  );
}
