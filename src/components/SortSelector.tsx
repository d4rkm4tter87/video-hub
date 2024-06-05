import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string | null;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "Date (asc.)" },
    { value: "Date (desc.)" },
    { value: "Name (asc.)" },
    { value: "Name (desc.)" },
    { value: "Genre (asc.)" },
    { value: "Genre (desc.)" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton marginLeft={3} as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.value || "Name (asc.)"}
      </MenuButton>

      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.value}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
