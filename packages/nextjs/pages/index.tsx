import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import { ExampleNFTS } from "~~/components/landing/Examples";
import { LandingNav } from "~~/components/landing/nav";
import BLOCK1 from "~~/public/assets/block1.png";
import CAT from "~~/public/assets/cat.png";
import HEADERHERO from "~~/public/assets/header.png";

// TODO: abstract these to components for ez changes
const Home: NextPage = () => {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    router.push("/app");
  };
  return (
    <div className="">
      <LandingNav />
      <div
        className={`absolute overflow-hidden -z-1 top-40 left-40 w-96 h-96 bg-fuchsia-400/30 rounded-full filter blur-[200px]`}
      ></div>
      <div
        className={`absolute overflow-hidden -z-1 bottom-0 right-40 w-96 h-96 bg-sky-500/50 rounded-full filter blur-[200px]`}
      ></div>
      <div className="absolute top-40 w-full">
        <div className="flex flex-col items-center justify-center">
          {/* next section */}
          <div id="home" className={`flex flex-row z-2 items-center justify-center pt-10 space-x-12`}>
            <div className="space-y-2">
              <h3 className={`text-2xl font-bold text-white`}>NFT Privacy Enhanced</h3>
              <h1 className={`text-6xl font-extrabold text-white max-w-lg`}>Enigma: Elevate NFT Exclusivity</h1>
              <p className={`text-lg text-slate-400 max-w-lg mt-2`}>
              Enigma revolutionizes NFTs, introducing Secret NFTs that redefine digital ownership. Think of each NFT as a book with a public cover and exclusive private pages. Unlock the allure of collections, where buyers alone access hidden art, photos, videos, music, and personal data. Join Enigma to transform NFTs into a realm of privacy and exclusivity.
              </p>
              <div className="flex order-2 text-md pt-4">
                <button
                  onClick={handleClick}
                  type="button"
                  className="text-xl text-white bg-gradient-to-b from-sky-400 to-fuchsia-600 focus:ring-4 focus:outline-none focus:ring-blue-700 font-bold rounded-xl py-5 px-12 text-center mr-0"
                >
                  Launch App
                </button>
              </div>
            </div>
            <Image src={HEADERHERO} alt="enigma-hero" />
          </div>
          {/* next section */}
          <div className="bg-sky-500 shadow-xl shadow-sky-500/20 py-8 px-12 rounded-3xl shadow-white/40 flex justify-between items-center space-x-12 text-white font-semibold text-3xl mt-24">
            <div className="flex flex-row items-center">
              <CheckIcon className="h-12 w-auto" />
              <span className="whitespace-no-wrap">Multi-chain Support</span>
            </div>
            <div className="flex flex-row items-center">
              <CheckIcon className="h-12 w-auto" />
              <span className="whitespace-no-wrap">ERC 721</span>
            </div>
            <div className="flex flex-row items-center">
              <CheckIcon className="h-12 w-auto" />
              <span className="whitespace-no-wrap">IP Protection</span>
            </div>
          </div>
          {/* next section */}
          <div id="features" className={`flex flex-row pt-24 space-x-12`}>
            <div className={`flex flex-col`}>
              <h2 className={`text-4xl font-extrabold text-white`}>Features of Enigma</h2>
              <div className="flex order-2 text-md pt-4">
                <button
                  onClick={handleClick}
                  type="button"
                  className="text-2xl text-white bg-gradient-to-b from-sky-400 to-fuchsia-600 focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-3xl py-6 px-16 text-center mr-0"
                >
                  Launch App
                </button>
              </div>
            </div>
            <div className="pt-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="150" height="2" viewBox="0 0 150 2" fill="none">
                <rect
                  opacity="0.9"
                  width="2"
                  height="150"
                  transform="matrix(0 -1 -1 0 150 2)"
                  fill="url(#paint0_linear_0_236)"
                />
                <defs>
                  <linearGradient id="paint0_linear_0_236" x1="1" y1="0" x2="1" y2="50" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2DA6FF" stop-opacity="0" />
                    <stop offset="0.40625" stop-color="#2DA6FF" />
                    <stop offset="0.604167" stop-color="#D524FF" />
                    <stop offset="1" stop-color="#D524FF" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="space-y-8">
              <div
                className={`block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-white/30 backdrop-blur-md border border-slate-500 hover:bg-white/40 overflow-clip`}
              >
                <div className="absolute top-[-30px] left-0 w-full h-8 bg-fuchsia-400/60 rounded-full filter blur-[25px]"></div>
                <div className="absolute top-[120px] left-0 w-full h-8 bg-sky-400/60 rounded-full filter blur-[25px]"></div>
                <div className="flex flex-row justify-between pb-2">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Mint</h5>
                  <ArrowRightIcon className="h-10 text-white" />
                </div>
                <p className="font-normal text-gray-200">
                Enigma's minting feature empowers users to effortlessly create unique, secret NFTs. This user-friendly process allows you to encrypt and store content securely within NFTs, adding layers of depth and exclusivity to your digital collectibles, event tickets, and intellectual property protection{" "}
                </p>
              </div>
              <div
                className={`block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-white/30 backdrop-blur-md border border-slate-500 hover:bg-white/40 overflow-clip`}
              >
                <div className="absolute top-[-30px] left-0 w-full h-8 bg-fuchsia-400/60 rounded-full filter blur-[25px]"></div>
                <div className="absolute top-[120px] left-0 w-full h-8 bg-sky-400/60 rounded-full filter blur-[25px]"></div>
                <div className="flex flex-row justify-between pb-2">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Unlock Secret NFTs</h5>
                  <ArrowRightIcon className="h-10 text-white" />
                </div>
                <p className="font-normal text-gray-200">
                Enigma revolutionizes digital ownership. Owners can unlock secret NFT content, revealing exclusive artwork, VIP event passes, or confidential documents. {" "}
                </p>
              </div>
              <div
                className={`block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-white/30 backdrop-blur-md border border-slate-500 hover:bg-white/40 overflow-clip`}
              >
                <div className="absolute top-[-30px] left-0 w-full h-8 bg-fuchsia-400/60 rounded-full filter blur-[25px]"></div>
                <div className="absolute top-[120px] left-0 w-full h-8 bg-sky-400/60 rounded-full filter blur-[25px]"></div>
                <div className="flex flex-row justify-between pb-2">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Transfer</h5>
                  <ArrowRightIcon className="h-10 text-white" />
                </div>
                <p className="font-normal text-gray-200">
                Enigma simplifies the transfer of NFTs from one individual to another. Securely and smoothly share the hidden gems within your NFTs, ensuring that only the intended recipient can unlock the exclusive content.{" "}
                </p>
              </div>
            </div>
          </div>
          {/* next section */}
          <div
            className={`absolute overflow-hidden -z-1 top-[1500px] left-[280px] w-[900px] h-28 bg-sky-500/50 rounded-full filter blur-[180px]`}
          ></div>
          <div id="view" className="w-full bg-enigma/90 backdrop-blur-md py-16 my-20 z-10">
            <div className="flex flex-col items-center space-y-12">
              <h2 className={`text-4xl font-extrabold text-white`}>Explore Secret NFT Examples</h2>
              <ExampleNFTS />
            </div>
          </div>
          <div
            className={`absolute overflow-hidden -z-1 top-[1900px] right-25 w-[900px] h-28 bg-fuchsia-400/50 rounded-full filter blur-[180px]`}
          ></div>
          <Image src={BLOCK1} alt={"a block"} width={120} className="absolute z-20 top-[1970px]" />
          {/* next section */}
          <div
            id="community"
            className={`w-8/12 flex justify-center items-center mb-24 mt-10 relative rounded-xl bg-slate-400/30 bg-blur-md p-16 overflow-clip`}
          >
            <div className="flex flex-row items-center space-x-8">
              <div className={`block`}>
                <div className="absolute top-[0px] left-0 w-full h-8 bg-fuchsia-400/60 rounded-full filter blur-[35px]"></div>
                <div className="absolute top-[260px] left-0 w-full h-8 bg-sky-400/60 rounded-full filter blur-[35px]"></div>
                <h2 className={`text-4xl font-extrabold text-white`}>Join The Community</h2>
                <div className="flex flex-row space-x-8">
                  <div className="flex order-2 text-md pt-4">
                    <button
                      type="button"
                      className="text-lg text-white bg-gradient-to-b from-sky-400 to-fuchsia-600 focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-xl py-4 px-10 text-center mr-0"
                    >
                      Discord
                    </button>
                  </div>
                  <div className="flex order-2 text-md pt-4">
                    <button
                      type="button"
                      className="text-lg text-white bg-gradient-to-b from-sky-400 to-fuchsia-600 focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-xl py-4 px-10 text-center mr-0"
                    >
                      Telegram
                    </button>
                  </div>
                  <div className="flex order-2 text-md pt-4">
                    <button
                      type="button"
                      className="text-lg text-white bg-gradient-to-b from-sky-400 to-fuchsia-600 focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-xl py-4 px-10 text-center mr-0"
                    >
                      ETHGlobal Page
                    </button>
                  </div>
                </div>
              </div>
              <Image src={CAT} alt={"sign up cat"} width={150} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
