import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSort: (sortLabel: string) => void;
  sortingBy: string;
}

const SortSelector = ({ onSelectSort, sortingBy }: Props) => {
  const sorting = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const sortOrder = sorting.find((item) => item.value === sortingBy);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {sortOrder?.label || "Relavance"}
      </MenuButton>
      <MenuList>
        {sorting.map(({ value, label }) => (
          <MenuItem
            key={value}
            value={value}
            onClick={() => onSelectSort(value)}
          >
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
