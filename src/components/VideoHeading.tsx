import { Heading } from "@chakra-ui/react";

interface Props {
  genre: string | null;
  sortOrder: string | null;
}

const VideoHeading = ({ genre, sortOrder }: Props) => {
  const heading = `${genre !== null ? genre : ""} ${
    sortOrder !== null ? sortOrder : ""
  }`;
  return (
    <Heading as="h1" margin={3}>
      {heading}
    </Heading>
  );
};

export default VideoHeading;
