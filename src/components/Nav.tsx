import { HStack, Image, Box } from "@chakra-ui/react";
import logo from "../assets/logo1.png";
import ColorModeSwitch from "./ColorModeSwitch";
import Login from "./Login";

const Nav = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <Login />
      <Box flexGrow={1} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Nav;
