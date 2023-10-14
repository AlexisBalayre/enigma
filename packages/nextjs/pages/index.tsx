import type { NextPage } from "next";
import EncryptDecryptComponent from "~~/components/EncryptDecryptWidget";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <EncryptDecryptComponent />
    </>
  );
};

export default Home;
