import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchbar from "./Searchbar";

interface Props {
  onSearchSubmit: (searchValue: string) => void;
}

function Navbar({ onSearchSubmit }: Props) {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <Searchbar onSearchSubmit={onSearchSubmit} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
