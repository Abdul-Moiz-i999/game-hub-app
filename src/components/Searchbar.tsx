import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearchSubmit: (searchValue: string) => void;
}

const Searchbar = ({ onSearchSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

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
