import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import config from "../lib/config";

export default function Navigation() {
  const router = useRouter();
  const links = [
    { to: "/about", text: "About", active: router.pathname === "/about" },
    {
      to: "/portfolio",
      text: "Portfolio",
      active: router.pathname.startsWith("/portfolio"),
    },
    {
      to: "/services",
      text: "Services",
      active: router.pathname === "/services",
    },
    {
      to: "/posts",
      text: "Blog",
      active: router.pathname.startsWith("/posts"),
    },
    { to: "/contact", text: "Contact", active: router.pathname === "/contact" },
  ];

  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col items-stretch md:block ${
        expanded ? "h-screen" : ""
      }`}
    >
      <div className="bg-white border-b">
        <div className="border-t-8 border-teal-600"></div>
        <div className="container h-32 flex items-center justify-between">
          <Link href="/">
            <a>
              <img
                src={config.logo_url}
                alt={config.site_title}
                className="h-20"
              />
            </a>
          </Link>
          <ul className="hidden md:flex items-center text-lg text-gray-600 md:-mr-4">
            {links.map((link) => {
              return (
                <li key={link.to}>
                  <Link href={link.to}>
                    <a
                      className={`block px-4 py-2 hover:text-teal-600 ${
                        link.active ? "text-teal-500" : ""
                      }`}
                    >
                      {link.text}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            className="md:hidden"
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            <i className="block my-2 border-b-2 border-gray-600 w-8"></i>
            <i className="block my-2 border-b-2 border-gray-600 w-8"></i>
            <i className="block my-2 border-b-2 border-gray-600 w-8"></i>
          </button>
        </div>
      </div>
      {expanded && (
        <div className="flex-1 bg-gray-200 flex flex-col justify-end">
          <div className="container py-6">
            <ul className="text-gray-500">
              {links.map((link) => {
                return (
                  <li>
                    <Link href={link.to}>
                      <a
                        className={`block text-xl py-1 ${
                          link.active ? "text-teal-500" : ""
                        }`}
                      >
                        {link.text}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
