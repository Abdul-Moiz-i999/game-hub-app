import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaApple,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "./GameGrid";
import { IconType } from "react-icons";

const PlatformIconList = ({ platforms }: { platforms: Platform[] }) => {
  console.log(platforms);
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    linux: FaLinux,
    mac: FaApple,

    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,

    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.name}
          as={iconMap[platform.slug]}
          color="gray.500"
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
