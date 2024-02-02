import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';

import { SearchResultProps } from './InputSearch.types';
import {
  InputSearchContainer,
  Input,
  VerticalDivider,
  SearchButton,
  SearchResultsContainer,
  SearchResultItem,
  RemoveButton,
} from './InputSearch.styles';

const InputSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResultProps[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const newSearchResults = [
      { id: Date.now().toString(), term: searchTerm },
      ...searchResults,
    ];

    Cookies.set('searchTerms', JSON.stringify(newSearchResults));

    setSearchResults(newSearchResults);
    setSearchTerm('');
  };

  const handleRemoveSearchTerm = (id: string) => {
    const updatedSearchResults = searchResults.filter(
      (result) => result.id !== id,
    );

    Cookies.set('searchTerms', JSON.stringify(updatedSearchResults));

    setSearchResults(updatedSearchResults);
  };

  useEffect(() => {
    const storedSearchTerms = Cookies.get('searchTerms');
    if (storedSearchTerms) {
      const parsedSearchTerms = JSON.parse(
        storedSearchTerms,
      ) as SearchResultProps[];
      setSearchResults(parsedSearchTerms);
    }
  }, []);

  return (
    <InputSearchContainer>
      <Input
        type="text"
        placeholder="Buscar produtos, marcas e muito mais..."
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setShowResults(true)}
        onBlur={() => setTimeout(() => setShowResults(false), 100)}
      />
      <VerticalDivider />
      <SearchButton onClick={handleSearch}>
        <Image
          src="/images/icon-search.svg"
          alt="image search item"
          width={30}
          height={30}
        />
      </SearchButton>
      {showResults && searchResults.length > 0 && (
        <SearchResultsContainer>
          {searchResults.map((result) => (
            <SearchResultItem key={result.id}>
              {result.term}
              <RemoveButton onClick={() => handleRemoveSearchTerm(result.id)}>
                <Image
                  src="/images/icon-remove.svg"
                  alt="image remove item"
                  width={24}
                  height={24}
                />
              </RemoveButton>
            </SearchResultItem>
          ))}
        </SearchResultsContainer>
      )}
    </InputSearchContainer>
  );
};

export default InputSearch;
