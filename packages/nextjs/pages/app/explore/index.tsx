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

const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRftTui_7exND3rQDJvW4NfIDeD4bOVG6oweIp16nBJjw&s";
const searchResults: result[] = [
    {
      image: defaultImage,
      collection: 'Collection 1',
      tokenID: 'Token123',
      address: '0x1234567890abcdef',
      chain: 'Ethereum',
      price: '$100',
    },
    {
      image: defaultImage,
      collection: 'Collection 2',
      tokenID: 'Token456',
      address: '0xabcdef1234567890',
      chain: 'Ethereum',
      price: '$200',
    },
    {
      image: defaultImage,
      collection: 'Collection 3',
      tokenID: 'Token789',
      address: '0x7890abcdef123456',
      chain: 'Ethereum',
      price: '$300',
    },
];

export default function HomeDashboard() {
  const [search, setSearch] = useState(''); 

  function handleClick(id: string) {
    // Mint an NFT

  }
  console.log(searchResults.length);
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
              src={result.image}
              className='w-full h-24 object-cover mb-4'
              />
              <p className='font-bold mb-1'>{result.collection}</p>
              <p className='text-sm mb-1'> {result.tokenID} </p>
              <p className='text-sm mb-6'>
              {result.address} <br/> {result.chain} <br/> {result.price}
              </p>
              <Button type='link' hierarchy='primary' classes='w-full' onClick={() => handleClick(result.tokenID)}>
                Mint
              </Button>
          </div>
          ))}
      </div>
    </AppNavWrapper>
  );
}
