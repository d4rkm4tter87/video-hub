import { useParams } from "react-router-dom";
import useVideo from "../hooks/useVideo";
import { Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

const DetailPage = () => {
  const { id } = useParams();
  const v = useVideo(id!);

  console.log(v.video);
  return (
    <>
      {v.video && (
        <>
          <Heading>
            {v.video.title} ({v.video.releaseDate})
          </Heading>
          <Text>Genre: {v.video.genre}</Text>
        </>
      )}
    </>
  );
};

export default DetailPage;
