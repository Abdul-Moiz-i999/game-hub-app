import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useContext, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { ContextProps, SearchContext } from "../App";

interface Props {
  onSearchSubmit: (searchValue: string) => void;
}

const Searchbar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { onSearchSubmit } = useContext(SearchContext) as ContextProps;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("first");
    if (inputRef.current) onSearchSubmit(inputRef.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />

        <Input
          ref={inputRef}
          borderRadius={20}
          type="text"
          variant="filled"
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  );
};

export default Searchbar;
