import React, { useCallback, useState } from "react";
import encryptWithLit from "../model/LitEncryption";
import { LitEncryptionDTO } from "../model/LitEncryption";

const CaesarCipher = {
  encrypt: (text: string, shift: number) => {
    return text
      .split("")
      .map(char => {
        const code = char.charCodeAt(0);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
          const base = code < 97 ? 65 : 97;
          return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
      })
      .join("");
  },
  decrypt: (text: string, shift: number) => {
    return CaesarCipher.encrypt(text, 26 - shift);
  },
};

const inputStyle = {
  color: "black",
};

const EncryptDecryptComponent: React.FC = () => {
  const [decryptText, setDecryptText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [uriStr, setUriStr] = useState("");
  const [encryptedUri, setEncryptedUri] = useState("");

  const encryptUriHandler = useCallback(async () => {
    const litEncryption: LitEncryptionDTO = await encryptWithLit(uriStr, "sepolia");
    setEncryptedUri(litEncryption.ciphertext);
  }, [uriStr]);

  return (
    <div>
      <div>
        <input
          style={inputStyle}
          value={uriStr}
          onChange={e => setUriStr(e.target.value)}
          placeholder="Text to encrypt"
        />
        <button onClick={encryptUriHandler}>Encrypt</button>
      </div>
      <div>{encryptedUri}</div>

      <div>
        <input
          style={inputStyle}
          value={decryptText}
          onChange={e => setDecryptText(e.target.value)}
          placeholder="Text to decrypt"
        />
        <button onClick={() => setDecryptedText(CaesarCipher.decrypt(decryptText, 3))}>Decrypt</button>
      </div>
      <div>{decryptedText}</div>
    </div>
  );
};

export default EncryptDecryptComponent;
