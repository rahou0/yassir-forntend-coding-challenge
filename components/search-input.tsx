import { useQueryState } from 'next-usequerystate';
import React from 'react'
import { Input } from './ui/input';
import { debounce } from "lodash"

interface SearchInputProps {
  placeholder: string;
}
function SearchInput({ placeholder }: SearchInputProps) {
  const [search, setSearch] = useQueryState('search', { history: 'push' });
  const [inputValue, setInputValue] = React.useState(search ?? '');

  // Update the state when input changes
  const handleFilterChange = (e: any) => {
    const value = e.target.value ?? "";
    setInputValue(value);
  };


  const applyFilterWithDebounce = React.useCallback(debounce((query) => setSearch(query), 500), []);

  React.useEffect(() => {
    applyFilterWithDebounce(inputValue)
  }, [inputValue]);

  React.useEffect(() => {
    if(!search){
      setInputValue('');
    } 
  }, [search]);

  return (
    <Input
      placeholder={placeholder ?? "Type search"}
      value={inputValue}
      onChange={handleFilterChange}
      className="max-w-lg min-w-36"
    />)
}

export default SearchInput