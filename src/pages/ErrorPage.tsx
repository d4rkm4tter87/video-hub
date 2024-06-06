import { Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Nav from "../components/Nav";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Nav />
      <Heading margin={100} textAlign="center">
        {isRouteErrorResponse(error)
          ? "Page not found."
          : "An unexpected error occured."}
      </Heading>
    </>
  );
};

export default ErrorPage;
