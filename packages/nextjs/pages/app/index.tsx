import { AppNavWrapper } from "~~/components/app/Nav";
import SearchBar from '~~/components/UI/search';
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from '~~/components/UI/button';

type result = {
  name: string;
  address: string;
  URL: string;
}

const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRftTui_7exND3rQDJvW4NfIDeD4bOVG6oweIp16nBJjw&s";
const searchResults: result[] = [
  {
    name: "Item 1",
    address: "0x1234567890abcdef",
    URL: defaultImage
  },
  {
    name: "Item 2",
    address: "0xabcdef1234567890",
    URL: defaultImage
  },
  {
    name: "Item 3",
    address: "0x7890abcdef123456",
    URL: defaultImage
  },
];

// Dashboard: All NFTS minted
export default function HomeDashboard() {
  const [search, setSearch] = useState('');
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
              src={result.URL}
              className='w-full h-24 object-cover mb-4'
              />
              <p className='font-bold mb-1'>{result.name}</p>
              <p className='text-sm mb-6'> {result.address} </p>
              <Button type='link' hierarchy='primary' classes='w-full' onClick={() => handleClick(result.tokenID)}>
                Reveal
              </Button>
          </div>
          ))}
      </div>
    </AppNavWrapper>
    
  );
}
