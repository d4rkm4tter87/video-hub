import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Nav />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
