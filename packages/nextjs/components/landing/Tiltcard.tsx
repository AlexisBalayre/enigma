import { ReactNode, useEffect, useRef } from "react";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import VanillaTilt from "vanilla-tilt";

const OPTIONS = {
  scale: 1,
  speed: 300,
  max: 15,
  glare: true,
  "max-glare": 0.4,
};

type CardProps = {
  source: any;
  link: Url;
};

export function Card({ source, link }: CardProps) {
  const tilt = useRef(null);

  useEffect(() => {
    if (tilt.current !== null) {
      return VanillaTilt.init(tilt.current, OPTIONS);
    }
  }, []);

  return (
    <Link href={link} target="_blank">
      <div ref={tilt} className="flex w-28 h-28 justify-center items-center rounded-lg bg-slate-400/30">
        <Image src={source} alt={"example nft"} />
      </div>
    </Link>
  );
}
