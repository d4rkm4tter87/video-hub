import { HStack, Image, Box } from "@chakra-ui/react";
import logo from "../assets/logo1.png";
import logo2 from "../assets/trailers4u.png";
import ColorModeSwitch from "./ColorModeSwitch";
import Login from "./Login";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo2} width="700px" />
      </Link>
      <Box flexGrow={1} />
      <Login />
    </HStack>
  );
};

export default Nav;
