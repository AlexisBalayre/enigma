import { Card } from "~~/components/landing/Tiltcard";
import ANGLENFT from "~~/public/assets/angel 1.png";
import CROWNFT from "~~/public/assets/discord 10.png";
import DIAMONDNFT from "~~/public/assets/discord 15.png";
import FISHNFT from "~~/public/assets/fish 1.png";

export function ExampleNFTS() {
  return (
    <div className="text-white text-center font-semibold text-3xl">
      <span>ETH Mainnet</span>
      <div className={`grid grid-cols-6 gap-6 py-8`}>
        <Card source={ANGLENFT} link={"https://etherscan.io/"} />
        <Card source={FISHNFT} link={"https://etherscan.io/"} />
        <Card source={DIAMONDNFT} link={"https://etherscan.io/"} />
        <Card source={ANGLENFT} link={"https://etherscan.io/"} />
        <Card source={CROWNFT} link={"https://etherscan.io/"} />
        <Card source={DIAMONDNFT} link={"https://etherscan.io/"} />
      </div>
      <span>Polygon</span>
      <div className={`grid grid-cols-6 gap-6 py-8`}>
        <Card source={ANGLENFT} link={"https://etherscan.io/"} />
        <Card source={FISHNFT} link={"https://etherscan.io/"} />
        <Card source={DIAMONDNFT} link={"https://etherscan.io/"} />
        <Card source={ANGLENFT} link={"https://etherscan.io/"} />
        <Card source={CROWNFT} link={"https://etherscan.io/"} />
        <Card source={DIAMONDNFT} link={"https://etherscan.io/"} />
      </div>
    </div>
  );
}
