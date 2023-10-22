import { Web3Storage, getFilesFromPath, File } from 'web3.storage'
import * as dotenv from 'dotenv';

async function upload() {
    const WEB3STORAGE_TOKEN = process.env.WEB3STORAGE_TOKEN;
    const web3Storage = new Web3Storage({ token: WEB3STORAGE_TOKEN || '' });
    if (!WEB3STORAGE_TOKEN) {
        console.log('WEB3STORAGE_TOKEN not found');
    }
    const files = await getFilesFromPath('./images');
    console.log(`Uploading ${files.length} files to Web3.Storage...`)
    const cid = await web3Storage.put(files, { wrapWithDirectory: false });
    console.log('Deployed to Web3.Storage!');
    console.log('Root cid: ', cid);
    console.log(`Gateway url: https://${cid}.ipfs.dweb.link`);
}

dotenv.config();
upload();
