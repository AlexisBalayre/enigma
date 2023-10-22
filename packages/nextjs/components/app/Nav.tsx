import { RainbowKitAuthenticationProvider } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { RainbowKitCustomConnectButton } from "../scaffold-eth";
import Image from "next/image"; // Import the Image component
import EnigmaLogo from "../../public/assets/EnigmaLogo.png";

export function AppNavWrapper({ children }: { children: React.ReactNode }) {
  // the nav should be able to pass down a global wallet session state
  return (
    <>
      <aside className="fixed top-0 left-0 z-40 w-96 h-screen" aria-label="Sidebar">
        <div className="flex flex-col h-full px-3 py-4 overflow-y-auto bg-gray-900">
          <div className="flex-grow overflow-y-auto bg-gray-900 px-3 py-4">
            <ul className="space-y-2 font-medium text-xl">
              <li className="text-white font-bold text-3xl p-6">
                <div className="relative h-20 w-20">
                  <Image src={EnigmaLogo} alt="Enigma Logo" layout="fill" objectFit="cover" objectPosition="0% 0%" />
                </div>
              </li>
              <li>
                <Link href="/app" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="/app/explore" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                    />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium rounded-full bg-blue-900 text-blue-300">
                    3
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/app/upload" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="flex-1 ml-3 whitespace-nowrap">Mint</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/app/unlock"
                  className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                    />
                  </svg>

                  <span className="flex-1 ml-3 whitespace-nowrap">Unlock</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/app/transfer"
                  className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Transfer</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/app/chatbot"
                  className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                    />
                  </svg>

                  <span className="flex-1 ml-3 whitespace-nowrap">Chatbot</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center pb-10 text-white font-semibold">
            <RainbowKitCustomConnectButton />
          </div>
          <ul className="space-y-2 font-medium border-t border-gray-700 pt-4 px-3">
            <li>
              <Link
                href="#"
                className="flex items-center p-2 transition duration-75 rounded-lg hover:bg-gray-700 text-white group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                <span className="ml-3">About</span>
              </Link>
            </li>
            <li className="text-sm text-white">Made with ❤️ by Alex, Alexis, Jerry, Josh and Liam</li>
          </ul>
        </div>
      </aside>
      <div className="ml-96">{children}</div>
    </>
  );
}
