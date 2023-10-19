import * as LitJsSdk from "@lit-protocol/lit-node-client";

const client = new LitJsSdk.LitNodeClient({
  litNetwork: "cayenne",
});
await client.connect();

class Lit {
  litNodeClient: any;

  async connect() {
    await client.connect();
    this.litNodeClient = client;
  }

  async encryptString() {
    if (!this.litNodeClient) {
      await this.connect();
    }
  }
}

export default new Lit();
