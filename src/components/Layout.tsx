import Head from "next/head";
import Link from "next/link";
import Copyright from "./Copyright";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  const links = [
    { to: "/about", text: "About Us" },
    { to: "/portfolio", text: "Portfolio" },
    { to: "/services", text: "Our Services" },
    { to: "/posts", text: "Blog" },
    { to: "/contact", text: "Contact Us" },
  ];

  return (
    <div className="root font-sans min-h-screen flex flex-col mt-32">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-700">
        <div className="my-24 container">
          <ul className="text-gray-400 font-light flex flex-wrap md:w-1/2 -mx-2">
            {links.map((link) => {
              return (
                <li key={link.to} className="py-1 w-1/2 px-2">
                  <Link href={link.to}>
                    <a className="hover:text-white transition-colors duration-100 text-lg md:text-xl">
                      {link.text}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Copyright />
      </footer>
    </div>
  );
}
