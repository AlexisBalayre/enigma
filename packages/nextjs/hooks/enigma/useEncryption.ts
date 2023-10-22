import { useState } from "react";
import encryptWithLit from "../../model/LitEncryption";

function useEncryption(inputUri: string, chain: string) {
  const [encryptText, setEncryptText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");

  setEncryptedText(encryptWithLit(text));

  return { encryptedText, setEncryptedText, encryptText, setEncryptText };
}

export default useEncryption;
