import Image from "next/image";
import Link from "next/link";

export function LandingNav() {
  return (
    <nav className="fixed w-full z-20">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-6 px-12 mt-5 rounded-3xl bg-white/30 backdrop-blur-md border border-slate-500 overflow-clip">
        <div className="absolute top-[-30px] left-0 w-full h-8 bg-fuchsia-400/60 rounded-full filter blur-[25px]"></div>
        <div className="absolute top-[90px] left-0 w-full h-8 bg-sky-400/60 rounded-full filter blur-[25px]"></div>
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">Enigma Logo</span>
        </Link>
        <div className="flex order-2 text-md">
          <button
            type="button"
            className="text-white bg-gradient-to-b from-sky-400 to-fuchsia-600 focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-xl py-3 px-8 text-center mr-0"
          >
            Launch App
          </button>
        </div>
        <div className="items-center justify-between flex w-auto" id="navbar-sticky">
          <ul className="flex flex-row p-4 font-medium space-x-8 text-xl text-white">
            <li>
              <a
                href="#"
                className="block bg-gradient-to-r from-sky-400 to-fuchsia-600 bg-clip-text text-transparent p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded text-white hover:bg-gradient-to-r from-sky-400 to-fuchsia-600 hover:bg-clip-text hover:text-transparent"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded text-white hover:bg-gradient-to-r from-sky-400 to-fuchsia-600 hover:bg-clip-text hover:text-transparent"
              >
                View NFTs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded text-white hover:bg-gradient-to-r from-sky-400 to-fuchsia-600 hover:bg-clip-text hover:text-transparent"
              >
                Use Cases
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded text-white hover:bg-gradient-to-r from-sky-400 to-fuchsia-600 hover:bg-clip-text hover:text-transparent"
              >
                Community
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
