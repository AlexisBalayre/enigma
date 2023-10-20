import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import CopyToClipboard from "react-copy-to-clipboard";
import { useDisconnect, useSwitchNetwork } from "wagmi";
import {
  ArrowLeftOnRectangleIcon,
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { Address, Balance, BlockieAvatar } from "~~/components/scaffold-eth";
import { useAutoConnect, useNetworkColor } from "~~/hooks/scaffold-eth";
import { getTargetNetwork } from "~~/utils/scaffold-eth";

/**
 * Custom Wagmi Connect Button (watch balance + custom design)
 */
export const RainbowKitCustomConnectButton = () => {
  useAutoConnect();
  const networkColor = useNetworkColor();
  const configuredNetwork = getTargetNetwork();
  const { disconnect } = useDisconnect();
  const { switchNetwork } = useSwitchNetwork();
  const [addressCopied, setAddressCopied] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;

        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="flex flex-row space-x-2 rounded-md bg-sky-500 px-12 py-5"
                    onClick={openConnectModal}
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
                        d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                      />
                    </svg>
                    <span>Connect Wallet</span>
                  </button>
                );
              }

              if (chain.unsupported || chain.id !== configuredNetwork.id) {
                return (
                  <div className="relative rounded-md bg-sky-500 px-12 py-5">
                    {toggle && (
                      <ul
                        tabIndex={0}
                        className="absolute top-[-120px] left-4 -z-1 p-2 px-6 mt-4 bg-sky-700 rounded-md"
                      >
                        <li>
                          <button
                            className="flex py-3 gap-3"
                            type="button"
                            onClick={() => switchNetwork?.(configuredNetwork.id)}
                          >
                            <ArrowsRightLeftIcon className="h-6 w-4 ml-2 sm:ml-0" />
                            <span className="whitespace-nowrap">
                              Switch to <span style={{ color: networkColor }}>{configuredNetwork.name}</span>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button className="text-error flex gap-3 py-3" type="button" onClick={() => disconnect()}>
                            <ArrowLeftOnRectangleIcon className="h-6 w-4 ml-2 sm:ml-0" /> <span>Disconnect</span>
                          </button>
                        </li>
                      </ul>
                    )}
                    <button
                      tabIndex={0}
                      className="flex flex-row items-center space-x-2 z-20"
                      type="button"
                      onClick={() => {
                        setToggle(ex => !ex);
                      }}
                    >
                      <span>Wrong Network!</span>
                      {toggle ? (
                        <ChevronUpIcon className="h-6 w-4 ml-2" />
                      ) : (
                        <ChevronDownIcon className="h-6 w-4 ml-2" />
                      )}
                    </button>
                  </div>
                );
              }

              return (
                <div className="px-2 flex flex-col justify-end items-center space-y-4">
                  <div>
                    {toggle && (
                      <ul className="p-2 mt-2 bg-sky-700 rounded-md gap-1">
                        <li>
                          {addressCopied ? (
                            <div className="flex gap-3 py-3">
                              <CheckCircleIcon className="text-xl h-6 w-4 ml-2" aria-hidden="true" />
                              <span>Copy address</span>
                            </div>
                          ) : (
                            <button type="button">
                              <CopyToClipboard
                                text={account.address}
                                onCopy={() => {
                                  setAddressCopied(true);
                                  setTimeout(() => {
                                    setAddressCopied(false);
                                  }, 800);
                                }}
                              >
                                <div className="flex gap-3 py-3">
                                  <DocumentDuplicateIcon className="text-xl h-6 w-4 ml-2" aria-hidden="true" />
                                  <span>Copy address</span>
                                </div>
                              </CopyToClipboard>
                            </button>
                          )}
                        </li>
                        <li>
                          <button className="flex gap-3 py-3 text-error" type="button" onClick={() => disconnect()}>
                            <ArrowLeftOnRectangleIcon className="h-6 w-4 ml-2" />
                            <span>Disconnect</span>
                          </button>
                        </li>
                      </ul>
                    )}
                    <button
                      tabIndex={0}
                      className="flex flex-row bg-sky-500 rounded-md px-12 py-5"
                      type="button"
                      onClick={() => {
                        setToggle(ex => !ex);
                      }}
                    >
                      <BlockieAvatar address={account.address} size={30} ensImage={account.ensAvatar} />
                      <span className="ml-2 mr-1">{account.displayName}</span>
                      {toggle ? (
                        <ChevronUpIcon className="h-6 w-4 ml-2" />
                      ) : (
                        <ChevronDownIcon className="h-6 w-4 ml-2" />
                      )}
                    </button>
                  </div>
                  <div className="flex flex-col items-center mr-1">
                    <Balance address={account.address} />
                    <span className="text-xs" style={{ color: networkColor }}>
                      {chain.name}
                    </span>
                  </div>
                </div>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};
