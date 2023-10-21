import { AppNavWrapper } from "~~/components/app/Nav";
import SearchBar from '~~/components/UI/search';
import { useCallback, useEffect, useRef, useState } from "react";

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
    </AppNavWrapper>
    
  );
}
