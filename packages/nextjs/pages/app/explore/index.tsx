import { AppNavWrapper } from "~~/components/app/Nav";
import SearchBar from '~~/components/UI/search';
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from '~~/components/UI/button';

type result = {
    image: string;
    collection: string;
    tokenID: string;
    address: string;
    chain: string;
    price: string;
}

const defaultImage = "test.png";
const searchResults = {};

export default function HomeDashboard() {
  const [search, setSearch] = useState('');

  function handleClick(id: string) {
    // Mint an NFT
  }

  return (
    <AppNavWrapper>
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search for NFTs'
        classes='mb-12'
      />
      <div className='grid grid-cols-3 gap-6'>
          {searchResults.map((result, i) => (
          <div className='bg-white rounded-lg p-4' key={i}>
              <img
              src={result.image.url}
              alt={result.name}
              className='w-full h-24 object-cover mb-4'
              />
              <p className='font-bold mb-1'>{result.collection}</p>
              <p className='text-sm mb-1'> {result.tokenID} </p>
              <p className='text-sm mb-6'>
              {result.address} {result.chain} {result.price}
              </p>
              <Button type='link' hierarchy='primary' classes='w-full' onClick={handleClick(result.tokenID)}>
                Mint
              </Button>
          </div>
          ))}
      </div>
    </AppNavWrapper>
  );
}
