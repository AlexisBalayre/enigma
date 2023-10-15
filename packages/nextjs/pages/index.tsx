import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { LandingNav } from "~~/components/landing/nav";

const Home: NextPage = () => {
  return (
    <div>
      <LandingNav />
    </div>
  );
};

export default Home;
